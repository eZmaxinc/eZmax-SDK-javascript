/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.48
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApikeyCreateObjectV1Request from '../model/ApikeyCreateObjectV1Request';
import ApikeyCreateObjectV1Response from '../model/ApikeyCreateObjectV1Response';

/**
* ObjectApikey service.
* @module eZmaxAPI/api/ObjectApikeyApi
* @version 1.0.48
*/
export default class ObjectApikeyApi {

    /**
    * Constructs a new ObjectApikeyApi. 
    * @alias module:eZmaxAPI/api/ObjectApikeyApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apikeyCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectApikeyApi~apikeyCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Apikey
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/ApikeyCreateObjectV1Request>} ApikeyCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectApikeyApi~apikeyCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ApikeyCreateObjectV1Response}
     */
    apikeyCreateObjectV1(ApikeyCreateObjectV1Request, callback) {
      let postBody = ApikeyCreateObjectV1Request;
      // verify the required parameter 'ApikeyCreateObjectV1Request' is set
      if (ApikeyCreateObjectV1Request === undefined || ApikeyCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'ApikeyCreateObjectV1Request' when calling apikeyCreateObjectV1");
      }

      let pathParams = {
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
      let returnType = ApikeyCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/apikey', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
