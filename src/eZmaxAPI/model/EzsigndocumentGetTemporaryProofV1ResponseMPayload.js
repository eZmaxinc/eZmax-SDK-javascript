/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentlogResponse from './EzsigndocumentlogResponse';

/**
 * The EzsigndocumentGetTemporaryProofV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload
 * @version 1.1.4
 */
class EzsigndocumentGetTemporaryProofV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/getTemporaryProof API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload
     * @param a_objEzsigndocumentlog {module:eZmaxAPI/model/EzsigndocumentlogResponse} 
     */
    constructor(a_objEzsigndocumentlog) { 
        
        EzsigndocumentGetTemporaryProofV1ResponseMPayload.initialize(this, a_objEzsigndocumentlog);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigndocumentlog) { 
        obj['a_objEzsigndocumentlog'] = a_objEzsigndocumentlog;
    }

    /**
     * Constructs a <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetTemporaryProofV1ResponseMPayload} The populated <code>EzsigndocumentGetTemporaryProofV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetTemporaryProofV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigndocumentlog')) {
                obj['a_objEzsigndocumentlog'] = EzsigndocumentlogResponse.constructFromObject(data['a_objEzsigndocumentlog']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentlogResponse}
     */
    getAObjEzsigndocumentlog() {
        return this.a_objEzsigndocumentlog;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentlogResponse} a_objEzsigndocumentlog
     */
    setAObjEzsigndocumentlog(a_objEzsigndocumentlog) {
        this['a_objEzsigndocumentlog'] = a_objEzsigndocumentlog;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentlogResponse} a_objEzsigndocumentlog
 */
EzsigndocumentGetTemporaryProofV1ResponseMPayload.prototype['a_objEzsigndocumentlog'] = undefined;






export default EzsigndocumentGetTemporaryProofV1ResponseMPayload;

