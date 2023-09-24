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
/**
* Enum class EnumTextvalidation.
* @enum {}
* @readonly
*/
export default class EnumTextvalidation {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "Date (YYYY-MM-DD)"
         * @const
         */
        "Date (YYYY-MM-DD)" = "Date (YYYY-MM-DD)";

    
        /**
         * value: "Date (MM/DD/YYYY)"
         * @const
         */
        "Date (MM/DD/YYYY)" = "Date (MM/DD/YYYY)";

    
        /**
         * value: "Date (MM/DD/YY)"
         * @const
         */
        "Date (MM/DD/YY)" = "Date (MM/DD/YY)";

    
        /**
         * value: "Date (DD/MM/YYYY)"
         * @const
         */
        "Date (DD/MM/YYYY)" = "Date (DD/MM/YYYY)";

    
        /**
         * value: "Date (DD/MM/YY)"
         * @const
         */
        "Date (DD/MM/YY)" = "Date (DD/MM/YY)";

    
        /**
         * value: "Email"
         * @const
         */
        "Email" = "Email";

    
        /**
         * value: "Letters"
         * @const
         */
        "Letters" = "Letters";

    
        /**
         * value: "Numbers"
         * @const
         */
        "Numbers" = "Numbers";

    
        /**
         * value: "Zip"
         * @const
         */
        "Zip" = "Zip";

    
        /**
         * value: "Zip+4"
         * @const
         */
        "Zip+4" = "Zip+4";

    
        /**
         * value: "PostalCode"
         * @const
         */
        "PostalCode" = "PostalCode";

    
        /**
         * value: "Custom"
         * @const
         */
        "Custom" = "Custom";

    

    /**
    * Returns a <code>EnumTextvalidation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/EnumTextvalidation} The enum <code>EnumTextvalidation</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

