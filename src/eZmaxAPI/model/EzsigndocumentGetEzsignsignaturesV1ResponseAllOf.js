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
import EzsigndocumentGetEzsignsignaturesV1ResponseMPayload from './EzsigndocumentGetEzsignsignaturesV1ResponseMPayload';

/**
 * The EzsigndocumentGetEzsignsignaturesV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseAllOf
 * @version 1.1.18
 */
class EzsigndocumentGetEzsignsignaturesV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignsignaturesV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsigndocumentGetEzsignsignaturesV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentGetEzsignsignaturesV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseAllOf} The populated <code>EzsigndocumentGetEzsignsignaturesV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignsignaturesV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentGetEzsignsignaturesV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignsignaturesV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignsignaturesV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignsignaturesV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsigndocumentGetEzsignsignaturesV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsigndocumentGetEzsignsignaturesV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignsignaturesV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignsignaturesV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigndocumentGetEzsignsignaturesV1ResponseAllOf;

