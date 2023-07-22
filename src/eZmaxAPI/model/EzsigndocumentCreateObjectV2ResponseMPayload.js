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
 * The EzsigndocumentCreateObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentCreateObjectV2ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentCreateObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentCreateObjectV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsigndocument
     * @alias module:eZmaxAPI/model/EzsigndocumentCreateObjectV2ResponseMPayload
     * @param a_pkiEzsigndocumentID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsigndocumentID) { 
        
        EzsigndocumentCreateObjectV2ResponseMPayload.initialize(this, a_pkiEzsigndocumentID);
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
     * Constructs a <code>EzsigndocumentCreateObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2ResponseMPayload} The populated <code>EzsigndocumentCreateObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentCreateObjectV2ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigndocumentID')) {
                obj['a_pkiEzsigndocumentID'] = ApiClient.convertToType(data['a_pkiEzsigndocumentID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentCreateObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentCreateObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentCreateObjectV2ResponseMPayload.RequiredProperties) {
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
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigndocumentID() {
        return this.a_pkiEzsigndocumentID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigndocumentID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigndocumentID(a_pkiEzsigndocumentID) {
        this['a_pkiEzsigndocumentID'] = a_pkiEzsigndocumentID;
    }

}

EzsigndocumentCreateObjectV2ResponseMPayload.RequiredProperties = ["a_pkiEzsigndocumentID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigndocumentID
 */
EzsigndocumentCreateObjectV2ResponseMPayload.prototype['a_pkiEzsigndocumentID'] = undefined;






export default EzsigndocumentCreateObjectV2ResponseMPayload;

