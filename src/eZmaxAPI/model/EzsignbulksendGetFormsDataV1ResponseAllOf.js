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
import EzsignbulksendGetFormsDataV1ResponseMPayload from './EzsignbulksendGetFormsDataV1ResponseMPayload';

/**
 * The EzsignbulksendGetFormsDataV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf
 * @version 1.1.18
 */
class EzsignbulksendGetFormsDataV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignbulksendGetFormsDataV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseAllOf} The populated <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetFormsDataV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendGetFormsDataV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendGetFormsDataV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendGetFormsDataV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsignbulksendGetFormsDataV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsignbulksendGetFormsDataV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} mPayload
 */
EzsignbulksendGetFormsDataV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignbulksendGetFormsDataV1ResponseAllOf;

