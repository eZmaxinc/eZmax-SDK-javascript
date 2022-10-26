/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonGetAutocompleteDisabledV1Response from '../model/CommonGetAutocompleteDisabledV1Response';
import CommonResponseError from '../model/CommonResponseError';
import EzsigntemplatepackageCreateObjectV1Request from '../model/EzsigntemplatepackageCreateObjectV1Request';
import EzsigntemplatepackageCreateObjectV1Response from '../model/EzsigntemplatepackageCreateObjectV1Response';
import EzsigntemplatepackageDeleteObjectV1Response from '../model/EzsigntemplatepackageDeleteObjectV1Response';
import EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request from '../model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request';
import EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Response from '../model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Response';
import EzsigntemplatepackageEditObjectV1Request from '../model/EzsigntemplatepackageEditObjectV1Request';
import EzsigntemplatepackageEditObjectV1Response from '../model/EzsigntemplatepackageEditObjectV1Response';
import EzsigntemplatepackageGetAutocompleteV2Response from '../model/EzsigntemplatepackageGetAutocompleteV2Response';
import EzsigntemplatepackageGetListV1Response from '../model/EzsigntemplatepackageGetListV1Response';
import EzsigntemplatepackageGetObjectV1Response from '../model/EzsigntemplatepackageGetObjectV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsigntemplatepackage service.
* @module eZmaxAPI/api/ObjectEzsigntemplatepackageApi
* @version 1.1.12
*/
export default class ObjectEzsigntemplatepackageApi {

    /**
    * Constructs a new ObjectEzsigntemplatepackageApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatepackageCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplatepackage
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Request} EzsigntemplatepackageCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Response}
     */
    ezsigntemplatepackageCreateObjectV1(EzsigntemplatepackageCreateObjectV1Request, callback) {
      let postBody = EzsigntemplatepackageCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplatepackageCreateObjectV1Request' is set
      if (EzsigntemplatepackageCreateObjectV1Request === undefined || EzsigntemplatepackageCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatepackageCreateObjectV1Request' when calling ezsigntemplatepackageCreateObjectV1");
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
      let returnType = EzsigntemplatepackageCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplatepackage
     * 
     * @param {Number} pkiEzsigntemplatepackageID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageDeleteObjectV1Response}
     */
    ezsigntemplatepackageDeleteObjectV1(pkiEzsigntemplatepackageID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackageID' is set
      if (pkiEzsigntemplatepackageID === undefined || pkiEzsigntemplatepackageID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackageID' when calling ezsigntemplatepackageDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackageID': pkiEzsigntemplatepackageID
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
      let returnType = EzsigntemplatepackageDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageEditEzsigntemplatepackagesignersV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageEditEzsigntemplatepackagesignersV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit multiple Ezsigntemplatepackagesigners
     * Using this endpoint, you can edit multiple Ezsigntemplatepackagesigners at the same time.
     * @param {Number} pkiEzsigntemplatepackageID 
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request} EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageEditEzsigntemplatepackagesignersV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Response}
     */
    ezsigntemplatepackageEditEzsigntemplatepackagesignersV1(pkiEzsigntemplatepackageID, EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request, callback) {
      let postBody = EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request;
      // verify the required parameter 'pkiEzsigntemplatepackageID' is set
      if (pkiEzsigntemplatepackageID === undefined || pkiEzsigntemplatepackageID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackageID' when calling ezsigntemplatepackageEditEzsigntemplatepackagesignersV1");
      }
      // verify the required parameter 'EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request' is set
      if (EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request === undefined || EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Request' when calling ezsigntemplatepackageEditEzsigntemplatepackagesignersV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackageID': pkiEzsigntemplatepackageID
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
      let returnType = EzsigntemplatepackageEditEzsigntemplatepackagesignersV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}/editEzsigntemplatepackagesigners', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsigntemplatepackage
     * 
     * @param {Number} pkiEzsigntemplatepackageID 
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Request} EzsigntemplatepackageEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageEditObjectV1Response}
     */
    ezsigntemplatepackageEditObjectV1(pkiEzsigntemplatepackageID, EzsigntemplatepackageEditObjectV1Request, callback) {
      let postBody = EzsigntemplatepackageEditObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplatepackageID' is set
      if (pkiEzsigntemplatepackageID === undefined || pkiEzsigntemplatepackageID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackageID' when calling ezsigntemplatepackageEditObjectV1");
      }
      // verify the required parameter 'EzsigntemplatepackageEditObjectV1Request' is set
      if (EzsigntemplatepackageEditObjectV1Request === undefined || EzsigntemplatepackageEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatepackageEditObjectV1Request' when calling ezsigntemplatepackageEditObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackageID': pkiEzsigntemplatepackageID
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
      let returnType = EzsigntemplatepackageEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteDisabledV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplatepackages and IDs
     * Get the list of Ezsigntemplatepackage to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezsigntemplatepackages to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteDisabledV1Response}
     */
    ezsigntemplatepackageGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezsigntemplatepackageGetAutocompleteV1");
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
      let returnType = CommonGetAutocompleteDisabledV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageGetAutocompleteV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetAutocompleteV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplatepackages and IDs
     * Get the list of Ezsigntemplatepackage to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezsigntemplatepackages to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetAutocompleteV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2Response}
     */
    ezsigntemplatepackageGetAutocompleteV2(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezsigntemplatepackageGetAutocompleteV2");
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
      let returnType = EzsigntemplatepackageGetAutocompleteV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplatepackage/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplatepackage list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsigntemplatepackageType | Company<br>Team<br>User<br>Usergroup |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageGetListV1Response}
     */
    ezsigntemplatepackageGetListV1(opts, callback) {
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
      let returnType = EzsigntemplatepackageGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackageGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatepackage
     * 
     * @param {Number} pkiEzsigntemplatepackageID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV1Response}
     */
    ezsigntemplatepackageGetObjectV1(pkiEzsigntemplatepackageID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackageID' is set
      if (pkiEzsigntemplatepackageID === undefined || pkiEzsigntemplatepackageID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackageID' when calling ezsigntemplatepackageGetObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackageID': pkiEzsigntemplatepackageID
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
      let returnType = EzsigntemplatepackageGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
