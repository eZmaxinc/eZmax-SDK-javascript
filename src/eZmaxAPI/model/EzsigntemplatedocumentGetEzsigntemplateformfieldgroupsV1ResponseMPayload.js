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
import EzsigntemplateformfieldgroupResponseCompound from './EzsigntemplateformfieldgroupResponseCompound';

/**
 * The EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocument}/getEzsigntemplateformfieldgroups
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload
     * @param a_objEzsigntemplateformfieldgroup {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound>} 
     */
    constructor(a_objEzsigntemplateformfieldgroup) { 
        
        EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload.initialize(this, a_objEzsigntemplateformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplateformfieldgroup) { 
        obj['a_objEzsigntemplateformfieldgroup'] = a_objEzsigntemplateformfieldgroup;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} The populated <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplateformfieldgroup')) {
                obj['a_objEzsigntemplateformfieldgroup'] = ApiClient.convertToType(data['a_objEzsigntemplateformfieldgroup'], [EzsigntemplateformfieldgroupResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntemplateformfieldgroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplateformfieldgroup'])) {
                throw new Error("Expected the field `a_objEzsigntemplateformfieldgroup` to be an array in the JSON data but got " + data['a_objEzsigntemplateformfieldgroup']);
            }
            // validate the optional field `a_objEzsigntemplateformfieldgroup` (array)
            for (const item of data['a_objEzsigntemplateformfieldgroup']) {
                EzsigntemplateformfieldgroupResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound>}
     */
    getAObjEzsigntemplateformfieldgroup() {
        return this.a_objEzsigntemplateformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound>} a_objEzsigntemplateformfieldgroup
     */
    setAObjEzsigntemplateformfieldgroup(a_objEzsigntemplateformfieldgroup) {
        this['a_objEzsigntemplateformfieldgroup'] = a_objEzsigntemplateformfieldgroup;
    }

}

EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload.RequiredProperties = ["a_objEzsigntemplateformfieldgroup"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound>} a_objEzsigntemplateformfieldgroup
 */
EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload.prototype['a_objEzsigntemplateformfieldgroup'] = undefined;






export default EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload;

