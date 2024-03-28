/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackagesignerResponseCompound from './EzsigntemplatepackagesignerResponseCompound';

/**
 * The EzsigntemplatepackagesignerGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class EzsigntemplatepackagesignerGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/ezsigntemplatepackagesigner/{pkiEzsigntemplatepackagesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV2ResponseMPayload
     * @param objEzsigntemplatepackagesigner {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound} 
     */
    constructor(objEzsigntemplatepackagesigner) { 
        
        EzsigntemplatepackagesignerGetObjectV2ResponseMPayload.initialize(this, objEzsigntemplatepackagesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatepackagesigner) { 
        obj['objEzsigntemplatepackagesigner'] = objEzsigntemplatepackagesigner;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerGetObjectV2ResponseMPayload} The populated <code>EzsigntemplatepackagesignerGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objEzsigntemplatepackagesigner')) {
                obj['objEzsigntemplatepackagesigner'] = EzsigntemplatepackagesignerResponseCompound.constructFromObject(data['objEzsigntemplatepackagesigner']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatepackagesignerGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackagesignerGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackagesignerGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplatepackagesigner`
        if (data['objEzsigntemplatepackagesigner']) { // data not null
          EzsigntemplatepackagesignerResponseCompound.validateJSON(data['objEzsigntemplatepackagesigner']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound}
     */
    getObjEzsigntemplatepackagesigner() {
        return this.objEzsigntemplatepackagesigner;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound} objEzsigntemplatepackagesigner
     */
    setObjEzsigntemplatepackagesigner(objEzsigntemplatepackagesigner) {
        this['objEzsigntemplatepackagesigner'] = objEzsigntemplatepackagesigner;
    }

}

EzsigntemplatepackagesignerGetObjectV2ResponseMPayload.RequiredProperties = ["objEzsigntemplatepackagesigner"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound} objEzsigntemplatepackagesigner
 */
EzsigntemplatepackagesignerGetObjectV2ResponseMPayload.prototype['objEzsigntemplatepackagesigner'] = undefined;






export default EzsigntemplatepackagesignerGetObjectV2ResponseMPayload;

