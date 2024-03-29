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
import FieldEUserEzsignsendreminderfrequency from './FieldEUserEzsignsendreminderfrequency';

/**
 * The ActivesessionResponseCompoundUser model module.
 * @module eZmaxAPI/model/ActivesessionResponseCompoundUser
 * @version 1.1.18
 */
class ActivesessionResponseCompoundUser {
    /**
     * Constructs a new <code>ActivesessionResponseCompoundUser</code>.
     * An Activesession-&gt;User Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/ActivesessionResponseCompoundUser
     * @param pkiUserID {Number} The unique ID of the User
     * @param fkiTimezoneID {Number} The unique ID of the Timezone
     * @param sAvatarUrl {String} The url of the picture used as avatar
     * @param sUserFirstname {String} The first name of the user
     * @param sUserLastname {String} The last name of the user
     * @param sEmailAddress {String} The email address.
     * @param eUserEzsignsendreminderfrequency {module:eZmaxAPI/model/FieldEUserEzsignsendreminderfrequency} 
     * @param iUserInterfacecolor {Number} The int32 representation of the interface color. For example, RGB color #39435B would be 3752795
     * @param bUserInterfacedark {Boolean} Whether to use a dark mode interface
     * @param iUserListresult {Number} The number of rows to return by default in lists
     */
    constructor(pkiUserID, fkiTimezoneID, sAvatarUrl, sUserFirstname, sUserLastname, sEmailAddress, eUserEzsignsendreminderfrequency, iUserInterfacecolor, bUserInterfacedark, iUserListresult) { 
        
        ActivesessionResponseCompoundUser.initialize(this, pkiUserID, fkiTimezoneID, sAvatarUrl, sUserFirstname, sUserLastname, sEmailAddress, eUserEzsignsendreminderfrequency, iUserInterfacecolor, bUserInterfacedark, iUserListresult);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID, fkiTimezoneID, sAvatarUrl, sUserFirstname, sUserLastname, sEmailAddress, eUserEzsignsendreminderfrequency, iUserInterfacecolor, bUserInterfacedark, iUserListresult) { 
        obj['pkiUserID'] = pkiUserID;
        obj['fkiTimezoneID'] = fkiTimezoneID;
        obj['sAvatarUrl'] = sAvatarUrl;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sEmailAddress'] = sEmailAddress;
        obj['eUserEzsignsendreminderfrequency'] = eUserEzsignsendreminderfrequency;
        obj['iUserInterfacecolor'] = iUserInterfacecolor;
        obj['bUserInterfacedark'] = bUserInterfacedark;
        obj['iUserListresult'] = iUserListresult;
    }

    /**
     * Constructs a <code>ActivesessionResponseCompoundUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} The populated <code>ActivesessionResponseCompoundUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionResponseCompoundUser();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiTimezoneID')) {
                obj['fkiTimezoneID'] = ApiClient.convertToType(data['fkiTimezoneID'], 'Number');
            }
            if (data.hasOwnProperty('sAvatarUrl')) {
                obj['sAvatarUrl'] = ApiClient.convertToType(data['sAvatarUrl'], 'String');
            }
            if (data.hasOwnProperty('sUserFirstname')) {
                obj['sUserFirstname'] = ApiClient.convertToType(data['sUserFirstname'], 'String');
            }
            if (data.hasOwnProperty('sUserLastname')) {
                obj['sUserLastname'] = ApiClient.convertToType(data['sUserLastname'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('eUserEzsignsendreminderfrequency')) {
                obj['eUserEzsignsendreminderfrequency'] = FieldEUserEzsignsendreminderfrequency.constructFromObject(data['eUserEzsignsendreminderfrequency']);
            }
            if (data.hasOwnProperty('iUserInterfacecolor')) {
                obj['iUserInterfacecolor'] = ApiClient.convertToType(data['iUserInterfacecolor'], 'Number');
            }
            if (data.hasOwnProperty('bUserInterfacedark')) {
                obj['bUserInterfacedark'] = ApiClient.convertToType(data['bUserInterfacedark'], 'Boolean');
            }
            if (data.hasOwnProperty('iUserListresult')) {
                obj['iUserListresult'] = ApiClient.convertToType(data['iUserListresult'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivesessionResponseCompoundUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivesessionResponseCompoundUser</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActivesessionResponseCompoundUser.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sAvatarUrl'] && !(typeof data['sAvatarUrl'] === 'string' || data['sAvatarUrl'] instanceof String)) {
            throw new Error("Expected the field `sAvatarUrl` to be a primitive type in the JSON string but got " + data['sAvatarUrl']);
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
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
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
     * Returns The unique ID of the Timezone
     * minimum: 0
     * @return {Number}
     */
    getFkiTimezoneID() {
        return this.fkiTimezoneID;
    }

