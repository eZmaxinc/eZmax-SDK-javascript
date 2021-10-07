/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class HeaderAcceptLanguage.
* @enum {}
* @readonly
*/
export default class HeaderAcceptLanguage {
    
        /**
         * value: "*"
         * @const
         */
        "STAR" = "*";

    
        /**
         * value: "en"
         * @const
         */
        "en" = "en";

    
        /**
         * value: "fr"
         * @const
         */
        "fr" = "fr";

    

    /**
    * Returns a <code>HeaderAcceptLanguage</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/HeaderAcceptLanguage} The enum <code>HeaderAcceptLanguage</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

