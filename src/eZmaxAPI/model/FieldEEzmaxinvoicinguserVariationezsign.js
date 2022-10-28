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
/**
* Enum class FieldEEzmaxinvoicinguserVariationezsign.
* @enum {}
* @readonly
*/
export default class FieldEEzmaxinvoicinguserVariationezsign {
    
        /**
         * value: "Charge"
         * @const
         */
        "Charge" = "Charge";

    
        /**
         * value: "Refund"
         * @const
         */
        "Refund" = "Refund";

    
        /**
         * value: "Same"
         * @const
         */
        "Same" = "Same";

    

    /**
    * Returns a <code>FieldEEzmaxinvoicinguserVariationezsign</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicinguserVariationezsign} The enum <code>FieldEEzmaxinvoicinguserVariationezsign</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

