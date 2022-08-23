/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
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
 * @version 1.1.10
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

/**
 * @member {Array.<Number>} a_pkiEzsigntemplatesignatureID
 */
EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload.prototype['a_pkiEzsigntemplatesignatureID'] = undefined;






export default EzsigntemplatedocumentEditEzsigntemplatesignaturesV1ResponseMPayload;

