![banner](https://github.com/user-attachments/assets/d5e0f97e-60e3-470c-93a3-66232597d3ed)

# 🛠️ YKMiniURL — Backend API

API responsável por gerenciar o encurtamento de URLs, proteção por senha e análise de métricas do sistema **YKMiniURL**.

---

## 🚀 Sobre o Projeto

O backend do **YKMiniURL** foi desenvolvido para fornecer uma **API robusta, segura e escalável** para gerenciamento de links encurtados.

Com ele é possível:

* 🔗 Encurtar URLs longas
* 🔐 Proteger links com senha
* 📊 Acompanhar estatísticas de acesso
* ⚡ Redirecionar links curtos rapidamente

A API foi construída com foco em **segurança, desempenho e simplicidade de integração**.

---

## 🌐 Aplicação

### Frontend

O frontend do sistema foi desenvolvido utilizando **Next.js**, **TypeScript** e **TailwindCSS**.

🌐 Aplicação online
https://ykminiurl.vercel.app/

💻 Repositório do frontend
https://github.com/Dannick10/frontend-ykminiurl

---

## 🎨 Design

O UI/UX do projeto foi criado utilizando **Figma** com **Auto Layout**.

🔗 Protótipo no Figma
https://www.figma.com/design/ABmbwn4qIWOZ4N7diKZ7Wg/ykminiurl

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* Express.js
* MongoDB
* Bcrypt
* CORS
* Swagger

### Frontend

* Next.js
* TypeScript
* TailwindCSS

### Design

* Figma
* Photoshop

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Dannick10/backend-ykminiurl.git
```

Entre na pasta do projeto:

```bash
cd backend-ykminiurl
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com as variáveis necessárias:

```
PORT=3000
MONGO_URI=sua_string_do_mongodb
```

Execute o servidor:

```bash
npm run dev
```

---

## 📚 Endpoints da API

### 🔗 Encurtar um link

**POST** `/shortlink`

Exemplo de requisição:

```json
{
  "url": "https://exemplo.com",
  "password": "minhasenha"
}
```

Resposta:

```json
{
  "message": "link encurtado com sucesso",
  "shortUrl": "lkllz"
}
```

---

### 🔗 Redirecionar um link

**GET** `/getlink/{shortlink}`

Resposta:

```json
{
  "shortUrl": "lkllz",
  "url": null,
  "security": true
}
```

---

### 🔗 Informações do link

**POST** `/info`

Exemplo:

```json
{
  "shortUrl": "string",
  "password": "string"
}
```

Resposta:

```json
{
  "originalUrl": "www.github.com",
  "shortUrl": "lkllz",
  "clicks": 0,
  "createdAt": "2024-12-22T17:02:36.387Z"
}
```

---

### 🔗 Autorizar acesso ao link

**POST** `/password`

Exemplo:

```json
{
  "shortUrl": "string",
  "password": "string"
}
```

Resposta:

```json
{
  "shortUrl": "lkllz",
  "url": "www.github.com",
  "security": true
}
```

---

## 📖 Documentação da API

A API possui documentação interativa utilizando **Swagger**, permitindo explorar e testar os endpoints diretamente no navegador.

🔗 Documentação da API
https://backend-ykminiurl.onrender.com/docs

---

## 🎯 Funcionalidades da API

* Criar links curtos
* Proteger links com senha
* Visualizar estatísticas de acesso
* Redirecionar URLs
* Integração fácil com aplicações frontend

---

## 🔮 Funcionalidades Futuras

* 🚨 Sistema de **report de URLs maliciosas**
* 📱 **QR Code** para links encurtados

---

## 📬 Contato

🌐 Portfólio
https://dannickportifolio.vercel.app/

💻 GitHub
https://github.com/Dannick10

✉️ Email
[ykdanieldev@gmail.com](mailto:ykdanieldev@gmail.com)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

---


<div align="center">

<sub>Desenvolvido com foco em inovação e produtividade por <strong>Daniel Rocha</strong></sub>

<br><br>

<a href="https://www.linkedin.com/in/ykdanielrocha">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

</div>

