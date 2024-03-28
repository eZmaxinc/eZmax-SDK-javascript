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
* Enum class FieldEEzsigntemplatesignatureDependencyrequirement.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplatesignatureDependencyrequirement {
    
        /**
         * value: "AllOf"
         * @const
         */
        "AllOf" = "AllOf";

    
        /**
         * value: "AnyOf"
         * @const
         */
        "AnyOf" = "AnyOf";

    

    /**
    * Returns a <code>FieldEEzsigntemplatesignatureDependencyrequirement</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureDependencyrequirement} The enum <code>FieldEEzsigntemplatesignatureDependencyrequirement</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
