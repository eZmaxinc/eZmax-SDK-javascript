/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsignfolderStep.
* @enum {}
* @readonly
*/
export default class FieldEEzsignfolderStep {
    
        /**
         * value: "Unsent"
         * @const
         */
        "Unsent" = "Unsent";

    
        /**
         * value: "Sent"
         * @const
         */
        "Sent" = "Sent";

    
        /**
         * value: "PartiallySigned"
         * @const
         */
        "PartiallySigned" = "PartiallySigned";

    
        /**
         * value: "Expired"
         * @const
         */
        "Expired" = "Expired";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    
        /**
         * value: "Archived"
         * @const
         */
        "Archived" = "Archived";

    

    /**
    * Returns a <code>FieldEEzsignfolderStep</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsignfolderStep} The enum <code>FieldEEzsignfolderStep</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

