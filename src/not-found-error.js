import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';
import statusCodes from './status-codes.js';
import reasonPhrases from './reason-phrases.js';

/**
 * <b>"404 Not Found"</b> response error class.
 *
 * Indicates that the server cannot find the requested resource.
 * Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.
 *
 * A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent.
 * If a resource is permanently removed, use the 410 (Gone) status instead.
 *
 * @class
 * @extends ResponseError
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404|404 Not Found - HTTP | MDN
 */
class NotFoundError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * NotFoundError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, statusCodes.NOT_FOUND, reasonPhrases.NOT_FOUND));
  }
}

export default NotFoundError;
