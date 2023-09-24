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
import PhonestaticResponse from './PhonestaticResponse';

/**
 * The PhonestaticResponseCompound model module.
 * @module eZmaxAPI/model/PhonestaticResponseCompound
 * @version 1.2.0
 */
class PhonestaticResponseCompound {
    /**
     * Constructs a new <code>PhonestaticResponseCompound</code>.
     * A Phonestatic Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/PhonestaticResponseCompound
     * @implements module:eZmaxAPI/model/PhonestaticResponse
     * @param pkiPhonestaticID {Number} The unique ID of the Phone.
     */
    constructor(pkiPhonestaticID) { 
        PhonestaticResponse.initialize(this, pkiPhonestaticID);
        PhonestaticResponseCompound.initialize(this, pkiPhonestaticID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPhonestaticID) { 
        obj['pkiPhonestaticID'] = pkiPhonestaticID;
    }

    /**
     * Constructs a <code>PhonestaticResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PhonestaticResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PhonestaticResponseCompound} The populated <code>PhonestaticResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhonestaticResponseCompound();
            PhonestaticResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiPhonestaticID')) {
                obj['pkiPhonestaticID'] = ApiClient.convertToType(data['pkiPhonestaticID'], 'Number');
            }
            if (data.hasOwnProperty('sPhonestaticE164')) {
                obj['sPhonestaticE164'] = ApiClient.convertToType(data['sPhonestaticE164'], 'String');
            }
            if (data.hasOwnProperty('sPhonestaticExtension')) {
                obj['sPhonestaticExtension'] = ApiClient.convertToType(data['sPhonestaticExtension'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhonestaticResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhonestaticResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PhonestaticResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPhonestaticE164'] && !(typeof data['sPhonestaticE164'] === 'string' || data['sPhonestaticE164'] instanceof String)) {
            throw new Error("Expected the field `sPhonestaticE164` to be a primitive type in the JSON string but got " + data['sPhonestaticE164']);
        }
        // ensure the json data is a string
        if (data['sPhonestaticExtension'] && !(typeof data['sPhonestaticExtension'] === 'string' || data['sPhonestaticExtension'] instanceof String)) {
            throw new Error("Expected the field `sPhonestaticExtension` to be a primitive type in the JSON string but got " + data['sPhonestaticExtension']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Phone.
     * minimum: 0
     * @return {Number}
     */
    getPkiPhonestaticID() {
        return this.pkiPhonestaticID;
    }

    /**
     * Sets The unique ID of the Phone.
     * @param {Number} pkiPhonestaticID The unique ID of the Phone.
     */
    setPkiPhonestaticID(pkiPhonestaticID) {
        this['pkiPhonestaticID'] = pkiPhonestaticID;
    }
/**
     * Returns A phone number in E.164 Format
     * @return {String}
     */
    getSPhonestaticE164() {
        return this.sPhonestaticE164;
    }

    /**
     * Sets A phone number in E.164 Format
     * @param {String} sPhonestaticE164 A phone number in E.164 Format
     */
    setSPhonestaticE164(sPhonestaticE164) {
        this['sPhonestaticE164'] = sPhonestaticE164;
    }
/**
     * Returns The extension of the phone number.
     * @return {String}
     */
    getSPhonestaticExtension() {
        return this.sPhonestaticExtension;
    }

    /**
     * Sets The extension of the phone number.
     * @param {String} sPhonestaticExtension The extension of the phone number.
     */
    setSPhonestaticExtension(sPhonestaticExtension) {
        this['sPhonestaticExtension'] = sPhonestaticExtension;
    }

}

PhonestaticResponseCompound.RequiredProperties = ["pkiPhonestaticID"];

/**
 * The unique ID of the Phone.
 * @member {Number} pkiPhonestaticID
 */
PhonestaticResponseCompound.prototype['pkiPhonestaticID'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhonestaticE164
 */
PhonestaticResponseCompound.prototype['sPhonestaticE164'] = undefined;

/**
 * The extension of the phone number.
 * @member {String} sPhonestaticExtension
 */
PhonestaticResponseCompound.prototype['sPhonestaticExtension'] = undefined;


// Implement PhonestaticResponse interface:
/**
 * The unique ID of the Phone.
 * @member {Number} pkiPhonestaticID
 */
PhonestaticResponse.prototype['pkiPhonestaticID'] = undefined;
/**
 * A phone number in E.164 Format
 * @member {String} sPhonestaticE164
 */
PhonestaticResponse.prototype['sPhonestaticE164'] = undefined;
/**
 * The extension of the phone number.
 * @member {String} sPhonestaticExtension
 */
PhonestaticResponse.prototype['sPhonestaticExtension'] = undefined;




export default PhonestaticResponseCompound;

