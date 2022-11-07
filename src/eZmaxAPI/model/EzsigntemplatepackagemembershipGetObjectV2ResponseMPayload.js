/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackagemembershipResponseCompound from './EzsigntemplatepackagemembershipResponseCompound';

/**
 * The EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload
 * @version 1.1.15
 */
class EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload
     * @param objEzsigntemplatepackagemembership {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound} 
     */
    constructor(objEzsigntemplatepackagemembership) { 
        
        EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatepackagemembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatepackagemembership) { 
        obj['objEzsigntemplatepackagemembership'] = objEzsigntemplatepackagemembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatepackagemembership')) {
                obj['objEzsigntemplatepackagemembership'] = EzsigntemplatepackagemembershipResponseCompound.constructFromObject(data['objEzsigntemplatepackagemembership']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound}
     */
    getObjEzsigntemplatepackagemembership() {
        return this.objEzsigntemplatepackagemembership;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound} objEzsigntemplatepackagemembership
     */
    setObjEzsigntemplatepackagemembership(objEzsigntemplatepackagemembership) {
        this['objEzsigntemplatepackagemembership'] = objEzsigntemplatepackagemembership;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound} objEzsigntemplatepackagemembership
 */
EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload.prototype['objEzsigntemplatepackagemembership'] = undefined;






export default EzsigntemplatepackagemembershipGetObjectV2ResponseMPayload;

