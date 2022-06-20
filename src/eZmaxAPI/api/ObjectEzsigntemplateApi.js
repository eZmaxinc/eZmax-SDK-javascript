/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
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
import EzsigntemplateCreateObjectV1Request from '../model/EzsigntemplateCreateObjectV1Request';
import EzsigntemplateCreateObjectV1Response from '../model/EzsigntemplateCreateObjectV1Response';
import EzsigntemplateDeleteObjectV1Response from '../model/EzsigntemplateDeleteObjectV1Response';
import EzsigntemplateEditObjectV1Request from '../model/EzsigntemplateEditObjectV1Request';
import EzsigntemplateEditObjectV1Response from '../model/EzsigntemplateEditObjectV1Response';
import EzsigntemplateGetListV1Response from '../model/EzsigntemplateGetListV1Response';
import EzsigntemplateGetObjectV1Response from '../model/EzsigntemplateGetObjectV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsigntemplate service.
* @module eZmaxAPI/api/ObjectEzsigntemplateApi
* @version 1.1.9
*/
export default class ObjectEzsigntemplateApi {

    /**
    * Constructs a new ObjectEzsigntemplateApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplateApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplateCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplate
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Request} EzsigntemplateCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Response}
     */
    ezsigntemplateCreateObjectV1(EzsigntemplateCreateObjectV1Request, callback) {
      let postBody = EzsigntemplateCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplateCreateObjectV1Request' is set
      if (EzsigntemplateCreateObjectV1Request === undefined || EzsigntemplateCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplateCreateObjectV1Request' when calling ezsigntemplateCreateObjectV1");
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
      let returnType = EzsigntemplateCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplate
     * 
     * @param {Number} pkiEzsigntemplateID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateDeleteObjectV1Response}
     */
    ezsigntemplateDeleteObjectV1(pkiEzsigntemplateID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplateID' is set
      if (pkiEzsigntemplateID === undefined || pkiEzsigntemplateID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateID' when calling ezsigntemplateDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplateID': pkiEzsigntemplateID
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
      let returnType = EzsigntemplateDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplate/{pkiEzsigntemplateID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsigntemplate
     * 
     * @param {Number} pkiEzsigntemplateID 
     * @param {module:eZmaxAPI/model/EzsigntemplateEditObjectV1Request} EzsigntemplateEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateEditObjectV1Response}
     */
    ezsigntemplateEditObjectV1(pkiEzsigntemplateID, EzsigntemplateEditObjectV1Request, callback) {
      let postBody = EzsigntemplateEditObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplateID' is set
      if (pkiEzsigntemplateID === undefined || pkiEzsigntemplateID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateID' when calling ezsigntemplateEditObjectV1");
      }
      // verify the required parameter 'EzsigntemplateEditObjectV1Request' is set
      if (EzsigntemplateEditObjectV1Request === undefined || EzsigntemplateEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplateEditObjectV1Request' when calling ezsigntemplateEditObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplateID': pkiEzsigntemplateID
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
      let returnType = EzsigntemplateEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplate/{pkiEzsigntemplateID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplate and IDs
     * Get the list of Ezsigntemplate to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezsigntemplate to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    ezsigntemplateGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezsigntemplateGetAutocompleteV1");
      }

      let pathParams = {
        'sSelector': sSelector
      };
      let queryParams = {
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
        '/1/object/ezsigntemplate/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplate list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsigntemplateType | Company<br>Team<br>User<br>Usergroup | 
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateGetListV1Response}
     */
    ezsigntemplateGetListV1(opts, callback) {
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
      let returnType = EzsigntemplateGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplate/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplate
     * 
     * @param {Number} pkiEzsigntemplateID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateApi~ezsigntemplateGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateGetObjectV1Response}
     */
    ezsigntemplateGetObjectV1(pkiEzsigntemplateID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplateID' is set
      if (pkiEzsigntemplateID === undefined || pkiEzsigntemplateID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateID' when calling ezsigntemplateGetObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplateID': pkiEzsigntemplateID
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
      let returnType = EzsigntemplateGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplate/{pkiEzsigntemplateID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
