/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { lambdaServer } from '../server';

const server = lambdaServer;

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
exports.handler = server.createHandler();
