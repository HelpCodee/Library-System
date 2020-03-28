# API Library System

## Usuário

GET     `/users`    -> Lista todos os usuários.
GET     `/user/:id` -> Mostra as informações de um usuário.
POST    `/user`     -> Cria um usuário.
PUT     `/user/:id` -> Edita um usuário.
DELETE  `/user/:id` -> Apaga um usuário.


## Autor

GET     `/authors`      -> Lista os autores.
POST    `/author`       -> Salva um autor.
PUT     `/author/:id`   -> Edita um autor.
DELETE  `/author/:id`   -> Apaga um autor.


## Endereço

GET     `/addresses`        -> Lista todos os endereços.
GET     `/address/:user_id` -> Mostra o endereço de um usuário.
POST    `/address/:user_id` -> Salva um endereço para um usuário.
PUT     `/address/:user_id` -> Edita o endereço de um usuário.


## Fornecedor

GET     `/providers`    -> Lista os fornecedores.
GET     `/provider/:id` -> Mostra as informações de um fornecedor.
POST    `/provider`     -> Salva um fornecedor.
PUT     `/provider/:id` -> Edita um fornecedor.
DELETE  `/provider/:id` -> Apaga um fornecedor.


## Editora

GET     `/publishers`    -> Lista as editoras.
POST    `/publisher`     -> Salva uma editora.
PUT     `/publisher/:id` -> Edita uma editora.
DELETE  `/publisher/:id` -> Apaga uma editora.


## Categoria

GET     `/categories`   -> Lista as categorias.
GET     `/category/:id` -> Mostra uma categoria. (provavelmente inútil)
POST    `/category`     -> Cria uma categoria.
PUT     `/category/:id` -> Edita uma categoria.
DELETE  `/category/:id` -> Apaga uma categoria.


## Livro

GET     `/books`    -> Lista os livros + (categorias, autor, editora) de cada livro.
GET     `/book/:id` -> Mostra as informações de um livro + (categorias, autor, editora).
POST    `/book`     -> Salva um livro.
PUT     `/book/:id` -> Edita um livro.
DELETE  `/book/:id` -> Apaga um livro.


## Empréstimo

GET     `/loans`                    -> Lista todos os empréstimos.
POST    `/loan/:user_id/:book_id`   -> Realiza um novo empréstimo.