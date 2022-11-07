/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsignbulksendCreateEzsignbulksendtransmissionV1Request from '../model/EzsignbulksendCreateEzsignbulksendtransmissionV1Request';
import EzsignbulksendCreateEzsignbulksendtransmissionV1Response from '../model/EzsignbulksendCreateEzsignbulksendtransmissionV1Response';
import EzsignbulksendCreateObjectV1Request from '../model/EzsignbulksendCreateObjectV1Request';
import EzsignbulksendCreateObjectV1Response from '../model/EzsignbulksendCreateObjectV1Response';
import EzsignbulksendDeleteObjectV1Response from '../model/EzsignbulksendDeleteObjectV1Response';
import EzsignbulksendEditObjectV1Request from '../model/EzsignbulksendEditObjectV1Request';
import EzsignbulksendEditObjectV1Response from '../model/EzsignbulksendEditObjectV1Response';
import EzsignbulksendGetEzsignbulksendtransmissionsV1Response from '../model/EzsignbulksendGetEzsignbulksendtransmissionsV1Response';
import EzsignbulksendGetFormsDataV1Response from '../model/EzsignbulksendGetFormsDataV1Response';
import EzsignbulksendGetListV1Response from '../model/EzsignbulksendGetListV1Response';
import EzsignbulksendGetObjectV1Response from '../model/EzsignbulksendGetObjectV1Response';
import EzsignbulksendGetObjectV2Response from '../model/EzsignbulksendGetObjectV2Response';
import EzsignbulksendReorderV1Request from '../model/EzsignbulksendReorderV1Request';
import EzsignbulksendReorderV1Response from '../model/EzsignbulksendReorderV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsignbulksend service.
* @module eZmaxAPI/api/ObjectEzsignbulksendApi
* @version 1.1.15
*/
export default class ObjectEzsignbulksendApi {

    /**
    * Constructs a new ObjectEzsignbulksendApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignbulksendApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignbulksendCreateEzsignbulksendtransmissionV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendCreateEzsignbulksendtransmissionV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignbulksendtransmission in the Ezsignbulksend
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1Request} EzsignbulksendCreateEzsignbulksendtransmissionV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendCreateEzsignbulksendtransmissionV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1Response}
     */
    ezsignbulksendCreateEzsignbulksendtransmissionV1(pkiEzsignbulksendID, EzsignbulksendCreateEzsignbulksendtransmissionV1Request, callback) {
      let postBody = EzsignbulksendCreateEzsignbulksendtransmissionV1Request;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendCreateEzsignbulksendtransmissionV1");
      }
      // verify the required parameter 'EzsignbulksendCreateEzsignbulksendtransmissionV1Request' is set
      if (EzsignbulksendCreateEzsignbulksendtransmissionV1Request === undefined || EzsignbulksendCreateEzsignbulksendtransmissionV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksendCreateEzsignbulksendtransmissionV1Request' when calling ezsignbulksendCreateEzsignbulksendtransmissionV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendCreateEzsignbulksendtransmissionV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}/createEzsignbulksendtransmission', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignbulksend
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Request} EzsignbulksendCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendCreateObjectV1Response}
     */
    ezsignbulksendCreateObjectV1(EzsignbulksendCreateObjectV1Request, callback) {
      let postBody = EzsignbulksendCreateObjectV1Request;
      // verify the required parameter 'EzsignbulksendCreateObjectV1Request' is set
      if (EzsignbulksendCreateObjectV1Request === undefined || EzsignbulksendCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksendCreateObjectV1Request' when calling ezsignbulksendCreateObjectV1");
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
      let returnType = EzsignbulksendCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignbulksend
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendDeleteObjectV1Response}
     */
    ezsignbulksendDeleteObjectV1(pkiEzsignbulksendID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsignbulksend
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/model/EzsignbulksendEditObjectV1Request} EzsignbulksendEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendEditObjectV1Response}
     */
    ezsignbulksendEditObjectV1(pkiEzsignbulksendID, EzsignbulksendEditObjectV1Request, callback) {
      let postBody = EzsignbulksendEditObjectV1Request;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendEditObjectV1");
      }
      // verify the required parameter 'EzsignbulksendEditObjectV1Request' is set
      if (EzsignbulksendEditObjectV1Request === undefined || EzsignbulksendEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksendEditObjectV1Request' when calling ezsignbulksendEditObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetCsvTemplateV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetCsvTemplateV1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksend's empty Csv template
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/model/String} eCsvSeparator Separator that will be used to separate fields
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetCsvTemplateV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    ezsignbulksendGetCsvTemplateV1(pkiEzsignbulksendID, eCsvSeparator, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendGetCsvTemplateV1");
      }
      // verify the required parameter 'eCsvSeparator' is set
      if (eCsvSeparator === undefined || eCsvSeparator === null) {
        throw new Error("Missing the required parameter 'eCsvSeparator' when calling ezsignbulksendGetCsvTemplateV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
      };
      let queryParams = {
        'eCsvSeparator': eCsvSeparator
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}/getCsvTemplate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetEzsignbulksendtransmissionsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetEzsignbulksendtransmissionsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksend's Ezsignbulksendtransmissions
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetEzsignbulksendtransmissionsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1Response}
     */
    ezsignbulksendGetEzsignbulksendtransmissionsV1(pkiEzsignbulksendID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendGetEzsignbulksendtransmissionsV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendGetEzsignbulksendtransmissionsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}/getEzsignbulksendtransmissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetFormsDataV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetFormsDataV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksend's forms data
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetFormsDataV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1Response}
     */
    ezsignbulksendGetFormsDataV1(pkiEzsignbulksendID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendGetFormsDataV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/zip'];
      let returnType = EzsignbulksendGetFormsDataV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}/getFormsData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsignbulksend list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsignfoldertypePrivacylevel | User<br>Usergroup |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendGetListV1Response}
     */
    ezsignbulksendGetListV1(opts, callback) {
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
      let returnType = EzsignbulksendGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksend
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendGetObjectV1Response}
     */
    ezsignbulksendGetObjectV1(pkiEzsignbulksendID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksend
     * 
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendGetObjectV2Response}
     */
    ezsignbulksendGetObjectV2(pkiEzsignbulksendID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendGetObjectV2");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsignbulksend/{pkiEzsignbulksendID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendReorderV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendReorderV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendReorderV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reorder Ezsignbulksenddocumentmappings in the Ezsignbulksend
     * @param {Number} pkiEzsignbulksendID 
     * @param {module:eZmaxAPI/model/EzsignbulksendReorderV1Request} EzsignbulksendReorderV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendApi~ezsignbulksendReorderV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendReorderV1Response}
     */
    ezsignbulksendReorderV1(pkiEzsignbulksendID, EzsignbulksendReorderV1Request, callback) {
      let postBody = EzsignbulksendReorderV1Request;
      // verify the required parameter 'pkiEzsignbulksendID' is set
      if (pkiEzsignbulksendID === undefined || pkiEzsignbulksendID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendID' when calling ezsignbulksendReorderV1");
      }
      // verify the required parameter 'EzsignbulksendReorderV1Request' is set
      if (EzsignbulksendReorderV1Request === undefined || EzsignbulksendReorderV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksendReorderV1Request' when calling ezsignbulksendReorderV1");
      }

      let pathParams = {
        'pkiEzsignbulksendID': pkiEzsignbulksendID
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
      let returnType = EzsignbulksendReorderV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksend/{pkiEzsignbulksendID}/reorder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
