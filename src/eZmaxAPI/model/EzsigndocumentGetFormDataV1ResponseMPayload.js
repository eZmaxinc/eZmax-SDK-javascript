/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFormDataDocumentResponse from './CustomFormDataDocumentResponse';
import CustomFormDataSignerResponse from './CustomFormDataSignerResponse';

/**
 * The EzsigndocumentGetFormDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload
 * @version 1.1.7
 */
class EzsigndocumentGetFormDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetFormDataV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigndocument/{pkiEzsigndocument}/getFormData API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload
     * @implements module:eZmaxAPI/model/CustomFormDataDocumentResponse
     * @param pkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param dtModifiedDate {String} The date and time at which the object was last modified
     * @param a_objFormDataSigner {Array.<module:eZmaxAPI/model/CustomFormDataSignerResponse>} 
     */
    constructor(pkiEzsigndocumentID, fkiEzsignfolderID, sEzsigndocumentName, dtModifiedDate, a_objFormDataSigner) { 
        CustomFormDataDocumentResponse.initialize(this, pkiEzsigndocumentID, fkiEzsignfolderID, sEzsigndocumentName, dtModifiedDate, a_objFormDataSigner);
        EzsigndocumentGetFormDataV1ResponseMPayload.initialize(this, pkiEzsigndocumentID, fkiEzsignfolderID, sEzsigndocumentName, dtModifiedDate, a_objFormDataSigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigndocumentID, fkiEzsignfolderID, sEzsigndocumentName, dtModifiedDate, a_objFormDataSigner) { 
        obj['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['sEzsigndocumentName'] = sEzsigndocumentName;
        obj['dtModifiedDate'] = dtModifiedDate;
        obj['a_objFormDataSigner'] = a_objFormDataSigner;
    }

    /**
     * Constructs a <code>EzsigndocumentGetFormDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload} The populated <code>EzsigndocumentGetFormDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetFormDataV1ResponseMPayload();
            CustomFormDataDocumentResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigndocumentID')) {
                obj['pkiEzsigndocumentID'] = ApiClient.convertToType(data['pkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
            if (data.hasOwnProperty('dtModifiedDate')) {
                obj['dtModifiedDate'] = ApiClient.convertToType(data['dtModifiedDate'], 'String');
            }
            if (data.hasOwnProperty('a_objFormDataSigner')) {
                obj['a_objFormDataSigner'] = ApiClient.convertToType(data['a_objFormDataSigner'], [CustomFormDataSignerResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigndocument
     * @return {Number}
     */
    getPkiEzsigndocumentID() {
        return this.pkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigndocument
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
     */
    setPkiEzsigndocumentID(pkiEzsigndocumentID) {
        this['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
    }
/**
     * Returns The unique ID of the Ezsignfolder
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} fkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * Returns The name of the document that will be presented to Ezsignfoldersignerassociations
     * @return {String}
     */
    getSEzsigndocumentName() {
        return this.sEzsigndocumentName;
    }

    /**
     * Sets The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param {String} sEzsigndocumentName The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    setSEzsigndocumentName(sEzsigndocumentName) {
        this['sEzsigndocumentName'] = sEzsigndocumentName;
    }
/**
     * Returns The date and time at which the object was last modified
     * @return {String}
     */
    getDtModifiedDate() {
        return this.dtModifiedDate;
    }

    /**
     * Sets The date and time at which the object was last modified
     * @param {String} dtModifiedDate The date and time at which the object was last modified
     */
    setDtModifiedDate(dtModifiedDate) {
        this['dtModifiedDate'] = dtModifiedDate;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomFormDataSignerResponse>}
     */
    getAObjFormDataSigner() {
        return this.a_objFormDataSigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomFormDataSignerResponse>} a_objFormDataSigner
     */
    setAObjFormDataSigner(a_objFormDataSigner) {
        this['a_objFormDataSigner'] = a_objFormDataSigner;
    }

}

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['pkiEzsigndocumentID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['fkiEzsignfolderID'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['sEzsigndocumentName'] = undefined;

/**
 * The date and time at which the object was last modified
 * @member {String} dtModifiedDate
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['dtModifiedDate'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormDataSignerResponse>} a_objFormDataSigner
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['a_objFormDataSigner'] = undefined;


// Implement CustomFormDataDocumentResponse interface:
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
CustomFormDataDocumentResponse.prototype['pkiEzsigndocumentID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
CustomFormDataDocumentResponse.prototype['fkiEzsignfolderID'] = undefined;
/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
CustomFormDataDocumentResponse.prototype['sEzsigndocumentName'] = undefined;
/**
 * The date and time at which the object was last modified
 * @member {String} dtModifiedDate
 */
CustomFormDataDocumentResponse.prototype['dtModifiedDate'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormDataSignerResponse>} a_objFormDataSigner
 */
CustomFormDataDocumentResponse.prototype['a_objFormDataSigner'] = undefined;




export default EzsigndocumentGetFormDataV1ResponseMPayload;

