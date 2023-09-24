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
import EzsigntemplatepackagemembershipCreateObjectV1Request from '../model/EzsigntemplatepackagemembershipCreateObjectV1Request';
import EzsigntemplatepackagemembershipCreateObjectV1Response from '../model/EzsigntemplatepackagemembershipCreateObjectV1Response';
import EzsigntemplatepackagemembershipDeleteObjectV1Response from '../model/EzsigntemplatepackagemembershipDeleteObjectV1Response';
import EzsigntemplatepackagemembershipGetObjectV2Response from '../model/EzsigntemplatepackagemembershipGetObjectV2Response';

/**
* ObjectEzsigntemplatepackagemembership service.
* @module eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi
* @version 1.2.0
*/
export default class ObjectEzsigntemplatepackagemembershipApi {

    /**
    * Constructs a new ObjectEzsigntemplatepackagemembershipApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatepackagemembershipCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Ezsigntemplatepackagemembership
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Request} EzsigntemplatepackagemembershipCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagemembershipCreateObjectV1Response}
     */
    ezsigntemplatepackagemembershipCreateObjectV1(EzsigntemplatepackagemembershipCreateObjectV1Request, callback) {
      let postBody = EzsigntemplatepackagemembershipCreateObjectV1Request;
      // verify the required parameter 'EzsigntemplatepackagemembershipCreateObjectV1Request' is set
      if (EzsigntemplatepackagemembershipCreateObjectV1Request === undefined || EzsigntemplatepackagemembershipCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'EzsigntemplatepackagemembershipCreateObjectV1Request' when calling ezsigntemplatepackagemembershipCreateObjectV1");
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
      let returnType = EzsigntemplatepackagemembershipCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackagemembership', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackagemembershipDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Ezsigntemplatepackagemembership
     * 
     * @param {Number} pkiEzsigntemplatepackagemembershipID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagemembershipDeleteObjectV1Response}
     */
    ezsigntemplatepackagemembershipDeleteObjectV1(pkiEzsigntemplatepackagemembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackagemembershipID' is set
      if (pkiEzsigntemplatepackagemembershipID === undefined || pkiEzsigntemplatepackagemembershipID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackagemembershipID' when calling ezsigntemplatepackagemembershipDeleteObjectV1");
      }

      let pathParams = {
        'pkiEzsigntemplatepackagemembershipID': pkiEzsigntemplatepackagemembershipID
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
      let returnType = EzsigntemplatepackagemembershipDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsigntemplatepackagemembershipGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsigntemplatepackagemembership
     * 
     * @param {Number} pkiEzsigntemplatepackagemembershipID 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackagemembershipApi~ezsigntemplatepackagemembershipGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2Response}
     */
    ezsigntemplatepackagemembershipGetObjectV2(pkiEzsigntemplatepackagemembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsigntemplatepackagemembershipID' is set
      if (pkiEzsigntemplatepackagemembershipID === undefined || pkiEzsigntemplatepackagemembershipID === null) {
        throw new Error("Missing the required parameter 'pkiEzsigntemplatepackagemembershipID' when calling ezsigntemplatepackagemembershipGetObjectV2");
      }

      let pathParams = {
        'pkiEzsigntemplatepackagemembershipID': pkiEzsigntemplatepackagemembershipID
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
      let returnType = EzsigntemplatepackagemembershipGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
