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
import ElectronicfundstransferGetCommunicationListV1Response from '../model/ElectronicfundstransferGetCommunicationListV1Response';

/**
* ObjectElectronicfundstransfer service.
* @module eZmaxAPI/api/ObjectElectronicfundstransferApi
* @version 1.2.0
*/
export default class ObjectElectronicfundstransferApi {

    /**
    * Constructs a new ObjectElectronicfundstransferApi. 
    * @alias module:eZmaxAPI/api/ObjectElectronicfundstransferApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the eletronicfundstransferGetCommunicationListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectElectronicfundstransferApi~eletronicfundstransferGetCommunicationListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/ElectronicfundstransferGetCommunicationListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Communication list
     * 
     * @param {Number} pkiElectronicfundstransferID 
     * @param {module:eZmaxAPI/api/ObjectElectronicfundstransferApi~eletronicfundstransferGetCommunicationListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/ElectronicfundstransferGetCommunicationListV1Response}
     */
    eletronicfundstransferGetCommunicationListV1(pkiElectronicfundstransferID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiElectronicfundstransferID' is set
      if (pkiElectronicfundstransferID === undefined || pkiElectronicfundstransferID === null) {
        throw new Error("Missing the required parameter 'pkiElectronicfundstransferID' when calling eletronicfundstransferGetCommunicationListV1");
      }

      let pathParams = {
        'pkiElectronicfundstransferID': pkiElectronicfundstransferID
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
      let returnType = ElectronicfundstransferGetCommunicationListV1Response;
      return this.apiClient.callApi(
        '/1/object/electronicfundstransfer/{pkiElectronicfundstransferID}/getCommunicationList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
