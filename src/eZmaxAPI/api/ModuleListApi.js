/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import ListGetListpresentationV1Response from '../model/ListGetListpresentationV1Response';
import ListSaveListpresentationV1Request from '../model/ListSaveListpresentationV1Request';
import ListSaveListpresentationV1Response from '../model/ListSaveListpresentationV1Response';

/**
* ModuleList service.
* @module eZmaxAPI/api/ModuleListApi
* @version 1.1.7
*/
export default class ModuleListApi {

    /**
    * Constructs a new ModuleListApi. 
    * @alias module:eZmaxAPI/api/ModuleListApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listGetListpresentationV1 operation.
     * @callback module:eZmaxAPI/api/ModuleListApi~listGetListpresentationV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ListGetListpresentationV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Listpresentation for a specific list
     * Retrive previously saved Listpresentation
     * @param {String} sListName The list Name
     * @param {module:eZmaxAPI/api/ModuleListApi~listGetListpresentationV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ListGetListpresentationV1Response}
     */
    listGetListpresentationV1(sListName, callback) {
      let postBody = null;
      // verify the required parameter 'sListName' is set
      if (sListName === undefined || sListName === null) {
        throw new Error("Missing the required parameter 'sListName' when calling listGetListpresentationV1");
      }

      let pathParams = {
        'sListName': sListName
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
      let returnType = ListGetListpresentationV1Response;
      return this.apiClient.callApi(
        '/1/module/list/listpresentation/{sListName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listSaveListpresentationV1 operation.
     * @callback module:eZmaxAPI/api/ModuleListApi~listSaveListpresentationV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ListSaveListpresentationV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save all Listpresentation for a specific list
     * Users can create many Listpresentations for lists in the system. They can customize orber by, filters, numbers of rows, etc.
     * @param {String} sListName The list Name
     * @param {module:eZmaxAPI/model/ListSaveListpresentationV1Request} ListSaveListpresentationV1Request 
     * @param {module:eZmaxAPI/api/ModuleListApi~listSaveListpresentationV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ListSaveListpresentationV1Response}
     */
    listSaveListpresentationV1(sListName, ListSaveListpresentationV1Request, callback) {
      let postBody = ListSaveListpresentationV1Request;
      // verify the required parameter 'sListName' is set
      if (sListName === undefined || sListName === null) {
        throw new Error("Missing the required parameter 'sListName' when calling listSaveListpresentationV1");
      }
      // verify the required parameter 'ListSaveListpresentationV1Request' is set
      if (ListSaveListpresentationV1Request === undefined || ListSaveListpresentationV1Request === null) {
        throw new Error("Missing the required parameter 'ListSaveListpresentationV1Request' when calling listSaveListpresentationV1");
      }

      let pathParams = {
        'sListName': sListName
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
      let returnType = ListSaveListpresentationV1Response;
      return this.apiClient.callApi(
        '/1/module/list/listpresentation/{sListName}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
