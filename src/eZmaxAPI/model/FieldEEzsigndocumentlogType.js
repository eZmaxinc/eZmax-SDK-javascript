/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class FieldEEzsigndocumentlogType.
* @enum {}
* @readonly
*/
export default class FieldEEzsigndocumentlogType {
    
        /**
         * value: "Clone"
         * @const
         */
        "Clone" = "Clone";

    
        /**
         * value: "Login"
         * @const
         */
        "Login" = "Login";

    
        /**
         * value: "Sendcode"
         * @const
         */
        "Sendcode" = "Sendcode";

    
        /**
         * value: "Badcode"
         * @const
         */
        "Badcode" = "Badcode";

    
        /**
         * value: "Goodcode"
         * @const
         */
        "Goodcode" = "Goodcode";

    
        /**
         * value: "Authentication"
         * @const
         */
        "Authentication" = "Authentication";

    
        /**
         * value: "Createpage"
         * @const
         */
        "Createpage" = "Createpage";

    
        /**
         * value: "Download"
         * @const
         */
        "Download" = "Download";

    
        /**
         * value: "Send"
         * @const
         */
        "Send" = "Send";

    
        /**
         * value: "Sign"
         * @const
         */
        "Sign" = "Sign";

    
        /**
         * value: "Upload"
         * @const
         */
        "Upload" = "Upload";

    
        /**
         * value: "View"
         * @const
         */
        "View" = "View";

    
        /**
         * value: "Completion"
         * @const
         */
        "Completion" = "Completion";

    
        /**
         * value: "Changelimitdate"
         * @const
         */
        "Changelimitdate" = "Changelimitdate";

    
        /**
         * value: "Unsign"
         * @const
         */
        "Unsign" = "Unsign";

    
        /**
         * value: "ImportFromInstanet"
         * @const
         */
        "ImportFromInstanet" = "ImportFromInstanet";

    
        /**
         * value: "SendEmail"
         * @const
         */
        "SendEmail" = "SendEmail";

    
        /**
         * value: "FormCompletion"
         * @const
         */
        "FormCompletion" = "FormCompletion";

    
        /**
         * value: "SignatureAttachmentAdd"
         * @const
         */
        "SignatureAttachmentAdd" = "SignatureAttachmentAdd";

    
        /**
         * value: "SignatureAttachmentValidation"
         * @const
         */
        "SignatureAttachmentValidation" = "SignatureAttachmentValidation";

    
        /**
         * value: "SignatureAttachmentRefused"
         * @const
         */
        "SignatureAttachmentRefused" = "SignatureAttachmentRefused";

    
        /**
         * value: "SignatureAttachmentDeleted"
         * @const
         */
        "SignatureAttachmentDeleted" = "SignatureAttachmentDeleted";

    
        /**
         * value: "DeclinedToSign"
         * @const
         */
        "DeclinedToSign" = "DeclinedToSign";

    

    /**
    * Returns a <code>FieldEEzsigndocumentlogType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:eZmaxAPI/model/FieldEEzsigndocumentlogType} The enum <code>FieldEEzsigndocumentlogType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

