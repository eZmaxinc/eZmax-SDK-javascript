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
 * The EzsignformfieldgroupCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1ResponseMPayload
 * @version 1.2.0
 */
class EzsignformfieldgroupCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignformfieldgroupCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignformfieldgroup
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1ResponseMPayload
     * @param a_pkiEzsignformfieldgroupID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignformfieldgroupID) { 
        
        EzsignformfieldgroupCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsignformfieldgroupID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignformfieldgroupID) { 
        obj['a_pkiEzsignformfieldgroupID'] = a_pkiEzsignformfieldgroupID;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupCreateObjectV1ResponseMPayload} The populated <code>EzsignformfieldgroupCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignformfieldgroupID')) {
                obj['a_pkiEzsignformfieldgroupID'] = ApiClient.convertToType(data['a_pkiEzsignformfieldgroupID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignformfieldgroupCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignformfieldgroupCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignformfieldgroupCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiEzsignformfieldgroupID'])) {
            throw new Error("Expected the field `a_pkiEzsignformfieldgroupID` to be an array in the JSON data but got " + data['a_pkiEzsignformfieldgroupID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignformfieldgroupID() {
        return this.a_pkiEzsignformfieldgroupID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignformfieldgroupID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignformfieldgroupID(a_pkiEzsignformfieldgroupID) {
        this['a_pkiEzsignformfieldgroupID'] = a_pkiEzsignformfieldgroupID;
    }

}

EzsignformfieldgroupCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiEzsignformfieldgroupID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupCreateObjectV1ResponseMPayload.prototype['a_pkiEzsignformfieldgroupID'] = undefined;






export default EzsignformfieldgroupCreateObjectV1ResponseMPayload;

