/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FranchisereferalincomeCreateObjectV1Request from '../model/FranchisereferalincomeCreateObjectV1Request';
import FranchisereferalincomeCreateObjectV1Response from '../model/FranchisereferalincomeCreateObjectV1Response';

/**
* ObjectFranchisereferalincome service.
* @module eZmaxAPI/api/ObjectFranchisereferalincomeApi
* @version 1.0.42
*/
export default class ObjectFranchisereferalincomeApi {

    /**
    * Constructs a new ObjectFranchisereferalincomeApi. 
    * @alias module:eZmaxAPI/api/ObjectFranchisereferalincomeApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the franchisereferalincomeCreateObjectV1 operation.
     * @callback module:eZmaxAPI/api/ObjectFranchisereferalincomeApi~franchisereferalincomeCreateObjectV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Franchisereferalincome
     * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
     * @param {Array.<module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request>} FranchisereferalincomeCreateObjectV1Request 
     * @param {module:eZmaxAPI/api/ObjectFranchisereferalincomeApi~franchisereferalincomeCreateObjectV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Response}
     */
    franchisereferalincomeCreateObjectV1(FranchisereferalincomeCreateObjectV1Request, callback) {
      let postBody = FranchisereferalincomeCreateObjectV1Request;
      // verify the required parameter 'FranchisereferalincomeCreateObjectV1Request' is set
      if (FranchisereferalincomeCreateObjectV1Request === undefined || FranchisereferalincomeCreateObjectV1Request === null) {
        throw new Error("Missing the required parameter 'FranchisereferalincomeCreateObjectV1Request' when calling franchisereferalincomeCreateObjectV1");
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
      let returnType = FranchisereferalincomeCreateObjectV1Response;
      return this.apiClient.callApi(
        '/1/object/franchisereferalincome', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
