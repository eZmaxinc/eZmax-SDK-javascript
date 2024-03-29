/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldESystemconfigurationEzsign from './FieldESystemconfigurationEzsign';
import FieldESystemconfigurationLanguage1 from './FieldESystemconfigurationLanguage1';
import FieldESystemconfigurationLanguage2 from './FieldESystemconfigurationLanguage2';
import FieldESystemconfigurationNewexternaluseraction from './FieldESystemconfigurationNewexternaluseraction';

/**
 * The SystemconfigurationResponse model module.
 * @module eZmaxAPI/model/SystemconfigurationResponse
 * @version 1.1.18
 */
class SystemconfigurationResponse {
    /**
     * Constructs a new <code>SystemconfigurationResponse</code>.
     * A Systemconfiguration Object
     * @alias module:eZmaxAPI/model/SystemconfigurationResponse
     * @param pkiSystemconfigurationID {Number} The unique ID of the Systemconfiguration
     * @param fkiSystemconfigurationtypeID {Number} The unique ID of the Systemconfigurationtype
     * @param sSystemconfigurationtypeDescriptionX {String} The description of the Systemconfigurationtype in the language of the requester
     * @param eSystemconfigurationNewexternaluseraction {module:eZmaxAPI/model/FieldESystemconfigurationNewexternaluseraction} 
     * @param eSystemconfigurationLanguage1 {module:eZmaxAPI/model/FieldESystemconfigurationLanguage1} 
     * @param eSystemconfigurationLanguage2 {module:eZmaxAPI/model/FieldESystemconfigurationLanguage2} 
     * @param eSystemconfigurationEzsign {module:eZmaxAPI/model/FieldESystemconfigurationEzsign} 
     * @param bSystemconfigurationEzsignpersonnal {Boolean} Whether if we allow the creation of personal files in eZsign
     * @param bSystemconfigurationSspr {Boolean} Whether if we allow SSPR
     */
    constructor(pkiSystemconfigurationID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, eSystemconfigurationNewexternaluseraction, eSystemconfigurationLanguage1, eSystemconfigurationLanguage2, eSystemconfigurationEzsign, bSystemconfigurationEzsignpersonnal, bSystemconfigurationSspr) { 
        
        SystemconfigurationResponse.initialize(this, pkiSystemconfigurationID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, eSystemconfigurationNewexternaluseraction, eSystemconfigurationLanguage1, eSystemconfigurationLanguage2, eSystemconfigurationEzsign, bSystemconfigurationEzsignpersonnal, bSystemconfigurationSspr);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiSystemconfigurationID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, eSystemconfigurationNewexternaluseraction, eSystemconfigurationLanguage1, eSystemconfigurationLanguage2, eSystemconfigurationEzsign, bSystemconfigurationEzsignpersonnal, bSystemconfigurationSspr) { 
        obj['pkiSystemconfigurationID'] = pkiSystemconfigurationID;
        obj['fkiSystemconfigurationtypeID'] = fkiSystemconfigurationtypeID;
        obj['sSystemconfigurationtypeDescriptionX'] = sSystemconfigurationtypeDescriptionX;
        obj['eSystemconfigurationNewexternaluseraction'] = eSystemconfigurationNewexternaluseraction;
        obj['eSystemconfigurationLanguage1'] = eSystemconfigurationLanguage1;
        obj['eSystemconfigurationLanguage2'] = eSystemconfigurationLanguage2;
        obj['eSystemconfigurationEzsign'] = eSystemconfigurationEzsign;
        obj['bSystemconfigurationEzsignpersonnal'] = bSystemconfigurationEzsignpersonnal;
        obj['bSystemconfigurationSspr'] = bSystemconfigurationSspr;
    }

