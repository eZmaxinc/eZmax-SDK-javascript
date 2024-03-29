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
import EzsignformfieldgroupResponseCompound from './EzsignformfieldgroupResponseCompound';
import EzsignsignatureResponseCompound from './EzsignsignatureResponseCompound';

/**
 * The EzsigndocumentGetCompletedElementsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetCompletedElementsV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentGetCompletedElementsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetCompletedElementsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocumentID}/getCompletedElements
     * @alias module:eZmaxAPI/model/EzsigndocumentGetCompletedElementsV1ResponseMPayload
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} 
     * @param a_objEzsignformfieldgroup {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} 
     */
    constructor(a_objEzsignsignature, a_objEzsignformfieldgroup) { 
        
        EzsigndocumentGetCompletedElementsV1ResponseMPayload.initialize(this, a_objEzsignsignature, a_objEzsignformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignature, a_objEzsignformfieldgroup) { 
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
        obj['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

    /**
     * Constructs a <code>EzsigndocumentGetCompletedElementsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetCompletedElementsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetCompletedElementsV1ResponseMPayload} The populated <code>EzsigndocumentGetCompletedElementsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetCompletedElementsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [EzsignsignatureResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfieldgroup')) {
                obj['a_objEzsignformfieldgroup'] = ApiClient.convertToType(data['a_objEzsignformfieldgroup'], [EzsignformfieldgroupResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetCompletedElementsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetCompletedElementsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetCompletedElementsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignsignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignature'])) {
                throw new Error("Expected the field `a_objEzsignsignature` to be an array in the JSON data but got " + data['a_objEzsignsignature']);
            }
            // validate the optional field `a_objEzsignsignature` (array)
            for (const item of data['a_objEzsignsignature']) {
                EzsignsignatureResponseCompound.validateJSON(item);
            };
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
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
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

EzsigndocumentGetCompletedElementsV1ResponseMPayload.RequiredProperties = ["a_objEzsignsignature", "a_objEzsignformfieldgroup"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
 */
EzsigndocumentGetCompletedElementsV1ResponseMPayload.prototype['a_objEzsignsignature'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} a_objEzsignformfieldgroup
 */
EzsigndocumentGetCompletedElementsV1ResponseMPayload.prototype['a_objEzsignformfieldgroup'] = undefined;






export default EzsigndocumentGetCompletedElementsV1ResponseMPayload;

