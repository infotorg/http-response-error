export default {
  /**
   * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP
   * to later send an asynchronous response indicating the outcome of processing the request.
   * It is intended for cases where another process or server handles the request, or for batch processing.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.3|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202|202 Accepted - HTTP | MDN
   */
  ACCEPTED: 'Accepted',

  /**
   * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.3|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502|502 Bad Gateway - HTTP | MDN
   */
  BAD_GATEWAY: 'Bad Gateway',

  /**
   * This response means that server could not understand the request due to invalid syntax.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.1|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400|400 Bad Request - HTTP | MDN
   */
  BAD_REQUEST: 'Bad Request',

  /**
   * This response is sent when a request conflicts with the current state of the server.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.8|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409|409 Conflict - HTTP | MDN
   */
  CONFLICT: 'Conflict',

  /**
   * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.2.1|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100|100 Continue - HTTP | MDN
   */
  CONTINUE: 'Continue',

  /**
   * The request has succeeded and a new resource has been created as a result of it.
   * This is typically the response sent after a PUT request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.2|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201|201 Created - HTTP | MDN
   */
  CREATED: 'Created',

  /**
   * This response code means the expectation indicated by the `Expect` request header field can't be met by the server.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.14|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417|417 Expectation Failed - HTTP | MDN
   */
  EXPECTATION_FAILED: 'Expectation Failed',

  /**
   * The request failed due to failure of a previous request.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.5|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424|424 Failed Dependency - HTTP | MDN
   */
  FAILED_DEPENDENCY: 'Failed Dependency',

  /**
   * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response.
   * Unlike `401`, the client's identity is known to the server.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.3|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403|403 Forbidden - HTTP | MDN
   */
  FORBIDDEN: 'Forbidden',

  /**
   * This error response is given when the server is acting as a gateway and cannot get a response in time.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.5|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504|504 Gateway Timeout - HTTP | MDN
   */
  GATEWAY_TIMEOUT: 'Gateway Timeout',

  /**
   * This response would be sent when the requested content has been permanently deleted from server, with no forwarding address.
   * Clients are expected to remove their caches and links to the resource.
   * The HTTP specification intends this status code to be used for "limited-time, promotional services".
   * APIs should not feel compelled to indicate resources that have been deleted with this status code.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.9|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410|410 Gone - HTTP | MDN
   */
  GONE: 'Gone',

  /**
   * The HTTP version used in the request is not supported by the server.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.6|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505|505 HTTP Version Not Supported - HTTP | MDN
   */
  HTTP_VERSION_NOT_SUPPORTED: 'HTTP Version Not Supported',

  /**
   * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot".
   * The resulting entity body MAY be short and stout.
   *
   * @link https://tools.ietf.org/html/rfc2324#section-2.3.2|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418|418 I'm a teapot - HTTP | MDN
   */
  IM_A_TEAPOT: "I'm a teapot",

  /**
   * The 507 (Insufficient Storage) status code means the method could not be performed on the resource
   * because the server is unable to store the representation needed to successfully complete the request.
   * This condition is considered to be temporary.
   * If the request which received this status code was the result of a user action,
   * the request MUST NOT be repeated until it is requested by a separate user action.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.6|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507|507 Insufficient Storage - HTTP | MDN
   */
  INSUFFICIENT_STORAGE: 'Insufficient Storage',

  /**
   * The server encountered an unexpected condition that prevented it from fulfilling the request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.1|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500|500 Internal Server Error - HTTP | MDN
   */
  INTERNAL_SERVER_ERROR: 'Internal Server Error',

  /**
   * The server rejected the request because the `Content-Length` header field is not defined and the server requires it.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.10|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411|411 Length Required - HTTP | MDN
   */
  LENGTH_REQUIRED: 'Length Required',

  /**
   * The resource that is being accessed is locked.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.4|RFC7231 Official Documentation
   */
  LOCKED: 'Locked',

  /**
   * @deprecated
   * A deprecated response used by the Spring Framework when a method has failed.
   *
   * @link https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt|RFC7231 Official Documentation
   */
  METHOD_FAILURE: 'Method Failure',

  /**
   * The request method is known by the server but has been disabled and cannot be used.
   * For example, an API may forbid DELETE-ing a resource.
   * The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.5|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405|405 Method Not Allowed - HTTP | MDN
   */
  METHOD_NOT_ALLOWED: 'Method Not Allowed',

  /**
   * This response code means that URI of requested resource has been changed.
   * Probably, new URI would be given in the response.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.2|RFC7231 Official Documentation
   */
  MOVED_PERMANENTLY: 'Moved Permanently',

  /**
   * This response code means that URI of requested resource has been changed temporarily.
   * New changes in the URI might be made in the future.
   * Therefore, this same URI should be used by the client in future requests.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.3|RFC7231 Official Documentation
   */
  MOVED_TEMPORARILY: 'Moved Temporarily',

  /**
   * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.2|RFC7231 Official Documentation
   */
  MULTI_STATUS: 'Multi-Status',

  /**
   * The request has more than one possible responses. User-agent or user should choose one of them.
   * There is no standardized way to choose one of the responses.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.1|RFC7231 Official Documentation
   */
  MULTIPLE_CHOICES: 'Multiple Choices',

  /**
   * The 511 status code indicates that the client needs to authenticate to gain network access.
   *
   * @link https://tools.ietf.org/html/rfc6585#section-6|RFC7231 Official Documentation
   */
  NETWORK_AUTHENTICATION_REQUIRED: 'Network Authentication Required',

  /**
   * There is no content to send for this request, but the headers may be useful.
   * The user-agent may update its cached headers for this resource with the new ones.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.5|RFC7231 Official Documentation
   */
  NO_CONTENT: 'No Content',

  /**
   * This response code means returned meta-information set is not exact set as available from the origin server,
   * but collected from a local or a third party copy. Except this condition, `200 OK` response should be preferred instead of this response.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.4|RFC7231 Official Documentation
   */
  NON_AUTHORITATIVE_INFORMATION: 'Non Authoritative Information',

  /**
   * This response is sent when the web server, after performing server-driven content negotiation,
   * doesn't find any content following the criteria given by the user agent.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.6|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406|406 Not Acceptable - HTTP | MDN
   */
  NOT_ACCEPTABLE: 'Not Acceptable',

  /**
   * The server can not find requested resource. In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   * Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client.
   * This response code is probably the most famous one due to its frequent occurrence on the web.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.4|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404|404 Not Found - HTTP | MDN
   */
  NOT_FOUND: 'Not Found',

  /**
   * The request method is not supported by the server and cannot be handled.
   * The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.2|RFC7231 Official Documentation
   */
  NOT_IMPLEMENTED: 'Not Implemented',

  /**
   * This is used for caching purposes. It is telling to client that response has not been modified.
   * So, client can continue to use same cached version of response.
   *
   * @link https://tools.ietf.org/html/rfc7232#section-4.1|RFC7231 Official Documentation
   */
  NOT_MODIFIED: 'Not Modified',

  /**
   * The request has succeeded. The meaning of a success varies depending on the HTTP method:
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.1|RFC7231 Official Documentation
   * GET: The resource has been fetched and is transmitted in the message body.
   * HEAD: The entity headers are in the message body.
   * POST: The resource describing the result of the action is transmitted in the message body.
   * TRACE: The message body contains the request message as received by the server
   */
  OK: 'OK',

  /**
   * This response code is used because of range header sent by the client to separate download into multiple streams.
   *
   * @link https://tools.ietf.org/html/rfc7233#section-4.1|RFC7231 Official Documentation
   */
  PARTIAL_CONTENT: 'Partial Content',

  /**
   * This response code is reserved for future use.
   * Initial aim for creating this code was using it for digital payment systems however this is not used currently.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.2|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402|402 Payment Required - HTTP | MDN
   */
  PAYMENT_REQUIRED: 'Payment Required',

  /**
   * This means that the resource is now permanently located at another URI, specified by the `Location` HTTP Response header.
   * This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent
   * must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
   *
   * @link https://tools.ietf.org/html/rfc7538#section-3|RFC7231 Official Documentation
   */
  PERMANENT_REDIRECT: 'Permanent Redirect',

  /**
   * The client has indicated preconditions in its headers which the server does not meet.
   *
   * @link https://tools.ietf.org/html/rfc7232#section-4.2|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412|412 Precondition Failed - HTTP | MDN
   */
  PRECONDITION_FAILED: 'Precondition Failed',

  /**
   * The origin server requires the request to be conditional.
   * Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it,
   * and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
   *
   * @link https://tools.ietf.org/html/rfc6585#section-3|RFC7231 Official Documentation
   */
  PRECONDITION_REQUIRED: 'Precondition Required',

  /**
   * This code indicates that the server has received and is processing the request, but no response is available yet.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.1|RFC7231 Official Documentation
   */
  PROCESSING: 'Processing',

  /**
   * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
   *
   * @link https://www.rfc-editor.org/rfc/rfc8297#page-3|RFC7231 Official Documentation
   */
  EARLY_HINTS: 'Early Hints',

  /**
   * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
   *
   * @link https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15|RFC7231 Official Documentation
   */
  UPGRADE_REQUIRED: 'Upgrade Required',

  /**
   * This is similar to 401 but authentication is needed to be done by a proxy.
   *
   * @link https://tools.ietf.org/html/rfc7235#section-3.2|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407|407 Proxy Authentication Required - HTTP | MDN
   */
  PROXY_AUTHENTICATION_REQUIRED: 'Proxy Authentication Required',

  /**
   * The server is unwilling to process the request because its header fields are too large.
   * The request MAY be resubmitted after reducing the size of the request header fields.
   *
   * @link https://tools.ietf.org/html/rfc6585#section-5|RFC7231 Official Documentation
   */
  REQUEST_HEADER_FIELDS_TOO_LARGE: 'Request Header Fields Too Large',

  /**
   * This response is sent on an idle connection by some servers, even without any previous request by the client.
   * It means that the server would like to shut down this unused connection.
   * This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9,
   * use HTTP pre-connection mechanisms to speed up surfing.
   * Also note that some servers merely shut down the connection without sending this message.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.7|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408|408 Request Timeout - HTTP | MDN
   */
  REQUEST_TIMEOUT: 'Request Timeout',

  /**
   * Request entity is larger than limits defined by server; the server might close the connection or return a `Retry-After` header field.
   *
   * Prior to RFC 9110 the response phrase for the status was `Payload Too Large`. That name is still widely used.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.11|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413|413 Content Too Large - HTTP | MDN
   */
  CONTENT_TOO_LARGE: 'Content Too Large',

  /**
   * The URI requested by the client is longer than the server is willing to interpret.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.12|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414|414 URI Too Long - HTTP | MDN
   */
  URI_TOO_LONG: 'URI Too Long',

  /**
   * The range specified by the `Range` header field in the request can't be fulfilled;
   * it's possible that the range is outside the size of the target URI's data.
   *
   * @link https://tools.ietf.org/html/rfc7233#section-4.4|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416|416 Range Not Satisfiable - HTTP | MDN
   */
  RANGE_NOT_SATISFIABLE: 'Range Not Satisfiable',

  /**
   * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.3.6|RFC7231 Official Documentation
   */
  RESET_CONTENT: 'Reset Content',

  /**
   * Server sent this response to directing client to get requested resource to another URI with an GET request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.4|RFC7231 Official Documentation
   */
  SEE_OTHER: 'See Other',

  /**
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.
   * Note that together with this response, a user-friendly page explaining the problem should be sent.
   * This responses should be used for temporary conditions and the `Retry-After`:
   * HTTP header should, if possible, contain the estimated time before the recovery of the service.
   * The webmaster must also take care about the caching-related headers that are sent along with this response,
   * as these temporary condition responses should usually not be cached.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.6.4|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503|503 Service Unavailable - HTTP | MDN
   */
  SERVICE_UNAVAILABLE: 'Service Unavailable',

  /**
   * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.2.2|RFC7231 Official Documentation
   */
  SWITCHING_PROTOCOLS: 'Switching Protocols',

  /**
   * Server sent this response to directing client to get requested resource to another URI with same method that used prior request.
   * This has the same semantic that the 302 Found HTTP response code, with the exception that the user agent
   * must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.7|RFC7231 Official Documentation
   */
  TEMPORARY_REDIRECT: 'Temporary Redirect',

  /**
   * The user has sent too many requests in a given amount of time ("rate limiting").
   *
   * @link https://tools.ietf.org/html/rfc6585#section-4|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429|429 Too Many Requests - HTTP | MDN
   */
  TOO_MANY_REQUESTS: 'Too Many Requests',

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   *
   * @link https://tools.ietf.org/html/rfc7235#section-3.1|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401|401 Unauthorized - HTTP | MDN
   */
  UNAUTHORIZED: 'Unauthorized',

  /**
   * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
   *
   * @link https://tools.ietf.org/html/rfc7725|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451|451 Unavailable For Legal Reasons - HTTP | MDN
   */
  UNAVAILABLE_FOR_LEGAL_REASONS: 'Unavailable For Legal Reasons',

  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   *
   * @link https://tools.ietf.org/html/rfc2518#section-10.3|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422|422 Unprocessable Entity - HTTP | MDN
   */
  UNPROCESSABLE_ENTITY: 'Unprocessable Entity',

  /**
   * The media format of the requested data is not supported by the server, so the server is rejecting the request.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.5.13|RFC7231 Official Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415|415 Unsupported Media Type - HTTP | MDN
   */
  UNSUPPORTED_MEDIA_TYPE: 'Unsupported Media Type',

  /**
   * @deprecated
   * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed
   * by a proxy.
   * It has been deprecated due to security concerns regarding in-band configuration of a proxy.
   *
   * @link https://tools.ietf.org/html/rfc7231#section-6.4.6|RFC7231 Official Documentation
   */
  USE_PROXY: 'Use Proxy',

  /**
   * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response
   * for the combination of scheme and authority that are included in the request URI.
   *
   * @link https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2|RFC7231 Official Documentation
   */
  MISDIRECTED_REQUEST: 'Misdirected Request',
};
