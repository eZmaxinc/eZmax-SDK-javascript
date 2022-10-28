/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WebhookListElement from './WebhookListElement';

/**
 * The WebhookGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/WebhookGetListV1ResponseMPayloadAllOf
 * @version 1.1.13
 */
class WebhookGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>WebhookGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookGetListV1ResponseMPayloadAllOf
     * @param a_objWebhook {Array.<module:eZmaxAPI/model/WebhookListElement>} 
     */
    constructor(a_objWebhook) { 
        
        WebhookGetListV1ResponseMPayloadAllOf.initialize(this, a_objWebhook);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objWebhook) { 
        obj['a_objWebhook'] = a_objWebhook;
    }

    /**
     * Constructs a <code>WebhookGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetListV1ResponseMPayloadAllOf} The populated <code>WebhookGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objWebhook')) {
                obj['a_objWebhook'] = ApiClient.convertToType(data['a_objWebhook'], [WebhookListElement]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/WebhookListElement>}
     */
    getAObjWebhook() {
        return this.a_objWebhook;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/WebhookListElement>} a_objWebhook
     */
    setAObjWebhook(a_objWebhook) {
        this['a_objWebhook'] = a_objWebhook;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/WebhookListElement>} a_objWebhook
 */
WebhookGetListV1ResponseMPayloadAllOf.prototype['a_objWebhook'] = undefined;






export default WebhookGetListV1ResponseMPayloadAllOf;

