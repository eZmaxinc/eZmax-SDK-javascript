/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzmaxinvoicinguserVariationezsign from './FieldEEzmaxinvoicinguserVariationezsign';

/**
 * The EzmaxinvoicinguserResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicinguserResponse
 * @version 1.1.11
 */
class EzmaxinvoicinguserResponse {
    /**
     * Constructs a new <code>EzmaxinvoicinguserResponse</code>.
     * A Ezmaxinvoicinguser Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicinguserResponse
     * @param fkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param sBillingentityinternalDescriptionX {String} The description of the Billingentityinternal in the language of the requester
     * @param fkiUserID {Number} The unique ID of the User
     * @param iEzmaxinvoicinguserEzsigndocument {Number} The number of ezsign documents
     * @param bEzmaxinvoicinguserEzsignaccount {Boolean} Whether there is an eZsign account
     * @param bEzmaxinvoicinguserBillableezsign {Boolean} Whether it is billable for eZsign
     * @param eEzmaxinvoicinguserVariationezsign {module:eZmaxAPI/model/FieldEEzmaxinvoicinguserVariationezsign} 
     */
    constructor(fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiUserID, iEzmaxinvoicinguserEzsigndocument, bEzmaxinvoicinguserEzsignaccount, bEzmaxinvoicinguserBillableezsign, eEzmaxinvoicinguserVariationezsign) { 
        
        EzmaxinvoicinguserResponse.initialize(this, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiUserID, iEzmaxinvoicinguserEzsigndocument, bEzmaxinvoicinguserEzsignaccount, bEzmaxinvoicinguserBillableezsign, eEzmaxinvoicinguserVariationezsign);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiUserID, iEzmaxinvoicinguserEzsigndocument, bEzmaxinvoicinguserEzsignaccount, bEzmaxinvoicinguserBillableezsign, eEzmaxinvoicinguserVariationezsign) { 
        obj['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
        obj['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
        obj['fkiUserID'] = fkiUserID;
        obj['iEzmaxinvoicinguserEzsigndocument'] = iEzmaxinvoicinguserEzsigndocument;
        obj['bEzmaxinvoicinguserEzsignaccount'] = bEzmaxinvoicinguserEzsignaccount;
        obj['bEzmaxinvoicinguserBillableezsign'] = bEzmaxinvoicinguserBillableezsign;
        obj['eEzmaxinvoicinguserVariationezsign'] = eEzmaxinvoicinguserVariationezsign;
    }

    /**
     * Constructs a <code>EzmaxinvoicinguserResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicinguserResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicinguserResponse} The populated <code>EzmaxinvoicinguserResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicinguserResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicinguserID')) {
                obj['pkiEzmaxinvoicinguserID'] = ApiClient.convertToType(data['pkiEzmaxinvoicinguserID'], 'Number');
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
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('iEzmaxinvoicinguserEzsigndocument')) {
                obj['iEzmaxinvoicinguserEzsigndocument'] = ApiClient.convertToType(data['iEzmaxinvoicinguserEzsigndocument'], 'Number');
            }
            if (data.hasOwnProperty('bEzmaxinvoicinguserEzsignaccount')) {
                obj['bEzmaxinvoicinguserEzsignaccount'] = ApiClient.convertToType(data['bEzmaxinvoicinguserEzsignaccount'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzmaxinvoicinguserBillableezsign')) {
                obj['bEzmaxinvoicinguserBillableezsign'] = ApiClient.convertToType(data['bEzmaxinvoicinguserBillableezsign'], 'Boolean');
            }
            if (data.hasOwnProperty('eEzmaxinvoicinguserVariationezsign')) {
                obj['eEzmaxinvoicinguserVariationezsign'] = FieldEEzmaxinvoicinguserVariationezsign.constructFromObject(data['eEzmaxinvoicinguserVariationezsign']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicinguser
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicinguserID() {
        return this.pkiEzmaxinvoicinguserID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicinguser
     * @param {Number} pkiEzmaxinvoicinguserID The unique ID of the Ezmaxinvoicinguser
     */
    setPkiEzmaxinvoicinguserID(pkiEzmaxinvoicinguserID) {
        this['pkiEzmaxinvoicinguserID'] = pkiEzmaxinvoicinguserID;
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
     * Returns The unique ID of the User
     * minimum: 0
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
     * Returns The number of ezsign documents
     * minimum: 0
     * @return {Number}
     */
    getIEzmaxinvoicinguserEzsigndocument() {
        return this.iEzmaxinvoicinguserEzsigndocument;
    }

    /**
     * Sets The number of ezsign documents
     * @param {Number} iEzmaxinvoicinguserEzsigndocument The number of ezsign documents
     */
    setIEzmaxinvoicinguserEzsigndocument(iEzmaxinvoicinguserEzsigndocument) {
        this['iEzmaxinvoicinguserEzsigndocument'] = iEzmaxinvoicinguserEzsigndocument;
    }
/**
     * Returns Whether there is an eZsign account
     * @return {Boolean}
     */
    getBEzmaxinvoicinguserEzsignaccount() {
        return this.bEzmaxinvoicinguserEzsignaccount;
    }

    /**
     * Sets Whether there is an eZsign account
     * @param {Boolean} bEzmaxinvoicinguserEzsignaccount Whether there is an eZsign account
     */
    setBEzmaxinvoicinguserEzsignaccount(bEzmaxinvoicinguserEzsignaccount) {
        this['bEzmaxinvoicinguserEzsignaccount'] = bEzmaxinvoicinguserEzsignaccount;
    }
/**
     * Returns Whether it is billable for eZsign
     * @return {Boolean}
     */
    getBEzmaxinvoicinguserBillableezsign() {
        return this.bEzmaxinvoicinguserBillableezsign;
    }

    /**
     * Sets Whether it is billable for eZsign
     * @param {Boolean} bEzmaxinvoicinguserBillableezsign Whether it is billable for eZsign
     */
    setBEzmaxinvoicinguserBillableezsign(bEzmaxinvoicinguserBillableezsign) {
        this['bEzmaxinvoicinguserBillableezsign'] = bEzmaxinvoicinguserBillableezsign;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzmaxinvoicinguserVariationezsign}
     */
    getEEzmaxinvoicinguserVariationezsign() {
        return this.eEzmaxinvoicinguserVariationezsign;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzmaxinvoicinguserVariationezsign} eEzmaxinvoicinguserVariationezsign
     */
    setEEzmaxinvoicinguserVariationezsign(eEzmaxinvoicinguserVariationezsign) {
        this['eEzmaxinvoicinguserVariationezsign'] = eEzmaxinvoicinguserVariationezsign;
    }

}

/**
 * The unique ID of the Ezmaxinvoicinguser
 * @member {Number} pkiEzmaxinvoicinguserID
 */
EzmaxinvoicinguserResponse.prototype['pkiEzmaxinvoicinguserID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} fkiEzmaxinvoicingID
 */
EzmaxinvoicinguserResponse.prototype['fkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
EzmaxinvoicinguserResponse.prototype['fkiBillingentityinternalID'] = undefined;

/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
EzmaxinvoicinguserResponse.prototype['sBillingentityinternalDescriptionX'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzmaxinvoicinguserResponse.prototype['fkiUserID'] = undefined;

/**
 * The number of ezsign documents
 * @member {Number} iEzmaxinvoicinguserEzsigndocument
 */
EzmaxinvoicinguserResponse.prototype['iEzmaxinvoicinguserEzsigndocument'] = undefined;

/**
 * Whether there is an eZsign account
 * @member {Boolean} bEzmaxinvoicinguserEzsignaccount
 */
EzmaxinvoicinguserResponse.prototype['bEzmaxinvoicinguserEzsignaccount'] = undefined;

/**
 * Whether it is billable for eZsign
 * @member {Boolean} bEzmaxinvoicinguserBillableezsign
 */
EzmaxinvoicinguserResponse.prototype['bEzmaxinvoicinguserBillableezsign'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzmaxinvoicinguserVariationezsign} eEzmaxinvoicinguserVariationezsign
 */
EzmaxinvoicinguserResponse.prototype['eEzmaxinvoicinguserVariationezsign'] = undefined;






export default EzmaxinvoicinguserResponse;

