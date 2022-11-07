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
import EzsigntemplateformfieldgroupResponseCompound from './EzsigntemplateformfieldgroupResponseCompound';

/**
 * The EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload
 * @version 1.1.15
 */
class EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID}
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload
     * @param objEzsigntemplateformfieldgroup {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound} 
     */
    constructor(objEzsigntemplateformfieldgroup) { 
        
        EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplateformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplateformfieldgroup) { 
        obj['objEzsigntemplateformfieldgroup'] = objEzsigntemplateformfieldgroup;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload} The populated <code>EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplateformfieldgroup')) {
                obj['objEzsigntemplateformfieldgroup'] = EzsigntemplateformfieldgroupResponseCompound.constructFromObject(data['objEzsigntemplateformfieldgroup']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound}
     */
    getObjEzsigntemplateformfieldgroup() {
        return this.objEzsigntemplateformfieldgroup;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound} objEzsigntemplateformfieldgroup
     */
    setObjEzsigntemplateformfieldgroup(objEzsigntemplateformfieldgroup) {
        this['objEzsigntemplateformfieldgroup'] = objEzsigntemplateformfieldgroup;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound} objEzsigntemplateformfieldgroup
 */
EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload.prototype['objEzsigntemplateformfieldgroup'] = undefined;






export default EzsigntemplateformfieldgroupGetObjectV2ResponseMPayload;
