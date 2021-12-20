/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFormDataDocumentResponse from './CustomFormDataDocumentResponse';
import CustomFormsDataFolderResponse from './CustomFormsDataFolderResponse';

/**
 * The EzsignfolderGetFormsDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload
 * @version 1.1.4
 */
class EzsignfolderGetFormsDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetFormsDataV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsignfolder/{pkiEzsigndocument}/getFormsData API Request
     * @alias module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload
     * @implements module:eZmaxAPI/model/CustomFormsDataFolderResponse
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param a_objFormDataDocument {Array.<module:eZmaxAPI/model/CustomFormDataDocumentResponse>} 
     */
    constructor(pkiEzsignfolderID, sEzsignfolderDescription, a_objFormDataDocument) { 
        CustomFormsDataFolderResponse.initialize(this, pkiEzsignfolderID, sEzsignfolderDescription, a_objFormDataDocument);
        EzsignfolderGetFormsDataV1ResponseMPayload.initialize(this, pkiEzsignfolderID, sEzsignfolderDescription, a_objFormDataDocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, sEzsignfolderDescription, a_objFormDataDocument) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['a_objFormDataDocument'] = a_objFormDataDocument;
    }

    /**
     * Constructs a <code>EzsignfolderGetFormsDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload} The populated <code>EzsignfolderGetFormsDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetFormsDataV1ResponseMPayload();
            CustomFormsDataFolderResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfolderDescription')) {
                obj['sEzsignfolderDescription'] = ApiClient.convertToType(data['sEzsignfolderDescription'], 'String');
            }
            if (data.hasOwnProperty('a_objFormDataDocument')) {
                obj['a_objFormDataDocument'] = ApiClient.convertToType(data['a_objFormDataDocument'], [CustomFormDataDocumentResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfolder
     * @return {Number}
     */
    getPkiEzsignfolderID() {
        return this.pkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setPkiEzsignfolderID(pkiEzsignfolderID) {
        this['pkiEzsignfolderID'] = pkiEzsignfolderID;
    }
/**
     * Returns The description of the Ezsignfolder
     * @return {String}
     */
    getSEzsignfolderDescription() {
        return this.sEzsignfolderDescription;
    }

    /**
     * Sets The description of the Ezsignfolder
     * @param {String} sEzsignfolderDescription The description of the Ezsignfolder
     */
    setSEzsignfolderDescription(sEzsignfolderDescription) {
        this['sEzsignfolderDescription'] = sEzsignfolderDescription;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomFormDataDocumentResponse>}
     */
    getAObjFormDataDocument() {
        return this.a_objFormDataDocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomFormDataDocumentResponse>} a_objFormDataDocument
     */
    setAObjFormDataDocument(a_objFormDataDocument) {
        this['a_objFormDataDocument'] = a_objFormDataDocument;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderGetFormsDataV1ResponseMPayload.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderGetFormsDataV1ResponseMPayload.prototype['sEzsignfolderDescription'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormDataDocumentResponse>} a_objFormDataDocument
 */
EzsignfolderGetFormsDataV1ResponseMPayload.prototype['a_objFormDataDocument'] = undefined;


// Implement CustomFormsDataFolderResponse interface:
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
CustomFormsDataFolderResponse.prototype['pkiEzsignfolderID'] = undefined;
/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
CustomFormsDataFolderResponse.prototype['sEzsignfolderDescription'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormDataDocumentResponse>} a_objFormDataDocument
 */
CustomFormsDataFolderResponse.prototype['a_objFormDataDocument'] = undefined;




export default EzsignfolderGetFormsDataV1ResponseMPayload;

