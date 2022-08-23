/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
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
 * The WebhookGetHistoryV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayloadAllOf
 * @version 1.1.10
 */
class WebhookGetHistoryV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>WebhookGetHistoryV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayloadAllOf
     * @param a_objWebhooklog {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>} 
     */
    constructor(a_objWebhooklog) { 
        
        WebhookGetHistoryV1ResponseMPayloadAllOf.initialize(this, a_objWebhooklog);
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
     * Constructs a <code>WebhookGetHistoryV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetHistoryV1ResponseMPayloadAllOf} The populated <code>WebhookGetHistoryV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetHistoryV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objWebhooklog')) {
                obj['a_objWebhooklog'] = ApiClient.convertToType(data['a_objWebhooklog'], [CustomWebhooklogResponse]);
            }
        }
        return obj;
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

/**
 * @member {Array.<module:eZmaxAPI/model/CustomWebhooklogResponse>} a_objWebhooklog
 */
WebhookGetHistoryV1ResponseMPayloadAllOf.prototype['a_objWebhooklog'] = undefined;






export default WebhookGetHistoryV1ResponseMPayloadAllOf;

