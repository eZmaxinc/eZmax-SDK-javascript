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
 * The EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload
 * @version 1.1.7
 */
class EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplatepackagesignermembership
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload
     * @param a_pkiEzsigntemplatepackagesignermembershipID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsigntemplatepackagesignermembershipID) { 
        
        EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatepackagesignermembershipID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatepackagesignermembershipID) { 
        obj['a_pkiEzsigntemplatepackagesignermembershipID'] = a_pkiEzsigntemplatepackagesignermembershipID;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatepackagesignermembershipID')) {
                obj['a_pkiEzsigntemplatepackagesignermembershipID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatepackagesignermembershipID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatepackagesignermembershipID() {
        return this.a_pkiEzsigntemplatepackagesignermembershipID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplatepackagesignermembershipID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplatepackagesignermembershipID(a_pkiEzsigntemplatepackagesignermembershipID) {
        this['a_pkiEzsigntemplatepackagesignermembershipID'] = a_pkiEzsigntemplatepackagesignermembershipID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplatepackagesignermembershipID
 */
EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload.prototype['a_pkiEzsigntemplatepackagesignermembershipID'] = undefined;






export default EzsigntemplatepackagesignermembershipCreateObjectV1ResponseMPayload;
