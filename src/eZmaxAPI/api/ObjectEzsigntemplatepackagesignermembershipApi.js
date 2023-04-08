/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsigntemplatepackagesignermembershipCreateObjectV1Request from '../model/EzsigntemplatepackagesignermembershipCreateObjectV1Request';
import EzsigntemplatepackagesignermembershipCreateObjectV1Response from '../model/EzsigntemplatepackagesignermembershipCreateObjectV1Response';
import EzsigntemplatepackagesignermembershipDeleteObjectV1Response from '../model/EzsigntemplatepackagesignermembershipDeleteObjectV1Response';
import EzsigntemplatepackagesignermembershipGetObjectV2Response from '../model/EzsigntemplatepackagesignermembershipGetObjectV2Response';

/**
* ObjectEzsigntemplatepackagesignermembership service.
* @module eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi
* @version 1.1.17
*/
export default class ObjectEzsigntemplatepackagesignermembershipApi {

    /**
    * Constructs a new ObjectEzsigntemplatepackagesignermembershipApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatepackagesignermembershipCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplatepackagesignermembership
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Request} EzsigntemplatepackagesignermembershipCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1Response}
     */
    ezsigntemplatepackagesignermembershipCreateObjectV1(EzsigntemplatepackagesignermembershipCreateObjectV1Request, callback) {
      let postBody = EzsigntemplatepackagesignermembershipCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplatepackagesignermembershipCreateObjectV1Request' is set
      if (EzsigntemplatepackagesignermembershipCreateObjectV1Request === undefined || EzsigntemplatepackagesignermembershipCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatepackagesignermembershipCreateObjectV1Request' when calling ezsigntemplatepackagesignermembershipCreateObjectV1");
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
      let returnType = EzsigntemplatepackagesignermembershipCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackagesignermembership', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackagesignermembershipDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplatepackagesignermembership
     * 
     * @param {Number} pkiEzsigntemplatepackagesignermembershipID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipDeleteObjectV1Response}
     */
    ezsigntemplatepackagesignermembershipDeleteObjectV1(pkiEzsigntemplatepackagesignermembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackagesignermembershipID' is set
      if (pkiEzsigntemplatepackagesignermembershipID === undefined || pkiEzsigntemplatepackagesignermembershipID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackagesignermembershipID' when calling ezsigntemplatepackagesignermembershipDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackagesignermembershipID': pkiEzsigntemplatepackagesignermembershipID
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
      let returnType = EzsigntemplatepackagesignermembershipDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackagesignermembership/{pkiEzsigntemplatepackagesignermembershipID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackagesignermembershipGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatepackagesignermembership
     * 
     * @param {Number} pkiEzsigntemplatepackagesignermembershipID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagesignermembershipApi~ezsigntemplatepackagesignermembershipGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipGetObjectV2Response}
     */
    ezsigntemplatepackagesignermembershipGetObjectV2(pkiEzsigntemplatepackagesignermembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackagesignermembershipID' is set
      if (pkiEzsigntemplatepackagesignermembershipID === undefined || pkiEzsigntemplatepackagesignermembershipID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackagesignermembershipID' when calling ezsigntemplatepackagesignermembershipGetObjectV2");
      }

      let pathParams = {
        'pkiEzsigntemplatepackagesignermembershipID': pkiEzsigntemplatepackagesignermembershipID
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
      let returnType = EzsigntemplatepackagesignermembershipGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplatepackagesignermembership/{pkiEzsigntemplatepackagesignermembershipID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
