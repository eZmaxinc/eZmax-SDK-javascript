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
import EzsignbulksendtransmissionResponseCompound from './EzsignbulksendtransmissionResponseCompound';

/**
 * The EzsignbulksendtransmissionGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2ResponseMPayload
 * @version 1.1.13
 */
class EzsignbulksendtransmissionGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2ResponseMPayload
     * @param objEzsignbulksendtransmission {module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound} 
     */
    constructor(objEzsignbulksendtransmission) { 
        
        EzsignbulksendtransmissionGetObjectV2ResponseMPayload.initialize(this, objEzsignbulksendtransmission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignbulksendtransmission) { 
        obj['objEzsignbulksendtransmission'] = objEzsignbulksendtransmission;
    }

    /**
     * Constructs a <code>EzsignbulksendtransmissionGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetObjectV2ResponseMPayload} The populated <code>EzsignbulksendtransmissionGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsignbulksendtransmission')) {
                obj['objEzsignbulksendtransmission'] = EzsignbulksendtransmissionResponseCompound.constructFromObject(data['objEzsignbulksendtransmission']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound}
     */
    getObjEzsignbulksendtransmission() {
        return this.objEzsignbulksendtransmission;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound} objEzsignbulksendtransmission
     */
    setObjEzsignbulksendtransmission(objEzsignbulksendtransmission) {
        this['objEzsignbulksendtransmission'] = objEzsignbulksendtransmission;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendtransmissionResponseCompound} objEzsignbulksendtransmission
 */
EzsignbulksendtransmissionGetObjectV2ResponseMPayload.prototype['objEzsignbulksendtransmission'] = undefined;






export default EzsignbulksendtransmissionGetObjectV2ResponseMPayload;

