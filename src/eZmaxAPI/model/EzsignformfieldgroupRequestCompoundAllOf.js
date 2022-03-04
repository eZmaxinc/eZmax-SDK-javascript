/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomDropdownElementRequestCompound from './CustomDropdownElementRequestCompound';
import EzsignformfieldRequestCompound from './EzsignformfieldRequestCompound';
import EzsignformfieldgroupsignerRequestCompound from './EzsignformfieldgroupsignerRequestCompound';

/**
 * The EzsignformfieldgroupRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupRequestCompoundAllOf
 * @version 1.1.5
 */
class EzsignformfieldgroupRequestCompoundAllOf {
    /**
     * Constructs a new <code>EzsignformfieldgroupRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupRequestCompoundAllOf
     * @param a_objEzsignformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} 
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} 
     */
    constructor(a_objEzsignformfieldgroupsigner, a_objEzsignformfield) { 
        
        EzsignformfieldgroupRequestCompoundAllOf.initialize(this, a_objEzsignformfieldgroupsigner, a_objEzsignformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfieldgroupsigner, a_objEzsignformfield) { 
        obj['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompoundAllOf} The populated <code>EzsignformfieldgroupRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupRequestCompoundAllOf();

            if (data.hasOwnProperty('a_objEzsignformfieldgroupsigner')) {
                obj['a_objEzsignformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsignformfieldgroupsigner'], [EzsignformfieldgroupsignerRequestCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementRequestCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [EzsignformfieldRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>}
     */
    getAObjEzsignformfieldgroupsigner() {
        return this.a_objEzsignformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} a_objEzsignformfieldgroupsigner
     */
    setAObjEzsignformfieldgroupsigner(a_objEzsignformfieldgroupsigner) {
        this['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>}
     */
    getAObjDropdownElement() {
        return this.a_objDropdownElement;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>} a_objDropdownElement
     */
    setAObjDropdownElement(a_objDropdownElement) {
        this['a_objDropdownElement'] = a_objDropdownElement;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objEzsignformfieldgroupsigner'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>} a_objDropdownElement
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objEzsignformfield'] = undefined;






export default EzsignformfieldgroupRequestCompoundAllOf;

