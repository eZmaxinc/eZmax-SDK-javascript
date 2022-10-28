/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
 * @version 1.1.13
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

/**
 * @member {module:eZmaxAPI/model/BrandingResponseCompound} objBranding
 */
BrandingGetObjectV2ResponseMPayload.prototype['objBranding'] = undefined;






export default BrandingGetObjectV2ResponseMPayload;

