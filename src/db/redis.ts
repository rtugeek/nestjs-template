import { RedisModuleOptions } from '@liaoliaots/nestjs-redis'
import { ConfigService } from '@nestjs/config'

export function redisConfig(configService: ConfigService): RedisModuleOptions {
  return {
    config: {
      host: configService.get<string>('REDIS_HOST'),
      port: configService.get<number>('REDIS_PORT', 3306),
      password: configService.get<string>('REDIS_PASSWORD'),
      db: configService.get<number>('REDIS_DB', 0),
    },
  }
}
