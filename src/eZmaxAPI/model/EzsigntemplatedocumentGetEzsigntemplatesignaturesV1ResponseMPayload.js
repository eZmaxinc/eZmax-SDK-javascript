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
import EzsigntemplatesignatureResponseCompound from './EzsigntemplatesignatureResponseCompound';

/**
 * The EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocument}/getEzsigntemplatesignatures
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload
     * @param a_objEzsigntemplatesignature {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound>} 
     */
    constructor(a_objEzsigntemplatesignature) { 
        
        EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload.initialize(this, a_objEzsigntemplatesignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatesignature) { 
        obj['a_objEzsigntemplatesignature'] = a_objEzsigntemplatesignature;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload} The populated <code>EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplatesignature')) {
                obj['a_objEzsigntemplatesignature'] = ApiClient.convertToType(data['a_objEzsigntemplatesignature'], [EzsigntemplatesignatureResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntemplatesignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplatesignature'])) {
                throw new Error("Expected the field `a_objEzsigntemplatesignature` to be an array in the JSON data but got " + data['a_objEzsigntemplatesignature']);
            }
            // validate the optional field `a_objEzsigntemplatesignature` (array)
            for (const item of data['a_objEzsigntemplatesignature']) {
                EzsigntemplatesignatureResponseCompound.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound>}
     */
    getAObjEzsigntemplatesignature() {
        return this.a_objEzsigntemplatesignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound>} a_objEzsigntemplatesignature
     */
    setAObjEzsigntemplatesignature(a_objEzsigntemplatesignature) {
        this['a_objEzsigntemplatesignature'] = a_objEzsigntemplatesignature;
    }

}

EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload.RequiredProperties = ["a_objEzsigntemplatesignature"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound>} a_objEzsigntemplatesignature
 */
EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload.prototype['a_objEzsigntemplatesignature'] = undefined;






export default EzsigntemplatedocumentGetEzsigntemplatesignaturesV1ResponseMPayload;

