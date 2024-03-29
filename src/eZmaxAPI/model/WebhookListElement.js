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
import FieldEWebhookEzsignevent from './FieldEWebhookEzsignevent';
import FieldEWebhookManagementevent from './FieldEWebhookManagementevent';
import FieldEWebhookModule from './FieldEWebhookModule';

/**
 * The WebhookListElement model module.
 * @module eZmaxAPI/model/WebhookListElement
 * @version 1.1.18
 */
class WebhookListElement {
    /**
     * Constructs a new <code>WebhookListElement</code>.
     * A Webhook List Element
     * @alias module:eZmaxAPI/model/WebhookListElement
     * @param pkiWebhookID {Number} The unique ID of the Webhook
     * @param sWebhookDescription {String} The description of the Webhook
     * @param sWebhookUrl {String} The URL of the Webhook callback
     * @param sWebhookEvent {String} The concatenated string to describe the Webhook event
     * @param sWebhookEmailfailed {String} The email that will receive the Webhook in case all attempts fail
     * @param eWebhookModule {module:eZmaxAPI/model/FieldEWebhookModule} 
     * @param bWebhookIsactive {Boolean} Whether the Webhook is active or not
     */
    constructor(pkiWebhookID, sWebhookDescription, sWebhookUrl, sWebhookEvent, sWebhookEmailfailed, eWebhookModule, bWebhookIsactive) { 
        
        WebhookListElement.initialize(this, pkiWebhookID, sWebhookDescription, sWebhookUrl, sWebhookEvent, sWebhookEmailfailed, eWebhookModule, bWebhookIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiWebhookID, sWebhookDescription, sWebhookUrl, sWebhookEvent, sWebhookEmailfailed, eWebhookModule, bWebhookIsactive) { 
        obj['pkiWebhookID'] = pkiWebhookID;
        obj['sWebhookDescription'] = sWebhookDescription;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEvent'] = sWebhookEvent;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
        obj['eWebhookModule'] = eWebhookModule;
        obj['bWebhookIsactive'] = bWebhookIsactive;
    }

    /**
     * Constructs a <code>WebhookListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookListElement} The populated <code>WebhookListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookListElement();

            if (data.hasOwnProperty('pkiWebhookID')) {
                obj['pkiWebhookID'] = ApiClient.convertToType(data['pkiWebhookID'], 'Number');
            }
            if (data.hasOwnProperty('sWebhookDescription')) {
                obj['sWebhookDescription'] = ApiClient.convertToType(data['sWebhookDescription'], 'String');
            }
            if (data.hasOwnProperty('sWebhookUrl')) {
                obj['sWebhookUrl'] = ApiClient.convertToType(data['sWebhookUrl'], 'String');
            }
            if (data.hasOwnProperty('sWebhookEvent')) {
                obj['sWebhookEvent'] = ApiClient.convertToType(data['sWebhookEvent'], 'String');
            }
            if (data.hasOwnProperty('sWebhookEmailfailed')) {
                obj['sWebhookEmailfailed'] = ApiClient.convertToType(data['sWebhookEmailfailed'], 'String');
            }
            if (data.hasOwnProperty('eWebhookModule')) {
                obj['eWebhookModule'] = FieldEWebhookModule.constructFromObject(data['eWebhookModule']);
            }
            if (data.hasOwnProperty('eWebhookEzsignevent')) {
                obj['eWebhookEzsignevent'] = FieldEWebhookEzsignevent.constructFromObject(data['eWebhookEzsignevent']);
            }
            if (data.hasOwnProperty('eWebhookManagementevent')) {
                obj['eWebhookManagementevent'] = FieldEWebhookManagementevent.constructFromObject(data['eWebhookManagementevent']);
            }
            if (data.hasOwnProperty('bWebhookIsactive')) {
                obj['bWebhookIsactive'] = ApiClient.convertToType(data['bWebhookIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookListElement.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sWebhookDescription'] && !(typeof data['sWebhookDescription'] === 'string' || data['sWebhookDescription'] instanceof String)) {
            throw new Error("Expected the field `sWebhookDescription` to be a primitive type in the JSON string but got " + data['sWebhookDescription']);
        }
        // ensure the json data is a string
        if (data['sWebhookUrl'] && !(typeof data['sWebhookUrl'] === 'string' || data['sWebhookUrl'] instanceof String)) {
            throw new Error("Expected the field `sWebhookUrl` to be a primitive type in the JSON string but got " + data['sWebhookUrl']);
        }
        // ensure the json data is a string
        if (data['sWebhookEvent'] && !(typeof data['sWebhookEvent'] === 'string' || data['sWebhookEvent'] instanceof String)) {
            throw new Error("Expected the field `sWebhookEvent` to be a primitive type in the JSON string but got " + data['sWebhookEvent']);
        }
        // ensure the json data is a string
        if (data['sWebhookEmailfailed'] && !(typeof data['sWebhookEmailfailed'] === 'string' || data['sWebhookEmailfailed'] instanceof String)) {
            throw new Error("Expected the field `sWebhookEmailfailed` to be a primitive type in the JSON string but got " + data['sWebhookEmailfailed']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Webhook
     * @return {Number}
     */
    getPkiWebhookID() {
        return this.pkiWebhookID;
    }

    /**
     * Sets The unique ID of the Webhook
     * @param {Number} pkiWebhookID The unique ID of the Webhook
     */
    setPkiWebhookID(pkiWebhookID) {
        this['pkiWebhookID'] = pkiWebhookID;
    }
/**
     * Returns The description of the Webhook
     * @return {String}
     */
    getSWebhookDescription() {
        return this.sWebhookDescription;
    }

    /**
     * Sets The description of the Webhook
     * @param {String} sWebhookDescription The description of the Webhook
     */
    setSWebhookDescription(sWebhookDescription) {
        this['sWebhookDescription'] = sWebhookDescription;
    }
/**
     * Returns The URL of the Webhook callback
     * @return {String}
     */
    getSWebhookUrl() {
        return this.sWebhookUrl;
    }

    /**
     * Sets The URL of the Webhook callback
     * @param {String} sWebhookUrl The URL of the Webhook callback
     */
    setSWebhookUrl(sWebhookUrl) {
        this['sWebhookUrl'] = sWebhookUrl;
    }
/**
     * Returns The concatenated string to describe the Webhook event
     * @return {String}
     */
    getSWebhookEvent() {
        return this.sWebhookEvent;
    }

    /**
     * Sets The concatenated string to describe the Webhook event
     * @param {String} sWebhookEvent The concatenated string to describe the Webhook event
     */
    setSWebhookEvent(sWebhookEvent) {
        this['sWebhookEvent'] = sWebhookEvent;
    }
/**
     * Returns The email that will receive the Webhook in case all attempts fail
     * @return {String}
     */
    getSWebhookEmailfailed() {
        return this.sWebhookEmailfailed;
    }

    /**
     * Sets The email that will receive the Webhook in case all attempts fail
     * @param {String} sWebhookEmailfailed The email that will receive the Webhook in case all attempts fail
     */
    setSWebhookEmailfailed(sWebhookEmailfailed) {
        this['sWebhookEmailfailed'] = sWebhookEmailfailed;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEWebhookModule}
     */
    getEWebhookModule() {
        return this.eWebhookModule;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
     */
    setEWebhookModule(eWebhookModule) {
        this['eWebhookModule'] = eWebhookModule;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEWebhookEzsignevent}
     */
    getEWebhookEzsignevent() {
        return this.eWebhookEzsignevent;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
     */
    setEWebhookEzsignevent(eWebhookEzsignevent) {
        this['eWebhookEzsignevent'] = eWebhookEzsignevent;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEWebhookManagementevent}
     */
    getEWebhookManagementevent() {
        return this.eWebhookManagementevent;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
     */
    setEWebhookManagementevent(eWebhookManagementevent) {
        this['eWebhookManagementevent'] = eWebhookManagementevent;
    }
/**
     * Returns Whether the Webhook is active or not
     * @return {Boolean}
     */
    getBWebhookIsactive() {
        return this.bWebhookIsactive;
    }

    /**
     * Sets Whether the Webhook is active or not
     * @param {Boolean} bWebhookIsactive Whether the Webhook is active or not
     */
    setBWebhookIsactive(bWebhookIsactive) {
        this['bWebhookIsactive'] = bWebhookIsactive;
    }

}

WebhookListElement.RequiredProperties = ["pkiWebhookID", "sWebhookDescription", "sWebhookUrl", "sWebhookEvent", "sWebhookEmailfailed", "eWebhookModule", "bWebhookIsactive"];

/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
WebhookListElement.prototype['pkiWebhookID'] = undefined;

/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
WebhookListElement.prototype['sWebhookDescription'] = undefined;

/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
WebhookListElement.prototype['sWebhookUrl'] = undefined;

/**
 * The concatenated string to describe the Webhook event
 * @member {String} sWebhookEvent
 */
WebhookListElement.prototype['sWebhookEvent'] = undefined;

/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
WebhookListElement.prototype['sWebhookEmailfailed'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
WebhookListElement.prototype['eWebhookModule'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
WebhookListElement.prototype['eWebhookEzsignevent'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
WebhookListElement.prototype['eWebhookManagementevent'] = undefined;

/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookListElement.prototype['bWebhookIsactive'] = undefined;






export default WebhookListElement;

