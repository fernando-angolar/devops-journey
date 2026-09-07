# Imagem oficial leve do Nginx
FROM nginx:1.27-alpine

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do site
COPY src/ /usr/share/nginx/html/

# Expõe a porta 80
EXPOSE 80

# Comando padrão (já vem na imagem, mas deixamos explícito)
CMD ["nginx", "-g", "daemon off;"] 
