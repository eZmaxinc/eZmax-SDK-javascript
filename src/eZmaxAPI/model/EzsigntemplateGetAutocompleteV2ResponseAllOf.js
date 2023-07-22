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
import EzsigntemplateGetAutocompleteV2ResponseMPayload from './EzsigntemplateGetAutocompleteV2ResponseMPayload';

/**
 * The EzsigntemplateGetAutocompleteV2ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseAllOf
 * @version 1.1.18
 */
class EzsigntemplateGetAutocompleteV2ResponseAllOf {
    /**
     * Constructs a new <code>EzsigntemplateGetAutocompleteV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigntemplateGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsigntemplateGetAutocompleteV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseAllOf} The populated <code>EzsigntemplateGetAutocompleteV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateGetAutocompleteV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigntemplateGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateGetAutocompleteV2ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateGetAutocompleteV2ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateGetAutocompleteV2ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsigntemplateGetAutocompleteV2ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsigntemplateGetAutocompleteV2ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateGetAutocompleteV2ResponseMPayload} mPayload
 */
EzsigntemplateGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigntemplateGetAutocompleteV2ResponseAllOf;

