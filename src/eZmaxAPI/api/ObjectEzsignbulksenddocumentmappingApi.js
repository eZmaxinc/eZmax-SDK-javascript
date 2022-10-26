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
import CommonResponseError from '../model/CommonResponseError';
import EzsignbulksenddocumentmappingCreateObjectV1Request from '../model/EzsignbulksenddocumentmappingCreateObjectV1Request';
import EzsignbulksenddocumentmappingCreateObjectV1Response from '../model/EzsignbulksenddocumentmappingCreateObjectV1Response';
import EzsignbulksenddocumentmappingDeleteObjectV1Response from '../model/EzsignbulksenddocumentmappingDeleteObjectV1Response';
import EzsignbulksenddocumentmappingGetObjectV1Response from '../model/EzsignbulksenddocumentmappingGetObjectV1Response';

/**
* ObjectEzsignbulksenddocumentmapping service.
* @module eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi
* @version 1.1.12
*/
export default class ObjectEzsignbulksenddocumentmappingApi {

    /**
    * Constructs a new ObjectEzsignbulksenddocumentmappingApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignbulksenddocumentmappingCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignbulksenddocumentmapping
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Request} EzsignbulksenddocumentmappingCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1Response}
     */
    ezsignbulksenddocumentmappingCreateObjectV1(EzsignbulksenddocumentmappingCreateObjectV1Request, callback) {
      let postBody = EzsignbulksenddocumentmappingCreateObjectV1Request;
      // verify the required parameter 'EzsignbulksenddocumentmappingCreateObjectV1Request' is set
      if (EzsignbulksenddocumentmappingCreateObjectV1Request === undefined || EzsignbulksenddocumentmappingCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksenddocumentmappingCreateObjectV1Request' when calling ezsignbulksenddocumentmappingCreateObjectV1");
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
      let returnType = EzsignbulksenddocumentmappingCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksenddocumentmapping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksenddocumentmappingDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignbulksenddocumentmapping
     * 
     * @param {Number} pkiEzsignbulksenddocumentmappingID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksenddocumentmappingDeleteObjectV1Response}
     */
    ezsignbulksenddocumentmappingDeleteObjectV1(pkiEzsignbulksenddocumentmappingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksenddocumentmappingID' is set
      if (pkiEzsignbulksenddocumentmappingID === undefined || pkiEzsignbulksenddocumentmappingID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksenddocumentmappingID' when calling ezsignbulksenddocumentmappingDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksenddocumentmappingID': pkiEzsignbulksenddocumentmappingID
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
      let returnType = EzsignbulksenddocumentmappingDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksenddocumentmapping/{pkiEzsignbulksenddocumentmappingID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksenddocumentmappingGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksenddocumentmapping
     * 
     * @param {Number} pkiEzsignbulksenddocumentmappingID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksenddocumentmappingApi~ezsignbulksenddocumentmappingGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksenddocumentmappingGetObjectV1Response}
     */
    ezsignbulksenddocumentmappingGetObjectV1(pkiEzsignbulksenddocumentmappingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksenddocumentmappingID' is set
      if (pkiEzsignbulksenddocumentmappingID === undefined || pkiEzsignbulksenddocumentmappingID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksenddocumentmappingID' when calling ezsignbulksenddocumentmappingGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksenddocumentmappingID': pkiEzsignbulksenddocumentmappingID
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
      let returnType = EzsignbulksenddocumentmappingGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksenddocumentmapping/{pkiEzsignbulksenddocumentmappingID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
