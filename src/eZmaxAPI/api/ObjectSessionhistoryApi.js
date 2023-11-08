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
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';
import SessionhistoryGetListV1Response from '../model/SessionhistoryGetListV1Response';

/**
* ObjectSessionhistory service.
* @module eZmaxAPI/api/ObjectSessionhistoryApi
* @version 1.2.0
*/
export default class ObjectSessionhistoryApi {

    /**
    * Constructs a new ObjectSessionhistoryApi. 
    * @alias module:eZmaxAPI/api/ObjectSessionhistoryApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the sessionhistoryGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectSessionhistoryApi~sessionhistoryGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/SessionhistoryGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Sessionhistory list
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} [eOrderBy] Specify how you want the results to be sorted
     * @param {Number} [iRowMax] 
     * @param {Number} [iRowOffset = 0)] 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} [Accept_Language] 
     * @param {String} [sFilter] 
     * @param {module:eZmaxAPI/api/ObjectSessionhistoryApi~sessionhistoryGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/SessionhistoryGetListV1Response}
     */
    sessionhistoryGetListV1(opts, callback) {
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
      let returnType = SessionhistoryGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/sessionhistory/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
