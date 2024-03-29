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
import CommonResponseError from '../model/CommonResponseError';
import EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Response from '../model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Response';
import EzsignbulksendtransmissionGetFormsDataV1Response from '../model/EzsignbulksendtransmissionGetFormsDataV1Response';
import EzsignbulksendtransmissionGetObjectV2Response from '../model/EzsignbulksendtransmissionGetObjectV2Response';

/**
* ObjectEzsignbulksendtransmission service.
* @module eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi
* @version 1.1.18
*/
export default class ObjectEzsignbulksendtransmissionApi {

    /**
    * Constructs a new ObjectEzsignbulksendtransmissionApi. 
    * @alias module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi
    * @class
    * @param {module:eZmaxAPI/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:eZmaxAPI/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the ezsignbulksendtransmissionGetCsvErrorsV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetCsvErrorsV1Callback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksendtransmission's Csv containing errors
     * 
     * @param {Number} pkiEzsignbulksendtransmissionID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetCsvErrorsV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    ezsignbulksendtransmissionGetCsvErrorsV1(pkiEzsignbulksendtransmissionID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendtransmissionID' is set
      if (pkiEzsignbulksendtransmissionID === undefined || pkiEzsignbulksendtransmissionID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendtransmissionID' when calling ezsignbulksendtransmissionGetCsvErrorsV1");
      }

      let pathParams = {
        'pkiEzsignbulksendtransmissionID': pkiEzsignbulksendtransmissionID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getCsvErrors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendtransmissionGetEzsignsignaturesAutomaticV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksendtransmission's automatic Ezsignsignatures
     * Return the Ezsignsignatures that can be signed by the current user at the current step in the process
     * @param {Number} pkiEzsignbulksendtransmissionID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Response}
     */
    ezsignbulksendtransmissionGetEzsignsignaturesAutomaticV1(pkiEzsignbulksendtransmissionID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendtransmissionID' is set
      if (pkiEzsignbulksendtransmissionID === undefined || pkiEzsignbulksendtransmissionID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendtransmissionID' when calling ezsignbulksendtransmissionGetEzsignsignaturesAutomaticV1");
      }

      let pathParams = {
        'pkiEzsignbulksendtransmissionID': pkiEzsignbulksendtransmissionID
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
      let returnType = EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getEzsignsignaturesAutomatic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendtransmissionGetFormsDataV1 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetFormsDataV1Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksendtransmission's forms data
     * 
     * @param {Number} pkiEzsignbulksendtransmissionID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetFormsDataV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response}
     */
    ezsignbulksendtransmissionGetFormsDataV1(pkiEzsignbulksendtransmissionID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendtransmissionID' is set
      if (pkiEzsignbulksendtransmissionID === undefined || pkiEzsignbulksendtransmissionID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendtransmissionID' when calling ezsignbulksendtransmissionGetFormsDataV1");
      }

      let pathParams = {
        'pkiEzsignbulksendtransmissionID': pkiEzsignbulksendtransmissionID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/zip'];
      let returnType = EzsignbulksendtransmissionGetFormsDataV1Response;
      return this.apiClient.callApi(
        '/1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getFormsData', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the ezsignbulksendtransmissionGetObjectV2 operation.
     * @callback module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetObjectV2Callback
     * @param {String} error Error message, if any.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing Ezsignbulksendtransmission
     * 
     * @param {Number} pkiEzsignbulksendtransmissionID 
     * @param {module:eZmaxAPI/api/ObjectEzsignbulksendtransmissionApi~ezsignbulksendtransmissionGetObjectV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2Response}
     */
    ezsignbulksendtransmissionGetObjectV2(pkiEzsignbulksendtransmissionID, callback) {
      let postBody = null;
      // verify the required parameter 'pkiEzsignbulksendtransmissionID' is set
      if (pkiEzsignbulksendtransmissionID === undefined || pkiEzsignbulksendtransmissionID === null) {
        throw new Error("Missing the required parameter 'pkiEzsignbulksendtransmissionID' when calling ezsignbulksendtransmissionGetObjectV2");
      }

      let pathParams = {
        'pkiEzsignbulksendtransmissionID': pkiEzsignbulksendtransmissionID
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
      let returnType = EzsignbulksendtransmissionGetObjectV2Response;
      return this.apiClient.callApi(
        '/2/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
