/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthenticateAuthenticateV2Request from '../model/AuthenticateAuthenticateV2Request';
import AuthenticateAuthenticateV2Response from '../model/AuthenticateAuthenticateV2Response';
import CommonResponseError from '../model/CommonResponseError';

/**
* ModuleAuthenticate service.
* @module eZmaxAPI/api/ModuleAuthenticateApi
* @version 1.1.1
*/
export default class ModuleAuthenticateApi {

    /**
    * Constructs a new ModuleAuthenticateApi. 
    * @alias module:eZmaxAPI/api/ModuleAuthenticateApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticateAuthenticateV2 operation.
     * @callback module:eZmaxAPI/api/ModuleAuthenticateApi~authenticateAuthenticateV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate a user
     * This endpoint authenticates a user.
     * @param {module:eZmaxAPI/model/String} eSessionType 
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2Request} AuthenticateAuthenticateV2Request 
     * @param {module:eZmaxAPI/api/ModuleAuthenticateApi~authenticateAuthenticateV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/AuthenticateAuthenticateV2Response}
     */
    authenticateAuthenticateV2(eSessionType, AuthenticateAuthenticateV2Request, callback) {
      let postBody = AuthenticateAuthenticateV2Request;
      // verify the required parameter 'eSessionType' is set
      if (eSessionType === undefined || eSessionType === null) {
        throw new Error("Missing the required parameter 'eSessionType' when calling authenticateAuthenticateV2");
      }
      // verify the required parameter 'AuthenticateAuthenticateV2Request' is set
      if (AuthenticateAuthenticateV2Request === undefined || AuthenticateAuthenticateV2Request === null) {
        throw new Error("Missing the required parameter 'AuthenticateAuthenticateV2Request' when calling authenticateAuthenticateV2");
      }

      let pathParams = {
        'eSessionType': eSessionType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticateAuthenticateV2Response;
      return this.apiClient.callApi(
        '/2/module/authenticate/authenticate/{eSessionType}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
