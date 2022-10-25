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
import FieldEWebhookEzsignevent from './FieldEWebhookEzsignevent';
import FieldEWebhookManagementevent from './FieldEWebhookManagementevent';
import FieldEWebhookModule from './FieldEWebhookModule';
import WebhookRequest from './WebhookRequest';

/**
 * The WebhookRequestCompound model module.
 * @module eZmaxAPI/model/WebhookRequestCompound
 * @version 1.1.11
 */
class WebhookRequestCompound {
    /**
     * Constructs a new <code>WebhookRequestCompound</code>.
     * A Webhook Object and children
     * @alias module:eZmaxAPI/model/WebhookRequestCompound
     * @implements module:eZmaxAPI/model/WebhookRequest
     * @param sWebhookDescription {String} The description of the Webhook
     * @param eWebhookModule {module:eZmaxAPI/model/FieldEWebhookModule} 
     * @param sWebhookUrl {String} The URL of the Webhook callback
     * @param sWebhookEmailfailed {String} The email that will receive the Webhook in case all attempts fail
     * @param bWebhookIsactive {Boolean} Whether the Webhook is active or not
     * @param bWebhookSkipsslvalidation {Boolean} Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     */
    constructor(sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookSkipsslvalidation) { 
        WebhookRequest.initialize(this, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookSkipsslvalidation);
        WebhookRequestCompound.initialize(this, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookSkipsslvalidation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookIsactive, bWebhookSkipsslvalidation) { 
        obj['sWebhookDescription'] = sWebhookDescription;
        obj['eWebhookModule'] = eWebhookModule;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
        obj['bWebhookIsactive'] = bWebhookIsactive;
        obj['bWebhookSkipsslvalidation'] = bWebhookSkipsslvalidation;
    }

    /**
     * Constructs a <code>WebhookRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookRequestCompound} The populated <code>WebhookRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookRequestCompound();
            WebhookRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiWebhookID')) {
                obj['pkiWebhookID'] = ApiClient.convertToType(data['pkiWebhookID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('sWebhookDescription')) {
                obj['sWebhookDescription'] = ApiClient.convertToType(data['sWebhookDescription'], 'String');
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

}

/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
WebhookRequestCompound.prototype['pkiWebhookID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
WebhookRequestCompound.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
WebhookRequestCompound.prototype['sWebhookDescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
WebhookRequestCompound.prototype['eWebhookModule'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
WebhookRequestCompound.prototype['eWebhookEzsignevent'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
WebhookRequestCompound.prototype['eWebhookManagementevent'] = undefined;

/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
WebhookRequestCompound.prototype['sWebhookUrl'] = undefined;

/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
WebhookRequestCompound.prototype['sWebhookEmailfailed'] = undefined;

/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookRequestCompound.prototype['bWebhookIsactive'] = undefined;

/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
WebhookRequestCompound.prototype['bWebhookSkipsslvalidation'] = undefined;


// Implement WebhookRequest interface:
/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
WebhookRequest.prototype['pkiWebhookID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
WebhookRequest.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
WebhookRequest.prototype['sWebhookDescription'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
WebhookRequest.prototype['eWebhookModule'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
WebhookRequest.prototype['eWebhookEzsignevent'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
WebhookRequest.prototype['eWebhookManagementevent'] = undefined;
/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
WebhookRequest.prototype['sWebhookUrl'] = undefined;
/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
WebhookRequest.prototype['sWebhookEmailfailed'] = undefined;
/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
WebhookRequest.prototype['bWebhookIsactive'] = undefined;
/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
WebhookRequest.prototype['bWebhookSkipsslvalidation'] = undefined;




export default WebhookRequestCompound;

