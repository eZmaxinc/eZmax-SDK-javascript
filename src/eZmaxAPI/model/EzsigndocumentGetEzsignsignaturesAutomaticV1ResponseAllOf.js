/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload from './EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload';

/**
 * The EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf
 * @version 1.1.18
 */
class EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf} The populated <code>EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigndocumentGetEzsignsignaturesAutomaticV1ResponseAllOf;
