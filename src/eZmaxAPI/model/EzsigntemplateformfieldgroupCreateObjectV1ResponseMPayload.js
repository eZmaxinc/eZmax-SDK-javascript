/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload
 * @version 1.1.8
 */
class EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsigntemplateformfieldgroup
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload
     * @param a_pkiEzsigntemplateformfieldgroupID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsigntemplateformfieldgroupID) { 
        
        EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload.initialize(this, a_pkiEzsigntemplateformfieldgroupID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplateformfieldgroupID) { 
        obj['a_pkiEzsigntemplateformfieldgroupID'] = a_pkiEzsigntemplateformfieldgroupID;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload} The populated <code>EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplateformfieldgroupID')) {
                obj['a_pkiEzsigntemplateformfieldgroupID'] = ApiClient.convertToType(data['a_pkiEzsigntemplateformfieldgroupID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplateformfieldgroupID() {
        return this.a_pkiEzsigntemplateformfieldgroupID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsigntemplateformfieldgroupID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsigntemplateformfieldgroupID(a_pkiEzsigntemplateformfieldgroupID) {
        this['a_pkiEzsigntemplateformfieldgroupID'] = a_pkiEzsigntemplateformfieldgroupID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsigntemplateformfieldgroupID
 */
EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload.prototype['a_pkiEzsigntemplateformfieldgroupID'] = undefined;






export default EzsigntemplateformfieldgroupCreateObjectV1ResponseMPayload;

