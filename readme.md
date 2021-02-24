# Challenge Encurtador - Backend Wise Educação

## Introdução
- Objetivo
   O objetivo do desafio é que ao enviar um body `{ url: "http://wisereducacao.com" }` para a rota `urlbase\encurtador` retorne um código com letras e números representando um encurtador da url original e ao acessar `urlbase\:codigo` retorne a url original, podendo assim fazer o redirecionamento. 
- Ferramentas usadas:
  - Typescript;
  - NodeJS;
  - Express;
  - Banco PostgreSQL;
  - [Docker](https://www.docker.com/products/docker-desktop)
  - Postman
  
- Plataforma de desenvolvimento:
  - Windows 10
  
- Gerenciador de pacotes:
  - [Chocolatey](https://chocolatey.org/install)

- Desenvolvimento:
  Aplicação foi desenvolvida em cima de conhecimentos adiquiridos no bootcamp GoStack 11, onde tentei aplicar neste desafio alguns designs patterns abordados no bootcamp como Repository Pattern e Service Pattern, juntamente com alguns conceitos de SOLID.
 
 

## Documentação PostMan
Para mais informações referente as rotas e seus retornos, consulte a documentação:
  https://documenter.getpostman.com/view/10539960/TWDamFCK#6bbf6895-35bf-4b21-b1a6-5217a1bb64bb

## Requerimentos
Verifique se sua maquina possua:
 - Node lts
 - Yarn
 - Docker
 
## Run
  1. Na pasta raiz da aplicação execute: `yarn install`
  2. Após a instalação das dependências  execute: `docker run --name desafioWiseEducacao -e POSTGRES_PASSWORD=123 -p 5432:5432 -d postgres`
  3. Em seguida `yarn typeorm migration:run`
  4. Para upar o servidor execute: `yarn dev:server`  
