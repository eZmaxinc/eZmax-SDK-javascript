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

/**
 * The EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload</code>.
     * Payload for PUT /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/editEzsigntemplatesignatures
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload
     * @param a_pkiEzsigntemplatesignatureID {Array.<Number>} 
     */
    constructor(a_pkiEzsigntemplatesignatureID) { 
        
        EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatesignatureID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatesignatureID) { 
        obj['a_pkiEzsigntemplatesignatureID'] = a_pkiEzsigntemplatesignatureID;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload} The populated <code>EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatesignatureID')) {
                obj['a_pkiEzsigntemplatesignatureID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatesignatureID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsigntemplatesignatureID'])) {
            throw new Error("Expected the field `a_pkiEzsigntemplatesignatureID` to be an array in the JSON data but got " + data['a_pkiEzsigntemplatesignatureID']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatesignatureID() {
        return this.a_pkiEzsigntemplatesignatureID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsigntemplatesignatureID
     */
    setAPkiEzsigntemplatesignatureID(a_pkiEzsigntemplatesignatureID) {
        this['a_pkiEzsigntemplatesignatureID'] = a_pkiEzsigntemplatesignatureID;
    }

}

EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload.RequiredProperties = ["a_pkiEzsigntemplatesignatureID"];

/**
 * @member {Array.<Number>} a_pkiEzsigntemplatesignatureID
 */
EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload.prototype['a_pkiEzsigntemplatesignatureID'] = undefined;






export default EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload;

