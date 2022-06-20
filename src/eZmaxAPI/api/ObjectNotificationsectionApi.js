/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import NotificationsectionGetNotificationtestsV1Response from '../model/NotificationsectionGetNotificationtestsV1Response';

/**
* ObjectNotificationsection service.
* @module eZmaxAPI/api/ObjectNotificationsectionApi
* @version 1.1.8
*/
export default class ObjectNotificationsectionApi {

    /**
    * Constructs a new ObjectNotificationsectionApi. 
    * @alias module:eZmaxAPI/api/ObjectNotificationsectionApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the notificationsectionGetNotificationtestsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectNotificationsectionApi~notificationsectionGetNotificationtestsV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/NotificationsectionGetNotificationtestsV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Notificationsection's Notificationtests
     * 
     * @param {Number} pkiNotificationsectionID 
     * @param {Boolean} bShowHidden Whether or not to return the hidden Notificationtests
     * @param {module:eZmaxAPI/api/ObjectNotificationsectionApi~notificationsectionGetNotificationtestsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/NotificationsectionGetNotificationtestsV1Response}
     */
    notificationsectionGetNotificationtestsV1(pkiNotificationsectionID, bShowHidden, callback) {
      let postBody = null;
      // verify the required parameter 'pkiNotificationsectionID' is set
      if (pkiNotificationsectionID === undefined || pkiNotificationsectionID === null) {
        throw new Error("Missing the required parameter 'pkiNotificationsectionID' when calling notificationsectionGetNotificationtestsV1");
      }
      // verify the required parameter 'bShowHidden' is set
      if (bShowHidden === undefined || bShowHidden === null) {
        throw new Error("Missing the required parameter 'bShowHidden' when calling notificationsectionGetNotificationtestsV1");
      }

      let pathParams = {
        'pkiNotificationsectionID': pkiNotificationsectionID
      };
      let queryParams = {
        'bShowHidden': bShowHidden
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NotificationsectionGetNotificationtestsV1Response;
      return this.apiClient.callApi(
        '/1/object/notificationsection/{pkiNotificationsectionID}/getNotificationtests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
