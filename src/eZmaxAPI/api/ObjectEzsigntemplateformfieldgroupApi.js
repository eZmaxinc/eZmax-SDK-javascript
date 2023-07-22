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
import EzsigntemplateformfieldgroupCreateObjectV1Request from '../model/EzsigntemplateformfieldgroupCreateObjectV1Request';
import EzsigntemplateformfieldgroupCreateObjectV1Response from '../model/EzsigntemplateformfieldgroupCreateObjectV1Response';
import EzsigntemplateformfieldgroupDeleteObjectV1Response from '../model/EzsigntemplateformfieldgroupDeleteObjectV1Response';
import EzsigntemplateformfieldgroupEditObjectV1Request from '../model/EzsigntemplateformfieldgroupEditObjectV1Request';
import EzsigntemplateformfieldgroupEditObjectV1Response from '../model/EzsigntemplateformfieldgroupEditObjectV1Response';
import EzsigntemplateformfieldgroupGetObjectV2Response from '../model/EzsigntemplateformfieldgroupGetObjectV2Response';

/**
* ObjectEzsigntemplateformfieldgroup service.
* @module eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi
* @version 1.1.18
*/
export default class ObjectEzsigntemplateformfieldgroupApi {

    /**
    * Constructs a new ObjectEzsigntemplateformfieldgroupApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplateformfieldgroupCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplateformfieldgroup
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Request} EzsigntemplateformfieldgroupCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Response}
     */
    ezsigntemplateformfieldgroupCreateObjectV1(EzsigntemplateformfieldgroupCreateObjectV1Request, callback) {
      let postBody = EzsigntemplateformfieldgroupCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplateformfieldgroupCreateObjectV1Request' is set
      if (EzsigntemplateformfieldgroupCreateObjectV1Request === undefined || EzsigntemplateformfieldgroupCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplateformfieldgroupCreateObjectV1Request' when calling ezsigntemplateformfieldgroupCreateObjectV1");
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
      let returnType = EzsigntemplateformfieldgroupCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplateformfieldgroup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateformfieldgroupDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplateformfieldgroup
     * 
     * @param {Number} pkiEzsigntemplateformfieldgroupID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateformfieldgroupDeleteObjectV1Response}
     */
    ezsigntemplateformfieldgroupDeleteObjectV1(pkiEzsigntemplateformfieldgroupID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplateformfieldgroupID' is set
      if (pkiEzsigntemplateformfieldgroupID === undefined || pkiEzsigntemplateformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateformfieldgroupID' when calling ezsigntemplateformfieldgroupDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplateformfieldgroupID': pkiEzsigntemplateformfieldgroupID
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
      let returnType = EzsigntemplateformfieldgroupDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateformfieldgroupEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Ezsigntemplateformfieldgroup
     * 
     * @param {Number} pkiEzsigntemplateformfieldgroupID 
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupEditObjectV1Request} EzsigntemplateformfieldgroupEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateformfieldgroupEditObjectV1Response}
     */
    ezsigntemplateformfieldgroupEditObjectV1(pkiEzsigntemplateformfieldgroupID, EzsigntemplateformfieldgroupEditObjectV1Request, callback) {
      let postBody = EzsigntemplateformfieldgroupEditObjectV1Request;
      // verify the required parameter 'pkiEzsigntemplateformfieldgroupID' is set
      if (pkiEzsigntemplateformfieldgroupID === undefined || pkiEzsigntemplateformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateformfieldgroupID' when calling ezsigntemplateformfieldgroupEditObjectV1");
      }
      // verify the required parameter 'EzsigntemplateformfieldgroupEditObjectV1Request' is set
      if (EzsigntemplateformfieldgroupEditObjectV1Request === undefined || EzsigntemplateformfieldgroupEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplateformfieldgroupEditObjectV1Request' when calling ezsigntemplateformfieldgroupEditObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplateformfieldgroupID': pkiEzsigntemplateformfieldgroupID
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
      let returnType = EzsigntemplateformfieldgroupEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplateformfieldgroupGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplateformfieldgroup
     * 
     * @param {Number} pkiEzsigntemplateformfieldgroupID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplateformfieldgroupApi~ezsigntemplateformfieldgroupGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2Response}
     */
    ezsigntemplateformfieldgroupGetObjectV2(pkiEzsigntemplateformfieldgroupID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplateformfieldgroupID' is set
      if (pkiEzsigntemplateformfieldgroupID === undefined || pkiEzsigntemplateformfieldgroupID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplateformfieldgroupID' when calling ezsigntemplateformfieldgroupGetObjectV2");
      }

      let pathParams = {
        'pkiEzsigntemplateformfieldgroupID': pkiEzsigntemplateformfieldgroupID
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
      let returnType = EzsigntemplateformfieldgroupGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
