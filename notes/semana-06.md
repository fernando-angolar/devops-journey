# Semana 6 - Resumo

## O que foi feito
- Push da API e do site para ghcr.io
- Pacotes públicos e ligados ao repo devops-journey
- kind a puxar imagens do GHCR (sem kind load)
- ImagePullBackOff no static-site resolvido ao trocar
  static-site:semana3 → ghcr.io/fernando-angolar/static-site:latest

## Imagens
- ghcr.io/fernando-angolar/node-api:latest
- ghcr.io/fernando-angolar/static-site:latest
- Cada build também grava a tag do SHA do commit

## Conceitos
- Registry = sítio onde a imagem vive
- GHCR usa GITHUB_TOKEN no workflow (packages: write)
- Público: pull sem login
- Privado: precisa de docker login ou imagePullSecret
- imagePullPolicy: Always força ir ao registry
- latest é prático; SHA é reproduzível

## Cluster vs registry
- Publicar no GHCR não actualiza o cluster
- kubectl apply / set image / rollout restart é que cria Pods novos
- imagePullPolicy Always + latest volta a puxar no restart

## Comandos
docker pull ghcr.io/fernando-angolar/node-api:latest
kubectl apply -f projects/02-nodejs-api/k8s/
kubectl rollout status deployment/node-api