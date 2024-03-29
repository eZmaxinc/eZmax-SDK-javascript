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
import ScimUser from '../model/ScimUser';
import ScimUserList from '../model/ScimUserList';

/**
* ScimUsers service.
* @module eZmaxAPI/api/ScimUsersApi
* @version 1.1.18
*/
export default class ScimUsersApi {

    /**
    * Constructs a new ScimUsersApi. 
    * @alias module:eZmaxAPI/api/ScimUsersApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usersCreateObjectScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimUsersApi~usersCreateObjectScimV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new User
     * @param {module:eZmaxAPI/model/ScimUser} ScimUser 
     * @param {module:eZmaxAPI/api/ScimUsersApi~usersCreateObjectScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ScimUser}
     */
    usersCreateObjectScimV2(ScimUser, callback) {
      let postBody = ScimUser;
      // verify the required parameter 'ScimUser' is set
      if (ScimUser === undefined || ScimUser === null) {
        throw new Error("Missing the required parameter 'ScimUser' when calling usersCreateObjectScimV2");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScimUser;
      return this.apiClient.callApi(
        '/2/scim/Users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersDeleteObjectScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimUsersApi~usersDeleteObjectScimV2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing User
     * @param {String} userId 
     * @param {module:eZmaxAPI/api/ScimUsersApi~usersDeleteObjectScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    usersDeleteObjectScimV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersDeleteObjectScimV2");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/2/scim/Users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersEditObjectScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimUsersApi~usersEditObjectScimV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing User
     * @param {String} userId 
     * @param {module:eZmaxAPI/model/ScimUser} ScimUser 
     * @param {module:eZmaxAPI/api/ScimUsersApi~usersEditObjectScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ScimUser}
     */
    usersEditObjectScimV2(userId, ScimUser, callback) {
      let postBody = ScimUser;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersEditObjectScimV2");
      }
      // verify the required parameter 'ScimUser' is set
      if (ScimUser === undefined || ScimUser === null) {
        throw new Error("Missing the required parameter 'ScimUser' when calling usersEditObjectScimV2");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ScimUser;
      return this.apiClient.callApi(
        '/2/scim/Users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersGetListScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimUsersApi~usersGetListScimV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ScimUserList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve User list
     * @param {Object} opts Optional parameters
     * @param {String} [filter] Filter expression for searching users
     * @param {module:eZmaxAPI/api/ScimUsersApi~usersGetListScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ScimUserList}
     */
    usersGetListScimV2(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'filter': opts['filter']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScimUserList;
      return this.apiClient.callApi(
        '/2/scim/Users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersGetObjectScimV2 operation.
     * @callback module:eZmaxAPI/api/ScimUsersApi~usersGetObjectScimV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ScimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing User
     * @param {String} userId 
     * @param {module:eZmaxAPI/api/ScimUsersApi~usersGetObjectScimV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ScimUser}
     */
    usersGetObjectScimV2(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersGetObjectScimV2");
      }

      let pathParams = {
        'userId': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ScimUser;
      return this.apiClient.callApi(
        '/2/scim/Users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
