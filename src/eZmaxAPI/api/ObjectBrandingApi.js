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
import BrandingCreateObjectV1Request from '../model/BrandingCreateObjectV1Request';
import BrandingCreateObjectV1Response from '../model/BrandingCreateObjectV1Response';
import BrandingEditObjectV1Request from '../model/BrandingEditObjectV1Request';
import BrandingEditObjectV1Response from '../model/BrandingEditObjectV1Response';
import BrandingGetAutocompleteV2Response from '../model/BrandingGetAutocompleteV2Response';
import BrandingGetListV1Response from '../model/BrandingGetListV1Response';
import BrandingGetObjectV2Response from '../model/BrandingGetObjectV2Response';
import CommonResponseError from '../model/CommonResponseError';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectBranding service.
* @module eZmaxAPI/api/ObjectBrandingApi
* @version 1.2.0
*/
export default class ObjectBrandingApi {

    /**
    * Constructs a new ObjectBrandingApi. 
    * @alias module:eZmaxAPI/api/ObjectBrandingApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the brandingCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectBrandingApi~brandingCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BrandingCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Branding
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/BrandingCreateObjectV1Request} BrandingCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectBrandingApi~brandingCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BrandingCreateObjectV1Response}
     */
    brandingCreateObjectV1(BrandingCreateObjectV1Request, callback) {
      let postBody = BrandingCreateObjectV1Request;
      // verify the required parameter 'BrandingCreateObjectV1Request' is set
      if (BrandingCreateObjectV1Request === undefined || BrandingCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'BrandingCreateObjectV1Request' when calling brandingCreateObjectV1");
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
      let returnType = BrandingCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/branding', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the brandingEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectBrandingApi~brandingEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BrandingEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Branding
     * 
     * @param {Number} pkiBrandingID 
     * @param {module:eZmaxAPI/model/BrandingEditObjectV1Request} BrandingEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectBrandingApi~brandingEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BrandingEditObjectV1Response}
     */
    brandingEditObjectV1(pkiBrandingID, BrandingEditObjectV1Request, callback) {
      let postBody = BrandingEditObjectV1Request;
      // verify the required parameter 'pkiBrandingID' is set
      if (pkiBrandingID === undefined || pkiBrandingID === null) {
        throw new Error("Missing the required parameter 'pkiBrandingID' when calling brandingEditObjectV1");
      }
      // verify the required parameter 'BrandingEditObjectV1Request' is set
      if (BrandingEditObjectV1Request === undefined || BrandingEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'BrandingEditObjectV1Request' when calling brandingEditObjectV1");
      }

      let pathParams = {
        'pkiBrandingID': pkiBrandingID
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
      let returnType = BrandingEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/branding/{pkiBrandingID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the brandingGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectBrandingApi~brandingGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BrandingGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Brandings and IDs
     * Get the list of Branding to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Brandings to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eFilterActive = 'Active')] Specify which results we want to display.
     * @param {String} [sQuery] Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {module:eZmaxAPI/api/ObjectBrandingApi~brandingGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BrandingGetAutocompleteV2Response}
     */
    brandingGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling brandingGetAutocompleteV2");
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
      let returnType = BrandingGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/branding/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the brandingGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectBrandingApi~brandingGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BrandingGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Branding list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eBrandingLogo | Default<br>JPEG<br>PNG | | eBrandingLogointerface | Default<br>JPEG<br>PNG |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eOrderBy] Specify how you want the results to be sorted
     * @param {Number} [iRowMax] 
     * @param {Number} [iRowOffset = 0)] 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {String} [sFilter] 
     * @param {module:eZmaxAPI/api/ObjectBrandingApi~brandingGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BrandingGetListV1Response}
     */
    brandingGetListV1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'eOrderBy': opts['eOrderBy'],
        'iRowMax': opts['iRowMax'],
        'iRowOffset': opts['iRowOffset'],
        'sFilter': opts['sFilter']
      };
      let headerParams = {
        'Accept-Language': opts['Accept_Language']
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      let returnType = BrandingGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/branding/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the brandingGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectBrandingApi~brandingGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BrandingGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Branding
     * 
     * @param {Number} pkiBrandingID 
     * @param {module:eZmaxAPI/api/ObjectBrandingApi~brandingGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BrandingGetObjectV2Response}
     */
    brandingGetObjectV2(pkiBrandingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiBrandingID' is set
      if (pkiBrandingID === undefined || pkiBrandingID === null) {
        throw new Error("Missing the required parameter 'pkiBrandingID' when calling brandingGetObjectV2");
      }

      let pathParams = {
        'pkiBrandingID': pkiBrandingID
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
      let returnType = BrandingGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/branding/{pkiBrandingID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
