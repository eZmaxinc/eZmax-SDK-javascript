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
import CommonAudit from './CommonAudit';
import FieldEEzmaxinvoicingPaymenttype from './FieldEEzmaxinvoicingPaymenttype';

/**
 * The EzmaxinvoicingResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingResponse
 * @version 1.1.18
 */
class EzmaxinvoicingResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingResponse</code>.
     * A Ezmaxinvoicing Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingResponse
     * @param fkiEzmaxinvoicingcontractID {Number} The unique ID of the Ezmaxinvoicingcontract
     * @param fkiEzmaxpricingID {Number} The unique ID of the Ezmaxpricing
     * @param fkiSystemconfigurationtypeID {Number} The unique ID of the Systemconfigurationtype
     * @param sSystemconfigurationtypeDescriptionX {String} The description of the Systemconfigurationtype in the language of the requester
     * @param yyyymmEzmaxinvoicing {String} The YYYYMM period of the Ezmaxinvoicing
     * @param iEzmaxinvoicingDays {Number} The number of days invoiced
     * @param eEzmaxinvoicingPaymenttype {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype} 
     * @param dEzmaxinvoicingRebatepaymenttype {String} The percentage of rebate depending of the payment type
     * @param iEzmaxinvoicingContractlength {Number} The length of the contract in years
     * @param dEzmaxinvoicingRebatecontractlength {String} The percentage of rebate depending of the contract length
     * @param bEzmaxinvoicingRebateEzsignallagents {Boolean} Whether the rebate for eZsign is for all agents
     */
    constructor(fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents) { 
        
        EzmaxinvoicingResponse.initialize(this, fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents) { 
        obj['fkiEzmaxinvoicingcontractID'] = fkiEzmaxinvoicingcontractID;
        obj['fkiEzmaxpricingID'] = fkiEzmaxpricingID;
        obj['fkiSystemconfigurationtypeID'] = fkiSystemconfigurationtypeID;
        obj['sSystemconfigurationtypeDescriptionX'] = sSystemconfigurationtypeDescriptionX;
        obj['yyyymmEzmaxinvoicing'] = yyyymmEzmaxinvoicing;
        obj['iEzmaxinvoicingDays'] = iEzmaxinvoicingDays;
        obj['eEzmaxinvoicingPaymenttype'] = eEzmaxinvoicingPaymenttype;
        obj['dEzmaxinvoicingRebatepaymenttype'] = dEzmaxinvoicingRebatepaymenttype;
        obj['iEzmaxinvoicingContractlength'] = iEzmaxinvoicingContractlength;
        obj['dEzmaxinvoicingRebatecontractlength'] = dEzmaxinvoicingRebatecontractlength;
        obj['bEzmaxinvoicingRebateEzsignallagents'] = bEzmaxinvoicingRebateEzsignallagents;
    }

    /**
     * Constructs a <code>EzmaxinvoicingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingResponse} The populated <code>EzmaxinvoicingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicingID')) {
                obj['pkiEzmaxinvoicingID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingcontractID')) {
                obj['fkiEzmaxinvoicingcontractID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingcontractID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxpricingID')) {
                obj['fkiEzmaxpricingID'] = ApiClient.convertToType(data['fkiEzmaxpricingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiSystemconfigurationtypeID')) {
                obj['fkiSystemconfigurationtypeID'] = ApiClient.convertToType(data['fkiSystemconfigurationtypeID'], 'Number');
            }
            if (data.hasOwnProperty('sSystemconfigurationtypeDescriptionX')) {
                obj['sSystemconfigurationtypeDescriptionX'] = ApiClient.convertToType(data['sSystemconfigurationtypeDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('yyyymmEzmaxinvoicing')) {
                obj['yyyymmEzmaxinvoicing'] = ApiClient.convertToType(data['yyyymmEzmaxinvoicing'], 'String');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingDays')) {
                obj['iEzmaxinvoicingDays'] = ApiClient.convertToType(data['iEzmaxinvoicingDays'], 'Number');
            }
            if (data.hasOwnProperty('eEzmaxinvoicingPaymenttype')) {
                obj['eEzmaxinvoicingPaymenttype'] = FieldEEzmaxinvoicingPaymenttype.constructFromObject(data['eEzmaxinvoicingPaymenttype']);
            }
            if (data.hasOwnProperty('dEzmaxinvoicingRebatepaymenttype')) {
                obj['dEzmaxinvoicingRebatepaymenttype'] = ApiClient.convertToType(data['dEzmaxinvoicingRebatepaymenttype'], 'String');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingContractlength')) {
                obj['iEzmaxinvoicingContractlength'] = ApiClient.convertToType(data['iEzmaxinvoicingContractlength'], 'Number');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingRebatecontractlength')) {
                obj['dEzmaxinvoicingRebatecontractlength'] = ApiClient.convertToType(data['dEzmaxinvoicingRebatecontractlength'], 'String');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingRebateEzsignallagents')) {
                obj['bEzmaxinvoicingRebateEzsignallagents'] = ApiClient.convertToType(data['bEzmaxinvoicingRebateEzsignallagents'], 'Boolean');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sSystemconfigurationtypeDescriptionX'] && !(typeof data['sSystemconfigurationtypeDescriptionX'] === 'string' || data['sSystemconfigurationtypeDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sSystemconfigurationtypeDescriptionX` to be a primitive type in the JSON string but got " + data['sSystemconfigurationtypeDescriptionX']);
        }
        // ensure the json data is a string
        if (data['yyyymmEzmaxinvoicing'] && !(typeof data['yyyymmEzmaxinvoicing'] === 'string' || data['yyyymmEzmaxinvoicing'] instanceof String)) {
            throw new Error("Expected the field `yyyymmEzmaxinvoicing` to be a primitive type in the JSON string but got " + data['yyyymmEzmaxinvoicing']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingRebatepaymenttype'] && !(typeof data['dEzmaxinvoicingRebatepaymenttype'] === 'string' || data['dEzmaxinvoicingRebatepaymenttype'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingRebatepaymenttype` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingRebatepaymenttype']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingRebatecontractlength'] && !(typeof data['dEzmaxinvoicingRebatecontractlength'] === 'string' || data['dEzmaxinvoicingRebatecontractlength'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingRebatecontractlength` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingRebatecontractlength']);
        }
        // validate the optional field `objAudit`
        if (data['objAudit']) { // data not null
          CommonAudit.validateJSON(data['objAudit']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicing
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingID() {
        return this.pkiEzmaxinvoicingID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicing
     * @param {Number} pkiEzmaxinvoicingID The unique ID of the Ezmaxinvoicing
     */
    setPkiEzmaxinvoicingID(pkiEzmaxinvoicingID) {
        this['pkiEzmaxinvoicingID'] = pkiEzmaxinvoicingID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicingcontract
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxinvoicingcontractID() {
        return this.fkiEzmaxinvoicingcontractID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingcontract
     * @param {Number} fkiEzmaxinvoicingcontractID The unique ID of the Ezmaxinvoicingcontract
     */
    setFkiEzmaxinvoicingcontractID(fkiEzmaxinvoicingcontractID) {
        this['fkiEzmaxinvoicingcontractID'] = fkiEzmaxinvoicingcontractID;
    }
/**
     * Returns The unique ID of the Ezmaxpricing
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxpricingID() {
        return this.fkiEzmaxpricingID;
    }

    /**
     * Sets The unique ID of the Ezmaxpricing
     * @param {Number} fkiEzmaxpricingID The unique ID of the Ezmaxpricing
     */
    setFkiEzmaxpricingID(fkiEzmaxpricingID) {
        this['fkiEzmaxpricingID'] = fkiEzmaxpricingID;
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
     * Returns The YYYYMM period of the Ezmaxinvoicing
     * @return {String}
     */
    getYyyymmEzmaxinvoicing() {
        return this.yyyymmEzmaxinvoicing;
    }

    /**
     * Sets The YYYYMM period of the Ezmaxinvoicing
     * @param {String} yyyymmEzmaxinvoicing The YYYYMM period of the Ezmaxinvoicing
     */
    setYyyymmEzmaxinvoicing(yyyymmEzmaxinvoicing) {
        this['yyyymmEzmaxinvoicing'] = yyyymmEzmaxinvoicing;
    }
/**
     * Returns The number of days invoiced
     * minimum: 1
     * @return {Number}
     */
    getIEzmaxinvoicingDays() {
        return this.iEzmaxinvoicingDays;
    }

    /**
     * Sets The number of days invoiced
     * @param {Number} iEzmaxinvoicingDays The number of days invoiced
     */
    setIEzmaxinvoicingDays(iEzmaxinvoicingDays) {
        this['iEzmaxinvoicingDays'] = iEzmaxinvoicingDays;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype}
     */
    getEEzmaxinvoicingPaymenttype() {
        return this.eEzmaxinvoicingPaymenttype;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype} eEzmaxinvoicingPaymenttype
     */
    setEEzmaxinvoicingPaymenttype(eEzmaxinvoicingPaymenttype) {
        this['eEzmaxinvoicingPaymenttype'] = eEzmaxinvoicingPaymenttype;
    }
/**
     * Returns The percentage of rebate depending of the payment type
     * @return {String}
     */
    getDEzmaxinvoicingRebatepaymenttype() {
        return this.dEzmaxinvoicingRebatepaymenttype;
    }

    /**
     * Sets The percentage of rebate depending of the payment type
     * @param {String} dEzmaxinvoicingRebatepaymenttype The percentage of rebate depending of the payment type
     */
    setDEzmaxinvoicingRebatepaymenttype(dEzmaxinvoicingRebatepaymenttype) {
        this['dEzmaxinvoicingRebatepaymenttype'] = dEzmaxinvoicingRebatepaymenttype;
    }
/**
     * Returns The length of the contract in years
     * minimum: 1
     * @return {Number}
     */
    getIEzmaxinvoicingContractlength() {
        return this.iEzmaxinvoicingContractlength;
    }

    /**
     * Sets The length of the contract in years
     * @param {Number} iEzmaxinvoicingContractlength The length of the contract in years
     */
    setIEzmaxinvoicingContractlength(iEzmaxinvoicingContractlength) {
        this['iEzmaxinvoicingContractlength'] = iEzmaxinvoicingContractlength;
    }
/**
     * Returns The percentage of rebate depending of the contract length
     * @return {String}
     */
    getDEzmaxinvoicingRebatecontractlength() {
        return this.dEzmaxinvoicingRebatecontractlength;
    }

    /**
     * Sets The percentage of rebate depending of the contract length
     * @param {String} dEzmaxinvoicingRebatecontractlength The percentage of rebate depending of the contract length
     */
    setDEzmaxinvoicingRebatecontractlength(dEzmaxinvoicingRebatecontractlength) {
        this['dEzmaxinvoicingRebatecontractlength'] = dEzmaxinvoicingRebatecontractlength;
    }
/**
     * Returns Whether the rebate for eZsign is for all agents
     * @return {Boolean}
     */
    getBEzmaxinvoicingRebateEzsignallagents() {
        return this.bEzmaxinvoicingRebateEzsignallagents;
    }

    /**
     * Sets Whether the rebate for eZsign is for all agents
     * @param {Boolean} bEzmaxinvoicingRebateEzsignallagents Whether the rebate for eZsign is for all agents
     */
    setBEzmaxinvoicingRebateEzsignallagents(bEzmaxinvoicingRebateEzsignallagents) {
        this['bEzmaxinvoicingRebateEzsignallagents'] = bEzmaxinvoicingRebateEzsignallagents;
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

EzmaxinvoicingResponse.RequiredProperties = ["fkiEzmaxinvoicingcontractID", "fkiEzmaxpricingID", "fkiSystemconfigurationtypeID", "sSystemconfigurationtypeDescriptionX", "yyyymmEzmaxinvoicing", "iEzmaxinvoicingDays", "eEzmaxinvoicingPaymenttype", "dEzmaxinvoicingRebatepaymenttype", "iEzmaxinvoicingContractlength", "dEzmaxinvoicingRebatecontractlength", "bEzmaxinvoicingRebateEzsignallagents"];

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} pkiEzmaxinvoicingID
 */
EzmaxinvoicingResponse.prototype['pkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicingcontract
 * @member {Number} fkiEzmaxinvoicingcontractID
 */
EzmaxinvoicingResponse.prototype['fkiEzmaxinvoicingcontractID'] = undefined;

/**
 * The unique ID of the Ezmaxpricing
 * @member {Number} fkiEzmaxpricingID
 */
EzmaxinvoicingResponse.prototype['fkiEzmaxpricingID'] = undefined;

/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
EzmaxinvoicingResponse.prototype['fkiSystemconfigurationtypeID'] = undefined;

/**
 * The description of the Systemconfigurationtype in the language of the requester
 * @member {String} sSystemconfigurationtypeDescriptionX
 */
EzmaxinvoicingResponse.prototype['sSystemconfigurationtypeDescriptionX'] = undefined;

/**
 * The YYYYMM period of the Ezmaxinvoicing
 * @member {String} yyyymmEzmaxinvoicing
 */
EzmaxinvoicingResponse.prototype['yyyymmEzmaxinvoicing'] = undefined;

/**
 * The number of days invoiced
 * @member {Number} iEzmaxinvoicingDays
 */
EzmaxinvoicingResponse.prototype['iEzmaxinvoicingDays'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype} eEzmaxinvoicingPaymenttype
 */
EzmaxinvoicingResponse.prototype['eEzmaxinvoicingPaymenttype'] = undefined;

/**
 * The percentage of rebate depending of the payment type
 * @member {String} dEzmaxinvoicingRebatepaymenttype
 */
EzmaxinvoicingResponse.prototype['dEzmaxinvoicingRebatepaymenttype'] = undefined;

/**
 * The length of the contract in years
 * @member {Number} iEzmaxinvoicingContractlength
 */
EzmaxinvoicingResponse.prototype['iEzmaxinvoicingContractlength'] = undefined;

/**
 * The percentage of rebate depending of the contract length
 * @member {String} dEzmaxinvoicingRebatecontractlength
 */
EzmaxinvoicingResponse.prototype['dEzmaxinvoicingRebatecontractlength'] = undefined;

/**
 * Whether the rebate for eZsign is for all agents
 * @member {Boolean} bEzmaxinvoicingRebateEzsignallagents
 */
EzmaxinvoicingResponse.prototype['bEzmaxinvoicingRebateEzsignallagents'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzmaxinvoicingResponse.prototype['objAudit'] = undefined;






export default EzmaxinvoicingResponse;

