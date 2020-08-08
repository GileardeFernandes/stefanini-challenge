<h2>Desafio stefanini .Net</h2>

[![Linkedin: micael-fernandes-659630b3](https://img.shields.io/badge/-micaelfernandes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/micael-fernandes-659630b3/)](https://www.linkedin.com/in/micael-fernandes-659630b3/)

<img align='center' src="https://github.com/GileardeFernandes/stefanini-challenge/blob/master/assets/home-web.png" >


## instalação

| Ferramentas ambiente                               |
| ---------------------------------------------------|
|<a href="https://git-scm.com/">Git</a>              |
|<a href="https://code.visualstudio.com/">Vs Code</a>|
|<a href="https://www.postman.com/">Postman</a>      |


Primeiramente abra seu ternimal com o git instalado e clone o projeto

```sh
git clone https://github.com/GileardeFernandes/stefanini-challenge.git
```
Vamos começar dando start em nossa API, navegue ate apasta webapi e rode os comandos abaixo

```sh
cd webapi
dotnet run
```
Esse será seu resultado no terminal, a API estará rodando em https://localhost:5001




Agora caso queira, pode consumir a API utilizando o Postman, Isominia ou outro de sua preferência ulizando os seguintes endpoints:

## User/endpoints

<h3>Get</h3> 
url: /v1/users?email=micaelsantana2009@hotmail.com&password=123456

```json
{
    "id": 1,
    "name": "Micael Fernandes",
    "email": "micaelsantana2009@hotmail.com"
}
```

<h3>Post</h3> 
url: /v1/users

```json
Body
{
    "name": "Micael Fernandes",
    "email": "micaelsantana2009@hotmail.com",
    "password": "123456"
}
```

## People/endpoints

<h3>Get</h3>
url: /v1/people

```json
[
    {
        "id": 1,
        "name": "Isabella naves costa",
        "gender": "Feminino",
        "email": "micaelsantana2009@hotmail.com",
        "birthDate": "1990-09-06T03:00:00Z",
        "nationality": "Brasileiro",
        "naturalness": "Pernambuco",
        "cpf": "09933622498",
        "createDate": "2020-08-08T17:20:48.3220289-03:00",
        "lastUpdateDate": "2020-08-08T17:20:48.3220423-03:00",
        "userId": 1,
        "user": {
            "id": 1,
            "name": "Micael Fernandes",
            "email": "micaelsantana2009@hotmail.com",
            "password": "123456"
        }
    }
]
```

<h3>Post</h3>
url: /v1/people

```json
{
    "Name": "Micael Fernandes",
    "Gender": "M",
    "Email": "micaelsantana2009@hotmail.com",
    "BirthDate": "1990-09-06T03:00:00Z",
    "Nationality": "Brasileiro",
    "Naturalness": "Pernambuco",
    "Cpf": "09933622498",
    "UserId": 1

}
```

<h3>Put</h3>
url: /v1/people?id=1

```json
{
    "Name": "Isabella naves costa",
    "Gender": "Feminino",
    "Email": "micaelsantana2009@hotmail.com",
    "BirthDate": "1990-09-06T03:00:00Z",
    "Nationality": "Brasileiro",
    "Naturalness": "Pernambuco",
    "Cpf": "09933622498",
    "UserId": 1

}
```

<h3>Delete</h3>
url: /v1/people?id=1













