/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEActivesessionUsertype from './FieldEActivesessionUsertype';
import FieldEActivesessionWeekdaystart from './FieldEActivesessionWeekdaystart';

/**
 * The ActivesessionResponse model module.
 * @module eZmaxAPI/model/ActivesessionResponse
 * @version 1.1.15
 */
class ActivesessionResponse {
    /**
     * Constructs a new <code>ActivesessionResponse</code>.
     * An Activesession Object
     * @alias module:eZmaxAPI/model/ActivesessionResponse
     * @param eActivesessionUsertype {module:eZmaxAPI/model/FieldEActivesessionUsertype} 
     * @param eActivesessionWeekdaystart {module:eZmaxAPI/model/FieldEActivesessionWeekdaystart} 
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sCompanyNameX {String} The Name of the Company in the language of the requester
     * @param sDepartmentNameX {String} The Name of the Department in the language of the requester
     * @param bActivesessionDebug {Boolean} Whether the active session is in debug or not
     * @param pksCustomerCode {String} The customer code assigned to your account
     */
    constructor(eActivesessionUsertype, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, pksCustomerCode) { 
        
        ActivesessionResponse.initialize(this, eActivesessionUsertype, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, pksCustomerCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eActivesessionUsertype, eActivesessionWeekdaystart, fkiLanguageID, sCompanyNameX, sDepartmentNameX, bActivesessionDebug, pksCustomerCode) { 
        obj['eActivesessionUsertype'] = eActivesessionUsertype;
        obj['eActivesessionWeekdaystart'] = eActivesessionWeekdaystart;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sCompanyNameX'] = sCompanyNameX;
        obj['sDepartmentNameX'] = sDepartmentNameX;
        obj['bActivesessionDebug'] = bActivesessionDebug;
        obj['pksCustomerCode'] = pksCustomerCode;
    }

    /**
     * Constructs a <code>ActivesessionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionResponse} The populated <code>ActivesessionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionResponse();

            if (data.hasOwnProperty('eActivesessionUsertype')) {
                obj['eActivesessionUsertype'] = FieldEActivesessionUsertype.constructFromObject(data['eActivesessionUsertype']);
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
            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('fkiSystemconfigurationtypeID')) {
                obj['fkiSystemconfigurationtypeID'] = ApiClient.convertToType(data['fkiSystemconfigurationtypeID'], 'Number');
            }
        }
        return obj;
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

}

/**
 * @member {module:eZmaxAPI/model/FieldEActivesessionUsertype} eActivesessionUsertype
 */
ActivesessionResponse.prototype['eActivesessionUsertype'] = undefined;

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
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
ActivesessionResponse.prototype['pksCustomerCode'] = undefined;

/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
ActivesessionResponse.prototype['fkiSystemconfigurationtypeID'] = undefined;






export default ActivesessionResponse;

