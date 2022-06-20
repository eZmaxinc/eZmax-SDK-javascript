/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsignsignatureTooltipposition.
* @enum {}
* @readonly
*/
export default class FieldEEzsignsignatureTooltipposition {
    
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
    * Returns a <code>FieldEEzsignsignatureTooltipposition</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition} The enum <code>FieldEEzsignsignatureTooltipposition</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

