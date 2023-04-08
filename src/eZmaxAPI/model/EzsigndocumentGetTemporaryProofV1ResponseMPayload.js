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
import EzsigndocumentlogResponseCompound from './EzsigndocumentlogResponseCompound';

/**
 * The EzsigndocumentGetTemporaryProofV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload
 * @version 1.1.17
 */
class EzsigndocumentGetTemporaryProofV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocumentID}/getTemporaryProof
     * @alias module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload
     * @param a_objEzsigndocumentlog {Array.<module:eZmaxAPI/model/EzsigndocumentlogResponseCompound>} 
     */
    constructor(a_objEzsigndocumentlog) { 
        
        EzsigndocumentGetTemporaryProofV1ResponseMPayload.initialize(this, a_objEzsigndocumentlog);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigndocumentlog) { 
        obj['a_objEzsigndocumentlog'] = a_objEzsigndocumentlog;
    }

    /**
     * Constructs a <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload} The populated <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetTemporaryProofV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigndocumentlog')) {
                obj['a_objEzsigndocumentlog'] = ApiClient.convertToType(data['a_objEzsigndocumentlog'], [EzsigndocumentlogResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetTemporaryProofV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigndocumentlog']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigndocumentlog'])) {
                throw new Error("Expected the field `a_objEzsigndocumentlog` to be an array in the JSON data but got " + data['a_objEzsigndocumentlog']);
            }
            // validate the optional field `a_objEzsigndocumentlog` (array)
            for (const item of data['a_objEzsigndocumentlog']) {
                EzsigndocumentlogResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigndocumentlogResponseCompound>}
     */
    getAObjEzsigndocumentlog() {
        return this.a_objEzsigndocumentlog;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigndocumentlogResponseCompound>} a_objEzsigndocumentlog
     */
    setAObjEzsigndocumentlog(a_objEzsigndocumentlog) {
        this['a_objEzsigndocumentlog'] = a_objEzsigndocumentlog;
    }

}

EzsigndocumentGetTemporaryProofV1ResponseMPayload.RequiredProperties = ["a_objEzsigndocumentlog"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigndocumentlogResponseCompound>} a_objEzsigndocumentlog
 */
EzsigndocumentGetTemporaryProofV1ResponseMPayload.prototype['a_objEzsigndocumentlog'] = undefined;






export default EzsigndocumentGetTemporaryProofV1ResponseMPayload;

