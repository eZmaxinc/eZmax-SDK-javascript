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
import CommonAudit from './CommonAudit';
import FieldEWebhookEzsignevent from './FieldEWebhookEzsignevent';
import FieldEWebhookManagementevent from './FieldEWebhookManagementevent';
import FieldEWebhookModule from './FieldEWebhookModule';

/**
 * The WebhookResponse model module.
 * @module eZmaxAPI/model/WebhookResponse
 * @version 1.2.0
 */
class WebhookResponse {
    /**
     * Constructs a new <code>WebhookResponse</code>.
     * A webhook object
     * @alias module:eZmaxAPI/model/WebhookResponse
     * @param pkiWebhookID {Number} The unique ID of the Webhook
     * @param sWebhookDescription {String} The description of the Webhook
     * @param eWebhookModule {module:eZmaxAPI/model/FieldEWebhookModule} 
     * @param sWebhookUrl {String} The URL of the Webhook callback
     * @param sWebhookEmailfailed {String} The email that will receive the Webhook in case all attempts fail
     * @param bWebhookIsactive {Boolean} Whether the Webhook is active or not
     * @param bWebhookIssigned {Boolean} Whether the requests will be signed or not
     * @param bWebhookSkipsslvalidation {Boolean} Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookIssigned, bWebhookSkipsslvalidation, objAudit) { 
        
        WebhookResponse.initialize(this, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookIssigned, bWebhookSkipsslvalidation, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookIssigned, bWebhookSkipsslvalidation, objAudit) { 
        obj['pkiWebhookID'] = pkiWebhookID;
        obj['sWebhookDescription'] = sWebhookDescription;
        obj['eWebhookModule'] = eWebhookModule;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
        obj['bWebhookIsactive'] = bWebhookIsactive;
        obj['bWebhookIssigned'] = bWebhookIssigned;
        obj['bWebhookSkipsslvalidation'] = bWebhookSkipsslvalidation;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookResponse();

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
            if (data.hasOwnProperty('sWebhookApikey')) {
                obj['sWebhookApikey'] = ApiClient.convertToType(data['sWebhookApikey'], 'String');
            }
            if (data.hasOwnProperty('sWebhookSecret')) {
                obj['sWebhookSecret'] = ApiClient.convertToType(data['sWebhookSecret'], 'String');
            }
            if (data.hasOwnProperty('bWebhookIsactive')) {
                obj['bWebhookIsactive'] = ApiClient.convertToType(data['bWebhookIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('bWebhookIssigned')) {
                obj['bWebhookIssigned'] = ApiClient.convertToType(data['bWebhookIssigned'], 'Boolean');
            }
            if (data.hasOwnProperty('bWebhookSkipsslvalidation')) {
                obj['bWebhookSkipsslvalidation'] = ApiClient.convertToType(data['bWebhookSkipsslvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sWebhookDescription'] && !(typeof data['sWebhookDescription'] === 'string' || data['sWebhookDescription'] instanceof String)) {
            throw new Error("Expected the field `sWebhookDescription` to be a primitive type in the JSON string but got " + data['sWebhookDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldertypeNameX'] && !(typeof data['sEzsignfoldertypeNameX'] === 'string' || data['sEzsignfoldertypeNameX'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldertypeNameX` to be a primitive type in the JSON string but got " + data['sEzsignfoldertypeNameX']);
        }
        // ensure the json data is a string
        if (data['sWebhookUrl'] && !(typeof data['sWebhookUrl'] === 'string' || data['sWebhookUrl'] instanceof String)) {
            throw new Error("Expected the field `sWebhookUrl` to be a primitive type in the JSON string but got " + data['sWebhookUrl']);
        }
        // ensure the json data is a string
        if (data['sWebhookEmailfailed'] && !(typeof data['sWebhookEmailfailed'] === 'string' || data['sWebhookEmailfailed'] instanceof String)) {
            throw new Error("Expected the field `sWebhookEmailfailed` to be a primitive type in the JSON string but got " + data['sWebhookEmailfailed']);
        }
        // ensure the json data is a string
        if (data['sWebhookApikey'] && !(typeof data['sWebhookApikey'] === 'string' || data['sWebhookApikey'] instanceof String)) {
            throw new Error("Expected the field `sWebhookApikey` to be a primitive type in the JSON string but got " + data['sWebhookApikey']);
        }
        // ensure the json data is a string
        if (data['sWebhookSecret'] && !(typeof data['sWebhookSecret'] === 'string' || data['sWebhookSecret'] instanceof String)) {
            throw new Error("Expected the field `sWebhookSecret` to be a primitive type in the JSON string but got " + data['sWebhookSecret']);
        }
        // validate the optional field `objAudit`
        if (data['objAudit']) { // data not null
          CommonAudit.validateJSON(data['objAudit']);
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
     * Returns The unique ID of the Ezsignfoldertype.
     * minimum: 0
     * maximum: 65535
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
     * Returns The Apikey for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     * @return {String}
     */
    getSWebhookApikey() {
        return this.sWebhookApikey;
    }

    /**
     * Sets The Apikey for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     * @param {String} sWebhookApikey The Apikey for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     */
    setSWebhookApikey(sWebhookApikey) {
        this['sWebhookApikey'] = sWebhookApikey;
    }
/**
     * Returns The Secret for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     * @return {String}
     */
    getSWebhookSecret() {
        return this.sWebhookSecret;
    }

    /**
     * Sets The Secret for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     * @param {String} sWebhookSecret The Secret for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
     */
    setSWebhookSecret(sWebhookSecret) {
        this['sWebhookSecret'] = sWebhookSecret;
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
     * Returns Whether the requests will be signed or not
     * @return {Boolean}
     */
    getBWebhookIssigned() {
        return this.bWebhookIssigned;
    }

    /**
     * Sets Whether the requests will be signed or not
     * @param {Boolean} bWebhookIssigned Whether the requests will be signed or not
     */
    setBWebhookIssigned(bWebhookIssigned) {
        this['bWebhookIssigned'] = bWebhookIssigned;
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
     * @return {module:eZmaxAPI/model/CommonAudit}
     */
    getObjAudit() {
        return this.objAudit;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAudit} objAudit
     */
    setObjAudit(objAudit) {
        this['objAudit'] = objAudit;
    }

}

WebhookResponse.RequiredProperties = ["pkiWebhookID", "sWebhookDescription", "eWebhookModule", "sWebhookUrl", "sWebhookEmailfailed", "bWebhookIsactive", "bWebhookIssigned", "bWebhookSkipsslvalidation", "objAudit"];

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
 * The Apikey for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
 * @member {String} sWebhookApikey
 */
WebhookResponse.prototype['sWebhookApikey'] = undefined;

/**
 * The Secret for the Webhook.  This will be hidden if we are not creating or regenerating the Apikey.
 * @member {String} sWebhookSecret
 */
WebhookResponse.prototype['sWebhookSecret'] = undefined;

/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookResponse.prototype['bWebhookIsactive'] = undefined;

/**
 * Whether the requests will be signed or not
 * @member {Boolean} bWebhookIssigned
 */
WebhookResponse.prototype['bWebhookIssigned'] = undefined;

/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
WebhookResponse.prototype['bWebhookSkipsslvalidation'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
WebhookResponse.prototype['objAudit'] = undefined;






export default WebhookResponse;

