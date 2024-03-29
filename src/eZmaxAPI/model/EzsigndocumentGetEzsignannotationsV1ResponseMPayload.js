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
import EzsignannotationResponseCompound from './EzsignannotationResponseCompound';

/**
 * The EzsigndocumentGetEzsignannotationsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignannotationsV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentGetEzsignannotationsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignannotationsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocument}/getEzsignannotations
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignannotationsV1ResponseMPayload
     * @param a_objEzsignannotation {Array.<module:eZmaxAPI/model/EzsignannotationResponseCompound>} 
     */
    constructor(a_objEzsignannotation) { 
        
        EzsigndocumentGetEzsignannotationsV1ResponseMPayload.initialize(this, a_objEzsignannotation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignannotation) { 
        obj['a_objEzsignannotation'] = a_objEzsignannotation;
    }

    /**
     * Constructs a <code>EzsigndocumentGetEzsignannotationsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignannotationsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignannotationsV1ResponseMPayload} The populated <code>EzsigndocumentGetEzsignannotationsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignannotationsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignannotation')) {
                obj['a_objEzsignannotation'] = ApiClient.convertToType(data['a_objEzsignannotation'], [EzsignannotationResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignannotationsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignannotationsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignannotationsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignannotation']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignannotation'])) {
                throw new Error("Expected the field `a_objEzsignannotation` to be an array in the JSON data but got " + data['a_objEzsignannotation']);
            }
            // validate the optional field `a_objEzsignannotation` (array)
            for (const item of data['a_objEzsignannotation']) {
                EzsignannotationResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignannotationResponseCompound>}
     */
    getAObjEzsignannotation() {
        return this.a_objEzsignannotation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignannotationResponseCompound>} a_objEzsignannotation
     */
    setAObjEzsignannotation(a_objEzsignannotation) {
        this['a_objEzsignannotation'] = a_objEzsignannotation;
    }

}

EzsigndocumentGetEzsignannotationsV1ResponseMPayload.RequiredProperties = ["a_objEzsignannotation"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignannotationResponseCompound>} a_objEzsignannotation
 */
EzsigndocumentGetEzsignannotationsV1ResponseMPayload.prototype['a_objEzsignannotation'] = undefined;






export default EzsigndocumentGetEzsignannotationsV1ResponseMPayload;

