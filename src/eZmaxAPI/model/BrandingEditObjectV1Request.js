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
import BrandingRequestCompound from './BrandingRequestCompound';

/**
 * The BrandingEditObjectV1Request model module.
 * @module eZmaxAPI/model/BrandingEditObjectV1Request
 * @version 1.1.17
 */
class BrandingEditObjectV1Request {
    /**
     * Constructs a new <code>BrandingEditObjectV1Request</code>.
     * Request for PUT /1/object/branding/{pkiBrandingID}
     * @alias module:eZmaxAPI/model/BrandingEditObjectV1Request
     * @param objBranding {module:eZmaxAPI/model/BrandingRequestCompound} 
     */
    constructor(objBranding) { 
        
        BrandingEditObjectV1Request.initialize(this, objBranding);
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
     * Constructs a <code>BrandingEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingEditObjectV1Request} The populated <code>BrandingEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingEditObjectV1Request();

            if (data.hasOwnProperty('objBranding')) {
                obj['objBranding'] = BrandingRequestCompound.constructFromObject(data['objBranding']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBranding`
        if (data['objBranding']) { // data not null
          BrandingRequestCompound.validateJSON(data['objBranding']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/BrandingRequestCompound}
     */
    getObjBranding() {
        return this.objBranding;
    }

    /**
     * @param {module:eZmaxAPI/model/BrandingRequestCompound} objBranding
     */
    setObjBranding(objBranding) {
        this['objBranding'] = objBranding;
    }

}

BrandingEditObjectV1Request.RequiredProperties = ["objBranding"];

/**
 * @member {module:eZmaxAPI/model/BrandingRequestCompound} objBranding
 */
BrandingEditObjectV1Request.prototype['objBranding'] = undefined;






export default BrandingEditObjectV1Request;

