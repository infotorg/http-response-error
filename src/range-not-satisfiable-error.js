import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * <b>"416 Range Not Satisfiable"</b> response error class.
 *
 * Indicates that a server cannot serve the requested ranges.
 * The most likely reason is that the document doesn't contain such ranges, or that the Range header value,
 * though syntactically correct, doesn't make sense.
 *
 * The 416 response message contains a `Content-Range` indicating an unsatisfied range (that is a '*') followed by a '/'
 * and the current length of the resource.
 *
 * Faced with this error, browsers usually either abort the operation
 * (for example, a download will be considered as non-resumable) or ask for the whole document again.
 *
 * @class
 * @extends ResponseError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
 */
class RangeNotSatisfiableError extends ResponseError {
  /**
   * @ignore
   * @typedef {module:response-error-options~Options} Options
   */

  /**
   * RangeNotSatisfiableError constructor
   *
   * @param {Object|String|ResponseErrorOptions|Options|undefined} [data=undefined] Error message or options
   */
  constructor(data) {
    super(new ResponseErrorOptions(data, 416, 'Range Not Satisfiable'));
  }
}

export default RangeNotSatisfiableError;
