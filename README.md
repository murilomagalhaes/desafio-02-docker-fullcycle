# FullCycle: Desafio 02 (Docker)

O arquivo docker-compose.yml sobe 3 imagens (MySQL, NodeJS e Nginx) nessa respectiva ordem.
Como uma imagem depende da outra, foi utilizado healthchecks e depends-on.

- A imagem MySQL executa dois scripts durante sua inicialização. Um para criar o schema do banco, e outro pra popular a tabela `people`.
- A imagem NodeJS sobe um servidor ExpressJS na porta 3000 que ao acessar a rota `/` é exibido o texto `FullCycle Rocks!` e um JSON com o conteúdo da tabela `people`;
- A imagem Nginx serve como um proxy reverso para a aplicação NodeJS, fazendo o proxy entre 80 e a 3000. A porta exposta no host é a 8080.

**Para executar os containers, basta executar:**
- `docker compose up -d`
- Após os containers terem sido completamente iniciados, acesse `http://localhost:8080` em um browser.

