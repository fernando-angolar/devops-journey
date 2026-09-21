# Projeto 03 - Terraform AWS

EC2 Ubuntu + Security Group na região `us-east-1` (Free Tier).

## Cria

- Security Group `devops-journey-tf-sg` (22, 80, 443)
- Instância `devops-journey-tf-ec2` (`t3.micro`)
- Usa o Key Pair AWS `devops-journey-key`

## Pré-requisitos

- Terraform >= 1.5
- AWS CLI configurado (`aws sts get-caller-identity`)
- Key Pair `devops-journey-key` na conta

## Uso

```bash
cd projects/03-terraform-aws
terraform init
terraform plan
terraform apply
terraform output
ssh -i ~/.ssh/devops-journey-key.pem ubuntu@$(terraform output -raw public_ip)
terraform destroy