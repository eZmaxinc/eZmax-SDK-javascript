/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
import EzsignsignatureCreateObjectV2Request from '../model/EzsignsignatureCreateObjectV2Request';
import EzsignsignatureCreateObjectV2Response from '../model/EzsignsignatureCreateObjectV2Response';
import EzsignsignatureDeleteObjectV1Response from '../model/EzsignsignatureDeleteObjectV1Response';
import EzsignsignatureEditObjectV1Request from '../model/EzsignsignatureEditObjectV1Request';
import EzsignsignatureEditObjectV1Response from '../model/EzsignsignatureEditObjectV1Response';
import EzsignsignatureGetObjectV1Response from '../model/EzsignsignatureGetObjectV1Response';
import EzsignsignatureGetObjectV2Response from '../model/EzsignsignatureGetObjectV2Response';
import EzsignsignatureSignV1Request from '../model/EzsignsignatureSignV1Request';
import EzsignsignatureSignV1Response from '../model/EzsignsignatureSignV1Response';

/**
* ObjectEzsignsignature service.
* @module eZmaxAPI/api/ObjectEzsignsignatureApi
* @version 1.1.13
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
     * Callback function to receive the result of the ezsignsignatureCreateObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureCreateObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignsignature
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Request} EzsignsignatureCreateObjectV2Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureCreateObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureCreateObjectV2Response}
     */
    ezsignsignatureCreateObjectV2(EzsignsignatureCreateObjectV2Request, callback) {
      let postBody = EzsignsignatureCreateObjectV2Request;
      // verify the required parameter 'EzsignsignatureCreateObjectV2Request' is set
      if (EzsignsignatureCreateObjectV2Request === undefined || EzsignsignatureCreateObjectV2Request === null) {
        throw new Error("Missing the required parameter 'EzsignsignatureCreateObjectV2Request' when calling ezsignsignatureCreateObjectV2");
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
      let returnType = EzsignsignatureCreateObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsignsignature', 'POST',
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
     * 
     * @param {Number} pkiEzsignsignatureID 
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
     * Callback function to receive the result of the ezsignsignatureEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsignsignature
     * 
     * @param {Number} pkiEzsignsignatureID 
     * @param {module:eZmaxAPI/model/EzsignsignatureEditObjectV1Request} EzsignsignatureEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureEditObjectV1Response}
     */
    ezsignsignatureEditObjectV1(pkiEzsignsignatureID, EzsignsignatureEditObjectV1Request, callback) {
      let postBody = EzsignsignatureEditObjectV1Request;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureEditObjectV1");
      }
      // verify the required parameter 'EzsignsignatureEditObjectV1Request' is set
      if (EzsignsignatureEditObjectV1Request === undefined || EzsignsignatureEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignsignatureEditObjectV1Request' when calling ezsignsignatureEditObjectV1");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EzsignsignatureEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignsignature/{pkiEzsignsignatureID}', 'PUT',
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
     * 
     * @param {Number} pkiEzsignsignatureID 
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

    /**
     * Callback function to receive the result of the ezsignsignatureGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignsignature
     * 
     * @param {Number} pkiEzsignsignatureID 
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureGetObjectV2Response}
     */
    ezsignsignatureGetObjectV2(pkiEzsignsignatureID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureGetObjectV2");
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
      let returnType = EzsignsignatureGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsignsignature/{pkiEzsignsignatureID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignsignatureSignV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureSignV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignsignatureSignV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign the Ezsignsignature
     * 
     * @param {Number} pkiEzsignsignatureID 
     * @param {module:eZmaxAPI/model/EzsignsignatureSignV1Request} EzsignsignatureSignV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignsignatureApi~ezsignsignatureSignV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignsignatureSignV1Response}
     */
    ezsignsignatureSignV1(pkiEzsignsignatureID, EzsignsignatureSignV1Request, callback) {
      let postBody = EzsignsignatureSignV1Request;
      // verify the required parameter 'pkiEzsignsignatureID' is set
      if (pkiEzsignsignatureID === undefined || pkiEzsignsignatureID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignsignatureID' when calling ezsignsignatureSignV1");
      }
      // verify the required parameter 'EzsignsignatureSignV1Request' is set
      if (EzsignsignatureSignV1Request === undefined || EzsignsignatureSignV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignsignatureSignV1Request' when calling ezsignsignatureSignV1");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EzsignsignatureSignV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignsignature/{pkiEzsignsignatureID}/sign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
