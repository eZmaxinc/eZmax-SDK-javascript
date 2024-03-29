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
import EzmaxinvoicingsummaryinternaldetailResponseCompound from './EzmaxinvoicingsummaryinternaldetailResponseCompound';

/**
 * The EzmaxinvoicingsummaryinternalResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompoundAllOf
 * @version 1.1.18
 */
class EzmaxinvoicingsummaryinternalResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryinternalResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompoundAllOf
     * @param a_objEzmaxinvoicingsummaryinternaldetail {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound>} 
     */
    constructor(a_objEzmaxinvoicingsummaryinternaldetail) { 
        
        EzmaxinvoicingsummaryinternalResponseCompoundAllOf.initialize(this, a_objEzmaxinvoicingsummaryinternaldetail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzmaxinvoicingsummaryinternaldetail) { 
        obj['a_objEzmaxinvoicingsummaryinternaldetail'] = a_objEzmaxinvoicingsummaryinternaldetail;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryinternalResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompoundAllOf} The populated <code>EzmaxinvoicingsummaryinternalResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryinternalResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryinternaldetail')) {
                obj['a_objEzmaxinvoicingsummaryinternaldetail'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryinternaldetail'], [EzmaxinvoicingsummaryinternaldetailResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingsummaryinternalResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingsummaryinternalResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingsummaryinternalResponseCompoundAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzmaxinvoicingsummaryinternaldetail']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingsummaryinternaldetail'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingsummaryinternaldetail` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingsummaryinternaldetail']);
            }
            // validate the optional field `a_objEzmaxinvoicingsummaryinternaldetail` (array)
            for (const item of data['a_objEzmaxinvoicingsummaryinternaldetail']) {
                EzmaxinvoicingsummaryinternaldetailResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryinternaldetail() {
        return this.a_objEzmaxinvoicingsummaryinternaldetail;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound>} a_objEzmaxinvoicingsummaryinternaldetail 
     */
    setAObjEzmaxinvoicingsummaryinternaldetail(a_objEzmaxinvoicingsummaryinternaldetail) {
        this['a_objEzmaxinvoicingsummaryinternaldetail'] = a_objEzmaxinvoicingsummaryinternaldetail;
    }

}

EzmaxinvoicingsummaryinternalResponseCompoundAllOf.RequiredProperties = ["a_objEzmaxinvoicingsummaryinternaldetail"];

/**
 * 
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound>} a_objEzmaxinvoicingsummaryinternaldetail
 */
EzmaxinvoicingsummaryinternalResponseCompoundAllOf.prototype['a_objEzmaxinvoicingsummaryinternaldetail'] = undefined;






export default EzmaxinvoicingsummaryinternalResponseCompoundAllOf;

