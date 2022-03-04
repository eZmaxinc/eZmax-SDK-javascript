/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignatureResponseCompound from './EzsignsignatureResponseCompound';

/**
 * The EzsigndocumentGetEzsignsignaturesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload
 * @version 1.1.5
 */
class EzsigndocumentGetEzsignsignaturesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignsignaturesV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigndocument/{pkiEzsigndocument}/getEzsignsignatures API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload
     */
    constructor() { 
        
        EzsigndocumentGetEzsignsignaturesV1ResponseMPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigndocumentGetEzsignsignaturesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload} The populated <code>EzsigndocumentGetEzsignsignaturesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignsignaturesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [EzsignsignatureResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
 */
EzsigndocumentGetEzsignsignaturesV1ResponseMPayload.prototype['a_objEzsignsignature'] = undefined;






export default EzsigndocumentGetEzsignsignaturesV1ResponseMPayload;

