# Semana 7 - Resumo

## Feito

- Terraform 1.16 no WSL
- Provider AWS us-east-1
- Data sources (account, region, VPC, AMI)
- Security Group em código
- EC2 Ubuntu t3.micro + SSH
- terraform destroy da infra deste projeto

## Comandos

cd projects/03-terraform-aws
terraform init
terraform plan
terraform apply
terraform output
terraform destroy

## Regras

- Correr Terraform só nesta pasta
- Não commitar .tfstate
- Credenciais no aws configure, não no .tf
- Stop != destroy