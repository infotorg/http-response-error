import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "429 Too Many Requests" response error class
 *
 * Indicates the user has sent too many requests in a given amount of time ("rate limiting").
 * A 'Retry-After' header might be included to this response indicating how long to wait before making a new request.
 *
 * @class TooManyRequestsError
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
 */
export default class TooManyRequestsError extends ResponseError {
  constructor(data) {
    super(ResponseErrorOptions.create(data, 429, 'Too Many Requests'));
  }
}
