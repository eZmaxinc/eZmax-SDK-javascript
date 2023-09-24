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
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';
import TaxassignmentGetAutocompleteV2Response from '../model/TaxassignmentGetAutocompleteV2Response';

/**
* ObjectTaxassignment service.
* @module eZmaxAPI/api/ObjectTaxassignmentApi
* @version 1.2.0
*/
export default class ObjectTaxassignmentApi {

    /**
    * Constructs a new ObjectTaxassignmentApi. 
    * @alias module:eZmaxAPI/api/ObjectTaxassignmentApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the taxassignmentGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectTaxassignmentApi~taxassignmentGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/TaxassignmentGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Taxassignments and IDs
     * Get the list of Taxassignment to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Taxassignments to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eFilterActive = 'Active')] Specify which results we want to display.
     * @param {String} [sQuery] Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {module:eZmaxAPI/api/ObjectTaxassignmentApi~taxassignmentGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/TaxassignmentGetAutocompleteV2Response}
     */
    taxassignmentGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling taxassignmentGetAutocompleteV2");
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
      let returnType = TaxassignmentGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/taxassignment/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
