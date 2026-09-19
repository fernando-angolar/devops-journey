# Semana 5 - Resumo

## O que foi feito
- Primeiro workflow GitHub Actions (checkout)
- Build da API no runner (sem push)
- Build do site estático noutro workflow
- Tags com github.sha + latest
- Pipeline partido de propósito e corrigido

## Conceitos
- CI: cada push valida o build
- Workflow = YAML em .github/workflows/
- Job corre num runner ubuntu-latest (não no WSL)
- paths: limita que workflow dispara
- Tag SHA = versão exacta da imagem
- latest = atalho, não usar sozinho em produção
- push: false = constrói e deita a imagem fora no fim do job

## Workflows
- .github/workflows/api-ci.yml
- .github/workflows/site-ci.yml

## Como ver
GitHub → Actions → API CI ou Site CI