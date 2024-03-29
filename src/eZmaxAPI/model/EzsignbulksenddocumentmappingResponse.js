/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignbulksenddocumentmappingResponse model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingResponse
 * @version 1.1.18
 */
class EzsignbulksenddocumentmappingResponse {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingResponse</code>.
     * A Ezsignbulksenddocumentmapping Object
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponse
     * @param pkiEzsignbulksenddocumentmappingID {Number} The unique ID of the Ezsignbulksenddocumentmapping.
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param iEzsignbulksenddocumentmappingOrder {Number} The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     */
    constructor(pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder) { 
        
        EzsignbulksenddocumentmappingResponse.initialize(this, pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder) { 
        obj['pkiEzsignbulksenddocumentmappingID'] = pkiEzsignbulksenddocumentmappingID;
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
        obj['iEzsignbulksenddocumentmappingOrder'] = iEzsignbulksenddocumentmappingOrder;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponse} The populated <code>EzsignbulksenddocumentmappingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingResponse();

            if (data.hasOwnProperty('pkiEzsignbulksenddocumentmappingID')) {
                obj['pkiEzsignbulksenddocumentmappingID'] = ApiClient.convertToType(data['pkiEzsignbulksenddocumentmappingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignbulksendID')) {
                obj['fkiEzsignbulksendID'] = ApiClient.convertToType(data['fkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignbulksenddocumentmappingOrder')) {
                obj['iEzsignbulksenddocumentmappingOrder'] = ApiClient.convertToType(data['iEzsignbulksenddocumentmappingOrder'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksenddocumentmappingResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksenddocumentmappingResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksenddocumentmappingResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignbulksenddocumentmapping.
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignbulksenddocumentmappingID() {
        return this.pkiEzsignbulksenddocumentmappingID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksenddocumentmapping.
     * @param {Number} pkiEzsignbulksenddocumentmappingID The unique ID of the Ezsignbulksenddocumentmapping.
     */
    setPkiEzsignbulksenddocumentmappingID(pkiEzsignbulksenddocumentmappingID) {
        this['pkiEzsignbulksenddocumentmappingID'] = pkiEzsignbulksenddocumentmappingID;
    }
/**
     * Returns The unique ID of the Ezsignbulksend
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignbulksendID() {
        return this.fkiEzsignbulksendID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksend
     * @param {Number} fkiEzsignbulksendID The unique ID of the Ezsignbulksend
     */
    setFkiEzsignbulksendID(fkiEzsignbulksendID) {
        this['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackageID() {
        return this.fkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} fkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setFkiEzsigntemplatepackageID(fkiEzsigntemplatepackageID) {
        this['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
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
     * Returns The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignbulksenddocumentmappingOrder() {
        return this.iEzsignbulksenddocumentmappingOrder;
    }

    /**
     * Sets The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     * @param {Number} iEzsignbulksenddocumentmappingOrder The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     */
    setIEzsignbulksenddocumentmappingOrder(iEzsignbulksenddocumentmappingOrder) {
        this['iEzsignbulksenddocumentmappingOrder'] = iEzsignbulksenddocumentmappingOrder;
    }

}

EzsignbulksenddocumentmappingResponse.RequiredProperties = ["pkiEzsignbulksenddocumentmappingID", "fkiEzsignbulksendID", "iEzsignbulksenddocumentmappingOrder"];

/**
 * The unique ID of the Ezsignbulksenddocumentmapping.
 * @member {Number} pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingResponse.prototype['pkiEzsignbulksenddocumentmappingID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsignbulksenddocumentmappingOrder
 */
EzsignbulksenddocumentmappingResponse.prototype['iEzsignbulksenddocumentmappingOrder'] = undefined;






export default EzsignbulksenddocumentmappingResponse;