    /**
     * Sets The unique ID of the Timezone
     * @param {Number} fkiTimezoneID The unique ID of the Timezone
     */
    setFkiTimezoneID(fkiTimezoneID) {
        this['fkiTimezoneID'] = fkiTimezoneID;
    }
/**
     * Returns The url of the picture used as avatar
     * @return {String}
     */
    getSAvatarUrl() {
        return this.sAvatarUrl;
    }

    /**
     * Sets The url of the picture used as avatar
     * @param {String} sAvatarUrl The url of the picture used as avatar
     */
    setSAvatarUrl(sAvatarUrl) {
        this['sAvatarUrl'] = sAvatarUrl;
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
     * @return {module:eZmaxAPI/model/FieldEUserEzsignsendreminderfrequency}
     */
    getEUserEzsignsendreminderfrequency() {
        return this.eUserEzsignsendreminderfrequency;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserEzsignsendreminderfrequency} eUserEzsignsendreminderfrequency
     */
    setEUserEzsignsendreminderfrequency(eUserEzsignsendreminderfrequency) {
        this['eUserEzsignsendreminderfrequency'] = eUserEzsignsendreminderfrequency;
    }
/**
     * Returns The int32 representation of the interface color. For example, RGB color #39435B would be 3752795
     * minimum: 0
     * @return {Number}
     */
    getIUserInterfacecolor() {
        return this.iUserInterfacecolor;
    }

    /**
     * Sets The int32 representation of the interface color. For example, RGB color #39435B would be 3752795
     * @param {Number} iUserInterfacecolor The int32 representation of the interface color. For example, RGB color #39435B would be 3752795
     */
    setIUserInterfacecolor(iUserInterfacecolor) {
        this['iUserInterfacecolor'] = iUserInterfacecolor;
    }
/**
     * Returns Whether to use a dark mode interface
     * @return {Boolean}
     */
    getBUserInterfacedark() {
        return this.bUserInterfacedark;
    }

    /**
     * Sets Whether to use a dark mode interface
     * @param {Boolean} bUserInterfacedark Whether to use a dark mode interface
     */
    setBUserInterfacedark(bUserInterfacedark) {
        this['bUserInterfacedark'] = bUserInterfacedark;
    }
/**
     * Returns The number of rows to return by default in lists
     * minimum: 5
     * maximum: 500
     * @return {Number}
     */
    getIUserListresult() {
        return this.iUserListresult;
    }

    /**
     * Sets The number of rows to return by default in lists
     * @param {Number} iUserListresult The number of rows to return by default in lists
     */
    setIUserListresult(iUserListresult) {
        this['iUserListresult'] = iUserListresult;
    }

}

ActivesessionResponseCompoundUser.RequiredProperties = ["pkiUserID", "fkiTimezoneID", "sAvatarUrl", "sUserFirstname", "sUserLastname", "sEmailAddress", "eUserEzsignsendreminderfrequency", "iUserInterfacecolor", "bUserInterfacedark", "iUserListresult"];

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
ActivesessionResponseCompoundUser.prototype['pkiUserID'] = undefined;

/**
 * The unique ID of the Timezone
 * @member {Number} fkiTimezoneID
 */
ActivesessionResponseCompoundUser.prototype['fkiTimezoneID'] = undefined;

/**
 * The url of the picture used as avatar
 * @member {String} sAvatarUrl
 */
ActivesessionResponseCompoundUser.prototype['sAvatarUrl'] = undefined;

/**
 * The first name of the user
 * @member {String} sUserFirstname
 */
ActivesessionResponseCompoundUser.prototype['sUserFirstname'] = undefined;

/**
 * The last name of the user
 * @member {String} sUserLastname
 */
ActivesessionResponseCompoundUser.prototype['sUserLastname'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
ActivesessionResponseCompoundUser.prototype['sEmailAddress'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserEzsignsendreminderfrequency} eUserEzsignsendreminderfrequency
 */
ActivesessionResponseCompoundUser.prototype['eUserEzsignsendreminderfrequency'] = undefined;

/**
 * The int32 representation of the interface color. For example, RGB color #39435B would be 3752795
 * @member {Number} iUserInterfacecolor
 */
ActivesessionResponseCompoundUser.prototype['iUserInterfacecolor'] = undefined;

/**
 * Whether to use a dark mode interface
 * @member {Boolean} bUserInterfacedark
 */
ActivesessionResponseCompoundUser.prototype['bUserInterfacedark'] = undefined;

/**
 * The number of rows to return by default in lists
 * @member {Number} iUserListresult
 */
ActivesessionResponseCompoundUser.prototype['iUserListresult'] = undefined;






export default ActivesessionResponseCompoundUser;

