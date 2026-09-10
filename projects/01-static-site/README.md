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

## Kubernetes (cluster local - kind)

```bash
# carregar imagem no kind
kind load docker-image static-site:semana3 --name develop-journey

# aplicar manifests
kubectl apply -f k8s/

# aceder
kubectl port-forward service/static-site-service 8080:80
