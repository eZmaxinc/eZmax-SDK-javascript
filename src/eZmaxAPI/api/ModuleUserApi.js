/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import UserCreateEzsignuserV1Request from '../model/UserCreateEzsignuserV1Request';
import UserCreateEzsignuserV1Response from '../model/UserCreateEzsignuserV1Response';

/**
* ModuleUser service.
* @module eZmaxAPI/api/ModuleUserApi
* @version 1.1.13
*/
export default class ModuleUserApi {

    /**
    * Constructs a new ModuleUserApi. 
    * @alias module:eZmaxAPI/api/ModuleUserApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the userCreateEzsignuserV1 operation.
     * @callback module:eZmaxAPI/api/ModuleUserApi~userCreateEzsignuserV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/UserCreateEzsignuserV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new User of type Ezsignuser
     * The endpoint allows to initiate the creation or a user of type Ezsignuser.  The user will be created only once the email verification process will be completed
     * @param {Array.<module:eZmaxAPI/model/UserCreateEzsignuserV1Request>} UserCreateEzsignuserV1Request 
     * @param {module:eZmaxAPI/api/ModuleUserApi~userCreateEzsignuserV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/UserCreateEzsignuserV1Response}
     */
    userCreateEzsignuserV1(UserCreateEzsignuserV1Request, callback) {
      let postBody = UserCreateEzsignuserV1Request;
      // verify the required parameter 'UserCreateEzsignuserV1Request' is set
      if (UserCreateEzsignuserV1Request === undefined || UserCreateEzsignuserV1Request === null) {
        throw new Error("Missing the required parameter 'UserCreateEzsignuserV1Request' when calling userCreateEzsignuserV1");
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
      let returnType = UserCreateEzsignuserV1Response;
      return this.apiClient.callApi(
        '/1/module/user/createezsignuser', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
