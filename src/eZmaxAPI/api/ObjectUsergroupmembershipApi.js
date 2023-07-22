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
import UsergroupmembershipCreateObjectV1Request from '../model/UsergroupmembershipCreateObjectV1Request';
import UsergroupmembershipCreateObjectV1Response from '../model/UsergroupmembershipCreateObjectV1Response';
import UsergroupmembershipDeleteObjectV1Response from '../model/UsergroupmembershipDeleteObjectV1Response';
import UsergroupmembershipEditObjectV1Request from '../model/UsergroupmembershipEditObjectV1Request';
import UsergroupmembershipEditObjectV1Response from '../model/UsergroupmembershipEditObjectV1Response';
import UsergroupmembershipGetObjectV2Response from '../model/UsergroupmembershipGetObjectV2Response';

/**
* ObjectUsergroupmembership service.
* @module eZmaxAPI/api/ObjectUsergroupmembershipApi
* @version 1.1.18
*/
export default class ObjectUsergroupmembershipApi {

    /**
    * Constructs a new ObjectUsergroupmembershipApi. 
    * @alias module:eZmaxAPI/api/ObjectUsergroupmembershipApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usergroupmembershipCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Usergroupmembership
     * The endpoint allows to create one or many elements at once.
     * @param {module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Request} UsergroupmembershipCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Response}
     */
    usergroupmembershipCreateObjectV1(UsergroupmembershipCreateObjectV1Request, callback) {
      let postBody = UsergroupmembershipCreateObjectV1Request;
      // verify the required parameter 'UsergroupmembershipCreateObjectV1Request' is set
      if (UsergroupmembershipCreateObjectV1Request === undefined || UsergroupmembershipCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'UsergroupmembershipCreateObjectV1Request' when calling usergroupmembershipCreateObjectV1");
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
      let returnType = UsergroupmembershipCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/usergroupmembership', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usergroupmembershipDeleteObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipDeleteObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/UsergroupmembershipDeleteObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing Usergroupmembership
     * 
     * @param {Number} pkiUsergroupmembershipID 
     * @param {module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipDeleteObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/UsergroupmembershipDeleteObjectV1Response}
     */
    usergroupmembershipDeleteObjectV1(pkiUsergroupmembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiUsergroupmembershipID' is set
      if (pkiUsergroupmembershipID === undefined || pkiUsergroupmembershipID === null) {
        throw new Error("Missing the required parameter 'pkiUsergroupmembershipID' when calling usergroupmembershipDeleteObjectV1");
      }

      let pathParams = {
        'pkiUsergroupmembershipID': pkiUsergroupmembershipID
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
      let returnType = UsergroupmembershipDeleteObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/usergroupmembership/{pkiUsergroupmembershipID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usergroupmembershipEditObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipEditObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/UsergroupmembershipEditObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing Usergroupmembership
     * 
     * @param {Number} pkiUsergroupmembershipID 
     * @param {module:eZmaxAPI/model/UsergroupmembershipEditObjectV1Request} UsergroupmembershipEditObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipEditObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/UsergroupmembershipEditObjectV1Response}
     */
    usergroupmembershipEditObjectV1(pkiUsergroupmembershipID, UsergroupmembershipEditObjectV1Request, callback) {
      let postBody = UsergroupmembershipEditObjectV1Request;
      // verify the required parameter 'pkiUsergroupmembershipID' is set
      if (pkiUsergroupmembershipID === undefined || pkiUsergroupmembershipID === null) {
        throw new Error("Missing the required parameter 'pkiUsergroupmembershipID' when calling usergroupmembershipEditObjectV1");
      }
      // verify the required parameter 'UsergroupmembershipEditObjectV1Request' is set
      if (UsergroupmembershipEditObjectV1Request === undefined || UsergroupmembershipEditObjectV1Request === null) {
        throw new Error("Missing the required parameter 'UsergroupmembershipEditObjectV1Request' when calling usergroupmembershipEditObjectV1");
      }

      let pathParams = {
        'pkiUsergroupmembershipID': pkiUsergroupmembershipID
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
      let returnType = UsergroupmembershipEditObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/usergroupmembership/{pkiUsergroupmembershipID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usergroupmembershipGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/UsergroupmembershipGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Usergroupmembership
     * 
     * @param {Number} pkiUsergroupmembershipID 
     * @param {module:eZmaxAPI/api/ObjectUsergroupmembershipApi~usergroupmembershipGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/UsergroupmembershipGetObjectV2Response}
     */
    usergroupmembershipGetObjectV2(pkiUsergroupmembershipID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiUsergroupmembershipID' is set
      if (pkiUsergroupmembershipID === undefined || pkiUsergroupmembershipID === null) {
        throw new Error("Missing the required parameter 'pkiUsergroupmembershipID' when calling usergroupmembershipGetObjectV2");
      }

      let pathParams = {
        'pkiUsergroupmembershipID': pkiUsergroupmembershipID
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
      let returnType = UsergroupmembershipGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/usergroupmembership/{pkiUsergroupmembershipID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}