    /**
     * Constructs a <code>SystemconfigurationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SystemconfigurationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SystemconfigurationResponse} The populated <code>SystemconfigurationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemconfigurationResponse();

            if (data.hasOwnProperty('pkiSystemconfigurationID')) {
                obj['pkiSystemconfigurationID'] = ApiClient.convertToType(data['pkiSystemconfigurationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSystemconfigurationtypeID')) {
                obj['fkiSystemconfigurationtypeID'] = ApiClient.convertToType(data['fkiSystemconfigurationtypeID'], 'Number');
            }
            if (data.hasOwnProperty('sSystemconfigurationtypeDescriptionX')) {
                obj['sSystemconfigurationtypeDescriptionX'] = ApiClient.convertToType(data['sSystemconfigurationtypeDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('eSystemconfigurationNewexternaluseraction')) {
                obj['eSystemconfigurationNewexternaluseraction'] = FieldESystemconfigurationNewexternaluseraction.constructFromObject(data['eSystemconfigurationNewexternaluseraction']);
            }
            if (data.hasOwnProperty('eSystemconfigurationLanguage1')) {
                obj['eSystemconfigurationLanguage1'] = FieldESystemconfigurationLanguage1.constructFromObject(data['eSystemconfigurationLanguage1']);
            }
            if (data.hasOwnProperty('eSystemconfigurationLanguage2')) {
                obj['eSystemconfigurationLanguage2'] = FieldESystemconfigurationLanguage2.constructFromObject(data['eSystemconfigurationLanguage2']);
            }
            if (data.hasOwnProperty('eSystemconfigurationEzsign')) {
                obj['eSystemconfigurationEzsign'] = FieldESystemconfigurationEzsign.constructFromObject(data['eSystemconfigurationEzsign']);
            }
            if (data.hasOwnProperty('bSystemconfigurationEzsignpersonnal')) {
                obj['bSystemconfigurationEzsignpersonnal'] = ApiClient.convertToType(data['bSystemconfigurationEzsignpersonnal'], 'Boolean');
            }
            if (data.hasOwnProperty('bSystemconfigurationSspr')) {
                obj['bSystemconfigurationSspr'] = ApiClient.convertToType(data['bSystemconfigurationSspr'], 'Boolean');
            }
            if (data.hasOwnProperty('dtSystemconfigurationReadonlyexpirationstart')) {
                obj['dtSystemconfigurationReadonlyexpirationstart'] = ApiClient.convertToType(data['dtSystemconfigurationReadonlyexpirationstart'], 'String');
            }
            if (data.hasOwnProperty('dtSystemconfigurationReadonlyexpirationend')) {
                obj['dtSystemconfigurationReadonlyexpirationend'] = ApiClient.convertToType(data['dtSystemconfigurationReadonlyexpirationend'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemconfigurationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemconfigurationResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SystemconfigurationResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sSystemconfigurationtypeDescriptionX'] && !(typeof data['sSystemconfigurationtypeDescriptionX'] === 'string' || data['sSystemconfigurationtypeDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sSystemconfigurationtypeDescriptionX` to be a primitive type in the JSON string but got " + data['sSystemconfigurationtypeDescriptionX']);
        }
        // ensure the json data is a string
        if (data['dtSystemconfigurationReadonlyexpirationstart'] && !(typeof data['dtSystemconfigurationReadonlyexpirationstart'] === 'string' || data['dtSystemconfigurationReadonlyexpirationstart'] instanceof String)) {
            throw new Error("Expected the field `dtSystemconfigurationReadonlyexpirationstart` to be a primitive type in the JSON string but got " + data['dtSystemconfigurationReadonlyexpirationstart']);
        }
        // ensure the json data is a string
        if (data['dtSystemconfigurationReadonlyexpirationend'] && !(typeof data['dtSystemconfigurationReadonlyexpirationend'] === 'string' || data['dtSystemconfigurationReadonlyexpirationend'] instanceof String)) {
            throw new Error("Expected the field `dtSystemconfigurationReadonlyexpirationend` to be a primitive type in the JSON string but got " + data['dtSystemconfigurationReadonlyexpirationend']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Systemconfiguration
     * minimum: 1
     * maximum: 1
     * @return {Number}
     */
    getPkiSystemconfigurationID() {
        return this.pkiSystemconfigurationID;
    }

