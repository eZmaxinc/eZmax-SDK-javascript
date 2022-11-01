/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BillingentityinternalGetAutocompleteV2Response from '../model/BillingentityinternalGetAutocompleteV2Response';
import CommonGetAutocompleteV1Response from '../model/CommonGetAutocompleteV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectBillingentityinternal service.
* @module eZmaxAPI/api/ObjectBillingentityinternalApi
* @version 1.1.14
*/
export default class ObjectBillingentityinternalApi {

    /**
    * Constructs a new ObjectBillingentityinternalApi. 
    * @alias module:eZmaxAPI/api/ObjectBillingentityinternalApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the billingentityinternalGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectBillingentityinternalApi~billingentityinternalGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Billingentityinternals and IDs
     * Get the list of Billingentityinternal to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Billingentityinternals to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectBillingentityinternalApi~billingentityinternalGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    billingentityinternalGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling billingentityinternalGetAutocompleteV1");
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
        '/1/object/billingentityinternal/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingentityinternalGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectBillingentityinternalApi~billingentityinternalGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BillingentityinternalGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Billingentityinternals and IDs
     * Get the list of Billingentityinternal to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Billingentityinternals to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectBillingentityinternalApi~billingentityinternalGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BillingentityinternalGetAutocompleteV2Response}
     */
    billingentityinternalGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling billingentityinternalGetAutocompleteV2");
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
      let returnType = BillingentityinternalGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/billingentityinternal/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
