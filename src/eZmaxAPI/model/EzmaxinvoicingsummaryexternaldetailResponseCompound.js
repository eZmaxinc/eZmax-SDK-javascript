/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzmaxinvoicingsummaryexternaldetailResponse from './EzmaxinvoicingsummaryexternaldetailResponse';

/**
 * The EzmaxinvoicingsummaryexternaldetailResponseCompound model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound
 * @version 1.1.12
 */
class EzmaxinvoicingsummaryexternaldetailResponseCompound {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryexternaldetailResponseCompound</code>.
     * A Ezmaxinvoicingsummaryexternaldetail Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound
     * @implements module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponse
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param sEzmaxproductDescriptionX {String} The description of the Ezmaxproduct in the language of the requester
     * @param dEzmaxinvoicingsummaryexternaldetailCountreal {String} The count item invoiced for the product
     * @param dEzmaxinvoicingsummaryexternaldetailSubtotal {String} The subtotal invoiced for the product
     * @param dEzmaxinvoicingsummaryexternaldetailRebate {String} The rebate for the product
     * @param dEzmaxinvoicingsummaryexternaldetailTotal {String} The total invoiced for the product
     * @param bEzmaxinvoicingsummaryexternaldetailAdjustment {Boolean} Whether it's an adjustment
     */
    constructor(fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment) { 
        EzmaxinvoicingsummaryexternaldetailResponse.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment);
        EzmaxinvoicingsummaryexternaldetailResponseCompound.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment) { 
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
        obj['dEzmaxinvoicingsummaryexternaldetailCountreal'] = dEzmaxinvoicingsummaryexternaldetailCountreal;
        obj['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = dEzmaxinvoicingsummaryexternaldetailSubtotal;
        obj['dEzmaxinvoicingsummaryexternaldetailRebate'] = dEzmaxinvoicingsummaryexternaldetailRebate;
        obj['dEzmaxinvoicingsummaryexternaldetailTotal'] = dEzmaxinvoicingsummaryexternaldetailTotal;
        obj['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = bEzmaxinvoicingsummaryexternaldetailAdjustment;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryexternaldetailResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponseCompound} The populated <code>EzmaxinvoicingsummaryexternaldetailResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryexternaldetailResponseCompound();
            EzmaxinvoicingsummaryexternaldetailResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzmaxinvoicingsummaryexternaldetailID')) {
                obj['pkiEzmaxinvoicingsummaryexternaldetailID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingsummaryexternaldetailID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingsummaryexternalID')) {
                obj['fkiEzmaxinvoicingsummaryexternalID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingsummaryexternalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxproductID')) {
                obj['fkiEzmaxproductID'] = ApiClient.convertToType(data['fkiEzmaxproductID'], 'Number');
            }
            if (data.hasOwnProperty('sEzmaxproductDescriptionX')) {
                obj['sEzmaxproductDescriptionX'] = ApiClient.convertToType(data['sEzmaxproductDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryexternaldetailCountreal')) {
                obj['dEzmaxinvoicingsummaryexternaldetailCountreal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryexternaldetailCountreal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryexternaldetailSubtotal')) {
                obj['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryexternaldetailSubtotal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryexternaldetailRebate')) {
                obj['dEzmaxinvoicingsummaryexternaldetailRebate'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryexternaldetailRebate'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryexternaldetailTotal')) {
                obj['dEzmaxinvoicingsummaryexternaldetailTotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryexternaldetailTotal'], 'String');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingsummaryexternaldetailAdjustment')) {
                obj['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = ApiClient.convertToType(data['bEzmaxinvoicingsummaryexternaldetailAdjustment'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryexternaldetail
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingsummaryexternaldetailID() {
        return this.pkiEzmaxinvoicingsummaryexternaldetailID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryexternaldetail
     * @param {Number} pkiEzmaxinvoicingsummaryexternaldetailID The unique ID of the Ezmaxinvoicingsummaryexternaldetail
     */
    setPkiEzmaxinvoicingsummaryexternaldetailID(pkiEzmaxinvoicingsummaryexternaldetailID) {
        this['pkiEzmaxinvoicingsummaryexternaldetailID'] = pkiEzmaxinvoicingsummaryexternaldetailID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryexternal
     * minimum: 0
     * @return {Number}
     */
    getFkiEzmaxinvoicingsummaryexternalID() {
        return this.fkiEzmaxinvoicingsummaryexternalID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryexternal
     * @param {Number} fkiEzmaxinvoicingsummaryexternalID The unique ID of the Ezmaxinvoicingsummaryexternal
     */
    setFkiEzmaxinvoicingsummaryexternalID(fkiEzmaxinvoicingsummaryexternalID) {
        this['fkiEzmaxinvoicingsummaryexternalID'] = fkiEzmaxinvoicingsummaryexternalID;
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
     * Returns The count item invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryexternaldetailCountreal() {
        return this.dEzmaxinvoicingsummaryexternaldetailCountreal;
    }

    /**
     * Sets The count item invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryexternaldetailCountreal The count item invoiced for the product
     */
    setDEzmaxinvoicingsummaryexternaldetailCountreal(dEzmaxinvoicingsummaryexternaldetailCountreal) {
        this['dEzmaxinvoicingsummaryexternaldetailCountreal'] = dEzmaxinvoicingsummaryexternaldetailCountreal;
    }
/**
     * Returns The subtotal invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryexternaldetailSubtotal() {
        return this.dEzmaxinvoicingsummaryexternaldetailSubtotal;
    }

    /**
     * Sets The subtotal invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryexternaldetailSubtotal The subtotal invoiced for the product
     */
    setDEzmaxinvoicingsummaryexternaldetailSubtotal(dEzmaxinvoicingsummaryexternaldetailSubtotal) {
        this['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = dEzmaxinvoicingsummaryexternaldetailSubtotal;
    }
/**
     * Returns The rebate for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryexternaldetailRebate() {
        return this.dEzmaxinvoicingsummaryexternaldetailRebate;
    }

    /**
     * Sets The rebate for the product
     * @param {String} dEzmaxinvoicingsummaryexternaldetailRebate The rebate for the product
     */
    setDEzmaxinvoicingsummaryexternaldetailRebate(dEzmaxinvoicingsummaryexternaldetailRebate) {
        this['dEzmaxinvoicingsummaryexternaldetailRebate'] = dEzmaxinvoicingsummaryexternaldetailRebate;
    }
/**
     * Returns The total invoiced for the product
     * @return {String}
     */
    getDEzmaxinvoicingsummaryexternaldetailTotal() {
        return this.dEzmaxinvoicingsummaryexternaldetailTotal;
    }

    /**
     * Sets The total invoiced for the product
     * @param {String} dEzmaxinvoicingsummaryexternaldetailTotal The total invoiced for the product
     */
    setDEzmaxinvoicingsummaryexternaldetailTotal(dEzmaxinvoicingsummaryexternaldetailTotal) {
        this['dEzmaxinvoicingsummaryexternaldetailTotal'] = dEzmaxinvoicingsummaryexternaldetailTotal;
    }
/**
     * Returns Whether it's an adjustment
     * @return {Boolean}
     */
    getBEzmaxinvoicingsummaryexternaldetailAdjustment() {
        return this.bEzmaxinvoicingsummaryexternaldetailAdjustment;
    }

    /**
     * Sets Whether it's an adjustment
     * @param {Boolean} bEzmaxinvoicingsummaryexternaldetailAdjustment Whether it's an adjustment
     */
    setBEzmaxinvoicingsummaryexternaldetailAdjustment(bEzmaxinvoicingsummaryexternaldetailAdjustment) {
        this['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = bEzmaxinvoicingsummaryexternaldetailAdjustment;
    }

}

/**
 * The unique ID of the Ezmaxinvoicingsummaryexternaldetail
 * @member {Number} pkiEzmaxinvoicingsummaryexternaldetailID
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['pkiEzmaxinvoicingsummaryexternaldetailID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicingsummaryexternal
 * @member {Number} fkiEzmaxinvoicingsummaryexternalID
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['fkiEzmaxinvoicingsummaryexternalID'] = undefined;

/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['fkiEzmaxproductID'] = undefined;

/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['sEzmaxproductDescriptionX'] = undefined;

/**
 * The count item invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailCountreal
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryexternaldetailCountreal'] = undefined;

/**
 * The subtotal invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailSubtotal
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = undefined;

/**
 * The rebate for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailRebate
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryexternaldetailRebate'] = undefined;

/**
 * The total invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailTotal
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['dEzmaxinvoicingsummaryexternaldetailTotal'] = undefined;

/**
 * Whether it's an adjustment
 * @member {Boolean} bEzmaxinvoicingsummaryexternaldetailAdjustment
 */
EzmaxinvoicingsummaryexternaldetailResponseCompound.prototype['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = undefined;


// Implement EzmaxinvoicingsummaryexternaldetailResponse interface:
/**
 * The unique ID of the Ezmaxinvoicingsummaryexternaldetail
 * @member {Number} pkiEzmaxinvoicingsummaryexternaldetailID
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['pkiEzmaxinvoicingsummaryexternaldetailID'] = undefined;
/**
 * The unique ID of the Ezmaxinvoicingsummaryexternal
 * @member {Number} fkiEzmaxinvoicingsummaryexternalID
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['fkiEzmaxinvoicingsummaryexternalID'] = undefined;
/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['fkiEzmaxproductID'] = undefined;
/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['sEzmaxproductDescriptionX'] = undefined;
/**
 * The count item invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailCountreal
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['dEzmaxinvoicingsummaryexternaldetailCountreal'] = undefined;
/**
 * The subtotal invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailSubtotal
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = undefined;
/**
 * The rebate for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailRebate
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['dEzmaxinvoicingsummaryexternaldetailRebate'] = undefined;
/**
 * The total invoiced for the product
 * @member {String} dEzmaxinvoicingsummaryexternaldetailTotal
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['dEzmaxinvoicingsummaryexternaldetailTotal'] = undefined;
/**
 * Whether it's an adjustment
 * @member {Boolean} bEzmaxinvoicingsummaryexternaldetailAdjustment
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = undefined;




export default EzmaxinvoicingsummaryexternaldetailResponseCompound;

