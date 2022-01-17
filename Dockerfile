# you may choose a specific NodeJS version playing the the tag (see Docker Hub)
FROM node:alpine

WORKDIR /app
COPY ./package.json ./package.json
# you may add your package-lock.json
RUN npm i

COPY ./index.js ./index.js

# Here goes all RUN npm run build and other build scripts

CMD node index.js