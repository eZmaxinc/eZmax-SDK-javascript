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
import FieldEPhoneType from './FieldEPhoneType';

/**
 * The PhoneRequest model module.
 * @module eZmaxAPI/model/PhoneRequest
 * @version 1.2.0
 */
class PhoneRequest {
    /**
     * Constructs a new <code>PhoneRequest</code>.
     * A Phone Object
     * @alias module:eZmaxAPI/model/PhoneRequest
     * @param fkiPhonetypeID {Number} The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     */
    constructor(fkiPhonetypeID) { 
        
        PhoneRequest.initialize(this, fkiPhonetypeID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiPhonetypeID) { 
        obj['fkiPhonetypeID'] = fkiPhonetypeID;
    }

    /**
     * Constructs a <code>PhoneRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PhoneRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PhoneRequest} The populated <code>PhoneRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhoneRequest();

            if (data.hasOwnProperty('pkiPhoneID')) {
                obj['pkiPhoneID'] = ApiClient.convertToType(data['pkiPhoneID'], 'Number');
            }
            if (data.hasOwnProperty('fkiPhonetypeID')) {
                obj['fkiPhonetypeID'] = ApiClient.convertToType(data['fkiPhonetypeID'], 'Number');
            }
            if (data.hasOwnProperty('ePhoneType')) {
                obj['ePhoneType'] = FieldEPhoneType.constructFromObject(data['ePhoneType']);
            }
            if (data.hasOwnProperty('sPhoneRegion')) {
                obj['sPhoneRegion'] = ApiClient.convertToType(data['sPhoneRegion'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExchange')) {
                obj['sPhoneExchange'] = ApiClient.convertToType(data['sPhoneExchange'], 'String');
            }
            if (data.hasOwnProperty('sPhoneNumber')) {
                obj['sPhoneNumber'] = ApiClient.convertToType(data['sPhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('sPhoneInternational')) {
                obj['sPhoneInternational'] = ApiClient.convertToType(data['sPhoneInternational'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExtension')) {
                obj['sPhoneExtension'] = ApiClient.convertToType(data['sPhoneExtension'], 'String');
            }
            if (data.hasOwnProperty('sPhoneE164')) {
                obj['sPhoneE164'] = ApiClient.convertToType(data['sPhoneE164'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhoneRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhoneRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PhoneRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPhoneRegion'] && !(typeof data['sPhoneRegion'] === 'string' || data['sPhoneRegion'] instanceof String)) {
            throw new Error("Expected the field `sPhoneRegion` to be a primitive type in the JSON string but got " + data['sPhoneRegion']);
        }
        // ensure the json data is a string
        if (data['sPhoneExchange'] && !(typeof data['sPhoneExchange'] === 'string' || data['sPhoneExchange'] instanceof String)) {
            throw new Error("Expected the field `sPhoneExchange` to be a primitive type in the JSON string but got " + data['sPhoneExchange']);
        }
        // ensure the json data is a string
        if (data['sPhoneNumber'] && !(typeof data['sPhoneNumber'] === 'string' || data['sPhoneNumber'] instanceof String)) {
            throw new Error("Expected the field `sPhoneNumber` to be a primitive type in the JSON string but got " + data['sPhoneNumber']);
        }
        // ensure the json data is a string
        if (data['sPhoneInternational'] && !(typeof data['sPhoneInternational'] === 'string' || data['sPhoneInternational'] instanceof String)) {
            throw new Error("Expected the field `sPhoneInternational` to be a primitive type in the JSON string but got " + data['sPhoneInternational']);
        }
        // ensure the json data is a string
        if (data['sPhoneExtension'] && !(typeof data['sPhoneExtension'] === 'string' || data['sPhoneExtension'] instanceof String)) {
            throw new Error("Expected the field `sPhoneExtension` to be a primitive type in the JSON string but got " + data['sPhoneExtension']);
        }
        // ensure the json data is a string
        if (data['sPhoneE164'] && !(typeof data['sPhoneE164'] === 'string' || data['sPhoneE164'] instanceof String)) {
            throw new Error("Expected the field `sPhoneE164` to be a primitive type in the JSON string but got " + data['sPhoneE164']);
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
     * Returns The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneRegion() {
        return this.sPhoneRegion;
    }

    /**
     * Sets The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneRegion The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneRegion(sPhoneRegion) {
        this['sPhoneRegion'] = sPhoneRegion;
    }
/**
     * Returns The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneExchange() {
        return this.sPhoneExchange;
    }

    /**
     * Sets The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneExchange The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneExchange(sPhoneExchange) {
        this['sPhoneExchange'] = sPhoneExchange;
    }
/**
     * Returns The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneNumber() {
        return this.sPhoneNumber;
    }

    /**
     * Sets The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneNumber The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneNumber(sPhoneNumber) {
        this['sPhoneNumber'] = sPhoneNumber;
    }
/**
     * Returns The international phone number.
     * @return {String}
     */
    getSPhoneInternational() {
        return this.sPhoneInternational;
    }

    /**
     * Sets The international phone number.
     * @param {String} sPhoneInternational The international phone number.
     */
    setSPhoneInternational(sPhoneInternational) {
        this['sPhoneInternational'] = sPhoneInternational;
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

}

PhoneRequest.RequiredProperties = ["fkiPhonetypeID"];

/**
 * The unique ID of the Phone.
 * @member {Number} pkiPhoneID
 */
PhoneRequest.prototype['pkiPhoneID'] = undefined;

/**
 * The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
 * @member {Number} fkiPhonetypeID
 */
PhoneRequest.prototype['fkiPhonetypeID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEPhoneType} ePhoneType
 */
PhoneRequest.prototype['ePhoneType'] = undefined;

/**
 * The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneRegion
 */
PhoneRequest.prototype['sPhoneRegion'] = undefined;

/**
 * The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneExchange
 */
PhoneRequest.prototype['sPhoneExchange'] = undefined;

/**
 * The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneNumber
 */
PhoneRequest.prototype['sPhoneNumber'] = undefined;

/**
 * The international phone number.
 * @member {String} sPhoneInternational
 */
PhoneRequest.prototype['sPhoneInternational'] = undefined;

/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
PhoneRequest.prototype['sPhoneExtension'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164
 */
PhoneRequest.prototype['sPhoneE164'] = undefined;






export default PhoneRequest;

