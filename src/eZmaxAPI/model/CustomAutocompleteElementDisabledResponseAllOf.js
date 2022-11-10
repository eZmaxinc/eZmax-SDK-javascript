/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomAutocompleteElementDisabledResponseAllOf model module.
 * @module eZmaxAPI/model/CustomAutocompleteElementDisabledResponseAllOf
 * @version 1.1.16
 */
class CustomAutocompleteElementDisabledResponseAllOf {
    /**
     * Constructs a new <code>CustomAutocompleteElementDisabledResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponseAllOf
     * @param bDisabled {Boolean} Indicates if the element is disabled in the context
     */
    constructor(bDisabled) { 
        
        CustomAutocompleteElementDisabledResponseAllOf.initialize(this, bDisabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bDisabled) { 
        obj['bDisabled'] = bDisabled;
    }

    /**
     * Constructs a <code>CustomAutocompleteElementDisabledResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomAutocompleteElementDisabledResponseAllOf} The populated <code>CustomAutocompleteElementDisabledResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAutocompleteElementDisabledResponseAllOf();

            if (data.hasOwnProperty('bDisabled')) {
                obj['bDisabled'] = ApiClient.convertToType(data['bDisabled'], 'Boolean');
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

}

/**
 * Indicates if the element is disabled in the context
 * @member {Boolean} bDisabled
 */
CustomAutocompleteElementDisabledResponseAllOf.prototype['bDisabled'] = undefined;






export default CustomAutocompleteElementDisabledResponseAllOf;

