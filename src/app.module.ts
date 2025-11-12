import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { mysqlConfig } from './db/mysql'

@Module({
  imports: [TypeOrmModule.forRoot(mysqlConfig)],
})
export class AppModule {}
