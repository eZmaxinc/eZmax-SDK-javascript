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
import EzsignSuggestSignersV1Response from '../model/EzsignSuggestSignersV1Response';
import EzsignSuggestTemplatesV1Response from '../model/EzsignSuggestTemplatesV1Response';

/**
* ModuleEzsign service.
* @module eZmaxAPI/api/ModuleEzsignApi
* @version 1.1.18
*/
export default class ModuleEzsignApi {

    /**
    * Constructs a new ModuleEzsignApi. 
    * @alias module:eZmaxAPI/api/ModuleEzsignApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignSuggestSignersV1 operation.
     * @callback module:eZmaxAPI/api/ModuleEzsignApi~ezsignSuggestSignersV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignSuggestSignersV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suggest signers
     * Retrieve previously used Ezsignsigners and all users from the system
     * @param {module:eZmaxAPI/api/ModuleEzsignApi~ezsignSuggestSignersV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignSuggestSignersV1Response}
     */
    ezsignSuggestSignersV1(callback) {
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
      let returnType = EzsignSuggestSignersV1Response;
      return this.apiClient.callApi(
        '/1/module/ezsign/suggestSigners', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignSuggestTemplatesV1 operation.
     * @callback module:eZmaxAPI/api/ModuleEzsignApi~ezsignSuggestTemplatesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignSuggestTemplatesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suggest templates
     * Retrieve Ezsigntemplates and Ezsigntemplatepackages that can be imported in a Ezsignfolder
     * @param {Object} opts Optional parameters
     * @param {Number} [fkiEzsignfoldertypeID] 
     * @param {module:eZmaxAPI/api/ModuleEzsignApi~ezsignSuggestTemplatesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignSuggestTemplatesV1Response}
     */
    ezsignSuggestTemplatesV1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'fkiEzsignfoldertypeID': opts['fkiEzsignfoldertypeID']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EzsignSuggestTemplatesV1Response;
      return this.apiClient.callApi(
        '/1/module/ezsign/suggestTemplates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
