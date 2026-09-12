# Semana 4 - Resumo

## O que foi feito
- API Node.js com / e /health
- Imagem Docker node:22-alpine
- Deployment + Service no kind (junto com o static-site)
- ConfigMap via envFrom (MESSAGE, PORT)
- Prova: mudar ConfigMap não atualiza env de Pods a correr
- Liveness e readiness em GET /health

## Ideias-chave
- hostname no JSON = nome do Pod
- kind load docker-image é obrigatório para imagens locais
- imagePullPolicy: IfNotPresent no kind
- port-forward cai no rollout; não faz parte da app
- readiness tira o Pod do Service; liveness reinicia o container

## Diagnóstico
kubectl get pods
kubectl describe pod NOME
kubectl logs NOME
kubectl logs NOME --previous
kubectl get svc,endpoints

## Projetos no cluster
- static-site (projeto 01)
- node-api (projeto 02)
