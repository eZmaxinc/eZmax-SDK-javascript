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
import EzsigntemplatesignaturecustomdateResponseCompound from './EzsigntemplatesignaturecustomdateResponseCompound';

/**
 * The EzsigntemplatesignatureResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureResponseCompoundAllOf
 * @version 1.1.18
 */
class EzsigntemplatesignatureResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsigntemplatesignatureResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompoundAllOf
     */
    constructor() { 
        
        EzsigntemplatesignatureResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompoundAllOf} The populated <code>EzsigntemplatesignatureResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureResponseCompoundAllOf();

            if (data.hasOwnProperty('bEzsigntemplatesignatureCustomdate')) {
                obj['bEzsigntemplatesignatureCustomdate'] = ApiClient.convertToType(data['bEzsigntemplatesignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsigntemplatesignaturecustomdate')) {
                obj['a_objEzsigntemplatesignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsigntemplatesignaturecustomdate'], [EzsigntemplatesignaturecustomdateResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignatureResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignatureResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        if (data['a_objEzsigntemplatesignaturecustomdate']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplatesignaturecustomdate'])) {
                throw new Error("Expected the field `a_objEzsigntemplatesignaturecustomdate` to be an array in the JSON data but got " + data['a_objEzsigntemplatesignaturecustomdate']);
            }
            // validate the optional field `a_objEzsigntemplatesignaturecustomdate` (array)
            for (const item of data['a_objEzsigntemplatesignaturecustomdate']) {
                EzsigntemplatesignaturecustomdateResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     * @return {Boolean}
     */
    getBEzsigntemplatesignatureCustomdate() {
        return this.bEzsigntemplatesignatureCustomdate;
    }

    /**
     * Sets Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     * @param {Boolean} bEzsigntemplatesignatureCustomdate Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     */
    setBEzsigntemplatesignatureCustomdate(bEzsigntemplatesignatureCustomdate) {
        this['bEzsigntemplatesignatureCustomdate'] = bEzsigntemplatesignatureCustomdate;
    }
/**
     * Returns An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound>}
     */
    getAObjEzsigntemplatesignaturecustomdate() {
        return this.a_objEzsigntemplatesignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound>} a_objEzsigntemplatesignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsigntemplatesignaturecustomdate(a_objEzsigntemplatesignaturecustomdate) {
        this['a_objEzsigntemplatesignaturecustomdate'] = a_objEzsigntemplatesignaturecustomdate;
    }

}



/**
 * Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
 * @member {Boolean} bEzsigntemplatesignatureCustomdate
 */
EzsigntemplatesignatureResponseCompoundAllOf.prototype['bEzsigntemplatesignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound>} a_objEzsigntemplatesignaturecustomdate
 */
EzsigntemplatesignatureResponseCompoundAllOf.prototype['a_objEzsigntemplatesignaturecustomdate'] = undefined;






export default EzsigntemplatesignatureResponseCompoundAllOf;

