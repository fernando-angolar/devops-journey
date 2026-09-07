# Semana 2 - Resumo

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

## Resultado final da semana

- Site estático no ar em: http://50.17.163.160
- Projeto documentado em: projects/01-static-site
- Primeiro deploy real na AWS concluído
