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
 * The SubnetCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/SubnetCreateObjectV1ResponseMPayload
 * @version 1.1.18
 */
class SubnetCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>SubnetCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/subnet
     * @alias module:eZmaxAPI/model/SubnetCreateObjectV1ResponseMPayload
     * @param a_pkiSubnetID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiSubnetID) { 
        
        SubnetCreateObjectV1ResponseMPayload.initialize(this, a_pkiSubnetID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiSubnetID) { 
        obj['a_pkiSubnetID'] = a_pkiSubnetID;
    }

    /**
     * Constructs a <code>SubnetCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SubnetCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SubnetCreateObjectV1ResponseMPayload} The populated <code>SubnetCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubnetCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiSubnetID')) {
                obj['a_pkiSubnetID'] = ApiClient.convertToType(data['a_pkiSubnetID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubnetCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubnetCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubnetCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiSubnetID'])) {
            throw new Error("Expected the field `a_pkiSubnetID` to be an array in the JSON data but got " + data['a_pkiSubnetID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiSubnetID() {
        return this.a_pkiSubnetID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiSubnetID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiSubnetID(a_pkiSubnetID) {
        this['a_pkiSubnetID'] = a_pkiSubnetID;
    }

}

SubnetCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiSubnetID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiSubnetID
 */
SubnetCreateObjectV1ResponseMPayload.prototype['a_pkiSubnetID'] = undefined;






export default SubnetCreateObjectV1ResponseMPayload;

