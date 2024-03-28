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

import ApiClient from '../ApiClient';

/**
 * The WebhookRegenerateApikeyV1Request model module.
 * @module eZmaxAPI/model/WebhookRegenerateApikeyV1Request
 * @version 1.2.0
 */
class WebhookRegenerateApikeyV1Request {
    /**
     * Constructs a new <code>WebhookRegenerateApikeyV1Request</code>.
     * Request for POST /1/object/webhook/{pkiWebhookID}/regenerateApikey
     * @alias module:eZmaxAPI/model/WebhookRegenerateApikeyV1Request
     */
    constructor() { 
        
        WebhookRegenerateApikeyV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookRegenerateApikeyV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookRegenerateApikeyV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookRegenerateApikeyV1Request} The populated <code>WebhookRegenerateApikeyV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRegenerateApikeyV1Request();

            if (data.hasOwnProperty('bWebhookIssigned')) {
                obj['bWebhookIssigned'] = ApiClient.convertToType(data['bWebhookIssigned'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookRegenerateApikeyV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookRegenerateApikeyV1Request</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * Returns Whether the requests will be signed or not
     * @return {Boolean}
     */
    getBWebhookIssigned() {
        return this.bWebhookIssigned;
    }

    /**
     * Sets Whether the requests will be signed or not
     * @param {Boolean} bWebhookIssigned Whether the requests will be signed or not
     */
    setBWebhookIssigned(bWebhookIssigned) {
        this['bWebhookIssigned'] = bWebhookIssigned;
    }

}



/**
 * Whether the requests will be signed or not
 * @member {Boolean} bWebhookIssigned
 */
WebhookRegenerateApikeyV1Request.prototype['bWebhookIssigned'] = undefined;






export default WebhookRegenerateApikeyV1Request;
