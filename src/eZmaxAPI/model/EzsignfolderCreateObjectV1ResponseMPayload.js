/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfolderCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderCreateObjectV1ResponseMPayload
 * @version 1.1.3
 */
class EzsignfolderCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderCreateObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsignfolder/createObject API Request
     * @alias module:eZmaxAPI/model/EzsignfolderCreateObjectV1ResponseMPayload
     * @param a_pkiEzsignfolderID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignfolderID) { 
        
        EzsignfolderCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsignfolderID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignfolderID) { 
        obj['a_pkiEzsignfolderID'] = a_pkiEzsignfolderID;
    }

    /**
     * Constructs a <code>EzsignfolderCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderCreateObjectV1ResponseMPayload} The populated <code>EzsignfolderCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignfolderID')) {
                obj['a_pkiEzsignfolderID'] = ApiClient.convertToType(data['a_pkiEzsignfolderID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignfolderID() {
        return this.a_pkiEzsignfolderID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignfolderID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignfolderID(a_pkiEzsignfolderID) {
        this['a_pkiEzsignfolderID'] = a_pkiEzsignfolderID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignfolderID
 */
EzsignfolderCreateObjectV1ResponseMPayload.prototype['a_pkiEzsignfolderID'] = undefined;






export default EzsignfolderCreateObjectV1ResponseMPayload;

