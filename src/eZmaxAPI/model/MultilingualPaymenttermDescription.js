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

/**
 * The MultilingualPaymenttermDescription model module.
 * @module eZmaxAPI/model/MultilingualPaymenttermDescription
 * @version 1.1.18
 */
class MultilingualPaymenttermDescription {
    /**
     * Constructs a new <code>MultilingualPaymenttermDescription</code>.
     * Description of the Paymentterm
     * @alias module:eZmaxAPI/model/MultilingualPaymenttermDescription
     */
    constructor() { 
        
        MultilingualPaymenttermDescription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualPaymenttermDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualPaymenttermDescription} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualPaymenttermDescription} The populated <code>MultilingualPaymenttermDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualPaymenttermDescription();

            if (data.hasOwnProperty('sPaymenttermDescription1')) {
                obj['sPaymenttermDescription1'] = ApiClient.convertToType(data['sPaymenttermDescription1'], 'String');
            }
            if (data.hasOwnProperty('sPaymenttermDescription2')) {
                obj['sPaymenttermDescription2'] = ApiClient.convertToType(data['sPaymenttermDescription2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultilingualPaymenttermDescription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultilingualPaymenttermDescription</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sPaymenttermDescription1'] && !(typeof data['sPaymenttermDescription1'] === 'string' || data['sPaymenttermDescription1'] instanceof String)) {
            throw new Error("Expected the field `sPaymenttermDescription1` to be a primitive type in the JSON string but got " + data['sPaymenttermDescription1']);
        }
        // ensure the json data is a string
        if (data['sPaymenttermDescription2'] && !(typeof data['sPaymenttermDescription2'] === 'string' || data['sPaymenttermDescription2'] instanceof String)) {
            throw new Error("Expected the field `sPaymenttermDescription2` to be a primitive type in the JSON string but got " + data['sPaymenttermDescription2']);
        }

        return true;
    }

/**
     * Returns The description of the Paymentterm in French
     * @return {String}
     */
    getSPaymenttermDescription1() {
        return this.sPaymenttermDescription1;
    }

    /**
     * Sets The description of the Paymentterm in French
     * @param {String} sPaymenttermDescription1 The description of the Paymentterm in French
     */
    setSPaymenttermDescription1(sPaymenttermDescription1) {
        this['sPaymenttermDescription1'] = sPaymenttermDescription1;
    }
/**
     * Returns The description of the Paymentterm in English
     * @return {String}
     */
    getSPaymenttermDescription2() {
        return this.sPaymenttermDescription2;
    }

    /**
     * Sets The description of the Paymentterm in English
     * @param {String} sPaymenttermDescription2 The description of the Paymentterm in English
     */
    setSPaymenttermDescription2(sPaymenttermDescription2) {
        this['sPaymenttermDescription2'] = sPaymenttermDescription2;
    }

}



/**
 * The description of the Paymentterm in French
 * @member {String} sPaymenttermDescription1
 */
MultilingualPaymenttermDescription.prototype['sPaymenttermDescription1'] = undefined;

/**
 * The description of the Paymentterm in English
 * @member {String} sPaymenttermDescription2
 */
MultilingualPaymenttermDescription.prototype['sPaymenttermDescription2'] = undefined;






export default MultilingualPaymenttermDescription;

