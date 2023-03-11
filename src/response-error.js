import ResponseErrorOptions from './response-error-options';

export default class ResponseError extends Error {
  /**
   * @type {String} message
   * @type {String} requestId
   * @type {String|Number|*} code
   * @type {String|*} details
   */

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
    if (data instanceof ResponseErrorOptions || (typeof data === 'object' && Object.keys(data).length)) {
      const fallbackMessage = 'Response error';

      super(data.message || fallbackMessage);

      const params = (data instanceof ResponseErrorOptions ? data : new ResponseErrorOptions(data, fallbackMessage))
        .options;

      Object.keys(params).forEach((property) => {
        this[property] = params[property];
      });
    } else {
      super(data);
    }

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

  toString() {
    return JSON.stringify(this.toPojo());
  }

  /**
   * JSON representation of the error
   *
   * @return {{error: {code: (number|string), requestId: string, details: (string|*), message: string}}}
   */
  toJSON() {
    return this.toPojo();
  }
}
