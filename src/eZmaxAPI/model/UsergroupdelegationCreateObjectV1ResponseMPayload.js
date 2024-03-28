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
 * The UsergroupdelegationCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupdelegationCreateObjectV1ResponseMPayload
 * @version 1.2.0
 */
class UsergroupdelegationCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupdelegationCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/usergroupdelegation
     * @alias module:eZmaxAPI/model/UsergroupdelegationCreateObjectV1ResponseMPayload
     * @param a_pkiUsergroupdelegationID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiUsergroupdelegationID) { 
        
        UsergroupdelegationCreateObjectV1ResponseMPayload.initialize(this, a_pkiUsergroupdelegationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiUsergroupdelegationID) { 
        obj['a_pkiUsergroupdelegationID'] = a_pkiUsergroupdelegationID;
    }

    /**
     * Constructs a <code>UsergroupdelegationCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupdelegationCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupdelegationCreateObjectV1ResponseMPayload} The populated <code>UsergroupdelegationCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupdelegationCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiUsergroupdelegationID')) {
                obj['a_pkiUsergroupdelegationID'] = ApiClient.convertToType(data['a_pkiUsergroupdelegationID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupdelegationCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupdelegationCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupdelegationCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiUsergroupdelegationID'])) {
            throw new Error("Expected the field `a_pkiUsergroupdelegationID` to be an array in the JSON data but got " + data['a_pkiUsergroupdelegationID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiUsergroupdelegationID() {
        return this.a_pkiUsergroupdelegationID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiUsergroupdelegationID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiUsergroupdelegationID(a_pkiUsergroupdelegationID) {
        this['a_pkiUsergroupdelegationID'] = a_pkiUsergroupdelegationID;
    }

}

UsergroupdelegationCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiUsergroupdelegationID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiUsergroupdelegationID
 */
UsergroupdelegationCreateObjectV1ResponseMPayload.prototype['a_pkiUsergroupdelegationID'] = undefined;






export default UsergroupdelegationCreateObjectV1ResponseMPayload;

