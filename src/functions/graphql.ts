import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';

import { Context } from 'types';
import { AccessKeyResolver } from 'accessKey';
import { DeviceResolver } from 'device';
// import { AuthenticationDirective, AuthorizationDirective } from 'directives';
import { NanoleafAuthTokenResolver, NanoleafStateResolver } from 'nanoleaf';
import { PaletteResolver } from 'palettes';
import { UserResolver } from 'user';
import { createToken, getUserFromToken } from 'utils';

dotenv.config({ path: `${__dirname}/.env` });

const prisma = new PrismaClient();

async function lambdaFunction() {
  const schema = await buildSchema({
    resolvers: [
      AccessKeyResolver,
      DeviceResolver,
      NanoleafAuthTokenResolver,
      NanoleafStateResolver,
      PaletteResolver,
      UserResolver,
    ],
  });

  const server = new ApolloServerLambda({
    introspection: true,
    schema,
    //* Prisma must be provided to other resolvers through context
    context: async ({ express }): Promise<Context> => ({
      prisma,
      user: await getUserFromToken(prisma, express.req.headers.authorization),
      createToken,
    }),
  });

  // !!! NOTE: return (await ) server.createHandler() won't work !
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  exports.handler = server.createHandler();
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! NOTE: weird but only way to make it work with
// AWS lambda and netlify functions (netlify dev)
// also needs a reload of the page (first load of playground won't work)
void lambdaFunction();
// exports.handler = lambdaFunction wont work
// export { lambdaFunction as handler } wont work
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
