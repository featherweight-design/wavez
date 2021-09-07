/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createLambdaServer } from './bundle/server';

const server = createLambdaServer();

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
exports.handler = server.createHandler();
