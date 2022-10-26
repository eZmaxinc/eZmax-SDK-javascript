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
 * The EzsigndocumentApplyEzsigntemplateV2Request model module.
 * @module eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Request
 * @version 1.1.12
 */
class EzsigndocumentApplyEzsigntemplateV2Request {
    /**
     * Constructs a new <code>EzsigndocumentApplyEzsigntemplateV2Request</code>.
     * Request for POST /2/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate
     * @alias module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Request
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param a_sEzsigntemplatesigner {Array.<String>} 
     * @param a_pkiEzsignfoldersignerassociationID {Array.<Number>} 
     */
    constructor(fkiEzsigntemplateID, a_sEzsigntemplatesigner, a_pkiEzsignfoldersignerassociationID) { 
        
        EzsigndocumentApplyEzsigntemplateV2Request.initialize(this, fkiEzsigntemplateID, a_sEzsigntemplatesigner, a_pkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplateID, a_sEzsigntemplatesigner, a_pkiEzsignfoldersignerassociationID) { 
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['a_sEzsigntemplatesigner'] = a_sEzsigntemplatesigner;
        obj['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>EzsigndocumentApplyEzsigntemplateV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentApplyEzsigntemplateV2Request} The populated <code>EzsigndocumentApplyEzsigntemplateV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentApplyEzsigntemplateV2Request();

            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('a_sEzsigntemplatesigner')) {
                obj['a_sEzsigntemplatesigner'] = ApiClient.convertToType(data['a_sEzsigntemplatesigner'], ['String']);
            }
            if (data.hasOwnProperty('a_pkiEzsignfoldersignerassociationID')) {
                obj['a_pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['a_pkiEzsignfoldersignerassociationID'], ['Number']);
            }
        }
        return obj;
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
     * @return {Array.<String>}
     */
    getASEzsigntemplatesigner() {
        return this.a_sEzsigntemplatesigner;
    }

    /**
     * @param {Array.<String>} a_sEzsigntemplatesigner
     */
    setASEzsigntemplatesigner(a_sEzsigntemplatesigner) {
        this['a_sEzsigntemplatesigner'] = a_sEzsigntemplatesigner;
    }
/**
     * @return {Array.<Number>}
     */
    getAPkiEzsignfoldersignerassociationID() {
        return this.a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsignfoldersignerassociationID
     */
    setAPkiEzsignfoldersignerassociationID(a_pkiEzsignfoldersignerassociationID) {
        this['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

}

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigndocumentApplyEzsigntemplateV2Request.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * @member {Array.<String>} a_sEzsigntemplatesigner
 */
EzsigndocumentApplyEzsigntemplateV2Request.prototype['a_sEzsigntemplatesigner'] = undefined;

/**
 * @member {Array.<Number>} a_pkiEzsignfoldersignerassociationID
 */
EzsigndocumentApplyEzsigntemplateV2Request.prototype['a_pkiEzsignfoldersignerassociationID'] = undefined;






export default EzsigndocumentApplyEzsigntemplateV2Request;

