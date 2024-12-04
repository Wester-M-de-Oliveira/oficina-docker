import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

const typeormConfig = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  synchronize: false,
  migrationsTableName: 'migrations_ms_org_escolar',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  logging: false,
});

export default typeormConfig;
