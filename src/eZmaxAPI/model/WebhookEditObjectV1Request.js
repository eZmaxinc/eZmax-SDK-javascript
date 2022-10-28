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
import WebhookRequestCompound from './WebhookRequestCompound';

/**
 * The WebhookEditObjectV1Request model module.
 * @module eZmaxAPI/model/WebhookEditObjectV1Request
 * @version 1.1.13
 */
class WebhookEditObjectV1Request {
    /**
     * Constructs a new <code>WebhookEditObjectV1Request</code>.
     * Request for PUT /1/object/webhook/{pkiWebhookID}
     * @alias module:eZmaxAPI/model/WebhookEditObjectV1Request
     * @param objWebhook {module:eZmaxAPI/model/WebhookRequestCompound} 
     */
    constructor(objWebhook) { 
        
        WebhookEditObjectV1Request.initialize(this, objWebhook);
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
     * Constructs a <code>WebhookEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookEditObjectV1Request} The populated <code>WebhookEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEditObjectV1Request();

            if (data.hasOwnProperty('objWebhook')) {
                obj['objWebhook'] = WebhookRequestCompound.constructFromObject(data['objWebhook']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/WebhookRequestCompound}
     */
    getObjWebhook() {
        return this.objWebhook;
    }

    /**
     * @param {module:eZmaxAPI/model/WebhookRequestCompound} objWebhook
     */
    setObjWebhook(objWebhook) {
        this['objWebhook'] = objWebhook;
    }

}

/**
 * @member {module:eZmaxAPI/model/WebhookRequestCompound} objWebhook
 */
WebhookEditObjectV1Request.prototype['objWebhook'] = undefined;






export default WebhookEditObjectV1Request;

