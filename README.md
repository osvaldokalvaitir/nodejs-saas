# Node - SaaS

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/node-saas/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/node-saas.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/node-saas.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/node-saas.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/node-saas.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/node-saas.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/node-saas.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=SaaS%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fosvaldokalvaitir%2Fnode-saas%2Fmaster%2FInsomnia.json)

Aplicação usando Node.js, AdonisJs, Adonis ACL, Adonis Kue Provider, Adonis Mail, Adonis Lucid Slugify, Adonis Validator, AdonisJs Redis, ESLint e pg.

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)
  
  - [Configuração das Variáveis de Ambiente](#configuração-das-variáveis-de-ambiente)

  - [Execução do Projeto](#execução-do-projeto)

  - [Execução da API](#execução-da-api)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)
  
  - [APIs](#apis)

  - [Ferramentas](#ferramentas)

## Desenvolvimento

### Configuração do Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Configuração das Variáveis de Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/dotenv.md) e siga `Configuração de Variáveis de Ambiente`.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Execução de Projeto para Produção`.

### Execução da API

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-cli.md) e siga `Execução de API para Desenvolvimento` ou `Execução de API para Produção`.

## Utilizados no Projeto

### Bibliotecas

- [Adonis ACL](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/adonis-acl.md)

- [Adonis Kue Provider](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/adonis-kue.md)

- [Adonis Mail](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-mail.md)

- [Adonis Lucid Slugify](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-lucid-slugify.md)

- [Adonis Validator](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-validator.md)

- [AdonisJs Cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-cli.md)

- [AdonisJs Redis](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@adonisjs-redis.md)

- [ESLint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [pg](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/pg.md)

### APIs

- **Interna**

  - **Rotas**

    - Sessões

      - Adiciona novas sessões

    - Usuários

      - Adiciona novos usuários

    - Times

      - Lista todos os times

      - Adiciona novos times

      - Lista somente dados de um time

      - Edita dados de um time

      - Exclui um time

    - Convites

      - Adiciona novos convites para um time

    - Projetos

      - Lista todos os projetos de um time

      - Adiciona novos projetos para um time

      - Lista somente dados de um projeto de um time

      - Edita dados de um projeto de um time

      - Exclui um projeto de um time

    - Função

      - Lista todas as funções

    - Membros
  
      - Lista todos os membros de um time

      - Edita dados de um mebro de um time

    - Permissões

      - Lista todas as funções e as permissões do membro de um time

### Ferramentas

- [Docker](https://github.com/osvaldokalvaitir/projects-settings/blob/master/virtualization/docker/docker.md)

  - Imagem do PostgreSQL: [postgres](https://github.com/osvaldokalvaitir/projects-settings/blob/master/virtualization/docker/images/postgres.md)

  - Imagem do Redis: [redis:alpine](https://github.com/osvaldokalvaitir/projects-settings/blob/master/virtualization/docker/images/redis-alpine.md)

- [Insomnia](https://github.com/osvaldokalvaitir/projects-settings/blob/master/api/insomnia.md)

- [Mailtrap](https://github.com/osvaldokalvaitir/projects-settings/blob/master/email/mailtrap.md)

- [Postbird](https://github.com/osvaldokalvaitir/projects-settings/blob/master/database/postgresql/postbird.md)
