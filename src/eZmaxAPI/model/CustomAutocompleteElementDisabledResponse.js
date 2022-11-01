/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomAutocompleteElementDisabledResponseAllOf from './CustomAutocompleteElementDisabledResponseAllOf';
import CustomAutocompleteElementResponse from './CustomAutocompleteElementResponse';

/**
 * The CustomAutocompleteElementDisabledResponse model module.
 * @module eZmaxAPI/model/CustomAutocompleteElementDisabledResponse
 * @version 1.1.14
 */
class CustomAutocompleteElementDisabledResponse {
    /**
     * Constructs a new <code>CustomAutocompleteElementDisabledResponse</code>.
     * Generic AutocompleteElement Response with a bDisabled Flag
     * @alias module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponse
     * @implements module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponseAllOf
     * @implements module:eZmaxAPI/model/CustomAutocompleteElementResponse
     * @param bDisabled {Boolean} Indicates if the element is disabled in the context
     * @param sCategory {String} The Category for the dropdown or an empty string if not categorized
     * @param sLabel {String} The Description of the element
     * @param sValue {String} The Unique ID of the element
     * @param bActive {Boolean} Indicates if the element is active
     */
    constructor(bDisabled, sCategory, sLabel, sValue, bActive) { 
        CustomAutocompleteElementDisabledResponseAllOf.initialize(this, bDisabled);CustomAutocompleteElementResponse.initialize(this, sCategory, sLabel, sValue, bActive);
        CustomAutocompleteElementDisabledResponse.initialize(this, bDisabled, sCategory, sLabel, sValue, bActive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bDisabled, sCategory, sLabel, sValue, bActive) { 
        obj['bDisabled'] = bDisabled;
        obj['sCategory'] = sCategory;
        obj['sLabel'] = sLabel;
        obj['sValue'] = sValue;
        obj['bActive'] = bActive;
    }

    /**
     * Constructs a <code>CustomAutocompleteElementDisabledResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponse} The populated <code>CustomAutocompleteElementDisabledResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAutocompleteElementDisabledResponse();
            CustomAutocompleteElementDisabledResponseAllOf.constructFromObject(data, obj);
            CustomAutocompleteElementResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('bDisabled')) {
                obj['bDisabled'] = ApiClient.convertToType(data['bDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('sCategory')) {
                obj['sCategory'] = ApiClient.convertToType(data['sCategory'], 'String');
            }
            if (data.hasOwnProperty('sLabel')) {
                obj['sLabel'] = ApiClient.convertToType(data['sLabel'], 'String');
            }
            if (data.hasOwnProperty('sValue')) {
                obj['sValue'] = ApiClient.convertToType(data['sValue'], 'String');
            }
            if (data.hasOwnProperty('mValue')) {
                obj['mValue'] = ApiClient.convertToType(data['mValue'], 'String');
            }
            if (data.hasOwnProperty('bActive')) {
                obj['bActive'] = ApiClient.convertToType(data['bActive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns Indicates if the element is disabled in the context
     * @return {Boolean}
     */
    getBDisabled() {
        return this.bDisabled;
    }

    /**
     * Sets Indicates if the element is disabled in the context
     * @param {Boolean} bDisabled Indicates if the element is disabled in the context
     */
    setBDisabled(bDisabled) {
        this['bDisabled'] = bDisabled;
    }
/**
     * Returns The Category for the dropdown or an empty string if not categorized
     * @return {String}
     */
    getSCategory() {
        return this.sCategory;
    }

    /**
     * Sets The Category for the dropdown or an empty string if not categorized
     * @param {String} sCategory The Category for the dropdown or an empty string if not categorized
     */
    setSCategory(sCategory) {
        this['sCategory'] = sCategory;
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
     * Returns The Unique ID of the element
     * @return {String}
     */
    getSValue() {
        return this.sValue;
    }

    /**
     * Sets The Unique ID of the element
     * @param {String} sValue The Unique ID of the element
     */
    setSValue(sValue) {
        this['sValue'] = sValue;
    }
/**
     * Returns The Unique ID of the element
     * @return {String}
     */
    getMValue() {
        return this.mValue;
    }

    /**
     * Sets The Unique ID of the element
     * @param {String} mValue The Unique ID of the element
     */
    setMValue(mValue) {
        this['mValue'] = mValue;
    }
/**
     * Returns Indicates if the element is active
     * @return {Boolean}
     */
    getBActive() {
        return this.bActive;
    }

    /**
     * Sets Indicates if the element is active
     * @param {Boolean} bActive Indicates if the element is active
     */
    setBActive(bActive) {
        this['bActive'] = bActive;
    }

}

/**
 * Indicates if the element is disabled in the context
 * @member {Boolean} bDisabled
 */
CustomAutocompleteElementDisabledResponse.prototype['bDisabled'] = undefined;

/**
 * The Category for the dropdown or an empty string if not categorized
 * @member {String} sCategory
 */
CustomAutocompleteElementDisabledResponse.prototype['sCategory'] = undefined;

/**
 * The Description of the element
 * @member {String} sLabel
 */
CustomAutocompleteElementDisabledResponse.prototype['sLabel'] = undefined;

/**
 * The Unique ID of the element
 * @member {String} sValue
 */
CustomAutocompleteElementDisabledResponse.prototype['sValue'] = undefined;

/**
 * The Unique ID of the element
 * @member {String} mValue
 */
CustomAutocompleteElementDisabledResponse.prototype['mValue'] = undefined;

/**
 * Indicates if the element is active
 * @member {Boolean} bActive
 */
CustomAutocompleteElementDisabledResponse.prototype['bActive'] = undefined;


// Implement CustomAutocompleteElementDisabledResponseAllOf interface:
/**
 * Indicates if the element is disabled in the context
 * @member {Boolean} bDisabled
 */
CustomAutocompleteElementDisabledResponseAllOf.prototype['bDisabled'] = undefined;
// Implement CustomAutocompleteElementResponse interface:
/**
 * The Category for the dropdown or an empty string if not categorized
 * @member {String} sCategory
 */
CustomAutocompleteElementResponse.prototype['sCategory'] = undefined;
/**
 * The Description of the element
 * @member {String} sLabel
 */
CustomAutocompleteElementResponse.prototype['sLabel'] = undefined;
/**
 * The Unique ID of the element
 * @member {String} sValue
 */
CustomAutocompleteElementResponse.prototype['sValue'] = undefined;
/**
 * The Unique ID of the element
 * @member {String} mValue
 */
CustomAutocompleteElementResponse.prototype['mValue'] = undefined;
/**
 * Indicates if the element is active
 * @member {Boolean} bActive
 */
CustomAutocompleteElementResponse.prototype['bActive'] = undefined;




export default CustomAutocompleteElementDisabledResponse;

