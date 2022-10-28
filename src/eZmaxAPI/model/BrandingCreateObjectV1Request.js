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
import BrandingRequestCompound from './BrandingRequestCompound';

/**
 * The BrandingCreateObjectV1Request model module.
 * @module eZmaxAPI/model/BrandingCreateObjectV1Request
 * @version 1.1.13
 */
class BrandingCreateObjectV1Request {
    /**
     * Constructs a new <code>BrandingCreateObjectV1Request</code>.
     * Request for POST /1/object/branding
     * @alias module:eZmaxAPI/model/BrandingCreateObjectV1Request
     * @param a_objBranding {Array.<module:eZmaxAPI/model/BrandingRequestCompound>} 
     */
    constructor(a_objBranding) { 
        
        BrandingCreateObjectV1Request.initialize(this, a_objBranding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objBranding) { 
        obj['a_objBranding'] = a_objBranding;
    }

    /**
     * Constructs a <code>BrandingCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingCreateObjectV1Request} The populated <code>BrandingCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingCreateObjectV1Request();

            if (data.hasOwnProperty('a_objBranding')) {
                obj['a_objBranding'] = ApiClient.convertToType(data['a_objBranding'], [BrandingRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/BrandingRequestCompound>}
     */
    getAObjBranding() {
        return this.a_objBranding;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/BrandingRequestCompound>} a_objBranding
     */
    setAObjBranding(a_objBranding) {
        this['a_objBranding'] = a_objBranding;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/BrandingRequestCompound>} a_objBranding
 */
BrandingCreateObjectV1Request.prototype['a_objBranding'] = undefined;






export default BrandingCreateObjectV1Request;

