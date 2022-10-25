/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WebhookCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/WebhookCreateObjectV1ResponseMPayload
 * @version 1.1.11
 */
class WebhookCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>WebhookCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/webhook
     * @alias module:eZmaxAPI/model/WebhookCreateObjectV1ResponseMPayload
     * @param a_pkiWebhookID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiWebhookID) { 
        
        WebhookCreateObjectV1ResponseMPayload.initialize(this, a_pkiWebhookID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiWebhookID) { 
        obj['a_pkiWebhookID'] = a_pkiWebhookID;
    }

    /**
     * Constructs a <code>WebhookCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookCreateObjectV1ResponseMPayload} The populated <code>WebhookCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiWebhookID')) {
                obj['a_pkiWebhookID'] = ApiClient.convertToType(data['a_pkiWebhookID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiWebhookID() {
        return this.a_pkiWebhookID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiWebhookID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiWebhookID(a_pkiWebhookID) {
        this['a_pkiWebhookID'] = a_pkiWebhookID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiWebhookID
 */
WebhookCreateObjectV1ResponseMPayload.prototype['a_pkiWebhookID'] = undefined;






export default WebhookCreateObjectV1ResponseMPayload;

