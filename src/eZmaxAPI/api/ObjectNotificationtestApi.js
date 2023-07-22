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
import NotificationtestGetElementsV1Response from '../model/NotificationtestGetElementsV1Response';

/**
* ObjectNotificationtest service.
* @module eZmaxAPI/api/ObjectNotificationtestApi
* @version 1.1.18
*/
export default class ObjectNotificationtestApi {

    /**
    * Constructs a new ObjectNotificationtestApi. 
    * @alias module:eZmaxAPI/api/ObjectNotificationtestApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the notificationtestGetElementsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectNotificationtestApi~notificationtestGetElementsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/NotificationtestGetElementsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Notificationtest's Elements
     * 
     * @param {Number} pkiNotificationtestID 
     * @param {module:eZmaxAPI/api/ObjectNotificationtestApi~notificationtestGetElementsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/NotificationtestGetElementsV1Response}
     */
    notificationtestGetElementsV1(pkiNotificationtestID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiNotificationtestID' is set
      if (pkiNotificationtestID === undefined || pkiNotificationtestID === null) {
        throw new Error("Missing the required parameter 'pkiNotificationtestID' when calling notificationtestGetElementsV1");
      }

      let pathParams = {
        'pkiNotificationtestID': pkiNotificationtestID
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
      let returnType = NotificationtestGetElementsV1Response;
      return this.apiClient.callApi(
        '/1/object/notificationtest/{pkiNotificationtestID}/getElements', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
