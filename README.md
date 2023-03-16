# http-response-error

HTTP Response error classes

## Installation

```
$ npm install @infotorg/http-response-error
```

## [API documentation](https://infotorg.github.io/http-response-error/)

## Usage

```javascript
// Create a new error only with a status code using ResponseErrorFactory
import { ResponseErrorFactory } from '@infotorg/http-response-error';

const error = ResponseErrorFactory.create({ code: 404 });

console.log(error.toJSON());
// {
//   error: {
//     code: 404,
//     requestId: '',
//     message: 'Internal Server Error',
//     details: ''
//   }
// }
```

```javascript
// Create a new error with all possible options using ResponseErrorFactory
import { ResponseErrorFactory } from '@infotorg/http-response-error';

const error = ResponseErrorFactory.create({
  code: 404,
  requestId: '123456-test-request-id',
  message: 'Nothing found',
  details: 'Some details about error',
});

console.log(error.toJSON());
// {
//   error: {
//     code: 404,
//     requestId: '123456-test-request-id',
//     message: 'Nothing found',
//     details: 'Some details about error'
//   }
// }
```

```javascript
// Create a new specifyed error without options
import { TooManyRequestsError } from '@infotorg/http-response-error';

const error = new TooManyRequestsError();

console.log(error.toJSON());
// {
//   error: {
//     code: 429,
//     requestId: '',
//     message: 'Too Many Requests',
//     details: ''
//   }
// }
```

```javascript
// Create a new specifyed error with message only
import { TooManyRequestsError } from '@infotorg/http-response-error';

const error = new TooManyRequestsError('Rate limit exceeded');

console.log(error.toJSON());
// {
//   error: {
//     code: 429,
//     requestId: '',
//     message: 'Rate limit exceeded',
//     details: ''
//   }
// }
```

```javascript
// Create a new specifyed error with options
import { TooManyRequestsError } from '@infotorg/http-response-error';

const error = new TooManyRequestsError({
  code: 429,
  message: 'Rate limit exceeded',
  requestId: requestId(),
  details: 'Please, contact our support https://support.example.com',
});

console.log(error.toJSON());
// {
//   error: {
//     code: 429,
//     requestId: '123456-test-request-id',
//     message: 'Rate limit exceeded',
//     details: 'Please, contact our support https://support.example.com'
//   }
// }
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```
npm run test
```

##### LICENSE: MIT

##### AUTHOR: [Volodymyr Chumak](https://github.com/coderua)
