/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.47
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AuthenticateAuthenticateV2ResponseMPayload model module.
 * @module eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload
 * @version 1.0.47
 */
class AuthenticateAuthenticateV2ResponseMPayload {
    /**
     * Constructs a new <code>AuthenticateAuthenticateV2ResponseMPayload</code>.
     * Payload for the /2/module/authenticate/authenticate API Request
     * @alias module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload
     * @param sAuthorization {String} The Authorization key
     * @param sSecret {String} The secret key
     */
    constructor(sAuthorization, sSecret) { 
        
        AuthenticateAuthenticateV2ResponseMPayload.initialize(this, sAuthorization, sSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sAuthorization, sSecret) { 
        obj['sAuthorization'] = sAuthorization;
        obj['sSecret'] = sSecret;
    }

    /**
     * Constructs a <code>AuthenticateAuthenticateV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} The populated <code>AuthenticateAuthenticateV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticateAuthenticateV2ResponseMPayload();

            if (data.hasOwnProperty('sAuthorization')) {
                obj['sAuthorization'] = ApiClient.convertToType(data['sAuthorization'], 'String');
            }
            if (data.hasOwnProperty('sSecret')) {
                obj['sSecret'] = ApiClient.convertToType(data['sSecret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Authorization key
     * @return {String}
     */
    getSAuthorization() {
        return this.sAuthorization;
    }

    /**
     * Sets The Authorization key
     * @param {String} sAuthorization The Authorization key
     */
    setSAuthorization(sAuthorization) {
        this['sAuthorization'] = sAuthorization;
    }
/**
     * Returns The secret key
     * @return {String}
     */
    getSSecret() {
        return this.sSecret;
    }

    /**
     * Sets The secret key
     * @param {String} sSecret The secret key
     */
    setSSecret(sSecret) {
        this['sSecret'] = sSecret;
    }

}

/**
 * The Authorization key
 * @member {String} sAuthorization
 */
AuthenticateAuthenticateV2ResponseMPayload.prototype['sAuthorization'] = undefined;

/**
 * The secret key
 * @member {String} sSecret
 */
AuthenticateAuthenticateV2ResponseMPayload.prototype['sSecret'] = undefined;






export default AuthenticateAuthenticateV2ResponseMPayload;

