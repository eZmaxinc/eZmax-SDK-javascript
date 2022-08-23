/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload
 * @version 1.1.10
 */
class EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignbulksenddocumentmapping
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload
     * @param a_pkiEzsignbulksenddocumentmappingID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignbulksenddocumentmappingID) { 
        
        EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsignbulksenddocumentmappingID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignbulksenddocumentmappingID) { 
        obj['a_pkiEzsignbulksenddocumentmappingID'] = a_pkiEzsignbulksenddocumentmappingID;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload} The populated <code>EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignbulksenddocumentmappingID')) {
                obj['a_pkiEzsignbulksenddocumentmappingID'] = ApiClient.convertToType(data['a_pkiEzsignbulksenddocumentmappingID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignbulksenddocumentmappingID() {
        return this.a_pkiEzsignbulksenddocumentmappingID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignbulksenddocumentmappingID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignbulksenddocumentmappingID(a_pkiEzsignbulksenddocumentmappingID) {
        this['a_pkiEzsignbulksenddocumentmappingID'] = a_pkiEzsignbulksenddocumentmappingID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload.prototype['a_pkiEzsignbulksenddocumentmappingID'] = undefined;






export default EzsignbulksenddocumentmappingCreateObjectV1ResponseMPayload;

