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
 * The BillingentityinternalCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/BillingentityinternalCreateObjectV1ResponseMPayload
 * @version 1.1.18
 */
class BillingentityinternalCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>BillingentityinternalCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/billingentityinternal
     * @alias module:eZmaxAPI/model/BillingentityinternalCreateObjectV1ResponseMPayload
     * @param a_pkiBillingentityinternalID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiBillingentityinternalID) { 
        
        BillingentityinternalCreateObjectV1ResponseMPayload.initialize(this, a_pkiBillingentityinternalID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiBillingentityinternalID) { 
        obj['a_pkiBillingentityinternalID'] = a_pkiBillingentityinternalID;
    }

    /**
     * Constructs a <code>BillingentityinternalCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalCreateObjectV1ResponseMPayload} The populated <code>BillingentityinternalCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiBillingentityinternalID')) {
                obj['a_pkiBillingentityinternalID'] = ApiClient.convertToType(data['a_pkiBillingentityinternalID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalCreateObjectV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalCreateObjectV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalCreateObjectV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiBillingentityinternalID'])) {
            throw new Error("Expected the field `a_pkiBillingentityinternalID` to be an array in the JSON data but got " + data['a_pkiBillingentityinternalID']);
        }

        return true;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiBillingentityinternalID() {
        return this.a_pkiBillingentityinternalID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiBillingentityinternalID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiBillingentityinternalID(a_pkiBillingentityinternalID) {
        this['a_pkiBillingentityinternalID'] = a_pkiBillingentityinternalID;
    }

}

BillingentityinternalCreateObjectV1ResponseMPayload.RequiredProperties = ["a_pkiBillingentityinternalID"];

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiBillingentityinternalID
 */
BillingentityinternalCreateObjectV1ResponseMPayload.prototype['a_pkiBillingentityinternalID'] = undefined;






export default BillingentityinternalCreateObjectV1ResponseMPayload;

