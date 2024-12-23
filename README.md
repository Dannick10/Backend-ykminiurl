
![banner](https://github.com/user-attachments/assets/d5e0f97e-60e3-470c-93a3-66232597d3ed)

# 🛠️ Backend YKMiniURL  

Bem-vindo ao backend do **YKMiniURL**! Este serviço foi desenvolvido para fornecer uma API confiável e robusta para gerenciar links curtos, protegê-los com senha e acompanhar estatísticas detalhadas.  

---

## 🚀 **Sobre o Projeto**  

O backend do **YKMiniURL** utiliza tecnologias modernas para garantir segurança e eficiência. Ele permite que os usuários:  
- **Encurtem URLs longas** com facilidade.  
- **Protejam links** com senhas personalizadas.  
- **Obtenham informações detalhadas** sobre os links encurtados.  
- **Redirecionem links curtos** para seus URLs originais com apenas um clique.  

---

## 🖥️ **Frontend**  
O frontend do YKMiniURL foi desenvolvido utilizando **Next.js**, **TypeScript**, **TailwindCSS**.  

Acesse o frontend: [YKMiniURL Frontend](https://ykminiurl.vercel.app/)  
Acesse o Repositorio: [YKMINIURL Repositorio Frontend](https://github.com/Dannick10/frontend-ykminiurl)

## ✒ O UI/UX do YKMiniURL foi criado no **Figma**, utilizando **Auto Layout**.

Confira o design do projeto no Figma: [Figma do YKMiniURL](https://www.figma.com/)

## 🛠️ **Tecnologias Utilizadas**  
- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Bcrypt** (criptografia de senhas)  
- **CORS** (controle de acesso cross-origin)  

---

## 📚 **Endpoints da API**  

### 🔗 Encurtar um Link
**Method**: `POST`  
**Endpoint**: `/shortlink`

#### Exemplo de Requisição:
```json
{
  "url": "https://exemplo.com",
  "password": "minhasenha"
}
```
#### Exemplo de resposta:
```json
{
  "message": "link encurtado com sucesso",
  "shortUrl": "lkllz"
}
```

### 🔗 Renderecionar um Link
**Method**: `GET`  
**Endpoint**: ` /getlink/{getshortlink}`

#### Exemplo de Requisição:
```json
Parameters: /getlink/{getshortlink}
```
#### Exemplo de resposta:
```json
{
  "shortUrl": "lkllz",
  "url": null,
  "security": true
}
```

### 🔗 informações do link
**Method**: `POST`  
**Endpoint**: `/info`

#### Exemplo de Requisição:
```json
{
  "shortUrl": "string",
  "password": "string"
}
```
#### Exemplo de resposta:
```json
{
  "originalUrl": "www.github.com",
  "shortUrl": "lkllz",
  "clicks": 0,
  "createdAt": "2024-12-22T17:02:36.387Z"
}
```

### 🔗 autorizar link com senha
**Method**: `POST`  
**Endpoint**: `/password`

#### Exemplo de Requisição:
```json
{
  "shortUrl": "string",
  "password": "string"
}
```
#### Exemplo de resposta:
```json
{
  "shortUrl": "lkllz",
  "url": "www.github.com",
  "security": true
}
```

## 📚 **Documentação da API**  

A **YKMiniURL API** é interativa e documentada via **Swagger**, permitindo que você explore endpoints, parâmetros e execute testes diretamente na interface.  

🔗 **Link da Documentação da API**:  

[YKMiniURL API - Swagger](https://backend-ykminiurl.onrender.com/docs)  

### **Como Começar**  
1. Consulte os endpoints disponíveis na documentação Swagger.  
2. Teste a API usando ferramentas como Postman ou cURL.  
3. Integre o serviço no seu sistema para otimizar o gerenciamento de links.  

---

## 🎯 **Funcionalidades da API**  
- **Criar Links Curtos**: Transforme URLs longas em links curtos.  
- **Adicionar Senhas**: Defina uma senha para proteger o acesso aos links.  
- **Obter Informações**: Acompanhe estatísticas detalhadas dos links criados.  
- **Redirecionar Links**: Redirecione para URLs originais.  

---

## 🐱‍👤 **Funcionalidades futuras**
- **Reportar url**
- **Criar qrCode**

## 🌟 **Comece Agora - É Grátis!**  

Visite o site e aproveite todos os recursos:  

🔗 [YKMiniURL](https://ykminiurl.vercel.app/)  

---

## 📬 **Contato**  

- **Portfólio**: [Daniel Rocha](https://dannickportifolio.vercel.app/)  
- **GitHub**: [Dannick10](https://github.com/Dannick10)  
- **E-mail**: [ykdanieldev@gmail.com](mailto:ykdanieldev@gmail.com)  

Sinta-se à vontade para abrir issues no repositório ou contribuir com melhorias! 
