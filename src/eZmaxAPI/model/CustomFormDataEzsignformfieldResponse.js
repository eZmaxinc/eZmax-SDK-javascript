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

/**
 * The CustomFormDataEzsignformfieldResponse model module.
 * @module eZmaxAPI/model/CustomFormDataEzsignformfieldResponse
 * @version 1.1.10
 */
class CustomFormDataEzsignformfieldResponse {
    /**
     * Constructs a new <code>CustomFormDataEzsignformfieldResponse</code>.
     * An Ezsignformfield Object
     * @alias module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse
     * @param sEzsignformfieldLabel {String} The Label for the Ezsignformfield
     * @param sEzsignformfieldValue {String} The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     */
    constructor(sEzsignformfieldLabel, sEzsignformfieldValue) { 
        
        CustomFormDataEzsignformfieldResponse.initialize(this, sEzsignformfieldLabel, sEzsignformfieldValue);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEzsignformfieldLabel, sEzsignformfieldValue) { 
        obj['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
        obj['sEzsignformfieldValue'] = sEzsignformfieldValue;
    }

    /**
     * Constructs a <code>CustomFormDataEzsignformfieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse} The populated <code>CustomFormDataEzsignformfieldResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFormDataEzsignformfieldResponse();

            if (data.hasOwnProperty('sEzsignformfieldLabel')) {
                obj['sEzsignformfieldLabel'] = ApiClient.convertToType(data['sEzsignformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('sEzsignformfieldValue')) {
                obj['sEzsignformfieldValue'] = ApiClient.convertToType(data['sEzsignformfieldValue'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Label for the Ezsignformfield
     * @return {String}
     */
    getSEzsignformfieldLabel() {
        return this.sEzsignformfieldLabel;
    }

    /**
     * Sets The Label for the Ezsignformfield
     * @param {String} sEzsignformfieldLabel The Label for the Ezsignformfield
     */
    setSEzsignformfieldLabel(sEzsignformfieldLabel) {
        this['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
    }
/**
     * Returns The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     * @return {String}
     */
    getSEzsignformfieldValue() {
        return this.sEzsignformfieldValue;
    }

    /**
     * Sets The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     * @param {String} sEzsignformfieldValue The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     */
    setSEzsignformfieldValue(sEzsignformfieldValue) {
        this['sEzsignformfieldValue'] = sEzsignformfieldValue;
    }

}

/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
CustomFormDataEzsignformfieldResponse.prototype['sEzsignformfieldLabel'] = undefined;

/**
 * The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
 * @member {String} sEzsignformfieldValue
 */
CustomFormDataEzsignformfieldResponse.prototype['sEzsignformfieldValue'] = undefined;






export default CustomFormDataEzsignformfieldResponse;

