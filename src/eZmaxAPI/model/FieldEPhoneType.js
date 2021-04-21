/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEPhoneType.
* @enum {}
* @readonly
*/
export default class FieldEPhoneType {
    
        /**
         * value: "Local"
         * @const
         */
        "Local" = "Local";

    
        /**
         * value: "International"
         * @const
         */
        "International" = "International";

    

    /**
    * Returns a <code>FieldEPhoneType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEPhoneType} The enum <code>FieldEPhoneType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

