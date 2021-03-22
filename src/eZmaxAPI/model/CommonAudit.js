/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.38
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonAudit model module.
 * @module eZmaxAPI/model/CommonAudit
 * @version 1.0.38
 */
class CommonAudit {
    /**
     * Constructs a new <code>CommonAudit</code>.
     * Gives informations about the user that created the object and the last user to have modified it.  If the object was never modified after creation, both Created and Modified informations will be the same.  Apikey details will only be provided if the changes were made by an API key.  
     * @alias module:eZmaxAPI/model/CommonAudit
     * @param fkiUserIDCreated {Number} The unique ID of the User
     * @param fkiUserIDModified {Number} The unique ID of the User
     * @param dtCreatedDate {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param dtModifiedDate {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    constructor(fkiUserIDCreated, fkiUserIDModified, dtCreatedDate, dtModifiedDate) { 
        
        CommonAudit.initialize(this, fkiUserIDCreated, fkiUserIDModified, dtCreatedDate, dtModifiedDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUserIDCreated, fkiUserIDModified, dtCreatedDate, dtModifiedDate) { 
        obj['fkiUserIDCreated'] = fkiUserIDCreated;
        obj['fkiUserIDModified'] = fkiUserIDModified;
        obj['dtCreatedDate'] = dtCreatedDate;
        obj['dtModifiedDate'] = dtModifiedDate;
    }

    /**
     * Constructs a <code>CommonAudit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonAudit} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonAudit} The populated <code>CommonAudit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonAudit();

            if (data.hasOwnProperty('fkiUserIDCreated')) {
                obj['fkiUserIDCreated'] = ApiClient.convertToType(data['fkiUserIDCreated'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserIDModified')) {
                obj['fkiUserIDModified'] = ApiClient.convertToType(data['fkiUserIDModified'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyIDCreated')) {
                obj['fkiApikeyIDCreated'] = ApiClient.convertToType(data['fkiApikeyIDCreated'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyIDModified')) {
                obj['fkiApikeyIDModified'] = ApiClient.convertToType(data['fkiApikeyIDModified'], 'Number');
            }
            if (data.hasOwnProperty('dtCreatedDate')) {
                obj['dtCreatedDate'] = ApiClient.convertToType(data['dtCreatedDate'], 'String');
            }
            if (data.hasOwnProperty('dtModifiedDate')) {
                obj['dtModifiedDate'] = ApiClient.convertToType(data['dtModifiedDate'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the User
     * @return {Number}
     */
    getFkiUserIDCreated() {
        return this.fkiUserIDCreated;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserIDCreated The unique ID of the User
     */
    setFkiUserIDCreated(fkiUserIDCreated) {
        this['fkiUserIDCreated'] = fkiUserIDCreated;
    }
/**
     * Returns The unique ID of the User
     * @return {Number}
     */
    getFkiUserIDModified() {
        return this.fkiUserIDModified;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserIDModified The unique ID of the User
     */
    setFkiUserIDModified(fkiUserIDModified) {
        this['fkiUserIDModified'] = fkiUserIDModified;
    }
/**
     * Returns The unique ID of the Apikey
     * @return {Number}
     */
    getFkiApikeyIDCreated() {
        return this.fkiApikeyIDCreated;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyIDCreated The unique ID of the Apikey
     */
    setFkiApikeyIDCreated(fkiApikeyIDCreated) {
        this['fkiApikeyIDCreated'] = fkiApikeyIDCreated;
    }
/**
     * Returns The unique ID of the Apikey
     * @return {Number}
     */
    getFkiApikeyIDModified() {
        return this.fkiApikeyIDModified;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyIDModified The unique ID of the Apikey
     */
    setFkiApikeyIDModified(fkiApikeyIDModified) {
        this['fkiApikeyIDModified'] = fkiApikeyIDModified;
    }
/**
     * Returns Represent a Date Time. The timezone is the one configured in the User's profile.
     * @return {String}
     */
    getDtCreatedDate() {
        return this.dtCreatedDate;
    }

    /**
     * Sets Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param {String} dtCreatedDate Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    setDtCreatedDate(dtCreatedDate) {
        this['dtCreatedDate'] = dtCreatedDate;
    }
/**
     * Returns Represent a Date Time. The timezone is the one configured in the User's profile.
     * @return {String}
     */
    getDtModifiedDate() {
        return this.dtModifiedDate;
    }

    /**
     * Sets Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param {String} dtModifiedDate Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    setDtModifiedDate(dtModifiedDate) {
        this['dtModifiedDate'] = dtModifiedDate;
    }

}

/**
 * The unique ID of the User
 * @member {Number} fkiUserIDCreated
 */
CommonAudit.prototype['fkiUserIDCreated'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserIDModified
 */
CommonAudit.prototype['fkiUserIDModified'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyIDCreated
 */
CommonAudit.prototype['fkiApikeyIDCreated'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyIDModified
 */
CommonAudit.prototype['fkiApikeyIDModified'] = undefined;

/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtCreatedDate
 */
CommonAudit.prototype['dtCreatedDate'] = undefined;

/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtModifiedDate
 */
CommonAudit.prototype['dtModifiedDate'] = undefined;






export default CommonAudit;