    /**
     * Sets The unique ID of the Systemconfiguration
     * @param {Number} pkiSystemconfigurationID The unique ID of the Systemconfiguration
     */
    setPkiSystemconfigurationID(pkiSystemconfigurationID) {
        this['pkiSystemconfigurationID'] = pkiSystemconfigurationID;
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
     * Returns The description of the Systemconfigurationtype in the language of the requester
     * @return {String}
     */
    getSSystemconfigurationtypeDescriptionX() {
        return this.sSystemconfigurationtypeDescriptionX;
    }

    /**
     * Sets The description of the Systemconfigurationtype in the language of the requester
     * @param {String} sSystemconfigurationtypeDescriptionX The description of the Systemconfigurationtype in the language of the requester
     */
    setSSystemconfigurationtypeDescriptionX(sSystemconfigurationtypeDescriptionX) {
        this['sSystemconfigurationtypeDescriptionX'] = sSystemconfigurationtypeDescriptionX;
    }
/**
     * @return {module:eZmaxAPI/model/FieldESystemconfigurationNewexternaluseraction}
     */
    getESystemconfigurationNewexternaluseraction() {
        return this.eSystemconfigurationNewexternaluseraction;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldESystemconfigurationNewexternaluseraction} eSystemconfigurationNewexternaluseraction
     */
    setESystemconfigurationNewexternaluseraction(eSystemconfigurationNewexternaluseraction) {
        this['eSystemconfigurationNewexternaluseraction'] = eSystemconfigurationNewexternaluseraction;
    }
/**
     * @return {module:eZmaxAPI/model/FieldESystemconfigurationLanguage1}
     */
    getESystemconfigurationLanguage1() {
        return this.eSystemconfigurationLanguage1;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldESystemconfigurationLanguage1} eSystemconfigurationLanguage1
     */
    setESystemconfigurationLanguage1(eSystemconfigurationLanguage1) {
        this['eSystemconfigurationLanguage1'] = eSystemconfigurationLanguage1;
    }
/**
     * @return {module:eZmaxAPI/model/FieldESystemconfigurationLanguage2}
     */
    getESystemconfigurationLanguage2() {
        return this.eSystemconfigurationLanguage2;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldESystemconfigurationLanguage2} eSystemconfigurationLanguage2
     */
    setESystemconfigurationLanguage2(eSystemconfigurationLanguage2) {
        this['eSystemconfigurationLanguage2'] = eSystemconfigurationLanguage2;
    }
/**
     * @return {module:eZmaxAPI/model/FieldESystemconfigurationEzsign}
     */
    getESystemconfigurationEzsign() {
        return this.eSystemconfigurationEzsign;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldESystemconfigurationEzsign} eSystemconfigurationEzsign
     */
    setESystemconfigurationEzsign(eSystemconfigurationEzsign) {
        this['eSystemconfigurationEzsign'] = eSystemconfigurationEzsign;
    }
/**
     * Returns Whether if we allow the creation of personal files in eZsign
     * @return {Boolean}
     */
    getBSystemconfigurationEzsignpersonnal() {
        return this.bSystemconfigurationEzsignpersonnal;
    }

    /**
     * Sets Whether if we allow the creation of personal files in eZsign
     * @param {Boolean} bSystemconfigurationEzsignpersonnal Whether if we allow the creation of personal files in eZsign
     */
    setBSystemconfigurationEzsignpersonnal(bSystemconfigurationEzsignpersonnal) {
        this['bSystemconfigurationEzsignpersonnal'] = bSystemconfigurationEzsignpersonnal;
    }
/**
     * Returns Whether if we allow SSPR
     * @return {Boolean}
     */
    getBSystemconfigurationSspr() {
        return this.bSystemconfigurationSspr;
    }

    /**
     * Sets Whether if we allow SSPR
     * @param {Boolean} bSystemconfigurationSspr Whether if we allow SSPR
     */
    setBSystemconfigurationSspr(bSystemconfigurationSspr) {
        this['bSystemconfigurationSspr'] = bSystemconfigurationSspr;
    }
/**
     * Returns The start date where the system will be in read only
     * @return {String}
     */
    getDtSystemconfigurationReadonlyexpirationstart() {
        return this.dtSystemconfigurationReadonlyexpirationstart;
    }

    /**
     * Sets The start date where the system will be in read only
     * @param {String} dtSystemconfigurationReadonlyexpirationstart The start date where the system will be in read only
     */
    setDtSystemconfigurationReadonlyexpirationstart(dtSystemconfigurationReadonlyexpirationstart) {
        this['dtSystemconfigurationReadonlyexpirationstart'] = dtSystemconfigurationReadonlyexpirationstart;
    }
/**
     * Returns The end date where the system will be in read only
     * @return {String}
     */
    getDtSystemconfigurationReadonlyexpirationend() {
        return this.dtSystemconfigurationReadonlyexpirationend;
    }

    /**
     * Sets The end date where the system will be in read only
     * @param {String} dtSystemconfigurationReadonlyexpirationend The end date where the system will be in read only
     */
    setDtSystemconfigurationReadonlyexpirationend(dtSystemconfigurationReadonlyexpirationend) {
        this['dtSystemconfigurationReadonlyexpirationend'] = dtSystemconfigurationReadonlyexpirationend;
    }

}

SystemconfigurationResponse.RequiredProperties = ["pkiSystemconfigurationID", "fkiSystemconfigurationtypeID", "sSystemconfigurationtypeDescriptionX", "eSystemconfigurationNewexternaluseraction", "eSystemconfigurationLanguage1", "eSystemconfigurationLanguage2", "eSystemconfigurationEzsign", "bSystemconfigurationEzsignpersonnal", "bSystemconfigurationSspr"];

/**
 * The unique ID of the Systemconfiguration
 * @member {Number} pkiSystemconfigurationID
 */
SystemconfigurationResponse.prototype['pkiSystemconfigurationID'] = undefined;

/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
SystemconfigurationResponse.prototype['fkiSystemconfigurationtypeID'] = undefined;

/**
 * The description of the Systemconfigurationtype in the language of the requester
 * @member {String} sSystemconfigurationtypeDescriptionX
 */
SystemconfigurationResponse.prototype['sSystemconfigurationtypeDescriptionX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldESystemconfigurationNewexternaluseraction} eSystemconfigurationNewexternaluseraction
 */
SystemconfigurationResponse.prototype['eSystemconfigurationNewexternaluseraction'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldESystemconfigurationLanguage1} eSystemconfigurationLanguage1
 */
SystemconfigurationResponse.prototype['eSystemconfigurationLanguage1'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldESystemconfigurationLanguage2} eSystemconfigurationLanguage2
 */
SystemconfigurationResponse.prototype['eSystemconfigurationLanguage2'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldESystemconfigurationEzsign} eSystemconfigurationEzsign
 */
SystemconfigurationResponse.prototype['eSystemconfigurationEzsign'] = undefined;

/**
 * Whether if we allow the creation of personal files in eZsign
 * @member {Boolean} bSystemconfigurationEzsignpersonnal
 */
SystemconfigurationResponse.prototype['bSystemconfigurationEzsignpersonnal'] = undefined;

/**
 * Whether if we allow SSPR
 * @member {Boolean} bSystemconfigurationSspr
 */
SystemconfigurationResponse.prototype['bSystemconfigurationSspr'] = undefined;

/**
 * The start date where the system will be in read only
 * @member {String} dtSystemconfigurationReadonlyexpirationstart
 */
SystemconfigurationResponse.prototype['dtSystemconfigurationReadonlyexpirationstart'] = undefined;

/**
 * The end date where the system will be in read only
 * @member {String} dtSystemconfigurationReadonlyexpirationend
 */
SystemconfigurationResponse.prototype['dtSystemconfigurationReadonlyexpirationend'] = undefined;






export default SystemconfigurationResponse;

