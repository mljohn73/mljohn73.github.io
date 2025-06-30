import { Client } from 'pg';

export type PostgresClient = {
    client: Client,
    start: () => {},
    write: () => {},
    read: () => {}
  };
  