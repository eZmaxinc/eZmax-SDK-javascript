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
 * The EzsignfolderReorderV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderReorderV1Request
 * @version 1.1.17
 */
class EzsignfolderReorderV1Request {
    /**
     * Constructs a new <code>EzsignfolderReorderV1Request</code>.
     * Request for POST /1/object/ezsignfolder/{pkiEzsignfolderID}/reorder
     * @alias module:eZmaxAPI/model/EzsignfolderReorderV1Request
     * @param a_pkiEzsigndocumentID {Array.<Number>} 
     */
    constructor(a_pkiEzsigndocumentID) { 
        
        EzsignfolderReorderV1Request.initialize(this, a_pkiEzsigndocumentID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigndocumentID) { 
        obj['a_pkiEzsigndocumentID'] = a_pkiEzsigndocumentID;
    }

    /**
     * Constructs a <code>EzsignfolderReorderV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderReorderV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderReorderV1Request} The populated <code>EzsignfolderReorderV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderReorderV1Request();

            if (data.hasOwnProperty('a_pkiEzsigndocumentID')) {
                obj['a_pkiEzsigndocumentID'] = ApiClient.convertToType(data['a_pkiEzsigndocumentID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderReorderV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderReorderV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderReorderV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsigndocumentID'])) {
            throw new Error("Expected the field `a_pkiEzsigndocumentID` to be an array in the JSON data but got " + data['a_pkiEzsigndocumentID']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsigndocumentID() {
        return this.a_pkiEzsigndocumentID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsigndocumentID
     */
    setAPkiEzsigndocumentID(a_pkiEzsigndocumentID) {
        this['a_pkiEzsigndocumentID'] = a_pkiEzsigndocumentID;
    }

}

EzsignfolderReorderV1Request.RequiredProperties = ["a_pkiEzsigndocumentID"];

/**
 * @member {Array.<Number>} a_pkiEzsigndocumentID
 */
EzsignfolderReorderV1Request.prototype['a_pkiEzsigndocumentID'] = undefined;






export default EzsignfolderReorderV1Request;

