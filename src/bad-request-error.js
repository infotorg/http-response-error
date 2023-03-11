import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "400 Bad Request" response error class.
 *
 * Indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * Warning: The client should not repeat this request without modification.
 *
 * @class BadRequestError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
 */
export default class BadRequestError extends ResponseError {
  constructor(data) {
    super(
      new ResponseErrorOptions(
        {
          code: 400,
          ...(data && typeof data === 'object' ? data : { message: data }),
        },
        'Bad Request'
      )
    );
  }
}
