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
import CustomImportEzsigntemplatepackageRelationRequest from './CustomImportEzsigntemplatepackageRelationRequest';

/**
 * The EzsignfolderImportEzsigntemplatepackageV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1Request
 * @version 1.1.18
 */
class EzsignfolderImportEzsigntemplatepackageV1Request {
    /**
     * Constructs a new <code>EzsignfolderImportEzsigntemplatepackageV1Request</code>.
     * Request for POST /1/object/ezsignfolder/{pkiEzsignfolderID}/importEzsigntemplatepackage
     * @alias module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1Request
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param dtEzsigndocumentDuedate {String} The maximum date and time at which the Ezsigndocument can be signed.
     * @param a_objImportEzsigntemplatepackageRelation {Array.<module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest>} 
     */
    constructor(fkiEzsigntemplatepackageID, dtEzsigndocumentDuedate, a_objImportEzsigntemplatepackageRelation) { 
        
        EzsignfolderImportEzsigntemplatepackageV1Request.initialize(this, fkiEzsigntemplatepackageID, dtEzsigndocumentDuedate, a_objImportEzsigntemplatepackageRelation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplatepackageID, dtEzsigndocumentDuedate, a_objImportEzsigntemplatepackageRelation) { 
        obj['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
        obj['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
        obj['a_objImportEzsigntemplatepackageRelation'] = a_objImportEzsigntemplatepackageRelation;
    }

    /**
     * Constructs a <code>EzsignfolderImportEzsigntemplatepackageV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1Request} The populated <code>EzsignfolderImportEzsigntemplatepackageV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderImportEzsigntemplatepackageV1Request();

            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzsigndocumentDuedate')) {
                obj['dtEzsigndocumentDuedate'] = ApiClient.convertToType(data['dtEzsigndocumentDuedate'], 'String');
            }
            if (data.hasOwnProperty('a_objImportEzsigntemplatepackageRelation')) {
                obj['a_objImportEzsigntemplatepackageRelation'] = ApiClient.convertToType(data['a_objImportEzsigntemplatepackageRelation'], [CustomImportEzsigntemplatepackageRelationRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderImportEzsigntemplatepackageV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderImportEzsigntemplatepackageV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderImportEzsigntemplatepackageV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dtEzsigndocumentDuedate'] && !(typeof data['dtEzsigndocumentDuedate'] === 'string' || data['dtEzsigndocumentDuedate'] instanceof String)) {
            throw new Error("Expected the field `dtEzsigndocumentDuedate` to be a primitive type in the JSON string but got " + data['dtEzsigndocumentDuedate']);
        }
        if (data['a_objImportEzsigntemplatepackageRelation']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objImportEzsigntemplatepackageRelation'])) {
                throw new Error("Expected the field `a_objImportEzsigntemplatepackageRelation` to be an array in the JSON data but got " + data['a_objImportEzsigntemplatepackageRelation']);
            }
            // validate the optional field `a_objImportEzsigntemplatepackageRelation` (array)
            for (const item of data['a_objImportEzsigntemplatepackageRelation']) {
                CustomImportEzsigntemplatepackageRelationRequest.validateJSON(item);
            };
        }

        return true;
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
     * Returns The maximum date and time at which the Ezsigndocument can be signed.
     * @return {String}
     */
    getDtEzsigndocumentDuedate() {
        return this.dtEzsigndocumentDuedate;
    }

    /**
     * Sets The maximum date and time at which the Ezsigndocument can be signed.
     * @param {String} dtEzsigndocumentDuedate The maximum date and time at which the Ezsigndocument can be signed.
     */
    setDtEzsigndocumentDuedate(dtEzsigndocumentDuedate) {
        this['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest>}
     */
    getAObjImportEzsigntemplatepackageRelation() {
        return this.a_objImportEzsigntemplatepackageRelation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest>} a_objImportEzsigntemplatepackageRelation
     */
    setAObjImportEzsigntemplatepackageRelation(a_objImportEzsigntemplatepackageRelation) {
        this['a_objImportEzsigntemplatepackageRelation'] = a_objImportEzsigntemplatepackageRelation;
    }

}

EzsignfolderImportEzsigntemplatepackageV1Request.RequiredProperties = ["fkiEzsigntemplatepackageID", "dtEzsigndocumentDuedate", "a_objImportEzsigntemplatepackageRelation"];

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignfolderImportEzsigntemplatepackageV1Request.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The maximum date and time at which the Ezsigndocument can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsignfolderImportEzsigntemplatepackageV1Request.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomImportEzsigntemplatepackageRelationRequest>} a_objImportEzsigntemplatepackageRelation
 */
EzsignfolderImportEzsigntemplatepackageV1Request.prototype['a_objImportEzsigntemplatepackageRelation'] = undefined;






export default EzsignfolderImportEzsigntemplatepackageV1Request;

