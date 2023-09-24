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
* Enum class FieldECommunicationexternalrecipientType.
* @enum {}
* @readonly
*/
export default class FieldECommunicationexternalrecipientType {
    
        /**
         * value: "To"
         * @const
         */
        "To" = "To";

    
        /**
         * value: "Cc"
         * @const
         */
        "Cc" = "Cc";

    
        /**
         * value: "Bcc"
         * @const
         */
        "Bcc" = "Bcc";

    

    /**
    * Returns a <code>FieldECommunicationexternalrecipientType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldECommunicationexternalrecipientType} The enum <code>FieldECommunicationexternalrecipientType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

