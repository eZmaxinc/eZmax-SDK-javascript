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
import UserstagedResponse from './UserstagedResponse';

/**
 * The UserstagedResponseCompound model module.
 * @module eZmaxAPI/model/UserstagedResponseCompound
 * @version 1.1.18
 */
class UserstagedResponseCompound {
    /**
     * Constructs a new <code>UserstagedResponseCompound</code>.
     * A Userstaged Object
     * @alias module:eZmaxAPI/model/UserstagedResponseCompound
     * @implements module:eZmaxAPI/model/UserstagedResponse
     * @param pkiUserstagedID {Number} The unique ID of the Userstaged
     * @param fkiEmailID {Number} The unique ID of the Email
     * @param sEmailAddress {String} The email address.
     * @param sUserstagedFirstname {String} The firstname of the Userstaged
     * @param sUserstagedLastname {String} The lastname of the Userstaged
     * @param sUserstagedExternalid {String} The externalid of the Userstaged
     */
    constructor(pkiUserstagedID, fkiEmailID, sEmailAddress, sUserstagedFirstname, sUserstagedLastname, sUserstagedExternalid) { 
        UserstagedResponse.initialize(this, pkiUserstagedID, fkiEmailID, sEmailAddress, sUserstagedFirstname, sUserstagedLastname, sUserstagedExternalid);
        UserstagedResponseCompound.initialize(this, pkiUserstagedID, fkiEmailID, sEmailAddress, sUserstagedFirstname, sUserstagedLastname, sUserstagedExternalid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserstagedID, fkiEmailID, sEmailAddress, sUserstagedFirstname, sUserstagedLastname, sUserstagedExternalid) { 
        obj['pkiUserstagedID'] = pkiUserstagedID;
        obj['fkiEmailID'] = fkiEmailID;
        obj['sEmailAddress'] = sEmailAddress;
        obj['sUserstagedFirstname'] = sUserstagedFirstname;
        obj['sUserstagedLastname'] = sUserstagedLastname;
        obj['sUserstagedExternalid'] = sUserstagedExternalid;
    }

    /**
     * Constructs a <code>UserstagedResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserstagedResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserstagedResponseCompound} The populated <code>UserstagedResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserstagedResponseCompound();
            UserstagedResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiUserstagedID')) {
                obj['pkiUserstagedID'] = ApiClient.convertToType(data['pkiUserstagedID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEmailID')) {
                obj['fkiEmailID'] = ApiClient.convertToType(data['fkiEmailID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUserstagedFirstname')) {
                obj['sUserstagedFirstname'] = ApiClient.convertToType(data['sUserstagedFirstname'], 'String');
            }
            if (data.hasOwnProperty('sUserstagedLastname')) {
                obj['sUserstagedLastname'] = ApiClient.convertToType(data['sUserstagedLastname'], 'String');
            }
            if (data.hasOwnProperty('sUserstagedExternalid')) {
                obj['sUserstagedExternalid'] = ApiClient.convertToType(data['sUserstagedExternalid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserstagedResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserstagedResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserstagedResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }
        // ensure the json data is a string
        if (data['sUserstagedFirstname'] && !(typeof data['sUserstagedFirstname'] === 'string' || data['sUserstagedFirstname'] instanceof String)) {
            throw new Error("Expected the field `sUserstagedFirstname` to be a primitive type in the JSON string but got " + data['sUserstagedFirstname']);
        }
        // ensure the json data is a string
        if (data['sUserstagedLastname'] && !(typeof data['sUserstagedLastname'] === 'string' || data['sUserstagedLastname'] instanceof String)) {
            throw new Error("Expected the field `sUserstagedLastname` to be a primitive type in the JSON string but got " + data['sUserstagedLastname']);
        }
        // ensure the json data is a string
        if (data['sUserstagedExternalid'] && !(typeof data['sUserstagedExternalid'] === 'string' || data['sUserstagedExternalid'] instanceof String)) {
            throw new Error("Expected the field `sUserstagedExternalid` to be a primitive type in the JSON string but got " + data['sUserstagedExternalid']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Userstaged
     * minimum: 1
     * maximum: 65535
     * @return {Number}
     */
    getPkiUserstagedID() {
        return this.pkiUserstagedID;
    }

    /**
     * Sets The unique ID of the Userstaged
     * @param {Number} pkiUserstagedID The unique ID of the Userstaged
     */
    setPkiUserstagedID(pkiUserstagedID) {
        this['pkiUserstagedID'] = pkiUserstagedID;
    }
/**
     * Returns The unique ID of the Email
     * minimum: 1
     * maximum: 16777215
     * @return {Number}
     */
    getFkiEmailID() {
        return this.fkiEmailID;
    }

    /**
     * Sets The unique ID of the Email
     * @param {Number} fkiEmailID The unique ID of the Email
     */
    setFkiEmailID(fkiEmailID) {
        this['fkiEmailID'] = fkiEmailID;
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
     * Returns The firstname of the Userstaged
     * @return {String}
     */
    getSUserstagedFirstname() {
        return this.sUserstagedFirstname;
    }

    /**
     * Sets The firstname of the Userstaged
     * @param {String} sUserstagedFirstname The firstname of the Userstaged
     */
    setSUserstagedFirstname(sUserstagedFirstname) {
        this['sUserstagedFirstname'] = sUserstagedFirstname;
    }
/**
     * Returns The lastname of the Userstaged
     * @return {String}
     */
    getSUserstagedLastname() {
        return this.sUserstagedLastname;
    }

    /**
     * Sets The lastname of the Userstaged
     * @param {String} sUserstagedLastname The lastname of the Userstaged
     */
    setSUserstagedLastname(sUserstagedLastname) {
        this['sUserstagedLastname'] = sUserstagedLastname;
    }
/**
     * Returns The externalid of the Userstaged
     * @return {String}
     */
    getSUserstagedExternalid() {
        return this.sUserstagedExternalid;
    }

    /**
     * Sets The externalid of the Userstaged
     * @param {String} sUserstagedExternalid The externalid of the Userstaged
     */
    setSUserstagedExternalid(sUserstagedExternalid) {
        this['sUserstagedExternalid'] = sUserstagedExternalid;
    }

}

UserstagedResponseCompound.RequiredProperties = ["pkiUserstagedID", "fkiEmailID", "sEmailAddress", "sUserstagedFirstname", "sUserstagedLastname", "sUserstagedExternalid"];

/**
 * The unique ID of the Userstaged
 * @member {Number} pkiUserstagedID
 */
UserstagedResponseCompound.prototype['pkiUserstagedID'] = undefined;

/**
 * The unique ID of the Email
 * @member {Number} fkiEmailID
 */
UserstagedResponseCompound.prototype['fkiEmailID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
UserstagedResponseCompound.prototype['sEmailAddress'] = undefined;

/**
 * The firstname of the Userstaged
 * @member {String} sUserstagedFirstname
 */
UserstagedResponseCompound.prototype['sUserstagedFirstname'] = undefined;

/**
 * The lastname of the Userstaged
 * @member {String} sUserstagedLastname
 */
UserstagedResponseCompound.prototype['sUserstagedLastname'] = undefined;

/**
 * The externalid of the Userstaged
 * @member {String} sUserstagedExternalid
 */
UserstagedResponseCompound.prototype['sUserstagedExternalid'] = undefined;


// Implement UserstagedResponse interface:
/**
 * The unique ID of the Userstaged
 * @member {Number} pkiUserstagedID
 */
UserstagedResponse.prototype['pkiUserstagedID'] = undefined;
/**
 * The unique ID of the Email
 * @member {Number} fkiEmailID
 */
UserstagedResponse.prototype['fkiEmailID'] = undefined;
/**
 * The email address.
 * @member {String} sEmailAddress
 */
UserstagedResponse.prototype['sEmailAddress'] = undefined;
/**
 * The firstname of the Userstaged
 * @member {String} sUserstagedFirstname
 */
UserstagedResponse.prototype['sUserstagedFirstname'] = undefined;
/**
 * The lastname of the Userstaged
 * @member {String} sUserstagedLastname
 */
UserstagedResponse.prototype['sUserstagedLastname'] = undefined;
/**
 * The externalid of the Userstaged
 * @member {String} sUserstagedExternalid
 */
UserstagedResponse.prototype['sUserstagedExternalid'] = undefined;




export default UserstagedResponseCompound;

