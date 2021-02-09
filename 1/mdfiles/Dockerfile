FROM gatsbyjs/gatsby:latest

# Также выставляем порты отладки VSCode
EXPOSE 8000 

WORKDIR /app
COPY ./package.json .
COPY . .
CMD ["gatsby", "develop", "-H", "0.0.0.0" , "-p", "8000"]