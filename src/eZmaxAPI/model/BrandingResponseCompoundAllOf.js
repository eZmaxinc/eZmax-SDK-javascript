/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BrandingResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/BrandingResponseCompoundAllOf
 * @version 1.1.16
 */
class BrandingResponseCompoundAllOf {
    /**
     * Constructs a new <code>BrandingResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/BrandingResponseCompoundAllOf
     */
    constructor() { 
        
        BrandingResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrandingResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingResponseCompoundAllOf} The populated <code>BrandingResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingResponseCompoundAllOf();

            if (data.hasOwnProperty('sBrandingLogourl')) {
                obj['sBrandingLogourl'] = ApiClient.convertToType(data['sBrandingLogourl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The url of the picture used as logo in the Branding
     * @return {String}
     */
    getSBrandingLogourl() {
        return this.sBrandingLogourl;
    }

    /**
     * Sets The url of the picture used as logo in the Branding
     * @param {String} sBrandingLogourl The url of the picture used as logo in the Branding
     */
    setSBrandingLogourl(sBrandingLogourl) {
        this['sBrandingLogourl'] = sBrandingLogourl;
    }

}

/**
 * The url of the picture used as logo in the Branding
 * @member {String} sBrandingLogourl
 */
BrandingResponseCompoundAllOf.prototype['sBrandingLogourl'] = undefined;






export default BrandingResponseCompoundAllOf;

