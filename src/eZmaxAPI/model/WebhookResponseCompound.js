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
import FieldEWebhookEzsignevent from './FieldEWebhookEzsignevent';
import FieldEWebhookManagementevent from './FieldEWebhookManagementevent';
import FieldEWebhookModule from './FieldEWebhookModule';
import WebhookResponse from './WebhookResponse';
import WebhookResponseCompoundAllOf from './WebhookResponseCompoundAllOf';

/**
 * The WebhookResponseCompound model module.
 * @module eZmaxAPI/model/WebhookResponseCompound
 * @version 1.1.15
 */
class WebhookResponseCompound {
    /**
     * Constructs a new <code>WebhookResponseCompound</code>.
     * A Webhook Object
     * @alias module:eZmaxAPI/model/WebhookResponseCompound
     * @implements module:eZmaxAPI/model/WebhookResponse
     * @implements module:eZmaxAPI/model/WebhookResponseCompoundAllOf
     * @param pkiWebhookID {Number} The unique ID of the Webhook
     * @param sWebhookDescription {String} The description of the Webhook
     * @param eWebhookModule {module:eZmaxAPI/model/FieldEWebhookModule} 
     * @param sWebhookUrl {String} The URL of the Webhook callback
     * @param sWebhookEmailfailed {String} The email that will receive the Webhook in case all attempts fail
     * @param bWebhookSkipsslvalidation {Boolean} Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     * @param sWebhookEvent {String} The concatenated string to describe the Webhook event
     */
    constructor(pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation, sWebhookEvent) { 
        WebhookResponse.initialize(this, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation);WebhookResponseCompoundAllOf.initialize(this);
        WebhookResponseCompound.initialize(this, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation, sWebhookEvent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation, sWebhookEvent) { 
        obj['pkiWebhookID'] = pkiWebhookID;
        obj['sWebhookDescription'] = sWebhookDescription;
        obj['eWebhookModule'] = eWebhookModule;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
        obj['bWebhookSkipsslvalidation'] = bWebhookSkipsslvalidation;
        obj['sWebhookEvent'] = sWebhookEvent;
    }

    /**
     * Constructs a <code>WebhookResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookResponseCompound} The populated <code>WebhookResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookResponseCompound();
            WebhookResponse.constructFromObject(data, obj);
            WebhookResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiWebhookID')) {
                obj['pkiWebhookID'] = ApiClient.convertToType(data['pkiWebhookID'], 'Number');
            }
            if (data.hasOwnProperty('sWebhookDescription')) {
                obj['sWebhookDescription'] = ApiClient.convertToType(data['sWebhookDescription'], 'String');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
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
            if (data.hasOwnProperty('sWebhookUrl')) {
                obj['sWebhookUrl'] = ApiClient.convertToType(data['sWebhookUrl'], 'String');
            }
            if (data.hasOwnProperty('sWebhookEmailfailed')) {
                obj['sWebhookEmailfailed'] = ApiClient.convertToType(data['sWebhookEmailfailed'], 'String');
            }
            if (data.hasOwnProperty('bWebhookIsactive')) {
                obj['bWebhookIsactive'] = ApiClient.convertToType(data['bWebhookIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('bWebhookSkipsslvalidation')) {
                obj['bWebhookSkipsslvalidation'] = ApiClient.convertToType(data['bWebhookSkipsslvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('sWebhookEvent')) {
                obj['sWebhookEvent'] = ApiClient.convertToType(data['sWebhookEvent'], 'String');
            }
        }
        return obj;
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
     * Returns The unique ID of the Ezsignfoldertype.
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldertypeID() {
        return this.fkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.
     * @param {Number} fkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.
     */
    setFkiEzsignfoldertypeID(fkiEzsignfoldertypeID) {
        this['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
    }
/**
     * Returns The name of the Ezsignfoldertype in the language of the requester
     * @return {String}
     */
    getSEzsignfoldertypeNameX() {
        return this.sEzsignfoldertypeNameX;
    }

    /**
     * Sets The name of the Ezsignfoldertype in the language of the requester
     * @param {String} sEzsignfoldertypeNameX The name of the Ezsignfoldertype in the language of the requester
     */
    setSEzsignfoldertypeNameX(sEzsignfoldertypeNameX) {
        this['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
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
/**
     * Returns Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     * @return {Boolean}
     */
    getBWebhookSkipsslvalidation() {
        return this.bWebhookSkipsslvalidation;
    }

    /**
     * Sets Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     * @param {Boolean} bWebhookSkipsslvalidation Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     */
    setBWebhookSkipsslvalidation(bWebhookSkipsslvalidation) {
        this['bWebhookSkipsslvalidation'] = bWebhookSkipsslvalidation;
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

}

/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
WebhookResponseCompound.prototype['pkiWebhookID'] = undefined;

/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
WebhookResponseCompound.prototype['sWebhookDescription'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
WebhookResponseCompound.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
WebhookResponseCompound.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
WebhookResponseCompound.prototype['eWebhookModule'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
WebhookResponseCompound.prototype['eWebhookEzsignevent'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
WebhookResponseCompound.prototype['eWebhookManagementevent'] = undefined;

/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
WebhookResponseCompound.prototype['sWebhookUrl'] = undefined;

/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
WebhookResponseCompound.prototype['sWebhookEmailfailed'] = undefined;

/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookResponseCompound.prototype['bWebhookIsactive'] = undefined;

/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
WebhookResponseCompound.prototype['bWebhookSkipsslvalidation'] = undefined;

/**
 * The concatenated string to describe the Webhook event
 * @member {String} sWebhookEvent
 */
WebhookResponseCompound.prototype['sWebhookEvent'] = undefined;


// Implement WebhookResponse interface:
/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
WebhookResponse.prototype['pkiWebhookID'] = undefined;
/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
WebhookResponse.prototype['sWebhookDescription'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
WebhookResponse.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
WebhookResponse.prototype['sEzsignfoldertypeNameX'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
WebhookResponse.prototype['eWebhookModule'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
WebhookResponse.prototype['eWebhookEzsignevent'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
WebhookResponse.prototype['eWebhookManagementevent'] = undefined;
/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
WebhookResponse.prototype['sWebhookUrl'] = undefined;
/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
WebhookResponse.prototype['sWebhookEmailfailed'] = undefined;
/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookResponse.prototype['bWebhookIsactive'] = undefined;
/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
WebhookResponse.prototype['bWebhookSkipsslvalidation'] = undefined;
// Implement WebhookResponseCompoundAllOf interface:
/**
 * The concatenated string to describe the Webhook event
 * @member {String} sWebhookEvent
 */
WebhookResponseCompoundAllOf.prototype['sWebhookEvent'] = undefined;




export default WebhookResponseCompound;

