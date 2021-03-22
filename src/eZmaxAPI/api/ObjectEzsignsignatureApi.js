/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsignsignatureCreateObjectV1Request from '../model/EzsignsignatureCreateObjectV1Request';
import EzsignsignatureCreateObjectV1Response from '../model/EzsignsignatureCreateObjectV1Response';
import EzsignsignatureDeleteObjectV1Response from '../model/EzsignsignatureDeleteObjectV1Response';
import EzsignsignatureGetObjectV1Response from '../model/EzsignsignatureGetObjectV1Response';

/**
* ObjectEzsignsignature service.
* @module eZmaxAPI/api/ObjectEzsignsignatureApi
* @version 1.0.38
*/
export default class ObjectEzsignsignatureApi {

    /**
    * Constructs a new ObjectEzsignsignatureApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignsignatureApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignsignatureCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignsignature
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Request>} EzsignsignatureCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureCreateObjectV1Response}
     */
    ezsignsignatureCreateObjectV1(EzsignsignatureCreateObjectV1Request, callback) {
      let postBody = EzsignsignatureCreateObjectV1Request;
      // verify the required parameter 'EzsignsignatureCreateObjectV1Request' is set
      if (EzsignsignatureCreateObjectV1Request === undefined || EzsignsignatureCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignsignatureCreateObjectV1Request' when calling ezsignsignatureCreateObjectV1");
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
      let returnType = EzsignsignatureCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignsignature', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignsignatureDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignsignature
     * @param {Number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureDeleteObjectV1Response}
     */
    ezsignsignatureDeleteObjectV1(pkiEzsignsignatureID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignsignatureID': pkiEzsignsignatureID
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
      let returnType = EzsignsignatureDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignsignature/{pkiEzsignsignatureID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignsignatureGetChildrenV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetChildrenV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignsignature's children IDs
     * @param {Number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetChildrenV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    ezsignsignatureGetChildrenV1(pkiEzsignsignatureID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureGetChildrenV1");
      }

      let pathParams = {
        'pkiEzsignsignatureID': pkiEzsignsignatureID
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
        '/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignsignatureGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignsignature
     * @param {Number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureGetObjectV1Response}
     */
    ezsignsignatureGetObjectV1(pkiEzsignsignatureID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignsignatureID': pkiEzsignsignatureID
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
      let returnType = EzsignsignatureGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignsignature/{pkiEzsignsignatureID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
