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
import EzsignbulksendsignermappingCreateObjectV1Request from '../model/EzsignbulksendsignermappingCreateObjectV1Request';
import EzsignbulksendsignermappingCreateObjectV1Response from '../model/EzsignbulksendsignermappingCreateObjectV1Response';
import EzsignbulksendsignermappingDeleteObjectV1Response from '../model/EzsignbulksendsignermappingDeleteObjectV1Response';
import EzsignbulksendsignermappingGetObjectV1Response from '../model/EzsignbulksendsignermappingGetObjectV1Response';

/**
* ObjectEzsignbulksendsignermapping service.
* @module eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi
* @version 1.1.12
*/
export default class ObjectEzsignbulksendsignermappingApi {

    /**
    * Constructs a new ObjectEzsignbulksendsignermappingApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignbulksendsignermappingCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignbulksendsignermapping
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Request} EzsignbulksendsignermappingCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1Response}
     */
    ezsignbulksendsignermappingCreateObjectV1(EzsignbulksendsignermappingCreateObjectV1Request, callback) {
      let postBody = EzsignbulksendsignermappingCreateObjectV1Request;
      // verify the required parameter 'EzsignbulksendsignermappingCreateObjectV1Request' is set
      if (EzsignbulksendsignermappingCreateObjectV1Request === undefined || EzsignbulksendsignermappingCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignbulksendsignermappingCreateObjectV1Request' when calling ezsignbulksendsignermappingCreateObjectV1");
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
      let returnType = EzsignbulksendsignermappingCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendsignermapping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendsignermappingDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignbulksendsignermapping
     * 
     * @param {Number} pkiEzsignbulksendsignermappingID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendsignermappingDeleteObjectV1Response}
     */
    ezsignbulksendsignermappingDeleteObjectV1(pkiEzsignbulksendsignermappingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendsignermappingID' is set
      if (pkiEzsignbulksendsignermappingID === undefined || pkiEzsignbulksendsignermappingID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendsignermappingID' when calling ezsignbulksendsignermappingDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksendsignermappingID': pkiEzsignbulksendsignermappingID
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
      let returnType = EzsignbulksendsignermappingDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendsignermapping/{pkiEzsignbulksendsignermappingID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendsignermappingGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksendsignermapping
     * 
     * @param {Number} pkiEzsignbulksendsignermappingID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendsignermappingApi~ezsignbulksendsignermappingGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendsignermappingGetObjectV1Response}
     */
    ezsignbulksendsignermappingGetObjectV1(pkiEzsignbulksendsignermappingID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendsignermappingID' is set
      if (pkiEzsignbulksendsignermappingID === undefined || pkiEzsignbulksendsignermappingID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendsignermappingID' when calling ezsignbulksendsignermappingGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignbulksendsignermappingID': pkiEzsignbulksendsignermappingID
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
      let returnType = EzsignbulksendsignermappingGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendsignermapping/{pkiEzsignbulksendsignermappingID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
