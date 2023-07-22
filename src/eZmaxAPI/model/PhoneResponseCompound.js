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
import FieldEPhoneType from './FieldEPhoneType';
import PhoneResponse from './PhoneResponse';

/**
 * The PhoneResponseCompound model module.
 * @module eZmaxAPI/model/PhoneResponseCompound
 * @version 1.1.18
 */
class PhoneResponseCompound {
    /**
     * Constructs a new <code>PhoneResponseCompound</code>.
     * A Phone Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/PhoneResponseCompound
     * @implements module:eZmaxAPI/model/PhoneResponse
     * @param pkiPhoneID {Number} The unique ID of the Phone.
     * @param fkiPhonetypeID {Number} The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     */
    constructor(pkiPhoneID, fkiPhonetypeID) { 
        PhoneResponse.initialize(this, pkiPhoneID, fkiPhonetypeID);
        PhoneResponseCompound.initialize(this, pkiPhoneID, fkiPhonetypeID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPhoneID, fkiPhonetypeID) { 
        obj['pkiPhoneID'] = pkiPhoneID;
        obj['fkiPhonetypeID'] = fkiPhonetypeID;
    }

    /**
     * Constructs a <code>PhoneResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PhoneResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PhoneResponseCompound} The populated <code>PhoneResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneResponseCompound();
            PhoneResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiPhoneID')) {
                obj['pkiPhoneID'] = ApiClient.convertToType(data['pkiPhoneID'], 'Number');
            }
            if (data.hasOwnProperty('fkiPhonetypeID')) {
                obj['fkiPhonetypeID'] = ApiClient.convertToType(data['fkiPhonetypeID'], 'Number');
            }
            if (data.hasOwnProperty('ePhoneType')) {
                obj['ePhoneType'] = FieldEPhoneType.constructFromObject(data['ePhoneType']);
            }
            if (data.hasOwnProperty('sPhoneE164')) {
                obj['sPhoneE164'] = ApiClient.convertToType(data['sPhoneE164'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExtension')) {
                obj['sPhoneExtension'] = ApiClient.convertToType(data['sPhoneExtension'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhoneResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhoneResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PhoneResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPhoneE164'] && !(typeof data['sPhoneE164'] === 'string' || data['sPhoneE164'] instanceof String)) {
            throw new Error("Expected the field `sPhoneE164` to be a primitive type in the JSON string but got " + data['sPhoneE164']);
        }
        // ensure the json data is a string
        if (data['sPhoneExtension'] && !(typeof data['sPhoneExtension'] === 'string' || data['sPhoneExtension'] instanceof String)) {
            throw new Error("Expected the field `sPhoneExtension` to be a primitive type in the JSON string but got " + data['sPhoneExtension']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Phone.
     * minimum: 0
     * @return {Number}
     */
    getPkiPhoneID() {
        return this.pkiPhoneID;
    }

    /**
     * Sets The unique ID of the Phone.
     * @param {Number} pkiPhoneID The unique ID of the Phone.
     */
    setPkiPhoneID(pkiPhoneID) {
        this['pkiPhoneID'] = pkiPhoneID;
    }
/**
     * Returns The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * minimum: 0
     * @return {Number}
     */
    getFkiPhonetypeID() {
        return this.fkiPhonetypeID;
    }

    /**
     * Sets The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * @param {Number} fkiPhonetypeID The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     */
    setFkiPhonetypeID(fkiPhonetypeID) {
        this['fkiPhonetypeID'] = fkiPhonetypeID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEPhoneType}
     */
    getEPhoneType() {
        return this.ePhoneType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEPhoneType} ePhoneType
     */
    setEPhoneType(ePhoneType) {
        this['ePhoneType'] = ePhoneType;
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
     * Returns The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     * @return {String}
     */
    getSPhoneExtension() {
        return this.sPhoneExtension;
    }

    /**
     * Sets The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     * @param {String} sPhoneExtension The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     */
    setSPhoneExtension(sPhoneExtension) {
        this['sPhoneExtension'] = sPhoneExtension;
    }

}

PhoneResponseCompound.RequiredProperties = ["pkiPhoneID", "fkiPhonetypeID"];

/**
 * The unique ID of the Phone.
 * @member {Number} pkiPhoneID
 */
PhoneResponseCompound.prototype['pkiPhoneID'] = undefined;

/**
 * The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
 * @member {Number} fkiPhonetypeID
 */
PhoneResponseCompound.prototype['fkiPhonetypeID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEPhoneType} ePhoneType
 */
PhoneResponseCompound.prototype['ePhoneType'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164
 */
PhoneResponseCompound.prototype['sPhoneE164'] = undefined;

/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
PhoneResponseCompound.prototype['sPhoneExtension'] = undefined;


// Implement PhoneResponse interface:
/**
 * The unique ID of the Phone.
 * @member {Number} pkiPhoneID
 */
PhoneResponse.prototype['pkiPhoneID'] = undefined;
/**
 * The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
 * @member {Number} fkiPhonetypeID
 */
PhoneResponse.prototype['fkiPhonetypeID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEPhoneType} ePhoneType
 */
PhoneResponse.prototype['ePhoneType'] = undefined;
/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164
 */
PhoneResponse.prototype['sPhoneE164'] = undefined;
/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
PhoneResponse.prototype['sPhoneExtension'] = undefined;




export default PhoneResponseCompound;

