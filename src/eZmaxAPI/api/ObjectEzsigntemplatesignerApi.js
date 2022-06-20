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
import CommonResponseError from '../model/CommonResponseError';
import EzsigntemplatesignerCreateObjectV1Request from '../model/EzsigntemplatesignerCreateObjectV1Request';
import EzsigntemplatesignerCreateObjectV1Response from '../model/EzsigntemplatesignerCreateObjectV1Response';
import EzsigntemplatesignerDeleteObjectV1Response from '../model/EzsigntemplatesignerDeleteObjectV1Response';
import EzsigntemplatesignerEditObjectV1Request from '../model/EzsigntemplatesignerEditObjectV1Request';
import EzsigntemplatesignerEditObjectV1Response from '../model/EzsigntemplatesignerEditObjectV1Response';
import EzsigntemplatesignerGetObjectV1Response from '../model/EzsigntemplatesignerGetObjectV1Response';

/**
* ObjectEzsigntemplatesigner service.
* @module eZmaxAPI/api/ObjectEzsigntemplatesignerApi
* @version 1.1.9
*/
export default class ObjectEzsigntemplatesignerApi {

    /**
    * Constructs a new ObjectEzsigntemplatesignerApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatesignerCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplatesigner
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Request} EzsigntemplatesignerCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatesignerCreateObjectV1Response}
     */
    ezsigntemplatesignerCreateObjectV1(EzsigntemplatesignerCreateObjectV1Request, callback) {
      let postBody = EzsigntemplatesignerCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplatesignerCreateObjectV1Request' is set
      if (EzsigntemplatesignerCreateObjectV1Request === undefined || EzsigntemplatesignerCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatesignerCreateObjectV1Request' when calling ezsigntemplatesignerCreateObjectV1");
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
      let returnType = EzsigntemplatesignerCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatesigner', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatesignerDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplatesigner
     * 
     * @param {Number} pkiEzsigntemplatesignerID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatesignerDeleteObjectV1Response}
     */
    ezsigntemplatesignerDeleteObjectV1(pkiEzsigntemplatesignerID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatesignerID' is set
      if (pkiEzsigntemplatesignerID === undefined || pkiEzsigntemplatesignerID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatesignerID' when calling ezsigntemplatesignerDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatesignerID': pkiEzsigntemplatesignerID
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
      let returnType = EzsigntemplatesignerDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatesignerEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsigntemplatesigner
     * 
     * @param {Number} pkiEzsigntemplatesignerID 
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Request} EzsigntemplatesignerEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatesignerEditObjectV1Response}
     */
    ezsigntemplatesignerEditObjectV1(pkiEzsigntemplatesignerID, EzsigntemplatesignerEditObjectV1Request, callback) {
      let postBody = EzsigntemplatesignerEditObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplatesignerID' is set
      if (pkiEzsigntemplatesignerID === undefined || pkiEzsigntemplatesignerID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatesignerID' when calling ezsigntemplatesignerEditObjectV1");
      }
      // verify the required parameter 'EzsigntemplatesignerEditObjectV1Request' is set
      if (EzsigntemplatesignerEditObjectV1Request === undefined || EzsigntemplatesignerEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatesignerEditObjectV1Request' when calling ezsigntemplatesignerEditObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatesignerID': pkiEzsigntemplatesignerID
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
      let returnType = EzsigntemplatesignerEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatesignerGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatesigner
     * 
     * @param {Number} pkiEzsigntemplatesignerID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatesignerApi~ezsigntemplatesignerGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV1Response}
     */
    ezsigntemplatesignerGetObjectV1(pkiEzsigntemplatesignerID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatesignerID' is set
      if (pkiEzsigntemplatesignerID === undefined || pkiEzsigntemplatesignerID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatesignerID' when calling ezsigntemplatesignerGetObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatesignerID': pkiEzsigntemplatesignerID
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
      let returnType = EzsigntemplatesignerGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
