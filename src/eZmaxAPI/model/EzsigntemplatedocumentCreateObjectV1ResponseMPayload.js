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
 * The EzsigntemplatedocumentCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatedocumentCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplatedocument
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1ResponseMPayload
     * @param a_pkiEzsigntemplatedocumentID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsigntemplatedocumentID) { 
        
        EzsigntemplatedocumentCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatedocumentID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatedocumentID) { 
        obj['a_pkiEzsigntemplatedocumentID'] = a_pkiEzsigntemplatedocumentID;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1ResponseMPayload} The populated <code>EzsigntemplatedocumentCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatedocumentID')) {
                obj['a_pkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatedocumentID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsigntemplatedocumentID'])) {
            throw new Error("Expected the field `a_pkiEzsigntemplatedocumentID` to be an array in the JSON data but got " + data['a_pkiEzsigntemplatedocumentID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatedocumentID() {
        return this.a_pkiEzsigntemplatedocumentID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplatedocumentID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplatedocumentID(a_pkiEzsigntemplatedocumentID) {
        this['a_pkiEzsigntemplatedocumentID'] = a_pkiEzsigntemplatedocumentID;
    }

}

EzsigntemplatedocumentCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiEzsigntemplatedocumentID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplatedocumentID
 */
EzsigntemplatedocumentCreateObjectV1ResponseMPayload.prototype['a_pkiEzsigntemplatedocumentID'] = undefined;






export default EzsigntemplatedocumentCreateObjectV1ResponseMPayload;

