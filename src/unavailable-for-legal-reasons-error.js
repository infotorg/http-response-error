import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "451 Unavailable For Legal Reasons" response error class.
 *
 * Indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.
 *
 * @class UnavailableForLegalReasonsError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
 */
export default class UnavailableForLegalReasonsError extends ResponseError {
  constructor(data) {
    super(ResponseErrorOptions.create(data, 451, 'Unavailable For Legal Reasons'));
  }
}
