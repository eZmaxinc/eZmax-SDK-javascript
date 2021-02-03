/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FranchisereferalincomeRequest model module.
 * @module eZmaxAPI/model/FranchisereferalincomeRequest
 * @version 1.0.27
 */
class FranchisereferalincomeRequest {
    /**
     * Constructs a new <code>FranchisereferalincomeRequest</code>.
     * An Franchisereferalincome Object
     * @alias module:eZmaxAPI/model/FranchisereferalincomeRequest
     * @param fkiFranchisebrokerID {Number} The unique ID of the Franchisebroker
     * @param fkiFranchisereferalincomeprogramID {Number} The unique ID of the Franchisereferalincomeprogram
     * @param fkiPeriodID {Number} The unique ID of the Period
     * @param dFranchisereferalincomeLoan {String} The loan amount
     * @param dFranchisereferalincomeFranchiseamount {String} The amount that will be given to the franchise
     * @param dFranchisereferalincomeFranchisoramount {String} The amount that will be kept by the franchisor
     * @param dFranchisereferalincomeAgentamount {String} The amount that will be given to the agent
     * @param dtFranchisereferalincomeDisbursed {String} The date the amounts were disbursed
     * @param tFranchisereferalincomeComment {String} A comment about the transaction
     * @param fkiFranchiseofficeID {Number} The unique ID of the Franchisereoffice
     * @param sFranchisereferalincomeRemoteid {String} 
     */
    constructor(fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid) { 
        
        FranchisereferalincomeRequest.initialize(this, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid) { 
        obj['fkiFranchisebrokerID'] = fkiFranchisebrokerID;
        obj['fkiFranchisereferalincomeprogramID'] = fkiFranchisereferalincomeprogramID;
        obj['fkiPeriodID'] = fkiPeriodID;
        obj['dFranchisereferalincomeLoan'] = dFranchisereferalincomeLoan;
        obj['dFranchisereferalincomeFranchiseamount'] = dFranchisereferalincomeFranchiseamount;
        obj['dFranchisereferalincomeFranchisoramount'] = dFranchisereferalincomeFranchisoramount;
        obj['dFranchisereferalincomeAgentamount'] = dFranchisereferalincomeAgentamount;
        obj['dtFranchisereferalincomeDisbursed'] = dtFranchisereferalincomeDisbursed;
        obj['tFranchisereferalincomeComment'] = tFranchisereferalincomeComment;
        obj['fkiFranchiseofficeID'] = fkiFranchiseofficeID;
        obj['sFranchisereferalincomeRemoteid'] = sFranchisereferalincomeRemoteid;
    }

    /**
     * Constructs a <code>FranchisereferalincomeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequest} The populated <code>FranchisereferalincomeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeRequest();

            if (data.hasOwnProperty('fkiFranchisebrokerID')) {
                obj['fkiFranchisebrokerID'] = ApiClient.convertToType(data['fkiFranchisebrokerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiFranchisereferalincomeprogramID')) {
                obj['fkiFranchisereferalincomeprogramID'] = ApiClient.convertToType(data['fkiFranchisereferalincomeprogramID'], 'Number');
            }
            if (data.hasOwnProperty('fkiPeriodID')) {
                obj['fkiPeriodID'] = ApiClient.convertToType(data['fkiPeriodID'], 'Number');
            }
            if (data.hasOwnProperty('dFranchisereferalincomeLoan')) {
                obj['dFranchisereferalincomeLoan'] = ApiClient.convertToType(data['dFranchisereferalincomeLoan'], 'String');
            }
            if (data.hasOwnProperty('dFranchisereferalincomeFranchiseamount')) {
                obj['dFranchisereferalincomeFranchiseamount'] = ApiClient.convertToType(data['dFranchisereferalincomeFranchiseamount'], 'String');
            }
            if (data.hasOwnProperty('dFranchisereferalincomeFranchisoramount')) {
                obj['dFranchisereferalincomeFranchisoramount'] = ApiClient.convertToType(data['dFranchisereferalincomeFranchisoramount'], 'String');
            }
            if (data.hasOwnProperty('dFranchisereferalincomeAgentamount')) {
                obj['dFranchisereferalincomeAgentamount'] = ApiClient.convertToType(data['dFranchisereferalincomeAgentamount'], 'String');
            }
            if (data.hasOwnProperty('dtFranchisereferalincomeDisbursed')) {
                obj['dtFranchisereferalincomeDisbursed'] = ApiClient.convertToType(data['dtFranchisereferalincomeDisbursed'], 'String');
            }
            if (data.hasOwnProperty('tFranchisereferalincomeComment')) {
                obj['tFranchisereferalincomeComment'] = ApiClient.convertToType(data['tFranchisereferalincomeComment'], 'String');
            }
            if (data.hasOwnProperty('fkiFranchiseofficeID')) {
                obj['fkiFranchiseofficeID'] = ApiClient.convertToType(data['fkiFranchiseofficeID'], 'Number');
            }
            if (data.hasOwnProperty('sFranchisereferalincomeRemoteid')) {
                obj['sFranchisereferalincomeRemoteid'] = ApiClient.convertToType(data['sFranchisereferalincomeRemoteid'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Franchisebroker
     * @return {Number}
     */
    getFkiFranchisebrokerID() {
        return this.fkiFranchisebrokerID;
    }

    /**
     * Sets The unique ID of the Franchisebroker
     * @param {Number} fkiFranchisebrokerID The unique ID of the Franchisebroker
     */
    setFkiFranchisebrokerID(fkiFranchisebrokerID) {
        this['fkiFranchisebrokerID'] = fkiFranchisebrokerID;
    }
/**
     * Returns The unique ID of the Franchisereferalincomeprogram
     * @return {Number}
     */
    getFkiFranchisereferalincomeprogramID() {
        return this.fkiFranchisereferalincomeprogramID;
    }

    /**
     * Sets The unique ID of the Franchisereferalincomeprogram
     * @param {Number} fkiFranchisereferalincomeprogramID The unique ID of the Franchisereferalincomeprogram
     */
    setFkiFranchisereferalincomeprogramID(fkiFranchisereferalincomeprogramID) {
        this['fkiFranchisereferalincomeprogramID'] = fkiFranchisereferalincomeprogramID;
    }
/**
     * Returns The unique ID of the Period
     * @return {Number}
     */
    getFkiPeriodID() {
        return this.fkiPeriodID;
    }

    /**
     * Sets The unique ID of the Period
     * @param {Number} fkiPeriodID The unique ID of the Period
     */
    setFkiPeriodID(fkiPeriodID) {
        this['fkiPeriodID'] = fkiPeriodID;
    }
/**
     * Returns The loan amount
     * @return {String}
     */
    getDFranchisereferalincomeLoan() {
        return this.dFranchisereferalincomeLoan;
    }

    /**
     * Sets The loan amount
     * @param {String} dFranchisereferalincomeLoan The loan amount
     */
    setDFranchisereferalincomeLoan(dFranchisereferalincomeLoan) {
        this['dFranchisereferalincomeLoan'] = dFranchisereferalincomeLoan;
    }
/**
     * Returns The amount that will be given to the franchise
     * @return {String}
     */
    getDFranchisereferalincomeFranchiseamount() {
        return this.dFranchisereferalincomeFranchiseamount;
    }

    /**
     * Sets The amount that will be given to the franchise
     * @param {String} dFranchisereferalincomeFranchiseamount The amount that will be given to the franchise
     */
    setDFranchisereferalincomeFranchiseamount(dFranchisereferalincomeFranchiseamount) {
        this['dFranchisereferalincomeFranchiseamount'] = dFranchisereferalincomeFranchiseamount;
    }
/**
     * Returns The amount that will be kept by the franchisor
     * @return {String}
     */
    getDFranchisereferalincomeFranchisoramount() {
        return this.dFranchisereferalincomeFranchisoramount;
    }

    /**
     * Sets The amount that will be kept by the franchisor
     * @param {String} dFranchisereferalincomeFranchisoramount The amount that will be kept by the franchisor
     */
    setDFranchisereferalincomeFranchisoramount(dFranchisereferalincomeFranchisoramount) {
        this['dFranchisereferalincomeFranchisoramount'] = dFranchisereferalincomeFranchisoramount;
    }
/**
     * Returns The amount that will be given to the agent
     * @return {String}
     */
    getDFranchisereferalincomeAgentamount() {
        return this.dFranchisereferalincomeAgentamount;
    }

    /**
     * Sets The amount that will be given to the agent
     * @param {String} dFranchisereferalincomeAgentamount The amount that will be given to the agent
     */
    setDFranchisereferalincomeAgentamount(dFranchisereferalincomeAgentamount) {
        this['dFranchisereferalincomeAgentamount'] = dFranchisereferalincomeAgentamount;
    }
/**
     * Returns The date the amounts were disbursed
     * @return {String}
     */
    getDtFranchisereferalincomeDisbursed() {
        return this.dtFranchisereferalincomeDisbursed;
    }

    /**
     * Sets The date the amounts were disbursed
     * @param {String} dtFranchisereferalincomeDisbursed The date the amounts were disbursed
     */
    setDtFranchisereferalincomeDisbursed(dtFranchisereferalincomeDisbursed) {
        this['dtFranchisereferalincomeDisbursed'] = dtFranchisereferalincomeDisbursed;
    }
/**
     * Returns A comment about the transaction
     * @return {String}
     */
    getTFranchisereferalincomeComment() {
        return this.tFranchisereferalincomeComment;
    }

    /**
     * Sets A comment about the transaction
     * @param {String} tFranchisereferalincomeComment A comment about the transaction
     */
    setTFranchisereferalincomeComment(tFranchisereferalincomeComment) {
        this['tFranchisereferalincomeComment'] = tFranchisereferalincomeComment;
    }
/**
     * Returns The unique ID of the Franchisereoffice
     * @return {Number}
     */
    getFkiFranchiseofficeID() {
        return this.fkiFranchiseofficeID;
    }

    /**
     * Sets The unique ID of the Franchisereoffice
     * @param {Number} fkiFranchiseofficeID The unique ID of the Franchisereoffice
     */
    setFkiFranchiseofficeID(fkiFranchiseofficeID) {
        this['fkiFranchiseofficeID'] = fkiFranchiseofficeID;
    }
/**
     * @return {String}
     */
    getSFranchisereferalincomeRemoteid() {
        return this.sFranchisereferalincomeRemoteid;
    }

    /**
     * @param {String} sFranchisereferalincomeRemoteid
     */
    setSFranchisereferalincomeRemoteid(sFranchisereferalincomeRemoteid) {
        this['sFranchisereferalincomeRemoteid'] = sFranchisereferalincomeRemoteid;
    }

}

/**
 * The unique ID of the Franchisebroker
 * @member {Number} fkiFranchisebrokerID
 */
FranchisereferalincomeRequest.prototype['fkiFranchisebrokerID'] = undefined;

/**
 * The unique ID of the Franchisereferalincomeprogram
 * @member {Number} fkiFranchisereferalincomeprogramID
 */
FranchisereferalincomeRequest.prototype['fkiFranchisereferalincomeprogramID'] = undefined;

/**
 * The unique ID of the Period
 * @member {Number} fkiPeriodID
 */
FranchisereferalincomeRequest.prototype['fkiPeriodID'] = undefined;

/**
 * The loan amount
 * @member {String} dFranchisereferalincomeLoan
 */
FranchisereferalincomeRequest.prototype['dFranchisereferalincomeLoan'] = undefined;

/**
 * The amount that will be given to the franchise
 * @member {String} dFranchisereferalincomeFranchiseamount
 */
FranchisereferalincomeRequest.prototype['dFranchisereferalincomeFranchiseamount'] = undefined;

/**
 * The amount that will be kept by the franchisor
 * @member {String} dFranchisereferalincomeFranchisoramount
 */
FranchisereferalincomeRequest.prototype['dFranchisereferalincomeFranchisoramount'] = undefined;

/**
 * The amount that will be given to the agent
 * @member {String} dFranchisereferalincomeAgentamount
 */
FranchisereferalincomeRequest.prototype['dFranchisereferalincomeAgentamount'] = undefined;

/**
 * The date the amounts were disbursed
 * @member {String} dtFranchisereferalincomeDisbursed
 */
FranchisereferalincomeRequest.prototype['dtFranchisereferalincomeDisbursed'] = undefined;

/**
 * A comment about the transaction
 * @member {String} tFranchisereferalincomeComment
 */
FranchisereferalincomeRequest.prototype['tFranchisereferalincomeComment'] = undefined;

/**
 * The unique ID of the Franchisereoffice
 * @member {Number} fkiFranchiseofficeID
 */
FranchisereferalincomeRequest.prototype['fkiFranchiseofficeID'] = undefined;

/**
 * @member {String} sFranchisereferalincomeRemoteid
 */
FranchisereferalincomeRequest.prototype['sFranchisereferalincomeRemoteid'] = undefined;






export default FranchisereferalincomeRequest;

