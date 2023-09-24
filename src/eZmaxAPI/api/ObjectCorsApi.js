/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import CorsCreateObjectV1Request from '../model/CorsCreateObjectV1Request';
import CorsCreateObjectV1Response from '../model/CorsCreateObjectV1Response';
import CorsDeleteObjectV1Response from '../model/CorsDeleteObjectV1Response';
import CorsEditObjectV1Request from '../model/CorsEditObjectV1Request';
import CorsEditObjectV1Response from '../model/CorsEditObjectV1Response';
import CorsGetObjectV2Response from '../model/CorsGetObjectV2Response';

/**
* ObjectCors service.
* @module eZmaxAPI/api/ObjectCorsApi
* @version 1.2.0
*/
export default class ObjectCorsApi {

    /**
    * Constructs a new ObjectCorsApi. 
    * @alias module:eZmaxAPI/api/ObjectCorsApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the corsCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectCorsApi~corsCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CorsCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Cors
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/CorsCreateObjectV1Request} CorsCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectCorsApi~corsCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CorsCreateObjectV1Response}
     */
    corsCreateObjectV1(CorsCreateObjectV1Request, callback) {
      let postBody = CorsCreateObjectV1Request;
      // verify the required parameter 'CorsCreateObjectV1Request' is set
      if (CorsCreateObjectV1Request === undefined || CorsCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'CorsCreateObjectV1Request' when calling corsCreateObjectV1");
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
      let returnType = CorsCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/cors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the corsDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectCorsApi~corsDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CorsDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Cors
     * 
     * @param {Number} pkiCorsID The unique ID of the Cors
     * @param {module:eZmaxAPI/api/ObjectCorsApi~corsDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CorsDeleteObjectV1Response}
     */
    corsDeleteObjectV1(pkiCorsID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiCorsID' is set
      if (pkiCorsID === undefined || pkiCorsID === null) {
        throw new Error("Missing the required parameter 'pkiCorsID' when calling corsDeleteObjectV1");
      }

      let pathParams = {
        'pkiCorsID': pkiCorsID
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
      let returnType = CorsDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/cors/{pkiCorsID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the corsEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectCorsApi~corsEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CorsEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Cors
     * 
     * @param {Number} pkiCorsID The unique ID of the Cors
     * @param {module:eZmaxAPI/model/CorsEditObjectV1Request} CorsEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectCorsApi~corsEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CorsEditObjectV1Response}
     */
    corsEditObjectV1(pkiCorsID, CorsEditObjectV1Request, callback) {
      let postBody = CorsEditObjectV1Request;
      // verify the required parameter 'pkiCorsID' is set
      if (pkiCorsID === undefined || pkiCorsID === null) {
        throw new Error("Missing the required parameter 'pkiCorsID' when calling corsEditObjectV1");
      }
      // verify the required parameter 'CorsEditObjectV1Request' is set
      if (CorsEditObjectV1Request === undefined || CorsEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'CorsEditObjectV1Request' when calling corsEditObjectV1");
      }

      let pathParams = {
        'pkiCorsID': pkiCorsID
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
      let returnType = CorsEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/cors/{pkiCorsID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the corsGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectCorsApi~corsGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CorsGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Cors
     * 
     * @param {Number} pkiCorsID The unique ID of the Cors
     * @param {module:eZmaxAPI/api/ObjectCorsApi~corsGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CorsGetObjectV2Response}
     */
    corsGetObjectV2(pkiCorsID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiCorsID' is set
      if (pkiCorsID === undefined || pkiCorsID === null) {
        throw new Error("Missing the required parameter 'pkiCorsID' when calling corsGetObjectV2");
      }

      let pathParams = {
        'pkiCorsID': pkiCorsID
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
      let returnType = CorsGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/cors/{pkiCorsID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
