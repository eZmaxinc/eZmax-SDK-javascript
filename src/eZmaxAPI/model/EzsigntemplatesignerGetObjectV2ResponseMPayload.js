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
import EzsigntemplatesignerResponseCompound from './EzsigntemplatesignerResponseCompound';

/**
 * The EzsigntemplatesignerGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class EzsigntemplatesignerGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatesignerGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatesigner/{pkiEzsigntemplatesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV2ResponseMPayload
     * @param objEzsigntemplatesigner {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound} 
     */
    constructor(objEzsigntemplatesigner) { 
        
        EzsigntemplatesignerGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatesigner) { 
        obj['objEzsigntemplatesigner'] = objEzsigntemplatesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatesignerGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatesigner')) {
                obj['objEzsigntemplatesigner'] = EzsigntemplatesignerResponseCompound.constructFromObject(data['objEzsigntemplatesigner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignerGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignerGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignerGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplatesigner`
        if (data['objEzsigntemplatesigner']) { // data not null
          EzsigntemplatesignerResponseCompound.validateJSON(data['objEzsigntemplatesigner']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound}
     */
    getObjEzsigntemplatesigner() {
        return this.objEzsigntemplatesigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound} objEzsigntemplatesigner
     */
    setObjEzsigntemplatesigner(objEzsigntemplatesigner) {
        this['objEzsigntemplatesigner'] = objEzsigntemplatesigner;
    }

}

EzsigntemplatesignerGetObjectV2ResponseMPayload.RequiredProperties = ["objEzsigntemplatesigner"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound} objEzsigntemplatesigner
 */
EzsigntemplatesignerGetObjectV2ResponseMPayload.prototype['objEzsigntemplatesigner'] = undefined;






export default EzsigntemplatesignerGetObjectV2ResponseMPayload;

