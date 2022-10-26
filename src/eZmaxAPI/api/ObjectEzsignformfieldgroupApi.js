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
import EzsignformfieldgroupCreateObjectV1Request from '../model/EzsignformfieldgroupCreateObjectV1Request';
import EzsignformfieldgroupCreateObjectV1Response from '../model/EzsignformfieldgroupCreateObjectV1Response';
import EzsignformfieldgroupDeleteObjectV1Response from '../model/EzsignformfieldgroupDeleteObjectV1Response';
import EzsignformfieldgroupEditObjectV1Request from '../model/EzsignformfieldgroupEditObjectV1Request';
import EzsignformfieldgroupEditObjectV1Response from '../model/EzsignformfieldgroupEditObjectV1Response';
import EzsignformfieldgroupGetObjectV1Response from '../model/EzsignformfieldgroupGetObjectV1Response';

/**
* ObjectEzsignformfieldgroup service.
* @module eZmaxAPI/api/ObjectEzsignformfieldgroupApi
* @version 1.1.12
*/
export default class ObjectEzsignformfieldgroupApi {

    /**
    * Constructs a new ObjectEzsignformfieldgroupApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignformfieldgroupCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsignformfieldgroup
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1Request} EzsignformfieldgroupCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1Response}
     */
    ezsignformfieldgroupCreateObjectV1(EzsignformfieldgroupCreateObjectV1Request, callback) {
      let postBody = EzsignformfieldgroupCreateObjectV1Request;
      // verify the required parameter 'EzsignformfieldgroupCreateObjectV1Request' is set
      if (EzsignformfieldgroupCreateObjectV1Request === undefined || EzsignformfieldgroupCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignformfieldgroupCreateObjectV1Request' when calling ezsignformfieldgroupCreateObjectV1");
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
      let returnType = EzsignformfieldgroupCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignformfieldgroup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignformfieldgroupDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsignformfieldgroup
     * 
     * @param {Number} pkiEzsignformfieldgroupID 
     * @param {module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignformfieldgroupDeleteObjectV1Response}
     */
    ezsignformfieldgroupDeleteObjectV1(pkiEzsignformfieldgroupID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignformfieldgroupID' is set
      if (pkiEzsignformfieldgroupID === undefined || pkiEzsignformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignformfieldgroupID' when calling ezsignformfieldgroupDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsignformfieldgroupID': pkiEzsignformfieldgroupID
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
      let returnType = EzsignformfieldgroupDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignformfieldgroup/{pkiEzsignformfieldgroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignformfieldgroupEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsignformfieldgroup
     * 
     * @param {Number} pkiEzsignformfieldgroupID 
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Request} EzsignformfieldgroupEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Response}
     */
    ezsignformfieldgroupEditObjectV1(pkiEzsignformfieldgroupID, EzsignformfieldgroupEditObjectV1Request, callback) {
      let postBody = EzsignformfieldgroupEditObjectV1Request;
      // verify the required parameter 'pkiEzsignformfieldgroupID' is set
      if (pkiEzsignformfieldgroupID === undefined || pkiEzsignformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignformfieldgroupID' when calling ezsignformfieldgroupEditObjectV1");
      }
      // verify the required parameter 'EzsignformfieldgroupEditObjectV1Request' is set
      if (EzsignformfieldgroupEditObjectV1Request === undefined || EzsignformfieldgroupEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsignformfieldgroupEditObjectV1Request' when calling ezsignformfieldgroupEditObjectV1");
      }

      let pathParams = {
        'pkiEzsignformfieldgroupID': pkiEzsignformfieldgroupID
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
      let returnType = EzsignformfieldgroupEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignformfieldgroup/{pkiEzsignformfieldgroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignformfieldgroupGetObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupGetObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignformfieldgroup
     * @param {Number} pkiEzsignformfieldgroupID 
     * @param {module:eZmaxAPI/api/ObjectEzsignformfieldgroupApi~ezsignformfieldgroupGetObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1Response}
     */
    ezsignformfieldgroupGetObjectV1(pkiEzsignformfieldgroupID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignformfieldgroupID' is set
      if (pkiEzsignformfieldgroupID === undefined || pkiEzsignformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignformfieldgroupID' when calling ezsignformfieldgroupGetObjectV1");
      }

      let pathParams = {
        'pkiEzsignformfieldgroupID': pkiEzsignformfieldgroupID
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
      let returnType = EzsignformfieldgroupGetObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignformfieldgroup/{pkiEzsignformfieldgroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
