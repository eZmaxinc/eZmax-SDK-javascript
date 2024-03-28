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

/**
 * The EzmaxinvoicingsummaryexternaldetailResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponse
 * @version 1.2.0
 */
class EzmaxinvoicingsummaryexternaldetailResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryexternaldetailResponse</code>.
     * A Ezmaxinvoicingsummaryexternaldetail Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponse
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param sEzmaxproductDescriptionX {String} The description of the Ezmaxproduct in the language of the requester
     * @param dEzmaxinvoicingsummaryexternaldetailCountreal {String} The count item invoiced for the product
     * @param dEzmaxinvoicingsummaryexternaldetailSubtotal {String} The subtotal invoiced for the product
     * @param dEzmaxinvoicingsummaryexternaldetailRebate {String} The rebate for the product
     * @param dEzmaxinvoicingsummaryexternaldetailTotal {String} The total invoiced for the product
     * @param bEzmaxinvoicingsummaryexternaldetailAdjustment {Boolean} Whether it's an adjustment
     * @param tEzmaxproductHelpX {String} The help message of the Ezmaxproduct in the language of the requester
     */
    constructor(fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment, tEzmaxproductHelpX) { 
        
        EzmaxinvoicingsummaryexternaldetailResponse.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment, tEzmaxproductHelpX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxproductID, sEzmaxproductDescriptionX, dEzmaxinvoicingsummaryexternaldetailCountreal, dEzmaxinvoicingsummaryexternaldetailSubtotal, dEzmaxinvoicingsummaryexternaldetailRebate, dEzmaxinvoicingsummaryexternaldetailTotal, bEzmaxinvoicingsummaryexternaldetailAdjustment, tEzmaxproductHelpX) { 
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
        obj['dEzmaxinvoicingsummaryexternaldetailCountreal'] = dEzmaxinvoicingsummaryexternaldetailCountreal;
        obj['dEzmaxinvoicingsummaryexternaldetailSubtotal'] = dEzmaxinvoicingsummaryexternaldetailSubtotal;
        obj['dEzmaxinvoicingsummaryexternaldetailRebate'] = dEzmaxinvoicingsummaryexternaldetailRebate;
        obj['dEzmaxinvoicingsummaryexternaldetailTotal'] = dEzmaxinvoicingsummaryexternaldetailTotal;
        obj['bEzmaxinvoicingsummaryexternaldetailAdjustment'] = bEzmaxinvoicingsummaryexternaldetailAdjustment;
        obj['tEzmaxproductHelpX'] = tEzmaxproductHelpX;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryexternaldetailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternaldetailResponse} The populated <code>EzmaxinvoicingsummaryexternaldetailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryexternaldetailResponse();

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
            if (data.hasOwnProperty('tEzmaxproductHelpX')) {
                obj['tEzmaxproductHelpX'] = ApiClient.convertToType(data['tEzmaxproductHelpX'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingsummaryexternaldetailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingsummaryexternaldetailResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingsummaryexternaldetailResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzmaxproductDescriptionX'] && !(typeof data['sEzmaxproductDescriptionX'] === 'string' || data['sEzmaxproductDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sEzmaxproductDescriptionX` to be a primitive type in the JSON string but got " + data['sEzmaxproductDescriptionX']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingsummaryexternaldetailCountreal'] && !(typeof data['dEzmaxinvoicingsummaryexternaldetailCountreal'] === 'string' || data['dEzmaxinvoicingsummaryexternaldetailCountreal'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingsummaryexternaldetailCountreal` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingsummaryexternaldetailCountreal']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingsummaryexternaldetailSubtotal'] && !(typeof data['dEzmaxinvoicingsummaryexternaldetailSubtotal'] === 'string' || data['dEzmaxinvoicingsummaryexternaldetailSubtotal'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingsummaryexternaldetailSubtotal` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingsummaryexternaldetailSubtotal']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingsummaryexternaldetailRebate'] && !(typeof data['dEzmaxinvoicingsummaryexternaldetailRebate'] === 'string' || data['dEzmaxinvoicingsummaryexternaldetailRebate'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingsummaryexternaldetailRebate` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingsummaryexternaldetailRebate']);
        }
        // ensure the json data is a string
        if (data['dEzmaxinvoicingsummaryexternaldetailTotal'] && !(typeof data['dEzmaxinvoicingsummaryexternaldetailTotal'] === 'string' || data['dEzmaxinvoicingsummaryexternaldetailTotal'] instanceof String)) {
            throw new Error("Expected the field `dEzmaxinvoicingsummaryexternaldetailTotal` to be a primitive type in the JSON string but got " + data['dEzmaxinvoicingsummaryexternaldetailTotal']);
        }
        // ensure the json data is a string
        if (data['tEzmaxproductHelpX'] && !(typeof data['tEzmaxproductHelpX'] === 'string' || data['tEzmaxproductHelpX'] instanceof String)) {
            throw new Error("Expected the field `tEzmaxproductHelpX` to be a primitive type in the JSON string but got " + data['tEzmaxproductHelpX']);
        }

        return true;
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
/**
     * Returns The help message of the Ezmaxproduct in the language of the requester
     * @return {String}
     */
    getTEzmaxproductHelpX() {
        return this.tEzmaxproductHelpX;
    }

    /**
     * Sets The help message of the Ezmaxproduct in the language of the requester
     * @param {String} tEzmaxproductHelpX The help message of the Ezmaxproduct in the language of the requester
     */
    setTEzmaxproductHelpX(tEzmaxproductHelpX) {
        this['tEzmaxproductHelpX'] = tEzmaxproductHelpX;
    }

}

EzmaxinvoicingsummaryexternaldetailResponse.RequiredProperties = ["fkiEzmaxproductID", "sEzmaxproductDescriptionX", "dEzmaxinvoicingsummaryexternaldetailCountreal", "dEzmaxinvoicingsummaryexternaldetailSubtotal", "dEzmaxinvoicingsummaryexternaldetailRebate", "dEzmaxinvoicingsummaryexternaldetailTotal", "bEzmaxinvoicingsummaryexternaldetailAdjustment", "tEzmaxproductHelpX"];

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

/**
 * The help message of the Ezmaxproduct in the language of the requester
 * @member {String} tEzmaxproductHelpX
 */
EzmaxinvoicingsummaryexternaldetailResponse.prototype['tEzmaxproductHelpX'] = undefined;






export default EzmaxinvoicingsummaryexternaldetailResponse;

