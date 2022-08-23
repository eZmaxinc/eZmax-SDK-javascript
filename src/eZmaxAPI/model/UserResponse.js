/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import FieldEUserType from './FieldEUserType';

/**
 * The UserResponse model module.
 * @module eZmaxAPI/model/UserResponse
 * @version 1.1.10
 */
class UserResponse {
    /**
     * Constructs a new <code>UserResponse</code>.
     * A User Object
     * @alias module:eZmaxAPI/model/UserResponse
     * @param pkiUserID {Number} The unique ID of the User
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param eUserType {module:eZmaxAPI/model/FieldEUserType} 
     * @param sUserFirstname {String} The First name of the user
     * @param sUserLastname {String} The Last name of the user
     * @param sUserLoginname {String} The Login name of the User.
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiUserID, fkiLanguageID, eUserType, sUserFirstname, sUserLastname, sUserLoginname, objAudit) { 
        
        UserResponse.initialize(this, pkiUserID, fkiLanguageID, eUserType, sUserFirstname, sUserLastname, sUserLoginname, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUserID, fkiLanguageID, eUserType, sUserFirstname, sUserLastname, sUserLoginname, objAudit) { 
        obj['pkiUserID'] = pkiUserID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['eUserType'] = eUserType;
        obj['sUserFirstname'] = sUserFirstname;
        obj['sUserLastname'] = sUserLastname;
        obj['sUserLoginname'] = sUserLoginname;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>UserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserResponse} The populated <code>UserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserResponse();

            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('eUserType')) {
                obj['eUserType'] = FieldEUserType.constructFromObject(data['eUserType']);
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
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
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
     * @return {module:eZmaxAPI/model/FieldEUserType}
     */
    getEUserType() {
        return this.eUserType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserType} eUserType
     */
    setEUserType(eUserType) {
        this['eUserType'] = eUserType;
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
     * @return {module:eZmaxAPI/model/CommonAudit}
     */
    getObjAudit() {
        return this.objAudit;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAudit} objAudit
     */
    setObjAudit(objAudit) {
        this['objAudit'] = objAudit;
    }

}

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
UserResponse.prototype['pkiUserID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
UserResponse.prototype['fkiLanguageID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserType} eUserType
 */
UserResponse.prototype['eUserType'] = undefined;

/**
 * The First name of the user
 * @member {String} sUserFirstname
 */
UserResponse.prototype['sUserFirstname'] = undefined;

/**
 * The Last name of the user
 * @member {String} sUserLastname
 */
UserResponse.prototype['sUserLastname'] = undefined;

/**
 * The Login name of the User.
 * @member {String} sUserLoginname
 */
UserResponse.prototype['sUserLoginname'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
UserResponse.prototype['objAudit'] = undefined;






export default UserResponse;

