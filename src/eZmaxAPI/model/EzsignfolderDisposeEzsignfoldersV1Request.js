/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfolderDisposeEzsignfoldersV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderDisposeEzsignfoldersV1Request
 * @version 1.2.0
 */
class EzsignfolderDisposeEzsignfoldersV1Request {
    /**
     * Constructs a new <code>EzsignfolderDisposeEzsignfoldersV1Request</code>.
     * Request for POST /1/object/ezsignfolder/disposeEzsignfolders
     * @alias module:eZmaxAPI/model/EzsignfolderDisposeEzsignfoldersV1Request
     * @param a_pkiEzsignfolderID {Array.<Number>} 
     */
    constructor(a_pkiEzsignfolderID) { 
        
        EzsignfolderDisposeEzsignfoldersV1Request.initialize(this, a_pkiEzsignfolderID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignfolderID) { 
        obj['a_pkiEzsignfolderID'] = a_pkiEzsignfolderID;
    }

    /**
     * Constructs a <code>EzsignfolderDisposeEzsignfoldersV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderDisposeEzsignfoldersV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderDisposeEzsignfoldersV1Request} The populated <code>EzsignfolderDisposeEzsignfoldersV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderDisposeEzsignfoldersV1Request();

            if (data.hasOwnProperty('a_pkiEzsignfolderID')) {
                obj['a_pkiEzsignfolderID'] = ApiClient.convertToType(data['a_pkiEzsignfolderID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderDisposeEzsignfoldersV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderDisposeEzsignfoldersV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderDisposeEzsignfoldersV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsignfolderID'])) {
            throw new Error("Expected the field `a_pkiEzsignfolderID` to be an array in the JSON data but got " + data['a_pkiEzsignfolderID']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsignfolderID() {
        return this.a_pkiEzsignfolderID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsignfolderID
     */
    setAPkiEzsignfolderID(a_pkiEzsignfolderID) {
        this['a_pkiEzsignfolderID'] = a_pkiEzsignfolderID;
    }

}

EzsignfolderDisposeEzsignfoldersV1Request.RequiredProperties = ["a_pkiEzsignfolderID"];

/**
 * @member {Array.<Number>} a_pkiEzsignfolderID
 */
EzsignfolderDisposeEzsignfoldersV1Request.prototype['a_pkiEzsignfolderID'] = undefined;






export default EzsignfolderDisposeEzsignfoldersV1Request;

