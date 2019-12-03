# prisma-apollo-example

[![GitHub stars](https://img.shields.io/github/stars/codejamninja/prisma-apollo-example.svg?style=social&label=Stars)](https://github.com/codejamninja/prisma-apollo-example)

> example using prisma as an apollo datasource

Please ★ this repo if you found it useful ★ ★ ★

## Features

- prisma
- apollo
- photon

## Dependencies

- [NodeJS](https://nodejs.org)

## Usage

First install the dependancies

```sh
yarn
```

Run each of the following commands in a different terminal

| Terminal 1  | Terminal 2        | Terminal 3   |
| ----------- | ----------------- | ------------ |
| `yarn data` | `yarn prisma dev` | `yarn start` |

You will need to run `yarn start` every time you make new changes

Open the following links

[http://localhost:4000](http://localhost:4000) - GraphQL Server

[http://localhost:5555](http://localhost:5555) - Database Explorer

Run the following query to create a user

```graphql
mutation {
  register(username: "hello", password: "world") { username }
}
```

## Support

Submit an [issue](https://github.com/codejamninja/prisma-apollo-example/issues/new)

## Screenshots

[Contribute](https://github.com/codejamninja/prisma-apollo-example/blob/master/CONTRIBUTING.md) a screenshot

## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/prisma-apollo-example/blob/master/CONTRIBUTING.md)

## License

[MIT License](https://github.com/codejamninja/prisma-apollo-example/blob/master/LICENSE)

[Jam Risser](https://codejam.ninja) © 2019

## Changelog

Review the [changelog](https://github.com/codejamninja/prisma-apollo-example/blob/master/CHANGELOG.md)

## Credits

- [Jam Risser](https://codejam.ninja) - Author

## Support on Liberapay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://liberapay.com/codejamninja/donate) if you'd like to keep me going!

[![Liberapay receiving](https://img.shields.io/liberapay/receives/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
