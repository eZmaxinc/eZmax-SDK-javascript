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
import CommonResponseError from '../model/CommonResponseError';
import CommonResponseErrorSTemporaryFileUrl from '../model/CommonResponseErrorSTemporaryFileUrl';
import EzsigntemplatedocumentCreateObjectV1Request from '../model/EzsigntemplatedocumentCreateObjectV1Request';
import EzsigntemplatedocumentCreateObjectV1Response from '../model/EzsigntemplatedocumentCreateObjectV1Response';
import EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request from '../model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request';
import EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Response from '../model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Response';
import EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request from '../model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request';
import EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Response from '../model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Response';
import EzsigntemplatedocumentEditObjectV1Request from '../model/EzsigntemplatedocumentEditObjectV1Request';
import EzsigntemplatedocumentEditObjectV1Response from '../model/EzsigntemplatedocumentEditObjectV1Response';
import EzsigntemplatedocumentFlattenV1Response from '../model/EzsigntemplatedocumentFlattenV1Response';
import EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Response from '../model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Response';
import EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response from '../model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response';
import EzsigntemplatedocumentGetEzsigntemplatesignaturesV1Response from '../model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1Response';
import EzsigntemplatedocumentGetObjectV2Response from '../model/EzsigntemplatedocumentGetObjectV2Response';
import EzsigntemplatedocumentGetWordsPositionsV1Request from '../model/EzsigntemplatedocumentGetWordsPositionsV1Request';
import EzsigntemplatedocumentGetWordsPositionsV1Response from '../model/EzsigntemplatedocumentGetWordsPositionsV1Response';
import EzsigntemplatedocumentPatchObjectV1Request from '../model/EzsigntemplatedocumentPatchObjectV1Request';
import EzsigntemplatedocumentPatchObjectV1Response from '../model/EzsigntemplatedocumentPatchObjectV1Response';

/**
* ObjectEzsigntemplatedocument service.
* @module eZmaxAPI/api/ObjectEzsigntemplatedocumentApi
* @version 1.1.18
*/
export default class ObjectEzsigntemplatedocumentApi {

