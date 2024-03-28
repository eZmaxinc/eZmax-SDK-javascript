/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldgroupResponseCompound from './EzsignformfieldgroupResponseCompound';

/**
 * The EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload
 * @version 1.2.0
 */
class EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocument}/getEzsignformfieldgroups
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload
     * @param a_objEzsignformfieldgroup {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} 
     */
    constructor(a_objEzsignformfieldgroup) { 
        
        EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.initialize(this, a_objEzsignformfieldgroup);
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
     * Constructs a <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} The populated <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignformfieldgroup')) {
                obj['a_objEzsignformfieldgroup'] = ApiClient.convertToType(data['a_objEzsignformfieldgroup'], [EzsignformfieldgroupResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignformfieldgroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfieldgroup'])) {
                throw new Error("Expected the field `a_objEzsignformfieldgroup` to be an array in the JSON data but got " + data['a_objEzsignformfieldgroup']);
            }
            // validate the optional field `a_objEzsignformfieldgroup` (array)
            for (const item of data['a_objEzsignformfieldgroup']) {
                EzsignformfieldgroupResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>}
     */
    getAObjEzsignformfieldgroup() {
        return this.a_objEzsignformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} a_objEzsignformfieldgroup
     */
    setAObjEzsignformfieldgroup(a_objEzsignformfieldgroup) {
        this['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

}

EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.RequiredProperties = ["a_objEzsignformfieldgroup"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} a_objEzsignformfieldgroup
 */
EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.prototype['a_objEzsignformfieldgroup'] = undefined;






export default EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload;

