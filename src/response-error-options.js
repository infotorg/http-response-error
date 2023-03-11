const normalizeMessage = (message, fallbacks = []) => {
  if (!message || typeof message !== 'string') {
    return fallbacks.filter((fallback) => typeof fallback === 'string' && fallback.length).shift() || '';
  }

  return message;
};

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

  constructor(options = {}, fallbackMessage = '') {
    const params = options && typeof options === 'object' && Object.keys(options).length ? options : {};
    const defaultOptions = ResponseErrorOptions.defaultOptions();

    params.message = normalizeMessage(params.message, [fallbackMessage, defaultOptions.message]);

    Object.keys(defaultOptions).forEach((property) => {
      this.#options[property] = params[property] || defaultOptions[property];
    });
  }

  get options() {
    return this.#options;
  }

  get code() {
    return this.#options.code;
  }

  get message() {
    return this.#options.message;
  }

  get requestId() {
    return this.#options.requestId;
  }

  get details() {
    return this.#options.details;
  }

  toJSON() {
    return this.#options;
  }

  reset() {
    this.#options = { ...ResponseErrorOptions.defaultOptions() };
  }
}
