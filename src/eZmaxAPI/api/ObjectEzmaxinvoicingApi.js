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
import CommonGetAutocompleteV1Response from '../model/CommonGetAutocompleteV1Response';
import CommonResponseError from '../model/CommonResponseError';
import EzmaxinvoicingGetAutocompleteV2Response from '../model/EzmaxinvoicingGetAutocompleteV2Response';
import EzmaxinvoicingGetObjectV2Response from '../model/EzmaxinvoicingGetObjectV2Response';
import EzmaxinvoicingGetProvisionalV1Response from '../model/EzmaxinvoicingGetProvisionalV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzmaxinvoicing service.
* @module eZmaxAPI/api/ObjectEzmaxinvoicingApi
* @version 1.1.18
*/
export default class ObjectEzmaxinvoicingApi {

    /**
    * Constructs a new ObjectEzmaxinvoicingApi. 
    * @alias module:eZmaxAPI/api/ObjectEzmaxinvoicingApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezmaxinvoicingGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezmaxinvoicings and IDs
     * Get the list of Ezmaxinvoicing to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezmaxinvoicings to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eFilterActive] Specify which results we want to display. Active is the default value.
     * @param {String} [sQuery] Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    ezmaxinvoicingGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezmaxinvoicingGetAutocompleteV1");
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
        '/1/object/ezmaxinvoicing/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezmaxinvoicingGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezmaxinvoicings and IDs
     * Get the list of Ezmaxinvoicing to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezmaxinvoicings to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eFilterActive = 'Active')] Specify which results we want to display.
     * @param {String} [sQuery] Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2Response}
     */
    ezmaxinvoicingGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezmaxinvoicingGetAutocompleteV2");
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
      let returnType = EzmaxinvoicingGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/ezmaxinvoicing/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezmaxinvoicingGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezmaxinvoicing
     * 
     * @param {Number} pkiEzmaxinvoicingID 
     * @param {module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzmaxinvoicingGetObjectV2Response}
     */
    ezmaxinvoicingGetObjectV2(pkiEzmaxinvoicingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzmaxinvoicingID' is set
      if (pkiEzmaxinvoicingID === undefined || pkiEzmaxinvoicingID === null) {
        throw new Error("Missing the required parameter 'pkiEzmaxinvoicingID' when calling ezmaxinvoicingGetObjectV2");
      }

      let pathParams = {
        'pkiEzmaxinvoicingID': pkiEzmaxinvoicingID
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
      let returnType = EzmaxinvoicingGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezmaxinvoicing/{pkiEzmaxinvoicingID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezmaxinvoicingGetProvisionalV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetProvisionalV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingGetProvisionalV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve provisional Ezmaxinvoicing
     * 
     * @param {module:eZmaxAPI/api/ObjectEzmaxinvoicingApi~ezmaxinvoicingGetProvisionalV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzmaxinvoicingGetProvisionalV1Response}
     */
    ezmaxinvoicingGetProvisionalV1(callback) {
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
      let returnType = EzmaxinvoicingGetProvisionalV1Response;
      return this.apiClient.callApi(
        '/1/object/ezmaxinvoicing/getProvisional', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
