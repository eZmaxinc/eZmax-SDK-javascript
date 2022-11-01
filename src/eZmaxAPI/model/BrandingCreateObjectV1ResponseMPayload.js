/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BrandingCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/BrandingCreateObjectV1ResponseMPayload
 * @version 1.1.14
 */
class BrandingCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>BrandingCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/branding
     * @alias module:eZmaxAPI/model/BrandingCreateObjectV1ResponseMPayload
     * @param a_pkiBrandingID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiBrandingID) { 
        
        BrandingCreateObjectV1ResponseMPayload.initialize(this, a_pkiBrandingID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiBrandingID) { 
        obj['a_pkiBrandingID'] = a_pkiBrandingID;
    }

    /**
     * Constructs a <code>BrandingCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingCreateObjectV1ResponseMPayload} The populated <code>BrandingCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiBrandingID')) {
                obj['a_pkiBrandingID'] = ApiClient.convertToType(data['a_pkiBrandingID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiBrandingID() {
        return this.a_pkiBrandingID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiBrandingID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiBrandingID(a_pkiBrandingID) {
        this['a_pkiBrandingID'] = a_pkiBrandingID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiBrandingID
 */
BrandingCreateObjectV1ResponseMPayload.prototype['a_pkiBrandingID'] = undefined;






export default BrandingCreateObjectV1ResponseMPayload;

