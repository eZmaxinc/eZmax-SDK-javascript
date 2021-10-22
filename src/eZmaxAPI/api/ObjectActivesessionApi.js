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
import ActivesessionGetCurrentV1Response from '../model/ActivesessionGetCurrentV1Response';

/**
* ObjectActivesession service.
* @module eZmaxAPI/api/ObjectActivesessionApi
* @version 1.1.1
*/
export default class ObjectActivesessionApi {

    /**
    * Constructs a new ObjectActivesessionApi. 
    * @alias module:eZmaxAPI/api/ObjectActivesessionApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activesessionGetCurrentV1 operation.
     * @callback module:eZmaxAPI/api/ObjectActivesessionApi~activesessionGetCurrentV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ActivesessionGetCurrentV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Current Activesession
     * Retrieve the details about the current activesession
     * @param {module:eZmaxAPI/api/ObjectActivesessionApi~activesessionGetCurrentV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ActivesessionGetCurrentV1Response}
     */
    activesessionGetCurrentV1(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActivesessionGetCurrentV1Response;
      return this.apiClient.callApi(
        '/1/object/activesession/getCurrent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
