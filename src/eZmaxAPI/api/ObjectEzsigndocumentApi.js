/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import CommonResponseErrorSTemporaryFileUrl from '../model/CommonResponseErrorSTemporaryFileUrl';
import EzsigndocumentApplyEzsigntemplateV1Request from '../model/EzsigndocumentApplyEzsigntemplateV1Request';
import EzsigndocumentApplyEzsigntemplateV1Response from '../model/EzsigndocumentApplyEzsigntemplateV1Response';
import EzsigndocumentApplyEzsigntemplateV2Request from '../model/EzsigndocumentApplyEzsigntemplateV2Request';
import EzsigndocumentApplyEzsigntemplateV2Response from '../model/EzsigndocumentApplyEzsigntemplateV2Response';
import EzsigndocumentCreateObjectV1Request from '../model/EzsigndocumentCreateObjectV1Request';
import EzsigndocumentCreateObjectV1Response from '../model/EzsigndocumentCreateObjectV1Response';
import EzsigndocumentCreateObjectV2Request from '../model/EzsigndocumentCreateObjectV2Request';
import EzsigndocumentCreateObjectV2Response from '../model/EzsigndocumentCreateObjectV2Response';
import EzsigndocumentDeleteObjectV1Response from '../model/EzsigndocumentDeleteObjectV1Response';
import EzsigndocumentEditEzsignsignaturesV1Request from '../model/EzsigndocumentEditEzsignsignaturesV1Request';
import EzsigndocumentEditEzsignsignaturesV1Response from '../model/EzsigndocumentEditEzsignsignaturesV1Response';
import EzsigndocumentEndPrematurelyV1Response from '../model/EzsigndocumentEndPrematurelyV1Response';
import EzsigndocumentGetDownloadUrlV1Response from '../model/EzsigndocumentGetDownloadUrlV1Response';
import EzsigndocumentGetEzsignpagesV1Response from '../model/EzsigndocumentGetEzsignpagesV1Response';
import EzsigndocumentGetFormDataV1Response from '../model/EzsigndocumentGetFormDataV1Response';
import EzsigndocumentGetObjectV1Response from '../model/EzsigndocumentGetObjectV1Response';
import EzsigndocumentGetTemporaryProofV1Response from '../model/EzsigndocumentGetTemporaryProofV1Response';
import EzsigndocumentGetWordsPositionsV1Request from '../model/EzsigndocumentGetWordsPositionsV1Request';
import EzsigndocumentGetWordsPositionsV1Response from '../model/EzsigndocumentGetWordsPositionsV1Response';
import EzsigndocumentPatchObjectV1Request from '../model/EzsigndocumentPatchObjectV1Request';
import EzsigndocumentPatchObjectV1Response from '../model/EzsigndocumentPatchObjectV1Response';

/**
* ObjectEzsigndocument service.
* @module eZmaxAPI/api/ObjectEzsigndocumentApi
* @version 1.1.5
*/
export default class ObjectEzsigndocumentApi {

