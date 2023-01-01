/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WebhookGetObjectV2ResponseMPayload from './WebhookGetObjectV2ResponseMPayload';

/**
 * The WebhookGetObjectV2ResponseAllOf model module.
 * @module eZmaxAPI/model/WebhookGetObjectV2ResponseAllOf
 * @version 1.1.17
 */
class WebhookGetObjectV2ResponseAllOf {
    /**
     * Constructs a new <code>WebhookGetObjectV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookGetObjectV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        WebhookGetObjectV2ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>WebhookGetObjectV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetObjectV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetObjectV2ResponseAllOf} The populated <code>WebhookGetObjectV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetObjectV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = WebhookGetObjectV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookGetObjectV2ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookGetObjectV2ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookGetObjectV2ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          WebhookGetObjectV2ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

WebhookGetObjectV2ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload} mPayload
 */
WebhookGetObjectV2ResponseAllOf.prototype['mPayload'] = undefined;






export default WebhookGetObjectV2ResponseAllOf;

