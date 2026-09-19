FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./

ENV PORT=3000
ENV MESSAGE="API da jornada DevOps"

EXPOSE 3000

USER node

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD wget -qO- http://127.0.0.1:3000/health || exit 1

CMD ["node", "server.js"]
