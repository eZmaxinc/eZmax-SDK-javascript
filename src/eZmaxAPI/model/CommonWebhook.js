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
import AttemptResponseCompound from './AttemptResponseCompound';
import CustomWebhookResponse from './CustomWebhookResponse';

/**
 * The CommonWebhook model module.
 * @module eZmaxAPI/model/CommonWebhook
 * @version 1.1.17
 */
class CommonWebhook {
    /**
     * Constructs a new <code>CommonWebhook</code>.
     * This is the base Webhook object
     * @alias module:eZmaxAPI/model/CommonWebhook
     * @param objWebhook {module:eZmaxAPI/model/CustomWebhookResponse} 
     * @param a_objAttempt {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    constructor(objWebhook, a_objAttempt) { 
        
        CommonWebhook.initialize(this, objWebhook, a_objAttempt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objWebhook, a_objAttempt) { 
        obj['objWebhook'] = objWebhook;
        obj['a_objAttempt'] = a_objAttempt;
    }

    /**
     * Constructs a <code>CommonWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonWebhook} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonWebhook} The populated <code>CommonWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonWebhook();

            if (data.hasOwnProperty('objWebhook')) {
                obj['objWebhook'] = CustomWebhookResponse.constructFromObject(data['objWebhook']);
            }
            if (data.hasOwnProperty('a_objAttempt')) {
                obj['a_objAttempt'] = ApiClient.convertToType(data['a_objAttempt'], [AttemptResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonWebhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonWebhook.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objWebhook`
        if (data['objWebhook']) { // data not null
          CustomWebhookResponse.validateJSON(data['objWebhook']);
        }
        if (data['a_objAttempt']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objAttempt'])) {
                throw new Error("Expected the field `a_objAttempt` to be an array in the JSON data but got " + data['a_objAttempt']);
            }
            // validate the optional field `a_objAttempt` (array)
            for (const item of data['a_objAttempt']) {
                AttemptResponseCompound.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CustomWebhookResponse}
     */
    getObjWebhook() {
        return this.objWebhook;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomWebhookResponse} objWebhook
     */
    setObjWebhook(objWebhook) {
        this['objWebhook'] = objWebhook;
    }
/**
     * Returns An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     * @return {Array.<module:eZmaxAPI/model/AttemptResponseCompound>}
     */
    getAObjAttempt() {
        return this.a_objAttempt;
    }

    /**
     * Sets An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     * @param {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} a_objAttempt An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    setAObjAttempt(a_objAttempt) {
        this['a_objAttempt'] = a_objAttempt;
    }

}

CommonWebhook.RequiredProperties = ["objWebhook", "a_objAttempt"];

/**
 * @member {module:eZmaxAPI/model/CustomWebhookResponse} objWebhook
 */
CommonWebhook.prototype['objWebhook'] = undefined;

/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} a_objAttempt
 */
CommonWebhook.prototype['a_objAttempt'] = undefined;






export default CommonWebhook;

