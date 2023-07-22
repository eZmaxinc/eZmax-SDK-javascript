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
import CommonAudit from './CommonAudit';
import ComputedECommunicationDirection from './ComputedECommunicationDirection';
import DescriptionstaticResponse from './DescriptionstaticResponse';
import EmailstaticResponse from './EmailstaticResponse';
import FieldECommunicationImportance from './FieldECommunicationImportance';
import FieldECommunicationType from './FieldECommunicationType';
import PhonestaticResponse from './PhonestaticResponse';

/**
 * The CommunicationResponse model module.
 * @module eZmaxAPI/model/CommunicationResponse
 * @version 1.1.18
 */
class CommunicationResponse {
    /**
     * Constructs a new <code>CommunicationResponse</code>.
     * A Communication Object
     * @alias module:eZmaxAPI/model/CommunicationResponse
     * @param pkiCommunicationID {Number} The unique ID of the Communication.
     * @param eCommunicationImportance {module:eZmaxAPI/model/FieldECommunicationImportance} 
     * @param eCommunicationType {module:eZmaxAPI/model/FieldECommunicationType} 
     * @param sCommunicationSubject {String} The subject of the Communication
     * @param eCommunicationDirection {module:eZmaxAPI/model/ComputedECommunicationDirection} 
     * @param iCommunicationrecipientCount {Number} The count of Communicationrecipient
     * @param bCommunicationPrivate {Boolean} Whether the Communication is private or not
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiCommunicationID, eCommunicationImportance, eCommunicationType, sCommunicationSubject, eCommunicationDirection, iCommunicationrecipientCount, bCommunicationPrivate, objAudit) { 
        
        CommunicationResponse.initialize(this, pkiCommunicationID, eCommunicationImportance, eCommunicationType, sCommunicationSubject, eCommunicationDirection, iCommunicationrecipientCount, bCommunicationPrivate, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationID, eCommunicationImportance, eCommunicationType, sCommunicationSubject, eCommunicationDirection, iCommunicationrecipientCount, bCommunicationPrivate, objAudit) { 
        obj['pkiCommunicationID'] = pkiCommunicationID;
        obj['eCommunicationImportance'] = eCommunicationImportance;
        obj['eCommunicationType'] = eCommunicationType;
        obj['sCommunicationSubject'] = sCommunicationSubject;
        obj['eCommunicationDirection'] = eCommunicationDirection;
        obj['iCommunicationrecipientCount'] = iCommunicationrecipientCount;
        obj['bCommunicationPrivate'] = bCommunicationPrivate;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>CommunicationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationResponse} The populated <code>CommunicationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationResponse();

            if (data.hasOwnProperty('pkiCommunicationID')) {
                obj['pkiCommunicationID'] = ApiClient.convertToType(data['pkiCommunicationID'], 'Number');
            }
            if (data.hasOwnProperty('eCommunicationImportance')) {
                obj['eCommunicationImportance'] = FieldECommunicationImportance.constructFromObject(data['eCommunicationImportance']);
            }
            if (data.hasOwnProperty('eCommunicationType')) {
                obj['eCommunicationType'] = FieldECommunicationType.constructFromObject(data['eCommunicationType']);
            }
            if (data.hasOwnProperty('sCommunicationSubject')) {
                obj['sCommunicationSubject'] = ApiClient.convertToType(data['sCommunicationSubject'], 'String');
            }
            if (data.hasOwnProperty('sCommunicationBodyurl')) {
                obj['sCommunicationBodyurl'] = ApiClient.convertToType(data['sCommunicationBodyurl'], 'String');
            }
            if (data.hasOwnProperty('eCommunicationDirection')) {
                obj['eCommunicationDirection'] = ComputedECommunicationDirection.constructFromObject(data['eCommunicationDirection']);
            }
            if (data.hasOwnProperty('iCommunicationrecipientCount')) {
                obj['iCommunicationrecipientCount'] = ApiClient.convertToType(data['iCommunicationrecipientCount'], 'Number');
            }
            if (data.hasOwnProperty('bCommunicationPrivate')) {
                obj['bCommunicationPrivate'] = ApiClient.convertToType(data['bCommunicationPrivate'], 'Boolean');
            }
            if (data.hasOwnProperty('objDescriptionstaticSender')) {
                obj['objDescriptionstaticSender'] = DescriptionstaticResponse.constructFromObject(data['objDescriptionstaticSender']);
            }
            if (data.hasOwnProperty('objEmailstaticSender')) {
                obj['objEmailstaticSender'] = EmailstaticResponse.constructFromObject(data['objEmailstaticSender']);
            }
            if (data.hasOwnProperty('objPhonestaticSender')) {
                obj['objPhonestaticSender'] = PhonestaticResponse.constructFromObject(data['objPhonestaticSender']);
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCommunicationSubject'] && !(typeof data['sCommunicationSubject'] === 'string' || data['sCommunicationSubject'] instanceof String)) {
            throw new Error("Expected the field `sCommunicationSubject` to be a primitive type in the JSON string but got " + data['sCommunicationSubject']);
        }
        // ensure the json data is a string
        if (data['sCommunicationBodyurl'] && !(typeof data['sCommunicationBodyurl'] === 'string' || data['sCommunicationBodyurl'] instanceof String)) {
            throw new Error("Expected the field `sCommunicationBodyurl` to be a primitive type in the JSON string but got " + data['sCommunicationBodyurl']);
        }
        // validate the optional field `objDescriptionstaticSender`
        if (data['objDescriptionstaticSender']) { // data not null
          DescriptionstaticResponse.validateJSON(data['objDescriptionstaticSender']);
        }
        // validate the optional field `objEmailstaticSender`
        if (data['objEmailstaticSender']) { // data not null
          EmailstaticResponse.validateJSON(data['objEmailstaticSender']);
        }
        // validate the optional field `objPhonestaticSender`
        if (data['objPhonestaticSender']) { // data not null
          PhonestaticResponse.validateJSON(data['objPhonestaticSender']);
        }
        // validate the optional field `objAudit`
        if (data['objAudit']) { // data not null
          CommonAudit.validateJSON(data['objAudit']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Communication.
     * minimum: 0
     * @return {Number}
     */
    getPkiCommunicationID() {
        return this.pkiCommunicationID;
    }

