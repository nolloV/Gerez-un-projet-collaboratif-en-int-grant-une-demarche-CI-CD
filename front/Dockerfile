# Étape de construction avec Node.js (version LTS)
FROM node:16 AS build

# Définir le répertoire de travail
WORKDIR /usr/local/app

# Copier les fichiers du projet
COPY ./ /usr/local/app/

# Installer les dépendances et nettoyer le cache
RUN npm install && npm cache clean --force

# Construire l'application Angular avec logs détaillés
RUN npm run build -- --verbose

# Étape de production avec Nginx
FROM nginx:latest AS production

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers Angular générés
COPY --from=build /usr/local/app/dist/bobapp /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
