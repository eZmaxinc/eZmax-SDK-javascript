/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import EzsignfoldertypeGetListV1Response from '../model/EzsignfoldertypeGetListV1Response';

/**
* ObjectEzsignfoldertype service.
* @module eZmaxAPI/api/ObjectEzsignfoldertypeApi
* @version 1.1.0
*/
export default class ObjectEzsignfoldertypeApi {

    /**
    * Constructs a new ObjectEzsignfoldertypeApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignfoldertypeApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignfoldertypeGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsignfoldertype list
     * ## ⚠️EARLY ADOPTERS WARNING  ### This endpoint is not officially released. Its definition might still change and it might not be available in every environment and region.
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response}
     */
    ezsignfoldertypeGetListV1(callback) {
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
      let returnType = EzsignfoldertypeGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldertype/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
