/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEActivesessionUsertype.
* @enum {}
* @readonly
*/
export default class FieldEActivesessionUsertype {
    
        /**
         * value: "AgentBroker"
         * @const
         */
        "AgentBroker" = "AgentBroker";

    
        /**
         * value: "Assistant"
         * @const
         */
        "Assistant" = "Assistant";

    
        /**
         * value: "EzsignUser"
         * @const
         */
        "EzsignUser" = "EzsignUser";

    
        /**
         * value: "Normal"
         * @const
         */
        "Normal" = "Normal";

    

    /**
    * Returns a <code>FieldEActivesessionUsertype</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEActivesessionUsertype} The enum <code>FieldEActivesessionUsertype</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

