/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload from './EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload';

/**
 * The EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf
 * @version 1.1.17
 */
class EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf} The populated <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf;

