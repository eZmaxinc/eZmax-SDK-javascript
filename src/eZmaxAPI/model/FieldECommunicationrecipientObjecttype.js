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
* Enum class FieldECommunicationrecipientObjecttype.
* @enum {}
* @readonly
*/
export default class FieldECommunicationrecipientObjecttype {
    
        /**
         * value: "Agent"
         * @const
         */
        "Agent" = "Agent";

    
        /**
         * value: "Agentincorporation"
         * @const
         */
        "Agentincorporation" = "Agentincorporation";

    
        /**
         * value: "Assistant"
         * @const
         */
        "Assistant" = "Assistant";

    
        /**
         * value: "Broker"
         * @const
         */
        "Broker" = "Broker";

    
        /**
         * value: "Contact"
         * @const
         */
        "Contact" = "Contact";

    
        /**
         * value: "Customer"
         * @const
         */
        "Customer" = "Customer";

    
        /**
         * value: "Employee"
         * @const
         */
        "Employee" = "Employee";

    
        /**
         * value: "Externalbroker"
         * @const
         */
        "Externalbroker" = "Externalbroker";

    
        /**
         * value: "Ezcomagent"
         * @const
         */
        "Ezcomagent" = "Ezcomagent";

    
        /**
         * value: "Ezcomcompany"
         * @const
         */
        "Ezcomcompany" = "Ezcomcompany";

    
        /**
         * value: "Ezsignsigner"
         * @const
         */
        "Ezsignsigner" = "Ezsignsigner";

    
        /**
         * value: "Franchiseoffice"
         * @const
         */
        "Franchiseoffice" = "Franchiseoffice";

    
        /**
         * value: "Notary"
         * @const
         */
        "Notary" = "Notary";

    
        /**
         * value: "Rewardmember"
         * @const
         */
        "Rewardmember" = "Rewardmember";

    
        /**
         * value: "Supplier"
         * @const
         */
        "Supplier" = "Supplier";

    
        /**
         * value: "User"
         * @const
         */
        "User" = "User";

    

    /**
    * Returns a <code>FieldECommunicationrecipientObjecttype</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldECommunicationrecipientObjecttype} The enum <code>FieldECommunicationrecipientObjecttype</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

