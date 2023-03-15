/**
 * Normalize the message and use the fallbacks if the message is empty or is not a string
 *
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
 * Normalize the code and use the fallbacks if the code is empty or is not a number
 *
 * @param {string} code
 * @param {string[]|number[]} fallbacks
 * @return {number|string}
 */
const normalizeCode = (code, fallbacks = []) => {
  const parsedCode = parseInt(code, 10);

  if (isNaN(parsedCode)) {
    return fallbacks.length ? fallbacks.shift() : 500;
  }

  return parsedCode;
};

/**
 * ResponseErrorOptions class
 *
 * Represents the options for the ResponseError class instantiation
 *
 * @class
 */
export default class ResponseErrorOptions {
  /**
   * @typedef {{code: (number|string), requestId: string, details: (string|*), message: string}} Options
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
   * @param {Object} options
   * @param {number|string} [fallbackCode=500]
   * @param {string} [fallbackMessage='Internal Server Error']
   */
  constructor(options = {}, fallbackCode = 500, fallbackMessage = 'Internal Server Error') {
    const params = options && typeof options === 'object' && Object.keys(options).length ? options : {};
    const defaultOptions = ResponseErrorOptions.defaultOptions();

    params.message = normalizeMessage(params.message, [fallbackMessage, defaultOptions.message]);
    params.code = normalizeCode(params.code, [fallbackCode, defaultOptions.code]);

    Object.keys(defaultOptions).forEach((property) => {
      this.#options[property] = params[property] || defaultOptions[property];
    });
  }

  /**
   * Create the ResponseErrorOptions instance
   *
   * @param {Object|ResponseErrorOptions} options
   * @param {number|string} [fallbackCode=500]
   * @param {string} [fallbackMessage='Internal Server Error']
   * @return {ResponseErrorOptions}
   */
  static create(options = {}, fallbackCode = 500, fallbackMessage = 'Internal Server Error') {
    return options instanceof ResponseErrorOptions
      ? options
      : new ResponseErrorOptions(
          {
            code: fallbackCode,
            ...(options && typeof options === 'object' ? options : { message: options }),
          },
          fallbackCode,
          fallbackMessage
        );
  }

  /**
   * Get the options
   *
   * @return {Options}
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
