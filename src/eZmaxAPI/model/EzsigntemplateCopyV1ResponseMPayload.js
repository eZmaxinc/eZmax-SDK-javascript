/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplateCopyV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateCopyV1ResponseMPayload
 * @version 1.1.16
 */
class EzsigntemplateCopyV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateCopyV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplate/{pkiEzsigntemplateID}/copy
     * @alias module:eZmaxAPI/model/EzsigntemplateCopyV1ResponseMPayload
     * @param a_pkiEzsigntemplateID {Array.<Number>} An array of unique IDs representing the object that were requested to be copied.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsigntemplateID) { 
        
        EzsigntemplateCopyV1ResponseMPayload.initialize(this, a_pkiEzsigntemplateID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplateID) { 
        obj['a_pkiEzsigntemplateID'] = a_pkiEzsigntemplateID;
    }

    /**
     * Constructs a <code>EzsigntemplateCopyV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateCopyV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateCopyV1ResponseMPayload} The populated <code>EzsigntemplateCopyV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateCopyV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplateID')) {
                obj['a_pkiEzsigntemplateID'] = ApiClient.convertToType(data['a_pkiEzsigntemplateID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be copied.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplateID() {
        return this.a_pkiEzsigntemplateID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be copied.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplateID An array of unique IDs representing the object that were requested to be copied.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplateID(a_pkiEzsigntemplateID) {
        this['a_pkiEzsigntemplateID'] = a_pkiEzsigntemplateID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be copied.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplateID
 */
EzsigntemplateCopyV1ResponseMPayload.prototype['a_pkiEzsigntemplateID'] = undefined;






export default EzsigntemplateCopyV1ResponseMPayload;

