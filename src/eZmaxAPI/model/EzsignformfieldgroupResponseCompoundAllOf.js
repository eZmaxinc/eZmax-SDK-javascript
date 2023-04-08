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
import CustomDropdownElementResponseCompound from './CustomDropdownElementResponseCompound';
import EzsignformfieldResponseCompound from './EzsignformfieldResponseCompound';
import EzsignformfieldgroupsignerResponseCompound from './EzsignformfieldgroupsignerResponseCompound';

/**
 * The EzsignformfieldgroupResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf
 * @version 1.1.17
 */
class EzsignformfieldgroupResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignformfieldgroupResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} 
     * @param a_objEzsignformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} 
     */
    constructor(a_objEzsignformfield, a_objEzsignformfieldgroupsigner) { 
        
        EzsignformfieldgroupResponseCompoundAllOf.initialize(this, a_objEzsignformfield, a_objEzsignformfieldgroupsigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfield, a_objEzsignformfieldgroupsigner) { 
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
        obj['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf} The populated <code>EzsignformfieldgroupResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [EzsignformfieldResponseCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfieldgroupsigner')) {
                obj['a_objEzsignformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsignformfieldgroupsigner'], [EzsignformfieldgroupsignerResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignformfieldgroupResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignformfieldgroupResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignformfieldgroupResponseCompoundAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignformfield']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfield'])) {
                throw new Error("Expected the field `a_objEzsignformfield` to be an array in the JSON data but got " + data['a_objEzsignformfield']);
            }
            // validate the optional field `a_objEzsignformfield` (array)
            for (const item of data['a_objEzsignformfield']) {
                EzsignformfieldResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objDropdownElement']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objDropdownElement'])) {
                throw new Error("Expected the field `a_objDropdownElement` to be an array in the JSON data but got " + data['a_objDropdownElement']);
            }
            // validate the optional field `a_objDropdownElement` (array)
            for (const item of data['a_objDropdownElement']) {
                CustomDropdownElementResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzsignformfieldgroupsigner']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfieldgroupsigner'])) {
                throw new Error("Expected the field `a_objEzsignformfieldgroupsigner` to be an array in the JSON data but got " + data['a_objEzsignformfieldgroupsigner']);
            }
            // validate the optional field `a_objEzsignformfieldgroupsigner` (array)
            for (const item of data['a_objEzsignformfieldgroupsigner']) {
                EzsignformfieldgroupsignerResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
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
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>}
     */
    getAObjEzsignformfieldgroupsigner() {
        return this.a_objEzsignformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} a_objEzsignformfieldgroupsigner
     */
    setAObjEzsignformfieldgroupsigner(a_objEzsignformfieldgroupsigner) {
        this['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }

}

EzsignformfieldgroupResponseCompoundAllOf.RequiredProperties = ["a_objEzsignformfield", "a_objEzsignformfieldgroupsigner"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupResponseCompoundAllOf.prototype['a_objEzsignformfield'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsignformfieldgroupResponseCompoundAllOf.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupResponseCompoundAllOf.prototype['a_objEzsignformfieldgroupsigner'] = undefined;






export default EzsignformfieldgroupResponseCompoundAllOf;

