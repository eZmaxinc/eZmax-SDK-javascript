/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttemptResponseCompound from './AttemptResponseCompound';
import CommonWebhook from './CommonWebhook';
import EzsignfolderResponse from './EzsignfolderResponse';
import WebhookEzsignFolderCompletedAllOf from './WebhookEzsignFolderCompletedAllOf';
import WebhookResponse from './WebhookResponse';

/**
 * The WebhookEzsignFolderCompleted model module.
 * @module eZmaxAPI/model/WebhookEzsignFolderCompleted
 * @version 1.1.8
 */
class WebhookEzsignFolderCompleted {
    /**
     * Constructs a new <code>WebhookEzsignFolderCompleted</code>.
     * This is the base Webhook object
     * @alias module:eZmaxAPI/model/WebhookEzsignFolderCompleted
     * @implements module:eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf
     * @implements module:eZmaxAPI/model/CommonWebhook
     * @param objEzsignfolder {module:eZmaxAPI/model/EzsignfolderResponse} 
     * @param objWebhook {module:eZmaxAPI/model/WebhookResponse} 
     * @param a_objAttempt {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
     */
    constructor(objEzsignfolder, objWebhook, a_objAttempt) { 
        WebhookEzsignFolderCompletedAllOf.initialize(this, objEzsignfolder);CommonWebhook.initialize(this, objWebhook, a_objAttempt);
        WebhookEzsignFolderCompleted.initialize(this, objEzsignfolder, objWebhook, a_objAttempt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfolder, objWebhook, a_objAttempt) { 
        obj['objEzsignfolder'] = objEzsignfolder;
        obj['objWebhook'] = objWebhook;
        obj['a_objAttempt'] = a_objAttempt;
    }

    /**
     * Constructs a <code>WebhookEzsignFolderCompleted</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookEzsignFolderCompleted} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookEzsignFolderCompleted} The populated <code>WebhookEzsignFolderCompleted</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEzsignFolderCompleted();
            WebhookEzsignFolderCompletedAllOf.constructFromObject(data, obj);
            CommonWebhook.constructFromObject(data, obj);

            if (data.hasOwnProperty('objEzsignfolder')) {
                obj['objEzsignfolder'] = EzsignfolderResponse.constructFromObject(data['objEzsignfolder']);
            }
            if (data.hasOwnProperty('objWebhook')) {
                obj['objWebhook'] = WebhookResponse.constructFromObject(data['objWebhook']);
            }
            if (data.hasOwnProperty('a_objAttempt')) {
                obj['a_objAttempt'] = ApiClient.convertToType(data['a_objAttempt'], [AttemptResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderResponse}
     */
    getObjEzsignfolder() {
        return this.objEzsignfolder;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderResponse} objEzsignfolder
     */
    setObjEzsignfolder(objEzsignfolder) {
        this['objEzsignfolder'] = objEzsignfolder;
    }
/**
     * @return {module:eZmaxAPI/model/WebhookResponse}
     */
    getObjWebhook() {
        return this.objWebhook;
    }

    /**
     * @param {module:eZmaxAPI/model/WebhookResponse} objWebhook
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

/**
 * @member {module:eZmaxAPI/model/EzsignfolderResponse} objEzsignfolder
 */
WebhookEzsignFolderCompleted.prototype['objEzsignfolder'] = undefined;

/**
 * @member {module:eZmaxAPI/model/WebhookResponse} objWebhook
 */
WebhookEzsignFolderCompleted.prototype['objWebhook'] = undefined;

/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} a_objAttempt
 */
WebhookEzsignFolderCompleted.prototype['a_objAttempt'] = undefined;


// Implement WebhookEzsignFolderCompletedAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignfolderResponse} objEzsignfolder
 */
WebhookEzsignFolderCompletedAllOf.prototype['objEzsignfolder'] = undefined;
// Implement CommonWebhook interface:
/**
 * @member {module:eZmaxAPI/model/WebhookResponse} objWebhook
 */
CommonWebhook.prototype['objWebhook'] = undefined;
/**
 * An array containing details of previous attempts that were made to deliver the message. The array is empty if it's the first attempt.
 * @member {Array.<module:eZmaxAPI/model/AttemptResponseCompound>} a_objAttempt
 */
CommonWebhook.prototype['a_objAttempt'] = undefined;




export default WebhookEzsignFolderCompleted;

