/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomWebhooklogResponseAllOf model module.
 * @module eZmaxAPI/model/CustomWebhooklogResponseAllOf
 * @version 1.1.16
 */
class CustomWebhooklogResponseAllOf {
    /**
     * Constructs a new <code>CustomWebhooklogResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomWebhooklogResponseAllOf
     * @param dtWebhooklogDate {String} The date and time at which the Webhooklog happened.
     * @param tWebhooklogJson {String} The Json containing the Webhook call and return
     */
    constructor(dtWebhooklogDate, tWebhooklogJson) { 
        
        CustomWebhooklogResponseAllOf.initialize(this, dtWebhooklogDate, tWebhooklogJson);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dtWebhooklogDate, tWebhooklogJson) { 
        obj['dtWebhooklogDate'] = dtWebhooklogDate;
        obj['tWebhooklogJson'] = tWebhooklogJson;
    }

    /**
     * Constructs a <code>CustomWebhooklogResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWebhooklogResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWebhooklogResponseAllOf} The populated <code>CustomWebhooklogResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWebhooklogResponseAllOf();

            if (data.hasOwnProperty('dtWebhooklogDate')) {
                obj['dtWebhooklogDate'] = ApiClient.convertToType(data['dtWebhooklogDate'], 'String');
            }
            if (data.hasOwnProperty('tWebhooklogJson')) {
                obj['tWebhooklogJson'] = ApiClient.convertToType(data['tWebhooklogJson'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The date and time at which the Webhooklog happened.
     * @return {String}
     */
    getDtWebhooklogDate() {
        return this.dtWebhooklogDate;
    }

    /**
     * Sets The date and time at which the Webhooklog happened.
     * @param {String} dtWebhooklogDate The date and time at which the Webhooklog happened.
     */
    setDtWebhooklogDate(dtWebhooklogDate) {
        this['dtWebhooklogDate'] = dtWebhooklogDate;
    }
/**
     * Returns The Json containing the Webhook call and return
     * @return {String}
     */
    getTWebhooklogJson() {
        return this.tWebhooklogJson;
    }

    /**
     * Sets The Json containing the Webhook call and return
     * @param {String} tWebhooklogJson The Json containing the Webhook call and return
     */
    setTWebhooklogJson(tWebhooklogJson) {
        this['tWebhooklogJson'] = tWebhooklogJson;
    }

}

/**
 * The date and time at which the Webhooklog happened.
 * @member {String} dtWebhooklogDate
 */
CustomWebhooklogResponseAllOf.prototype['dtWebhooklogDate'] = undefined;

/**
 * The Json containing the Webhook call and return
 * @member {String} tWebhooklogJson
 */
CustomWebhooklogResponseAllOf.prototype['tWebhooklogJson'] = undefined;






export default CustomWebhooklogResponseAllOf;

