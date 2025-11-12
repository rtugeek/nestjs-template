import type { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const mysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'your-mysql-host',
  port: 3306,
  username: 'name',
  password: 'password',
  database: 'db',
  entities: [], // Add your entities here
  synchronize: true, // Set to false in production
}
