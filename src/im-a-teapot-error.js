import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"418 I'm a teapot"</b> response error class.
 *
 * Indicates that the server refuses to brew coffee because it is, permanently, a teapot.
 * A combined coffee/tea pot that is temporarily out of coffee should instead return `503`.
 * This error is a reference to Hyper Text Coffee Pot Control Protocol defined in April Fools' jokes in 1998 and 2014.
 *
 * Some websites use this response for requests they do not wish to handle, such as automated queries.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418|418 I'm a teapot - HTTP | MDN
 */
class ImATeapotError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * ImATeapotError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.IM_A_TEAPOT, reasonPhrases.IM_A_TEAPOT));
  }
}

export default ImATeapotError;
