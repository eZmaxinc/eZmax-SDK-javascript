/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SecretquestionAutocompleteElementResponse from './SecretquestionAutocompleteElementResponse';

/**
 * The SecretquestionGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/SecretquestionGetAutocompleteV2ResponseMPayload
 * @version 1.1.11
 */
class SecretquestionGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>SecretquestionGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/secretquestion/getAutocomplete
     * @alias module:eZmaxAPI/model/SecretquestionGetAutocompleteV2ResponseMPayload
     * @param a_objSecretquestion {Array.<module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse>} An array of Secretquestion autocomplete element response.
     */
    constructor(a_objSecretquestion) { 
        
        SecretquestionGetAutocompleteV2ResponseMPayload.initialize(this, a_objSecretquestion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objSecretquestion) { 
        obj['a_objSecretquestion'] = a_objSecretquestion;
    }

    /**
     * Constructs a <code>SecretquestionGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SecretquestionGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SecretquestionGetAutocompleteV2ResponseMPayload} The populated <code>SecretquestionGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecretquestionGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objSecretquestion')) {
                obj['a_objSecretquestion'] = ApiClient.convertToType(data['a_objSecretquestion'], [SecretquestionAutocompleteElementResponse]);
            }
        }
        return obj;
    }

/**
     * Returns An array of Secretquestion autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse>}
     */
    getAObjSecretquestion() {
        return this.a_objSecretquestion;
    }

    /**
     * Sets An array of Secretquestion autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse>} a_objSecretquestion An array of Secretquestion autocomplete element response.
     */
    setAObjSecretquestion(a_objSecretquestion) {
        this['a_objSecretquestion'] = a_objSecretquestion;
    }

}

/**
 * An array of Secretquestion autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/SecretquestionAutocompleteElementResponse>} a_objSecretquestion
 */
SecretquestionGetAutocompleteV2ResponseMPayload.prototype['a_objSecretquestion'] = undefined;






export default SecretquestionGetAutocompleteV2ResponseMPayload;
