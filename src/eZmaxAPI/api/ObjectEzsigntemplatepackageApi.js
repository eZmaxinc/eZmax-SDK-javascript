/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import EzsigntemplatepackageGetListV1Response from '../model/EzsigntemplatepackageGetListV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsigntemplatepackage service.
* @module eZmaxAPI/api/ObjectEzsigntemplatepackageApi
* @version 1.1.4
*/
export default class ObjectEzsigntemplatepackageApi {

    /**
    * Constructs a new ObjectEzsigntemplatepackageApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsigntemplatepackageGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsigntemplatepackage list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsigntemplatepackageType | Company<br>Department<br>Team<br>User<br>Usergroup |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsigntemplatepackageApi~ezsigntemplatepackageGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsigntemplatepackageGetListV1Response}
     */
    ezsigntemplatepackageGetListV1(opts, callback) {
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
      let returnType = EzsigntemplatepackageGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsigntemplatepackage/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
