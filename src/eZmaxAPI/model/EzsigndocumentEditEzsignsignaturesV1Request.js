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
import EzsignsignatureRequestCompound from './EzsignsignatureRequestCompound';

/**
 * The EzsigndocumentEditEzsignsignaturesV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Request
 * @version 1.1.4
 */
class EzsigndocumentEditEzsignsignaturesV1Request {
    /**
     * Constructs a new <code>EzsigndocumentEditEzsignsignaturesV1Request</code>.
     * Request for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/editEzsignsignatures API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Request
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} 
     */
    constructor(a_objEzsignsignature) { 
        
        EzsigndocumentEditEzsignsignaturesV1Request.initialize(this, a_objEzsignsignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignature) { 
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
    }

    /**
     * Constructs a <code>EzsigndocumentEditEzsignsignaturesV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentEditEzsignsignaturesV1Request} The populated <code>EzsigndocumentEditEzsignsignaturesV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentEditEzsignsignaturesV1Request();

            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [EzsignsignatureRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureRequestCompound>} a_objEzsignsignature
 */
EzsigndocumentEditEzsignsignaturesV1Request.prototype['a_objEzsignsignature'] = undefined;






export default EzsigndocumentEditEzsignsignaturesV1Request;
