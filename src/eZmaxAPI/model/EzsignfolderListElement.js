/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsignfolderStep from './FieldEEzsignfolderStep';
import OneOfstringobject from './OneOfstringobject';

/**
 * The EzsignfolderListElement model module.
 * @module eZmaxAPI/model/EzsignfolderListElement
 * @version 1.1.0
 */
class EzsignfolderListElement {
    /**
     * Constructs a new <code>EzsignfolderListElement</code>.
     * An Ezsignfolder List Element
     * @alias module:eZmaxAPI/model/EzsignfolderListElement
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param sEzsignfolderDescription {String} The description of the Ezsign Folder
     * @param eEzsignfolderStep {module:eZmaxAPI/model/FieldEEzsignfolderStep} 
     * @param dtCreatedDate {String} The date and time at which the object was created
     * @param dtEzsignfolderSentdate {module:eZmaxAPI/model/OneOfstringobject} 
     * @param dtDueDate {module:eZmaxAPI/model/OneOfstringobject} The date at which no more signature will be accepted on the folder
     * @param iTotalDocument {Number} The total number of Ezsigndocument in the folder
     * @param iTotalDocumentEdm {Number} The total number of Ezsigndocument in the folder that were saved in the edm system
     * @param iTotalSignature {Number} The total number of signature blocks in all Ezsigndocuments in the folder
     * @param iTotalSignatureSigned {Number} The total number of already signed signature blocks in all Ezsigndocuments in the folder
     */
    constructor(pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, dtEzsignfolderSentdate, dtDueDate, iTotalDocument, iTotalDocumentEdm, iTotalSignature, iTotalSignatureSigned) { 
        
        EzsignfolderListElement.initialize(this, pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, dtEzsignfolderSentdate, dtDueDate, iTotalDocument, iTotalDocumentEdm, iTotalSignature, iTotalSignatureSigned);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, dtEzsignfolderSentdate, dtDueDate, iTotalDocument, iTotalDocumentEdm, iTotalSignature, iTotalSignatureSigned) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['eEzsignfolderStep'] = eEzsignfolderStep;
        obj['dtCreatedDate'] = dtCreatedDate;
        obj['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
        obj['dtDueDate'] = dtDueDate;
        obj['iTotalDocument'] = iTotalDocument;
        obj['iTotalDocumentEdm'] = iTotalDocumentEdm;
        obj['iTotalSignature'] = iTotalSignature;
        obj['iTotalSignatureSigned'] = iTotalSignatureSigned;
    }

