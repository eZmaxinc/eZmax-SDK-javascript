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

import ApiClient from '../ApiClient';
import CustomWebhooklogResponse from './CustomWebhooklogResponse';

/**
 * The WebhookGetHistoryV1ResponseMPayload model module.
 * @module eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayload
 * @version 1.1.18
 */
class WebhookGetHistoryV1ResponseMPayload {
    /**
     * Constructs a new <code>WebhookGetHistoryV1ResponseMPayload</code>.
     * Payload for GET /1/object/webhook/{pkiWebhookID}/getHistory
     * @alias module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayload
     * @param a_objWebhooklog {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>} 
     */
    constructor(a_objWebhooklog) { 
        
        WebhookGetHistoryV1ResponseMPayload.initialize(this, a_objWebhooklog);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objWebhooklog) { 
        obj['a_objWebhooklog'] = a_objWebhooklog;
    }

    /**
     * Constructs a <code>WebhookGetHistoryV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayload} The populated <code>WebhookGetHistoryV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetHistoryV1ResponseMPayload();

            if (data.hasOwnProperty('a_objWebhooklog')) {
                obj['a_objWebhooklog'] = ApiClient.convertToType(data['a_objWebhooklog'], [CustomWebhooklogResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookGetHistoryV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookGetHistoryV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookGetHistoryV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objWebhooklog']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objWebhooklog'])) {
                throw new Error("Expected the field `a_objWebhooklog` to be an array in the JSON data but got " + data['a_objWebhooklog']);
            }
            // validate the optional field `a_objWebhooklog` (array)
            for (const item of data['a_objWebhooklog']) {
                CustomWebhooklogResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>}
     */
    getAObjWebhooklog() {
        return this.a_objWebhooklog;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>} a_objWebhooklog
     */
    setAObjWebhooklog(a_objWebhooklog) {
        this['a_objWebhooklog'] = a_objWebhooklog;
    }

}

WebhookGetHistoryV1ResponseMPayload.RequiredProperties = ["a_objWebhooklog"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>} a_objWebhooklog
 */
WebhookGetHistoryV1ResponseMPayload.prototype['a_objWebhooklog'] = undefined;






export default WebhookGetHistoryV1ResponseMPayload;

