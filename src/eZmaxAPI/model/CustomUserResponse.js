/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomUserResponse model module.
 * @module eZmaxAPI/model/CustomUserResponse
 * @version 1.1.7
 */
class CustomUserResponse {
    /**
     * Constructs a new <code>CustomUserResponse</code>.
     * A User Object
     * @alias module:eZmaxAPI/model/CustomUserResponse
     * @param pkiUserID {Number} The unique ID of the User
     * @param sUserLastname {String} The Last name of the user
     * @param sUserFirstname {String} The First name of the user
     * @param sEmailAddress {String} The email address.
     */
    constructor(pkiUserID, sUserLastname, sUserFirstname, sEmailAddress) { 
        
        CustomUserResponse.initialize(this, pkiUserID, sUserLastname, sUserFirstname, sEmailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID, sUserLastname, sUserFirstname, sEmailAddress) { 
        obj['pkiUserID'] = pkiUserID;
        obj['sUserLastname'] = sUserLastname;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sEmailAddress'] = sEmailAddress;
    }

    /**
     * Constructs a <code>CustomUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomUserResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomUserResponse} The populated <code>CustomUserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomUserResponse();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('sUserLastname')) {
                obj['sUserLastname'] = ApiClient.convertToType(data['sUserLastname'], 'String');
            }
            if (data.hasOwnProperty('sUserFirstname')) {
                obj['sUserFirstname'] = ApiClient.convertToType(data['sUserFirstname'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the User
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
/**
     * Returns The Last name of the user
     * @return {String}
     */
    getSUserLastname() {
        return this.sUserLastname;
    }

    /**
     * Sets The Last name of the user
     * @param {String} sUserLastname The Last name of the user
     */
    setSUserLastname(sUserLastname) {
        this['sUserLastname'] = sUserLastname;
    }
/**
     * Returns The First name of the user
     * @return {String}
     */
    getSUserFirstname() {
        return this.sUserFirstname;
    }

    /**
     * Sets The First name of the user
     * @param {String} sUserFirstname The First name of the user
     */
    setSUserFirstname(sUserFirstname) {
        this['sUserFirstname'] = sUserFirstname;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }

}

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
CustomUserResponse.prototype['pkiUserID'] = undefined;

/**
 * The Last name of the user
 * @member {String} sUserLastname
 */
CustomUserResponse.prototype['sUserLastname'] = undefined;

/**
 * The First name of the user
 * @member {String} sUserFirstname
 */
CustomUserResponse.prototype['sUserFirstname'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
CustomUserResponse.prototype['sEmailAddress'] = undefined;






export default CustomUserResponse;

