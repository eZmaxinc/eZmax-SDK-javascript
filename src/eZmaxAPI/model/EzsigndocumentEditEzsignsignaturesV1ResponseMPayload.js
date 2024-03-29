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

/**
 * The EzsigndocumentEditEzsignsignaturesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentEditEzsignsignaturesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentEditEzsignsignaturesV1ResponseMPayload</code>.
     * Payload for PUT /1/object/ezsigndocument/{pkiEzsigndocumentID}/editEzsignsignatures
     * @alias module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload
     * @param a_pkiEzsignsignatureID {Array.<Number>} 
     */
    constructor(a_pkiEzsignsignatureID) { 
        
        EzsigndocumentEditEzsignsignaturesV1ResponseMPayload.initialize(this, a_pkiEzsignsignatureID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignsignatureID) { 
        obj['a_pkiEzsignsignatureID'] = a_pkiEzsignsignatureID;
    }

    /**
     * Constructs a <code>EzsigndocumentEditEzsignsignaturesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1ResponseMPayload} The populated <code>EzsigndocumentEditEzsignsignaturesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentEditEzsignsignaturesV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignsignatureID')) {
                obj['a_pkiEzsignsignatureID'] = ApiClient.convertToType(data['a_pkiEzsignsignatureID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentEditEzsignsignaturesV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentEditEzsignsignaturesV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentEditEzsignsignaturesV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsignsignatureID'])) {
            throw new Error("Expected the field `a_pkiEzsignsignatureID` to be an array in the JSON data but got " + data['a_pkiEzsignsignatureID']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsignsignatureID() {
        return this.a_pkiEzsignsignatureID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsignsignatureID
     */
    setAPkiEzsignsignatureID(a_pkiEzsignsignatureID) {
        this['a_pkiEzsignsignatureID'] = a_pkiEzsignsignatureID;
    }

}

EzsigndocumentEditEzsignsignaturesV1ResponseMPayload.RequiredProperties = ["a_pkiEzsignsignatureID"];

/**
 * @member {Array.<Number>} a_pkiEzsignsignatureID
 */
EzsigndocumentEditEzsignsignaturesV1ResponseMPayload.prototype['a_pkiEzsignsignatureID'] = undefined;






export default EzsigndocumentEditEzsignsignaturesV1ResponseMPayload;

