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
* Enum class FieldEVariableexpenseTaxable.
* @enum {}
* @readonly
*/
export default class FieldEVariableexpenseTaxable {
    
        /**
         * value: "Yes"
         * @const
         */
        "Yes" = "Yes";

    
        /**
         * value: "No"
         * @const
         */
        "No" = "No";

    
        /**
         * value: "Included"
         * @const
         */
        "Included" = "Included";

    

    /**
    * Returns a <code>FieldEVariableexpenseTaxable</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEVariableexpenseTaxable} The enum <code>FieldEVariableexpenseTaxable</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

