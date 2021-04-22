/**
 * @name HttpRequestParamsInterface
 * @description
 * Request parameters for HttpClient get/post/put operations
 */
export interface HttpRequestParamsInterface {
  url: string
  requiresToken: boolean
  payload?: any
}
