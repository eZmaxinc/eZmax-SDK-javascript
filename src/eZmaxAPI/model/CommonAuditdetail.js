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
 * The CommonAuditdetail model module.
 * @module eZmaxAPI/model/CommonAuditdetail
 * @version 1.1.7
 */
class CommonAuditdetail {
    /**
     * Constructs a new <code>CommonAuditdetail</code>.
     * Gives informations about the user that created the object or the last user to have modified it.  If the object was never modified after creation, both Created and Modified informations will be the same. 
     * @alias module:eZmaxAPI/model/CommonAuditdetail
     * @param fkiUserID {Number} The unique ID of the User
     * @param sUserLoginname {String} The Login name of the User.
     * @param sUserLastname {String} The Last name of the user
     * @param sUserFirstname {String} The First name of the user
     * @param dtAuditdetailDate {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    constructor(fkiUserID, sUserLoginname, sUserLastname, sUserFirstname, dtAuditdetailDate) { 
        
        CommonAuditdetail.initialize(this, fkiUserID, sUserLoginname, sUserLastname, sUserFirstname, dtAuditdetailDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUserID, sUserLoginname, sUserLastname, sUserFirstname, dtAuditdetailDate) { 
        obj['fkiUserID'] = fkiUserID;
        obj['sUserLoginname'] = sUserLoginname;
        obj['sUserLastname'] = sUserLastname;
        obj['sUserFirstname'] = sUserFirstname;
        obj['dtAuditdetailDate'] = dtAuditdetailDate;
    }

    /**
     * Constructs a <code>CommonAuditdetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonAuditdetail} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonAuditdetail} The populated <code>CommonAuditdetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonAuditdetail();

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyID')) {
                obj['fkiApikeyID'] = ApiClient.convertToType(data['fkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('sUserLoginname')) {
                obj['sUserLoginname'] = ApiClient.convertToType(data['sUserLoginname'], 'String');
            }
            if (data.hasOwnProperty('sUserLastname')) {
                obj['sUserLastname'] = ApiClient.convertToType(data['sUserLastname'], 'String');
            }
            if (data.hasOwnProperty('sUserFirstname')) {
                obj['sUserFirstname'] = ApiClient.convertToType(data['sUserFirstname'], 'String');
            }
            if (data.hasOwnProperty('sApikeyDescriptionX')) {
                obj['sApikeyDescriptionX'] = ApiClient.convertToType(data['sApikeyDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('dtAuditdetailDate')) {
                obj['dtAuditdetailDate'] = ApiClient.convertToType(data['dtAuditdetailDate'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the User
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
     * Returns The unique ID of the Apikey
     * @return {Number}
     */
    getFkiApikeyID() {
        return this.fkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyID The unique ID of the Apikey
     */
    setFkiApikeyID(fkiApikeyID) {
        this['fkiApikeyID'] = fkiApikeyID;
    }
/**
     * Returns The Login name of the User.
     * @return {String}
     */
    getSUserLoginname() {
        return this.sUserLoginname;
    }

    /**
     * Sets The Login name of the User.
     * @param {String} sUserLoginname The Login name of the User.
     */
    setSUserLoginname(sUserLoginname) {
        this['sUserLoginname'] = sUserLoginname;
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
     * Returns The description of the Apikey in the language of the requester
     * @return {String}
     */
    getSApikeyDescriptionX() {
        return this.sApikeyDescriptionX;
    }

    /**
     * Sets The description of the Apikey in the language of the requester
     * @param {String} sApikeyDescriptionX The description of the Apikey in the language of the requester
     */
    setSApikeyDescriptionX(sApikeyDescriptionX) {
        this['sApikeyDescriptionX'] = sApikeyDescriptionX;
    }
/**
     * Returns Represent a Date Time. The timezone is the one configured in the User's profile.
     * @return {String}
     */
    getDtAuditdetailDate() {
        return this.dtAuditdetailDate;
    }

    /**
     * Sets Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param {String} dtAuditdetailDate Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    setDtAuditdetailDate(dtAuditdetailDate) {
        this['dtAuditdetailDate'] = dtAuditdetailDate;
    }

}

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
CommonAuditdetail.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
CommonAuditdetail.prototype['fkiApikeyID'] = undefined;

/**
 * The Login name of the User.
 * @member {String} sUserLoginname
 */
CommonAuditdetail.prototype['sUserLoginname'] = undefined;

/**
 * The Last name of the user
 * @member {String} sUserLastname
 */
CommonAuditdetail.prototype['sUserLastname'] = undefined;

/**
 * The First name of the user
 * @member {String} sUserFirstname
 */
CommonAuditdetail.prototype['sUserFirstname'] = undefined;

/**
 * The description of the Apikey in the language of the requester
 * @member {String} sApikeyDescriptionX
 */
CommonAuditdetail.prototype['sApikeyDescriptionX'] = undefined;

/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtAuditdetailDate
 */
CommonAuditdetail.prototype['dtAuditdetailDate'] = undefined;






export default CommonAuditdetail;

