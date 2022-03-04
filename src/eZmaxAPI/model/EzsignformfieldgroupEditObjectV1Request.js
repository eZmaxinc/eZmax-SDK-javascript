/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldgroupRequestCompound from './EzsignformfieldgroupRequestCompound';

/**
 * The EzsignformfieldgroupEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Request
 * @version 1.1.7
 */
class EzsignformfieldgroupEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignformfieldgroupEditObjectV1Request</code>.
     * Request for the /1/object/ezsignformfieldgroup/editObject API Request
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Request
     * @param objEzsignformfieldgroup {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound} 
     */
    constructor(objEzsignformfieldgroup) { 
        
        EzsignformfieldgroupEditObjectV1Request.initialize(this, objEzsignformfieldgroup);
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
     * Constructs a <code>EzsignformfieldgroupEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupEditObjectV1Request} The populated <code>EzsignformfieldgroupEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignformfieldgroup')) {
                obj['objEzsignformfieldgroup'] = EzsignformfieldgroupRequestCompound.constructFromObject(data['objEzsignformfieldgroup']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound}
     */
    getObjEzsignformfieldgroup() {
        return this.objEzsignformfieldgroup;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound} objEzsignformfieldgroup
     */
    setObjEzsignformfieldgroup(objEzsignformfieldgroup) {
        this['objEzsignformfieldgroup'] = objEzsignformfieldgroup;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound} objEzsignformfieldgroup
 */
EzsignformfieldgroupEditObjectV1Request.prototype['objEzsignformfieldgroup'] = undefined;






export default EzsignformfieldgroupEditObjectV1Request;

