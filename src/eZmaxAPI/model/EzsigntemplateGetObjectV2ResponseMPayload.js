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
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';

/**
 * The EzsigntemplateGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateGetObjectV2ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplateGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplate/{pkiEzsigntemplateID}
     * @alias module:eZmaxAPI/model/EzsigntemplateGetObjectV2ResponseMPayload
     * @param objEzsigntemplate {module:eZmaxAPI/model/EzsigntemplateResponseCompound} 
     */
    constructor(objEzsigntemplate) { 
        
        EzsigntemplateGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplate) { 
        obj['objEzsigntemplate'] = objEzsigntemplate;
    }

    /**
     * Constructs a <code>EzsigntemplateGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateGetObjectV2ResponseMPayload} The populated <code>EzsigntemplateGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateResponseCompound.constructFromObject(data['objEzsigntemplate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplate`
        if (data['objEzsigntemplate']) { // data not null
          EzsigntemplateResponseCompound.validateJSON(data['objEzsigntemplate']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompound}
     */
    getObjEzsigntemplate() {
        return this.objEzsigntemplate;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
     */
    setObjEzsigntemplate(objEzsigntemplate) {
        this['objEzsigntemplate'] = objEzsigntemplate;
    }

}

EzsigntemplateGetObjectV2ResponseMPayload.RequiredProperties = ["objEzsigntemplate"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsigntemplateGetObjectV2ResponseMPayload.prototype['objEzsigntemplate'] = undefined;






export default EzsigntemplateGetObjectV2ResponseMPayload;

