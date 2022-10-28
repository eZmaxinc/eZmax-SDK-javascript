/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignbulksendCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendCreateObjectV1ResponseMPayload
 * @version 1.1.13
 */
class EzsignbulksendCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignbulksend
     * @alias module:eZmaxAPI/model/EzsignbulksendCreateObjectV1ResponseMPayload
     * @param a_pkiEzsignbulksendID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignbulksendID) { 
        
        EzsignbulksendCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsignbulksendID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignbulksendID) { 
        obj['a_pkiEzsignbulksendID'] = a_pkiEzsignbulksendID;
    }

    /**
     * Constructs a <code>EzsignbulksendCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendCreateObjectV1ResponseMPayload} The populated <code>EzsignbulksendCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignbulksendID')) {
                obj['a_pkiEzsignbulksendID'] = ApiClient.convertToType(data['a_pkiEzsignbulksendID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignbulksendID() {
        return this.a_pkiEzsignbulksendID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignbulksendID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignbulksendID(a_pkiEzsignbulksendID) {
        this['a_pkiEzsignbulksendID'] = a_pkiEzsignbulksendID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignbulksendID
 */
EzsignbulksendCreateObjectV1ResponseMPayload.prototype['a_pkiEzsignbulksendID'] = undefined;






export default EzsignbulksendCreateObjectV1ResponseMPayload;

