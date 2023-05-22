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
import ActivesessionResponse from './ActivesessionResponse';
import ActivesessionResponseCompoundAllOf from './ActivesessionResponseCompoundAllOf';
import ActivesessionResponseCompoundApikey from './ActivesessionResponseCompoundApikey';
import ActivesessionResponseCompoundUser from './ActivesessionResponseCompoundUser';
import FieldEActivesessionOrigin from './FieldEActivesessionOrigin';
import FieldEActivesessionUsertype from './FieldEActivesessionUsertype';
import FieldEActivesessionWeekdaystart from './FieldEActivesessionWeekdaystart';

/**
 * The ActivesessionResponseCompound model module.
 * @module eZmaxAPI/model/ActivesessionResponseCompound
 * @version 1.1.17
 */
class ActivesessionResponseCompound {
    /**
     * Constructs a new <code>ActivesessionResponseCompound</code>.
     * Payload for GET /1/object/activesession/getCurrent
     * @alias module:eZmaxAPI/model/ActivesessionResponseCompound
     * @implements module:eZmaxAPI/model/ActivesessionResponse
     * @implements module:eZmaxAPI/model/ActivesessionResponseCompoundAllOf
     * @param eActivesessionUsertype {module:eZmaxAPI/model/FieldEActivesessionUsertype} 
     * @param eActivesessionOrigin {module:eZmaxAPI/model/FieldEActivesessionOrigin} 
     * @param eActivesessionWeekdaystart {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} 
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sCompanyNameX {String} The Name of the Company in the language of the requester
     * @param sDepartmentNameX {String} The Name of the Department in the language of the requester
     * @param bActivesessionDebug {Boolean} Whether the active session is in debug or not
     * @param bActivesessionIssuperadmin {Boolean} Whether the active session is superadmin or not
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param a_pkiPermissionID {Array.<Number>} An array of permissions granted to the user or api key
     * @param objUserReal {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} 
     * @param a_eModuleInternalname {Array.<String>} An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    constructor(eActivesessionUsertype, eActivesessionOrigin, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, bActivesessionIssuperadmin, pksCustomerCode, a_pkiPermissionID, objUserReal, a_eModuleInternalname) { 
        ActivesessionResponse.initialize(this, eActivesessionUsertype, eActivesessionOrigin, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, bActivesessionIssuperadmin, pksCustomerCode);ActivesessionResponseCompoundAllOf.initialize(this, a_pkiPermissionID, objUserReal, a_eModuleInternalname);
        ActivesessionResponseCompound.initialize(this, eActivesessionUsertype, eActivesessionOrigin, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, bActivesessionIssuperadmin, pksCustomerCode, a_pkiPermissionID, objUserReal, a_eModuleInternalname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eActivesessionUsertype, eActivesessionOrigin, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, bActivesessionIssuperadmin, pksCustomerCode, a_pkiPermissionID, objUserReal, a_eModuleInternalname) { 
        obj['eActivesessionUsertype'] = eActivesessionUsertype;
        obj['eActivesessionOrigin'] = eActivesessionOrigin;
        obj['eActivesessionWeekdaystart'] = eActivesessionWeekdaystart;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sCompanyNameX'] = sCompanyNameX;
        obj['sDepartmentNameX'] = sDepartmentNameX;
        obj['bActivesessionDebug'] = bActivesessionDebug;
        obj['bActivesessionIssuperadmin'] = bActivesessionIssuperadmin;
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['a_pkiPermissionID'] = a_pkiPermissionID;
        obj['objUserReal'] = objUserReal;
        obj['a_eModuleInternalname'] = a_eModuleInternalname;
    }

    /**
     * Constructs a <code>ActivesessionResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompound} The populated <code>ActivesessionResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionResponseCompound();
            ActivesessionResponse.constructFromObject(data, obj);
            ActivesessionResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('eActivesessionUsertype')) {
                obj['eActivesessionUsertype'] = FieldEActivesessionUsertype.constructFromObject(data['eActivesessionUsertype']);
            }
            if (data.hasOwnProperty('eActivesessionOrigin')) {
                obj['eActivesessionOrigin'] = FieldEActivesessionOrigin.constructFromObject(data['eActivesessionOrigin']);
            }
            if (data.hasOwnProperty('eActivesessionWeekdaystart')) {
                obj['eActivesessionWeekdaystart'] = FieldEActivesessionWeekdaystart.constructFromObject(data['eActivesessionWeekdaystart']);
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
            if (data.hasOwnProperty('bActivesessionDebug')) {
                obj['bActivesessionDebug'] = ApiClient.convertToType(data['bActivesessionDebug'], 'Boolean');
            }
            if (data.hasOwnProperty('bActivesessionIssuperadmin')) {
                obj['bActivesessionIssuperadmin'] = ApiClient.convertToType(data['bActivesessionIssuperadmin'], 'Boolean');
            }
            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('fkiSystemconfigurationtypeID')) {
                obj['fkiSystemconfigurationtypeID'] = ApiClient.convertToType(data['fkiSystemconfigurationtypeID'], 'Number');
            }
            if (data.hasOwnProperty('a_pkiPermissionID')) {
                obj['a_pkiPermissionID'] = ApiClient.convertToType(data['a_pkiPermissionID'], ['Number']);
            }
            if (data.hasOwnProperty('objUserReal')) {
                obj['objUserReal'] = ActivesessionResponseCompoundUser.constructFromObject(data['objUserReal']);
            }
            if (data.hasOwnProperty('objUserCloned')) {
                obj['objUserCloned'] = ActivesessionResponseCompoundUser.constructFromObject(data['objUserCloned']);
            }
            if (data.hasOwnProperty('objApikey')) {
                obj['objApikey'] = ActivesessionResponseCompoundApikey.constructFromObject(data['objApikey']);
            }
            if (data.hasOwnProperty('a_eModuleInternalname')) {
                obj['a_eModuleInternalname'] = ApiClient.convertToType(data['a_eModuleInternalname'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivesessionResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivesessionResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActivesessionResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCompanyNameX'] && !(typeof data['sCompanyNameX'] === 'string' || data['sCompanyNameX'] instanceof String)) {
            throw new Error("Expected the field `sCompanyNameX` to be a primitive type in the JSON string but got " + data['sCompanyNameX']);
        }
        // ensure the json data is a string
        if (data['sDepartmentNameX'] && !(typeof data['sDepartmentNameX'] === 'string' || data['sDepartmentNameX'] instanceof String)) {
            throw new Error("Expected the field `sDepartmentNameX` to be a primitive type in the JSON string but got " + data['sDepartmentNameX']);
        }
        // ensure the json data is a string
        if (data['pksCustomerCode'] && !(typeof data['pksCustomerCode'] === 'string' || data['pksCustomerCode'] instanceof String)) {
            throw new Error("Expected the field `pksCustomerCode` to be a primitive type in the JSON string but got " + data['pksCustomerCode']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiPermissionID'])) {
            throw new Error("Expected the field `a_pkiPermissionID` to be an array in the JSON data but got " + data['a_pkiPermissionID']);
        }
        // validate the optional field `objUserReal`
        if (data['objUserReal']) { // data not null
          ActivesessionResponseCompoundUser.validateJSON(data['objUserReal']);
        }
        // validate the optional field `objUserCloned`
        if (data['objUserCloned']) { // data not null
          ActivesessionResponseCompoundUser.validateJSON(data['objUserCloned']);
        }
        // validate the optional field `objApikey`
        if (data['objApikey']) { // data not null
          ActivesessionResponseCompoundApikey.validateJSON(data['objApikey']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_eModuleInternalname'])) {
            throw new Error("Expected the field `a_eModuleInternalname` to be an array in the JSON data but got " + data['a_eModuleInternalname']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/FieldEActivesessionUsertype}
     */
    getEActivesessionUsertype() {
        return this.eActivesessionUsertype;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEActivesessionUsertype} eActivesessionUsertype
     */
    setEActivesessionUsertype(eActivesessionUsertype) {
        this['eActivesessionUsertype'] = eActivesessionUsertype;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEActivesessionOrigin}
     */
    getEActivesessionOrigin() {
        return this.eActivesessionOrigin;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEActivesessionOrigin} eActivesessionOrigin
     */
    setEActivesessionOrigin(eActivesessionOrigin) {
        this['eActivesessionOrigin'] = eActivesessionOrigin;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart}
     */
    getEActivesessionWeekdaystart() {
        return this.eActivesessionWeekdaystart;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} eActivesessionWeekdaystart
     */
    setEActivesessionWeekdaystart(eActivesessionWeekdaystart) {
        this['eActivesessionWeekdaystart'] = eActivesessionWeekdaystart;
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
     * Returns The Name of the Company in the language of the requester
     * @return {String}
     */
    getSCompanyNameX() {
        return this.sCompanyNameX;
    }

    /**
     * Sets The Name of the Company in the language of the requester
     * @param {String} sCompanyNameX The Name of the Company in the language of the requester
     */
    setSCompanyNameX(sCompanyNameX) {
        this['sCompanyNameX'] = sCompanyNameX;
    }
/**
     * Returns The Name of the Department in the language of the requester
     * @return {String}
     */
    getSDepartmentNameX() {
        return this.sDepartmentNameX;
    }

    /**
     * Sets The Name of the Department in the language of the requester
     * @param {String} sDepartmentNameX The Name of the Department in the language of the requester
     */
    setSDepartmentNameX(sDepartmentNameX) {
        this['sDepartmentNameX'] = sDepartmentNameX;
    }
/**
     * Returns Whether the active session is in debug or not
     * @return {Boolean}
     */
    getBActivesessionDebug() {
        return this.bActivesessionDebug;
    }

    /**
     * Sets Whether the active session is in debug or not
     * @param {Boolean} bActivesessionDebug Whether the active session is in debug or not
     */
    setBActivesessionDebug(bActivesessionDebug) {
        this['bActivesessionDebug'] = bActivesessionDebug;
    }
/**
     * Returns Whether the active session is superadmin or not
     * @return {Boolean}
     */
    getBActivesessionIssuperadmin() {
        return this.bActivesessionIssuperadmin;
    }

    /**
     * Sets Whether the active session is superadmin or not
     * @param {Boolean} bActivesessionIssuperadmin Whether the active session is superadmin or not
     */
    setBActivesessionIssuperadmin(bActivesessionIssuperadmin) {
        this['bActivesessionIssuperadmin'] = bActivesessionIssuperadmin;
    }
/**
     * Returns The customer code assigned to your account
     * @return {String}
     */
    getPksCustomerCode() {
        return this.pksCustomerCode;
    }

    /**
     * Sets The customer code assigned to your account
     * @param {String} pksCustomerCode The customer code assigned to your account
     */
    setPksCustomerCode(pksCustomerCode) {
        this['pksCustomerCode'] = pksCustomerCode;
    }
/**
     * Returns The unique ID of the Systemconfigurationtype
     * minimum: 1
     * @return {Number}
     */
    getFkiSystemconfigurationtypeID() {
        return this.fkiSystemconfigurationtypeID;
    }

    /**
     * Sets The unique ID of the Systemconfigurationtype
     * @param {Number} fkiSystemconfigurationtypeID The unique ID of the Systemconfigurationtype
     */
    setFkiSystemconfigurationtypeID(fkiSystemconfigurationtypeID) {
        this['fkiSystemconfigurationtypeID'] = fkiSystemconfigurationtypeID;
    }
/**
     * Returns An array of permissions granted to the user or api key
     * @return {Array.<Number>}
     */
    getAPkiPermissionID() {
        return this.a_pkiPermissionID;
    }

    /**
     * Sets An array of permissions granted to the user or api key
     * @param {Array.<Number>} a_pkiPermissionID An array of permissions granted to the user or api key
     */
    setAPkiPermissionID(a_pkiPermissionID) {
        this['a_pkiPermissionID'] = a_pkiPermissionID;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundUser}
     */
    getObjUserReal() {
        return this.objUserReal;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserReal
     */
    setObjUserReal(objUserReal) {
        this['objUserReal'] = objUserReal;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundUser}
     */
    getObjUserCloned() {
        return this.objUserCloned;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserCloned
     */
    setObjUserCloned(objUserCloned) {
        this['objUserCloned'] = objUserCloned;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey}
     */
    getObjApikey() {
        return this.objApikey;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} objApikey
     */
    setObjApikey(objApikey) {
        this['objApikey'] = objApikey;
    }
/**
     * Returns An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @return {Array.<String>}
     */
    getAEModuleInternalname() {
        return this.a_eModuleInternalname;
    }

    /**
     * Sets An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @param {Array.<String>} a_eModuleInternalname An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    setAEModuleInternalname(a_eModuleInternalname) {
        this['a_eModuleInternalname'] = a_eModuleInternalname;
    }

}

ActivesessionResponseCompound.RequiredProperties = ["eActivesessionUsertype", "eActivesessionOrigin", "eActivesessionWeekdaystart", "fkiLanguageID", "sCompanyNameX", "sDepartmentNameX", "bActivesessionDebug", "bActivesessionIssuperadmin", "pksCustomerCode", "a_pkiPermissionID", "objUserReal", "a_eModuleInternalname"];

/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionUsertype} eActivesessionUsertype
 */
ActivesessionResponseCompound.prototype['eActivesessionUsertype'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionOrigin} eActivesessionOrigin
 */
ActivesessionResponseCompound.prototype['eActivesessionOrigin'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} eActivesessionWeekdaystart
 */
ActivesessionResponseCompound.prototype['eActivesessionWeekdaystart'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
ActivesessionResponseCompound.prototype['fkiLanguageID'] = undefined;

/**
 * The Name of the Company in the language of the requester
 * @member {String} sCompanyNameX
 */
ActivesessionResponseCompound.prototype['sCompanyNameX'] = undefined;

/**
 * The Name of the Department in the language of the requester
 * @member {String} sDepartmentNameX
 */
ActivesessionResponseCompound.prototype['sDepartmentNameX'] = undefined;

/**
 * Whether the active session is in debug or not
 * @member {Boolean} bActivesessionDebug
 */
ActivesessionResponseCompound.prototype['bActivesessionDebug'] = undefined;

/**
 * Whether the active session is superadmin or not
 * @member {Boolean} bActivesessionIssuperadmin
 */
ActivesessionResponseCompound.prototype['bActivesessionIssuperadmin'] = undefined;

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
ActivesessionResponseCompound.prototype['pksCustomerCode'] = undefined;

/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
ActivesessionResponseCompound.prototype['fkiSystemconfigurationtypeID'] = undefined;

/**
 * An array of permissions granted to the user or api key
 * @member {Array.<Number>} a_pkiPermissionID
 */
ActivesessionResponseCompound.prototype['a_pkiPermissionID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserReal
 */
ActivesessionResponseCompound.prototype['objUserReal'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserCloned
 */
ActivesessionResponseCompound.prototype['objUserCloned'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} objApikey
 */
ActivesessionResponseCompound.prototype['objApikey'] = undefined;

/**
 * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
 * @member {Array.<String>} a_eModuleInternalname
 */
ActivesessionResponseCompound.prototype['a_eModuleInternalname'] = undefined;


// Implement ActivesessionResponse interface:
/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionUsertype} eActivesessionUsertype
 */
ActivesessionResponse.prototype['eActivesessionUsertype'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionOrigin} eActivesessionOrigin
 */
ActivesessionResponse.prototype['eActivesessionOrigin'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} eActivesessionWeekdaystart
 */
ActivesessionResponse.prototype['eActivesessionWeekdaystart'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
ActivesessionResponse.prototype['fkiLanguageID'] = undefined;
/**
 * The Name of the Company in the language of the requester
 * @member {String} sCompanyNameX
 */
ActivesessionResponse.prototype['sCompanyNameX'] = undefined;
/**
 * The Name of the Department in the language of the requester
 * @member {String} sDepartmentNameX
 */
ActivesessionResponse.prototype['sDepartmentNameX'] = undefined;
/**
 * Whether the active session is in debug or not
 * @member {Boolean} bActivesessionDebug
 */
ActivesessionResponse.prototype['bActivesessionDebug'] = undefined;
/**
 * Whether the active session is superadmin or not
 * @member {Boolean} bActivesessionIssuperadmin
 */
ActivesessionResponse.prototype['bActivesessionIssuperadmin'] = undefined;
/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
ActivesessionResponse.prototype['pksCustomerCode'] = undefined;
/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
ActivesessionResponse.prototype['fkiSystemconfigurationtypeID'] = undefined;
// Implement ActivesessionResponseCompoundAllOf interface:
/**
 * An array of permissions granted to the user or api key
 * @member {Array.<Number>} a_pkiPermissionID
 */
ActivesessionResponseCompoundAllOf.prototype['a_pkiPermissionID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserReal
 */
ActivesessionResponseCompoundAllOf.prototype['objUserReal'] = undefined;
/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserCloned
 */
ActivesessionResponseCompoundAllOf.prototype['objUserCloned'] = undefined;
/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} objApikey
 */
ActivesessionResponseCompoundAllOf.prototype['objApikey'] = undefined;
/**
 * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
 * @member {Array.<String>} a_eModuleInternalname
 */
ActivesessionResponseCompoundAllOf.prototype['a_eModuleInternalname'] = undefined;




export default ActivesessionResponseCompound;

