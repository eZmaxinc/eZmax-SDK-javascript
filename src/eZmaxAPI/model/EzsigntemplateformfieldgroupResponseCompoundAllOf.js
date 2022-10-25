/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomDropdownElementResponseCompound from './CustomDropdownElementResponseCompound';
import EzsigntemplateformfieldResponseCompound from './EzsigntemplateformfieldResponseCompound';
import EzsigntemplateformfieldgroupsignerResponseCompound from './EzsigntemplateformfieldgroupsignerResponseCompound';

/**
 * The EzsigntemplateformfieldgroupResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompoundAllOf
 * @version 1.1.11
 */
class EzsigntemplateformfieldgroupResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompoundAllOf
     * @param a_objEzsigntemplateformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} 
     * @param a_objEzsigntemplateformfield {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} 
     */
    constructor(a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield) { 
        
        EzsigntemplateformfieldgroupResponseCompoundAllOf.initialize(this, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield) { 
        obj['a_objEzsigntemplateformfieldgroupsigner'] = a_objEzsigntemplateformfieldgroupsigner;
        obj['a_objEzsigntemplateformfield'] = a_objEzsigntemplateformfield;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompoundAllOf} The populated <code>EzsigntemplateformfieldgroupResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objEzsigntemplateformfieldgroupsigner')) {
                obj['a_objEzsigntemplateformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsigntemplateformfieldgroupsigner'], [EzsigntemplateformfieldgroupsignerResponseCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsigntemplateformfield')) {
                obj['a_objEzsigntemplateformfield'] = ApiClient.convertToType(data['a_objEzsigntemplateformfield'], [EzsigntemplateformfieldResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>}
     */
    getAObjEzsigntemplateformfieldgroupsigner() {
        return this.a_objEzsigntemplateformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} a_objEzsigntemplateformfieldgroupsigner
     */
    setAObjEzsigntemplateformfieldgroupsigner(a_objEzsigntemplateformfieldgroupsigner) {
        this['a_objEzsigntemplateformfieldgroupsigner'] = a_objEzsigntemplateformfieldgroupsigner;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>}
     */
    getAObjDropdownElement() {
        return this.a_objDropdownElement;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
     */
    setAObjDropdownElement(a_objDropdownElement) {
        this['a_objDropdownElement'] = a_objDropdownElement;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>}
     */
    getAObjEzsigntemplateformfield() {
        return this.a_objEzsigntemplateformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} a_objEzsigntemplateformfield
     */
    setAObjEzsigntemplateformfield(a_objEzsigntemplateformfield) {
        this['a_objEzsigntemplateformfield'] = a_objEzsigntemplateformfield;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} a_objEzsigntemplateformfieldgroupsigner
 */
EzsigntemplateformfieldgroupResponseCompoundAllOf.prototype['a_objEzsigntemplateformfieldgroupsigner'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsigntemplateformfieldgroupResponseCompoundAllOf.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} a_objEzsigntemplateformfield
 */
EzsigntemplateformfieldgroupResponseCompoundAllOf.prototype['a_objEzsigntemplateformfield'] = undefined;






export default EzsigntemplateformfieldgroupResponseCompoundAllOf;

