/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserResponse from './UserResponse';

/**
 * The WebhookUserUserCreatedAllOf model module.
 * @module eZmaxAPI/model/WebhookUserUserCreatedAllOf
 * @version 1.0.38
 */
class WebhookUserUserCreatedAllOf {
    /**
     * Constructs a new <code>WebhookUserUserCreatedAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookUserUserCreatedAllOf
     * @param objUser {module:eZmaxAPI/model/UserResponse} 
     */
    constructor(objUser) { 
        
        WebhookUserUserCreatedAllOf.initialize(this, objUser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUser) { 
        obj['objUser'] = objUser;
    }

    /**
     * Constructs a <code>WebhookUserUserCreatedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookUserUserCreatedAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookUserUserCreatedAllOf} The populated <code>WebhookUserUserCreatedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookUserUserCreatedAllOf();

            if (data.hasOwnProperty('objUser')) {
                obj['objUser'] = UserResponse.constructFromObject(data['objUser']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/UserResponse}
     */
    getObjUser() {
        return this.objUser;
    }

    /**
     * @param {module:eZmaxAPI/model/UserResponse} objUser
     */
    setObjUser(objUser) {
        this['objUser'] = objUser;
    }

}

/**
 * @member {module:eZmaxAPI/model/UserResponse} objUser
 */
WebhookUserUserCreatedAllOf.prototype['objUser'] = undefined;






export default WebhookUserUserCreatedAllOf;

