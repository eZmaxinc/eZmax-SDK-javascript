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
/**
* Enum class FieldEBrandingLogo.
* @enum {}
* @readonly
*/
export default class FieldEBrandingLogo {
    
        /**
         * value: "Default"
         * @const
         */
        "Default" = "Default";

    
        /**
         * value: "JPEG"
         * @const
         */
        "JPEG" = "JPEG";

    
        /**
         * value: "PNG"
         * @const
         */
        "PNG" = "PNG";

    

    /**
    * Returns a <code>FieldEBrandingLogo</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEBrandingLogo} The enum <code>FieldEBrandingLogo</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

