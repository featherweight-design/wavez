import { createLocalServer } from 'server/server';

const PORT = process.env.PORT || 4000;
const server = createLocalServer();

// eslint-disable-next-line no-void
void server.listen(PORT, () =>
  console.log(`🚀  Server running on http://localhost:${PORT}/graphql`)
);
