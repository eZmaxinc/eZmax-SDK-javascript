/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignsignerResponseCompoundContact model module.
 * @module eZmaxAPI/model/EzsignsignerResponseCompoundContact
 * @version 1.1.9
 */
class EzsignsignerResponseCompoundContact {
    /**
     * Constructs a new <code>EzsignsignerResponseCompoundContact</code>.
     * A Ezsignsigner-&gt;Contact Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignerResponseCompoundContact
     * @param pkiContactID {Number} The unique ID of the Contact
     * @param sContactFirstname {String} The First name of the contact
     * @param sContactLastname {String} The Last name of the contact
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    constructor(pkiContactID, sContactFirstname, sContactLastname, fkiLanguageID) { 
        
        EzsignsignerResponseCompoundContact.initialize(this, pkiContactID, sContactFirstname, sContactLastname, fkiLanguageID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiContactID, sContactFirstname, sContactLastname, fkiLanguageID) { 
        obj['pkiContactID'] = pkiContactID;
        obj['sContactFirstname'] = sContactFirstname;
        obj['sContactLastname'] = sContactLastname;
        obj['fkiLanguageID'] = fkiLanguageID;
    }

    /**
     * Constructs a <code>EzsignsignerResponseCompoundContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerResponseCompoundContact} The populated <code>EzsignsignerResponseCompoundContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerResponseCompoundContact();

            if (data.hasOwnProperty('pkiContactID')) {
                obj['pkiContactID'] = ApiClient.convertToType(data['pkiContactID'], 'Number');
            }
            if (data.hasOwnProperty('sContactFirstname')) {
                obj['sContactFirstname'] = ApiClient.convertToType(data['sContactFirstname'], 'String');
            }
            if (data.hasOwnProperty('sContactLastname')) {
                obj['sContactLastname'] = ApiClient.convertToType(data['sContactLastname'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sPhoneE164')) {
                obj['sPhoneE164'] = ApiClient.convertToType(data['sPhoneE164'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExtension')) {
                obj['sPhoneExtension'] = ApiClient.convertToType(data['sPhoneExtension'], 'String');
            }
            if (data.hasOwnProperty('sPhoneE164Cell')) {
                obj['sPhoneE164Cell'] = ApiClient.convertToType(data['sPhoneE164Cell'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Contact
     * minimum: 0
     * @return {Number}
     */
    getPkiContactID() {
        return this.pkiContactID;
    }

    /**
     * Sets The unique ID of the Contact
     * @param {Number} pkiContactID The unique ID of the Contact
     */
    setPkiContactID(pkiContactID) {
        this['pkiContactID'] = pkiContactID;
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
     * Returns A phone number in E.164 Format
     * @return {String}
     */
    getSPhoneE164() {
        return this.sPhoneE164;
    }

    /**
     * Sets A phone number in E.164 Format
     * @param {String} sPhoneE164 A phone number in E.164 Format
     */
    setSPhoneE164(sPhoneE164) {
        this['sPhoneE164'] = sPhoneE164;
    }
/**
     * Returns The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     * @return {String}
     */
    getSPhoneExtension() {
        return this.sPhoneExtension;
    }

    /**
     * Sets The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     * @param {String} sPhoneExtension The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
     */
    setSPhoneExtension(sPhoneExtension) {
        this['sPhoneExtension'] = sPhoneExtension;
    }
/**
     * Returns A phone number in E.164 Format
     * @return {String}
     */
    getSPhoneE164Cell() {
        return this.sPhoneE164Cell;
    }

    /**
     * Sets A phone number in E.164 Format
     * @param {String} sPhoneE164Cell A phone number in E.164 Format
     */
    setSPhoneE164Cell(sPhoneE164Cell) {
        this['sPhoneE164Cell'] = sPhoneE164Cell;
    }

}

/**
 * The unique ID of the Contact
 * @member {Number} pkiContactID
 */
EzsignsignerResponseCompoundContact.prototype['pkiContactID'] = undefined;

/**
 * The First name of the contact
 * @member {String} sContactFirstname
 */
EzsignsignerResponseCompoundContact.prototype['sContactFirstname'] = undefined;

/**
 * The Last name of the contact
 * @member {String} sContactLastname
 */
EzsignsignerResponseCompoundContact.prototype['sContactLastname'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignsignerResponseCompoundContact.prototype['fkiLanguageID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
EzsignsignerResponseCompoundContact.prototype['sEmailAddress'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164
 */
EzsignsignerResponseCompoundContact.prototype['sPhoneE164'] = undefined;

/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
EzsignsignerResponseCompoundContact.prototype['sPhoneExtension'] = undefined;

/**
 * A phone number in E.164 Format
 * @member {String} sPhoneE164Cell
 */
EzsignsignerResponseCompoundContact.prototype['sPhoneE164Cell'] = undefined;






export default EzsignsignerResponseCompoundContact;

