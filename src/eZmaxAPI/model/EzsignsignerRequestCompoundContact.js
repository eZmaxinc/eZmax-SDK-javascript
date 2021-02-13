/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignsignerRequestCompoundContact model module.
 * @module eZmaxAPI/model/EzsignsignerRequestCompoundContact
 * @version 1.0.30
 */
class EzsignsignerRequestCompoundContact {
    /**
     * Constructs a new <code>EzsignsignerRequestCompoundContact</code>.
     * A Ezsignsigner-&gt;Contact Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignerRequestCompoundContact
     * @param sContactFirstname {String} The first name of the Contact
     * @param sContactLastname {String} The last name of the Contact
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    constructor(sContactFirstname, sContactLastname, fkiLanguageID) { 
        
        EzsignsignerRequestCompoundContact.initialize(this, sContactFirstname, sContactLastname, fkiLanguageID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sContactFirstname, sContactLastname, fkiLanguageID) { 
        obj['sContactFirstname'] = sContactFirstname;
        obj['sContactLastname'] = sContactLastname;
        obj['fkiLanguageID'] = fkiLanguageID;
    }

    /**
     * Constructs a <code>EzsignsignerRequestCompoundContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignerRequestCompoundContact} The populated <code>EzsignsignerRequestCompoundContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignerRequestCompoundContact();

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
            if (data.hasOwnProperty('sPhoneNumber')) {
                obj['sPhoneNumber'] = ApiClient.convertToType(data['sPhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('sPhoneNumberCell')) {
                obj['sPhoneNumberCell'] = ApiClient.convertToType(data['sPhoneNumberCell'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The first name of the Contact
     * @return {String}
     */
    getSContactFirstname() {
        return this.sContactFirstname;
    }

    /**
     * Sets The first name of the Contact
     * @param {String} sContactFirstname The first name of the Contact
     */
    setSContactFirstname(sContactFirstname) {
        this['sContactFirstname'] = sContactFirstname;
    }
/**
     * Returns The last name of the Contact
     * @return {String}
     */
    getSContactLastname() {
        return this.sContactLastname;
    }

    /**
     * Sets The last name of the Contact
     * @param {String} sContactLastname The last name of the Contact
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
     * Returns The email address of the contact. Must be filled if email authentification was requested
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address of the contact. Must be filled if email authentification was requested
     * @param {String} sEmailAddress The email address of the contact. Must be filled if email authentification was requested
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }
/**
     * Returns The Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     * @return {String}
     */
    getSPhoneNumber() {
        return this.sPhoneNumber;
    }

    /**
     * Sets The Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     * @param {String} sPhoneNumber The Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     */
    setSPhoneNumber(sPhoneNumber) {
        this['sPhoneNumber'] = sPhoneNumber;
    }
/**
     * Returns The Cell Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     * @return {String}
     */
    getSPhoneNumberCell() {
        return this.sPhoneNumberCell;
    }

    /**
     * Sets The Cell Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     * @param {String} sPhoneNumberCell The Cell Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
     */
    setSPhoneNumberCell(sPhoneNumberCell) {
        this['sPhoneNumberCell'] = sPhoneNumberCell;
    }

}

/**
 * The first name of the Contact
 * @member {String} sContactFirstname
 */
EzsignsignerRequestCompoundContact.prototype['sContactFirstname'] = undefined;

/**
 * The last name of the Contact
 * @member {String} sContactLastname
 */
EzsignsignerRequestCompoundContact.prototype['sContactLastname'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignsignerRequestCompoundContact.prototype['fkiLanguageID'] = undefined;

/**
 * The email address of the contact. Must be filled if email authentification was requested
 * @member {String} sEmailAddress
 */
EzsignsignerRequestCompoundContact.prototype['sEmailAddress'] = undefined;

/**
 * The Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
 * @member {String} sPhoneNumber
 */
EzsignsignerRequestCompoundContact.prototype['sPhoneNumber'] = undefined;

/**
 * The Cell Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
 * @member {String} sPhoneNumberCell
 */
EzsignsignerRequestCompoundContact.prototype['sPhoneNumberCell'] = undefined;






export default EzsignsignerRequestCompoundContact;
