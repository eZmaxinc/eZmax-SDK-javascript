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
import FieldEEzmaxinvoicingagentVariationezmax from './FieldEEzmaxinvoicingagentVariationezmax';
import FieldEEzmaxinvoicingagentVariationezsign from './FieldEEzmaxinvoicingagentVariationezsign';

/**
 * The EzmaxinvoicingagentResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingagentResponse
 * @version 1.2.0
 */
class EzmaxinvoicingagentResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingagentResponse</code>.
     * A Ezmaxinvoicingagent Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingagentResponse
     * @param fkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param sBillingentityinternalDescriptionX {String} The description of the Billingentityinternal in the language of the requester
     * @param iEzmaxinvoicingagentSession {Number} The number of sessions
     * @param iEzmaxinvoicingagentCloned {Number} The number of times this user was cloned
     * @param iEzmaxinvoicingagentInvoice {Number} The number of invoices
     * @param iEzmaxinvoicingagentInscription {Number} The number of inscriptions
     * @param iEzmaxinvoicingagentInscriptionactive {Number} The number of active inscriptions
     * @param iEzmaxinvoicingagentSale {Number} The number of sales
     * @param iEzmaxinvoicingagentOtherincome {Number} The number of otherincomes
     * @param iEzmaxinvoicingagentCommissioncalculation {Number} The number of commission calculations
     * @param iEzmaxinvoicingagentEzsigndocument {Number} The number of ezsign documents
     * @param bEzmaxinvoicingagentEzsignaccount {Boolean} Whether the agent has an eZsign account
     * @param bEzmaxinvoicingagentBillableezmax {Boolean} Whether it is billable for eZmax
     * @param eEzmaxinvoicingagentVariationezmax {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezmax} 
     * @param bEzmaxinvoicingagentBillableezsign {Boolean} Whether it is billable for eZsign
     * @param eEzmaxinvoicingagentVariationezsign {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezsign} 
     */
    constructor(fkiBillingentityinternalID, sBillingentityinternalDescriptionX, iEzmaxinvoicingagentSession, iEzmaxinvoicingagentCloned, iEzmaxinvoicingagentInvoice, iEzmaxinvoicingagentInscription, iEzmaxinvoicingagentInscriptionactive, iEzmaxinvoicingagentSale, iEzmaxinvoicingagentOtherincome, iEzmaxinvoicingagentCommissioncalculation, iEzmaxinvoicingagentEzsigndocument, bEzmaxinvoicingagentEzsignaccount, bEzmaxinvoicingagentBillableezmax, eEzmaxinvoicingagentVariationezmax, bEzmaxinvoicingagentBillableezsign, eEzmaxinvoicingagentVariationezsign) { 
        
        EzmaxinvoicingagentResponse.initialize(this, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, iEzmaxinvoicingagentSession, iEzmaxinvoicingagentCloned, iEzmaxinvoicingagentInvoice, iEzmaxinvoicingagentInscription, iEzmaxinvoicingagentInscriptionactive, iEzmaxinvoicingagentSale, iEzmaxinvoicingagentOtherincome, iEzmaxinvoicingagentCommissioncalculation, iEzmaxinvoicingagentEzsigndocument, bEzmaxinvoicingagentEzsignaccount, bEzmaxinvoicingagentBillableezmax, eEzmaxinvoicingagentVariationezmax, bEzmaxinvoicingagentBillableezsign, eEzmaxinvoicingagentVariationezsign);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, iEzmaxinvoicingagentSession, iEzmaxinvoicingagentCloned, iEzmaxinvoicingagentInvoice, iEzmaxinvoicingagentInscription, iEzmaxinvoicingagentInscriptionactive, iEzmaxinvoicingagentSale, iEzmaxinvoicingagentOtherincome, iEzmaxinvoicingagentCommissioncalculation, iEzmaxinvoicingagentEzsigndocument, bEzmaxinvoicingagentEzsignaccount, bEzmaxinvoicingagentBillableezmax, eEzmaxinvoicingagentVariationezmax, bEzmaxinvoicingagentBillableezsign, eEzmaxinvoicingagentVariationezsign) { 
        obj['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
        obj['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
        obj['iEzmaxinvoicingagentSession'] = iEzmaxinvoicingagentSession;
        obj['iEzmaxinvoicingagentCloned'] = iEzmaxinvoicingagentCloned;
        obj['iEzmaxinvoicingagentInvoice'] = iEzmaxinvoicingagentInvoice;
        obj['iEzmaxinvoicingagentInscription'] = iEzmaxinvoicingagentInscription;
        obj['iEzmaxinvoicingagentInscriptionactive'] = iEzmaxinvoicingagentInscriptionactive;
        obj['iEzmaxinvoicingagentSale'] = iEzmaxinvoicingagentSale;
        obj['iEzmaxinvoicingagentOtherincome'] = iEzmaxinvoicingagentOtherincome;
        obj['iEzmaxinvoicingagentCommissioncalculation'] = iEzmaxinvoicingagentCommissioncalculation;
        obj['iEzmaxinvoicingagentEzsigndocument'] = iEzmaxinvoicingagentEzsigndocument;
        obj['bEzmaxinvoicingagentEzsignaccount'] = bEzmaxinvoicingagentEzsignaccount;
        obj['bEzmaxinvoicingagentBillableezmax'] = bEzmaxinvoicingagentBillableezmax;
        obj['eEzmaxinvoicingagentVariationezmax'] = eEzmaxinvoicingagentVariationezmax;
        obj['bEzmaxinvoicingagentBillableezsign'] = bEzmaxinvoicingagentBillableezsign;
        obj['eEzmaxinvoicingagentVariationezsign'] = eEzmaxinvoicingagentVariationezsign;
    }

    /**
     * Constructs a <code>EzmaxinvoicingagentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingagentResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingagentResponse} The populated <code>EzmaxinvoicingagentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingagentResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicingagentID')) {
                obj['pkiEzmaxinvoicingagentID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingagentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingID')) {
                obj['fkiEzmaxinvoicingID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBillingentityinternalID')) {
                obj['fkiBillingentityinternalID'] = ApiClient.convertToType(data['fkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityinternalDescriptionX')) {
                obj['sBillingentityinternalDescriptionX'] = ApiClient.convertToType(data['sBillingentityinternalDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('fkiAgentID')) {
                obj['fkiAgentID'] = ApiClient.convertToType(data['fkiAgentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBrokerID')) {
                obj['fkiBrokerID'] = ApiClient.convertToType(data['fkiBrokerID'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentSession')) {
                obj['iEzmaxinvoicingagentSession'] = ApiClient.convertToType(data['iEzmaxinvoicingagentSession'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentCloned')) {
                obj['iEzmaxinvoicingagentCloned'] = ApiClient.convertToType(data['iEzmaxinvoicingagentCloned'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentInvoice')) {
                obj['iEzmaxinvoicingagentInvoice'] = ApiClient.convertToType(data['iEzmaxinvoicingagentInvoice'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentInscription')) {
                obj['iEzmaxinvoicingagentInscription'] = ApiClient.convertToType(data['iEzmaxinvoicingagentInscription'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentInscriptionactive')) {
                obj['iEzmaxinvoicingagentInscriptionactive'] = ApiClient.convertToType(data['iEzmaxinvoicingagentInscriptionactive'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentSale')) {
                obj['iEzmaxinvoicingagentSale'] = ApiClient.convertToType(data['iEzmaxinvoicingagentSale'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentOtherincome')) {
                obj['iEzmaxinvoicingagentOtherincome'] = ApiClient.convertToType(data['iEzmaxinvoicingagentOtherincome'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentCommissioncalculation')) {
                obj['iEzmaxinvoicingagentCommissioncalculation'] = ApiClient.convertToType(data['iEzmaxinvoicingagentCommissioncalculation'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingagentEzsigndocument')) {
                obj['iEzmaxinvoicingagentEzsigndocument'] = ApiClient.convertToType(data['iEzmaxinvoicingagentEzsigndocument'], 'Number');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingagentEzsignaccount')) {
                obj['bEzmaxinvoicingagentEzsignaccount'] = ApiClient.convertToType(data['bEzmaxinvoicingagentEzsignaccount'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingagentBillableezmax')) {
                obj['bEzmaxinvoicingagentBillableezmax'] = ApiClient.convertToType(data['bEzmaxinvoicingagentBillableezmax'], 'Boolean');
            }
            if (data.hasOwnProperty('eEzmaxinvoicingagentVariationezmax')) {
                obj['eEzmaxinvoicingagentVariationezmax'] = FieldEEzmaxinvoicingagentVariationezmax.constructFromObject(data['eEzmaxinvoicingagentVariationezmax']);
            }
            if (data.hasOwnProperty('bEzmaxinvoicingagentBillableezsign')) {
                obj['bEzmaxinvoicingagentBillableezsign'] = ApiClient.convertToType(data['bEzmaxinvoicingagentBillableezsign'], 'Boolean');
            }
            if (data.hasOwnProperty('eEzmaxinvoicingagentVariationezsign')) {
                obj['eEzmaxinvoicingagentVariationezsign'] = FieldEEzmaxinvoicingagentVariationezsign.constructFromObject(data['eEzmaxinvoicingagentVariationezsign']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingagentResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingagentResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingagentResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sBillingentityinternalDescriptionX'] && !(typeof data['sBillingentityinternalDescriptionX'] === 'string' || data['sBillingentityinternalDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityinternalDescriptionX` to be a primitive type in the JSON string but got " + data['sBillingentityinternalDescriptionX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingagent
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingagentID() {
        return this.pkiEzmaxinvoicingagentID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingagent
     * @param {Number} pkiEzmaxinvoicingagentID The unique ID of the Ezmaxinvoicingagent
     */
    setPkiEzmaxinvoicingagentID(pkiEzmaxinvoicingagentID) {
        this['pkiEzmaxinvoicingagentID'] = pkiEzmaxinvoicingagentID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicing
     * minimum: 0
     * @return {Number}
     */
    getFkiEzmaxinvoicingID() {
        return this.fkiEzmaxinvoicingID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicing
     * @param {Number} fkiEzmaxinvoicingID The unique ID of the Ezmaxinvoicing
     */
    setFkiEzmaxinvoicingID(fkiEzmaxinvoicingID) {
        this['fkiEzmaxinvoicingID'] = fkiEzmaxinvoicingID;
    }
/**
     * Returns The unique ID of the Billingentityinternal.
     * minimum: 0
     * @return {Number}
     */
    getFkiBillingentityinternalID() {
        return this.fkiBillingentityinternalID;
    }

    /**
     * Sets The unique ID of the Billingentityinternal.
     * @param {Number} fkiBillingentityinternalID The unique ID of the Billingentityinternal.
     */
    setFkiBillingentityinternalID(fkiBillingentityinternalID) {
        this['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
    }
/**
     * Returns The description of the Billingentityinternal in the language of the requester
     * @return {String}
     */
    getSBillingentityinternalDescriptionX() {
        return this.sBillingentityinternalDescriptionX;
    }

    /**
     * Sets The description of the Billingentityinternal in the language of the requester
     * @param {String} sBillingentityinternalDescriptionX The description of the Billingentityinternal in the language of the requester
     */
    setSBillingentityinternalDescriptionX(sBillingentityinternalDescriptionX) {
        this['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
    }
/**
     * Returns The unique ID of the Agent.
     * minimum: 0
     * @return {Number}
     */
    getFkiAgentID() {
        return this.fkiAgentID;
    }

    /**
     * Sets The unique ID of the Agent.
     * @param {Number} fkiAgentID The unique ID of the Agent.
     */
    setFkiAgentID(fkiAgentID) {
        this['fkiAgentID'] = fkiAgentID;
    }
/**
     * Returns The unique ID of the Broker.
     * minimum: 0
     * @return {Number}
     */
    getFkiBrokerID() {
        return this.fkiBrokerID;
    }

    /**
     * Sets The unique ID of the Broker.
     * @param {Number} fkiBrokerID The unique ID of the Broker.
     */
    setFkiBrokerID(fkiBrokerID) {
        this['fkiBrokerID'] = fkiBrokerID;
    }
/**
     * Returns The number of sessions
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentSession() {
        return this.iEzmaxinvoicingagentSession;
    }

    /**
     * Sets The number of sessions
     * @param {Number} iEzmaxinvoicingagentSession The number of sessions
     */
    setIEzmaxinvoicingagentSession(iEzmaxinvoicingagentSession) {
        this['iEzmaxinvoicingagentSession'] = iEzmaxinvoicingagentSession;
    }
/**
     * Returns The number of times this user was cloned
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentCloned() {
        return this.iEzmaxinvoicingagentCloned;
    }

    /**
     * Sets The number of times this user was cloned
     * @param {Number} iEzmaxinvoicingagentCloned The number of times this user was cloned
     */
    setIEzmaxinvoicingagentCloned(iEzmaxinvoicingagentCloned) {
        this['iEzmaxinvoicingagentCloned'] = iEzmaxinvoicingagentCloned;
    }
/**
     * Returns The number of invoices
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentInvoice() {
        return this.iEzmaxinvoicingagentInvoice;
    }

    /**
     * Sets The number of invoices
     * @param {Number} iEzmaxinvoicingagentInvoice The number of invoices
     */
    setIEzmaxinvoicingagentInvoice(iEzmaxinvoicingagentInvoice) {
        this['iEzmaxinvoicingagentInvoice'] = iEzmaxinvoicingagentInvoice;
    }
/**
     * Returns The number of inscriptions
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentInscription() {
        return this.iEzmaxinvoicingagentInscription;
    }

    /**
     * Sets The number of inscriptions
     * @param {Number} iEzmaxinvoicingagentInscription The number of inscriptions
     */
    setIEzmaxinvoicingagentInscription(iEzmaxinvoicingagentInscription) {
        this['iEzmaxinvoicingagentInscription'] = iEzmaxinvoicingagentInscription;
    }
/**
     * Returns The number of active inscriptions
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentInscriptionactive() {
        return this.iEzmaxinvoicingagentInscriptionactive;
    }

    /**
     * Sets The number of active inscriptions
     * @param {Number} iEzmaxinvoicingagentInscriptionactive The number of active inscriptions
     */
    setIEzmaxinvoicingagentInscriptionactive(iEzmaxinvoicingagentInscriptionactive) {
        this['iEzmaxinvoicingagentInscriptionactive'] = iEzmaxinvoicingagentInscriptionactive;
    }
/**
     * Returns The number of sales
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentSale() {
        return this.iEzmaxinvoicingagentSale;
    }

    /**
     * Sets The number of sales
     * @param {Number} iEzmaxinvoicingagentSale The number of sales
     */
    setIEzmaxinvoicingagentSale(iEzmaxinvoicingagentSale) {
        this['iEzmaxinvoicingagentSale'] = iEzmaxinvoicingagentSale;
    }
/**
     * Returns The number of otherincomes
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentOtherincome() {
        return this.iEzmaxinvoicingagentOtherincome;
    }

    /**
     * Sets The number of otherincomes
     * @param {Number} iEzmaxinvoicingagentOtherincome The number of otherincomes
     */
    setIEzmaxinvoicingagentOtherincome(iEzmaxinvoicingagentOtherincome) {
        this['iEzmaxinvoicingagentOtherincome'] = iEzmaxinvoicingagentOtherincome;
    }
/**
     * Returns The number of commission calculations
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentCommissioncalculation() {
        return this.iEzmaxinvoicingagentCommissioncalculation;
    }

    /**
     * Sets The number of commission calculations
     * @param {Number} iEzmaxinvoicingagentCommissioncalculation The number of commission calculations
     */
    setIEzmaxinvoicingagentCommissioncalculation(iEzmaxinvoicingagentCommissioncalculation) {
        this['iEzmaxinvoicingagentCommissioncalculation'] = iEzmaxinvoicingagentCommissioncalculation;
    }
/**
     * Returns The number of ezsign documents
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicingagentEzsigndocument() {
        return this.iEzmaxinvoicingagentEzsigndocument;
    }

    /**
     * Sets The number of ezsign documents
     * @param {Number} iEzmaxinvoicingagentEzsigndocument The number of ezsign documents
     */
    setIEzmaxinvoicingagentEzsigndocument(iEzmaxinvoicingagentEzsigndocument) {
        this['iEzmaxinvoicingagentEzsigndocument'] = iEzmaxinvoicingagentEzsigndocument;
    }
/**
     * Returns Whether the agent has an eZsign account
     * @return {Boolean}
     */
    getBEzmaxinvoicingagentEzsignaccount() {
        return this.bEzmaxinvoicingagentEzsignaccount;
    }

    /**
     * Sets Whether the agent has an eZsign account
     * @param {Boolean} bEzmaxinvoicingagentEzsignaccount Whether the agent has an eZsign account
     */
    setBEzmaxinvoicingagentEzsignaccount(bEzmaxinvoicingagentEzsignaccount) {
        this['bEzmaxinvoicingagentEzsignaccount'] = bEzmaxinvoicingagentEzsignaccount;
    }
/**
     * Returns Whether it is billable for eZmax
     * @return {Boolean}
     */
    getBEzmaxinvoicingagentBillableezmax() {
        return this.bEzmaxinvoicingagentBillableezmax;
    }

    /**
     * Sets Whether it is billable for eZmax
     * @param {Boolean} bEzmaxinvoicingagentBillableezmax Whether it is billable for eZmax
     */
    setBEzmaxinvoicingagentBillableezmax(bEzmaxinvoicingagentBillableezmax) {
        this['bEzmaxinvoicingagentBillableezmax'] = bEzmaxinvoicingagentBillableezmax;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezmax}
     */
    getEEzmaxinvoicingagentVariationezmax() {
        return this.eEzmaxinvoicingagentVariationezmax;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezmax} eEzmaxinvoicingagentVariationezmax
     */
    setEEzmaxinvoicingagentVariationezmax(eEzmaxinvoicingagentVariationezmax) {
        this['eEzmaxinvoicingagentVariationezmax'] = eEzmaxinvoicingagentVariationezmax;
    }
/**
     * Returns Whether it is billable for eZsign
     * @return {Boolean}
     */
    getBEzmaxinvoicingagentBillableezsign() {
        return this.bEzmaxinvoicingagentBillableezsign;
    }

    /**
     * Sets Whether it is billable for eZsign
     * @param {Boolean} bEzmaxinvoicingagentBillableezsign Whether it is billable for eZsign
     */
    setBEzmaxinvoicingagentBillableezsign(bEzmaxinvoicingagentBillableezsign) {
        this['bEzmaxinvoicingagentBillableezsign'] = bEzmaxinvoicingagentBillableezsign;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezsign}
     */
    getEEzmaxinvoicingagentVariationezsign() {
        return this.eEzmaxinvoicingagentVariationezsign;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezsign} eEzmaxinvoicingagentVariationezsign
     */
    setEEzmaxinvoicingagentVariationezsign(eEzmaxinvoicingagentVariationezsign) {
        this['eEzmaxinvoicingagentVariationezsign'] = eEzmaxinvoicingagentVariationezsign;
    }

}

EzmaxinvoicingagentResponse.RequiredProperties = ["fkiBillingentityinternalID", "sBillingentityinternalDescriptionX", "iEzmaxinvoicingagentSession", "iEzmaxinvoicingagentCloned", "iEzmaxinvoicingagentInvoice", "iEzmaxinvoicingagentInscription", "iEzmaxinvoicingagentInscriptionactive", "iEzmaxinvoicingagentSale", "iEzmaxinvoicingagentOtherincome", "iEzmaxinvoicingagentCommissioncalculation", "iEzmaxinvoicingagentEzsigndocument", "bEzmaxinvoicingagentEzsignaccount", "bEzmaxinvoicingagentBillableezmax", "eEzmaxinvoicingagentVariationezmax", "bEzmaxinvoicingagentBillableezsign", "eEzmaxinvoicingagentVariationezsign"];

/**
 * The unique ID of the Ezmaxinvoicingagent
 * @member {Number} pkiEzmaxinvoicingagentID
 */
EzmaxinvoicingagentResponse.prototype['pkiEzmaxinvoicingagentID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} fkiEzmaxinvoicingID
 */
EzmaxinvoicingagentResponse.prototype['fkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
EzmaxinvoicingagentResponse.prototype['fkiBillingentityinternalID'] = undefined;

/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
EzmaxinvoicingagentResponse.prototype['sBillingentityinternalDescriptionX'] = undefined;

/**
 * The unique ID of the Agent.
 * @member {Number} fkiAgentID
 */
EzmaxinvoicingagentResponse.prototype['fkiAgentID'] = undefined;

/**
 * The unique ID of the Broker.
 * @member {Number} fkiBrokerID
 */
EzmaxinvoicingagentResponse.prototype['fkiBrokerID'] = undefined;

/**
 * The number of sessions
 * @member {Number} iEzmaxinvoicingagentSession
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentSession'] = undefined;

/**
 * The number of times this user was cloned
 * @member {Number} iEzmaxinvoicingagentCloned
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentCloned'] = undefined;

/**
 * The number of invoices
 * @member {Number} iEzmaxinvoicingagentInvoice
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentInvoice'] = undefined;

/**
 * The number of inscriptions
 * @member {Number} iEzmaxinvoicingagentInscription
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentInscription'] = undefined;

/**
 * The number of active inscriptions
 * @member {Number} iEzmaxinvoicingagentInscriptionactive
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentInscriptionactive'] = undefined;

/**
 * The number of sales
 * @member {Number} iEzmaxinvoicingagentSale
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentSale'] = undefined;

/**
 * The number of otherincomes
 * @member {Number} iEzmaxinvoicingagentOtherincome
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentOtherincome'] = undefined;

/**
 * The number of commission calculations
 * @member {Number} iEzmaxinvoicingagentCommissioncalculation
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentCommissioncalculation'] = undefined;

/**
 * The number of ezsign documents
 * @member {Number} iEzmaxinvoicingagentEzsigndocument
 */
EzmaxinvoicingagentResponse.prototype['iEzmaxinvoicingagentEzsigndocument'] = undefined;

/**
 * Whether the agent has an eZsign account
 * @member {Boolean} bEzmaxinvoicingagentEzsignaccount
 */
EzmaxinvoicingagentResponse.prototype['bEzmaxinvoicingagentEzsignaccount'] = undefined;

/**
 * Whether it is billable for eZmax
 * @member {Boolean} bEzmaxinvoicingagentBillableezmax
 */
EzmaxinvoicingagentResponse.prototype['bEzmaxinvoicingagentBillableezmax'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezmax} eEzmaxinvoicingagentVariationezmax
 */
EzmaxinvoicingagentResponse.prototype['eEzmaxinvoicingagentVariationezmax'] = undefined;

/**
 * Whether it is billable for eZsign
 * @member {Boolean} bEzmaxinvoicingagentBillableezsign
 */
EzmaxinvoicingagentResponse.prototype['bEzmaxinvoicingagentBillableezsign'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzmaxinvoicingagentVariationezsign} eEzmaxinvoicingagentVariationezsign
 */
EzmaxinvoicingagentResponse.prototype['eEzmaxinvoicingagentVariationezsign'] = undefined;






export default EzmaxinvoicingagentResponse;

