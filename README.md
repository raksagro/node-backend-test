### Requisitos
- docker
- docker-compose
- NodeJS `LTS`

### Iniciar o projeto
- Execute `docker-compose up -d` para subir o ambiente do banco de dados (MYSQL).
- Execute `npm run start` para iniciar o servidor NodeJS (porta 8000).
- Acesse a collection do Postman: https://www.getpostman.com/collections/74a6186e30475cbe75bc
- Para acessar os docs da API: http://localhost:8000/docs

## Arquitetura

A API foi implementada em cima de clean architecture. Essa abordagem possibilita que o código seja menos acoplado, permitindo alta extensibilidade.

Segue o diagrama da arquitetura do projeto:

![Arquitetura](https://i.imgur.com/jTW4Q13.png)