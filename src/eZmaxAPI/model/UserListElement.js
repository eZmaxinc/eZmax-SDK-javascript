/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEUserEzsignaccess from './FieldEUserEzsignaccess';
import FieldEUserOrigin from './FieldEUserOrigin';
import FieldEUserType from './FieldEUserType';

/**
 * The UserListElement model module.
 * @module eZmaxAPI/model/UserListElement
 * @version 1.2.0
 */
class UserListElement {
    /**
     * Constructs a new <code>UserListElement</code>.
     * A User List Element
     * @alias module:eZmaxAPI/model/UserListElement
     * @param pkiUserID {Number} The unique ID of the User
     * @param sUserFirstname {String} The first name of the user
     * @param sUserLastname {String} The last name of the user
     * @param sUserLoginname {String} The login name of the User.
     * @param bUserIsactive {Boolean} Whether the User is active or not
     * @param eUserType {module:eZmaxAPI/model/FieldEUserType} 
     * @param eUserOrigin {module:eZmaxAPI/model/FieldEUserOrigin} 
     * @param eUserEzsignaccess {module:eZmaxAPI/model/FieldEUserEzsignaccess} 
     * @param sEmailAddress {String} The email address.
     */
    constructor(pkiUserID, sUserFirstname, sUserLastname, sUserLoginname, bUserIsactive, eUserType, eUserOrigin, eUserEzsignaccess, sEmailAddress) { 
        
        UserListElement.initialize(this, pkiUserID, sUserFirstname, sUserLastname, sUserLoginname, bUserIsactive, eUserType, eUserOrigin, eUserEzsignaccess, sEmailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID, sUserFirstname, sUserLastname, sUserLoginname, bUserIsactive, eUserType, eUserOrigin, eUserEzsignaccess, sEmailAddress) { 
        obj['pkiUserID'] = pkiUserID;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sUserLoginname'] = sUserLoginname;
        obj['bUserIsactive'] = bUserIsactive;
        obj['eUserType'] = eUserType;
        obj['eUserOrigin'] = eUserOrigin;
        obj['eUserEzsignaccess'] = eUserEzsignaccess;
        obj['sEmailAddress'] = sEmailAddress;
    }

    /**
     * Constructs a <code>UserListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserListElement} The populated <code>UserListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserListElement();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('sUserFirstname')) {
                obj['sUserFirstname'] = ApiClient.convertToType(data['sUserFirstname'], 'String');
            }
            if (data.hasOwnProperty('sUserLastname')) {
                obj['sUserLastname'] = ApiClient.convertToType(data['sUserLastname'], 'String');
            }
            if (data.hasOwnProperty('sUserLoginname')) {
                obj['sUserLoginname'] = ApiClient.convertToType(data['sUserLoginname'], 'String');
            }
            if (data.hasOwnProperty('bUserIsactive')) {
                obj['bUserIsactive'] = ApiClient.convertToType(data['bUserIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('eUserType')) {
                obj['eUserType'] = FieldEUserType.constructFromObject(data['eUserType']);
            }
            if (data.hasOwnProperty('eUserOrigin')) {
                obj['eUserOrigin'] = FieldEUserOrigin.constructFromObject(data['eUserOrigin']);
            }
            if (data.hasOwnProperty('eUserEzsignaccess')) {
                obj['eUserEzsignaccess'] = FieldEUserEzsignaccess.constructFromObject(data['eUserEzsignaccess']);
            }
            if (data.hasOwnProperty('dtUserEzsignprepaidexpiration')) {
                obj['dtUserEzsignprepaidexpiration'] = ApiClient.convertToType(data['dtUserEzsignprepaidexpiration'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUserJobtitle')) {
                obj['sUserJobtitle'] = ApiClient.convertToType(data['sUserJobtitle'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserListElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sUserFirstname'] && !(typeof data['sUserFirstname'] === 'string' || data['sUserFirstname'] instanceof String)) {
            throw new Error("Expected the field `sUserFirstname` to be a primitive type in the JSON string but got " + data['sUserFirstname']);
        }
        // ensure the json data is a string
        if (data['sUserLastname'] && !(typeof data['sUserLastname'] === 'string' || data['sUserLastname'] instanceof String)) {
            throw new Error("Expected the field `sUserLastname` to be a primitive type in the JSON string but got " + data['sUserLastname']);
        }
        // ensure the json data is a string
        if (data['sUserLoginname'] && !(typeof data['sUserLoginname'] === 'string' || data['sUserLoginname'] instanceof String)) {
            throw new Error("Expected the field `sUserLoginname` to be a primitive type in the JSON string but got " + data['sUserLoginname']);
        }
        // ensure the json data is a string
        if (data['dtUserEzsignprepaidexpiration'] && !(typeof data['dtUserEzsignprepaidexpiration'] === 'string' || data['dtUserEzsignprepaidexpiration'] instanceof String)) {
            throw new Error("Expected the field `dtUserEzsignprepaidexpiration` to be a primitive type in the JSON string but got " + data['dtUserEzsignprepaidexpiration']);
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }
        // ensure the json data is a string
        if (data['sUserJobtitle'] && !(typeof data['sUserJobtitle'] === 'string' || data['sUserJobtitle'] instanceof String)) {
            throw new Error("Expected the field `sUserJobtitle` to be a primitive type in the JSON string but got " + data['sUserJobtitle']);
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
/**
     * Returns The first name of the user
     * @return {String}
     */
    getSUserFirstname() {
        return this.sUserFirstname;
    }

    /**
     * Sets The first name of the user
     * @param {String} sUserFirstname The first name of the user
     */
    setSUserFirstname(sUserFirstname) {
        this['sUserFirstname'] = sUserFirstname;
    }
/**
     * Returns The last name of the user
     * @return {String}
     */
    getSUserLastname() {
        return this.sUserLastname;
    }

    /**
     * Sets The last name of the user
     * @param {String} sUserLastname The last name of the user
     */
    setSUserLastname(sUserLastname) {
        this['sUserLastname'] = sUserLastname;
    }
/**
     * Returns The login name of the User.
     * @return {String}
     */
    getSUserLoginname() {
        return this.sUserLoginname;
    }

    /**
     * Sets The login name of the User.
     * @param {String} sUserLoginname The login name of the User.
     */
    setSUserLoginname(sUserLoginname) {
        this['sUserLoginname'] = sUserLoginname;
    }
/**
     * Returns Whether the User is active or not
     * @return {Boolean}
     */
    getBUserIsactive() {
        return this.bUserIsactive;
    }

    /**
     * Sets Whether the User is active or not
     * @param {Boolean} bUserIsactive Whether the User is active or not
     */
    setBUserIsactive(bUserIsactive) {
        this['bUserIsactive'] = bUserIsactive;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEUserType}
     */
    getEUserType() {
        return this.eUserType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserType} eUserType
     */
    setEUserType(eUserType) {
        this['eUserType'] = eUserType;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEUserOrigin}
     */
    getEUserOrigin() {
        return this.eUserOrigin;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserOrigin} eUserOrigin
     */
    setEUserOrigin(eUserOrigin) {
        this['eUserOrigin'] = eUserOrigin;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEUserEzsignaccess}
     */
    getEUserEzsignaccess() {
        return this.eUserEzsignaccess;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserEzsignaccess} eUserEzsignaccess
     */
    setEUserEzsignaccess(eUserEzsignaccess) {
        this['eUserEzsignaccess'] = eUserEzsignaccess;
    }
/**
     * Returns The eZsign prepaid expiration date
     * @return {String}
     */
    getDtUserEzsignprepaidexpiration() {
        return this.dtUserEzsignprepaidexpiration;
    }

    /**
     * Sets The eZsign prepaid expiration date
     * @param {String} dtUserEzsignprepaidexpiration The eZsign prepaid expiration date
     */
    setDtUserEzsignprepaidexpiration(dtUserEzsignprepaidexpiration) {
        this['dtUserEzsignprepaidexpiration'] = dtUserEzsignprepaidexpiration;
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
/**
     * Returns The job title of the user
     * @return {String}
     */
    getSUserJobtitle() {
        return this.sUserJobtitle;
    }

    /**
     * Sets The job title of the user
     * @param {String} sUserJobtitle The job title of the user
     */
    setSUserJobtitle(sUserJobtitle) {
        this['sUserJobtitle'] = sUserJobtitle;
    }

}

UserListElement.RequiredProperties = ["pkiUserID", "sUserFirstname", "sUserLastname", "sUserLoginname", "bUserIsactive", "eUserType", "eUserOrigin", "eUserEzsignaccess", "sEmailAddress"];

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
UserListElement.prototype['pkiUserID'] = undefined;

/**
 * The first name of the user
 * @member {String} sUserFirstname
 */
UserListElement.prototype['sUserFirstname'] = undefined;

/**
 * The last name of the user
 * @member {String} sUserLastname
 */
UserListElement.prototype['sUserLastname'] = undefined;

/**
 * The login name of the User.
 * @member {String} sUserLoginname
 */
UserListElement.prototype['sUserLoginname'] = undefined;

/**
 * Whether the User is active or not
 * @member {Boolean} bUserIsactive
 */
UserListElement.prototype['bUserIsactive'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserType} eUserType
 */
UserListElement.prototype['eUserType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserOrigin} eUserOrigin
 */
UserListElement.prototype['eUserOrigin'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserEzsignaccess} eUserEzsignaccess
 */
UserListElement.prototype['eUserEzsignaccess'] = undefined;

/**
 * The eZsign prepaid expiration date
 * @member {String} dtUserEzsignprepaidexpiration
 */
UserListElement.prototype['dtUserEzsignprepaidexpiration'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
UserListElement.prototype['sEmailAddress'] = undefined;

/**
 * The job title of the user
 * @member {String} sUserJobtitle
 */
UserListElement.prototype['sUserJobtitle'] = undefined;






export default UserListElement;

