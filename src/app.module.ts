import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { mysqlConfig } from './db/mysql'

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: mysqlConfig,
  })],
})
export class AppModule {}
