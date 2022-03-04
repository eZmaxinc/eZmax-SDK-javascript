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
import EzsignformfieldgroupRequestCompound from './EzsignformfieldgroupRequestCompound';

/**
 * The EzsigndocumentEditEzsignformfieldgroupsV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentEditEzsignformfieldgroupsV1Request
 * @version 1.1.5
 */
class EzsigndocumentEditEzsignformfieldgroupsV1Request {
    /**
     * Constructs a new <code>EzsigndocumentEditEzsignformfieldgroupsV1Request</code>.
     * Request for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/editEzsignformfieldgroups API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentEditEzsignformfieldgroupsV1Request
     * @param a_objEzsignformfieldgroup {Array.<module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound>} 
     */
    constructor(a_objEzsignformfieldgroup) { 
        
        EzsigndocumentEditEzsignformfieldgroupsV1Request.initialize(this, a_objEzsignformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfieldgroup) { 
        obj['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

    /**
     * Constructs a <code>EzsigndocumentEditEzsignformfieldgroupsV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignformfieldgroupsV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentEditEzsignformfieldgroupsV1Request} The populated <code>EzsigndocumentEditEzsignformfieldgroupsV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentEditEzsignformfieldgroupsV1Request();

            if (data.hasOwnProperty('a_objEzsignformfieldgroup')) {
                obj['a_objEzsignformfieldgroup'] = ApiClient.convertToType(data['a_objEzsignformfieldgroup'], [EzsignformfieldgroupRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound>}
     */
    getAObjEzsignformfieldgroup() {
        return this.a_objEzsignformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound>} a_objEzsignformfieldgroup
     */
    setAObjEzsignformfieldgroup(a_objEzsignformfieldgroup) {
        this['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound>} a_objEzsignformfieldgroup
 */
EzsigndocumentEditEzsignformfieldgroupsV1Request.prototype['a_objEzsignformfieldgroup'] = undefined;






export default EzsigndocumentEditEzsignformfieldgroupsV1Request;
