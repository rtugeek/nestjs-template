import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { GlobalExceptionFilter } from './exception/GlobalExceptionFilter'

process.on('uncaughtException', () => {

})

async function bootstrap() {
  const origin: string[] = []
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin,
    methods: 'GET,HEAD,PUT,PATCH,OPTIONS,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  })
  const configService = app.get(ConfigService)

  const baseUrl = configService.get<string>('SERVER_BASE_URL') ?? '/api'
  const port = configService.get<number>('SERVER_PORT') || 3000

  const logger = new Logger('Bootstrap')
  logger.log(`Base URL: ${baseUrl}`)
  logger.log(`Server is running on port: ${port}`)

  app!.useGlobalFilters(new GlobalExceptionFilter())
  app.setGlobalPrefix(baseUrl)

  await app.listen(port)
}
bootstrap()
