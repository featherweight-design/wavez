/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createLambdaServer } from './bundle/server';

function lambdaFunction() {
  const server = createLambdaServer();

  // !!! NOTE: return (await ) server.createHandler() won't work !
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  exports.handler = server.createHandler();
}

lambdaFunction();
