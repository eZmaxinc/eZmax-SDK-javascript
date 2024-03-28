/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsigntemplateglobalGetAutocompleteV2Response from '../model/EzsigntemplateglobalGetAutocompleteV2Response';
import EzsigntemplateglobalGetObjectV2Response from '../model/EzsigntemplateglobalGetObjectV2Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsigntemplateglobal service.
* @module eZmaxAPI/api/ObjectEzsigntemplateglobalApi
* @version 1.2.0
*/
export default class ObjectEzsigntemplateglobalApi {

    /**
    * Constructs a new ObjectEzsigntemplateglobalApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplateglobalApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplateglobalGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateglobalApi~ezsigntemplateglobalGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateglobalGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplateglobals and IDs
     * Get the list of Ezsigntemplateglobal to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezsigntemplateglobals to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eFilterActive = 'Active')] Specify which results we want to display.
     * @param {String} [sQuery] Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateglobalApi~ezsigntemplateglobalGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateglobalGetAutocompleteV2Response}
     */
    ezsigntemplateglobalGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezsigntemplateglobalGetAutocompleteV2");
      }

      let pathParams = {
        'sSelector': sSelector
      };
      let queryParams = {
        'eFilterActive': opts['eFilterActive'],
        'sQuery': opts['sQuery']
      };
      let headerParams = {
        'Accept-Language': opts['Accept_Language']
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EzsigntemplateglobalGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplateglobal/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateglobalGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateglobalApi~ezsigntemplateglobalGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateglobalGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplateglobal
     * 
     * @param {Number} pkiEzsigntemplateglobalID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateglobalApi~ezsigntemplateglobalGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateglobalGetObjectV2Response}
     */
    ezsigntemplateglobalGetObjectV2(pkiEzsigntemplateglobalID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplateglobalID' is set
      if (pkiEzsigntemplateglobalID === undefined || pkiEzsigntemplateglobalID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateglobalID' when calling ezsigntemplateglobalGetObjectV2");
      }

      let pathParams = {
        'pkiEzsigntemplateglobalID': pkiEzsigntemplateglobalID
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
      let returnType = EzsigntemplateglobalGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplateglobal/{pkiEzsigntemplateglobalID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}