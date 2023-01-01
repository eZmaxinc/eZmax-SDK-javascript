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
 * The EzsignfoldersignerassociationResponseCompoundUser model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser
 * @version 1.1.17
 */
class EzsignfoldersignerassociationResponseCompoundUser {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationResponseCompoundUser</code>.
     * A Ezsignfoldersignerassociation-&gt;User Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser
     * @param pkiUserID {Number} The unique ID of the User
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sUserFirstname {String} The First name of the user
     * @param sUserLastname {String} The Last name of the user
     * @param sEmailAddress {String} The email address.
     */
    constructor(pkiUserID, fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress) { 
        
        EzsignfoldersignerassociationResponseCompoundUser.initialize(this, pkiUserID, fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID, fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress) { 
        obj['pkiUserID'] = pkiUserID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sEmailAddress'] = sEmailAddress;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationResponseCompoundUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationResponseCompoundUser} The populated <code>EzsignfoldersignerassociationResponseCompoundUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationResponseCompoundUser();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldersignerassociationResponseCompoundUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldersignerassociationResponseCompoundUser</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldersignerassociationResponseCompoundUser.RequiredProperties) {
            if (!data[property]) {
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
     * Returns The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * minimum: 1
     * maximum: 2
     * @return {Number}
     */
    getFkiLanguageID() {
        return this.fkiLanguageID;
    }

    /**
     * Sets The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param {Number} fkiLanguageID The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    setFkiLanguageID(fkiLanguageID) {
        this['fkiLanguageID'] = fkiLanguageID;
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

EzsignfoldersignerassociationResponseCompoundUser.RequiredProperties = ["pkiUserID", "fkiLanguageID", "sUserFirstname", "sUserLastname", "sEmailAddress"];

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
EzsignfoldersignerassociationResponseCompoundUser.prototype['pkiUserID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignfoldersignerassociationResponseCompoundUser.prototype['fkiLanguageID'] = undefined;

/**
 * The First name of the user
 * @member {String} sUserFirstname
 */
EzsignfoldersignerassociationResponseCompoundUser.prototype['sUserFirstname'] = undefined;

/**
 * The Last name of the user
 * @member {String} sUserLastname
 */
EzsignfoldersignerassociationResponseCompoundUser.prototype['sUserLastname'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
EzsignfoldersignerassociationResponseCompoundUser.prototype['sEmailAddress'] = undefined;






export default EzsignfoldersignerassociationResponseCompoundUser;

