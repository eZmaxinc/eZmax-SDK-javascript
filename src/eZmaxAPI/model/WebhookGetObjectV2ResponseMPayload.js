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
import WebhookResponseCompound from './WebhookResponseCompound';

/**
 * The WebhookGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class WebhookGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>WebhookGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/webhook/{pkiWebhookID}
     * @alias module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload
     * @param objWebhook {module:eZmaxAPI/model/WebhookResponseCompound} 
     */
    constructor(objWebhook) { 
        
        WebhookGetObjectV2ResponseMPayload.initialize(this, objWebhook);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objWebhook) { 
        obj['objWebhook'] = objWebhook;
    }

    /**
     * Constructs a <code>WebhookGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetObjectV2ResponseMPayload} The populated <code>WebhookGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objWebhook')) {
                obj['objWebhook'] = WebhookResponseCompound.constructFromObject(data['objWebhook']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objWebhook`
        if (data['objWebhook']) { // data not null
          WebhookResponseCompound.validateJSON(data['objWebhook']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/WebhookResponseCompound}
     */
    getObjWebhook() {
        return this.objWebhook;
    }

    /**
     * @param {module:eZmaxAPI/model/WebhookResponseCompound} objWebhook
     */
    setObjWebhook(objWebhook) {
        this['objWebhook'] = objWebhook;
    }

}

WebhookGetObjectV2ResponseMPayload.RequiredProperties = ["objWebhook"];

/**
 * @member {module:eZmaxAPI/model/WebhookResponseCompound} objWebhook
 */
WebhookGetObjectV2ResponseMPayload.prototype['objWebhook'] = undefined;






export default WebhookGetObjectV2ResponseMPayload;

