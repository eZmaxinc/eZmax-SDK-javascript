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
import CommunicationGetObjectV2Response from '../model/CommunicationGetObjectV2Response';

/**
* ObjectCommunication service.
* @module eZmaxAPI/api/ObjectCommunicationApi
* @version 1.1.18
*/
export default class ObjectCommunicationApi {

    /**
    * Constructs a new ObjectCommunicationApi. 
    * @alias module:eZmaxAPI/api/ObjectCommunicationApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the communicationGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectCommunicationApi~communicationGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommunicationGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Communication
     * 
     * @param {Number} pkiCommunicationID 
     * @param {module:eZmaxAPI/api/ObjectCommunicationApi~communicationGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommunicationGetObjectV2Response}
     */
    communicationGetObjectV2(pkiCommunicationID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiCommunicationID' is set
      if (pkiCommunicationID === undefined || pkiCommunicationID === null) {
        throw new Error("Missing the required parameter 'pkiCommunicationID' when calling communicationGetObjectV2");
      }

      let pathParams = {
        'pkiCommunicationID': pkiCommunicationID
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
      let returnType = CommunicationGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/communication/{pkiCommunicationID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}