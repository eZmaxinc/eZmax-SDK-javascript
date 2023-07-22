/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ScimServiceProviderConfig from '../model/ScimServiceProviderConfig';

/**
* ScimServiceProviderConfig service.
* @module eZmaxAPI/api/ScimServiceProviderConfigApi
* @version 1.1.18
*/
export default class ScimServiceProviderConfigApi {

    /**
    * Constructs a new ScimServiceProviderConfigApi. 
    * @alias module:eZmaxAPI/api/ScimServiceProviderConfigApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the serviceProviderConfigGetObjectScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimServiceProviderConfigApi~serviceProviderConfigGetObjectScimV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ScimServiceProviderConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Service Provider Configuration
     * @param {module:eZmaxAPI/api/ScimServiceProviderConfigApi~serviceProviderConfigGetObjectScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ScimServiceProviderConfig}
     */
    serviceProviderConfigGetObjectScimV2(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScimServiceProviderConfig;
      return this.apiClient.callApi(
        '/2/scim/ServiceProviderConfig', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}