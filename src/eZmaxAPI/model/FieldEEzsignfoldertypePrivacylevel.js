/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsignfoldertypePrivacylevel.
* @enum {}
* @readonly
*/
export default class FieldEEzsignfoldertypePrivacylevel {
    
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
    * Returns a <code>FieldEEzsignfoldertypePrivacylevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} The enum <code>FieldEEzsignfoldertypePrivacylevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

