/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsigndocumentStep.
* @enum {}
* @readonly
*/
export default class FieldEEzsigndocumentStep {
    
        /**
         * value: "Unsent"
         * @const
         */
        "Unsent" = "Unsent";

    
        /**
         * value: "Unsigned"
         * @const
         */
        "Unsigned" = "Unsigned";

    
        /**
         * value: "PartiallySigned"
         * @const
         */
        "PartiallySigned" = "PartiallySigned";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    

    /**
    * Returns a <code>FieldEEzsigndocumentStep</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigndocumentStep} The enum <code>FieldEEzsigndocumentStep</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

