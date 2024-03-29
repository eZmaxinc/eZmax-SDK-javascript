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

/**
 * The WebhookResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/WebhookResponseCompoundAllOf
 * @version 1.1.18
 */
class WebhookResponseCompoundAllOf {
    /**
     * Constructs a new <code>WebhookResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookResponseCompoundAllOf
     */
    constructor() { 
        
        WebhookResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookResponseCompoundAllOf} The populated <code>WebhookResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookResponseCompoundAllOf();

            if (data.hasOwnProperty('sWebhookEvent')) {
                obj['sWebhookEvent'] = ApiClient.convertToType(data['sWebhookEvent'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sWebhookEvent'] && !(typeof data['sWebhookEvent'] === 'string' || data['sWebhookEvent'] instanceof String)) {
            throw new Error("Expected the field `sWebhookEvent` to be a primitive type in the JSON string but got " + data['sWebhookEvent']);
        }

        return true;
    }

/**
     * Returns The concatenated string to describe the Webhook event
     * @return {String}
     */
    getSWebhookEvent() {
        return this.sWebhookEvent;
    }

    /**
     * Sets The concatenated string to describe the Webhook event
     * @param {String} sWebhookEvent The concatenated string to describe the Webhook event
     */
    setSWebhookEvent(sWebhookEvent) {
        this['sWebhookEvent'] = sWebhookEvent;
    }

}



/**
 * The concatenated string to describe the Webhook event
 * @member {String} sWebhookEvent
 */
WebhookResponseCompoundAllOf.prototype['sWebhookEvent'] = undefined;






export default WebhookResponseCompoundAllOf;

