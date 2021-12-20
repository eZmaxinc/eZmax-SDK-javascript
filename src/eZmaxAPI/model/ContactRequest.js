/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContactRequest model module.
 * @module eZmaxAPI/model/ContactRequest
 * @version 1.1.4
 */
class ContactRequest {
    /**
     * Constructs a new <code>ContactRequest</code>.
     * A Contact Object
     * @alias module:eZmaxAPI/model/ContactRequest
     * @param fkiContacttitleID {Number} The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sContactFirstname {String} The First name of the contact
     * @param sContactLastname {String} The Last name of the contact
     * @param sContactCompany {String} The Company name of the contact
     */
    constructor(fkiContacttitleID, fkiLanguageID, sContactFirstname, sContactLastname, sContactCompany) { 
        
        ContactRequest.initialize(this, fkiContacttitleID, fkiLanguageID, sContactFirstname, sContactLastname, sContactCompany);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiContacttitleID, fkiLanguageID, sContactFirstname, sContactLastname, sContactCompany) { 
        obj['fkiContacttitleID'] = fkiContacttitleID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sContactFirstname'] = sContactFirstname;
        obj['sContactLastname'] = sContactLastname;
        obj['sContactCompany'] = sContactCompany;
    }

    /**
     * Constructs a <code>ContactRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ContactRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ContactRequest} The populated <code>ContactRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactRequest();

            if (data.hasOwnProperty('fkiContacttitleID')) {
                obj['fkiContacttitleID'] = ApiClient.convertToType(data['fkiContacttitleID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sContactFirstname')) {
                obj['sContactFirstname'] = ApiClient.convertToType(data['sContactFirstname'], 'String');
            }
            if (data.hasOwnProperty('sContactLastname')) {
                obj['sContactLastname'] = ApiClient.convertToType(data['sContactLastname'], 'String');
            }
            if (data.hasOwnProperty('sContactCompany')) {
                obj['sContactCompany'] = ApiClient.convertToType(data['sContactCompany'], 'String');
            }
            if (data.hasOwnProperty('dtContactBirthdate')) {
                obj['dtContactBirthdate'] = ApiClient.convertToType(data['dtContactBirthdate'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
     * @return {Number}
     */
    getFkiContacttitleID() {
        return this.fkiContacttitleID;
    }

    /**
     * Sets The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
     * @param {Number} fkiContacttitleID The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
     */
    setFkiContacttitleID(fkiContacttitleID) {
        this['fkiContacttitleID'] = fkiContacttitleID;
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
     * Returns The First name of the contact
     * @return {String}
     */
    getSContactFirstname() {
        return this.sContactFirstname;
    }

    /**
     * Sets The First name of the contact
     * @param {String} sContactFirstname The First name of the contact
     */
    setSContactFirstname(sContactFirstname) {
        this['sContactFirstname'] = sContactFirstname;
    }
/**
     * Returns The Last name of the contact
     * @return {String}
     */
    getSContactLastname() {
        return this.sContactLastname;
    }

    /**
     * Sets The Last name of the contact
     * @param {String} sContactLastname The Last name of the contact
     */
    setSContactLastname(sContactLastname) {
        this['sContactLastname'] = sContactLastname;
    }
/**
     * Returns The Company name of the contact
     * @return {String}
     */
    getSContactCompany() {
        return this.sContactCompany;
    }

    /**
     * Sets The Company name of the contact
     * @param {String} sContactCompany The Company name of the contact
     */
    setSContactCompany(sContactCompany) {
        this['sContactCompany'] = sContactCompany;
    }
/**
     * Returns The Birth Date of the contact
     * @return {String}
     */
    getDtContactBirthdate() {
        return this.dtContactBirthdate;
    }

    /**
     * Sets The Birth Date of the contact
     * @param {String} dtContactBirthdate The Birth Date of the contact
     */
    setDtContactBirthdate(dtContactBirthdate) {
        this['dtContactBirthdate'] = dtContactBirthdate;
    }

}

/**
 * The unique ID of the Contacttitle.  Valid values:  |Value|Description| |-|-| |1|Ms.| |2|Mr.| |4|(Blank)| |5|Me (For Notaries)|
 * @member {Number} fkiContacttitleID
 */
ContactRequest.prototype['fkiContacttitleID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
ContactRequest.prototype['fkiLanguageID'] = undefined;

/**
 * The First name of the contact
 * @member {String} sContactFirstname
 */
ContactRequest.prototype['sContactFirstname'] = undefined;

/**
 * The Last name of the contact
 * @member {String} sContactLastname
 */
ContactRequest.prototype['sContactLastname'] = undefined;

/**
 * The Company name of the contact
 * @member {String} sContactCompany
 */
ContactRequest.prototype['sContactCompany'] = undefined;

/**
 * The Birth Date of the contact
 * @member {String} dtContactBirthdate
 */
ContactRequest.prototype['dtContactBirthdate'] = undefined;






export default ContactRequest;

