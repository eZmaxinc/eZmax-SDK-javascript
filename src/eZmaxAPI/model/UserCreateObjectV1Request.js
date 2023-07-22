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
import UserRequestCompound from './UserRequestCompound';

/**
 * The UserCreateObjectV1Request model module.
 * @module eZmaxAPI/model/UserCreateObjectV1Request
 * @version 1.1.18
 */
class UserCreateObjectV1Request {
    /**
     * Constructs a new <code>UserCreateObjectV1Request</code>.
     * Request for POST /1/object/user
     * @alias module:eZmaxAPI/model/UserCreateObjectV1Request
     * @param a_objUser {Array.<module:eZmaxAPI/model/UserRequestCompound>} 
     */
    constructor(a_objUser) { 
        
        UserCreateObjectV1Request.initialize(this, a_objUser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUser) { 
        obj['a_objUser'] = a_objUser;
    }

    /**
     * Constructs a <code>UserCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserCreateObjectV1Request} The populated <code>UserCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateObjectV1Request();

            if (data.hasOwnProperty('a_objUser')) {
                obj['a_objUser'] = ApiClient.convertToType(data['a_objUser'], [UserRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserCreateObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUser']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUser'])) {
                throw new Error("Expected the field `a_objUser` to be an array in the JSON data but got " + data['a_objUser']);
            }
            // validate the optional field `a_objUser` (array)
            for (const item of data['a_objUser']) {
                UserRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/UserRequestCompound>}
     */
    getAObjUser() {
        return this.a_objUser;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UserRequestCompound>} a_objUser
     */
    setAObjUser(a_objUser) {
        this['a_objUser'] = a_objUser;
    }

}

UserCreateObjectV1Request.RequiredProperties = ["a_objUser"];

/**
 * @member {Array.<module:eZmaxAPI/model/UserRequestCompound>} a_objUser
 */
UserCreateObjectV1Request.prototype['a_objUser'] = undefined;






export default UserCreateObjectV1Request;

