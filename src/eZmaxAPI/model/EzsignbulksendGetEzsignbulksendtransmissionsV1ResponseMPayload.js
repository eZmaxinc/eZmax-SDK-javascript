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
import EzsignbulksendtransmissionResponseCompound from './EzsignbulksendtransmissionResponseCompound';

/**
 * The EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload
 * @version 1.1.10
 */
class EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignbulksend/{pkiEzsignbulksend}/getEzsignbulksendtransmissions
     * @alias module:eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload
     * @param a_objEzsignbulksendtransmission {Array.<module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound>} 
     */
    constructor(a_objEzsignbulksendtransmission) { 
        
        EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload.initialize(this, a_objEzsignbulksendtransmission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignbulksendtransmission) { 
        obj['a_objEzsignbulksendtransmission'] = a_objEzsignbulksendtransmission;
    }

    /**
     * Constructs a <code>EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload} The populated <code>EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignbulksendtransmission')) {
                obj['a_objEzsignbulksendtransmission'] = ApiClient.convertToType(data['a_objEzsignbulksendtransmission'], [EzsignbulksendtransmissionResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound>}
     */
    getAObjEzsignbulksendtransmission() {
        return this.a_objEzsignbulksendtransmission;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound>} a_objEzsignbulksendtransmission
     */
    setAObjEzsignbulksendtransmission(a_objEzsignbulksendtransmission) {
        this['a_objEzsignbulksendtransmission'] = a_objEzsignbulksendtransmission;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound>} a_objEzsignbulksendtransmission
 */
EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload.prototype['a_objEzsignbulksendtransmission'] = undefined;






export default EzsignbulksendGetEzsignbulksendtransmissionsV1ResponseMPayload;

