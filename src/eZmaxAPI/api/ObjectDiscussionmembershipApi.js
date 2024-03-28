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
import DiscussionmembershipCreateObjectV1Request from '../model/DiscussionmembershipCreateObjectV1Request';
import DiscussionmembershipCreateObjectV1Response from '../model/DiscussionmembershipCreateObjectV1Response';
import DiscussionmembershipDeleteObjectV1Response from '../model/DiscussionmembershipDeleteObjectV1Response';

/**
* ObjectDiscussionmembership service.
* @module eZmaxAPI/api/ObjectDiscussionmembershipApi
* @version 1.2.0
*/
export default class ObjectDiscussionmembershipApi {

    /**
    * Constructs a new ObjectDiscussionmembershipApi. 
    * @alias module:eZmaxAPI/api/ObjectDiscussionmembershipApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the discussionmembershipCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectDiscussionmembershipApi~discussionmembershipCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/DiscussionmembershipCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Discussionmembership
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/DiscussionmembershipCreateObjectV1Request} DiscussionmembershipCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectDiscussionmembershipApi~discussionmembershipCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/DiscussionmembershipCreateObjectV1Response}
     */
    discussionmembershipCreateObjectV1(DiscussionmembershipCreateObjectV1Request, callback) {
      let postBody = DiscussionmembershipCreateObjectV1Request;
      // verify the required parameter 'DiscussionmembershipCreateObjectV1Request' is set
      if (DiscussionmembershipCreateObjectV1Request === undefined || DiscussionmembershipCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'DiscussionmembershipCreateObjectV1Request' when calling discussionmembershipCreateObjectV1");
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
      let returnType = DiscussionmembershipCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/discussionmembership', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the discussionmembershipDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectDiscussionmembershipApi~discussionmembershipDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/DiscussionmembershipDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Discussionmembership
     * 
     * @param {Number} pkiDiscussionmembershipID The unique ID of the Discussionmembership
     * @param {module:eZmaxAPI/api/ObjectDiscussionmembershipApi~discussionmembershipDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/DiscussionmembershipDeleteObjectV1Response}
     */
    discussionmembershipDeleteObjectV1(pkiDiscussionmembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiDiscussionmembershipID' is set
      if (pkiDiscussionmembershipID === undefined || pkiDiscussionmembershipID === null) {
        throw new Error("Missing the required parameter 'pkiDiscussionmembershipID' when calling discussionmembershipDeleteObjectV1");
      }

      let pathParams = {
        'pkiDiscussionmembershipID': pkiDiscussionmembershipID
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
      let returnType = DiscussionmembershipDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/discussionmembership/{pkiDiscussionmembershipID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}