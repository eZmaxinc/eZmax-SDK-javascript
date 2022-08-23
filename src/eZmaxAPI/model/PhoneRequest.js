/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
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
 * @version 1.1.10
 */
class PhoneRequest {
    /**
     * Constructs a new <code>PhoneRequest</code>.
     * A Phone Object
     * @alias module:eZmaxAPI/model/PhoneRequest
     * @param fkiPhonetypeID {Number} The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * @param ePhoneType {module:eZmaxAPI/model/FieldEPhoneType} 
     */
    constructor(fkiPhonetypeID, ePhoneType) { 
        
        PhoneRequest.initialize(this, fkiPhonetypeID, ePhoneType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiPhonetypeID, ePhoneType) { 
        obj['fkiPhonetypeID'] = fkiPhonetypeID;
        obj['ePhoneType'] = ePhoneType;
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
        }
        return obj;
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
     * Returns A phone number in E.164 Format
     * @return {String}
     */
    getSPhoneInternational() {
        return this.sPhoneInternational;
    }

    /**
     * Sets A phone number in E.164 Format
     * @param {String} sPhoneInternational A phone number in E.164 Format
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

}

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
 * A phone number in E.164 Format
 * @member {String} sPhoneInternational
 */
PhoneRequest.prototype['sPhoneInternational'] = undefined;

/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
PhoneRequest.prototype['sPhoneExtension'] = undefined;






export default PhoneRequest;

