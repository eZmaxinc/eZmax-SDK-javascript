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
* Enum class FieldEEzsigntemplatesignatureType.
* @enum {}
* @readonly
*/
export default class FieldEEzsigntemplatesignatureType {
    
        /**
         * value: "Acknowledgement"
         * @const
         */
        "Acknowledgement" = "Acknowledgement";

    
        /**
         * value: "City"
         * @const
         */
        "City" = "City";

    
        /**
         * value: "Handwritten"
         * @const
         */
        "Handwritten" = "Handwritten";

    
        /**
         * value: "Initials"
         * @const
         */
        "Initials" = "Initials";

    
        /**
         * value: "Name"
         * @const
         */
        "Name" = "Name";

    
        /**
         * value: "Attachments"
         * @const
         */
        "Attachments" = "Attachments";

    
        /**
         * value: "FieldText"
         * @const
         */
        "FieldText" = "FieldText";

    
        /**
         * value: "FieldTextarea"
         * @const
         */
        "FieldTextarea" = "FieldTextarea";

    

    /**
    * Returns a <code>FieldEEzsigntemplatesignatureType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} The enum <code>FieldEEzsigntemplatesignatureType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

