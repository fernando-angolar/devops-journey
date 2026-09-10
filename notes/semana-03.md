# Semana 3 - Resumo

## O que foi feito
- Cluster local com kind + kubectl
- Deployment do site estático (2 réplicas)
- Service NodePort + port-forward
- ConfigMap a servir o HTML
- Secret de exemplo
- Ingress (só manifesto, sem controller)
- Manifests organizados em projects/01-static-site/k8s/
- Scale e rollout undo

## Conceitos
- Pod: unidade que corre o container (efémero)
- Deployment: declara o estado desejado e faz rolling update
- ReplicaSet: mantém o número de Pods
- Service: IP/porta estáveis para um conjunto de Pods
- ConfigMap: config não secreta fora da imagem
- Secret: dados sensíveis (Base64, não é cofre perfeito)
- Ingress: roteamento HTTP; precisa de Ingress Controller
- kind: Kubernetes dentro de Docker, bom para estudo

## Comandos úteis
- kubectl apply -f k8s/
- kubectl get pods,svc,ingress
- kubectl scale deployment static-site --replicas=3
- kubectl rollout status|history|undo
- kubectl logs deploy/static-site
- kubectl port-forward service/static-site-service 8080:80

## Decisões
- Não instalei o Ingress Controller nesta semana
- EC2 da Semana 2 deve ficar stopped quando não estiver a ser usada
