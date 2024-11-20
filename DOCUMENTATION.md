# Documentation des Workflows CI/CD et Qualité pour BobApp

## Introduction

Ce document décrit les étapes d’intégration et de déploiement continus (CI/CD) pour le projet **BobApp**. Les workflows GitHub Actions automatisent les processus de build, de test, et d'analyse de qualité du code. La séparation en trois workflows (CI, Tests, et Qualité) permet une gestion modulaire et optimise l'exécution des étapes indépendantes.

## 1. Workflows GitHub Actions

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

## 2. KPIs (Indicateurs de Performance)

### 1. Couverture du Code :
- **Objectif** : Atteindre un minimum de 70 % de couverture de code pour le back end et 80% pour le front end.
- **Valeur actuelle** : 38% pour le back end et 52% pour front end, ce qui montre la nécessité d'améliorer la couverture des tests.
### 2. Fiabilité et Maintenabilité :
- **Objectif** : Atteindre une note de maintenabilité B ou supérieure et réduire la dette technique.
- **Valeur actuelle** : Note de D, avec 7 problèmes identifiés (6 de maintenabilité, 1 de fiabilité).

## 3. Analyse des Métriques et des Résultats

### Couverture Actuelle :
La couverture de code est de 38% pour le back end et 52% pour front end. SonarCloud prend en compte les deux environnements pour fournir une vue d'ensemble complète. L’objectif de 70 % de couverture n’est pas encore atteint, ce qui justifie des efforts supplémentaires dans les tests unitaires.

### Problèmes de Qualité :
- **Nombre de problèmes** : 6 dans le back end et 4 dans le front end, principalement liés à la maintenabilité.
- **Security Hotspots** : Deux points dans le back end nécessitant une vérification de sécurité, bien qu’ils ne soient pas critiques.

### Retours Utilisateurs et Problèmes Prioritaires :
- **Blocages dans la fonctionnalité de suggestion** : Améliorer la fluidité de cette fonctionnalité.
- **Temps de réponse aux bugs** : Réduire le délai de correction.
- **Manque de communication** : Améliorer la réactivité face aux retours.

### Priorisation des Actions Correctives :
- **Améliorer la couverture de tests** : Augmenter la couverture pour atteindre 70 % pour le back end et 80% pour le front end.
- **Optimiser la maintenabilité** : Réduire la complexité des parties critiques.
- **Sécuriser les hotspots** : Vérification manuelle des "security hotspots".

## Conclusion

Ces workflows assurent une intégration et un déploiement continus pour le projet BobApp, en garantissant la qualité du code et en facilitant le suivi des performances via des analyses automatiques.
