import ResponseErrorOptions from './response-error-options';

/**
 * ResponseError class
 *
 * Base class for all response errors
 *
 * @class
 * @property {String} message Error message
 * @property {String|Number} code Error code
 * @property {String} requestId Request ID
 * @property {String|*} details Error details
 */
class ResponseError extends Error {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ResponseError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options} data
   */
  constructor(
    data = {
      message: '',
      requestId: '',
      code: '',
      details: '',
    }
  ) {
    const { options } = new ResponseErrorOptions(data, 500, 'Response error');

    super(options.message);

    Object.keys(options).forEach((property) => {
      this[property] = options[property];
    });

    this.name = this.constructor.name;
  }

  /**
   * Plain object representation of the error
   *
   * @example
   * // returned object
   * {
   *   error: {
   *     code: 400,
   *     requestId: '123456-test-request-id',
   *     message: 'Baaaaaad Request :-(',
   *     details: 'Check your request body'
   *   }
   * }
   *
   * @return {{ error: {code: (number|string), requestId: string, details: (string|*), message: string} }}
   */
  toPojo() {
    return {
      error: {
        code: this.code || '',
        requestId: this.requestId || '',
        message: this.message || '',
        details: this.details || '',
      },
    };
  }

  /**
   * Plain object representation of the error
   *
   * @example
   * // returned JSON
   * {
   *   error: {
   *     code: 400,
   *     requestId: '123456-test-request-id',
   *     message: 'Baaaaaad Request :-(',
   *     details: 'Check your request body'
   *   }
   * }
   *
   * @return {{error: {code: (number|string), requestId: string, details: (string|*), message: string}}}
   */
  toJSON() {
    return this.toPojo();
  }

  /**
   * String representation of the error
   *
   * @example
   * // returned string
   * {"error":{"code":400,"requestId":"123456-test-request-id","message":"Baaaaaad Request :-(","details":"Check your request body"}}
   *
   * @return {string}
   */
  toString() {
    return JSON.stringify(this.toPojo());
  }
}

export default ResponseError;
