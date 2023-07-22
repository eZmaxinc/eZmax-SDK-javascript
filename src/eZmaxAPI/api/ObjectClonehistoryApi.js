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
import ClonehistoryGetListV1Response from '../model/ClonehistoryGetListV1Response';
import CommonResponseError from '../model/CommonResponseError';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectClonehistory service.
* @module eZmaxAPI/api/ObjectClonehistoryApi
* @version 1.1.18
*/
export default class ObjectClonehistoryApi {

    /**
    * Constructs a new ObjectClonehistoryApi. 
    * @alias module:eZmaxAPI/api/ObjectClonehistoryApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clonehistoryGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectClonehistoryApi~clonehistoryGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ClonehistoryGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Clonehistory list
     * 
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eOrderBy] Specify how you want the results to be sorted
     * @param {Number} [iRowMax = 10000)] 
     * @param {Number} [iRowOffset = 0)] 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {String} [sFilter] 
     * @param {module:eZmaxAPI/api/ObjectClonehistoryApi~clonehistoryGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ClonehistoryGetListV1Response}
     */
    clonehistoryGetListV1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'eOrderBy': opts['eOrderBy'],
        'iRowMax': opts['iRowMax'],
        'iRowOffset': opts['iRowOffset'],
        'sFilter': opts['sFilter']
      };
      let headerParams = {
        'Accept-Language': opts['Accept_Language']
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      let returnType = ClonehistoryGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/clonehistory/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
