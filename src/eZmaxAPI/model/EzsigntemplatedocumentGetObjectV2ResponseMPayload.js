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
import EzsigntemplatedocumentResponseCompound from './EzsigntemplatedocumentResponseCompound';

/**
 * The EzsigntemplatedocumentGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatedocumentGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2ResponseMPayload
     * @param objEzsigntemplatedocument {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound} 
     */
    constructor(objEzsigntemplatedocument) { 
        
        EzsigntemplatedocumentGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatedocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatedocument) { 
        obj['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatedocumentGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatedocument')) {
                obj['objEzsigntemplatedocument'] = EzsigntemplatedocumentResponseCompound.constructFromObject(data['objEzsigntemplatedocument']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplatedocument`
        if (data['objEzsigntemplatedocument']) { // data not null
          EzsigntemplatedocumentResponseCompound.validateJSON(data['objEzsigntemplatedocument']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound}
     */
    getObjEzsigntemplatedocument() {
        return this.objEzsigntemplatedocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound} objEzsigntemplatedocument
     */
    setObjEzsigntemplatedocument(objEzsigntemplatedocument) {
        this['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

}

EzsigntemplatedocumentGetObjectV2ResponseMPayload.RequiredProperties = ["objEzsigntemplatedocument"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound} objEzsigntemplatedocument
 */
EzsigntemplatedocumentGetObjectV2ResponseMPayload.prototype['objEzsigntemplatedocument'] = undefined;






export default EzsigntemplatedocumentGetObjectV2ResponseMPayload;

