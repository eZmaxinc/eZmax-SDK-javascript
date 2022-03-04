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
import EzsignformfieldgroupGetObjectV1ResponseMPayload from './EzsignformfieldgroupGetObjectV1ResponseMPayload';

/**
 * The EzsignformfieldgroupGetObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseAllOf
 * @version 1.1.7
 */
class EzsignformfieldgroupGetObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignformfieldgroupGetObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignformfieldgroupGetObjectV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupGetObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseAllOf} The populated <code>EzsignformfieldgroupGetObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupGetObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignformfieldgroupGetObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload} mPayload
 */
EzsignformfieldgroupGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignformfieldgroupGetObjectV1ResponseAllOf;

