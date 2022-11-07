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
import EzsigntemplatesignatureResponseCompound from './EzsigntemplatesignatureResponseCompound';

/**
 * The EzsigntemplatesignatureGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureGetObjectV2ResponseMPayload
 * @version 1.1.15
 */
class EzsigntemplatesignatureGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatesignatureGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatesignature/{pkiEzsigntemplatesignatureID}
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV2ResponseMPayload
     * @param objEzsigntemplatesignature {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound} 
     */
    constructor(objEzsigntemplatesignature) { 
        
        EzsigntemplatesignatureGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatesignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatesignature) { 
        obj['objEzsigntemplatesignature'] = objEzsigntemplatesignature;
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatesignatureGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatesignature')) {
                obj['objEzsigntemplatesignature'] = EzsigntemplatesignatureResponseCompound.constructFromObject(data['objEzsigntemplatesignature']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound}
     */
    getObjEzsigntemplatesignature() {
        return this.objEzsigntemplatesignature;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound} objEzsigntemplatesignature
     */
    setObjEzsigntemplatesignature(objEzsigntemplatesignature) {
        this['objEzsigntemplatesignature'] = objEzsigntemplatesignature;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatesignatureResponseCompound} objEzsigntemplatesignature
 */
EzsigntemplatesignatureGetObjectV2ResponseMPayload.prototype['objEzsigntemplatesignature'] = undefined;






export default EzsigntemplatesignatureGetObjectV2ResponseMPayload;

