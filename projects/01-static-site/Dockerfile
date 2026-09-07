# Imagem oficial leve do Nginx
FROM nginx:1.27-alpine

# Metadados
LABEL maintainer="Fernando Angolar"
LABEL description="Site estático da jornada DevOps - Semana 2"

# Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do site
COPY src/ /usr/share/nginx/html/

# Garante que o Nginx consegue ler os arquivos
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Healthcheck simples
HEALTHCHECK --interval=30s --timeout=3s CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Comando padrão (já vem na imagem, mas deixamos explícito)
CMD ["nginx", "-g", "daemon off;"] 
