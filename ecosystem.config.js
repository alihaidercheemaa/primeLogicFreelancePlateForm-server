module.exports = {
  apps: [
    {
      name: "primelogicsolutionbackendserver", // Name of the PM2 process
      script: "./dist/src/server.js", // Path to your server file
      instances: 1, // Number of instances (1 for single instance)
      autorestart: true, // Automatically restart if the process crashes
      watch: false, // Watch for file changes (optional)
      env: {
        NODE_ENV: "production", // Set environment to production
      },
    },
  ],
};
