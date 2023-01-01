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
import CommunicationGetCountV1Response from '../model/CommunicationGetCountV1Response';
import CommunicationGetListV1Response from '../model/CommunicationGetListV1Response';

/**
* ModuleCommunication service.
* @module eZmaxAPI/api/ModuleCommunicationApi
* @version 1.1.17
*/
export default class ModuleCommunicationApi {

    /**
    * Constructs a new ModuleCommunicationApi. 
    * @alias module:eZmaxAPI/api/ModuleCommunicationApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the communicationGetCommunicationCountV1 operation.
     * @callback module:eZmaxAPI/api/ModuleCommunicationApi~communicationGetCommunicationCountV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommunicationGetCountV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the number of communication
     * Get the number of communication in specified module
     * @param {module:eZmaxAPI/model/String} eCommunicationModule Specify the requested module
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/api/ModuleCommunicationApi~communicationGetCommunicationCountV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommunicationGetCountV1Response}
     */
    communicationGetCommunicationCountV1(eCommunicationModule, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'eCommunicationModule' is set
      if (eCommunicationModule === undefined || eCommunicationModule === null) {
        throw new Error("Missing the required parameter 'eCommunicationModule' when calling communicationGetCommunicationCountV1");
      }

      let pathParams = {
      };
      let queryParams = {
        'eCommunicationModule': eCommunicationModule,
        'pkiEzsignfolderID': opts['pkiEzsignfolderID']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommunicationGetCountV1Response;
      return this.apiClient.callApi(
        '/1/module/communication/getCommunicationCount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the communicationGetCommunicationListV1 operation.
     * @callback module:eZmaxAPI/api/ModuleCommunicationApi~communicationGetCommunicationListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommunicationGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve communication list
     * Retrieve communication list
     * @param {module:eZmaxAPI/model/String} eCommunicationModule Specify the requested module
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pkiEzsignfolderID The unique ID of the Ezsignfolder
     * @param {module:eZmaxAPI/api/ModuleCommunicationApi~communicationGetCommunicationListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommunicationGetListV1Response}
     */
    communicationGetCommunicationListV1(eCommunicationModule, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'eCommunicationModule' is set
      if (eCommunicationModule === undefined || eCommunicationModule === null) {
        throw new Error("Missing the required parameter 'eCommunicationModule' when calling communicationGetCommunicationListV1");
      }

      let pathParams = {
      };
      let queryParams = {
        'eCommunicationModule': eCommunicationModule,
        'pkiEzsignfolderID': opts['pkiEzsignfolderID']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommunicationGetListV1Response;
      return this.apiClient.callApi(
        '/1/module/communication/getCommunicationList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
