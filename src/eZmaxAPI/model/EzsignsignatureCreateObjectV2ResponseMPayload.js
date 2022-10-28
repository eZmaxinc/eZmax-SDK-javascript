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
 * The EzsignsignatureCreateObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignsignatureCreateObjectV2ResponseMPayload
 * @version 1.1.13
 */
class EzsignsignatureCreateObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignsignatureCreateObjectV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsignsignature
     * @alias module:eZmaxAPI/model/EzsignsignatureCreateObjectV2ResponseMPayload
     * @param a_pkiEzsignsignatureID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignsignatureID) { 
        
        EzsignsignatureCreateObjectV2ResponseMPayload.initialize(this, a_pkiEzsignsignatureID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignsignatureID) { 
        obj['a_pkiEzsignsignatureID'] = a_pkiEzsignsignatureID;
    }

    /**
     * Constructs a <code>EzsignsignatureCreateObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureCreateObjectV2ResponseMPayload} The populated <code>EzsignsignatureCreateObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureCreateObjectV2ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignsignatureID')) {
                obj['a_pkiEzsignsignatureID'] = ApiClient.convertToType(data['a_pkiEzsignsignatureID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignsignatureID() {
        return this.a_pkiEzsignsignatureID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignsignatureID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignsignatureID(a_pkiEzsignsignatureID) {
        this['a_pkiEzsignsignatureID'] = a_pkiEzsignsignatureID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignsignatureID
 */
EzsignsignatureCreateObjectV2ResponseMPayload.prototype['a_pkiEzsignsignatureID'] = undefined;






export default EzsignsignatureCreateObjectV2ResponseMPayload;

