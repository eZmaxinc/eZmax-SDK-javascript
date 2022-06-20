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
import CommonGetAutocompleteV1Response from '../model/CommonGetAutocompleteV1Response';
import CommonResponseError from '../model/CommonResponseError';
import EzsignfoldertypeGetListV1Response from '../model/EzsignfoldertypeGetListV1Response';
import HeaderAcceptLanguage from '../model/HeaderAcceptLanguage';

/**
* ObjectEzsignfoldertype service.
* @module eZmaxAPI/api/ObjectEzsignfoldertypeApi
* @version 1.1.8
*/
export default class ObjectEzsignfoldertypeApi {

    /**
    * Constructs a new ObjectEzsignfoldertypeApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignfoldertypeApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignfoldertypeGetAutocompleteV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetAutocompleteV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsignfoldertypes and IDs
     * Get the list of Ezsignfoldertypes to be used in a dropdown or autocomplete control.
     * @param {module:eZmaxAPI/model/String} sSelector The type of Ezsignfoldertypes to return
     * @param {Object} opts Optional parameters
     * @param {String} opts.sQuery Allow to filter the returned results
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetAutocompleteV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/CommonGetAutocompleteV1Response}
     */
    ezsignfoldertypeGetAutocompleteV1(sSelector, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sSelector' is set
      if (sSelector === undefined || sSelector === null) {
        throw new Error("Missing the required parameter 'sSelector' when calling ezsignfoldertypeGetAutocompleteV1");
      }

      let pathParams = {
        'sSelector': sSelector
      };
      let queryParams = {
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
        '/1/object/ezsignfoldertype/getAutocomplete/{sSelector}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignfoldertypeGetListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Ezsignfoldertype list
     * Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsignfoldertypePrivacylevel | User<br>Usergroup |
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.eOrderBy Specify how you want the results to be sorted
     * @param {Number} opts.iRowMax 
     * @param {Number} opts.iRowOffset 
     * @param {module:eZmaxAPI/model/HeaderAcceptLanguage} opts.Accept_Language 
     * @param {String} opts.sFilter 
     * @param {module:eZmaxAPI/api/ObjectEzsignfoldertypeApi~ezsignfoldertypeGetListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response}
     */
    ezsignfoldertypeGetListV1(opts, callback) {
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
      let returnType = EzsignfoldertypeGetListV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignfoldertype/getList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
