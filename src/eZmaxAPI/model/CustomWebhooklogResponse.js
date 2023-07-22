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
import CustomWebhooklogResponseAllOf from './CustomWebhooklogResponseAllOf';

/**
 * The CustomWebhooklogResponse model module.
 * @module eZmaxAPI/model/CustomWebhooklogResponse
 * @version 1.1.18
 */
class CustomWebhooklogResponse {
    /**
     * Constructs a new <code>CustomWebhooklogResponse</code>.
     * A custom Webhooklog object
     * @alias module:eZmaxAPI/model/CustomWebhooklogResponse
     * @implements module:eZmaxAPI/model/CustomWebhooklogResponseAllOf
     * @param dtWebhooklogDate {String} The date and time at which the Webhooklog happened.
     * @param tWebhooklogJson {String} The Json containing the Webhook call and return
     */
    constructor(dtWebhooklogDate, tWebhooklogJson) { 
        CustomWebhooklogResponseAllOf.initialize(this, dtWebhooklogDate, tWebhooklogJson);
        CustomWebhooklogResponse.initialize(this, dtWebhooklogDate, tWebhooklogJson);
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
     * Constructs a <code>CustomWebhooklogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWebhooklogResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWebhooklogResponse} The populated <code>CustomWebhooklogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWebhooklogResponse();
            CustomWebhooklogResponseAllOf.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>CustomWebhooklogResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomWebhooklogResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomWebhooklogResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dtWebhooklogDate'] && !(typeof data['dtWebhooklogDate'] === 'string' || data['dtWebhooklogDate'] instanceof String)) {
            throw new Error("Expected the field `dtWebhooklogDate` to be a primitive type in the JSON string but got " + data['dtWebhooklogDate']);
        }
        // ensure the json data is a string
        if (data['tWebhooklogJson'] && !(typeof data['tWebhooklogJson'] === 'string' || data['tWebhooklogJson'] instanceof String)) {
            throw new Error("Expected the field `tWebhooklogJson` to be a primitive type in the JSON string but got " + data['tWebhooklogJson']);
        }

        return true;
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

CustomWebhooklogResponse.RequiredProperties = ["dtWebhooklogDate", "tWebhooklogJson"];

/**
 * The date and time at which the Webhooklog happened.
 * @member {String} dtWebhooklogDate
 */
CustomWebhooklogResponse.prototype['dtWebhooklogDate'] = undefined;

/**
 * The Json containing the Webhook call and return
 * @member {String} tWebhooklogJson
 */
CustomWebhooklogResponse.prototype['tWebhooklogJson'] = undefined;


// Implement CustomWebhooklogResponseAllOf interface:
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




export default CustomWebhooklogResponse;

