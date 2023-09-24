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
* Enum class FieldEEzsigntemplatesignatureTooltipposition.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplatesignatureTooltipposition {
    
        /**
         * value: "TopLeft"
         * @const
         */
        "TopLeft" = "TopLeft";

    
        /**
         * value: "TopCenter"
         * @const
         */
        "TopCenter" = "TopCenter";

    
        /**
         * value: "TopRight"
         * @const
         */
        "TopRight" = "TopRight";

    
        /**
         * value: "MiddleLeft"
         * @const
         */
        "MiddleLeft" = "MiddleLeft";

    
        /**
         * value: "MiddleRight"
         * @const
         */
        "MiddleRight" = "MiddleRight";

    
        /**
         * value: "BottomLeft"
         * @const
         */
        "BottomLeft" = "BottomLeft";

    
        /**
         * value: "BottomCenter"
         * @const
         */
        "BottomCenter" = "BottomCenter";

    
        /**
         * value: "BottomRight"
         * @const
         */
        "BottomRight" = "BottomRight";

    

    /**
    * Returns a <code>FieldEEzsigntemplatesignatureTooltipposition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition} The enum <code>FieldEEzsigntemplatesignatureTooltipposition</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

