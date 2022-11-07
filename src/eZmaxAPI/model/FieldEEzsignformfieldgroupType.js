/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsignformfieldgroupType.
* @enum {}
* @readonly
*/
export default class FieldEEzsignformfieldgroupType {
    
        /**
         * value: "Text"
         * @const
         */
        "Text" = "Text";

    
        /**
         * value: "Textarea"
         * @const
         */
        "Textarea" = "Textarea";

    
        /**
         * value: "Dropdown"
         * @const
         */
        "Dropdown" = "Dropdown";

    
        /**
         * value: "Radio"
         * @const
         */
        "Radio" = "Radio";

    
        /**
         * value: "Checkbox"
         * @const
         */
        "Checkbox" = "Checkbox";

    

    /**
    * Returns a <code>FieldEEzsignformfieldgroupType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} The enum <code>FieldEEzsignformfieldgroupType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

