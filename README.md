# DevOps Journey

Repositório da minha jornada para me tornar um DevOps / Cloud Native Engineer.

## Sobre mim

Estou seguindo um plano estruturado de estudos focado em Cloud Native, Kubernetes e práticas modernas de DevOps.

## Objetivos

- Dominar Kubernetes e práticas Cloud Native
- Aprender AWS + Terraform + CI/CD
- Construir um portfólio sólido com projetos reais
- Conseguir minha primeira vaga como DevOps Júnior

## Estrutura do repositório

- `docs/` → Anotações e documentação
- `projects/` → Projetos práticos
  - `01-static-site/` → Site estático com Nginx + Docker + EC2
  - `02-nodejs-api/`
- `notes/` → Anotações de estudos e do livro

## Stack que estou aprendendo

- Linux
- Docker
- Kubernetes
- AWS
- Terraform
- GitHub Actions
- Prometheus + Grafana

## Progresso

### Semana 1

- [x] Configuração do ambiente (WSL2 + Ubuntu)
- [x] Conta AWS Free Tier + MFA + IAM
- [x] AWS CLI configurado
- [x] Repositório organizado

### Semana 2

- [x] Criação de instância EC2
- [x] Instalação do Docker na EC2
- [x] Projeto 01: Site estático com Nginx + Docker
- [x] Deploy do site na AWS (EC2)
- [x] Configuração de Security Group (portas 80 e 443)


## O que foi feito

- Criação de instância EC2 (Ubuntu)
- Configuração de Security Group (portas 22, 80 e 443)
- Instalação do Docker na EC2
- Criação de site estático com Nginx
- Dockerfile com boas práticas
- Deploy do container na AWS
- Uso de SCP para envio de arquivos

## Principais aprendizados

- Como liberar portas no Security Group
- Diferença entre rodar container local vs na nuvem
- Importância do `--restart unless-stopped`
- Uso de imagens Alpine para reduzir tamanho
- Healthcheck no Dockerfile

## Dificuldades encontradas

- Site não abria por causa do Security Group (porta 80 bloqueada)

### Próximos passos

- [ ] Docker avançado (multi-stage builds)
- [ ] API Node.js containerizada
- [ ] Início de Kubernetes
- [ ] Terraform