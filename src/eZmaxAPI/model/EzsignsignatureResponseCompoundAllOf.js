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
import EzsignsignaturecustomdateResponseCompound from './EzsignsignaturecustomdateResponseCompound';

/**
 * The EzsignsignatureResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignsignatureResponseCompoundAllOf
 * @version 1.1.6
 */
class EzsignsignatureResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignsignatureResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignsignatureResponseCompoundAllOf
     */
    constructor() { 
        
        EzsignsignatureResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignsignatureResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureResponseCompoundAllOf} The populated <code>EzsignsignatureResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureResponseCompoundAllOf();

            if (data.hasOwnProperty('bEzsignsignatureCustomdate')) {
                obj['bEzsignsignatureCustomdate'] = ApiClient.convertToType(data['bEzsignsignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturecustomdate')) {
                obj['a_objEzsignsignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsignsignaturecustomdate'], [EzsignsignaturecustomdateResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     * @return {Boolean}
     */
    getBEzsignsignatureCustomdate() {
        return this.bEzsignsignatureCustomdate;
    }

    /**
     * Sets Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     * @param {Boolean} bEzsignsignatureCustomdate Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     */
    setBEzsignsignatureCustomdate(bEzsignsignatureCustomdate) {
        this['bEzsignsignatureCustomdate'] = bEzsignsignatureCustomdate;
    }
/**
     * Returns An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @return {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>}
     */
    getAObjEzsignsignaturecustomdate() {
        return this.a_objEzsignsignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsignsignaturecustomdate(a_objEzsignsignaturecustomdate) {
        this['a_objEzsignsignaturecustomdate'] = a_objEzsignsignaturecustomdate;
    }

}

/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureResponseCompoundAllOf.prototype['bEzsignsignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureResponseCompoundAllOf.prototype['a_objEzsignsignaturecustomdate'] = undefined;






export default EzsignsignatureResponseCompoundAllOf;

