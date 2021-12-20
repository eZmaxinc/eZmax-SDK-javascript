/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AddressRequest from './AddressRequest';
import ContactRequestCompound from './ContactRequestCompound';
import FranchisereferalincomeRequest from './FranchisereferalincomeRequest';
import FranchisereferalincomeRequestCompoundAllOf from './FranchisereferalincomeRequestCompoundAllOf';

/**
 * The FranchisereferalincomeRequestCompound model module.
 * @module eZmaxAPI/model/FranchisereferalincomeRequestCompound
 * @version 1.1.4
 */
class FranchisereferalincomeRequestCompound {
    /**
     * Constructs a new <code>FranchisereferalincomeRequestCompound</code>.
     * A Franchisereferalincome Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/FranchisereferalincomeRequestCompound
     * @implements module:eZmaxAPI/model/FranchisereferalincomeRequestCompoundAllOf
     * @implements module:eZmaxAPI/model/FranchisereferalincomeRequest
     * @param objAddress {module:eZmaxAPI/model/AddressRequest} 
     * @param a_objContact {Array.<module:eZmaxAPI/model/ContactRequestCompound>} 
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
    constructor(objAddress, a_objContact, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid) { 
        FranchisereferalincomeRequestCompoundAllOf.initialize(this, a_objContact);FranchisereferalincomeRequest.initialize(this, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid);
        FranchisereferalincomeRequestCompound.initialize(this, objAddress, a_objContact, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objAddress, a_objContact, fkiFranchisebrokerID, fkiFranchisereferalincomeprogramID, fkiPeriodID, dFranchisereferalincomeLoan, dFranchisereferalincomeFranchiseamount, dFranchisereferalincomeFranchisoramount, dFranchisereferalincomeAgentamount, dtFranchisereferalincomeDisbursed, tFranchisereferalincomeComment, fkiFranchiseofficeID, sFranchisereferalincomeRemoteid) { 
        obj['objAddress'] = objAddress;
        obj['a_objContact'] = a_objContact;
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
     * Constructs a <code>FranchisereferalincomeRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} The populated <code>FranchisereferalincomeRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeRequestCompound();
            FranchisereferalincomeRequestCompoundAllOf.constructFromObject(data, obj);
            FranchisereferalincomeRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('objAddress')) {
                obj['objAddress'] = AddressRequest.constructFromObject(data['objAddress']);
            }
            if (data.hasOwnProperty('a_objContact')) {
                obj['a_objContact'] = ApiClient.convertToType(data['a_objContact'], [ContactRequestCompound]);
            }
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
     * @return {module:eZmaxAPI/model/AddressRequest}
     */
    getObjAddress() {
        return this.objAddress;
    }

    /**
     * @param {module:eZmaxAPI/model/AddressRequest} objAddress
     */
    setObjAddress(objAddress) {
        this['objAddress'] = objAddress;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/ContactRequestCompound>}
     */
    getAObjContact() {
        return this.a_objContact;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ContactRequestCompound>} a_objContact
     */
    setAObjContact(a_objContact) {
        this['a_objContact'] = a_objContact;
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
 * @member {module:eZmaxAPI/model/AddressRequest} objAddress
 */
FranchisereferalincomeRequestCompound.prototype['objAddress'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/ContactRequestCompound>} a_objContact
 */
FranchisereferalincomeRequestCompound.prototype['a_objContact'] = undefined;

/**
 * The unique ID of the Franchisebroker
 * @member {Number} fkiFranchisebrokerID
 */
FranchisereferalincomeRequestCompound.prototype['fkiFranchisebrokerID'] = undefined;

/**
 * The unique ID of the Franchisereferalincomeprogram
 * @member {Number} fkiFranchisereferalincomeprogramID
 */
FranchisereferalincomeRequestCompound.prototype['fkiFranchisereferalincomeprogramID'] = undefined;

/**
 * The unique ID of the Period
 * @member {Number} fkiPeriodID
 */
FranchisereferalincomeRequestCompound.prototype['fkiPeriodID'] = undefined;

/**
 * The loan amount
 * @member {String} dFranchisereferalincomeLoan
 */
FranchisereferalincomeRequestCompound.prototype['dFranchisereferalincomeLoan'] = undefined;

/**
 * The amount that will be given to the franchise
 * @member {String} dFranchisereferalincomeFranchiseamount
 */
FranchisereferalincomeRequestCompound.prototype['dFranchisereferalincomeFranchiseamount'] = undefined;

/**
 * The amount that will be kept by the franchisor
 * @member {String} dFranchisereferalincomeFranchisoramount
 */
FranchisereferalincomeRequestCompound.prototype['dFranchisereferalincomeFranchisoramount'] = undefined;

/**
 * The amount that will be given to the agent
 * @member {String} dFranchisereferalincomeAgentamount
 */
FranchisereferalincomeRequestCompound.prototype['dFranchisereferalincomeAgentamount'] = undefined;

/**
 * The date the amounts were disbursed
 * @member {String} dtFranchisereferalincomeDisbursed
 */
FranchisereferalincomeRequestCompound.prototype['dtFranchisereferalincomeDisbursed'] = undefined;

/**
 * A comment about the transaction
 * @member {String} tFranchisereferalincomeComment
 */
FranchisereferalincomeRequestCompound.prototype['tFranchisereferalincomeComment'] = undefined;

/**
 * The unique ID of the Franchisereoffice
 * @member {Number} fkiFranchiseofficeID
 */
FranchisereferalincomeRequestCompound.prototype['fkiFranchiseofficeID'] = undefined;

/**
 * @member {String} sFranchisereferalincomeRemoteid
 */
FranchisereferalincomeRequestCompound.prototype['sFranchisereferalincomeRemoteid'] = undefined;


// Implement FranchisereferalincomeRequestCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/AddressRequest} objAddress
 */
FranchisereferalincomeRequestCompoundAllOf.prototype['objAddress'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/ContactRequestCompound>} a_objContact
 */
FranchisereferalincomeRequestCompoundAllOf.prototype['a_objContact'] = undefined;
// Implement FranchisereferalincomeRequest interface:
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




export default FranchisereferalincomeRequestCompound;

