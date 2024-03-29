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
import EzsigndocumentResponseCompound from './EzsigndocumentResponseCompound';

/**
 * The EzsigndocumentGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigndocument/{pkiEzsigndocumentID}
     * @alias module:eZmaxAPI/model/EzsigndocumentGetObjectV2ResponseMPayload
     * @param objEzsigndocument {module:eZmaxAPI/model/EzsigndocumentResponseCompound} 
     */
    constructor(objEzsigndocument) { 
        
        EzsigndocumentGetObjectV2ResponseMPayload.initialize(this, objEzsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigndocument) { 
        obj['objEzsigndocument'] = objEzsigndocument;
    }

    /**
     * Constructs a <code>EzsigndocumentGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetObjectV2ResponseMPayload} The populated <code>EzsigndocumentGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigndocument')) {
                obj['objEzsigndocument'] = EzsigndocumentResponseCompound.constructFromObject(data['objEzsigndocument']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigndocument`
        if (data['objEzsigndocument']) { // data not null
          EzsigndocumentResponseCompound.validateJSON(data['objEzsigndocument']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentResponseCompound}
     */
    getObjEzsigndocument() {
        return this.objEzsigndocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentResponseCompound} objEzsigndocument
     */
    setObjEzsigndocument(objEzsigndocument) {
        this['objEzsigndocument'] = objEzsigndocument;
    }

}

EzsigndocumentGetObjectV2ResponseMPayload.RequiredProperties = ["objEzsigndocument"];

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentResponseCompound} objEzsigndocument
 */
EzsigndocumentGetObjectV2ResponseMPayload.prototype['objEzsigndocument'] = undefined;






export default EzsigndocumentGetObjectV2ResponseMPayload;

