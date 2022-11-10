/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldgroupResponseCompound from './EzsignformfieldgroupResponseCompound';

/**
 * The EzsignformfieldgroupGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupGetObjectV2ResponseMPayload
 * @version 1.1.16
 */
class EzsignformfieldgroupGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignformfieldgroupGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsignformfieldgroup/{pkiEzsignformfieldgroupID}
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV2ResponseMPayload
     * @param objEzsignformfieldgroup {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound} 
     */
    constructor(objEzsignformfieldgroup) { 
        
        EzsignformfieldgroupGetObjectV2ResponseMPayload.initialize(this, objEzsignformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignformfieldgroup) { 
        obj['objEzsignformfieldgroup'] = objEzsignformfieldgroup;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV2ResponseMPayload} The populated <code>EzsignformfieldgroupGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsignformfieldgroup')) {
                obj['objEzsignformfieldgroup'] = EzsignformfieldgroupResponseCompound.constructFromObject(data['objEzsignformfieldgroup']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound}
     */
    getObjEzsignformfieldgroup() {
        return this.objEzsignformfieldgroup;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound} objEzsignformfieldgroup
     */
    setObjEzsignformfieldgroup(objEzsignformfieldgroup) {
        this['objEzsignformfieldgroup'] = objEzsignformfieldgroup;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound} objEzsignformfieldgroup
 */
EzsignformfieldgroupGetObjectV2ResponseMPayload.prototype['objEzsignformfieldgroup'] = undefined;






export default EzsignformfieldgroupGetObjectV2ResponseMPayload;

