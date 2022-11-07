/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonResponseWarning model module.
 * @module eZmaxAPI/model/CommonResponseWarning
 * @version 1.1.15
 */
class CommonResponseWarning {
    /**
     * Constructs a new <code>CommonResponseWarning</code>.
     * Generic Warning Message
     * @alias module:eZmaxAPI/model/CommonResponseWarning
     * @param sWarningMessage {String} More detail about the warning
     * @param eWarningCode {String} The warning code. See documentation for valid values
     */
    constructor(sWarningMessage, eWarningCode) { 
        
        CommonResponseWarning.initialize(this, sWarningMessage, eWarningCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sWarningMessage, eWarningCode) { 
        obj['sWarningMessage'] = sWarningMessage;
        obj['eWarningCode'] = eWarningCode;
    }

    /**
     * Constructs a <code>CommonResponseWarning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseWarning} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseWarning} The populated <code>CommonResponseWarning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseWarning();

            if (data.hasOwnProperty('sWarningMessage')) {
                obj['sWarningMessage'] = ApiClient.convertToType(data['sWarningMessage'], 'String');
            }
            if (data.hasOwnProperty('eWarningCode')) {
                obj['eWarningCode'] = ApiClient.convertToType(data['eWarningCode'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns More detail about the warning
     * @return {String}
     */
    getSWarningMessage() {
        return this.sWarningMessage;
    }

    /**
     * Sets More detail about the warning
     * @param {String} sWarningMessage More detail about the warning
     */
    setSWarningMessage(sWarningMessage) {
        this['sWarningMessage'] = sWarningMessage;
    }
/**
     * Returns The warning code. See documentation for valid values
     * @return {String}
     */
    getEWarningCode() {
        return this.eWarningCode;
    }

    /**
     * Sets The warning code. See documentation for valid values
     * @param {String} eWarningCode The warning code. See documentation for valid values
     */
    setEWarningCode(eWarningCode) {
        this['eWarningCode'] = eWarningCode;
    }

}

/**
 * More detail about the warning
 * @member {String} sWarningMessage
 */
CommonResponseWarning.prototype['sWarningMessage'] = undefined;

/**
 * The warning code. See documentation for valid values
 * @member {String} eWarningCode
 */
CommonResponseWarning.prototype['eWarningCode'] = undefined;






export default CommonResponseWarning;

