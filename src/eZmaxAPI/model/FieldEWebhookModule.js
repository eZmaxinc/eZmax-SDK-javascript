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
* Enum class FieldEWebhookModule.
* @enum {}
* @readonly
*/
export default class FieldEWebhookModule {
    
        /**
         * value: "Ezsign"
         * @const
         */
        "Ezsign" = "Ezsign";

    
        /**
         * value: "Management"
         * @const
         */
        "Management" = "Management";

    

    /**
    * Returns a <code>FieldEWebhookModule</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEWebhookModule} The enum <code>FieldEWebhookModule</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

