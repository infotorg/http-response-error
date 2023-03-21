/**
 * Normalize the message and use the fallbacks if the message is empty or is not a string
 *
 * @private
 * @param {string} message
 * @param {string[]} fallbacks
 * @return {string}
 */
const normalizeMessage = (message, fallbacks = []) => {
  if (!message || typeof message !== 'string') {
    return fallbacks.filter((fallback) => typeof fallback === 'string' && fallback.length).shift() || '';
  }

  return message;
};

/**
 * @typedef {Object} Options - Options
 * @property {number|string} code - Error code
 * @property {string} message - Error message
 * @property {string} requestId - Request ID
 * @property {string|*} details - Error details
 */

/**
 * ResponseErrorOptions class
 *
 * Represents the options for the ResponseError class instantiation
 *
 * @class
 */
class ResponseErrorOptions {
  /**
   * Instance options
   *
   * @type {Options|Object}
   */
  #options = {};

  /**
   * Default options
   *
   * @return {Options}
   */
  static defaultOptions() {
    return {
      code: 500,
      message: 'Internal Server Error',
      requestId: '',
      details: '',
    };
  }

  /**
   * ResponseErrorOptions constructor
   *
   * @param {Options|object|string} [options={}] Error options or error message
   * @param {number|string} [fallbackCode=500] Fallback error code. Used if it is not exists in options or it could not be converted in a number
   * @param {string} [fallbackMessage='Internal Server Error'] Fallback error message. Used if it is not exists in options or it is not a string.
   */
  constructor(options = {}, fallbackCode = 500, fallbackMessage = 'Internal Server Error') {
    let params = {};

    if (options instanceof ResponseErrorOptions) {
      params = { ...options.options };
    } else if (options && typeof options === 'object' && Object.keys(options).length) {
      params = { ...options };
    } else if (typeof options === 'string') {
      params = {
        message: options,
      };
    }

    const defaultOptions = ResponseErrorOptions.defaultOptions();

    params.code = ResponseErrorOptions.parseCode(params.code, [fallbackCode, defaultOptions.code]);
    params.message = normalizeMessage(params.message, [fallbackMessage, defaultOptions.message]);

    Object.keys(defaultOptions).forEach((property) => {
      this.#options[property] = params[property] || defaultOptions[property];
    });
  }

  /**
   * Normalize the code and use the fallbacks if the code is empty or is not a number
   *
   * @static
   * @param {string|number} code - Error code
   * @param {string[]|number[]|number|string} fallbacks - Fallback error codes
   * @return {number|string}
   */
  static parseCode(code, fallbacks = []) {
    const parsedCode = parseInt(code, 10);

    if (isNaN(parsedCode)) {
      const fallbackCodes = (Array.isArray(fallbacks) ? fallbacks : [fallbacks])
        .map((fallback) => parseInt(fallback, 10))
        .filter((fallback) => !isNaN(fallback));

      return fallbacks.length ? fallbacks.shift() : 500;
    }

    return parsedCode;
  }

  /**
   * Get the options
   *
   * @return {Options|Object}
   */
  get options() {
    return this.#options;
  }

  /**
   * Get the code
   *
   * @return {*}
   */
  get code() {
    return this.#options.code;
  }

  /**
   * Get the message
   *
   * @return {string}
   */
  get message() {
    return this.#options.message;
  }

  /**
   * Get the request id
   *
   * @return {string|*}
   */
  get requestId() {
    return this.#options.requestId;
  }

  /**
   * Get the details
   *
   * @return {string|*}
   */
  get details() {
    return this.#options.details;
  }

  /**
   * Plain object representation of the options
   *
   * @return {Options}
   */
  toJSON() {
    return this.#options;
  }

  /**
   * Reset the options to the default values
   *
   * @return {ResponseErrorOptions}
   */
  reset() {
    this.#options = { ...ResponseErrorOptions.defaultOptions() };

    return this;
  }
}

export default ResponseErrorOptions;
