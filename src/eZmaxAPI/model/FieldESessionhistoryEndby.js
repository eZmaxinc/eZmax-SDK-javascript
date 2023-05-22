/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldESessionhistoryEndby.
* @enum {}
* @readonly
*/
export default class FieldESessionhistoryEndby {
    
        /**
         * value: "Decryption"
         * @const
         */
        "Decryption" = "Decryption";

    
        /**
         * value: "Hack"
         * @const
         */
        "Hack" = "Hack";

    
        /**
         * value: "Expired"
         * @const
         */
        "Expired" = "Expired";

    
        /**
         * value: "Hijack"
         * @const
         */
        "Hijack" = "Hijack";

    
        /**
         * value: "DoubleLogon"
         * @const
         */
        "DoubleLogon" = "DoubleLogon";

    
        /**
         * value: "Garbage"
         * @const
         */
        "Garbage" = "Garbage";

    
        /**
         * value: "Logoff"
         * @const
         */
        "Logoff" = "Logoff";

    
        /**
         * value: "BadAuth"
         * @const
         */
        "BadAuth" = "BadAuth";

    
        /**
         * value: "Locked"
         * @const
         */
        "Locked" = "Locked";

    
        /**
         * value: "Inactive"
         * @const
         */
        "Inactive" = "Inactive";

    
        /**
         * value: "InvalidUser"
         * @const
         */
        "InvalidUser" = "InvalidUser";

    
        /**
         * value: "BadUserType"
         * @const
         */
        "BadUserType" = "BadUserType";

    
        /**
         * value: "BadIP"
         * @const
         */
        "BadIP" = "BadIP";

    

    /**
    * Returns a <code>FieldESessionhistoryEndby</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldESessionhistoryEndby} The enum <code>FieldESessionhistoryEndby</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

