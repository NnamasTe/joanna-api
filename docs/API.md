
## CORS

Olá. Gostaríamos de te dizer que essa API possui CORS ativado para qualquer origem (*). Você pode acessá-la através de qualquer domínio sem configuração adicional no cliente.


# API do Portfólio — Documentação de Endpoints

    Base URL (produção): `insira aqui link do site para vercel`

    ## Convenções

    - Todas as respostas são em JSON
    - Rotas protegidas exigem header `Authorization: Bearer <token>`
    - Erros seguem o formato `{ "erro": "mensagem descritiva" }`

 ### GET /obra

    Lista todas as obras

    - **Autenticação:** Não
    - **Body:** Nenhum

    - **Resposta de sucesso:** 200 OK

     json
        [
          {
            "id": 1,
            "titulo": "Água Azul",
            "preco": 54.99,
            "fotoUrl": "https://picsum.photos",
            "legenda": null,
            "dimensoes": "A4",
            "anoCriacao": "2024",
            "criadoEm": "2026-10-14T10:30:00.000Z"
          },
          {
            "id": 2,
            "titulo": "Grama Verde",
            "preco": 34.99,
            "fotoUrl": "https://picsum.photos",
            "legenda": null,
            "dimensoes": "A4",
            "anoCriacao": "2025",
            "criadoEm": "2026-10-14T10:30:00.000Z"
          },
          {
            "id": 3,
            "titulo": "Sol Amarelo",
            "preco": 60.00,
            "fotoUrl": "https://picsum.photos",
            "legenda": null,
            "dimensoes": "A4",
            "anoCriacao": "2026",
            "criadoEm": "2026-10-14T10:30:00.000Z"
          }
        ]
     

### GET /obra/:id

    Busca uma obra pelo ID

    - **Autenticação:** Não
    - **Body:** Nenhum

    - **Resposta de sucesso:** 200 OK

     json
      [
        {
          "id": 1,
          "titulo": "Água azul",
          "preco": 54.99,
          "fotoUrl": "https://picsum.photos",
          "legenda": null,
          "dimensoes": "A4",
          "anoCriacao": "2024",
          "criadoEm": "2026-10-14T10:30:00.000Z"
        },
        {
          "id":2,
          "titulo":"Grama Verde",
          "preco":34.99,
          "fotoUrl": "https://picsum.photos",
          "legenda": null,
          "dimensoes": "A4",
          "anoCriacao": "2025",
          "criadoEm": "2026-10-14T10:30:00.000Z"
        },
        { 
          "id":3,
          "titulo":"Sol Amarelo",
          "preco":60.00,
          "fotoUrl": "https://picsum.photos",
          "legenda": null,
          "dimensoes": "A4",
          "anoCriacao": "2026",
          "criadoEm": "2026-10-14T10:30:00.000Z"
        }
      ]
     

    - **Erros:**
      - 404 — obra não encontrada
      - 500 — Erro interno do servidor

### PUT /obra/:id

    Atualiza o próprio perfil

    - **Autenticação:** Sim (Bearer Token)

    - **Body:**

   json
    {
      "preco": "50.68"
    }
   

    - **Resposta de sucesso:** 200 OK

   json
    {
      "id": 2,
      "titulo": "Grama Verde",
      "preco": "50.68",
      "fotoUrl": "https://picsum.photos",
      "legenda": null,
      "dimensoes": "A4",
      "anoCriacao": "2025",
      "criadoEm": "2026-10-14T10:30:00.000Z"
    }
   
    - **Erros:**
      - 404 — obra não encontrada
      - 500 — Erro interno do servidor

### DELETE /obra/:id

    Remove uma obra   

    - **Autenticação:** Sim (Bearer Token - Admin)
    - **Body:** Nenhum

    - **Resposta de Sucesso:** 204 No Content

    - **Erros:**
      - 404 — obra não encontrada
      - 500 — Erro interno do servidor

### POST /mensagens
    Cria uma nova mensagem

    - **Autenticação:** Sim (Bearer token)
    - **Body:**

    ```json
    {
      "texto": "Boa sorte para todo mundo!"
    }
    ```

    - **Resposta de sucesso:** `201 Created`

    ```json
    {
      "id": 1,
      "texto": "Boa sorte para todo mundo!",
      "imagemUrl": null,
      "autorId": 2,
      "autor": {
        "id": 2,
        "nome": "Amilton",
        "fotoUrl": null
      },
      "criadoEm": "2026-04-03T10:30:00.000Z"
    }
    ```

    - **Erros:**
      - `400` — O campo texto é obrigatório
      - `500` — Erro interno do servidor