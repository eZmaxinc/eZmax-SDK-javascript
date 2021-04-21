/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserCreateEzsignuserV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UserCreateEzsignuserV1ResponseMPayload
 * @version 1.0.42
 */
class UserCreateEzsignuserV1ResponseMPayload {
    /**
     * Constructs a new <code>UserCreateEzsignuserV1ResponseMPayload</code>.
     * Payload for the /1/module/user/createEzsignuser API Request
     * @alias module:eZmaxAPI/model/UserCreateEzsignuserV1ResponseMPayload
     * @param a_sEmailAddressSuccess {Array.<String>} An array of email addresses that succeeded.
     * @param a_sEmailAddressFailure {Array.<String>} An array of email addresses that failed.
     */
    constructor(a_sEmailAddressSuccess, a_sEmailAddressFailure) { 
        
        UserCreateEzsignuserV1ResponseMPayload.initialize(this, a_sEmailAddressSuccess, a_sEmailAddressFailure);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_sEmailAddressSuccess, a_sEmailAddressFailure) { 
        obj['a_sEmailAddressSuccess'] = a_sEmailAddressSuccess;
        obj['a_sEmailAddressFailure'] = a_sEmailAddressFailure;
    }

    /**
     * Constructs a <code>UserCreateEzsignuserV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserCreateEzsignuserV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserCreateEzsignuserV1ResponseMPayload} The populated <code>UserCreateEzsignuserV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateEzsignuserV1ResponseMPayload();

            if (data.hasOwnProperty('a_sEmailAddressSuccess')) {
                obj['a_sEmailAddressSuccess'] = ApiClient.convertToType(data['a_sEmailAddressSuccess'], ['String']);
            }
            if (data.hasOwnProperty('a_sEmailAddressFailure')) {
                obj['a_sEmailAddressFailure'] = ApiClient.convertToType(data['a_sEmailAddressFailure'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns An array of email addresses that succeeded.
     * @return {Array.<String>}
     */
    getASEmailAddressSuccess() {
        return this.a_sEmailAddressSuccess;
    }

    /**
     * Sets An array of email addresses that succeeded.
     * @param {Array.<String>} a_sEmailAddressSuccess An array of email addresses that succeeded.
     */
    setASEmailAddressSuccess(a_sEmailAddressSuccess) {
        this['a_sEmailAddressSuccess'] = a_sEmailAddressSuccess;
    }
/**
     * Returns An array of email addresses that failed.
     * @return {Array.<String>}
     */
    getASEmailAddressFailure() {
        return this.a_sEmailAddressFailure;
    }

    /**
     * Sets An array of email addresses that failed.
     * @param {Array.<String>} a_sEmailAddressFailure An array of email addresses that failed.
     */
    setASEmailAddressFailure(a_sEmailAddressFailure) {
        this['a_sEmailAddressFailure'] = a_sEmailAddressFailure;
    }

}

/**
 * An array of email addresses that succeeded.
 * @member {Array.<String>} a_sEmailAddressSuccess
 */
UserCreateEzsignuserV1ResponseMPayload.prototype['a_sEmailAddressSuccess'] = undefined;

/**
 * An array of email addresses that failed.
 * @member {Array.<String>} a_sEmailAddressFailure
 */
UserCreateEzsignuserV1ResponseMPayload.prototype['a_sEmailAddressFailure'] = undefined;






export default UserCreateEzsignuserV1ResponseMPayload;

