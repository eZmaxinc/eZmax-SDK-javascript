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
import BuyercontractGetCommunicationListV1Response from '../model/BuyercontractGetCommunicationListV1Response';
import CommonResponseError from '../model/CommonResponseError';

/**
* ObjectBuyercontract service.
* @module eZmaxAPI/api/ObjectBuyercontractApi
* @version 1.2.0
*/
export default class ObjectBuyercontractApi {

    /**
    * Constructs a new ObjectBuyercontractApi. 
    * @alias module:eZmaxAPI/api/ObjectBuyercontractApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the buyercontractGetCommunicationListV1 operation.
     * @callback module:eZmaxAPI/api/ObjectBuyercontractApi~buyercontractGetCommunicationListV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/BuyercontractGetCommunicationListV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Communication list
     * 
     * @param {Number} pkiBuyercontractID 
     * @param {module:eZmaxAPI/api/ObjectBuyercontractApi~buyercontractGetCommunicationListV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/BuyercontractGetCommunicationListV1Response}
     */
    buyercontractGetCommunicationListV1(pkiBuyercontractID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiBuyercontractID' is set
      if (pkiBuyercontractID === undefined || pkiBuyercontractID === null) {
        throw new Error("Missing the required parameter 'pkiBuyercontractID' when calling buyercontractGetCommunicationListV1");
      }

      let pathParams = {
        'pkiBuyercontractID': pkiBuyercontractID
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
      let returnType = BuyercontractGetCommunicationListV1Response;
      return this.apiClient.callApi(
        '/1/object/buyercontract/{pkiBuyercontractID}/getCommunicationList', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
