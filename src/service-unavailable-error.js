import ResponseError from './response-error';
import ResponseErrorOptions from './response-error-options';

/**
 * "503 Service Unavailable" Error class
 *
 * Indicates that the server is not ready to handle the request.
 *
 * Common causes are a server that is down for maintenance or that is overloaded.
 * This response should be used for temporary conditions and the "Retry-After" HTTP header should, if possible, contain the estimated time for the recovery of the service.
 *
 * @class
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
 */
export default class ServiceUnavailableError extends ResponseError {
  constructor(data) {
    super(
      new ResponseErrorOptions(
        {
          code: 503,
          ...(data && typeof data === 'object' ? data : { message: data }),
        },
        'Service Unavailable'
      )
    );
  }
}
