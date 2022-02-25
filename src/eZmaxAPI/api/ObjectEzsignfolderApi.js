/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsignfolderCreateObjectV1Request from '../model/EzsignfolderCreateObjectV1Request';
import EzsignfolderCreateObjectV1Response from '../model/EzsignfolderCreateObjectV1Response';
import EzsignfolderDeleteObjectV1Response from '../model/EzsignfolderDeleteObjectV1Response';
import EzsignfolderEditObjectV1Request from '../model/EzsignfolderEditObjectV1Request';
import EzsignfolderEditObjectV1Response from '../model/EzsignfolderEditObjectV1Response';
import EzsignfolderGetEzsigndocumentsV1Response from '../model/EzsignfolderGetEzsigndocumentsV1Response';
import EzsignfolderGetEzsignfoldersignerassociationsV1Response from '../model/EzsignfolderGetEzsignfoldersignerassociationsV1Response';
import EzsignfolderGetFormsDataV1Response from '../model/EzsignfolderGetFormsDataV1Response';
import EzsignfolderGetListV1Response from '../model/EzsignfolderGetListV1Response';
import EzsignfolderGetObjectV1Response from '../model/EzsignfolderGetObjectV1Response';
import EzsignfolderSendV1Request from '../model/EzsignfolderSendV1Request';
import EzsignfolderSendV1Response from '../model/EzsignfolderSendV1Response';
import EzsignfolderUnsendV1Response from '../model/EzsignfolderUnsendV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsignfolder service.
* @module eZmaxAPI/api/ObjectEzsignfolderApi
* @version 1.1.4
*/
export default class ObjectEzsignfolderApi {

    /**
    * Constructs a new ObjectEzsignfolderApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignfolderApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignfolderCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignfolder
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/EzsignfolderCreateObjectV1Request>} EzsignfolderCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderCreateObjectV1Response}
     */
    ezsignfolderCreateObjectV1(EzsignfolderCreateObjectV1Request, callback) {
      let postBody = EzsignfolderCreateObjectV1Request;
      // verify the required parameter 'EzsignfolderCreateObjectV1Request' is set
      if (EzsignfolderCreateObjectV1Request === undefined || EzsignfolderCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfolderCreateObjectV1Request' when calling ezsignfolderCreateObjectV1");
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
      let returnType = EzsignfolderCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignfolder
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderDeleteObjectV1Response}
     */
    ezsignfolderDeleteObjectV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsignfolder
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/model/EzsignfolderEditObjectV1Request} EzsignfolderEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderEditObjectV1Response}
     */
    ezsignfolderEditObjectV1(pkiEzsignfolderID, EzsignfolderEditObjectV1Request, callback) {
      let postBody = EzsignfolderEditObjectV1Request;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderEditObjectV1");
      }
      // verify the required parameter 'EzsignfolderEditObjectV1Request' is set
      if (EzsignfolderEditObjectV1Request === undefined || EzsignfolderEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfolderEditObjectV1Request' when calling ezsignfolderEditObjectV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetEzsigndocumentsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetEzsigndocumentsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder's Ezsigndocuments
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetEzsigndocumentsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response}
     */
    ezsignfolderGetEzsigndocumentsV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetEzsigndocumentsV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderGetEzsigndocumentsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsigndocuments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetEzsignfoldersignerassociationsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetEzsignfoldersignerassociationsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder's Ezsignfoldersignerassociations
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetEzsignfoldersignerassociationsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetEzsignfoldersignerassociationsV1Response}
     */
    ezsignfolderGetEzsignfoldersignerassociationsV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetEzsignfoldersignerassociationsV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderGetEzsignfoldersignerassociationsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsignfoldersignerassociations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetFormsDataV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetFormsDataV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetFormsDataV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder's forms data
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetFormsDataV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetFormsDataV1Response}
     */
    ezsignfolderGetFormsDataV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetFormsDataV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderGetFormsDataV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/getFormsData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsignfolder list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsignfolderStep | Unsent<br>Sent<br>PartiallySigned<br>Expired<br>Completed<br>Archived | | eEzsignfoldertypePrivacylevel | User<br>Usergroup |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetListV1Response}
     */
    ezsignfolderGetListV1(opts, callback) {
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
      let returnType = EzsignfolderGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignfolder
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderGetObjectV1Response}
     */
    ezsignfolderGetObjectV1(pkiEzsignfolderID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderSendV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderSendV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderSendV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send the Ezsignfolder to the signatories for signature
     * 
     * @param {Number} pkiEzsignfolderID 
     * @param {module:eZmaxAPI/model/EzsignfolderSendV1Request} EzsignfolderSendV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderSendV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderSendV1Response}
     */
    ezsignfolderSendV1(pkiEzsignfolderID, EzsignfolderSendV1Request, callback) {
      let postBody = EzsignfolderSendV1Request;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderSendV1");
      }
      // verify the required parameter 'EzsignfolderSendV1Request' is set
      if (EzsignfolderSendV1Request === undefined || EzsignfolderSendV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignfolderSendV1Request' when calling ezsignfolderSendV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderSendV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfolderUnsendV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderUnsendV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfolderUnsendV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsend the Ezsignfolder
     * Once an Ezsignfolder has been sent to signatories, it cannot be modified.  Using this endpoint, you can unsend the Ezsignfolder and make it modifiable again.  Signatories will receive an email informing them the signature process was aborted and they might receive a new invitation to sign.  ⚠️ Warning: Any signature previously made by signatories on \"Non-completed\" Ezsigndocuments will be lost.
     * @param {Number} pkiEzsignfolderID 
     * @param {Object.<String, Object>} body 
     * @param {module:eZmaxAPI/api/ObjectEzsignfolderApi~ezsignfolderUnsendV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfolderUnsendV1Response}
     */
    ezsignfolderUnsendV1(pkiEzsignfolderID, body, callback) {
      let postBody = body;
      // verify the required parameter 'pkiEzsignfolderID' is set
      if (pkiEzsignfolderID === undefined || pkiEzsignfolderID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignfolderID' when calling ezsignfolderUnsendV1");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ezsignfolderUnsendV1");
      }

      let pathParams = {
        'pkiEzsignfolderID': pkiEzsignfolderID
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
      let returnType = EzsignfolderUnsendV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfolder/{pkiEzsignfolderID}/unsend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
