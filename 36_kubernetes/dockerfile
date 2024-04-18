#definir que tipo de aplicación vamos a construir
FROM node

#definir dónde se va guardar el proyecto/imagen
WORKDIR /simplexcomplex

#copio/muevo el package de la aplicación desde el servidor hacia el contenedor
COPY package*.json ./

#instalo paquetes
RUN npm install

#copiamos el resto de los archivos del server al contenedor
COPY . .

#configurar puerto de exposición
EXPOSE 8080

#configurar el comando de ejecución del servidor
CMD ["npm","start"]