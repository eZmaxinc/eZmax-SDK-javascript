/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatedocumentResponse model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentResponse
 * @version 1.1.8
 */
class EzsigntemplatedocumentResponse {
    /**
     * Constructs a new <code>EzsigntemplatedocumentResponse</code>.
     * A Ezsigntemplatedocument Object
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentResponse
     * @param pkiEzsigntemplatedocumentID {Number} The unique ID of the Ezsigntemplatedocument
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatedocumentName {String} The name of the Ezsigntemplatedocument.
     * @param iEzsigntemplatedocumentPagetotal {Number} The number of pages in the Ezsigntemplatedocument.
     * @param iEzsigntemplatedocumentSignaturetotal {Number} The number of total signatures in the Ezsigntemplate.
     */
    constructor(pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal) { 
        
        EzsigntemplatedocumentResponse.initialize(this, pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal) { 
        obj['pkiEzsigntemplatedocumentID'] = pkiEzsigntemplatedocumentID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
        obj['iEzsigntemplatedocumentPagetotal'] = iEzsigntemplatedocumentPagetotal;
        obj['iEzsigntemplatedocumentSignaturetotal'] = iEzsigntemplatedocumentSignaturetotal;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} The populated <code>EzsigntemplatedocumentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentResponse();

            if (data.hasOwnProperty('pkiEzsigntemplatedocumentID')) {
                obj['pkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['pkiEzsigntemplatedocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatedocumentName')) {
                obj['sEzsigntemplatedocumentName'] = ApiClient.convertToType(data['sEzsigntemplatedocumentName'], 'String');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentPagetotal')) {
                obj['iEzsigntemplatedocumentPagetotal'] = ApiClient.convertToType(data['iEzsigntemplatedocumentPagetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentSignaturetotal')) {
                obj['iEzsigntemplatedocumentSignaturetotal'] = ApiClient.convertToType(data['iEzsigntemplatedocumentSignaturetotal'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatedocument
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatedocumentID() {
        return this.pkiEzsigntemplatedocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatedocument
     * @param {Number} pkiEzsigntemplatedocumentID The unique ID of the Ezsigntemplatedocument
     */
    setPkiEzsigntemplatedocumentID(pkiEzsigntemplatedocumentID) {
        this['pkiEzsigntemplatedocumentID'] = pkiEzsigntemplatedocumentID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }
/**
     * Returns The name of the Ezsigntemplatedocument.
     * @return {String}
     */
    getSEzsigntemplatedocumentName() {
        return this.sEzsigntemplatedocumentName;
    }

    /**
     * Sets The name of the Ezsigntemplatedocument.
     * @param {String} sEzsigntemplatedocumentName The name of the Ezsigntemplatedocument.
     */
    setSEzsigntemplatedocumentName(sEzsigntemplatedocumentName) {
        this['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
    }
/**
     * Returns The number of pages in the Ezsigntemplatedocument.
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatedocumentPagetotal() {
        return this.iEzsigntemplatedocumentPagetotal;
    }

    /**
     * Sets The number of pages in the Ezsigntemplatedocument.
     * @param {Number} iEzsigntemplatedocumentPagetotal The number of pages in the Ezsigntemplatedocument.
     */
    setIEzsigntemplatedocumentPagetotal(iEzsigntemplatedocumentPagetotal) {
        this['iEzsigntemplatedocumentPagetotal'] = iEzsigntemplatedocumentPagetotal;
    }
/**
     * Returns The number of total signatures in the Ezsigntemplate.
     * @return {Number}
     */
    getIEzsigntemplatedocumentSignaturetotal() {
        return this.iEzsigntemplatedocumentSignaturetotal;
    }

    /**
     * Sets The number of total signatures in the Ezsigntemplate.
     * @param {Number} iEzsigntemplatedocumentSignaturetotal The number of total signatures in the Ezsigntemplate.
     */
    setIEzsigntemplatedocumentSignaturetotal(iEzsigntemplatedocumentSignaturetotal) {
        this['iEzsigntemplatedocumentSignaturetotal'] = iEzsigntemplatedocumentSignaturetotal;
    }

}

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} pkiEzsigntemplatedocumentID
 */
EzsigntemplatedocumentResponse.prototype['pkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatedocumentResponse.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The name of the Ezsigntemplatedocument.
 * @member {String} sEzsigntemplatedocumentName
 */
EzsigntemplatedocumentResponse.prototype['sEzsigntemplatedocumentName'] = undefined;

/**
 * The number of pages in the Ezsigntemplatedocument.
 * @member {Number} iEzsigntemplatedocumentPagetotal
 */
EzsigntemplatedocumentResponse.prototype['iEzsigntemplatedocumentPagetotal'] = undefined;

/**
 * The number of total signatures in the Ezsigntemplate.
 * @member {Number} iEzsigntemplatedocumentSignaturetotal
 */
EzsigntemplatedocumentResponse.prototype['iEzsigntemplatedocumentSignaturetotal'] = undefined;






export default EzsigntemplatedocumentResponse;

