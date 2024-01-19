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
 * The DiscussionCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/DiscussionCreateObjectV1ResponseMPayload
 * @version 1.2.0
 */
class DiscussionCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>DiscussionCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/discussion
     * @alias module:eZmaxAPI/model/DiscussionCreateObjectV1ResponseMPayload
     * @param a_pkiDiscussionID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiDiscussionID) { 
        
        DiscussionCreateObjectV1ResponseMPayload.initialize(this, a_pkiDiscussionID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiDiscussionID) { 
        obj['a_pkiDiscussionID'] = a_pkiDiscussionID;
    }

    /**
     * Constructs a <code>DiscussionCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionCreateObjectV1ResponseMPayload} The populated <code>DiscussionCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiDiscussionID')) {
                obj['a_pkiDiscussionID'] = ApiClient.convertToType(data['a_pkiDiscussionID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiDiscussionID'])) {
            throw new Error("Expected the field `a_pkiDiscussionID` to be an array in the JSON data but got " + data['a_pkiDiscussionID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiDiscussionID() {
        return this.a_pkiDiscussionID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiDiscussionID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiDiscussionID(a_pkiDiscussionID) {
        this['a_pkiDiscussionID'] = a_pkiDiscussionID;
    }

}

DiscussionCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiDiscussionID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiDiscussionID
 */
DiscussionCreateObjectV1ResponseMPayload.prototype['a_pkiDiscussionID'] = undefined;






export default DiscussionCreateObjectV1ResponseMPayload;

