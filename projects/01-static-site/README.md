# Projeto 01 - Static Site

Site estático servido com Nginx em container Docker, hospedado em uma instância EC2 na AWS.

## Tecnologias utilizadas
- Docker
- Nginx (alpine)
- AWS EC2
- Ubuntu 24.04

## Como rodar localmente

```bash
docker build -t static-site:semana2 .
docker run -d -p 8080:80 --name meu-site static-site:semana2
