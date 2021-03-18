/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEUserTypeSSPR from './FieldEUserTypeSSPR';

/**
 * The SsprValidateTokenV1Request model module.
 * @module eZmaxAPI/model/SsprValidateTokenV1Request
 * @version 1.0.37
 */
class SsprValidateTokenV1Request {
    /**
     * Constructs a new <code>SsprValidateTokenV1Request</code>.
     * Request for the /1/module/sspr/validateToken API Request
     * @alias module:eZmaxAPI/model/SsprValidateTokenV1Request
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param eUserTypeSSPR {module:eZmaxAPI/model/FieldEUserTypeSSPR} 
     * @param binUserSSPRtoken {String} Hex Encoded Secret SSPR token
     */
    constructor(pksCustomerCode, fkiLanguageID, eUserTypeSSPR, binUserSSPRtoken) { 
        
        SsprValidateTokenV1Request.initialize(this, pksCustomerCode, fkiLanguageID, eUserTypeSSPR, binUserSSPRtoken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pksCustomerCode, fkiLanguageID, eUserTypeSSPR, binUserSSPRtoken) { 
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['eUserTypeSSPR'] = eUserTypeSSPR;
        obj['binUserSSPRtoken'] = binUserSSPRtoken;
    }

    /**
     * Constructs a <code>SsprValidateTokenV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SsprValidateTokenV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SsprValidateTokenV1Request} The populated <code>SsprValidateTokenV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SsprValidateTokenV1Request();

            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('eUserTypeSSPR')) {
                obj['eUserTypeSSPR'] = FieldEUserTypeSSPR.constructFromObject(data['eUserTypeSSPR']);
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('sUserLoginname')) {
                obj['sUserLoginname'] = ApiClient.convertToType(data['sUserLoginname'], 'String');
            }
            if (data.hasOwnProperty('binUserSSPRtoken')) {
                obj['binUserSSPRtoken'] = ApiClient.convertToType(data['binUserSSPRtoken'], 'String');
            }
        }
        return obj;
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
     * @return {module:eZmaxAPI/model/FieldEUserTypeSSPR}
     */
    getEUserTypeSSPR() {
        return this.eUserTypeSSPR;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserTypeSSPR} eUserTypeSSPR
     */
    setEUserTypeSSPR(eUserTypeSSPR) {
        this['eUserTypeSSPR'] = eUserTypeSSPR;
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
     * Returns Hex Encoded Secret SSPR token
     * @return {String}
     */
    getBinUserSSPRtoken() {
        return this.binUserSSPRtoken;
    }

    /**
     * Sets Hex Encoded Secret SSPR token
     * @param {String} binUserSSPRtoken Hex Encoded Secret SSPR token
     */
    setBinUserSSPRtoken(binUserSSPRtoken) {
        this['binUserSSPRtoken'] = binUserSSPRtoken;
    }

}

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
SsprValidateTokenV1Request.prototype['pksCustomerCode'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
SsprValidateTokenV1Request.prototype['fkiLanguageID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEUserTypeSSPR} eUserTypeSSPR
 */
SsprValidateTokenV1Request.prototype['eUserTypeSSPR'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
SsprValidateTokenV1Request.prototype['sEmailAddress'] = undefined;

/**
 * The Login name of the User.
 * @member {String} sUserLoginname
 */
SsprValidateTokenV1Request.prototype['sUserLoginname'] = undefined;

/**
 * Hex Encoded Secret SSPR token
 * @member {String} binUserSSPRtoken
 */
SsprValidateTokenV1Request.prototype['binUserSSPRtoken'] = undefined;






export default SsprValidateTokenV1Request;