    /**
    * Constructs a new ObjectEzsigntemplatedocumentApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatedocumentCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplatedocument
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Request} EzsigntemplatedocumentCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Response}
     */
    ezsigntemplatedocumentCreateObjectV1(EzsigntemplatedocumentCreateObjectV1Request, callback) {
      let postBody = EzsigntemplatedocumentCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplatedocumentCreateObjectV1Request' is set
      if (EzsigntemplatedocumentCreateObjectV1Request === undefined || EzsigntemplatedocumentCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentCreateObjectV1Request' when calling ezsigntemplatedocumentCreateObjectV1");
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
      let returnType = EzsigntemplatedocumentCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit multiple Ezsigntemplateformfieldgroups
     * Using this endpoint, you can edit multiple Ezsigntemplateformfieldgroups at the same time.
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request} EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Response}
     */
    ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1(pkiEzsigntemplatedocumentID, EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request, callback) {
      let postBody = EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1");
      }
      // verify the required parameter 'EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request' is set
      if (EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request === undefined || EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Request' when calling ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/editEzsigntemplateformfieldgroups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentEditEzsigntemplatesignaturesV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditEzsigntemplatesignaturesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit multiple Ezsigntemplatesignatures
     * Using this endpoint, you can edit multiple Ezsigntemplatesignatures at the same time.
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request} EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditEzsigntemplatesignaturesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Response}
     */
    ezsigntemplatedocumentEditEzsigntemplatesignaturesV1(pkiEzsigntemplatedocumentID, EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request, callback) {
      let postBody = EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentEditEzsigntemplatesignaturesV1");
      }
      // verify the required parameter 'EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request' is set
      if (EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request === undefined || EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Request' when calling ezsigntemplatedocumentEditEzsigntemplatesignaturesV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentEditEzsigntemplatesignaturesV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/editEzsigntemplatesignatures', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsigntemplatedocument
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Request} EzsigntemplatedocumentEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response}
     */
    ezsigntemplatedocumentEditObjectV1(pkiEzsigntemplatedocumentID, EzsigntemplatedocumentEditObjectV1Request, callback) {
      let postBody = EzsigntemplatedocumentEditObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentEditObjectV1");
      }
      // verify the required parameter 'EzsigntemplatedocumentEditObjectV1Request' is set
      if (EzsigntemplatedocumentEditObjectV1Request === undefined || EzsigntemplatedocumentEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentEditObjectV1Request' when calling ezsigntemplatedocumentEditObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentFlattenV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentFlattenV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentFlattenV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Flatten
     * Flatten an Ezsigntemplatedocument signatures, forms and annotations. This process finalizes the PDF so that the forms and annotations become part of the document content and cannot be edited.
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {Object.<String, Object>} body 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentFlattenV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentFlattenV1Response}
     */
    ezsigntemplatedocumentFlattenV1(pkiEzsigntemplatedocumentID, body, callback) {
      let postBody = body;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentFlattenV1");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling ezsigntemplatedocumentFlattenV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentFlattenV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/flatten', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatedocument's Ezsigntemplatedocumentpages
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Response}
     */
    ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1(pkiEzsigntemplatedocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getEzsigntemplatedocumentpages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatedocument's Ezsigntemplateformfieldgroups
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response}
     */
    ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1(pkiEzsigntemplatedocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getEzsigntemplateformfieldgroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentGetEzsigntemplatesignaturesV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplatesignaturesV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatedocument's Ezsigntemplatesignatures
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetEzsigntemplatesignaturesV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1Response}
     */
    ezsigntemplatedocumentGetEzsigntemplatesignaturesV1(pkiEzsigntemplatedocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentGetEzsigntemplatesignaturesV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentGetEzsigntemplatesignaturesV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getEzsigntemplatesignatures', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatedocument
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2Response}
     */
    ezsigntemplatedocumentGetObjectV2(pkiEzsigntemplatedocumentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentGetObjectV2");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentGetWordsPositionsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetWordsPositionsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve positions X,Y of given words from a Ezsigntemplatedocument
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request} EzsigntemplatedocumentGetWordsPositionsV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentGetWordsPositionsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Response}
     */
    ezsigntemplatedocumentGetWordsPositionsV1(pkiEzsigntemplatedocumentID, EzsigntemplatedocumentGetWordsPositionsV1Request, callback) {
      let postBody = EzsigntemplatedocumentGetWordsPositionsV1Request;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentGetWordsPositionsV1");
      }
      // verify the required parameter 'EzsigntemplatedocumentGetWordsPositionsV1Request' is set
      if (EzsigntemplatedocumentGetWordsPositionsV1Request === undefined || EzsigntemplatedocumentGetWordsPositionsV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentGetWordsPositionsV1Request' when calling ezsigntemplatedocumentGetWordsPositionsV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentGetWordsPositionsV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatedocumentPatchObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentPatchObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch an existing Ezsigntemplatedocument
     * 
     * @param {Number} pkiEzsigntemplatedocumentID 
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Request} EzsigntemplatedocumentPatchObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatedocumentApi~ezsigntemplatedocumentPatchObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Response}
     */
    ezsigntemplatedocumentPatchObjectV1(pkiEzsigntemplatedocumentID, EzsigntemplatedocumentPatchObjectV1Request, callback) {
      let postBody = EzsigntemplatedocumentPatchObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplatedocumentID' is set
      if (pkiEzsigntemplatedocumentID === undefined || pkiEzsigntemplatedocumentID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatedocumentID' when calling ezsigntemplatedocumentPatchObjectV1");
      }
      // verify the required parameter 'EzsigntemplatedocumentPatchObjectV1Request' is set
      if (EzsigntemplatedocumentPatchObjectV1Request === undefined || EzsigntemplatedocumentPatchObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatedocumentPatchObjectV1Request' when calling ezsigntemplatedocumentPatchObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatedocumentID': pkiEzsigntemplatedocumentID
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
      let returnType = EzsigntemplatedocumentPatchObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
