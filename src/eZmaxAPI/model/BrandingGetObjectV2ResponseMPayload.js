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
import BrandingResponseCompound from './BrandingResponseCompound';

/**
 * The BrandingGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/BrandingGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class BrandingGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>BrandingGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/branding/{pkiBrandingID}
     * @alias module:eZmaxAPI/model/BrandingGetObjectV2ResponseMPayload
     * @param objBranding {module:eZmaxAPI/model/BrandingResponseCompound} 
     */
    constructor(objBranding) { 
        
        BrandingGetObjectV2ResponseMPayload.initialize(this, objBranding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objBranding) { 
        obj['objBranding'] = objBranding;
    }

    /**
     * Constructs a <code>BrandingGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingGetObjectV2ResponseMPayload} The populated <code>BrandingGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objBranding')) {
                obj['objBranding'] = BrandingResponseCompound.constructFromObject(data['objBranding']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBranding`
        if (data['objBranding']) { // data not null
          BrandingResponseCompound.validateJSON(data['objBranding']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/BrandingResponseCompound}
     */
    getObjBranding() {
        return this.objBranding;
    }

    /**
     * @param {module:eZmaxAPI/model/BrandingResponseCompound} objBranding
     */
    setObjBranding(objBranding) {
        this['objBranding'] = objBranding;
    }

}

BrandingGetObjectV2ResponseMPayload.RequiredProperties = ["objBranding"];

/**
 * @member {module:eZmaxAPI/model/BrandingResponseCompound} objBranding
 */
BrandingGetObjectV2ResponseMPayload.prototype['objBranding'] = undefined;






export default BrandingGetObjectV2ResponseMPayload;

