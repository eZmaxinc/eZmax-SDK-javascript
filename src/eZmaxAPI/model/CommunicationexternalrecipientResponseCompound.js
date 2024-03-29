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
import CommunicationexternalrecipientResponse from './CommunicationexternalrecipientResponse';
import DescriptionstaticResponseCompound from './DescriptionstaticResponseCompound';
import EmailstaticResponseCompound from './EmailstaticResponseCompound';
import FieldECommunicationexternalrecipientType from './FieldECommunicationexternalrecipientType';
import PhonestaticResponseCompound from './PhonestaticResponseCompound';

/**
 * The CommunicationexternalrecipientResponseCompound model module.
 * @module eZmaxAPI/model/CommunicationexternalrecipientResponseCompound
 * @version 1.1.18
 */
class CommunicationexternalrecipientResponseCompound {
    /**
     * Constructs a new <code>CommunicationexternalrecipientResponseCompound</code>.
     * A Communicationexternalrecipient Object
     * @alias module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound
     * @implements module:eZmaxAPI/model/CommunicationexternalrecipientResponse
     * @param pkiCommunicationexternalrecipientID {Number} The unique ID of the Communicationexternalrecipient
     * @param eCommunicationexternalrecipientType {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} 
     * @param objDescriptionstatic {module:eZmaxAPI/model/DescriptionstaticResponseCompound} 
     */
    constructor(pkiCommunicationexternalrecipientID, eCommunicationexternalrecipientType, objDescriptionstatic) { 
        CommunicationexternalrecipientResponse.initialize(this, pkiCommunicationexternalrecipientID, eCommunicationexternalrecipientType, objDescriptionstatic);
        CommunicationexternalrecipientResponseCompound.initialize(this, pkiCommunicationexternalrecipientID, eCommunicationexternalrecipientType, objDescriptionstatic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCommunicationexternalrecipientID, eCommunicationexternalrecipientType, objDescriptionstatic) { 
        obj['pkiCommunicationexternalrecipientID'] = pkiCommunicationexternalrecipientID;
        obj['eCommunicationexternalrecipientType'] = eCommunicationexternalrecipientType;
        obj['objDescriptionstatic'] = objDescriptionstatic;
    }

    /**
     * Constructs a <code>CommunicationexternalrecipientResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound} The populated <code>CommunicationexternalrecipientResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationexternalrecipientResponseCompound();
            CommunicationexternalrecipientResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiCommunicationexternalrecipientID')) {
                obj['pkiCommunicationexternalrecipientID'] = ApiClient.convertToType(data['pkiCommunicationexternalrecipientID'], 'Number');
            }
            if (data.hasOwnProperty('eCommunicationexternalrecipientType')) {
                obj['eCommunicationexternalrecipientType'] = FieldECommunicationexternalrecipientType.constructFromObject(data['eCommunicationexternalrecipientType']);
            }
            if (data.hasOwnProperty('objDescriptionstatic')) {
                obj['objDescriptionstatic'] = DescriptionstaticResponseCompound.constructFromObject(data['objDescriptionstatic']);
            }
            if (data.hasOwnProperty('objEmailstatic')) {
                obj['objEmailstatic'] = EmailstaticResponseCompound.constructFromObject(data['objEmailstatic']);
            }
            if (data.hasOwnProperty('objPhonestatic')) {
                obj['objPhonestatic'] = PhonestaticResponseCompound.constructFromObject(data['objPhonestatic']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationexternalrecipientResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationexternalrecipientResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationexternalrecipientResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDescriptionstatic`
        if (data['objDescriptionstatic']) { // data not null
          DescriptionstaticResponseCompound.validateJSON(data['objDescriptionstatic']);
        }
        // validate the optional field `objEmailstatic`
        if (data['objEmailstatic']) { // data not null
          EmailstaticResponseCompound.validateJSON(data['objEmailstatic']);
        }
        // validate the optional field `objPhonestatic`
        if (data['objPhonestatic']) { // data not null
          PhonestaticResponseCompound.validateJSON(data['objPhonestatic']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Communicationexternalrecipient
     * @return {Number}
     */
    getPkiCommunicationexternalrecipientID() {
        return this.pkiCommunicationexternalrecipientID;
    }

    /**
     * Sets The unique ID of the Communicationexternalrecipient
     * @param {Number} pkiCommunicationexternalrecipientID The unique ID of the Communicationexternalrecipient
     */
    setPkiCommunicationexternalrecipientID(pkiCommunicationexternalrecipientID) {
        this['pkiCommunicationexternalrecipientID'] = pkiCommunicationexternalrecipientID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType}
     */
    getECommunicationexternalrecipientType() {
        return this.eCommunicationexternalrecipientType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} eCommunicationexternalrecipientType
     */
    setECommunicationexternalrecipientType(eCommunicationexternalrecipientType) {
        this['eCommunicationexternalrecipientType'] = eCommunicationexternalrecipientType;
    }
/**
     * @return {module:eZmaxAPI/model/DescriptionstaticResponseCompound}
     */
    getObjDescriptionstatic() {
        return this.objDescriptionstatic;
    }

    /**
     * @param {module:eZmaxAPI/model/DescriptionstaticResponseCompound} objDescriptionstatic
     */
    setObjDescriptionstatic(objDescriptionstatic) {
        this['objDescriptionstatic'] = objDescriptionstatic;
    }
/**
     * @return {module:eZmaxAPI/model/EmailstaticResponseCompound}
     */
    getObjEmailstatic() {
        return this.objEmailstatic;
    }

    /**
     * @param {module:eZmaxAPI/model/EmailstaticResponseCompound} objEmailstatic
     */
    setObjEmailstatic(objEmailstatic) {
        this['objEmailstatic'] = objEmailstatic;
    }
/**
     * @return {module:eZmaxAPI/model/PhonestaticResponseCompound}
     */
    getObjPhonestatic() {
        return this.objPhonestatic;
    }

    /**
     * @param {module:eZmaxAPI/model/PhonestaticResponseCompound} objPhonestatic
     */
    setObjPhonestatic(objPhonestatic) {
        this['objPhonestatic'] = objPhonestatic;
    }

}

CommunicationexternalrecipientResponseCompound.RequiredProperties = ["pkiCommunicationexternalrecipientID", "eCommunicationexternalrecipientType", "objDescriptionstatic"];

/**
 * The unique ID of the Communicationexternalrecipient
 * @member {Number} pkiCommunicationexternalrecipientID
 */
CommunicationexternalrecipientResponseCompound.prototype['pkiCommunicationexternalrecipientID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} eCommunicationexternalrecipientType
 */
CommunicationexternalrecipientResponseCompound.prototype['eCommunicationexternalrecipientType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/DescriptionstaticResponseCompound} objDescriptionstatic
 */
CommunicationexternalrecipientResponseCompound.prototype['objDescriptionstatic'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EmailstaticResponseCompound} objEmailstatic
 */
CommunicationexternalrecipientResponseCompound.prototype['objEmailstatic'] = undefined;

/**
 * @member {module:eZmaxAPI/model/PhonestaticResponseCompound} objPhonestatic
 */
CommunicationexternalrecipientResponseCompound.prototype['objPhonestatic'] = undefined;


// Implement CommunicationexternalrecipientResponse interface:
/**
 * The unique ID of the Communicationexternalrecipient
 * @member {Number} pkiCommunicationexternalrecipientID
 */
CommunicationexternalrecipientResponse.prototype['pkiCommunicationexternalrecipientID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} eCommunicationexternalrecipientType
 */
CommunicationexternalrecipientResponse.prototype['eCommunicationexternalrecipientType'] = undefined;
/**
 * @member {module:eZmaxAPI/model/DescriptionstaticResponseCompound} objDescriptionstatic
 */
CommunicationexternalrecipientResponse.prototype['objDescriptionstatic'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EmailstaticResponseCompound} objEmailstatic
 */
CommunicationexternalrecipientResponse.prototype['objEmailstatic'] = undefined;
/**
 * @member {module:eZmaxAPI/model/PhonestaticResponseCompound} objPhonestatic
 */
CommunicationexternalrecipientResponse.prototype['objPhonestatic'] = undefined;




export default CommunicationexternalrecipientResponseCompound;

