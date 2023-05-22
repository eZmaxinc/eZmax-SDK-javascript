/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserstagedMapV1Request model module.
 * @module eZmaxAPI/model/UserstagedMapV1Request
 * @version 1.1.17
 */
class UserstagedMapV1Request {
    /**
     * Constructs a new <code>UserstagedMapV1Request</code>.
     * Request for POST /1/object/userstaged/{pkiUserstagedID}/map
     * @alias module:eZmaxAPI/model/UserstagedMapV1Request
     * @param fkiUserID {Number} The unique ID of the User
     */
    constructor(fkiUserID) { 
        
        UserstagedMapV1Request.initialize(this, fkiUserID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUserID) { 
        obj['fkiUserID'] = fkiUserID;
    }

    /**
     * Constructs a <code>UserstagedMapV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserstagedMapV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserstagedMapV1Request} The populated <code>UserstagedMapV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserstagedMapV1Request();

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserstagedMapV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserstagedMapV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserstagedMapV1Request.RequiredProperties) {
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
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }

}

UserstagedMapV1Request.RequiredProperties = ["fkiUserID"];

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
UserstagedMapV1Request.prototype['fkiUserID'] = undefined;






export default UserstagedMapV1Request;

