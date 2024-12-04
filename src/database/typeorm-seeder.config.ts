import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import 'dotenv/config';

const typeormSeederConfig = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  database: process.env.DB_DATABASE || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  synchronize: false,
  migrationsTableName: 'migrations_ms_org_escolar_seeders',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/seeders/**/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
});

export default typeormSeederConfig;
