/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer, SchemaDirectiveVisitor } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import { buildSchemaSync } from 'type-graphql';

import { Context } from 'types';
import { AccessKeyResolver } from 'accessKey';
import { DeviceResolver } from 'device';
import { AuthenticationDirective, AuthorizationDirective } from 'directives';
import { NanoleafAuthTokenResolver, NanoleafStateResolver } from 'nanoleaf';
import { PaletteResolver } from 'palettes';
import { UserResolver } from 'user';
import { createToken, getUserFromToken } from 'utils';

dotenv.config({ path: `${__dirname}/.env` });

const prisma = new PrismaClient();

(global as any).schema =
  (global as any).schema ||
  buildSchemaSync({
    // emitSchemaFile: true,
    resolvers: [
      AccessKeyResolver,
      DeviceResolver,
      NanoleafAuthTokenResolver,
      NanoleafStateResolver,
      PaletteResolver,
      UserResolver,
    ],
  });
const schema = (global as any).schema;

// Because the schema is built by TypeGraphQL, we need to register
// any directives through apollo-server using the below
SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
  authenticated: AuthenticationDirective,
  authorized: AuthorizationDirective,
});

const localServer = new ApolloServer({
  schema,
  //* Prisma must be provided to other resolvers through context
  context: async ({ req }): Promise<Context> => ({
    prisma,
    user: await getUserFromToken(prisma, req.headers.authorization),
    createToken,
  }),
});

const lambdaServer = new ApolloServerLambda({
  introspection: true,
  schema,
  //* Prisma must be provided to other resolvers through context
  context: async ({ express }): Promise<Context> => ({
    prisma,
    user: await getUserFromToken(prisma, express.req.headers.authorization),
    createToken,
  }),
});

export { lambdaServer, localServer };
