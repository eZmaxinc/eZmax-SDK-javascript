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

/**
 * The CommonResponseRedirectSSecretquestionTextX model module.
 * @module eZmaxAPI/model/CommonResponseRedirectSSecretquestionTextX
 * @version 1.1.11
 */
class CommonResponseRedirectSSecretquestionTextX {
    /**
     * Constructs a new <code>CommonResponseRedirectSSecretquestionTextX</code>.
     * 352 Redirect Message containing secret question
     * @alias module:eZmaxAPI/model/CommonResponseRedirectSSecretquestionTextX
     * @param sSecretquestionTextX {String} The text of the Secretquestion in the language of the requester
     */
    constructor(sSecretquestionTextX) { 
        
        CommonResponseRedirectSSecretquestionTextX.initialize(this, sSecretquestionTextX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sSecretquestionTextX) { 
        obj['sSecretquestionTextX'] = sSecretquestionTextX;
    }

    /**
     * Constructs a <code>CommonResponseRedirectSSecretquestionTextX</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseRedirectSSecretquestionTextX} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseRedirectSSecretquestionTextX} The populated <code>CommonResponseRedirectSSecretquestionTextX</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseRedirectSSecretquestionTextX();

            if (data.hasOwnProperty('sSecretquestionTextX')) {
                obj['sSecretquestionTextX'] = ApiClient.convertToType(data['sSecretquestionTextX'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The text of the Secretquestion in the language of the requester
     * @return {String}
     */
    getSSecretquestionTextX() {
        return this.sSecretquestionTextX;
    }

    /**
     * Sets The text of the Secretquestion in the language of the requester
     * @param {String} sSecretquestionTextX The text of the Secretquestion in the language of the requester
     */
    setSSecretquestionTextX(sSecretquestionTextX) {
        this['sSecretquestionTextX'] = sSecretquestionTextX;
    }

}

/**
 * The text of the Secretquestion in the language of the requester
 * @member {String} sSecretquestionTextX
 */
CommonResponseRedirectSSecretquestionTextX.prototype['sSecretquestionTextX'] = undefined;






export default CommonResponseRedirectSSecretquestionTextX;

