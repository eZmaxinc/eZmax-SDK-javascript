/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import MultilingualPaymenttermDescription from './MultilingualPaymenttermDescription';
import PaymenttermResponse from './PaymenttermResponse';

/**
 * The PaymenttermResponseCompound model module.
 * @module eZmaxAPI/model/PaymenttermResponseCompound
 * @version 1.1.17
 */
class PaymenttermResponseCompound {
    /**
     * Constructs a new <code>PaymenttermResponseCompound</code>.
     * A Paymentterm Object
     * @alias module:eZmaxAPI/model/PaymenttermResponseCompound
     * @implements module:eZmaxAPI/model/PaymenttermResponse
     * @param pkiPaymenttermID {Number} The unique ID of the Paymentterm
     * @param sPaymenttermCode {String} The code of the Paymentterm
     * @param objPaymenttermDescription {module:eZmaxAPI/model/MultilingualPaymenttermDescription} 
     * @param bPaymenttermIsactive {Boolean} Whether the Paymentterm is active or not
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiPaymenttermID, sPaymenttermCode, objPaymenttermDescription, bPaymenttermIsactive, objAudit) { 
        PaymenttermResponse.initialize(this, pkiPaymenttermID, sPaymenttermCode, objPaymenttermDescription, bPaymenttermIsactive, objAudit);
        PaymenttermResponseCompound.initialize(this, pkiPaymenttermID, sPaymenttermCode, objPaymenttermDescription, bPaymenttermIsactive, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPaymenttermID, sPaymenttermCode, objPaymenttermDescription, bPaymenttermIsactive, objAudit) { 
        obj['pkiPaymenttermID'] = pkiPaymenttermID;
        obj['sPaymenttermCode'] = sPaymenttermCode;
        obj['objPaymenttermDescription'] = objPaymenttermDescription;
        obj['bPaymenttermIsactive'] = bPaymenttermIsactive;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>PaymenttermResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermResponseCompound} The populated <code>PaymenttermResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermResponseCompound();
            PaymenttermResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiPaymenttermID')) {
                obj['pkiPaymenttermID'] = ApiClient.convertToType(data['pkiPaymenttermID'], 'Number');
            }
            if (data.hasOwnProperty('sPaymenttermCode')) {
                obj['sPaymenttermCode'] = ApiClient.convertToType(data['sPaymenttermCode'], 'String');
            }
            if (data.hasOwnProperty('objPaymenttermDescription')) {
                obj['objPaymenttermDescription'] = MultilingualPaymenttermDescription.constructFromObject(data['objPaymenttermDescription']);
            }
            if (data.hasOwnProperty('bPaymenttermIsactive')) {
                obj['bPaymenttermIsactive'] = ApiClient.convertToType(data['bPaymenttermIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermResponseCompound.RequiredProperties) {
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
        // validate the optional field `objAudit`
        if (data['objAudit']) { // data not null
          CommonAudit.validateJSON(data['objAudit']);
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

PaymenttermResponseCompound.RequiredProperties = ["pkiPaymenttermID", "sPaymenttermCode", "objPaymenttermDescription", "bPaymenttermIsactive", "objAudit"];

/**
 * The unique ID of the Paymentterm
 * @member {Number} pkiPaymenttermID
 */
PaymenttermResponseCompound.prototype['pkiPaymenttermID'] = undefined;

/**
 * The code of the Paymentterm
 * @member {String} sPaymenttermCode
 */
PaymenttermResponseCompound.prototype['sPaymenttermCode'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualPaymenttermDescription} objPaymenttermDescription
 */
PaymenttermResponseCompound.prototype['objPaymenttermDescription'] = undefined;

/**
 * Whether the Paymentterm is active or not
 * @member {Boolean} bPaymenttermIsactive
 */
PaymenttermResponseCompound.prototype['bPaymenttermIsactive'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
PaymenttermResponseCompound.prototype['objAudit'] = undefined;


// Implement PaymenttermResponse interface:
/**
 * The unique ID of the Paymentterm
 * @member {Number} pkiPaymenttermID
 */
PaymenttermResponse.prototype['pkiPaymenttermID'] = undefined;
/**
 * The code of the Paymentterm
 * @member {String} sPaymenttermCode
 */
PaymenttermResponse.prototype['sPaymenttermCode'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualPaymenttermDescription} objPaymenttermDescription
 */
PaymenttermResponse.prototype['objPaymenttermDescription'] = undefined;
/**
 * Whether the Paymentterm is active or not
 * @member {Boolean} bPaymenttermIsactive
 */
PaymenttermResponse.prototype['bPaymenttermIsactive'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
PaymenttermResponse.prototype['objAudit'] = undefined;




export default PaymenttermResponseCompound;

