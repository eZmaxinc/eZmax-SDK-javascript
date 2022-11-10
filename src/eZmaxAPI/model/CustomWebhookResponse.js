/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomWebhookResponseAllOf from './CustomWebhookResponseAllOf';
import FieldEWebhookEzsignevent from './FieldEWebhookEzsignevent';
import FieldEWebhookManagementevent from './FieldEWebhookManagementevent';
import FieldEWebhookModule from './FieldEWebhookModule';
import WebhookResponse from './WebhookResponse';

/**
 * The CustomWebhookResponse model module.
 * @module eZmaxAPI/model/CustomWebhookResponse
 * @version 1.1.16
 */
class CustomWebhookResponse {
    /**
     * Constructs a new <code>CustomWebhookResponse</code>.
     * A custom Webhook object
     * @alias module:eZmaxAPI/model/CustomWebhookResponse
     * @implements module:eZmaxAPI/model/CustomWebhookResponseAllOf
     * @implements module:eZmaxAPI/model/WebhookResponse
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param bWebhookTest {Boolean} Wheter the webhook received is a manual test or a real event
     * @param pkiWebhookID {Number} The unique ID of the Webhook
     * @param sWebhookDescription {String} The description of the Webhook
     * @param eWebhookModule {module:eZmaxAPI/model/FieldEWebhookModule} 
     * @param sWebhookUrl {String} The URL of the Webhook callback
     * @param sWebhookEmailfailed {String} The email that will receive the Webhook in case all attempts fail
     * @param bWebhookSkipsslvalidation {Boolean} Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
     */
    constructor(pksCustomerCode, bWebhookTest, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation) { 
        CustomWebhookResponseAllOf.initialize(this, pksCustomerCode, bWebhookTest);WebhookResponse.initialize(this, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation);
        CustomWebhookResponse.initialize(this, pksCustomerCode, bWebhookTest, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pksCustomerCode, bWebhookTest, pkiWebhookID, sWebhookDescription, eWebhookModule, sWebhookUrl, sWebhookEmailfailed, bWebhookSkipsslvalidation) { 
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['bWebhookTest'] = bWebhookTest;
        obj['pkiWebhookID'] = pkiWebhookID;
        obj['sWebhookDescription'] = sWebhookDescription;
        obj['eWebhookModule'] = eWebhookModule;
        obj['sWebhookUrl'] = sWebhookUrl;
        obj['sWebhookEmailfailed'] = sWebhookEmailfailed;
        obj['bWebhookSkipsslvalidation'] = bWebhookSkipsslvalidation;
    }

    /**
     * Constructs a <code>CustomWebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWebhookResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWebhookResponse} The populated <code>CustomWebhookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWebhookResponse();
            CustomWebhookResponseAllOf.constructFromObject(data, obj);
            WebhookResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('bWebhookTest')) {
                obj['bWebhookTest'] = ApiClient.convertToType(data['bWebhookTest'], 'Boolean');
            }
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
        }
        return obj;
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
     * Returns Wheter the webhook received is a manual test or a real event
     * @return {Boolean}
     */
    getBWebhookTest() {
        return this.bWebhookTest;
    }

    /**
     * Sets Wheter the webhook received is a manual test or a real event
     * @param {Boolean} bWebhookTest Wheter the webhook received is a manual test or a real event
     */
    setBWebhookTest(bWebhookTest) {
        this['bWebhookTest'] = bWebhookTest;
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

}

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
CustomWebhookResponse.prototype['pksCustomerCode'] = undefined;

/**
 * Wheter the webhook received is a manual test or a real event
 * @member {Boolean} bWebhookTest
 */
CustomWebhookResponse.prototype['bWebhookTest'] = undefined;

/**
 * The unique ID of the Webhook
 * @member {Number} pkiWebhookID
 */
CustomWebhookResponse.prototype['pkiWebhookID'] = undefined;

/**
 * The description of the Webhook
 * @member {String} sWebhookDescription
 */
CustomWebhookResponse.prototype['sWebhookDescription'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
CustomWebhookResponse.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
CustomWebhookResponse.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookModule} eWebhookModule
 */
CustomWebhookResponse.prototype['eWebhookModule'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookEzsignevent} eWebhookEzsignevent
 */
CustomWebhookResponse.prototype['eWebhookEzsignevent'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEWebhookManagementevent} eWebhookManagementevent
 */
CustomWebhookResponse.prototype['eWebhookManagementevent'] = undefined;

/**
 * The URL of the Webhook callback
 * @member {String} sWebhookUrl
 */
CustomWebhookResponse.prototype['sWebhookUrl'] = undefined;

/**
 * The email that will receive the Webhook in case all attempts fail
 * @member {String} sWebhookEmailfailed
 */
CustomWebhookResponse.prototype['sWebhookEmailfailed'] = undefined;

/**
 * Whether the Webhook is active or not
 * @member {Boolean} bWebhookIsactive
 */
CustomWebhookResponse.prototype['bWebhookIsactive'] = undefined;

/**
 * Wheter the server's SSL certificate should be validated or not. Not recommended to skip for production use
 * @member {Boolean} bWebhookSkipsslvalidation
 */
CustomWebhookResponse.prototype['bWebhookSkipsslvalidation'] = undefined;


// Implement CustomWebhookResponseAllOf interface:
/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
CustomWebhookResponseAllOf.prototype['pksCustomerCode'] = undefined;
/**
 * Wheter the webhook received is a manual test or a real event
 * @member {Boolean} bWebhookTest
 */
CustomWebhookResponseAllOf.prototype['bWebhookTest'] = undefined;
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




export default CustomWebhookResponse;

