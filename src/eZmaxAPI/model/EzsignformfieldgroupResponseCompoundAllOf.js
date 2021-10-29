/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldResponse from './EzsignformfieldResponse';

/**
 * The EzsignformfieldgroupResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf
 * @version 1.1.3
 */
class EzsignformfieldgroupResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignformfieldgroupResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupResponseCompoundAllOf
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/EzsignformfieldResponse>} 
     */
    constructor(a_objEzsignformfield) { 
        
        EzsignformfieldgroupResponseCompoundAllOf.initialize(this, a_objEzsignformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfield) { 
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
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
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [EzsignformfieldResponse]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldResponse>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldResponse>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldResponse>} a_objEzsignformfield
 */
EzsignformfieldgroupResponseCompoundAllOf.prototype['a_objEzsignformfield'] = undefined;






export default EzsignformfieldgroupResponseCompoundAllOf;

