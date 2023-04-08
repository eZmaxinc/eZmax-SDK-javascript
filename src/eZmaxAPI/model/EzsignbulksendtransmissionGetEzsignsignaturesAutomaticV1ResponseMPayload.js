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
import CustomEzsignfolderEzsignsignaturesAutomaticResponse from './CustomEzsignfolderEzsignsignaturesAutomaticResponse';
import FieldEEzsignsignatureType from './FieldEEzsignsignatureType';

/**
 * The EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload
 * @version 1.1.17
 */
class EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getEzsignsignaturesAutomatic
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload
     * @param a_eEzsignsignatureType {Array.<module:eZmaxAPI/model/FieldEEzsignsignatureType>} All eEzsignsignatureType contained in the response
     * @param a_objEzsignfolder {Array.<module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse>} 
     */
    constructor(a_eEzsignsignatureType, a_objEzsignfolder) { 
        
        EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload.initialize(this, a_eEzsignsignatureType, a_objEzsignfolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_eEzsignsignatureType, a_objEzsignfolder) { 
        obj['a_eEzsignsignatureType'] = a_eEzsignsignatureType;
        obj['a_objEzsignfolder'] = a_objEzsignfolder;
    }

    /**
     * Constructs a <code>EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload} The populated <code>EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload();

            if (data.hasOwnProperty('a_eEzsignsignatureType')) {
                obj['a_eEzsignsignatureType'] = ApiClient.convertToType(data['a_eEzsignsignatureType'], [FieldEEzsignsignatureType]);
            }
            if (data.hasOwnProperty('a_objEzsignfolder')) {
                obj['a_objEzsignfolder'] = ApiClient.convertToType(data['a_objEzsignfolder'], [CustomEzsignfolderEzsignsignaturesAutomaticResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_eEzsignsignatureType'])) {
            throw new Error("Expected the field `a_eEzsignsignatureType` to be an array in the JSON data but got " + data['a_eEzsignsignatureType']);
        }
        if (data['a_objEzsignfolder']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignfolder'])) {
                throw new Error("Expected the field `a_objEzsignfolder` to be an array in the JSON data but got " + data['a_objEzsignfolder']);
            }
            // validate the optional field `a_objEzsignfolder` (array)
            for (const item of data['a_objEzsignfolder']) {
                CustomEzsignfolderEzsignsignaturesAutomaticResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns All eEzsignsignatureType contained in the response
     * @return {Array.<module:eZmaxAPI/model/FieldEEzsignsignatureType>}
     */
    getAEEzsignsignatureType() {
        return this.a_eEzsignsignatureType;
    }

    /**
     * Sets All eEzsignsignatureType contained in the response
     * @param {Array.<module:eZmaxAPI/model/FieldEEzsignsignatureType>} a_eEzsignsignatureType All eEzsignsignatureType contained in the response
     */
    setAEEzsignsignatureType(a_eEzsignsignatureType) {
        this['a_eEzsignsignatureType'] = a_eEzsignsignatureType;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse>}
     */
    getAObjEzsignfolder() {
        return this.a_objEzsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse>} a_objEzsignfolder
     */
    setAObjEzsignfolder(a_objEzsignfolder) {
        this['a_objEzsignfolder'] = a_objEzsignfolder;
    }

}

EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload.RequiredProperties = ["a_eEzsignsignatureType", "a_objEzsignfolder"];

/**
 * All eEzsignsignatureType contained in the response
 * @member {Array.<module:eZmaxAPI/model/FieldEEzsignsignatureType>} a_eEzsignsignatureType
 */
EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload.prototype['a_eEzsignsignatureType'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfolderEzsignsignaturesAutomaticResponse>} a_objEzsignfolder
 */
EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload.prototype['a_objEzsignfolder'] = undefined;






export default EzsignbulksendtransmissionGetEzsignsignaturesAutomaticV1ResponseMPayload;

