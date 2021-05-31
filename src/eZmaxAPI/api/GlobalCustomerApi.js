/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CommonResponseError from '../model/CommonResponseError';
import GlobalCustomerGetEndpointV1Response from '../model/GlobalCustomerGetEndpointV1Response';

/**
* GlobalCustomer service.
* @module eZmaxAPI/api/GlobalCustomerApi
* @version 1.0.44
*/
export default class GlobalCustomerApi {

    /**
    * Constructs a new GlobalCustomerApi. 
    * @alias module:eZmaxAPI/api/GlobalCustomerApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the globalCustomerGetEndpointV1 operation.
     * @callback module:eZmaxAPI/api/GlobalCustomerApi~globalCustomerGetEndpointV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get customer endpoint
     * Retrieve the customer's specific server endpoint where to send requests. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer's data is stored.
     * @param {String} pksCustomerCode The customer code assigned to your account
     * @param {Object} opts Optional parameters
     * @param {module:eZmaxAPI/model/String} opts.sInfrastructureproductCode The infrastructure product Code  If undefined, \"appcluster01\" is assumed
     * @param {module:eZmaxAPI/api/GlobalCustomerApi~globalCustomerGetEndpointV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/GlobalCustomerGetEndpointV1Response}
     */
    globalCustomerGetEndpointV1(pksCustomerCode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'pksCustomerCode' is set
      if (pksCustomerCode === undefined || pksCustomerCode === null) {
        throw new Error("Missing the required parameter 'pksCustomerCode' when calling globalCustomerGetEndpointV1");
      }

      let pathParams = {
        'pksCustomerCode': pksCustomerCode
      };
      let queryParams = {
        'sInfrastructureproductCode': opts['sInfrastructureproductCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GlobalCustomerGetEndpointV1Response;
      return this.apiClient.callApi(
        '/1/customer/{pksCustomerCode}/endpoint', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
