/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzmaxinvoicingsummaryinternaldetailResponse from './EzmaxinvoicingsummaryinternaldetailResponse';

/**
 * The EzmaxinvoicingsummaryinternaldetailResponseCompound model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound
 * @version 1.1.14
 */
class EzmaxinvoicingsummaryinternaldetailResponseCompound {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryinternaldetailResponseCompound</code>.
     * A Ezmaxinvoicingsummaryinternaldetail Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound
     * @implements module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponse
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param sEzmaxproductDescriptionX {String} The description of the Ezmaxproduct in the language of the requester
     * @param fkiBillingentityexternalID {Number} The unique ID of the Billingentityexternal
     * @param sBillingentityexternalDescription {String} The description of the Billingentityexternal
     * @param dEzmaxinvoicingsummaryinternaldetailCountreal {String} The count item invoiced for the product
     * @param dEzmaxinvoicingsummaryinternaldetailSubtotal {String} The subtotal invoiced for the product
     * @param dEzmaxinvoicingsummaryinternaldetailRebate {String} The rebate for the product
     * @param dEzmaxinvoicingsummaryinternaldetailTotal {String} The total invoiced for the product
     * @param bEzmaxinvoicingsummaryinternaldetailAdjustment {Boolean} Whether if it's an adjustment
     */
    constructor(fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription, dEzmaxinvoicingsummaryinternaldetailCountreal, dEzmaxinvoicingsummaryinternaldetailSubtotal, dEzmaxinvoicingsummaryinternaldetailRebate, dEzmaxinvoicingsummaryinternaldetailTotal, bEzmaxinvoicingsummaryinternaldetailAdjustment) { 
        EzmaxinvoicingsummaryinternaldetailResponse.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription, dEzmaxinvoicingsummaryinternaldetailCountreal, dEzmaxinvoicingsummaryinternaldetailSubtotal, dEzmaxinvoicingsummaryinternaldetailRebate, dEzmaxinvoicingsummaryinternaldetailTotal, bEzmaxinvoicingsummaryinternaldetailAdjustment);
        EzmaxinvoicingsummaryinternaldetailResponseCompound.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription, dEzmaxinvoicingsummaryinternaldetailCountreal, dEzmaxinvoicingsummaryinternaldetailSubtotal, dEzmaxinvoicingsummaryinternaldetailRebate, dEzmaxinvoicingsummaryinternaldetailTotal, bEzmaxinvoicingsummaryinternaldetailAdjustment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription, dEzmaxinvoicingsummaryinternaldetailCountreal, dEzmaxinvoicingsummaryinternaldetailSubtotal, dEzmaxinvoicingsummaryinternaldetailRebate, dEzmaxinvoicingsummaryinternaldetailTotal, bEzmaxinvoicingsummaryinternaldetailAdjustment) { 
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
        obj['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
        obj['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
        obj['dEzmaxinvoicingsummaryinternaldetailCountreal'] = dEzmaxinvoicingsummaryinternaldetailCountreal;
        obj['dEzmaxinvoicingsummaryinternaldetailSubtotal'] = dEzmaxinvoicingsummaryinternaldetailSubtotal;
        obj['dEzmaxinvoicingsummaryinternaldetailRebate'] = dEzmaxinvoicingsummaryinternaldetailRebate;
        obj['dEzmaxinvoicingsummaryinternaldetailTotal'] = dEzmaxinvoicingsummaryinternaldetailTotal;
        obj['bEzmaxinvoicingsummaryinternaldetailAdjustment'] = bEzmaxinvoicingsummaryinternaldetailAdjustment;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryinternaldetailResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryinternaldetailResponseCompound} The populated <code>EzmaxinvoicingsummaryinternaldetailResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryinternaldetailResponseCompound();
            EzmaxinvoicingsummaryinternaldetailResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzmaxinvoicingsummaryinternaldetailID')) {
                obj['pkiEzmaxinvoicingsummaryinternaldetailID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingsummaryinternaldetailID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingsummaryinternalID')) {
                obj['fkiEzmaxinvoicingsummaryinternalID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingsummaryinternalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxproductID')) {
                obj['fkiEzmaxproductID'] = ApiClient.convertToType(data['fkiEzmaxproductID'], 'Number');
            }
            if (data.hasOwnProperty('sEzmaxproductDescriptionX')) {
                obj['sEzmaxproductDescriptionX'] = ApiClient.convertToType(data['sEzmaxproductDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('fkiBillingentityexternalID')) {
                obj['fkiBillingentityexternalID'] = ApiClient.convertToType(data['fkiBillingentityexternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityexternalDescription')) {
                obj['sBillingentityexternalDescription'] = ApiClient.convertToType(data['sBillingentityexternalDescription'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryinternaldetailCountreal')) {
                obj['dEzmaxinvoicingsummaryinternaldetailCountreal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryinternaldetailCountreal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryinternaldetailSubtotal')) {
                obj['dEzmaxinvoicingsummaryinternaldetailSubtotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryinternaldetailSubtotal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryinternaldetailRebate')) {
                obj['dEzmaxinvoicingsummaryinternaldetailRebate'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryinternaldetailRebate'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryinternaldetailTotal')) {
                obj['dEzmaxinvoicingsummaryinternaldetailTotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryinternaldetailTotal'], 'String');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingsummaryinternaldetailAdjustment')) {
                obj['bEzmaxinvoicingsummaryinternaldetailAdjustment'] = ApiClient.convertToType(data['bEzmaxinvoicingsummaryinternaldetailAdjustment'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryinternaldetail
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingsummaryinternaldetailID() {
        return this.pkiEzmaxinvoicingsummaryinternaldetailID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryinternaldetail
     * @param {Number} pkiEzmaxinvoicingsummaryinternaldetailID The unique ID of the Ezmaxinvoicingsummaryinternaldetail
     */
    setPkiEzmaxinvoicingsummaryinternaldetailID(pkiEzmaxinvoicingsummaryinternaldetailID) {
        this['pkiEzmaxinvoicingsummaryinternaldetailID'] = pkiEzmaxinvoicingsummaryinternaldetailID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryinternal
     * minimum: 0
     * @return {Number}
     */
    getFkiEzmaxinvoicingsummaryinternalID() {
        return this.fkiEzmaxinvoicingsummaryinternalID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryinternal
     * @param {Number} fkiEzmaxinvoicingsummaryinternalID The unique ID of the Ezmaxinvoicingsummaryinternal
     */
    setFkiEzmaxinvoicingsummaryinternalID(fkiEzmaxinvoicingsummaryinternalID) {
        this['fkiEzmaxinvoicingsummaryinternalID'] = fkiEzmaxinvoicingsummaryinternalID;
    }
/**
     * Returns The unique ID of the Ezmaxproduct
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxproductID() {
        return this.fkiEzmaxproductID;
    }

    /**
     * Sets The unique ID of the Ezmaxproduct
     * @param {Number} fkiEzmaxproductID The unique ID of the Ezmaxproduct
     */
    setFkiEzmaxproductID(fkiEzmaxproductID) {
        this['fkiEzmaxproductID'] = fkiEzmaxproductID;
    }
/**
     * Returns The description of the Ezmaxproduct in the language of the requester
     * @return {String}
     */
    getSEzmaxproductDescriptionX() {
        return this.sEzmaxproductDescriptionX;
    }

    /**
     * Sets The description of the Ezmaxproduct in the language of the requester
     * @param {String} sEzmaxproductDescriptionX The description of the Ezmaxproduct in the language of the requester
     */
    setSEzmaxproductDescriptionX(sEzmaxproductDescriptionX) {
        this['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
    }
/**
     * Returns The unique ID of the Billingentityexternal
     * minimum: 1
     * @return {Number}
     */
    getFkiBillingentityexternalID() {
        return this.fkiBillingentityexternalID;
    }

    /**
     * Sets The unique ID of the Billingentityexternal
     * @param {Number} fkiBillingentityexternalID The unique ID of the Billingentityexternal
     */
    setFkiBillingentityexternalID(fkiBillingentityexternalID) {
        this['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
    }
/**
     * Returns The description of the Billingentityexternal
     * @return {String}
     */
    getSBillingentityexternalDescription() {
        return this.sBillingentityexternalDescription;
    }

    /**
     * Sets The description of the Billingentityexternal
     * @param {String} sBillingentityexternalDescription The description of the Billingentityexternal
     */
    setSBillingentityexternalDescription(sBillingentityexternalDescription) {
        this['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
    }
/**
     * Returns The count item invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryinternaldetailCountreal() {
        return this.dEzmaxinvoicingsummaryinternaldetailCountreal;
    }

    /**
     * Sets The count item invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryinternaldetailCountreal The count item invoiced for the product
     */
    setDEzmaxinvoicingsummaryinternaldetailCountreal(dEzmaxinvoicingsummaryinternaldetailCountreal) {
        this['dEzmaxinvoicingsummaryinternaldetailCountreal'] = dEzmaxinvoicingsummaryinternaldetailCountreal;
    }
/**
     * Returns The subtotal invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryinternaldetailSubtotal() {
        return this.dEzmaxinvoicingsummaryinternaldetailSubtotal;
    }

    /**
     * Sets The subtotal invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryinternaldetailSubtotal The subtotal invoiced for the product
     */
    setDEzmaxinvoicingsummaryinternaldetailSubtotal(dEzmaxinvoicingsummaryinternaldetailSubtotal) {
        this['dEzmaxinvoicingsummaryinternaldetailSubtotal'] = dEzmaxinvoicingsummaryinternaldetailSubtotal;
    }
/**
     * Returns The rebate for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryinternaldetailRebate() {
        return this.dEzmaxinvoicingsummaryinternaldetailRebate;
    }

    /**
     * Sets The rebate for the product
     * @param {String} dEzmaxinvoicingsummaryinternaldetailRebate The rebate for the product
     */
    setDEzmaxinvoicingsummaryinternaldetailRebate(dEzmaxinvoicingsummaryinternaldetailRebate) {
        this['dEzmaxinvoicingsummaryinternaldetailRebate'] = dEzmaxinvoicingsummaryinternaldetailRebate;
    }
/**
     * Returns The total invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryinternaldetailTotal() {
        return this.dEzmaxinvoicingsummaryinternaldetailTotal;
    }

    /**
     * Sets The total invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryinternaldetailTotal The total invoiced for the product
     */
    setDEzmaxinvoicingsummaryinternaldetailTotal(dEzmaxinvoicingsummaryinternaldetailTotal) {
        this['dEzmaxinvoicingsummaryinternaldetailTotal'] = dEzmaxinvoicingsummaryinternaldetailTotal;
    }
/**
     * Returns Whether if it's an adjustment
     * @return {Boolean}
     */
    getBEzmaxinvoicingsummaryinternaldetailAdjustment() {
        return this.bEzmaxinvoicingsummaryinternaldetailAdjustment;
    }

    /**
     * Sets Whether if it's an adjustment
     * @param {Boolean} bEzmaxinvoicingsummaryinternaldetailAdjustment Whether if it's an adjustment
     */
    setBEzmaxinvoicingsummaryinternaldetailAdjustment(bEzmaxinvoicingsummaryinternaldetailAdjustment) {
        this['bEzmaxinvoicingsummaryinternaldetailAdjustment'] = bEzmaxinvoicingsummaryinternaldetailAdjustment;
    }

}

/**
 * The unique ID of the Ezmaxinvoicingsummaryinternaldetail
 * @member {Number} pkiEzmaxinvoicingsummaryinternaldetailID
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['pkiEzmaxinvoicingsummaryinternaldetailID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicingsummaryinternal
 * @member {Number} fkiEzmaxinvoicingsummaryinternalID
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['fkiEzmaxinvoicingsummaryinternalID'] = undefined;

/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['fkiEzmaxproductID'] = undefined;

/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['sEzmaxproductDescriptionX'] = undefined;

/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['fkiBillingentityexternalID'] = undefined;

/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['sBillingentityexternalDescription'] = undefined;

/**
 * The count item invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailCountreal
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryinternaldetailCountreal'] = undefined;

/**
 * The subtotal invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailSubtotal
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryinternaldetailSubtotal'] = undefined;

/**
 * The rebate for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailRebate
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryinternaldetailRebate'] = undefined;

/**
 * The total invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailTotal
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryinternaldetailTotal'] = undefined;

/**
 * Whether if it's an adjustment
 * @member {Boolean} bEzmaxinvoicingsummaryinternaldetailAdjustment
 */
EzmaxinvoicingsummaryinternaldetailResponseCompound.prototype['bEzmaxinvoicingsummaryinternaldetailAdjustment'] = undefined;


// Implement EzmaxinvoicingsummaryinternaldetailResponse interface:
/**
 * The unique ID of the Ezmaxinvoicingsummaryinternaldetail
 * @member {Number} pkiEzmaxinvoicingsummaryinternaldetailID
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['pkiEzmaxinvoicingsummaryinternaldetailID'] = undefined;
/**
 * The unique ID of the Ezmaxinvoicingsummaryinternal
 * @member {Number} fkiEzmaxinvoicingsummaryinternalID
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['fkiEzmaxinvoicingsummaryinternalID'] = undefined;
/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['fkiEzmaxproductID'] = undefined;
/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['sEzmaxproductDescriptionX'] = undefined;
/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['fkiBillingentityexternalID'] = undefined;
/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['sBillingentityexternalDescription'] = undefined;
/**
 * The count item invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailCountreal
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['dEzmaxinvoicingsummaryinternaldetailCountreal'] = undefined;
/**
 * The subtotal invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailSubtotal
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['dEzmaxinvoicingsummaryinternaldetailSubtotal'] = undefined;
/**
 * The rebate for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailRebate
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['dEzmaxinvoicingsummaryinternaldetailRebate'] = undefined;
/**
 * The total invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryinternaldetailTotal
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['dEzmaxinvoicingsummaryinternaldetailTotal'] = undefined;
/**
 * Whether if it's an adjustment
 * @member {Boolean} bEzmaxinvoicingsummaryinternaldetailAdjustment
 */
EzmaxinvoicingsummaryinternaldetailResponse.prototype['bEzmaxinvoicingsummaryinternaldetailAdjustment'] = undefined;




export default EzmaxinvoicingsummaryinternaldetailResponseCompound;

