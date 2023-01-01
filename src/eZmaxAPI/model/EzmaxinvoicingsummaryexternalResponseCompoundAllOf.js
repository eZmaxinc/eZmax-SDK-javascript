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
import EzmaxinvoicingsummaryexternaldetailResponseCompound from './EzmaxinvoicingsummaryexternaldetailResponseCompound';

/**
 * The EzmaxinvoicingsummaryexternalResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompoundAllOf
 * @version 1.1.17
 */
class EzmaxinvoicingsummaryexternalResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryexternalResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompoundAllOf
     * @param a_objEzmaxinvoicingsummaryexternaldetail {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound>} 
     */
    constructor(a_objEzmaxinvoicingsummaryexternaldetail) { 
        
        EzmaxinvoicingsummaryexternalResponseCompoundAllOf.initialize(this, a_objEzmaxinvoicingsummaryexternaldetail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzmaxinvoicingsummaryexternaldetail) { 
        obj['a_objEzmaxinvoicingsummaryexternaldetail'] = a_objEzmaxinvoicingsummaryexternaldetail;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryexternalResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompoundAllOf} The populated <code>EzmaxinvoicingsummaryexternalResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryexternalResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryexternaldetail')) {
                obj['a_objEzmaxinvoicingsummaryexternaldetail'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryexternaldetail'], [EzmaxinvoicingsummaryexternaldetailResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingsummaryexternalResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingsummaryexternalResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingsummaryexternalResponseCompoundAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzmaxinvoicingsummaryexternaldetail']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingsummaryexternaldetail'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingsummaryexternaldetail` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingsummaryexternaldetail']);
            }
            // validate the optional field `a_objEzmaxinvoicingsummaryexternaldetail` (array)
            for (const item of data['a_objEzmaxinvoicingsummaryexternaldetail']) {
                EzmaxinvoicingsummaryexternaldetailResponseCompound.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryexternaldetail() {
        return this.a_objEzmaxinvoicingsummaryexternaldetail;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound>} a_objEzmaxinvoicingsummaryexternaldetail
     */
    setAObjEzmaxinvoicingsummaryexternaldetail(a_objEzmaxinvoicingsummaryexternaldetail) {
        this['a_objEzmaxinvoicingsummaryexternaldetail'] = a_objEzmaxinvoicingsummaryexternaldetail;
    }

}

EzmaxinvoicingsummaryexternalResponseCompoundAllOf.RequiredProperties = ["a_objEzmaxinvoicingsummaryexternaldetail"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound>} a_objEzmaxinvoicingsummaryexternaldetail
 */
EzmaxinvoicingsummaryexternalResponseCompoundAllOf.prototype['a_objEzmaxinvoicingsummaryexternaldetail'] = undefined;






export default EzmaxinvoicingsummaryexternalResponseCompoundAllOf;

