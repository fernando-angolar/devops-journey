# DevOps Journey

Repositório da minha jornada para me tornar um DevOps / Cloud Native Engineer.

## Sobre mim

Estou a seguir um plano estruturado de estudos focado em Cloud Native, Kubernetes e práticas modernas de DevOps.

## Objetivos

- Dominar Kubernetes e práticas Cloud Native
- Aprender AWS + Terraform + CI/CD
- Construir um portfólio sólido com projetos reais
- Conseguir a primeira vaga como DevOps Júnior

## Estrutura do repositório

- `docs/` → Anotações e documentação
- `projects/` → Projetos práticos
  - `01-static-site/` → Site estático com Nginx + Docker + EC2 + Kubernetes
  - `02-nodejs-api/` → API Node.js + Docker + Kubernetes (ConfigMap e probes)
- `notes/` → Anotações de estudos e do livro

## Stack

- Linux
- Docker
- Kubernetes
- AWS
- Terraform
- GitHub Actions
- Prometheus + Grafana

## Progresso

### Semana 1

- [x] Ambiente (WSL2 + Ubuntu)
- [x] Conta AWS Free Tier + MFA + IAM
- [x] AWS CLI
- [x] Repositório organizado

### Semana 2

- [x] Instância EC2
- [x] Docker na EC2
- [x] Site estático com Nginx + Docker
- [x] Deploy na AWS (EC2)
- [x] Security Group (22, 80, 443)

### Semana 3

- [x] Cluster local (kind)
- [x] Deployment + ReplicaSet + Pods
- [x] Service + port-forward
- [x] ConfigMap e Secret
- [x] Ingress (manifesto, sem controller)
- [x] Scale e rollout

### Semana 4

- [x] API Node.js local (`/` e `/health`)
- [x] Imagem Docker da API
- [x] API no kind (Deployment + Service)
- [x] ConfigMap via envFrom
- [x] Liveness e readiness

## Próximos passos

- [ ] Terraform (AWS)
- [ ] GitHub Actions (CI/CD)
- [ ] Observabilidade (Prometheus + Grafana)
