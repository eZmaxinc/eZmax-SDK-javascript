/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserCreateEzsignuserV1Request model module.
 * @module eZmaxAPI/model/UserCreateEzsignuserV1Request
 * @version 1.1.12
 */
class UserCreateEzsignuserV1Request {
    /**
     * Constructs a new <code>UserCreateEzsignuserV1Request</code>.
     * Request for POST /1/module/user/createEzsignuser
     * @alias module:eZmaxAPI/model/UserCreateEzsignuserV1Request
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sUserFirstname {String} The First name of the user
     * @param sUserLastname {String} The Last name of the user
     * @param sEmailAddress {String} The email address.
     * @param sPhoneRegion {String} The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     * @param sPhoneExchange {String} The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     * @param sPhoneNumber {String} The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     */
    constructor(fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress, sPhoneRegion, sPhoneExchange, sPhoneNumber) { 
        
        UserCreateEzsignuserV1Request.initialize(this, fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress, sPhoneRegion, sPhoneExchange, sPhoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiLanguageID, sUserFirstname, sUserLastname, sEmailAddress, sPhoneRegion, sPhoneExchange, sPhoneNumber) { 
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sEmailAddress'] = sEmailAddress;
        obj['sPhoneRegion'] = sPhoneRegion;
        obj['sPhoneExchange'] = sPhoneExchange;
        obj['sPhoneNumber'] = sPhoneNumber;
    }

    /**
     * Constructs a <code>UserCreateEzsignuserV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserCreateEzsignuserV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserCreateEzsignuserV1Request} The populated <code>UserCreateEzsignuserV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateEzsignuserV1Request();

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
            if (data.hasOwnProperty('sPhoneRegion')) {
                obj['sPhoneRegion'] = ApiClient.convertToType(data['sPhoneRegion'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExchange')) {
                obj['sPhoneExchange'] = ApiClient.convertToType(data['sPhoneExchange'], 'String');
            }
            if (data.hasOwnProperty('sPhoneNumber')) {
                obj['sPhoneNumber'] = ApiClient.convertToType(data['sPhoneNumber'], 'String');
            }
            if (data.hasOwnProperty('sPhoneExtension')) {
                obj['sPhoneExtension'] = ApiClient.convertToType(data['sPhoneExtension'], 'String');
            }
        }
        return obj;
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
/**
     * Returns The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneRegion() {
        return this.sPhoneRegion;
    }

    /**
     * Sets The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneRegion The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneRegion(sPhoneRegion) {
        this['sPhoneRegion'] = sPhoneRegion;
    }
/**
     * Returns The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneExchange() {
        return this.sPhoneExchange;
    }

    /**
     * Sets The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneExchange The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneExchange(sPhoneExchange) {
        this['sPhoneExchange'] = sPhoneExchange;
    }
/**
     * Returns The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     * @return {String}
     */
    getSPhoneNumber() {
        return this.sPhoneNumber;
    }

    /**
     * Sets The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     * @param {String} sPhoneNumber The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
     */
    setSPhoneNumber(sPhoneNumber) {
        this['sPhoneNumber'] = sPhoneNumber;
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

}

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
UserCreateEzsignuserV1Request.prototype['fkiLanguageID'] = undefined;

/**
 * The First name of the user
 * @member {String} sUserFirstname
 */
UserCreateEzsignuserV1Request.prototype['sUserFirstname'] = undefined;

/**
 * The Last name of the user
 * @member {String} sUserLastname
 */
UserCreateEzsignuserV1Request.prototype['sUserLastname'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
UserCreateEzsignuserV1Request.prototype['sEmailAddress'] = undefined;

/**
 * The region of the phone number. (For a North America Number only)  The region is the \"514\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneRegion
 */
UserCreateEzsignuserV1Request.prototype['sPhoneRegion'] = undefined;

/**
 * The exchange of the phone number. (For a North America Number only)  The exchange is the \"990\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneExchange
 */
UserCreateEzsignuserV1Request.prototype['sPhoneExchange'] = undefined;

/**
 * The number of the phone number. (For a North America Number only)  The number is the \"1516\" section in this sample phone number: (514) 990-1516 x123
 * @member {String} sPhoneNumber
 */
UserCreateEzsignuserV1Request.prototype['sPhoneNumber'] = undefined;

/**
 * The extension of the phone number.  The extension is the \"123\" section in this sample phone number: (514) 990-1516 x123.  It can also be used with international phone numbers
 * @member {String} sPhoneExtension
 */
UserCreateEzsignuserV1Request.prototype['sPhoneExtension'] = undefined;






export default UserCreateEzsignuserV1Request;

