/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import { buildSchemaSync } from 'type-graphql';

import { Context } from 'server/types';
import { AccessKeyResolver } from 'server/accessKey';
import { DeviceResolver } from 'server/device';
// import { AuthenticationDirective, AuthorizationDirective } from 'server/directives';
import {
  NanoleafAuthTokenResolver,
  NanoleafStateResolver,
} from 'server/nanoleaf';
import { PaletteResolver } from 'server/palettes';
import { UserResolver } from 'server/user';
import { createToken, getUserFromToken } from 'server/utils';

dotenv.config({ path: `${__dirname}/.env` });

const prisma = new PrismaClient();

// if (!(global as any).schema) {
//   (global as any).schema = buildSchemaSync({
//     // emitSchemaFile: true,
//     resolvers: [
//       AccessKeyResolver,
//       DeviceResolver,
//       NanoleafAuthTokenResolver,
//       NanoleafStateResolver,
//       PaletteResolver,
//       UserResolver,
//     ],
//   });
// }
// const schema = (global as any).schema;

const schema = buildSchemaSync({
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

// Because the schema is built by TypeGraphQL, we need to register
// any directives through apollo-server using the below
// SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
//   authenticated: AuthenticationDirective,
//   authorized: AuthorizationDirective,
// });

const createLocalServer = (): typeof ApolloServer.prototype =>
  new ApolloServer({
    schema,
    //* Prisma must be privided to other resolvers through context
    context: async ({ req }): Promise<Context> => ({
      prisma,
      user: await getUserFromToken(prisma, req.headers.authorization),
      createToken,
    }),
  });

const createLambdaServer = (): typeof ApolloServerLambda.prototype =>
  new ApolloServerLambda({
    schema,
    //* Prisma must be privided to other resolvers through context
    context: async ({ express }): Promise<Context> => ({
      prisma,
      user: await getUserFromToken(prisma, express.req.headers.authorization),
      createToken,
    }),
  });

export { createLambdaServer, createLocalServer };
