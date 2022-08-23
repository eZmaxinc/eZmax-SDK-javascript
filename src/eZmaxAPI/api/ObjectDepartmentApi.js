/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonGetAutocompleteV1Response from '../model/CommonGetAutocompleteV1Response';
import CommonResponseError from '../model/CommonResponseError';
import DepartmentGetMembersV1Response from '../model/DepartmentGetMembersV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectDepartment service.
* @module eZmaxAPI/api/ObjectDepartmentApi
* @version 1.1.10
*/
export default class ObjectDepartmentApi {

    /**
    * Constructs a new ObjectDepartmentApi. 
    * @alias module:eZmaxAPI/api/ObjectDepartmentApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the departmentGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectDepartmentApi~departmentGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Departments and IDs
     * Get the list of Department to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Departments to return
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eFilterActive Specify which results we want to display. (default to 'Active')
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectDepartmentApi~departmentGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    departmentGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling departmentGetAutocompleteV1");
      }

      let pathParams = {
        'sSelector': sSelector
      };
      let queryParams = {
        'eFilterActive': opts['eFilterActive'],
        'sQuery': opts['sQuery']
      };
      let headerParams = {
        'Accept-Language': opts['Accept_Language']
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CommonGetAutocompleteV1Response;
      return this.apiClient.callApi(
        '/1/object/department/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the departmentGetMembersV1 operation.
     * @callback module:eZmaxAPI/api/ObjectDepartmentApi~departmentGetMembersV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/DepartmentGetMembersV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Department's members
     * 
     * @param {Number} pkiDepartmentID 
     * @param {module:eZmaxAPI/api/ObjectDepartmentApi~departmentGetMembersV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/DepartmentGetMembersV1Response}
     */
    departmentGetMembersV1(pkiDepartmentID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiDepartmentID' is set
      if (pkiDepartmentID === undefined || pkiDepartmentID === null) {
        throw new Error("Missing the required parameter 'pkiDepartmentID' when calling departmentGetMembersV1");
      }

      let pathParams = {
        'pkiDepartmentID': pkiDepartmentID
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
      let returnType = DepartmentGetMembersV1Response;
      return this.apiClient.callApi(
        '/1/object/department/{pkiDepartmentID}/getMembers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
