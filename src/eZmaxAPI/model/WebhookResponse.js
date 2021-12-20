/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WebhookResponse model module.
 * @module eZmaxAPI/model/WebhookResponse
 * @version 1.1.4
 */
class WebhookResponse {
    /**
     * Constructs a new <code>WebhookResponse</code>.
     * A webhook object
     * @alias module:eZmaxAPI/model/WebhookResponse
     * @param pkiWebhookID {Number} The Webhook ID. This value is visible in the admin interface.
     * @param eWebhookModule {module:eZmaxAPI/model/WebhookResponse.EWebhookModuleEnum} The Module generating the Event.
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param sWebhookUrl {String} The url being called
     * @param sWebhookEmailfailed {String} The email that will receive the webhook in case all attempts fail.
     */
    constructor(pkiWebhookID, eWebhookModule, pksCustomerCode, sWebhookUrl, sWebhookEmailfailed) { 
        
        WebhookResponse.initialize(this, pkiWebhookID, eWebhookModule, pksCustomerCode, sWebhookUrl, sWebhookEmailfailed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiWebhookID, eWebhookModule, pksCustomerCode, sWebhookUrl, sWebhookEmailfailed) { 
        obj['pkiWebhookID'] = pkiWebhookID;
        obj['eWebhookModule'] = eWebhookModule;
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
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
            if (data.hasOwnProperty('eWebhookModule')) {
                obj['eWebhookModule'] = ApiClient.convertToType(data['eWebhookModule'], 'String');
            }
            if (data.hasOwnProperty('eWebhookEzsignevent')) {
                obj['eWebhookEzsignevent'] = ApiClient.convertToType(data['eWebhookEzsignevent'], 'String');
            }
            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('sWebhookUrl')) {
                obj['sWebhookUrl'] = ApiClient.convertToType(data['sWebhookUrl'], 'String');
            }
            if (data.hasOwnProperty('sWebhookEmailfailed')) {
                obj['sWebhookEmailfailed'] = ApiClient.convertToType(data['sWebhookEmailfailed'], 'String');
            }
            if (data.hasOwnProperty('eWebhookManagementevent')) {
                obj['eWebhookManagementevent'] = ApiClient.convertToType(data['eWebhookManagementevent'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Webhook ID. This value is visible in the admin interface.
     * @return {Number}
     */
    getPkiWebhookID() {
        return this.pkiWebhookID;
    }

    /**
     * Sets The Webhook ID. This value is visible in the admin interface.
     * @param {Number} pkiWebhookID The Webhook ID. This value is visible in the admin interface.
     */
    setPkiWebhookID(pkiWebhookID) {
        this['pkiWebhookID'] = pkiWebhookID;
    }
/**
     * Returns The Module generating the Event.
     * @return {module:eZmaxAPI/model/WebhookResponse.EWebhookModuleEnum}
     */
    getEWebhookModule() {
        return this.eWebhookModule;
    }

    /**
     * Sets The Module generating the Event.
     * @param {module:eZmaxAPI/model/WebhookResponse.EWebhookModuleEnum} eWebhookModule The Module generating the Event.
     */
    setEWebhookModule(eWebhookModule) {
        this['eWebhookModule'] = eWebhookModule;
    }
/**
     * Returns This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
     * @return {module:eZmaxAPI/model/WebhookResponse.EWebhookEzsigneventEnum}
     */
    getEWebhookEzsignevent() {
        return this.eWebhookEzsignevent;
    }

    /**
     * Sets This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
     * @param {module:eZmaxAPI/model/WebhookResponse.EWebhookEzsigneventEnum} eWebhookEzsignevent This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
     */
    setEWebhookEzsignevent(eWebhookEzsignevent) {
        this['eWebhookEzsignevent'] = eWebhookEzsignevent;
    }
/**
     * Returns The customer code assigned to your account
     * @return {String}
     */
    getPksCustomerCode() {
        return this.pksCustomerCode;
    }

    /**
     * Sets The customer code assigned to your account
     * @param {String} pksCustomerCode The customer code assigned to your account
     */
    setPksCustomerCode(pksCustomerCode) {
        this['pksCustomerCode'] = pksCustomerCode;
    }
/**
     * Returns The url being called
     * @return {String}
     */
    getSWebhookUrl() {
        return this.sWebhookUrl;
    }

    /**
     * Sets The url being called
     * @param {String} sWebhookUrl The url being called
     */
    setSWebhookUrl(sWebhookUrl) {
        this['sWebhookUrl'] = sWebhookUrl;
    }
/**
     * Returns The email that will receive the webhook in case all attempts fail.
     * @return {String}
     */
    getSWebhookEmailfailed() {
        return this.sWebhookEmailfailed;
    }

    /**
     * Sets The email that will receive the webhook in case all attempts fail.
     * @param {String} sWebhookEmailfailed The email that will receive the webhook in case all attempts fail.
     */
    setSWebhookEmailfailed(sWebhookEmailfailed) {
        this['sWebhookEmailfailed'] = sWebhookEmailfailed;
    }
/**
     * Returns This Management Event. This property will be set only if the Module is \"Management\".
     * @return {module:eZmaxAPI/model/WebhookResponse.EWebhookManagementeventEnum}
     */
    getEWebhookManagementevent() {
        return this.eWebhookManagementevent;
    }

    /**
     * Sets This Management Event. This property will be set only if the Module is \"Management\".
     * @param {module:eZmaxAPI/model/WebhookResponse.EWebhookManagementeventEnum} eWebhookManagementevent This Management Event. This property will be set only if the Module is \"Management\".
     */
    setEWebhookManagementevent(eWebhookManagementevent) {
        this['eWebhookManagementevent'] = eWebhookManagementevent;
    }

}

/**
 * The Webhook ID. This value is visible in the admin interface.
 * @member {Number} pkiWebhookID
 */
WebhookResponse.prototype['pkiWebhookID'] = undefined;

/**
 * The Module generating the Event.
 * @member {module:eZmaxAPI/model/WebhookResponse.EWebhookModuleEnum} eWebhookModule
 */
WebhookResponse.prototype['eWebhookModule'] = undefined;

/**
 * This Ezsign Event. This property will be set only if the Module is \"Ezsign\".
 * @member {module:eZmaxAPI/model/WebhookResponse.EWebhookEzsigneventEnum} eWebhookEzsignevent
 */
WebhookResponse.prototype['eWebhookEzsignevent'] = undefined;

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
WebhookResponse.prototype['pksCustomerCode'] = undefined;

/**
 * The url being called
 * @member {String} sWebhookUrl
 */
WebhookResponse.prototype['sWebhookUrl'] = undefined;

/**
 * The email that will receive the webhook in case all attempts fail.
 * @member {String} sWebhookEmailfailed
 */
WebhookResponse.prototype['sWebhookEmailfailed'] = undefined;

/**
 * This Management Event. This property will be set only if the Module is \"Management\".
 * @member {module:eZmaxAPI/model/WebhookResponse.EWebhookManagementeventEnum} eWebhookManagementevent
 */
WebhookResponse.prototype['eWebhookManagementevent'] = undefined;





/**
 * Allowed values for the <code>eWebhookModule</code> property.
 * @enum {String}
 * @readonly
 */
WebhookResponse['EWebhookModuleEnum'] = {

    /**
     * value: "Ezsign"
     * @const
     */
    "Ezsign": "Ezsign",

    /**
     * value: "Management"
     * @const
     */
    "Management": "Management"
};


/**
 * Allowed values for the <code>eWebhookEzsignevent</code> property.
 * @enum {String}
 * @readonly
 */
WebhookResponse['EWebhookEzsigneventEnum'] = {

    /**
     * value: "DocumentCompleted"
     * @const
     */
    "DocumentCompleted": "DocumentCompleted",

    /**
     * value: "FolderCompleted"
     * @const
     */
    "FolderCompleted": "FolderCompleted"
};


/**
 * Allowed values for the <code>eWebhookManagementevent</code> property.
 * @enum {String}
 * @readonly
 */
WebhookResponse['EWebhookManagementeventEnum'] = {

    /**
     * value: "UserCreated"
     * @const
     */
    "UserCreated": "UserCreated"
};



export default WebhookResponse;

