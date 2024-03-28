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
* Enum class FieldEEzsigntemplateformfieldPositioningoccurence.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplateformfieldPositioningoccurence {
    
        /**
         * value: "All"
         * @const
         */
        "All" = "All";

    
        /**
         * value: "First"
         * @const
         */
        "First" = "First";

    
        /**
         * value: "Last"
         * @const
         */
        "Last" = "Last";

    

    /**
    * Returns a <code>FieldEEzsigntemplateformfieldPositioningoccurence</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldPositioningoccurence} The enum <code>FieldEEzsigntemplateformfieldPositioningoccurence</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
