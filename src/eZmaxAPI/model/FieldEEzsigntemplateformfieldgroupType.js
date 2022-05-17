/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsigntemplateformfieldgroupType.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplateformfieldgroupType {
    
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
    * Returns a <code>FieldEEzsigntemplateformfieldgroupType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType} The enum <code>FieldEEzsigntemplateformfieldgroupType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
