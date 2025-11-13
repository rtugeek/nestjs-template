<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">NestJS quick start template</p>

## Built-in integrations

- Code formatting: `eslint` + `@antfu/eslint-config`
- ORM: `TypeORM`
- Database: `MySQL` (via `mysql2` driver)
- Redis: `ioredis` + `@liaoliaots/nestjs-redis`
- Tools: `@nestjs/config` + `@nestjs/schedule` + `@nestjs/throttler`


## Quick start

1. Clone the repo
2. Run `npm install`
3. Configure your environment variables in a `.env` file (see example below)

```dotenv
SERVER_PORT=5555
SERVER_BASE_URL=/api/v1

MYSQL_HOST=TODO
MYSQL_PORT=3306
MYSQL_USER=TODO
MYSQL_PASSWORD=TODO
MYSQL_DATABASE=TODO
MYSQL_SYNCHRONIZE=true


REDIS_HOST=TODO
REDIS_PORT=6379
REDIS_PASSWORD=TODO
REDIS_DB=TODO
```

4. Run `npm run start:dev`