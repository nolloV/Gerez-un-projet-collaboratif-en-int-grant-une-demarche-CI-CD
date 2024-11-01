# Documentation des Workflows CI/CD et Qualité pour BobApp

## Introduction

Ce document décrit les étapes d’intégration et de déploiement continus (CI/CD) pour le projet **BobApp**. Les workflows GitHub Actions automatisent les processus de build, de test, et d'analyse de qualité du code. La séparation en trois workflows (CI, Tests, et Qualité) permet une gestion modulaire et optimise l'exécution des étapes indépendantes.

## Workflows GitHub Actions

### 1. Workflow CI (`ci.yml`)

**Objectif** : Compiler le projet et construire les images Docker pour le déploiement.

**Étapes principales** :
- **Étape de checkout** : Récupère le code source du repository.
- **Configuration du JDK 11** : Installe Java 11 pour compiler le projet back-end.
- **Build Docker pour le back-end et le front-end** : Crée des images Docker pour le back-end et le front-end, puis les pousse sur Docker Hub.

### 2. Workflow Tests (`tests.yml`)

**Objectif** : Exécuter les tests unitaires et générer les rapports de couverture.

**Étapes principales** :
- **Configuration du JDK 11** : Installe Java 11 pour exécuter les tests du back-end.
- **Tests back-end** : Compile et exécute les tests du back-end avec Maven, en générant un rapport de couverture JaCoCo.
- **Tests front-end** : Exécute les tests Angular avec couverture, générant un rapport LCOV.

### 3. Workflow Qualité (`quality.yml`)

**Objectif** : Analyser la qualité du code avec SonarCloud.

**Étapes principales** :
- **Configuration du JDK 17** : Installe Java 17 pour l'analyse SonarCloud.
- **Compilation du projet** : Prépare le code pour l'analyse statique.
- **Analyse SonarCloud** : Exécute l’analyse de qualité du code avec SonarCloud en utilisant les rapports de couverture.

## Conclusion

Ces workflows assurent une intégration et un déploiement continus pour le projet BobApp, en garantissant la qualité du code et en facilitant le suivi des performances via des analyses automatiques.
