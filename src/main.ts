import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

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
  app.setGlobalPrefix('/api/v1')
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
