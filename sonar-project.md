# Clé du projet sur SonarCloud
sonar.projectKey=nolloV_Bobapp
sonar.organization=nollov

# URL du serveur SonarCloud
sonar.host.url=https://sonarcloud.io

# Encodage des sources
sonar.sourceEncoding=UTF-8

# Sources pour le front-end et le back-end
sonar.sources=back/src,front/src
sonar.tests=front/src/**/*.spec.ts  # Chemin des fichiers de tests uniquement (Angular)

# Rapports de couverture pour le back-end
sonar.java.binaries=back/target/classes
sonar.junit.reportPaths=back/target/surefire-reports
sonar.coverage.jacoco.xmlReportPaths=back/target/site/jacoco/jacoco.xml

# Rapport de couverture pour le front-end
sonar.typescript.lcov.reportPaths=front/coverage/bobapp/lcov.info

# Exclusion des fichiers non nécessaires (exemple : polyfills)
sonar.exclusions=**/polyfills.ts,**/*.module.ts
