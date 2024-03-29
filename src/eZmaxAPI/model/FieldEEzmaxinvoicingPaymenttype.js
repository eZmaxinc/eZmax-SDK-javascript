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
* Enum class FieldEEzmaxinvoicingPaymenttype.
* @enum {}
* @readonly
*/
export default class FieldEEzmaxinvoicingPaymenttype {
    
        /**
         * value: "Cheque"
         * @const
         */
        "Cheque" = "Cheque";

    
        /**
         * value: "CreditCard"
         * @const
         */
        "CreditCard" = "CreditCard";

    
        /**
         * value: "DirectDebit"
         * @const
         */
        "DirectDebit" = "DirectDebit";

    

    /**
    * Returns a <code>FieldEEzmaxinvoicingPaymenttype</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype} The enum <code>FieldEEzmaxinvoicingPaymenttype</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

