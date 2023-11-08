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
import FieldECommunicationexternalrecipientType from './FieldECommunicationexternalrecipientType';

/**
 * The CommunicationexternalrecipientRequest model module.
 * @module eZmaxAPI/model/CommunicationexternalrecipientRequest
 * @version 1.2.0
 */
class CommunicationexternalrecipientRequest {
    /**
     * Constructs a new <code>CommunicationexternalrecipientRequest</code>.
     * A Communicationexternalrecipient Object
     * @alias module:eZmaxAPI/model/CommunicationexternalrecipientRequest
     * @param sCommunicationexternalrecipientName {String} The name of the Communicationexternalrecipient
     */
    constructor(sCommunicationexternalrecipientName) { 
        
        CommunicationexternalrecipientRequest.initialize(this, sCommunicationexternalrecipientName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sCommunicationexternalrecipientName) { 
        obj['sCommunicationexternalrecipientName'] = sCommunicationexternalrecipientName;
    }

    /**
     * Constructs a <code>CommunicationexternalrecipientRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationexternalrecipientRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationexternalrecipientRequest} The populated <code>CommunicationexternalrecipientRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationexternalrecipientRequest();

            if (data.hasOwnProperty('pkiCommunicationexternalrecipientID')) {
                obj['pkiCommunicationexternalrecipientID'] = ApiClient.convertToType(data['pkiCommunicationexternalrecipientID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sPhoneE164')) {
                obj['sPhoneE164'] = ApiClient.convertToType(data['sPhoneE164'], 'String');
            }
            if (data.hasOwnProperty('eCommunicationexternalrecipientType')) {
                obj['eCommunicationexternalrecipientType'] = FieldECommunicationexternalrecipientType.constructFromObject(data['eCommunicationexternalrecipientType']);
            }
            if (data.hasOwnProperty('sCommunicationexternalrecipientName')) {
                obj['sCommunicationexternalrecipientName'] = ApiClient.convertToType(data['sCommunicationexternalrecipientName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationexternalrecipientRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationexternalrecipientRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationexternalrecipientRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }
        // ensure the json data is a string
        if (data['sPhoneE164'] && !(typeof data['sPhoneE164'] === 'string' || data['sPhoneE164'] instanceof String)) {
            throw new Error("Expected the field `sPhoneE164` to be a primitive type in the JSON string but got " + data['sPhoneE164']);
        }
        // ensure the json data is a string
        if (data['sCommunicationexternalrecipientName'] && !(typeof data['sCommunicationexternalrecipientName'] === 'string' || data['sCommunicationexternalrecipientName'] instanceof String)) {
            throw new Error("Expected the field `sCommunicationexternalrecipientName` to be a primitive type in the JSON string but got " + data['sCommunicationexternalrecipientName']);
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
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }
/**
     * Returns A phone number in E.164 Format
     * @return {String}
     */
    getSPhoneE164() {
        return this.sPhoneE164;
    }

    /**
     * Sets A phone number in E.164 Format
     * @param {String} sPhoneE164 A phone number in E.164 Format
     */
    setSPhoneE164(sPhoneE164) {
        this['sPhoneE164'] = sPhoneE164;
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
     * Returns The name of the Communicationexternalrecipient
     * @return {String}
     */
    getSCommunicationexternalrecipientName() {
        return this.sCommunicationexternalrecipientName;
    }

    /**
     * Sets The name of the Communicationexternalrecipient
     * @param {String} sCommunicationexternalrecipientName The name of the Communicationexternalrecipient
     */
    setSCommunicationexternalrecipientName(sCommunicationexternalrecipientName) {
        this['sCommunicationexternalrecipientName'] = sCommunicationexternalrecipientName;
    }

}

CommunicationexternalrecipientRequest.RequiredProperties = ["sCommunicationexternalrecipientName"];

/**
 * The unique ID of the Communicationexternalrecipient
 * @member {Number} pkiCommunicationexternalrecipientID
 */
CommunicationexternalrecipientRequest.prototype['pkiCommunicationexternalrecipientID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
CommunicationexternalrecipientRequest.prototype['sEmailAddress'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164
 */
CommunicationexternalrecipientRequest.prototype['sPhoneE164'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} eCommunicationexternalrecipientType
 */
CommunicationexternalrecipientRequest.prototype['eCommunicationexternalrecipientType'] = undefined;

/**
 * The name of the Communicationexternalrecipient
 * @member {String} sCommunicationexternalrecipientName
 */
CommunicationexternalrecipientRequest.prototype['sCommunicationexternalrecipientName'] = undefined;






export default CommunicationexternalrecipientRequest;

