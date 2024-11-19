# Étape de construction avec Node.js
FROM node:latest as build

# Définir le répertoire de travail
WORKDIR /usr/local/app

# Copier les fichiers du projet dans l'image
COPY ./ /usr/local/app/

# Installer les dépendances avec NPM
RUN npm install

# Construire l'application Angular
RUN npm run build

# Étape de production avec Nginx
FROM nginx:latest as production

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers de build Angular dans le dossier Nginx
COPY --from=build /usr/local/app/dist/bobapp /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
