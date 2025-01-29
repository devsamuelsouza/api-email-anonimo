# Anonimail

Esse projeto consiste em uma api, com o intuito de enviar emails de forma anônima.

## 📋 Pré-requisitos

Para utilizar esse projeto de forma local você precisará atender aos seguintes requisitos:

- [Git](https://git-scm.com/downloads) para instalar o projeto.
- [Docker](https://www.docker.com/) para rodar o container.
- [Insominia](https://insomnia.rest/download) para enviar a requisição.

## 🔧 Instalação

Siga esse passo a passo para instalar o projeto:

- Instale o Git  clicando [aqui.](https://git-scm.com/downloads) 
- Abra o Terminal (CMD, PowerShell ou Git) na pasta onde deseja instalar o projeto
- Digite os seguintes comandos 

```bash
    git clone https://github.com/devsamuelsouza/sendanonimail.git 
```

```bash
    cd sendanonimail
```

## 📦 Implantação

Para implantar o projeto em sua maquina, siga os seguintes passos:

- Abra o terminal (CMD, PowerShell ou Git) no diretorio raiz do projeto
- Digite o seguinte comando para criar a imagem no Docker

```bash
    docker build -t anonimail . 
```

- Após isso, crie o container que irá rodar o projeto

```bash
    docker run -p 3333:3333 -d anonimail
```

## **🧪 Testes**  

Verifique o funcionamento do sistema realizando os seguintes testes:  

- **Envio da requisição:** A requisição deve ser enviada através do método post para a seguinte rota e com os seguintes parâmetros.

```bash
    http://localhost:3333/send/anonymous/email
    Content-Type: application/json

    body: {
        "subject": 
        "email": 
        "message": 
    }
```

- **Envio de requisições para outras rotas:** Verifique se ao acessar uma rota invalida, a mesma retorna uma menssagem de erro.

*Dica:* Explore possíveis erros ou melhorias na aplicação.  
*Obs:* A aplicação aceita apenas requisições do tipo POST

## **🛠️ Tecnologias e Ferramentas Utilizadas**  
Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:  

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## **📌 Versão**  

Consulte as [tags neste repositório](https://github.com/devsamuelsouza/anonimail/tags) para visualizar as versões do projeto.   

## **📡 Online**  

- Caso queira utilizar a API sem precisar instalar, você pode enviar a requisição para: 

```bash
    https://email-anonimo.onrender.com/send/anonymous/email
```

## **✒️ Autor**  
Desenvolvido por **Samuel Souza** 🌹  
- [GitHub](https://github.com/devsamuelsouza)  
- [LinkedIn](https://www.linkedin.com/in/devsamuel/)  

---
