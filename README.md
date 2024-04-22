# Implantação de Aplicação NodeJS usando Docker

Este repositório contém os passos necessários para implantar uma aplicação NodeJS usando Docker.

## Pré-requisitos

- Docker instalado e configurado em sua máquina.

- ## Passos

### 1. Clonar o repositório:

```bash
https://github.com/biancaroman/desafio-devops-nodejs.git
````

### 2. Modificar o código fonte:

- Modifique o arquivo app.js para alterar a mensagem que será exibida na tela.

### 2. Criar o Dockerfile:
- Crie um Dockerfile com as seguintes instruções:
````dockerfile
# Use uma imagem Node na versão lts-alpine3.19 como base
FROM node:lts-alpine3.19

# Utilize o usuário node para executar a aplicação
USER node

# Defina o diretório de trabalho como:/app-money
WORKDIR /app-money

# Copie todos os diretórios e arquivos da sua aplicação para o Container
COPY . .

# Exponha a porta adequada para que a aplicação seja acessível
EXPOSE 3000

# Configure o comando padrão para executar seu App NodeJS. Pode utilizar CMD ou ENTRYPOINT
CMD ["node", "app.js"]
````


### 3. Criar a imagem do Docker:
Para criar a imagem do Docker, execute o seguinte comando:
```bash
docker build -t <nomeDaImagem> .
```

### 4. Executar o container:
Para executar o container, execute o seguinte comando:
```bash
docker container run -d --name <nomeDoContainer -v <diretórioNoHost>: <diretórioDoContainer> -p 3000:3000 <nomeDaImagem>
```

### 5. Acessar a aplicação:
Para acessar a aplicação, acesse a aplicação no navegador:
```bash
http://localhost:3000/
```

### Integrantes do grupo
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/biancaroman">
        <img src="https://avatars.githubusercontent.com/u/128830935?v=4" width="100px;" border-radius='50%' alt="Bianca Román's photo on GitHub"/><br>
        <sub>
          <b>Bianca Román</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/charlenefialho">
        <img src="https://avatars.githubusercontent.com/u/94643076?v=4" width="100px;" border-radius='50%' alt="Charlene Aparecida's photo on GitHub"/><br>
        <sub>
          <b>Charlene Aparecida</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/laiscrz">
        <img src="https://avatars.githubusercontent.com/u/133046134?v=4" width="100px;" alt="Lais Alves's photo on GitHub"/><br>
        <sub>
          <b>Lais Alves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LuccaRaphael">
        <img src="https://avatars.githubusercontent.com/u/127765063?v=4" width="100px;" border-radius='50%' alt="Lucca Raphael's photo on GitHub"/><br>
        <sub>
          <b>Lucca Raphael</b>
        </sub>
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/Fabs0602">
        <img src="https://avatars.githubusercontent.com/u/111320639?v=4" width="100px;" border-radius='50%' alt="Fabricio Torres's photo on GitHub"/><br>
        <sub>
          <b>Fabricio Torres</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
