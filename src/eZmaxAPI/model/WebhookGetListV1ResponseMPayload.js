/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';
import WebhookGetListV1ResponseMPayloadAllOf from './WebhookGetListV1ResponseMPayloadAllOf';
import WebhookListElement from './WebhookListElement';

/**
 * The WebhookGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/WebhookGetListV1ResponseMPayload
 * @version 1.1.15
 */
class WebhookGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>WebhookGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/webhook/getList
     * @alias module:eZmaxAPI/model/WebhookGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/WebhookGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objWebhook {Array.<module:eZmaxAPI/model/WebhookListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objWebhook, iRowReturned, iRowFiltered) { 
        WebhookGetListV1ResponseMPayloadAllOf.initialize(this, a_objWebhook);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        WebhookGetListV1ResponseMPayload.initialize(this, a_objWebhook, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objWebhook, iRowReturned, iRowFiltered) { 
        obj['a_objWebhook'] = a_objWebhook;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>WebhookGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookGetListV1ResponseMPayload} The populated <code>WebhookGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookGetListV1ResponseMPayload();
            WebhookGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objWebhook')) {
                obj['a_objWebhook'] = ApiClient.convertToType(data['a_objWebhook'], [WebhookListElement]);
            }
            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/WebhookListElement>}
     */
    getAObjWebhook() {
        return this.a_objWebhook;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/WebhookListElement>} a_objWebhook
     */
    setAObjWebhook(a_objWebhook) {
        this['a_objWebhook'] = a_objWebhook;
    }
/**
     * Returns The number of rows returned
     * @return {Number}
     */
    getIRowReturned() {
        return this.iRowReturned;
    }

    /**
     * Sets The number of rows returned
     * @param {Number} iRowReturned The number of rows returned
     */
    setIRowReturned(iRowReturned) {
        this['iRowReturned'] = iRowReturned;
    }
/**
     * Returns The number of rows matching your filters (if any) or the total number of rows
     * @return {Number}
     */
    getIRowFiltered() {
        return this.iRowFiltered;
    }

    /**
     * Sets The number of rows matching your filters (if any) or the total number of rows
     * @param {Number} iRowFiltered The number of rows matching your filters (if any) or the total number of rows
     */
    setIRowFiltered(iRowFiltered) {
        this['iRowFiltered'] = iRowFiltered;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/WebhookListElement>} a_objWebhook
 */
WebhookGetListV1ResponseMPayload.prototype['a_objWebhook'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
WebhookGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
WebhookGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement WebhookGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/WebhookListElement>} a_objWebhook
 */
WebhookGetListV1ResponseMPayloadAllOf.prototype['a_objWebhook'] = undefined;
// Implement CommonGetListV1ResponseMPayload interface:
/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
CommonGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;
/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
CommonGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;




export default WebhookGetListV1ResponseMPayload;

