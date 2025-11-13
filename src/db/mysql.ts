import type { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export function mysqlConfig(configService: ConfigService): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: configService.get<string>('MYSQL_HOST'),
    port: configService.get<number>('MYSQL_PORT', 3306),
    username: configService.get<string>('MYSQL_USER'),
    password: configService.get<string>('MYSQL_PASSWORD'),
    database: configService.get<string>('MYSQL_DATABASE'),
    entities: [],
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: configService.get<boolean>('MYSQL_SYNCHRONIZE', false), // 默认为 false
  }
}
