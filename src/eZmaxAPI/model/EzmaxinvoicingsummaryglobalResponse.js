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

/**
 * The EzmaxinvoicingsummaryglobalResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponse
 * @version 1.1.12
 */
class EzmaxinvoicingsummaryglobalResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryglobalResponse</code>.
     * A Ezmaxinvoicingsummaryglobal Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponse
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param sEzmaxproductDescriptionX {String} The description of the Ezmaxproduct in the language of the requester
     * @param dtEzmaxinvoicingsummaryglobalStart {String} The start date for the Ezmaxinvoicingsummaryglobal
     * @param dtEzmaxinvoicingsummaryglobalEnd {String} The end date for the Ezmaxinvoicingsummaryglobal
     * @param iEzmaxinvoicingsummaryglobalDays {Number} The number of days for the Ezmaxinvoicingsummaryglobal
     * @param dEzmaxinvoicingsummaryglobalCountreal {String} The The count item calculated
     * @param dEzmaxinvoicingsummaryglobalCountbilled {String} The The count item billed
     * @param dEzmaxinvoicingsummaryglobalSubtotal {String} The Ezmaxinvoicingsummaryglobal subtotal
     * @param dEzmaxinvoicingsummaryglobalRebateamount {String} The rebate amount for the Ezmaxinvoicingsummaryglobal
     * @param dEzmaxinvoicingsummaryglobalRebatepercent {String} The rebate percentage of the Ezmaxinvoicingsummaryglobal
     * @param dEzmaxinvoicingsummaryglobalRebatetotal {String} The rebate amount total for the Ezmaxinvoicingsummaryglobal
     * @param dEzmaxinvoicingsummaryglobalTotal {String} The Ezmaxinvoicingsummaryglobal total
     * @param bEzmaxinvoicingsummaryglobalAdjustment {Boolean} Whether it is adjustment for the Ezmaxinvoicingsummaryglobal
     */
    constructor(fkiEzmaxproductID, sEzmaxproductDescriptionX, dtEzmaxinvoicingsummaryglobalStart, dtEzmaxinvoicingsummaryglobalEnd, iEzmaxinvoicingsummaryglobalDays, dEzmaxinvoicingsummaryglobalCountreal, dEzmaxinvoicingsummaryglobalCountbilled, dEzmaxinvoicingsummaryglobalSubtotal, dEzmaxinvoicingsummaryglobalRebateamount, dEzmaxinvoicingsummaryglobalRebatepercent, dEzmaxinvoicingsummaryglobalRebatetotal, dEzmaxinvoicingsummaryglobalTotal, bEzmaxinvoicingsummaryglobalAdjustment) { 
        
        EzmaxinvoicingsummaryglobalResponse.initialize(this, fkiEzmaxproductID, sEzmaxproductDescriptionX, dtEzmaxinvoicingsummaryglobalStart, dtEzmaxinvoicingsummaryglobalEnd, iEzmaxinvoicingsummaryglobalDays, dEzmaxinvoicingsummaryglobalCountreal, dEzmaxinvoicingsummaryglobalCountbilled, dEzmaxinvoicingsummaryglobalSubtotal, dEzmaxinvoicingsummaryglobalRebateamount, dEzmaxinvoicingsummaryglobalRebatepercent, dEzmaxinvoicingsummaryglobalRebatetotal, dEzmaxinvoicingsummaryglobalTotal, bEzmaxinvoicingsummaryglobalAdjustment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxproductID, sEzmaxproductDescriptionX, dtEzmaxinvoicingsummaryglobalStart, dtEzmaxinvoicingsummaryglobalEnd, iEzmaxinvoicingsummaryglobalDays, dEzmaxinvoicingsummaryglobalCountreal, dEzmaxinvoicingsummaryglobalCountbilled, dEzmaxinvoicingsummaryglobalSubtotal, dEzmaxinvoicingsummaryglobalRebateamount, dEzmaxinvoicingsummaryglobalRebatepercent, dEzmaxinvoicingsummaryglobalRebatetotal, dEzmaxinvoicingsummaryglobalTotal, bEzmaxinvoicingsummaryglobalAdjustment) { 
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
        obj['dtEzmaxinvoicingsummaryglobalStart'] = dtEzmaxinvoicingsummaryglobalStart;
        obj['dtEzmaxinvoicingsummaryglobalEnd'] = dtEzmaxinvoicingsummaryglobalEnd;
        obj['iEzmaxinvoicingsummaryglobalDays'] = iEzmaxinvoicingsummaryglobalDays;
        obj['dEzmaxinvoicingsummaryglobalCountreal'] = dEzmaxinvoicingsummaryglobalCountreal;
        obj['dEzmaxinvoicingsummaryglobalCountbilled'] = dEzmaxinvoicingsummaryglobalCountbilled;
        obj['dEzmaxinvoicingsummaryglobalSubtotal'] = dEzmaxinvoicingsummaryglobalSubtotal;
        obj['dEzmaxinvoicingsummaryglobalRebateamount'] = dEzmaxinvoicingsummaryglobalRebateamount;
        obj['dEzmaxinvoicingsummaryglobalRebatepercent'] = dEzmaxinvoicingsummaryglobalRebatepercent;
        obj['dEzmaxinvoicingsummaryglobalRebatetotal'] = dEzmaxinvoicingsummaryglobalRebatetotal;
        obj['dEzmaxinvoicingsummaryglobalTotal'] = dEzmaxinvoicingsummaryglobalTotal;
        obj['bEzmaxinvoicingsummaryglobalAdjustment'] = bEzmaxinvoicingsummaryglobalAdjustment;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryglobalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryglobalResponse} The populated <code>EzmaxinvoicingsummaryglobalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryglobalResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicingsummaryglobalID')) {
                obj['pkiEzmaxinvoicingsummaryglobalID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingsummaryglobalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingID')) {
                obj['fkiEzmaxinvoicingID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxproductID')) {
                obj['fkiEzmaxproductID'] = ApiClient.convertToType(data['fkiEzmaxproductID'], 'Number');
            }
            if (data.hasOwnProperty('sEzmaxproductDescriptionX')) {
                obj['sEzmaxproductDescriptionX'] = ApiClient.convertToType(data['sEzmaxproductDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('dtEzmaxinvoicingsummaryglobalStart')) {
                obj['dtEzmaxinvoicingsummaryglobalStart'] = ApiClient.convertToType(data['dtEzmaxinvoicingsummaryglobalStart'], 'String');
            }
            if (data.hasOwnProperty('dtEzmaxinvoicingsummaryglobalEnd')) {
                obj['dtEzmaxinvoicingsummaryglobalEnd'] = ApiClient.convertToType(data['dtEzmaxinvoicingsummaryglobalEnd'], 'String');
            }
            if (data.hasOwnProperty('iEzmaxinvoicingsummaryglobalDays')) {
                obj['iEzmaxinvoicingsummaryglobalDays'] = ApiClient.convertToType(data['iEzmaxinvoicingsummaryglobalDays'], 'Number');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalCountreal')) {
                obj['dEzmaxinvoicingsummaryglobalCountreal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalCountreal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalCountbilled')) {
                obj['dEzmaxinvoicingsummaryglobalCountbilled'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalCountbilled'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalSubtotal')) {
                obj['dEzmaxinvoicingsummaryglobalSubtotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalSubtotal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalRebateamount')) {
                obj['dEzmaxinvoicingsummaryglobalRebateamount'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalRebateamount'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalRebatepercent')) {
                obj['dEzmaxinvoicingsummaryglobalRebatepercent'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalRebatepercent'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalRebatetotal')) {
                obj['dEzmaxinvoicingsummaryglobalRebatetotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalRebatetotal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalTotal')) {
                obj['dEzmaxinvoicingsummaryglobalTotal'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalTotal'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalRepresentative')) {
                obj['dEzmaxinvoicingsummaryglobalRepresentative'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalRepresentative'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalPartner')) {
                obj['dEzmaxinvoicingsummaryglobalPartner'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalPartner'], 'String');
            }
            if (data.hasOwnProperty('dEzmaxinvoicingsummaryglobalNet')) {
                obj['dEzmaxinvoicingsummaryglobalNet'] = ApiClient.convertToType(data['dEzmaxinvoicingsummaryglobalNet'], 'String');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingsummaryglobalAdjustment')) {
                obj['bEzmaxinvoicingsummaryglobalAdjustment'] = ApiClient.convertToType(data['bEzmaxinvoicingsummaryglobalAdjustment'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryglobal
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingsummaryglobalID() {
        return this.pkiEzmaxinvoicingsummaryglobalID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryglobal
     * @param {Number} pkiEzmaxinvoicingsummaryglobalID The unique ID of the Ezmaxinvoicingsummaryglobal
     */
    setPkiEzmaxinvoicingsummaryglobalID(pkiEzmaxinvoicingsummaryglobalID) {
        this['pkiEzmaxinvoicingsummaryglobalID'] = pkiEzmaxinvoicingsummaryglobalID;
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
     * Returns The start date for the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDtEzmaxinvoicingsummaryglobalStart() {
        return this.dtEzmaxinvoicingsummaryglobalStart;
    }

    /**
     * Sets The start date for the Ezmaxinvoicingsummaryglobal
     * @param {String} dtEzmaxinvoicingsummaryglobalStart The start date for the Ezmaxinvoicingsummaryglobal
     */
    setDtEzmaxinvoicingsummaryglobalStart(dtEzmaxinvoicingsummaryglobalStart) {
        this['dtEzmaxinvoicingsummaryglobalStart'] = dtEzmaxinvoicingsummaryglobalStart;
    }
/**
     * Returns The end date for the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDtEzmaxinvoicingsummaryglobalEnd() {
        return this.dtEzmaxinvoicingsummaryglobalEnd;
    }

    /**
     * Sets The end date for the Ezmaxinvoicingsummaryglobal
     * @param {String} dtEzmaxinvoicingsummaryglobalEnd The end date for the Ezmaxinvoicingsummaryglobal
     */
    setDtEzmaxinvoicingsummaryglobalEnd(dtEzmaxinvoicingsummaryglobalEnd) {
        this['dtEzmaxinvoicingsummaryglobalEnd'] = dtEzmaxinvoicingsummaryglobalEnd;
    }
/**
     * Returns The number of days for the Ezmaxinvoicingsummaryglobal
     * minimum: 1
     * @return {Number}
     */
    getIEzmaxinvoicingsummaryglobalDays() {
        return this.iEzmaxinvoicingsummaryglobalDays;
    }

    /**
     * Sets The number of days for the Ezmaxinvoicingsummaryglobal
     * @param {Number} iEzmaxinvoicingsummaryglobalDays The number of days for the Ezmaxinvoicingsummaryglobal
     */
    setIEzmaxinvoicingsummaryglobalDays(iEzmaxinvoicingsummaryglobalDays) {
        this['iEzmaxinvoicingsummaryglobalDays'] = iEzmaxinvoicingsummaryglobalDays;
    }
/**
     * Returns The The count item calculated
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalCountreal() {
        return this.dEzmaxinvoicingsummaryglobalCountreal;
    }

    /**
     * Sets The The count item calculated
     * @param {String} dEzmaxinvoicingsummaryglobalCountreal The The count item calculated
     */
    setDEzmaxinvoicingsummaryglobalCountreal(dEzmaxinvoicingsummaryglobalCountreal) {
        this['dEzmaxinvoicingsummaryglobalCountreal'] = dEzmaxinvoicingsummaryglobalCountreal;
    }
/**
     * Returns The The count item billed
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalCountbilled() {
        return this.dEzmaxinvoicingsummaryglobalCountbilled;
    }

    /**
     * Sets The The count item billed
     * @param {String} dEzmaxinvoicingsummaryglobalCountbilled The The count item billed
     */
    setDEzmaxinvoicingsummaryglobalCountbilled(dEzmaxinvoicingsummaryglobalCountbilled) {
        this['dEzmaxinvoicingsummaryglobalCountbilled'] = dEzmaxinvoicingsummaryglobalCountbilled;
    }
/**
     * Returns The Ezmaxinvoicingsummaryglobal subtotal
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalSubtotal() {
        return this.dEzmaxinvoicingsummaryglobalSubtotal;
    }

    /**
     * Sets The Ezmaxinvoicingsummaryglobal subtotal
     * @param {String} dEzmaxinvoicingsummaryglobalSubtotal The Ezmaxinvoicingsummaryglobal subtotal
     */
    setDEzmaxinvoicingsummaryglobalSubtotal(dEzmaxinvoicingsummaryglobalSubtotal) {
        this['dEzmaxinvoicingsummaryglobalSubtotal'] = dEzmaxinvoicingsummaryglobalSubtotal;
    }
/**
     * Returns The rebate amount for the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalRebateamount() {
        return this.dEzmaxinvoicingsummaryglobalRebateamount;
    }

    /**
     * Sets The rebate amount for the Ezmaxinvoicingsummaryglobal
     * @param {String} dEzmaxinvoicingsummaryglobalRebateamount The rebate amount for the Ezmaxinvoicingsummaryglobal
     */
    setDEzmaxinvoicingsummaryglobalRebateamount(dEzmaxinvoicingsummaryglobalRebateamount) {
        this['dEzmaxinvoicingsummaryglobalRebateamount'] = dEzmaxinvoicingsummaryglobalRebateamount;
    }
/**
     * Returns The rebate percentage of the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalRebatepercent() {
        return this.dEzmaxinvoicingsummaryglobalRebatepercent;
    }

    /**
     * Sets The rebate percentage of the Ezmaxinvoicingsummaryglobal
     * @param {String} dEzmaxinvoicingsummaryglobalRebatepercent The rebate percentage of the Ezmaxinvoicingsummaryglobal
     */
    setDEzmaxinvoicingsummaryglobalRebatepercent(dEzmaxinvoicingsummaryglobalRebatepercent) {
        this['dEzmaxinvoicingsummaryglobalRebatepercent'] = dEzmaxinvoicingsummaryglobalRebatepercent;
    }
/**
     * Returns The rebate amount total for the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalRebatetotal() {
        return this.dEzmaxinvoicingsummaryglobalRebatetotal;
    }

    /**
     * Sets The rebate amount total for the Ezmaxinvoicingsummaryglobal
     * @param {String} dEzmaxinvoicingsummaryglobalRebatetotal The rebate amount total for the Ezmaxinvoicingsummaryglobal
     */
    setDEzmaxinvoicingsummaryglobalRebatetotal(dEzmaxinvoicingsummaryglobalRebatetotal) {
        this['dEzmaxinvoicingsummaryglobalRebatetotal'] = dEzmaxinvoicingsummaryglobalRebatetotal;
    }
/**
     * Returns The Ezmaxinvoicingsummaryglobal total
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalTotal() {
        return this.dEzmaxinvoicingsummaryglobalTotal;
    }

    /**
     * Sets The Ezmaxinvoicingsummaryglobal total
     * @param {String} dEzmaxinvoicingsummaryglobalTotal The Ezmaxinvoicingsummaryglobal total
     */
    setDEzmaxinvoicingsummaryglobalTotal(dEzmaxinvoicingsummaryglobalTotal) {
        this['dEzmaxinvoicingsummaryglobalTotal'] = dEzmaxinvoicingsummaryglobalTotal;
    }
/**
     * Returns The amount of commission for the representative
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalRepresentative() {
        return this.dEzmaxinvoicingsummaryglobalRepresentative;
    }

    /**
     * Sets The amount of commission for the representative
     * @param {String} dEzmaxinvoicingsummaryglobalRepresentative The amount of commission for the representative
     */
    setDEzmaxinvoicingsummaryglobalRepresentative(dEzmaxinvoicingsummaryglobalRepresentative) {
        this['dEzmaxinvoicingsummaryglobalRepresentative'] = dEzmaxinvoicingsummaryglobalRepresentative;
    }
/**
     * Returns The amount of commission for the partner
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalPartner() {
        return this.dEzmaxinvoicingsummaryglobalPartner;
    }

    /**
     * Sets The amount of commission for the partner
     * @param {String} dEzmaxinvoicingsummaryglobalPartner The amount of commission for the partner
     */
    setDEzmaxinvoicingsummaryglobalPartner(dEzmaxinvoicingsummaryglobalPartner) {
        this['dEzmaxinvoicingsummaryglobalPartner'] = dEzmaxinvoicingsummaryglobalPartner;
    }
/**
     * Returns The net amount of the Ezmaxinvoicingsummaryglobal
     * @return {String}
     */
    getDEzmaxinvoicingsummaryglobalNet() {
        return this.dEzmaxinvoicingsummaryglobalNet;
    }

    /**
     * Sets The net amount of the Ezmaxinvoicingsummaryglobal
     * @param {String} dEzmaxinvoicingsummaryglobalNet The net amount of the Ezmaxinvoicingsummaryglobal
     */
    setDEzmaxinvoicingsummaryglobalNet(dEzmaxinvoicingsummaryglobalNet) {
        this['dEzmaxinvoicingsummaryglobalNet'] = dEzmaxinvoicingsummaryglobalNet;
    }
/**
     * Returns Whether it is adjustment for the Ezmaxinvoicingsummaryglobal
     * @return {Boolean}
     */
    getBEzmaxinvoicingsummaryglobalAdjustment() {
        return this.bEzmaxinvoicingsummaryglobalAdjustment;
    }

    /**
     * Sets Whether it is adjustment for the Ezmaxinvoicingsummaryglobal
     * @param {Boolean} bEzmaxinvoicingsummaryglobalAdjustment Whether it is adjustment for the Ezmaxinvoicingsummaryglobal
     */
    setBEzmaxinvoicingsummaryglobalAdjustment(bEzmaxinvoicingsummaryglobalAdjustment) {
        this['bEzmaxinvoicingsummaryglobalAdjustment'] = bEzmaxinvoicingsummaryglobalAdjustment;
    }

}

/**
 * The unique ID of the Ezmaxinvoicingsummaryglobal
 * @member {Number} pkiEzmaxinvoicingsummaryglobalID
 */
EzmaxinvoicingsummaryglobalResponse.prototype['pkiEzmaxinvoicingsummaryglobalID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} fkiEzmaxinvoicingID
 */
EzmaxinvoicingsummaryglobalResponse.prototype['fkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
EzmaxinvoicingsummaryglobalResponse.prototype['fkiEzmaxproductID'] = undefined;

/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
EzmaxinvoicingsummaryglobalResponse.prototype['sEzmaxproductDescriptionX'] = undefined;

/**
 * The start date for the Ezmaxinvoicingsummaryglobal
 * @member {String} dtEzmaxinvoicingsummaryglobalStart
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dtEzmaxinvoicingsummaryglobalStart'] = undefined;

/**
 * The end date for the Ezmaxinvoicingsummaryglobal
 * @member {String} dtEzmaxinvoicingsummaryglobalEnd
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dtEzmaxinvoicingsummaryglobalEnd'] = undefined;

/**
 * The number of days for the Ezmaxinvoicingsummaryglobal
 * @member {Number} iEzmaxinvoicingsummaryglobalDays
 */
EzmaxinvoicingsummaryglobalResponse.prototype['iEzmaxinvoicingsummaryglobalDays'] = undefined;

/**
 * The The count item calculated
 * @member {String} dEzmaxinvoicingsummaryglobalCountreal
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalCountreal'] = undefined;

/**
 * The The count item billed
 * @member {String} dEzmaxinvoicingsummaryglobalCountbilled
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalCountbilled'] = undefined;

/**
 * The Ezmaxinvoicingsummaryglobal subtotal
 * @member {String} dEzmaxinvoicingsummaryglobalSubtotal
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalSubtotal'] = undefined;

/**
 * The rebate amount for the Ezmaxinvoicingsummaryglobal
 * @member {String} dEzmaxinvoicingsummaryglobalRebateamount
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalRebateamount'] = undefined;

/**
 * The rebate percentage of the Ezmaxinvoicingsummaryglobal
 * @member {String} dEzmaxinvoicingsummaryglobalRebatepercent
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalRebatepercent'] = undefined;

/**
 * The rebate amount total for the Ezmaxinvoicingsummaryglobal
 * @member {String} dEzmaxinvoicingsummaryglobalRebatetotal
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalRebatetotal'] = undefined;

/**
 * The Ezmaxinvoicingsummaryglobal total
 * @member {String} dEzmaxinvoicingsummaryglobalTotal
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalTotal'] = undefined;

/**
 * The amount of commission for the representative
 * @member {String} dEzmaxinvoicingsummaryglobalRepresentative
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalRepresentative'] = undefined;

/**
 * The amount of commission for the partner
 * @member {String} dEzmaxinvoicingsummaryglobalPartner
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalPartner'] = undefined;

/**
 * The net amount of the Ezmaxinvoicingsummaryglobal
 * @member {String} dEzmaxinvoicingsummaryglobalNet
 */
EzmaxinvoicingsummaryglobalResponse.prototype['dEzmaxinvoicingsummaryglobalNet'] = undefined;

/**
 * Whether it is adjustment for the Ezmaxinvoicingsummaryglobal
 * @member {Boolean} bEzmaxinvoicingsummaryglobalAdjustment
 */
EzmaxinvoicingsummaryglobalResponse.prototype['bEzmaxinvoicingsummaryglobalAdjustment'] = undefined;






export default EzmaxinvoicingsummaryglobalResponse;

