/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsignfolderSendreminderfrequency.
* @enum {}
* @readonly
*/
export default class FieldEEzsignfolderSendreminderfrequency {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "Daily"
         * @const
         */
        "Daily" = "Daily";

    
        /**
         * value: "Weekly"
         * @const
         */
        "Weekly" = "Weekly";

    

    /**
    * Returns a <code>FieldEEzsignfolderSendreminderfrequency</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} The enum <code>FieldEEzsignfolderSendreminderfrequency</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

