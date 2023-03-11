import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  ResponseError,
  ServiceUnavailableError,
  TooManyRequestsError,
  UnauthorizedError,
  UnavailableForLegalReasonsError,
  UnprocessableEntityError,
} from './main.js';

export default class ResponseErrorFactory {
  constructor() {
    if (this.constructor === ResponseErrorFactory) {
      throw new Error("Factory class can't be instantiated. Use 'create' static method instead.");
    }
  }

  static create(config = {}) {
    if (typeof config !== 'object') {
      throw new TypeError(
        'ResponseErrorFactory can not create the ResponseError class instance. Expected config param.'
      );
    }

    // Normalize status code
    const parsedCode = parseInt(config.code, 10);
    const code = isNaN(parsedCode) ? 500 : parsedCode;

    const configWithCode = { ...config, code };

    switch (code) {
      case 400:
        return new BadRequestError(configWithCode);
      case 401:
        return new UnauthorizedError(configWithCode);
      case 403:
        return new ForbiddenError(configWithCode);
      case 404:
        return new NotFoundError(configWithCode);
      case 422:
        return new UnprocessableEntityError(configWithCode);
      case 429:
        return new TooManyRequestsError(configWithCode);
      case 451:
        return new UnavailableForLegalReasonsError(configWithCode);
      case 500:
        return new InternalServerError(configWithCode);
      case 503:
        return new ServiceUnavailableError(configWithCode);
      default:
        return new ResponseError(configWithCode);
    }
  }
}
