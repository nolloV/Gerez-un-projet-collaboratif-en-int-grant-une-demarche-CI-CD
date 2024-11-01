# Documentation des Workflows CI/CD et Qualité pour BobApp

## Introduction

Ce document décrit les étapes d’intégration et de déploiement continus (CI/CD) pour le projet **BobApp**. Il couvre les workflows GitHub Actions configurés pour automatiser le processus de build, de test, et d'analyse de qualité du code. La séparation en trois workflows (CI, Tests, et Qualité) permet une gestion modulaire et optimise l'exécution des étapes indépendantes.

## Workflows GitHub Actions

### 1. Workflow CI (`ci.yml`)

**Objectif** : Compiler le projet et construire les images Docker pour le déploiement.

**Étapes** :
- **Étape de checkout** : Récupère le code source du repository.
- **Configuration du JDK 11** : Installe Java 11 pour compiler le projet back-end.
- **Build Docker pour le back-end** : Crée une image Docker pour le back-end et la pousse sur Docker Hub.
- **Build Docker pour le front-end** : Crée une image Docker pour le front-end et la pousse également sur Docker Hub.

Ce workflow garantit que chaque changement dans le code source est directement intégré dans les images Docker, prêtes à être déployées.

### 2. Workflow Tests (`tests.yml`)

**Objectif** : Exécuter les tests unitaires et générer les rapports de couverture.

**Étapes** :
- **Étape de checkout** : Récupère le code source du repository.
- **Configuration du JDK 11** : Installe Java 11 pour exécuter les tests back-end.
- **Compilation et exécution des tests du back-end** : Utilise Maven pour compiler et exécuter les tests, générant un rapport de couverture JaCoCo.
- **Configuration de Node.js** : Installe Node.js pour exécuter les tests du front-end.
- **Exécution des tests du front-end avec couverture** : Utilise Angular CLI pour exécuter les tests du front-end, générant un rapport de couverture au format LCOV.

Les rapports générés sont sauvegardés dans GitHub Actions pour être consultés ultérieurement. Cela assure une validation complète des fonctionnalités du code avant intégration.

### 3. Workflow Qualité (`quality.yml`)

**Objectif** : Analyser la qualité du code avec SonarCloud.

**Étapes** :
- **Étape de checkout** : Récupère le code source du repository.
- **Configuration du JDK 17** : Installe Java 17 pour l'analyse de SonarCloud.
- **Compilation** : Compile le projet pour que SonarCloud puisse analyser le code compilé.
- **Analyse SonarCloud** : Exécute l’analyse SonarCloud en utilisant les rapports JaCoCo (back-end) et LCOV (front-end).

SonarCloud effectue une analyse statique du code pour détecter les mauvaises pratiques, la dette technique et la complexité. Les résultats sont consultables dans l’interface SonarCloud.

## KPIs (Indicateurs de Performance)

1. **Couverture du Code** : Le taux de couverture est un indicateur clé de la qualité des tests.
    - **Objectif** : Minimum de 70 % de couverture de code (actuellement 38,8 %).
    - Le taux actuel montre qu’il y a de la place pour améliorer les tests, en particulier pour les nouvelles fonctionnalités.

2. **Fiabilité et Maintenabilité** : Mesure des problèmes de code qui affectent la stabilité et la facilité de maintenance.
    - **Objectif** : Zéro problème critique ou bloquant pour la fiabilité et une note de maintenabilité de `B` ou meilleure (actuellement `D`).
    - SonarCloud rapporte 9 problèmes, dont 8 liés à la maintenabilité, avec des niveaux de sévérité `High`, `Medium`, et `Low`.

## Analyse des Métriques

### Couverture Actuelle

La couverture de code actuelle est de **38,8 %**. Cette métrique inclut les tests du back-end et du front-end, confirmant que SonarCloud prend en compte les deux environnements. Une amélioration de la couverture est recommandée pour se rapprocher de l’objectif de 70 %.

### Problèmes de Qualité

- **Total de problèmes identifiés** : 9 problèmes, répartis comme suit :
    - **Maintenabilité** : 8 problèmes, principalement liés à la complexité du code.
    - **Fiabilité** : 1 problème, aucun problème critique ou bloquant.
- **Security Hotspots** : Deux éléments signalés comme étant des points potentiels de sécurité. Bien que non critiques, ils doivent être surveillés pour assurer la conformité aux meilleures pratiques.

### Security Hotspots

Les points de sécurité identifiés sont des "hotspots" et non des vulnérabilités directes. Ils nécessitent une révision manuelle pour évaluer leur impact potentiel et déterminer s’ils nécessitent des modifications.

## Retours Utilisateurs et Problèmes Identifiés

Les retours utilisateurs ont révélé plusieurs problèmes :

1. **Blocages lors des suggestions de blagues** : Indique un besoin d’optimisation de cette fonctionnalité.
2. **Temps de réponse aux bugs** : Les utilisateurs notent un délai important entre le signalement de bugs et leur résolution.
3. **Manque de communication** : L'absence de réponses rapides aux utilisateurs est perçue négativement.

### Priorisation des Améliorations

1. **Améliorer la couverture de tests** : Augmenter la couverture pour détecter les régressions potentielles.
2. **Optimiser le code de la fonctionnalité de suggestion** : Identifier les causes du blocage et les résoudre.
3. **Réduire la dette technique** : Aborder les problèmes de maintenabilité identifiés dans SonarCloud pour un code plus propre et durable.

## Conclusion

La mise en place des workflows CI/CD et d’analyse de qualité fournit une base robuste pour gérer le projet. Les indicateurs SonarCloud révèlent des axes d’amélioration, notamment en termes de couverture de tests et de maintenabilité. Le suivi de ces indicateurs et la prise en compte des retours utilisateurs permettront de rehausser la qualité perçue et la satisfaction des utilisateurs.