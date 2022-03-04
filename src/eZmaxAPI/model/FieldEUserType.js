/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEUserType.
* @enum {}
* @readonly
*/
export default class FieldEUserType {
    
        /**
         * value: "AgentBroker"
         * @const
         */
        "AgentBroker" = "AgentBroker";

    
        /**
         * value: "Assistant"
         * @const
         */
        "Assistant" = "Assistant";

    
        /**
         * value: "Attendance"
         * @const
         */
        "Attendance" = "Attendance";

    
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
         * value: "Ezcom"
         * @const
         */
        "Ezcom" = "Ezcom";

    
        /**
         * value: "EzsignSigner"
         * @const
         */
        "EzsignSigner" = "EzsignSigner";

    
        /**
         * value: "EzsignUser"
         * @const
         */
        "EzsignUser" = "EzsignUser";

    
        /**
         * value: "FranchiseCustomerServer"
         * @const
         */
        "FranchiseCustomerServer" = "FranchiseCustomerServer";

    
        /**
         * value: "Normal"
         * @const
         */
        "Normal" = "Normal";

    
        /**
         * value: "RewardAdministration"
         * @const
         */
        "RewardAdministration" = "RewardAdministration";

    
        /**
         * value: "RewardMember"
         * @const
         */
        "RewardMember" = "RewardMember";

    
        /**
         * value: "RewardRepresentative"
         * @const
         */
        "RewardRepresentative" = "RewardRepresentative";

    
        /**
         * value: "RewardCustomer"
         * @const
         */
        "RewardCustomer" = "RewardCustomer";

    
        /**
         * value: "RewardDistributorServer"
         * @const
         */
        "RewardDistributorServer" = "RewardDistributorServer";

    
        /**
         * value: "Supplier"
         * @const
         */
        "Supplier" = "Supplier";

    
        /**
         * value: "VetrxCustomer"
         * @const
         */
        "VetrxCustomer" = "VetrxCustomer";

    
        /**
         * value: "Vetrxcustomergroup"
         * @const
         */
        "Vetrxcustomergroup" = "Vetrxcustomergroup";

    
        /**
         * value: "VetrxCustomerServer"
         * @const
         */
        "VetrxCustomerServer" = "VetrxCustomerServer";

    
        /**
         * value: "VetrxManufacturer"
         * @const
         */
        "VetrxManufacturer" = "VetrxManufacturer";

    
        /**
         * value: "VetrxVendor"
         * @const
         */
        "VetrxVendor" = "VetrxVendor";

    

    /**
    * Returns a <code>FieldEUserType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEUserType} The enum <code>FieldEUserType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

