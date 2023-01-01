/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonGetAutocompleteV1Response from '../model/CommonGetAutocompleteV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';
import PeriodGetAutocompleteV2Response from '../model/PeriodGetAutocompleteV2Response';

/**
* ObjectPeriod service.
* @module eZmaxAPI/api/ObjectPeriodApi
* @version 1.1.17
*/
export default class ObjectPeriodApi {

    /**
    * Constructs a new ObjectPeriodApi. 
    * @alias module:eZmaxAPI/api/ObjectPeriodApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the periodGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectPeriodApi~periodGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Periods and IDs
     * Get the list of Periods to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The types of Periods to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectPeriodApi~periodGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    periodGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling periodGetAutocompleteV1");
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
      let returnType = CommonGetAutocompleteV1Response;
      return this.apiClient.callApi(
        '/1/object/period/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the periodGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectPeriodApi~periodGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/PeriodGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Periods and IDs
     * Get the list of Period to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Periods to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectPeriodApi~periodGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/PeriodGetAutocompleteV2Response}
     */
    periodGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling periodGetAutocompleteV2");
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
      let returnType = PeriodGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/period/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
