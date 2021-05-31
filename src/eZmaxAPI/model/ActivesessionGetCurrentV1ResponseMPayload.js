/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.44
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ActivesessionGetCurrentV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload
 * @version 1.0.44
 */
class ActivesessionGetCurrentV1ResponseMPayload {
    /**
     * Constructs a new <code>ActivesessionGetCurrentV1ResponseMPayload</code>.
     * Payload for the /1/object/activesession/getCurrent API Request
     * @alias module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload
     * @param sCustomerCode {String} The customer code specific to the client in which the API request is being made
     * @param eActivesessionSessiontype {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum} The type of session used for the API request call
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sCompanyNameX {String} The name of the active Company in the current language
     * @param sDepartmentNameX {String} The name of the active Department in the current language
     * @param a_RegisteredModules {Array.<String>} An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @param a_Permissions {Array.<Number>} An array of permissions granted to the user or api key
     * @param fkiUserID {Number} The unique ID of the User
     * @param fkiApikeyID {Number} The unique ID of the Apikey
     */
    constructor(sCustomerCode, eActivesessionSessiontype, fkiLanguageID, sCompanyNameX, sDepartmentNameX, a_RegisteredModules, a_Permissions, fkiUserID, fkiApikeyID) { 
        
        ActivesessionGetCurrentV1ResponseMPayload.initialize(this, sCustomerCode, eActivesessionSessiontype, fkiLanguageID, sCompanyNameX, sDepartmentNameX, a_RegisteredModules, a_Permissions, fkiUserID, fkiApikeyID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sCustomerCode, eActivesessionSessiontype, fkiLanguageID, sCompanyNameX, sDepartmentNameX, a_RegisteredModules, a_Permissions, fkiUserID, fkiApikeyID) { 
        obj['sCustomerCode'] = sCustomerCode;
        obj['eActivesessionSessiontype'] = eActivesessionSessiontype;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sCompanyNameX'] = sCompanyNameX;
        obj['sDepartmentNameX'] = sDepartmentNameX;
        obj['a_RegisteredModules'] = a_RegisteredModules;
        obj['a_Permissions'] = a_Permissions;
        obj['fkiUserID'] = fkiUserID;
        obj['fkiApikeyID'] = fkiApikeyID;
    }

    /**
     * Constructs a <code>ActivesessionGetCurrentV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload} The populated <code>ActivesessionGetCurrentV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionGetCurrentV1ResponseMPayload();

            if (data.hasOwnProperty('sCustomerCode')) {
                obj['sCustomerCode'] = ApiClient.convertToType(data['sCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('eActivesessionSessiontype')) {
                obj['eActivesessionSessiontype'] = ApiClient.convertToType(data['eActivesessionSessiontype'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sCompanyNameX')) {
                obj['sCompanyNameX'] = ApiClient.convertToType(data['sCompanyNameX'], 'String');
            }
            if (data.hasOwnProperty('sDepartmentNameX')) {
                obj['sDepartmentNameX'] = ApiClient.convertToType(data['sDepartmentNameX'], 'String');
            }
            if (data.hasOwnProperty('a_RegisteredModules')) {
                obj['a_RegisteredModules'] = ApiClient.convertToType(data['a_RegisteredModules'], ['String']);
            }
            if (data.hasOwnProperty('a_Permissions')) {
                obj['a_Permissions'] = ApiClient.convertToType(data['a_Permissions'], ['Number']);
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyID')) {
                obj['fkiApikeyID'] = ApiClient.convertToType(data['fkiApikeyID'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The customer code specific to the client in which the API request is being made
     * @return {String}
     */
    getSCustomerCode() {
        return this.sCustomerCode;
    }

    /**
     * Sets The customer code specific to the client in which the API request is being made
     * @param {String} sCustomerCode The customer code specific to the client in which the API request is being made
     */
    setSCustomerCode(sCustomerCode) {
        this['sCustomerCode'] = sCustomerCode;
    }
/**
     * Returns The type of session used for the API request call
     * @return {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum}
     */
    getEActivesessionSessiontype() {
        return this.eActivesessionSessiontype;
    }

    /**
     * Sets The type of session used for the API request call
     * @param {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum} eActivesessionSessiontype The type of session used for the API request call
     */
    setEActivesessionSessiontype(eActivesessionSessiontype) {
        this['eActivesessionSessiontype'] = eActivesessionSessiontype;
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
     * Returns The name of the active Company in the current language
     * @return {String}
     */
    getSCompanyNameX() {
        return this.sCompanyNameX;
    }

    /**
     * Sets The name of the active Company in the current language
     * @param {String} sCompanyNameX The name of the active Company in the current language
     */
    setSCompanyNameX(sCompanyNameX) {
        this['sCompanyNameX'] = sCompanyNameX;
    }
/**
     * Returns The name of the active Department in the current language
     * @return {String}
     */
    getSDepartmentNameX() {
        return this.sDepartmentNameX;
    }

    /**
     * Sets The name of the active Department in the current language
     * @param {String} sDepartmentNameX The name of the active Department in the current language
     */
    setSDepartmentNameX(sDepartmentNameX) {
        this['sDepartmentNameX'] = sDepartmentNameX;
    }
/**
     * Returns An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @return {Array.<String>}
     */
    getARegisteredModules() {
        return this.a_RegisteredModules;
    }

    /**
     * Sets An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @param {Array.<String>} a_RegisteredModules An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    setARegisteredModules(a_RegisteredModules) {
        this['a_RegisteredModules'] = a_RegisteredModules;
    }
/**
     * Returns An array of permissions granted to the user or api key
     * @return {Array.<Number>}
     */
    getAPermissions() {
        return this.a_Permissions;
    }

    /**
     * Sets An array of permissions granted to the user or api key
     * @param {Array.<Number>} a_Permissions An array of permissions granted to the user or api key
     */
    setAPermissions(a_Permissions) {
        this['a_Permissions'] = a_Permissions;
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

}

/**
 * The customer code specific to the client in which the API request is being made
 * @member {String} sCustomerCode
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['sCustomerCode'] = undefined;

/**
 * The type of session used for the API request call
 * @member {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload.EActivesessionSessiontypeEnum} eActivesessionSessiontype
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['eActivesessionSessiontype'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['fkiLanguageID'] = undefined;

/**
 * The name of the active Company in the current language
 * @member {String} sCompanyNameX
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['sCompanyNameX'] = undefined;

/**
 * The name of the active Department in the current language
 * @member {String} sDepartmentNameX
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['sDepartmentNameX'] = undefined;

/**
 * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
 * @member {Array.<String>} a_RegisteredModules
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['a_RegisteredModules'] = undefined;

/**
 * An array of permissions granted to the user or api key
 * @member {Array.<Number>} a_Permissions
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['a_Permissions'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
ActivesessionGetCurrentV1ResponseMPayload.prototype['fkiApikeyID'] = undefined;





/**
 * Allowed values for the <code>eActivesessionSessiontype</code> property.
 * @enum {String}
 * @readonly
 */
ActivesessionGetCurrentV1ResponseMPayload['EActivesessionSessiontypeEnum'] = {

    /**
     * value: "Normal"
     * @const
     */
    "Normal": "Normal"
};



export default ActivesessionGetCurrentV1ResponseMPayload;

