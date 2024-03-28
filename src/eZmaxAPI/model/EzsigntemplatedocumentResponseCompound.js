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
import EzsigntemplatedocumentResponse from './EzsigntemplatedocumentResponse';

/**
 * The EzsigntemplatedocumentResponseCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentResponseCompound
 * @version 1.2.0
 */
class EzsigntemplatedocumentResponseCompound {
    /**
     * Constructs a new <code>EzsigntemplatedocumentResponseCompound</code>.
     * A Ezsigntemplatedocument Object
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatedocumentResponse
     * @param pkiEzsigntemplatedocumentID {Number} The unique ID of the Ezsigntemplatedocument
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatedocumentName {String} The name of the Ezsigntemplatedocument.
     * @param iEzsigntemplatedocumentPagetotal {Number} The number of pages in the Ezsigntemplatedocument.
     * @param iEzsigntemplatedocumentSignaturetotal {Number} The number of total signatures in the Ezsigntemplate.
     * @param bEzsigntemplatedocumentHassignedsignatures {Boolean} If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
     */
    constructor(pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal, bEzsigntemplatedocumentHassignedsignatures) { 
        EzsigntemplatedocumentResponse.initialize(this, pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal, bEzsigntemplatedocumentHassignedsignatures);
        EzsigntemplatedocumentResponseCompound.initialize(this, pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal, bEzsigntemplatedocumentHassignedsignatures);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatedocumentID, fkiEzsigntemplateID, sEzsigntemplatedocumentName, iEzsigntemplatedocumentPagetotal, iEzsigntemplatedocumentSignaturetotal, bEzsigntemplatedocumentHassignedsignatures) { 
        obj['pkiEzsigntemplatedocumentID'] = pkiEzsigntemplatedocumentID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
        obj['iEzsigntemplatedocumentPagetotal'] = iEzsigntemplatedocumentPagetotal;
        obj['iEzsigntemplatedocumentSignaturetotal'] = iEzsigntemplatedocumentSignaturetotal;
        obj['bEzsigntemplatedocumentHassignedsignatures'] = bEzsigntemplatedocumentHassignedsignatures;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentResponseCompound} The populated <code>EzsigntemplatedocumentResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentResponseCompound();
            EzsigntemplatedocumentResponse.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('bEzsigntemplatedocumentHassignedsignatures')) {
                obj['bEzsigntemplatedocumentHassignedsignatures'] = ApiClient.convertToType(data['bEzsigntemplatedocumentHassignedsignatures'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatedocumentName'] && !(typeof data['sEzsigntemplatedocumentName'] === 'string' || data['sEzsigntemplatedocumentName'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatedocumentName` to be a primitive type in the JSON string but got " + data['sEzsigntemplatedocumentName']);
        }

        return true;
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
/**
     * Returns If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
     * @return {Boolean}
     */
    getBEzsigntemplatedocumentHassignedsignatures() {
        return this.bEzsigntemplatedocumentHassignedsignatures;
    }

    /**
     * Sets If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
     * @param {Boolean} bEzsigntemplatedocumentHassignedsignatures If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
     */
    setBEzsigntemplatedocumentHassignedsignatures(bEzsigntemplatedocumentHassignedsignatures) {
        this['bEzsigntemplatedocumentHassignedsignatures'] = bEzsigntemplatedocumentHassignedsignatures;
    }

}

EzsigntemplatedocumentResponseCompound.RequiredProperties = ["pkiEzsigntemplatedocumentID", "fkiEzsigntemplateID", "sEzsigntemplatedocumentName", "iEzsigntemplatedocumentPagetotal", "iEzsigntemplatedocumentSignaturetotal", "bEzsigntemplatedocumentHassignedsignatures"];

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} pkiEzsigntemplatedocumentID
 */
EzsigntemplatedocumentResponseCompound.prototype['pkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatedocumentResponseCompound.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The name of the Ezsigntemplatedocument.
 * @member {String} sEzsigntemplatedocumentName
 */
EzsigntemplatedocumentResponseCompound.prototype['sEzsigntemplatedocumentName'] = undefined;

/**
 * The number of pages in the Ezsigntemplatedocument.
 * @member {Number} iEzsigntemplatedocumentPagetotal
 */
EzsigntemplatedocumentResponseCompound.prototype['iEzsigntemplatedocumentPagetotal'] = undefined;

/**
 * The number of total signatures in the Ezsigntemplate.
 * @member {Number} iEzsigntemplatedocumentSignaturetotal
 */
EzsigntemplatedocumentResponseCompound.prototype['iEzsigntemplatedocumentSignaturetotal'] = undefined;

/**
 * If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
 * @member {Boolean} bEzsigntemplatedocumentHassignedsignatures
 */
EzsigntemplatedocumentResponseCompound.prototype['bEzsigntemplatedocumentHassignedsignatures'] = undefined;


// Implement EzsigntemplatedocumentResponse interface:
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
/**
 * If the Ezsigntemplatedocument contains signed signatures (From internal or external sources)
 * @member {Boolean} bEzsigntemplatedocumentHassignedsignatures
 */
EzsigntemplatedocumentResponse.prototype['bEzsigntemplatedocumentHassignedsignatures'] = undefined;




export default EzsigntemplatedocumentResponseCompound;

