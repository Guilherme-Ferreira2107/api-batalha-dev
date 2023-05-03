# Imagem base
FROM node:14-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

RUN npm run build

# Copia o código da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "run", "start:prod"]