    /**
     * Constructs a <code>EzsignfolderListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderListElement} The populated <code>EzsignfolderListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderListElement();

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfolderDescription')) {
                obj['sEzsignfolderDescription'] = ApiClient.convertToType(data['sEzsignfolderDescription'], 'String');
            }
            if (data.hasOwnProperty('eEzsignfolderStep')) {
                obj['eEzsignfolderStep'] = FieldEEzsignfolderStep.constructFromObject(data['eEzsignfolderStep']);
            }
            if (data.hasOwnProperty('dtCreatedDate')) {
                obj['dtCreatedDate'] = ApiClient.convertToType(data['dtCreatedDate'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderSentdate')) {
                obj['dtEzsignfolderSentdate'] = ApiClient.convertToType(data['dtEzsignfolderSentdate'], OneOfstringobject);
            }
            if (data.hasOwnProperty('dtDueDate')) {
                obj['dtDueDate'] = ApiClient.convertToType(data['dtDueDate'], OneOfstringobject);
            }
            if (data.hasOwnProperty('iTotalDocument')) {
                obj['iTotalDocument'] = ApiClient.convertToType(data['iTotalDocument'], 'Number');
            }
            if (data.hasOwnProperty('iTotalDocumentEdm')) {
                obj['iTotalDocumentEdm'] = ApiClient.convertToType(data['iTotalDocumentEdm'], 'Number');
            }
            if (data.hasOwnProperty('iTotalSignature')) {
                obj['iTotalSignature'] = ApiClient.convertToType(data['iTotalSignature'], 'Number');
            }
            if (data.hasOwnProperty('iTotalSignatureSigned')) {
                obj['iTotalSignatureSigned'] = ApiClient.convertToType(data['iTotalSignatureSigned'], 'Number');
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
     * Returns The unique ID of the Ezsignfoldertype.
     * @return {Number}
     */
    getFkiEzsignfoldertypeID() {
        return this.fkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.
     * @param {Number} fkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.
     */
    setFkiEzsignfoldertypeID(fkiEzsignfoldertypeID) {
        this['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
    }
/**
     * Returns The name of the Ezsignfoldertype in the language of the requester
     * @return {String}
     */
    getSEzsignfoldertypeNameX() {
        return this.sEzsignfoldertypeNameX;
    }

    /**
     * Sets The name of the Ezsignfoldertype in the language of the requester
     * @param {String} sEzsignfoldertypeNameX The name of the Ezsignfoldertype in the language of the requester
     */
    setSEzsignfoldertypeNameX(sEzsignfoldertypeNameX) {
        this['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
    }
/**
     * Returns The description of the Ezsign Folder
     * @return {String}
     */
    getSEzsignfolderDescription() {
        return this.sEzsignfolderDescription;
    }

    /**
     * Sets The description of the Ezsign Folder
     * @param {String} sEzsignfolderDescription The description of the Ezsign Folder
     */
    setSEzsignfolderDescription(sEzsignfolderDescription) {
        this['sEzsignfolderDescription'] = sEzsignfolderDescription;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfolderStep}
     */
    getEEzsignfolderStep() {
        return this.eEzsignfolderStep;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
     */
    setEEzsignfolderStep(eEzsignfolderStep) {
        this['eEzsignfolderStep'] = eEzsignfolderStep;
    }
/**
     * Returns The date and time at which the object was created
     * @return {String}
     */
    getDtCreatedDate() {
        return this.dtCreatedDate;
    }

    /**
     * Sets The date and time at which the object was created
     * @param {String} dtCreatedDate The date and time at which the object was created
     */
    setDtCreatedDate(dtCreatedDate) {
        this['dtCreatedDate'] = dtCreatedDate;
    }
/**
     * @return {module:eZmaxAPI/model/OneOfstringobject}
     */
    getDtEzsignfolderSentdate() {
        return this.dtEzsignfolderSentdate;
    }

    /**
     * @param {module:eZmaxAPI/model/OneOfstringobject} dtEzsignfolderSentdate
     */
    setDtEzsignfolderSentdate(dtEzsignfolderSentdate) {
        this['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
    }
/**
     * Returns The date at which no more signature will be accepted on the folder
     * @return {module:eZmaxAPI/model/OneOfstringobject}
     */
    getDtDueDate() {
        return this.dtDueDate;
    }

    /**
     * Sets The date at which no more signature will be accepted on the folder
     * @param {module:eZmaxAPI/model/OneOfstringobject} dtDueDate The date at which no more signature will be accepted on the folder
     */
    setDtDueDate(dtDueDate) {
        this['dtDueDate'] = dtDueDate;
    }
/**
     * Returns The total number of Ezsigndocument in the folder
     * @return {Number}
     */
    getITotalDocument() {
        return this.iTotalDocument;
    }

    /**
     * Sets The total number of Ezsigndocument in the folder
     * @param {Number} iTotalDocument The total number of Ezsigndocument in the folder
     */
    setITotalDocument(iTotalDocument) {
        this['iTotalDocument'] = iTotalDocument;
    }
/**
     * Returns The total number of Ezsigndocument in the folder that were saved in the edm system
     * @return {Number}
     */
    getITotalDocumentEdm() {
        return this.iTotalDocumentEdm;
    }

    /**
     * Sets The total number of Ezsigndocument in the folder that were saved in the edm system
     * @param {Number} iTotalDocumentEdm The total number of Ezsigndocument in the folder that were saved in the edm system
     */
    setITotalDocumentEdm(iTotalDocumentEdm) {
        this['iTotalDocumentEdm'] = iTotalDocumentEdm;
    }
/**
     * Returns The total number of signature blocks in all Ezsigndocuments in the folder
     * @return {Number}
     */
    getITotalSignature() {
        return this.iTotalSignature;
    }

    /**
     * Sets The total number of signature blocks in all Ezsigndocuments in the folder
     * @param {Number} iTotalSignature The total number of signature blocks in all Ezsigndocuments in the folder
     */
    setITotalSignature(iTotalSignature) {
        this['iTotalSignature'] = iTotalSignature;
    }
/**
     * Returns The total number of already signed signature blocks in all Ezsigndocuments in the folder
     * @return {Number}
     */
    getITotalSignatureSigned() {
        return this.iTotalSignatureSigned;
    }

    /**
     * Sets The total number of already signed signature blocks in all Ezsigndocuments in the folder
     * @param {Number} iTotalSignatureSigned The total number of already signed signature blocks in all Ezsigndocuments in the folder
     */
    setITotalSignatureSigned(iTotalSignatureSigned) {
        this['iTotalSignatureSigned'] = iTotalSignatureSigned;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderListElement.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignfolderListElement.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignfolderListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * The description of the Ezsign Folder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderListElement.prototype['sEzsignfolderDescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
 */
EzsignfolderListElement.prototype['eEzsignfolderStep'] = undefined;

/**
 * The date and time at which the object was created
 * @member {String} dtCreatedDate
 */
EzsignfolderListElement.prototype['dtCreatedDate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/OneOfstringobject} dtEzsignfolderSentdate
 */
EzsignfolderListElement.prototype['dtEzsignfolderSentdate'] = undefined;

/**
 * The date at which no more signature will be accepted on the folder
 * @member {module:eZmaxAPI/model/OneOfstringobject} dtDueDate
 */
EzsignfolderListElement.prototype['dtDueDate'] = undefined;

/**
 * The total number of Ezsigndocument in the folder
 * @member {Number} iTotalDocument
 */
EzsignfolderListElement.prototype['iTotalDocument'] = undefined;

/**
 * The total number of Ezsigndocument in the folder that were saved in the edm system
 * @member {Number} iTotalDocumentEdm
 */
EzsignfolderListElement.prototype['iTotalDocumentEdm'] = undefined;

/**
 * The total number of signature blocks in all Ezsigndocuments in the folder
 * @member {Number} iTotalSignature
 */
EzsignfolderListElement.prototype['iTotalSignature'] = undefined;

/**
 * The total number of already signed signature blocks in all Ezsigndocuments in the folder
 * @member {Number} iTotalSignatureSigned
 */
EzsignfolderListElement.prototype['iTotalSignatureSigned'] = undefined;






export default EzsignfolderListElement;

