/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserstagedCreateUserV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UserstagedCreateUserV1ResponseMPayload
 * @version 1.1.18
 */
class UserstagedCreateUserV1ResponseMPayload {
    /**
     * Constructs a new <code>UserstagedCreateUserV1ResponseMPayload</code>.
     * Payload for POST /1/object/userstaged/{pkiUserstagedID}/createUser
     * @alias module:eZmaxAPI/model/UserstagedCreateUserV1ResponseMPayload
     * @param pkiUserID {Number} The unique ID of the User
     */
    constructor(pkiUserID) { 
        
        UserstagedCreateUserV1ResponseMPayload.initialize(this, pkiUserID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID) { 
        obj['pkiUserID'] = pkiUserID;
    }

    /**
     * Constructs a <code>UserstagedCreateUserV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserstagedCreateUserV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserstagedCreateUserV1ResponseMPayload} The populated <code>UserstagedCreateUserV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserstagedCreateUserV1ResponseMPayload();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserstagedCreateUserV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserstagedCreateUserV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserstagedCreateUserV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getPkiUserID() {
        return this.pkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} pkiUserID The unique ID of the User
     */
    setPkiUserID(pkiUserID) {
        this['pkiUserID'] = pkiUserID;
    }

}

UserstagedCreateUserV1ResponseMPayload.RequiredProperties = ["pkiUserID"];

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
UserstagedCreateUserV1ResponseMPayload.prototype['pkiUserID'] = undefined;






export default UserstagedCreateUserV1ResponseMPayload;

