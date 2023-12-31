![Screenshot (126)](https://github.com/Shashank65536/Assign-14-Auto-API-Generated/assets/40866700/7d091dd6-3fd5-46c8-aa02-72ce511ef1f4)

# lenstrade

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Steps to setup project
Install cli 

```sh
npm i -g @loopback/cli
```
Create app

```sh
lb4 app
```

Create mongo datasource models

```sh
lb4 model
```

Add datasource

```sh
lb4 datasource
```

Make sure you have the json schema of users in the lenstrade database in the mongodb local database
Sample data

```sh
{
  "_id": {
    "$oid": "64460c9d9a6a3b38889cf4fb"
  },
  "firstName": "Shashank",
  "lastName": "Bidwai",
  "email": "athira.pillai@wayne.edu",
  "password": "qwertyui",
  "__v": 0
}
```

Install loop connectore mongodb

```sh
npm install loopback-connector-mongodb --save
```



## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
