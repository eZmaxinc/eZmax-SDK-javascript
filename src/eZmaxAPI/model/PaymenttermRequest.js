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
import FieldEPaymenttermType from './FieldEPaymenttermType';
import MultilingualPaymenttermDescription from './MultilingualPaymenttermDescription';

/**
 * The PaymenttermRequest model module.
 * @module eZmaxAPI/model/PaymenttermRequest
 * @version 1.2.0
 */
class PaymenttermRequest {
    /**
     * Constructs a new <code>PaymenttermRequest</code>.
     * A Paymentterm Object
     * @alias module:eZmaxAPI/model/PaymenttermRequest
     * @param sPaymenttermCode {String} The code of the Paymentterm
     * @param ePaymenttermType {module:eZmaxAPI/model/FieldEPaymenttermType} 
     * @param iPaymenttermDay {Number} The day of the Paymentterm
     * @param objPaymenttermDescription {module:eZmaxAPI/model/MultilingualPaymenttermDescription} 
     * @param bPaymenttermIsactive {Boolean} Whether the Paymentterm is active or not
     */
    constructor(sPaymenttermCode, ePaymenttermType, iPaymenttermDay, objPaymenttermDescription, bPaymenttermIsactive) { 
        
        PaymenttermRequest.initialize(this, sPaymenttermCode, ePaymenttermType, iPaymenttermDay, objPaymenttermDescription, bPaymenttermIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sPaymenttermCode, ePaymenttermType, iPaymenttermDay, objPaymenttermDescription, bPaymenttermIsactive) { 
        obj['sPaymenttermCode'] = sPaymenttermCode;
        obj['ePaymenttermType'] = ePaymenttermType;
        obj['iPaymenttermDay'] = iPaymenttermDay;
        obj['objPaymenttermDescription'] = objPaymenttermDescription;
        obj['bPaymenttermIsactive'] = bPaymenttermIsactive;
    }

    /**
     * Constructs a <code>PaymenttermRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermRequest} The populated <code>PaymenttermRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermRequest();

            if (data.hasOwnProperty('pkiPaymenttermID')) {
                obj['pkiPaymenttermID'] = ApiClient.convertToType(data['pkiPaymenttermID'], 'Number');
            }
            if (data.hasOwnProperty('sPaymenttermCode')) {
                obj['sPaymenttermCode'] = ApiClient.convertToType(data['sPaymenttermCode'], 'String');
            }
            if (data.hasOwnProperty('ePaymenttermType')) {
                obj['ePaymenttermType'] = FieldEPaymenttermType.constructFromObject(data['ePaymenttermType']);
            }
            if (data.hasOwnProperty('iPaymenttermDay')) {
                obj['iPaymenttermDay'] = ApiClient.convertToType(data['iPaymenttermDay'], 'Number');
            }
            if (data.hasOwnProperty('objPaymenttermDescription')) {
                obj['objPaymenttermDescription'] = MultilingualPaymenttermDescription.constructFromObject(data['objPaymenttermDescription']);
            }
            if (data.hasOwnProperty('bPaymenttermIsactive')) {
                obj['bPaymenttermIsactive'] = ApiClient.convertToType(data['bPaymenttermIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPaymenttermCode'] && !(typeof data['sPaymenttermCode'] === 'string' || data['sPaymenttermCode'] instanceof String)) {
            throw new Error("Expected the field `sPaymenttermCode` to be a primitive type in the JSON string but got " + data['sPaymenttermCode']);
        }
        // validate the optional field `objPaymenttermDescription`
        if (data['objPaymenttermDescription']) { // data not null
          MultilingualPaymenttermDescription.validateJSON(data['objPaymenttermDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Paymentterm
     * @return {Number}
     */
    getPkiPaymenttermID() {
        return this.pkiPaymenttermID;
    }

    /**
     * Sets The unique ID of the Paymentterm
     * @param {Number} pkiPaymenttermID The unique ID of the Paymentterm
     */
    setPkiPaymenttermID(pkiPaymenttermID) {
        this['pkiPaymenttermID'] = pkiPaymenttermID;
    }
/**
     * Returns The code of the Paymentterm
     * @return {String}
     */
    getSPaymenttermCode() {
        return this.sPaymenttermCode;
    }

    /**
     * Sets The code of the Paymentterm
     * @param {String} sPaymenttermCode The code of the Paymentterm
     */
    setSPaymenttermCode(sPaymenttermCode) {
        this['sPaymenttermCode'] = sPaymenttermCode;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEPaymenttermType}
     */
    getEPaymenttermType() {
        return this.ePaymenttermType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEPaymenttermType} ePaymenttermType
     */
    setEPaymenttermType(ePaymenttermType) {
        this['ePaymenttermType'] = ePaymenttermType;
    }
/**
     * Returns The day of the Paymentterm
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getIPaymenttermDay() {
        return this.iPaymenttermDay;
    }

    /**
     * Sets The day of the Paymentterm
     * @param {Number} iPaymenttermDay The day of the Paymentterm
     */
    setIPaymenttermDay(iPaymenttermDay) {
        this['iPaymenttermDay'] = iPaymenttermDay;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualPaymenttermDescription}
     */
    getObjPaymenttermDescription() {
        return this.objPaymenttermDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualPaymenttermDescription} objPaymenttermDescription
     */
    setObjPaymenttermDescription(objPaymenttermDescription) {
        this['objPaymenttermDescription'] = objPaymenttermDescription;
    }
/**
     * Returns Whether the Paymentterm is active or not
     * @return {Boolean}
     */
    getBPaymenttermIsactive() {
        return this.bPaymenttermIsactive;
    }

    /**
     * Sets Whether the Paymentterm is active or not
     * @param {Boolean} bPaymenttermIsactive Whether the Paymentterm is active or not
     */
    setBPaymenttermIsactive(bPaymenttermIsactive) {
        this['bPaymenttermIsactive'] = bPaymenttermIsactive;
    }

}

PaymenttermRequest.RequiredProperties = ["sPaymenttermCode", "ePaymenttermType", "iPaymenttermDay", "objPaymenttermDescription", "bPaymenttermIsactive"];

/**
 * The unique ID of the Paymentterm
 * @member {Number} pkiPaymenttermID
 */
PaymenttermRequest.prototype['pkiPaymenttermID'] = undefined;

/**
 * The code of the Paymentterm
 * @member {String} sPaymenttermCode
 */
PaymenttermRequest.prototype['sPaymenttermCode'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEPaymenttermType} ePaymenttermType
 */
PaymenttermRequest.prototype['ePaymenttermType'] = undefined;

/**
 * The day of the Paymentterm
 * @member {Number} iPaymenttermDay
 */
PaymenttermRequest.prototype['iPaymenttermDay'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualPaymenttermDescription} objPaymenttermDescription
 */
PaymenttermRequest.prototype['objPaymenttermDescription'] = undefined;

/**
 * Whether the Paymentterm is active or not
 * @member {Boolean} bPaymenttermIsactive
 */
PaymenttermRequest.prototype['bPaymenttermIsactive'] = undefined;






export default PaymenttermRequest;

