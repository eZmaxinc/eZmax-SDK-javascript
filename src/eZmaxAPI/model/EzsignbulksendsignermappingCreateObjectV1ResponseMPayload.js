/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignbulksendsignermappingCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1ResponseMPayload
 * @version 1.1.7
 */
class EzsignbulksendsignermappingCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendsignermappingCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignbulksendsignermapping
     * @alias module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1ResponseMPayload
     * @param a_pkiEzsignbulksendsignermappingID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignbulksendsignermappingID) { 
        
        EzsignbulksendsignermappingCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsignbulksendsignermappingID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignbulksendsignermappingID) { 
        obj['a_pkiEzsignbulksendsignermappingID'] = a_pkiEzsignbulksendsignermappingID;
    }

    /**
     * Constructs a <code>EzsignbulksendsignermappingCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendsignermappingCreateObjectV1ResponseMPayload} The populated <code>EzsignbulksendsignermappingCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendsignermappingCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignbulksendsignermappingID')) {
                obj['a_pkiEzsignbulksendsignermappingID'] = ApiClient.convertToType(data['a_pkiEzsignbulksendsignermappingID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignbulksendsignermappingID() {
        return this.a_pkiEzsignbulksendsignermappingID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignbulksendsignermappingID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignbulksendsignermappingID(a_pkiEzsignbulksendsignermappingID) {
        this['a_pkiEzsignbulksendsignermappingID'] = a_pkiEzsignbulksendsignermappingID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignbulksendsignermappingID
 */
EzsignbulksendsignermappingCreateObjectV1ResponseMPayload.prototype['a_pkiEzsignbulksendsignermappingID'] = undefined;






export default EzsignbulksendsignermappingCreateObjectV1ResponseMPayload;
