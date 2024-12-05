# 1. Use uma imagem base com Node.js
FROM node:18
# 2. Define o diretório de trabalho dentro do contêiner
WORKDIR /app
# 3. Copia os arquivos do projeto para o contêiner
COPY package*.json ./
# 4. Instala as dependências
RUN npm install
# 5. Copia o restante do código do projeto
COPY . .
# 6. Expõe a porta usada pela aplicação
EXPOSE 3000
# 7. Comando para iniciar o servidor
CMD ["npm", "run", "start:dev"]