    /**
     * Sets The unique ID of the Communication.
     * @param {Number} pkiCommunicationID The unique ID of the Communication.
     */
    setPkiCommunicationID(pkiCommunicationID) {
        this['pkiCommunicationID'] = pkiCommunicationID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationImportance}
     */
    getECommunicationImportance() {
        return this.eCommunicationImportance;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationImportance} eCommunicationImportance
     */
    setECommunicationImportance(eCommunicationImportance) {
        this['eCommunicationImportance'] = eCommunicationImportance;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationType}
     */
    getECommunicationType() {
        return this.eCommunicationType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationType} eCommunicationType
     */
    setECommunicationType(eCommunicationType) {
        this['eCommunicationType'] = eCommunicationType;
    }
/**
     * Returns The subject of the Communication
     * @return {String}
     */
    getSCommunicationSubject() {
        return this.sCommunicationSubject;
    }

    /**
     * Sets The subject of the Communication
     * @param {String} sCommunicationSubject The subject of the Communication
     */
    setSCommunicationSubject(sCommunicationSubject) {
        this['sCommunicationSubject'] = sCommunicationSubject;
    }
/**
     * Returns The url of the body used as body in the Communication
     * @return {String}
     */
    getSCommunicationBodyurl() {
        return this.sCommunicationBodyurl;
    }

    /**
     * Sets The url of the body used as body in the Communication
     * @param {String} sCommunicationBodyurl The url of the body used as body in the Communication
     */
    setSCommunicationBodyurl(sCommunicationBodyurl) {
        this['sCommunicationBodyurl'] = sCommunicationBodyurl;
    }
/**
     * @return {module:eZmaxAPI/model/ComputedECommunicationDirection}
     */
    getECommunicationDirection() {
        return this.eCommunicationDirection;
    }

    /**
     * @param {module:eZmaxAPI/model/ComputedECommunicationDirection} eCommunicationDirection
     */
    setECommunicationDirection(eCommunicationDirection) {
        this['eCommunicationDirection'] = eCommunicationDirection;
    }
/**
     * Returns The count of Communicationrecipient
     * @return {Number}
     */
    getICommunicationrecipientCount() {
        return this.iCommunicationrecipientCount;
    }

