/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomDropdownElementRequest model module.
 * @module eZmaxAPI/model/CustomDropdownElementRequest
 * @version 1.1.6
 */
class CustomDropdownElementRequest {
    /**
     * Constructs a new <code>CustomDropdownElementRequest</code>.
     * Generic DropdownElement Request
     * @alias module:eZmaxAPI/model/CustomDropdownElementRequest
     * @param sLabel {String} The Description of the element
     * @param sValue {String} The Value of the element
     */
    constructor(sLabel, sValue) { 
        
        CustomDropdownElementRequest.initialize(this, sLabel, sValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sLabel, sValue) { 
        obj['sLabel'] = sLabel;
        obj['sValue'] = sValue;
    }

    /**
     * Constructs a <code>CustomDropdownElementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomDropdownElementRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomDropdownElementRequest} The populated <code>CustomDropdownElementRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomDropdownElementRequest();

            if (data.hasOwnProperty('sLabel')) {
                obj['sLabel'] = ApiClient.convertToType(data['sLabel'], 'String');
            }
            if (data.hasOwnProperty('sValue')) {
                obj['sValue'] = ApiClient.convertToType(data['sValue'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Description of the element
     * @return {String}
     */
    getSLabel() {
        return this.sLabel;
    }

    /**
     * Sets The Description of the element
     * @param {String} sLabel The Description of the element
     */
    setSLabel(sLabel) {
        this['sLabel'] = sLabel;
    }
/**
     * Returns The Value of the element
     * @return {String}
     */
    getSValue() {
        return this.sValue;
    }

    /**
     * Sets The Value of the element
     * @param {String} sValue The Value of the element
     */
    setSValue(sValue) {
        this['sValue'] = sValue;
    }

}

/**
 * The Description of the element
 * @member {String} sLabel
 */
CustomDropdownElementRequest.prototype['sLabel'] = undefined;

/**
 * The Value of the element
 * @member {String} sValue
 */
CustomDropdownElementRequest.prototype['sValue'] = undefined;






export default CustomDropdownElementRequest;

