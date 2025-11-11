module.exports = {
  apps: [{
    name: 'NestServer',
    script: './dist/main.js',
    watch: [
      '.',
      'dist',
    ],
    restart_delay: 5000,
    max_restarts: 5,
    autorestart: true,
    env: {
      PORT: 5549,
      BASE_PATH: '/api/monitor',
    },
    ignore_watch: [
      'node_modules',
      'pnpm-lock.yaml',
    ],
  }],
}
