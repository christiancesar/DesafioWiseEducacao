# Challenge Encurtador - Backend Wise Educação

## Introdução
- Ferramentas usadas:
  - Typescript;
  - NodeJS;
  - Express;
  - Banco PostgreSQL;
  - Docker;
  - Postman
  
- Plataforma de desenvolvimento:
  - Windows 10
  
- Gerenciador de pacotes:
  - Chocolatey

## Documentação PostMan
Para mais informações referente as rotas e seus retornos, consulte a documentação:
  https://documenter.getpostman.com/view/10539960/TWDamFCK#6bbf6895-35bf-4b21-b1a6-5217a1bb64bb

## Requirimentos
Verifique se sua maquina possua:
 - Node lts
 - Yarn
 - Docker
 
## Run
  1. Na pasta raiz da aplicação execute: `yarn install`
  2. Após a instalação das dependencias execute: `docker run --name desafioWiseEducacao -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres`
  3. Em seguida `yarn typeorm migration:run`
  4. Para upar o servidor execute: `yarn dev:server`  
