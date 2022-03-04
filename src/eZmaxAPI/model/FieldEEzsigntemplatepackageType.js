/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsigntemplatepackageType.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplatepackageType {
    
        /**
         * value: "Company"
         * @const
         */
        "Company" = "Company";

    
        /**
         * value: "Department"
         * @const
         */
        "Department" = "Department";

    
        /**
         * value: "Team"
         * @const
         */
        "Team" = "Team";

    
        /**
         * value: "User"
         * @const
         */
        "User" = "User";

    
        /**
         * value: "Usergroup"
         * @const
         */
        "Usergroup" = "Usergroup";

    

    /**
    * Returns a <code>FieldEEzsigntemplatepackageType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplatepackageType} The enum <code>FieldEEzsigntemplatepackageType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

