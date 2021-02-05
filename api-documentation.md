# My-Gallery

​
List of available endpoints:
​
- `POST /users/register`
- `POST /users/login`
- `POST /users/googleLogin`
- `GET /images`
- `GET /images/covid`
- `POST /images/favorite`
- `get /images/favorite`
- `DELETE /images/favorite/:id`
- `GET /users/quotes`

### POST /users/register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "message": "Register success",
  "email": "string"
}
```

### POST /users/login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "jwt string"
}
```

### POST /users/googleLogin

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response if login:

- status: 200
- body:
  ​

```json
{
  "access_token": "jwt string"
}
```

Response if register:

- status: 201
- body:
  ​

```json
{
  "access_token": "jwt string"
}
```

### GET /images

description: 
  get 21 random photo from unsplash API

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  "https://images.unsplash.com/photo-1610012525054-b6ab57df6105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ0MTV8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1610342694037-787727ee8719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ0MTV8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1610492273280-c60d0be4f0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ0MTV8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400",
  "https://images.unsplash.com/photo-1610493460224-eb10478924ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDQ0MTV8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=400"
]
```

### GET /images/covid

description: 
  get covid data from covid API

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "confirmed": "integer",
  "recovered": "integer",
  "deaths": "integer",
  "country": "string"
}
```

### POST /images/favorite

description: 
  add favorite

Request:

- headers: access_token (string)

Response:

- status: 201
- body:

```json
{
  "id": "integer",
  "UserId": "integer",
  "imageUrl": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

### get /images/favorite

description: 
  get all user favorite

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
[
  {
    "id": "integer",
    "UserId": "integer",
    "imageUrl": "string",
    "createdAt": "date",
    "updatedAt": "date"
  },
  {
    "id": "integer",
    "UserId": "integer",
    "imageUrl": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
]
```

### DELETE /images/favorite/:id

description: 
  delete one favorite

Request:

- headers: access_token (string)
- params: id (integer)

Response:

- status: 200
- body:

```json
{
  "message": "success delete image"
}
```

### GET /users/quotes

description: 
  get random quotes

Request:


Response:

- status: 200
- body:

- quote (string)