    /**
     * Sets The count of Communicationrecipient
     * @param {Number} iCommunicationrecipientCount The count of Communicationrecipient
     */
    setICommunicationrecipientCount(iCommunicationrecipientCount) {
        this['iCommunicationrecipientCount'] = iCommunicationrecipientCount;
    }
/**
     * Returns Whether the Communication is private or not
     * @return {Boolean}
     */
    getBCommunicationPrivate() {
        return this.bCommunicationPrivate;
    }

    /**
     * Sets Whether the Communication is private or not
     * @param {Boolean} bCommunicationPrivate Whether the Communication is private or not
     */
    setBCommunicationPrivate(bCommunicationPrivate) {
        this['bCommunicationPrivate'] = bCommunicationPrivate;
    }
/**
     * @return {module:eZmaxAPI/model/DescriptionstaticResponse}
     */
    getObjDescriptionstaticSender() {
        return this.objDescriptionstaticSender;
    }

    /**
     * @param {module:eZmaxAPI/model/DescriptionstaticResponse} objDescriptionstaticSender
     */
    setObjDescriptionstaticSender(objDescriptionstaticSender) {
        this['objDescriptionstaticSender'] = objDescriptionstaticSender;
    }
/**
     * @return {module:eZmaxAPI/model/EmailstaticResponse}
     */
    getObjEmailstaticSender() {
        return this.objEmailstaticSender;
    }

    /**
     * @param {module:eZmaxAPI/model/EmailstaticResponse} objEmailstaticSender
     */
    setObjEmailstaticSender(objEmailstaticSender) {
        this['objEmailstaticSender'] = objEmailstaticSender;
    }
/**
     * @return {module:eZmaxAPI/model/PhonestaticResponse}
     */
    getObjPhonestaticSender() {
        return this.objPhonestaticSender;
    }

    /**
     * @param {module:eZmaxAPI/model/PhonestaticResponse} objPhonestaticSender
     */
    setObjPhonestaticSender(objPhonestaticSender) {
        this['objPhonestaticSender'] = objPhonestaticSender;
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

CommunicationResponse.RequiredProperties = ["pkiCommunicationID", "eCommunicationImportance", "eCommunicationType", "sCommunicationSubject", "eCommunicationDirection", "iCommunicationrecipientCount", "bCommunicationPrivate", "objAudit"];

/**
 * The unique ID of the Communication.
 * @member {Number} pkiCommunicationID
 */
CommunicationResponse.prototype['pkiCommunicationID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationImportance} eCommunicationImportance
 */
CommunicationResponse.prototype['eCommunicationImportance'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationType} eCommunicationType
 */
CommunicationResponse.prototype['eCommunicationType'] = undefined;

/**
 * The subject of the Communication
 * @member {String} sCommunicationSubject
 */
CommunicationResponse.prototype['sCommunicationSubject'] = undefined;

/**
 * The url of the body used as body in the Communication
 * @member {String} sCommunicationBodyurl
 */
CommunicationResponse.prototype['sCommunicationBodyurl'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ComputedECommunicationDirection} eCommunicationDirection
 */
CommunicationResponse.prototype['eCommunicationDirection'] = undefined;

/**
 * The count of Communicationrecipient
 * @member {Number} iCommunicationrecipientCount
 */
CommunicationResponse.prototype['iCommunicationrecipientCount'] = undefined;

/**
 * Whether the Communication is private or not
 * @member {Boolean} bCommunicationPrivate
 */
CommunicationResponse.prototype['bCommunicationPrivate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/DescriptionstaticResponse} objDescriptionstaticSender
 */
CommunicationResponse.prototype['objDescriptionstaticSender'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EmailstaticResponse} objEmailstaticSender
 */
CommunicationResponse.prototype['objEmailstaticSender'] = undefined;

/**
 * @member {module:eZmaxAPI/model/PhonestaticResponse} objPhonestaticSender
 */
CommunicationResponse.prototype['objPhonestaticSender'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
CommunicationResponse.prototype['objAudit'] = undefined;






export default CommunicationResponse;
