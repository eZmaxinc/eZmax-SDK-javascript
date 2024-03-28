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
 * The EzsignfolderCreateObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderCreateObjectV2ResponseMPayload
 * @version 1.2.0
 */
class EzsignfolderCreateObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderCreateObjectV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsignfolder
     * @alias module:eZmaxAPI/model/EzsignfolderCreateObjectV2ResponseMPayload
     * @param a_pkiEzsignfolderID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignfolderID) { 
        
        EzsignfolderCreateObjectV2ResponseMPayload.initialize(this, a_pkiEzsignfolderID);
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
     * Constructs a <code>EzsignfolderCreateObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderCreateObjectV2ResponseMPayload} The populated <code>EzsignfolderCreateObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderCreateObjectV2ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignfolderID')) {
                obj['a_pkiEzsignfolderID'] = ApiClient.convertToType(data['a_pkiEzsignfolderID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderCreateObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderCreateObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderCreateObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
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
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignfolderID() {
        return this.a_pkiEzsignfolderID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignfolderID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignfolderID(a_pkiEzsignfolderID) {
        this['a_pkiEzsignfolderID'] = a_pkiEzsignfolderID;
    }

}

EzsignfolderCreateObjectV2ResponseMPayload.RequiredProperties = ["a_pkiEzsignfolderID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignfolderID
 */
EzsignfolderCreateObjectV2ResponseMPayload.prototype['a_pkiEzsignfolderID'] = undefined;






export default EzsignfolderCreateObjectV2ResponseMPayload;

