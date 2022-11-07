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
* Enum class FieldEActivesessionWeekdaystart.
* @enum {}
* @readonly
*/
export default class FieldEActivesessionWeekdaystart {
    
        /**
         * value: "Sunday"
         * @const
         */
        "Sunday" = "Sunday";

    
        /**
         * value: "Monday"
         * @const
         */
        "Monday" = "Monday";

    
        /**
         * value: "Tuesday"
         * @const
         */
        "Tuesday" = "Tuesday";

    
        /**
         * value: "Wednesday"
         * @const
         */
        "Wednesday" = "Wednesday";

    
        /**
         * value: "Thursday"
         * @const
         */
        "Thursday" = "Thursday";

    
        /**
         * value: "Friday"
         * @const
         */
        "Friday" = "Friday";

    
        /**
         * value: "Saturday"
         * @const
         */
        "Saturday" = "Saturday";

    

    /**
    * Returns a <code>FieldEActivesessionWeekdaystart</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} The enum <code>FieldEActivesessionWeekdaystart</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

