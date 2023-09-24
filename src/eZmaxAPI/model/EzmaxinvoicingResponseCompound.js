/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import CustomEzmaxinvoicingEzsigndocumentResponse from './CustomEzmaxinvoicingEzsigndocumentResponse';
import CustomEzmaxinvoicingEzsignfolderResponse from './CustomEzmaxinvoicingEzsignfolderResponse';
import CustomEzmaxpricingResponse from './CustomEzmaxpricingResponse';
import EzmaxinvoicingResponse from './EzmaxinvoicingResponse';
import EzmaxinvoicingagentResponseCompound from './EzmaxinvoicingagentResponseCompound';
import EzmaxinvoicingcontractResponseCompound from './EzmaxinvoicingcontractResponseCompound';
import EzmaxinvoicingsummaryexternalResponseCompound from './EzmaxinvoicingsummaryexternalResponseCompound';
import EzmaxinvoicingsummaryglobalResponseCompound from './EzmaxinvoicingsummaryglobalResponseCompound';
import EzmaxinvoicingsummaryinternalResponseCompound from './EzmaxinvoicingsummaryinternalResponseCompound';
import EzmaxinvoicinguserResponseCompound from './EzmaxinvoicinguserResponseCompound';
import FieldEEzmaxinvoicingPaymenttype from './FieldEEzmaxinvoicingPaymenttype';

/**
 * The EzmaxinvoicingResponseCompound model module.
 * @module eZmaxAPI/model/EzmaxinvoicingResponseCompound
 * @version 1.2.0
 */
