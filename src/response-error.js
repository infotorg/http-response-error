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
export default class ResponseError extends Error {
  /**
   * ResponseError constructor
   * @param {Object|String|ResponseErrorOptions} data
   */
  constructor(
    data = {
      message: '',
      requestId: '',
      code: '',
      details: '',
    }
  ) {
    const { options } = ResponseErrorOptions.create(data, 500, 'Response error');

    super(options.message);

    Object.keys(options).forEach((property) => {
      this[property] = options[property];
    });

    this.name = this.constructor.name;
  }

  /**
   * Plain object representation of the error
   *
   * @return {{error: {code: (number|string), requestId: string, details: (string|*), message: string}}}
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
   * @return {{error: {code: (number|string), requestId: string, details: (string|*), message: string}}}
   */
  toJSON() {
    return this.toPojo();
  }

  /**
   * String representation of the error
   *
   * @return {string}
   */
  toString() {
    return JSON.stringify(this.toPojo());
  }
}
