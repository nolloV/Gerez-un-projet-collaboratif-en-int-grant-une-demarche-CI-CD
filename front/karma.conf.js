// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {},
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/bobapp'),
      subdir: '.',
      reporters: [
        { type: 'html' }, // Rapport HTML pour un affichage local
        { type: 'lcov', subdir: '.' }, // Rapport LCOV pour SonarCloud
        { type: 'text-summary' } // Résumé dans la console
      ],
      check: {
        global: {
          statements: 80, // Exemple: ajustez selon vos besoins
          lines: 80,
          branches: 80,
          functions: 80
        }
      },
      exclude: [
        '**/index.html', 
        '**/main.ts', 
        '**/proxy.config.json', 
        '**/styles.scss', 
        '**/test.ts'
      ] // Exclure les fichiers spécifiques de l'analyse
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false, // Désactivé pour le mode CI/CD
    browsers: ['ChromeHeadless'], // Utilisation de ChromeHeadless
    singleRun: true, // CI/CD nécessite un exécuteur unique
    restartOnFileChange: false
  });
};
