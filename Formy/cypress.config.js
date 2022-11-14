const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5n5uaq',
  e2e: {
    baseUrl: 'https://formy-project.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
