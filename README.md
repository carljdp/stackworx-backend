# Read Me

## Requirements

- Node 8 >
- yarn

## Getting Started

    yarn install # Install dependencies
    yarn start

The server will automatically restart when you change any files
When you see `Server ready...` you can access the graphql query window with [http://localhost:5000/graphql](http://localhost:5000/graphql)

Try this basic query to confirm everything is working

```
{
  hello
}
```

It should respond with

```
{
  "data": {
    "hello": "world"
  }
}
```

Another sample query:

```
{
  servers {
    id
    name
    healthCheckUri
    status
  }
}
```

## Technologies Used

- [GraphQL](https://graphql.org/) - Query Language
- [Express](https://expressjs.com/) - Http Server
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Wrapper for server side graphQL
- [Typescript](https://www.typescriptlang.org/) - Compiler
- [got](https://github.com/sindresorhus/got) - Http Requests
- [jest](https://jestjs.io/) - Unit Testing

## Learning Resources

- [GraphQL Learn](https://graphql.org/learn/)
- [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
