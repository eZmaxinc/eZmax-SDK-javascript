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

/**
 * The UsergroupexternalmembershipResponse model module.
 * @module eZmaxAPI/model/UsergroupexternalmembershipResponse
 * @version 1.2.0
 */
class UsergroupexternalmembershipResponse {
    /**
     * Constructs a new <code>UsergroupexternalmembershipResponse</code>.
     * A Usergroupexternalmembership Object
     * @alias module:eZmaxAPI/model/UsergroupexternalmembershipResponse
     * @param pkiUsergroupexternalmembershipID {Number} The unique ID of the Usergroupexternalmembership
     * @param fkiUsergroupexternalID {Number} The unique ID of the Usergroupexternal
     * @param fkiUserID {Number} The unique ID of the User
     * @param sUserFirstname {String} The first name of the user
     * @param sUserLastname {String} The last name of the user
     * @param sUserLoginname {String} The login name of the User.
     * @param sEmailAddress {String} The email address.
     * @param sUsergroupexternalName {String} The name of the Usergroupexternal
     */
    constructor(pkiUsergroupexternalmembershipID, fkiUsergroupexternalID, fkiUserID, sUserFirstname, sUserLastname, sUserLoginname, sEmailAddress, sUsergroupexternalName) { 
        
        UsergroupexternalmembershipResponse.initialize(this, pkiUsergroupexternalmembershipID, fkiUsergroupexternalID, fkiUserID, sUserFirstname, sUserLastname, sUserLoginname, sEmailAddress, sUsergroupexternalName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUsergroupexternalmembershipID, fkiUsergroupexternalID, fkiUserID, sUserFirstname, sUserLastname, sUserLoginname, sEmailAddress, sUsergroupexternalName) { 
        obj['pkiUsergroupexternalmembershipID'] = pkiUsergroupexternalmembershipID;
        obj['fkiUsergroupexternalID'] = fkiUsergroupexternalID;
        obj['fkiUserID'] = fkiUserID;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sUserLoginname'] = sUserLoginname;
        obj['sEmailAddress'] = sEmailAddress;
        obj['sUsergroupexternalName'] = sUsergroupexternalName;
    }

    /**
     * Constructs a <code>UsergroupexternalmembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupexternalmembershipResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupexternalmembershipResponse} The populated <code>UsergroupexternalmembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupexternalmembershipResponse();

            if (data.hasOwnProperty('pkiUsergroupexternalmembershipID')) {
                obj['pkiUsergroupexternalmembershipID'] = ApiClient.convertToType(data['pkiUsergroupexternalmembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupexternalID')) {
                obj['fkiUsergroupexternalID'] = ApiClient.convertToType(data['fkiUsergroupexternalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
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
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUsergroupexternalName')) {
                obj['sUsergroupexternalName'] = ApiClient.convertToType(data['sUsergroupexternalName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupexternalmembershipResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupexternalmembershipResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupexternalmembershipResponse.RequiredProperties) {
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
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }
        // ensure the json data is a string
        if (data['sUsergroupexternalName'] && !(typeof data['sUsergroupexternalName'] === 'string' || data['sUsergroupexternalName'] instanceof String)) {
            throw new Error("Expected the field `sUsergroupexternalName` to be a primitive type in the JSON string but got " + data['sUsergroupexternalName']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Usergroupexternalmembership
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiUsergroupexternalmembershipID() {
        return this.pkiUsergroupexternalmembershipID;
    }

    /**
     * Sets The unique ID of the Usergroupexternalmembership
     * @param {Number} pkiUsergroupexternalmembershipID The unique ID of the Usergroupexternalmembership
     */
    setPkiUsergroupexternalmembershipID(pkiUsergroupexternalmembershipID) {
        this['pkiUsergroupexternalmembershipID'] = pkiUsergroupexternalmembershipID;
    }
/**
     * Returns The unique ID of the Usergroupexternal
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getFkiUsergroupexternalID() {
        return this.fkiUsergroupexternalID;
    }

    /**
     * Sets The unique ID of the Usergroupexternal
     * @param {Number} fkiUsergroupexternalID The unique ID of the Usergroupexternal
     */
    setFkiUsergroupexternalID(fkiUsergroupexternalID) {
        this['fkiUsergroupexternalID'] = fkiUsergroupexternalID;
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
     * Returns The name of the Usergroupexternal
     * @return {String}
     */
    getSUsergroupexternalName() {
        return this.sUsergroupexternalName;
    }

    /**
     * Sets The name of the Usergroupexternal
     * @param {String} sUsergroupexternalName The name of the Usergroupexternal
     */
    setSUsergroupexternalName(sUsergroupexternalName) {
        this['sUsergroupexternalName'] = sUsergroupexternalName;
    }

}

UsergroupexternalmembershipResponse.RequiredProperties = ["pkiUsergroupexternalmembershipID", "fkiUsergroupexternalID", "fkiUserID", "sUserFirstname", "sUserLastname", "sUserLoginname", "sEmailAddress", "sUsergroupexternalName"];

/**
 * The unique ID of the Usergroupexternalmembership
 * @member {Number} pkiUsergroupexternalmembershipID
 */
UsergroupexternalmembershipResponse.prototype['pkiUsergroupexternalmembershipID'] = undefined;

/**
 * The unique ID of the Usergroupexternal
 * @member {Number} fkiUsergroupexternalID
 */
UsergroupexternalmembershipResponse.prototype['fkiUsergroupexternalID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
UsergroupexternalmembershipResponse.prototype['fkiUserID'] = undefined;

/**
 * The first name of the user
 * @member {String} sUserFirstname
 */
UsergroupexternalmembershipResponse.prototype['sUserFirstname'] = undefined;

/**
 * The last name of the user
 * @member {String} sUserLastname
 */
UsergroupexternalmembershipResponse.prototype['sUserLastname'] = undefined;

/**
 * The login name of the User.
 * @member {String} sUserLoginname
 */
UsergroupexternalmembershipResponse.prototype['sUserLoginname'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
UsergroupexternalmembershipResponse.prototype['sEmailAddress'] = undefined;

/**
 * The name of the Usergroupexternal
 * @member {String} sUsergroupexternalName
 */
UsergroupexternalmembershipResponse.prototype['sUsergroupexternalName'] = undefined;






export default UsergroupexternalmembershipResponse;
