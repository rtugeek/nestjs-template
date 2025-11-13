module.exports = {
  apps: [{
    name: 'NestServer',
    script: './dist/main.js',
    watch: [
      '.',
      'dist',
    ],
    env: {
      'env-file': '.env',
    },
    restart_delay: 5000,
    max_restarts: 5,
    autorestart: true,
    ignore_watch: [
      'node_modules',
      'pnpm-lock.yaml',
    ],
  }],
}