class EzmaxinvoicingResponseCompound {
    /**
     * Constructs a new <code>EzmaxinvoicingResponseCompound</code>.
     * A Ezmaxinvoicing Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingResponseCompound
     * @implements module:eZmaxAPI/model/EzmaxinvoicingResponse
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
     * @param objEzmaxinvoicingcontract {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} 
     * @param objEzmaxpricing {module:eZmaxAPI/model/CustomEzmaxpricingResponse} 
     * @param a_objEzmaxinvoicingsummaryglobal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} 
     * @param a_objEzmaxinvoicingsummaryexternal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} 
     * @param a_objEzmaxinvoicingsummaryinternal {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} 
     * @param a_objEzmaxinvoicingagent {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} 
     * @param a_objEzmaxinvoicinguser {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} 
     * @param a_objEzmaxinvoicingezsignfolder {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} 
     * @param a_objEzmaxinvoicingezsigndocument {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} 
     */
    constructor(fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents, objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument) { 
        EzmaxinvoicingResponse.initialize(this, fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents);
        EzmaxinvoicingResponseCompound.initialize(this, fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents, objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxinvoicingcontractID, fkiEzmaxpricingID, fkiSystemconfigurationtypeID, sSystemconfigurationtypeDescriptionX, yyyymmEzmaxinvoicing, iEzmaxinvoicingDays, eEzmaxinvoicingPaymenttype, dEzmaxinvoicingRebatepaymenttype, iEzmaxinvoicingContractlength, dEzmaxinvoicingRebatecontractlength, bEzmaxinvoicingRebateEzsignallagents, objEzmaxinvoicingcontract, objEzmaxpricing, a_objEzmaxinvoicingsummaryglobal, a_objEzmaxinvoicingsummaryexternal, a_objEzmaxinvoicingsummaryinternal, a_objEzmaxinvoicingagent, a_objEzmaxinvoicinguser, a_objEzmaxinvoicingezsignfolder, a_objEzmaxinvoicingezsigndocument) { 
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
        obj['objEzmaxinvoicingcontract'] = objEzmaxinvoicingcontract;
        obj['objEzmaxpricing'] = objEzmaxpricing;
        obj['a_objEzmaxinvoicingsummaryglobal'] = a_objEzmaxinvoicingsummaryglobal;
        obj['a_objEzmaxinvoicingsummaryexternal'] = a_objEzmaxinvoicingsummaryexternal;
        obj['a_objEzmaxinvoicingsummaryinternal'] = a_objEzmaxinvoicingsummaryinternal;
        obj['a_objEzmaxinvoicingagent'] = a_objEzmaxinvoicingagent;
        obj['a_objEzmaxinvoicinguser'] = a_objEzmaxinvoicinguser;
        obj['a_objEzmaxinvoicingezsignfolder'] = a_objEzmaxinvoicingezsignfolder;
        obj['a_objEzmaxinvoicingezsigndocument'] = a_objEzmaxinvoicingezsigndocument;
    }

    /**
     * Constructs a <code>EzmaxinvoicingResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingResponseCompound} The populated <code>EzmaxinvoicingResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingResponseCompound();
            EzmaxinvoicingResponse.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('objEzmaxinvoicingcontract')) {
                obj['objEzmaxinvoicingcontract'] = EzmaxinvoicingcontractResponseCompound.constructFromObject(data['objEzmaxinvoicingcontract']);
            }
            if (data.hasOwnProperty('objEzmaxpricing')) {
                obj['objEzmaxpricing'] = CustomEzmaxpricingResponse.constructFromObject(data['objEzmaxpricing']);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryglobal')) {
                obj['a_objEzmaxinvoicingsummaryglobal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryglobal'], [EzmaxinvoicingsummaryglobalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryexternal')) {
                obj['a_objEzmaxinvoicingsummaryexternal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryexternal'], [EzmaxinvoicingsummaryexternalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingsummaryinternal')) {
                obj['a_objEzmaxinvoicingsummaryinternal'] = ApiClient.convertToType(data['a_objEzmaxinvoicingsummaryinternal'], [EzmaxinvoicingsummaryinternalResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingagent')) {
                obj['a_objEzmaxinvoicingagent'] = ApiClient.convertToType(data['a_objEzmaxinvoicingagent'], [EzmaxinvoicingagentResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicinguser')) {
                obj['a_objEzmaxinvoicinguser'] = ApiClient.convertToType(data['a_objEzmaxinvoicinguser'], [EzmaxinvoicinguserResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingezsignfolder')) {
                obj['a_objEzmaxinvoicingezsignfolder'] = ApiClient.convertToType(data['a_objEzmaxinvoicingezsignfolder'], [CustomEzmaxinvoicingEzsignfolderResponse]);
            }
            if (data.hasOwnProperty('a_objEzmaxinvoicingezsigndocument')) {
                obj['a_objEzmaxinvoicingezsigndocument'] = ApiClient.convertToType(data['a_objEzmaxinvoicingezsigndocument'], [CustomEzmaxinvoicingEzsigndocumentResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingResponseCompound.RequiredProperties) {
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
        // validate the optional field `objEzmaxinvoicingcontract`
        if (data['objEzmaxinvoicingcontract']) { // data not null
          EzmaxinvoicingcontractResponseCompound.validateJSON(data['objEzmaxinvoicingcontract']);
        }
        // validate the optional field `objEzmaxpricing`
        if (data['objEzmaxpricing']) { // data not null
          CustomEzmaxpricingResponse.validateJSON(data['objEzmaxpricing']);
        }
        if (data['a_objEzmaxinvoicingsummaryglobal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingsummaryglobal'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingsummaryglobal` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingsummaryglobal']);
            }
            // validate the optional field `a_objEzmaxinvoicingsummaryglobal` (array)
            for (const item of data['a_objEzmaxinvoicingsummaryglobal']) {
                EzmaxinvoicingsummaryglobalResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicingsummaryexternal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingsummaryexternal'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingsummaryexternal` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingsummaryexternal']);
            }
            // validate the optional field `a_objEzmaxinvoicingsummaryexternal` (array)
            for (const item of data['a_objEzmaxinvoicingsummaryexternal']) {
                EzmaxinvoicingsummaryexternalResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicingsummaryinternal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingsummaryinternal'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingsummaryinternal` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingsummaryinternal']);
            }
            // validate the optional field `a_objEzmaxinvoicingsummaryinternal` (array)
            for (const item of data['a_objEzmaxinvoicingsummaryinternal']) {
                EzmaxinvoicingsummaryinternalResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicingagent']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingagent'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingagent` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingagent']);
            }
            // validate the optional field `a_objEzmaxinvoicingagent` (array)
            for (const item of data['a_objEzmaxinvoicingagent']) {
                EzmaxinvoicingagentResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicinguser']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicinguser'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicinguser` to be an array in the JSON data but got " + data['a_objEzmaxinvoicinguser']);
            }
            // validate the optional field `a_objEzmaxinvoicinguser` (array)
            for (const item of data['a_objEzmaxinvoicinguser']) {
                EzmaxinvoicinguserResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicingezsignfolder']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingezsignfolder'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingezsignfolder` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingezsignfolder']);
            }
            // validate the optional field `a_objEzmaxinvoicingezsignfolder` (array)
            for (const item of data['a_objEzmaxinvoicingezsignfolder']) {
                CustomEzmaxinvoicingEzsignfolderResponse.validateJSON(item);
            };
        }
        if (data['a_objEzmaxinvoicingezsigndocument']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzmaxinvoicingezsigndocument'])) {
                throw new Error("Expected the field `a_objEzmaxinvoicingezsigndocument` to be an array in the JSON data but got " + data['a_objEzmaxinvoicingezsigndocument']);
            }
            // validate the optional field `a_objEzmaxinvoicingezsigndocument` (array)
            for (const item of data['a_objEzmaxinvoicingezsigndocument']) {
                CustomEzmaxinvoicingEzsigndocumentResponse.validateJSON(item);
            };
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
/**
     * @return {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound}
     */
    getObjEzmaxinvoicingcontract() {
        return this.objEzmaxinvoicingcontract;
    }

    /**
     * @param {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} objEzmaxinvoicingcontract
     */
    setObjEzmaxinvoicingcontract(objEzmaxinvoicingcontract) {
        this['objEzmaxinvoicingcontract'] = objEzmaxinvoicingcontract;
    }
/**
     * @return {module:eZmaxAPI/model/CustomEzmaxpricingResponse}
     */
    getObjEzmaxpricing() {
        return this.objEzmaxpricing;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomEzmaxpricingResponse} objEzmaxpricing
     */
    setObjEzmaxpricing(objEzmaxpricing) {
        this['objEzmaxpricing'] = objEzmaxpricing;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryglobal() {
        return this.a_objEzmaxinvoicingsummaryglobal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} a_objEzmaxinvoicingsummaryglobal
     */
    setAObjEzmaxinvoicingsummaryglobal(a_objEzmaxinvoicingsummaryglobal) {
        this['a_objEzmaxinvoicingsummaryglobal'] = a_objEzmaxinvoicingsummaryglobal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryexternal() {
        return this.a_objEzmaxinvoicingsummaryexternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} a_objEzmaxinvoicingsummaryexternal
     */
    setAObjEzmaxinvoicingsummaryexternal(a_objEzmaxinvoicingsummaryexternal) {
        this['a_objEzmaxinvoicingsummaryexternal'] = a_objEzmaxinvoicingsummaryexternal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>}
     */
    getAObjEzmaxinvoicingsummaryinternal() {
        return this.a_objEzmaxinvoicingsummaryinternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} a_objEzmaxinvoicingsummaryinternal
     */
    setAObjEzmaxinvoicingsummaryinternal(a_objEzmaxinvoicingsummaryinternal) {
        this['a_objEzmaxinvoicingsummaryinternal'] = a_objEzmaxinvoicingsummaryinternal;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>}
     */
    getAObjEzmaxinvoicingagent() {
        return this.a_objEzmaxinvoicingagent;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} a_objEzmaxinvoicingagent
     */
    setAObjEzmaxinvoicingagent(a_objEzmaxinvoicingagent) {
        this['a_objEzmaxinvoicingagent'] = a_objEzmaxinvoicingagent;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>}
     */
    getAObjEzmaxinvoicinguser() {
        return this.a_objEzmaxinvoicinguser;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} a_objEzmaxinvoicinguser
     */
    setAObjEzmaxinvoicinguser(a_objEzmaxinvoicinguser) {
        this['a_objEzmaxinvoicinguser'] = a_objEzmaxinvoicinguser;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>}
     */
    getAObjEzmaxinvoicingezsignfolder() {
        return this.a_objEzmaxinvoicingezsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} a_objEzmaxinvoicingezsignfolder
     */
    setAObjEzmaxinvoicingezsignfolder(a_objEzmaxinvoicingezsignfolder) {
        this['a_objEzmaxinvoicingezsignfolder'] = a_objEzmaxinvoicingezsignfolder;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>}
     */
    getAObjEzmaxinvoicingezsigndocument() {
        return this.a_objEzmaxinvoicingezsigndocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} a_objEzmaxinvoicingezsigndocument
     */
    setAObjEzmaxinvoicingezsigndocument(a_objEzmaxinvoicingezsigndocument) {
        this['a_objEzmaxinvoicingezsigndocument'] = a_objEzmaxinvoicingezsigndocument;
    }

}

EzmaxinvoicingResponseCompound.RequiredProperties = ["fkiEzmaxinvoicingcontractID", "fkiEzmaxpricingID", "fkiSystemconfigurationtypeID", "sSystemconfigurationtypeDescriptionX", "yyyymmEzmaxinvoicing", "iEzmaxinvoicingDays", "eEzmaxinvoicingPaymenttype", "dEzmaxinvoicingRebatepaymenttype", "iEzmaxinvoicingContractlength", "dEzmaxinvoicingRebatecontractlength", "bEzmaxinvoicingRebateEzsignallagents", "objEzmaxinvoicingcontract", "objEzmaxpricing", "a_objEzmaxinvoicingsummaryglobal", "a_objEzmaxinvoicingsummaryexternal", "a_objEzmaxinvoicingsummaryinternal", "a_objEzmaxinvoicingagent", "a_objEzmaxinvoicinguser", "a_objEzmaxinvoicingezsignfolder", "a_objEzmaxinvoicingezsigndocument"];

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} pkiEzmaxinvoicingID
 */
EzmaxinvoicingResponseCompound.prototype['pkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicingcontract
 * @member {Number} fkiEzmaxinvoicingcontractID
 */
EzmaxinvoicingResponseCompound.prototype['fkiEzmaxinvoicingcontractID'] = undefined;

/**
 * The unique ID of the Ezmaxpricing
 * @member {Number} fkiEzmaxpricingID
 */
EzmaxinvoicingResponseCompound.prototype['fkiEzmaxpricingID'] = undefined;

/**
 * The unique ID of the Systemconfigurationtype
 * @member {Number} fkiSystemconfigurationtypeID
 */
EzmaxinvoicingResponseCompound.prototype['fkiSystemconfigurationtypeID'] = undefined;

/**
 * The description of the Systemconfigurationtype in the language of the requester
 * @member {String} sSystemconfigurationtypeDescriptionX
 */
EzmaxinvoicingResponseCompound.prototype['sSystemconfigurationtypeDescriptionX'] = undefined;

/**
 * The YYYYMM period of the Ezmaxinvoicing
 * @member {String} yyyymmEzmaxinvoicing
 */
EzmaxinvoicingResponseCompound.prototype['yyyymmEzmaxinvoicing'] = undefined;

/**
 * The number of days invoiced
 * @member {Number} iEzmaxinvoicingDays
 */
EzmaxinvoicingResponseCompound.prototype['iEzmaxinvoicingDays'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzmaxinvoicingPaymenttype} eEzmaxinvoicingPaymenttype
 */
EzmaxinvoicingResponseCompound.prototype['eEzmaxinvoicingPaymenttype'] = undefined;

/**
 * The percentage of rebate depending of the payment type
 * @member {String} dEzmaxinvoicingRebatepaymenttype
 */
EzmaxinvoicingResponseCompound.prototype['dEzmaxinvoicingRebatepaymenttype'] = undefined;

/**
 * The length of the contract in years
 * @member {Number} iEzmaxinvoicingContractlength
 */
EzmaxinvoicingResponseCompound.prototype['iEzmaxinvoicingContractlength'] = undefined;

/**
 * The percentage of rebate depending of the contract length
 * @member {String} dEzmaxinvoicingRebatecontractlength
 */
EzmaxinvoicingResponseCompound.prototype['dEzmaxinvoicingRebatecontractlength'] = undefined;

/**
 * Whether the rebate for eZsign is for all agents
 * @member {Boolean} bEzmaxinvoicingRebateEzsignallagents
 */
EzmaxinvoicingResponseCompound.prototype['bEzmaxinvoicingRebateEzsignallagents'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzmaxinvoicingResponseCompound.prototype['objAudit'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzmaxinvoicingcontractResponseCompound} objEzmaxinvoicingcontract
 */
EzmaxinvoicingResponseCompound.prototype['objEzmaxinvoicingcontract'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomEzmaxpricingResponse} objEzmaxpricing
 */
EzmaxinvoicingResponseCompound.prototype['objEzmaxpricing'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponseCompound>} a_objEzmaxinvoicingsummaryglobal
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingsummaryglobal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponseCompound>} a_objEzmaxinvoicingsummaryexternal
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingsummaryexternal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingsummaryinternalResponseCompound>} a_objEzmaxinvoicingsummaryinternal
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingsummaryinternal'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompound>} a_objEzmaxinvoicingagent
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingagent'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzmaxinvoicinguserResponseCompound>} a_objEzmaxinvoicinguser
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicinguser'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse>} a_objEzmaxinvoicingezsignfolder
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingezsignfolder'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzmaxinvoicingEzsigndocumentResponse>} a_objEzmaxinvoicingezsigndocument
 */
EzmaxinvoicingResponseCompound.prototype['a_objEzmaxinvoicingezsigndocument'] = undefined;


// Implement EzmaxinvoicingResponse interface:
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




export default EzmaxinvoicingResponseCompound;