    /**
    * Constructs a new ObjectEzsigndocumentApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigndocumentApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigndocumentApplyEzsigntemplateV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentApplyEzsigntemplateV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply an Ezsign Template to the Ezsigndocument.
     * This function is deprecated. Please use *applyEzsigntemplate* instead which is doing the same thing but with a capital \"E\" to normalize the nomenclature.  This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV1Request} EzsigndocumentApplyEzsigntemplateV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentApplyEzsigntemplateV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV1Response}
     */
    ezsigndocumentApplyEzsigntemplateV1(pkiEzsigndocumentID, EzsigndocumentApplyEzsigntemplateV1Request, callback) {
      let postBody = EzsigndocumentApplyEzsigntemplateV1Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentApplyEzsigntemplateV1");
      }
      // verify the required parameter 'EzsigndocumentApplyEzsigntemplateV1Request' is set
      if (EzsigndocumentApplyEzsigntemplateV1Request === undefined || EzsigndocumentApplyEzsigntemplateV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentApplyEzsigntemplateV1Request' when calling ezsigndocumentApplyEzsigntemplateV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentApplyEzsigntemplateV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentApplyEzsigntemplateV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentApplyEzsigntemplateV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply an Ezsign Template to the Ezsigndocument.
     * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Request} EzsigndocumentApplyEzsigntemplateV2Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentApplyEzsigntemplateV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Response}
     */
    ezsigndocumentApplyEzsigntemplateV2(pkiEzsigndocumentID, EzsigndocumentApplyEzsigntemplateV2Request, callback) {
      let postBody = EzsigndocumentApplyEzsigntemplateV2Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentApplyEzsigntemplateV2");
      }
      // verify the required parameter 'EzsigndocumentApplyEzsigntemplateV2Request' is set
      if (EzsigndocumentApplyEzsigntemplateV2Request === undefined || EzsigndocumentApplyEzsigntemplateV2Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentApplyEzsigntemplateV2Request' when calling ezsigndocumentApplyEzsigntemplateV2");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentApplyEzsigntemplateV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigndocument/{pkiEzsigndocumentID}/applyEzsigntemplate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigndocument
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Request>} EzsigndocumentCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentCreateObjectV1Response}
     */
    ezsigndocumentCreateObjectV1(EzsigndocumentCreateObjectV1Request, callback) {
      let postBody = EzsigndocumentCreateObjectV1Request;
      // verify the required parameter 'EzsigndocumentCreateObjectV1Request' is set
      if (EzsigndocumentCreateObjectV1Request === undefined || EzsigndocumentCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentCreateObjectV1Request' when calling ezsigndocumentCreateObjectV1");
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
      let returnType = EzsigndocumentCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentCreateObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentCreateObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigndocument
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Request} EzsigndocumentCreateObjectV2Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentCreateObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Response}
     */
    ezsigndocumentCreateObjectV2(EzsigndocumentCreateObjectV2Request, callback) {
      let postBody = EzsigndocumentCreateObjectV2Request;
      // verify the required parameter 'EzsigndocumentCreateObjectV2Request' is set
      if (EzsigndocumentCreateObjectV2Request === undefined || EzsigndocumentCreateObjectV2Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentCreateObjectV2Request' when calling ezsigndocumentCreateObjectV2");
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
      let returnType = EzsigndocumentCreateObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigndocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigndocument
     * 
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentDeleteObjectV1Response}
     */
    ezsigndocumentDeleteObjectV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentEditEzsignsignaturesV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEditEzsignsignaturesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit multiple ezsignsignatures
     * Using this endpoint, you can edit multiple ezsignsignatures at the same time.
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Request} EzsigndocumentEditEzsignsignaturesV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEditEzsignsignaturesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Response}
     */
    ezsigndocumentEditEzsignsignaturesV1(pkiEzsigndocumentID, EzsigndocumentEditEzsignsignaturesV1Request, callback) {
      let postBody = EzsigndocumentEditEzsignsignaturesV1Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentEditEzsignsignaturesV1");
      }
      // verify the required parameter 'EzsigndocumentEditEzsignsignaturesV1Request' is set
      if (EzsigndocumentEditEzsignsignaturesV1Request === undefined || EzsigndocumentEditEzsignsignaturesV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentEditEzsignsignaturesV1Request' when calling ezsigndocumentEditEzsignsignaturesV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentEditEzsignsignaturesV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/editEzsignsignatures', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentEndPrematurelyV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEndPrematurelyV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentEndPrematurelyV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * End prematurely
     * End prematurely an Ezsigndocument when some signatures are still required
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEndPrematurelyV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentEndPrematurelyV1Response}
     */
    ezsigndocumentEndPrematurelyV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentEndPrematurelyV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentEndPrematurelyV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/endPrematurely', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetDownloadUrlV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetDownloadUrlV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a URL to download documents.
     * This endpoint returns URLs to different files that can be downloaded during the signing process.  These links will expire after 5 minutes so the download of the file should be made soon after retrieving the link.
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/String} eDocumentType The type of document to retrieve.  1. **Initial** Is the initial document before any signature were applied. 2. **Signed** Is the final document once all signatures were applied. 3. **Proofdocument** Is the evidence report. 4. **Proof** Is the complete evidence archive including all of the above and more. 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetDownloadUrlV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetDownloadUrlV1Response}
     */
    ezsigndocumentGetDownloadUrlV1(pkiEzsigndocumentID, eDocumentType, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetDownloadUrlV1");
      }
      // verify the required parameter 'eDocumentType' is set
      if (eDocumentType === undefined || eDocumentType === null) {
        throw new Error("Missing the required parameter 'eDocumentType' when calling ezsigndocumentGetDownloadUrlV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID,
        'eDocumentType': eDocumentType
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
      let returnType = EzsigndocumentGetDownloadUrlV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getDownloadUrl/{eDocumentType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetEzsignpagesV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetEzsignpagesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigndocument's Ezsignpages
     * 
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetEzsignpagesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1Response}
     */
    ezsigndocumentGetEzsignpagesV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetEzsignpagesV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentGetEzsignpagesV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getEzsignpages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetFormDataV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetFormDataV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetFormDataV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigndocument's Form Data
     * 
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetFormDataV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetFormDataV1Response}
     */
    ezsigndocumentGetFormDataV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetFormDataV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/zip', 'text/csv'];
      let returnType = EzsigndocumentGetFormDataV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getFormData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigndocument
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetObjectV1Response}
     */
    ezsigndocumentGetObjectV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetObjectV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetTemporaryProofV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetTemporaryProofV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the temporary proof
     * Retrieve the temporary proof while the Ezsigndocument is being processed since the proof isn't available until the Ezsigndocument is completed
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetTemporaryProofV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1Response}
     */
    ezsigndocumentGetTemporaryProofV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetTemporaryProofV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentGetTemporaryProofV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getTemporaryProof', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentGetWordsPositionsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetWordsPositionsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve positions X,Y of given words from a Ezsigndocument
     * 
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Request} EzsigndocumentGetWordsPositionsV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetWordsPositionsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Response}
     */
    ezsigndocumentGetWordsPositionsV1(pkiEzsigndocumentID, EzsigndocumentGetWordsPositionsV1Request, callback) {
      let postBody = EzsigndocumentGetWordsPositionsV1Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetWordsPositionsV1");
      }
      // verify the required parameter 'EzsigndocumentGetWordsPositionsV1Request' is set
      if (EzsigndocumentGetWordsPositionsV1Request === undefined || EzsigndocumentGetWordsPositionsV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentGetWordsPositionsV1Request' when calling ezsigndocumentGetWordsPositionsV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentGetWordsPositionsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getWordsPositions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigndocumentPatchObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentPatchObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch an existing Ezsigndocument
     * 
     * @param {Number} pkiEzsigndocumentID 
     * @param {module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Request} EzsigndocumentPatchObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentPatchObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Response}
     */
    ezsigndocumentPatchObjectV1(pkiEzsigndocumentID, EzsigndocumentPatchObjectV1Request, callback) {
      let postBody = EzsigndocumentPatchObjectV1Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentPatchObjectV1");
      }
      // verify the required parameter 'EzsigndocumentPatchObjectV1Request' is set
      if (EzsigndocumentPatchObjectV1Request === undefined || EzsigndocumentPatchObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentPatchObjectV1Request' when calling ezsigndocumentPatchObjectV1");
      }

      let pathParams = {
        'pkiEzsigndocumentID': pkiEzsigndocumentID
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
      let returnType = EzsigndocumentPatchObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
