/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsigndocumentApplyEzsigntemplateV1Request from '../model/EzsigndocumentApplyEzsigntemplateV1Request';
import EzsigndocumentApplyEzsigntemplateV1Response from '../model/EzsigndocumentApplyEzsigntemplateV1Response';
import EzsigndocumentCreateObjectV1Request from '../model/EzsigndocumentCreateObjectV1Request';
import EzsigndocumentCreateObjectV1Response from '../model/EzsigndocumentCreateObjectV1Response';
import EzsigndocumentDeleteObjectV1Response from '../model/EzsigndocumentDeleteObjectV1Response';
import EzsigndocumentEditObjectV1Request from '../model/EzsigndocumentEditObjectV1Request';
import EzsigndocumentEditObjectV1Response from '../model/EzsigndocumentEditObjectV1Response';
import EzsigndocumentGetDownloadUrlV1Response from '../model/EzsigndocumentGetDownloadUrlV1Response';
import EzsigndocumentGetObjectV1Response from '../model/EzsigndocumentGetObjectV1Response';

/**
* ObjectEzsigndocument service.
* @module eZmaxAPI/api/ObjectEzsigndocumentApi
* @version 1.0.27
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
     * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
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
     * Callback function to receive the result of the ezsigndocumentDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigndocument
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
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
     * Callback function to receive the result of the ezsigndocumentEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an existing Ezsigndocument
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param {module:eZmaxAPI/model/EzsigndocumentEditObjectV1Request} EzsigndocumentEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigndocumentEditObjectV1Response}
     */
    ezsigndocumentEditObjectV1(pkiEzsigndocumentID, EzsigndocumentEditObjectV1Request, callback) {
      let postBody = EzsigndocumentEditObjectV1Request;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentEditObjectV1");
      }
      // verify the required parameter 'EzsigndocumentEditObjectV1Request' is set
      if (EzsigndocumentEditObjectV1Request === undefined || EzsigndocumentEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigndocumentEditObjectV1Request' when calling ezsigndocumentEditObjectV1");
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
      let returnType = EzsigndocumentEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}', 'PUT',
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
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
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
     * Callback function to receive the result of the ezsigndocumentGetObjectGetChildrenV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetObjectGetChildrenV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigndocument's children IDs
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
     * @param {module:eZmaxAPI/api/ObjectEzsigndocumentApi~ezsigndocumentGetObjectGetChildrenV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    ezsigndocumentGetObjectGetChildrenV1(pkiEzsigndocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigndocumentID' is set
      if (pkiEzsigndocumentID === undefined || pkiEzsigndocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigndocumentID' when calling ezsigndocumentGetObjectGetChildrenV1");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/1/object/ezsigndocument/{pkiEzsigndocumentID}/getChildren', 'GET',
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
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
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


}
