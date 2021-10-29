/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AuthenticateAuthenticateV2ResponseAllOf from './AuthenticateAuthenticateV2ResponseAllOf';
import AuthenticateAuthenticateV2ResponseMPayload from './AuthenticateAuthenticateV2ResponseMPayload';
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';

/**
 * The AuthenticateAuthenticateV2Response model module.
 * @module eZmaxAPI/model/AuthenticateAuthenticateV2Response
 * @version 1.1.3
 */
class AuthenticateAuthenticateV2Response {
    /**
     * Constructs a new <code>AuthenticateAuthenticateV2Response</code>.
     * Response for the /2/module/authenticate/authenticate API Request
     * @alias module:eZmaxAPI/model/AuthenticateAuthenticateV2Response
     * @implements module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        AuthenticateAuthenticateV2ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        AuthenticateAuthenticateV2Response.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>AuthenticateAuthenticateV2Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AuthenticateAuthenticateV2Response} The populated <code>AuthenticateAuthenticateV2Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthenticateAuthenticateV2Response();
            AuthenticateAuthenticateV2ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = AuthenticateAuthenticateV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayload}
     */
    getObjDebugPayload() {
        return this.objDebugPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
     */
    setObjDebugPayload(objDebugPayload) {
        this['objDebugPayload'] = objDebugPayload;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebug}
     */
    getObjDebug() {
        return this.objDebug;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
     */
    setObjDebug(objDebug) {
        this['objDebug'] = objDebug;
    }

}

/**
 * @member {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} mPayload
 */
AuthenticateAuthenticateV2Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
AuthenticateAuthenticateV2Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
AuthenticateAuthenticateV2Response.prototype['objDebug'] = undefined;


// Implement AuthenticateAuthenticateV2ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/AuthenticateAuthenticateV2ResponseMPayload} mPayload
 */
AuthenticateAuthenticateV2ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default AuthenticateAuthenticateV2Response;

