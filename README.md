# API Library System

## Usuário

GET     `/users`    -> Lista todos os usuários.  
GET     `/users/:id` -> Mostra as informações de um usuário.  
POST    `/users`     -> Cria um usuário.  
PUT     `/users/:id` -> Edita um usuário.  
DELETE  `/users/:id` -> Apaga um usuário.  


## Autor

GET     `/authors`      -> Lista os autores.  
POST    `/authors`       -> Salva um autor.  
PUT     `/authors/:id`   -> Edita um autor.  
DELETE  `/authors/:id`   -> Apaga um autor.  


## Endereço

GET     `/addresses`        -> Lista todos os endereços.  
GET     `/addresses/:user_id` -> Mostra o endereço de um usuário.  
POST    `/addresses/:user_id` -> Salva um endereço para um usuário.  
PUT     `/addresses/:user_id` -> Edita o endereço de um usuário.  


## Fornecedor

GET     `/providers`    -> Lista os fornecedores.  
GET     `/providers/:id` -> Mostra as informações de um fornecedor.  
POST    `/providers`     -> Salva um fornecedor.  
PUT     `/providers/:id` -> Edita um fornecedor.  
DELETE  `/providers/:id` -> Apaga um fornecedor.  


## Editora

GET     `/publishers`    -> Lista as editoras.  
POST    `/publishers`     -> Salva uma editora.  
PUT     `/publishers/:id` -> Edita uma editora.  
DELETE  `/publishers/:id` -> Apaga uma editora.


## Categoria

GET     `/categories`   -> Lista as categorias.  
GET     `/categories/:id` -> Mostra uma categoria. (provavelmente inútil)  
POST    `/categories`     -> Cria uma categoria.  
PUT     `/categories/:id` -> Edita uma categoria.  
DELETE  `/categories/:id` -> Apaga uma categoria.  


## Livro

GET     `/books`    -> Lista os livros + (categorias, autor, editora) de cada livro.  
GET     `/books/:id` -> Mostra as informações de um livro + (categorias, autor, editora).  
POST    `/books`     -> Salva um livro.  
PUT     `/books/:id` -> Edita um livro.  
DELETE  `/books/:id` -> Apaga um livro.  


## Empréstimo

GET     `/loans`                    -> Lista todos os empréstimos.  
POST    `/loans/:user_id/:book_id`   -> Realiza um novo empréstimo.  