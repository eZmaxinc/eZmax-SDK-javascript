/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.47
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import EzsigndocumentResponse from './EzsigndocumentResponse';
import FieldEEzsigndocumentStep from './FieldEEzsigndocumentStep';

/**
 * The EzsigndocumentResponseCompound model module.
 * @module eZmaxAPI/model/EzsigndocumentResponseCompound
 * @version 1.0.47
 */
class EzsigndocumentResponseCompound {
    /**
     * Constructs a new <code>EzsigndocumentResponseCompound</code>.
     * An Ezsigndocument Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigndocumentResponseCompound
     * @implements module:eZmaxAPI/model/EzsigndocumentResponse
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param dtEzsigndocumentDuedate {String} The maximum date and time at which the document can be signed.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param pkiEzsigndocumentID {Number} The unique ID of the Ezsigntemplate
     * @param eEzsigndocumentStep {module:eZmaxAPI/model/FieldEEzsigndocumentStep} 
     * @param dtEzsigndocumentFirstsend {String} The date and time when the Ezsigndocument was first sent.
     * @param dtEzsigndocumentLastsend {String} The date and time when the Ezsigndocument was sent the last time.
     * @param iEzsigndocumentOrder {Number} The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @param iEzsigndocumentPagetotal {Number} The number of pages in the Ezsigndocument.
     * @param iEzsigndocumentSignaturesigned {Number} The number of signatures that were signed in the document.
     * @param iEzsigndocumentSignaturetotal {Number} The number of total signatures that were requested in the Ezsigndocument.
     * @param sEzsigndocumentMD5initial {String} MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @param sEzsigndocumentMD5signed {String} MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit) { 
        EzsigndocumentResponse.initialize(this, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit);
        EzsigndocumentResponseCompound.initialize(this, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigndocumentName'] = sEzsigndocumentName;
        obj['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
        obj['eEzsigndocumentStep'] = eEzsigndocumentStep;
        obj['dtEzsigndocumentFirstsend'] = dtEzsigndocumentFirstsend;
        obj['dtEzsigndocumentLastsend'] = dtEzsigndocumentLastsend;
        obj['iEzsigndocumentOrder'] = iEzsigndocumentOrder;
        obj['iEzsigndocumentPagetotal'] = iEzsigndocumentPagetotal;
        obj['iEzsigndocumentSignaturesigned'] = iEzsigndocumentSignaturesigned;
        obj['iEzsigndocumentSignaturetotal'] = iEzsigndocumentSignaturetotal;
        obj['sEzsigndocumentMD5initial'] = sEzsigndocumentMD5initial;
        obj['sEzsigndocumentMD5signed'] = sEzsigndocumentMD5signed;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>EzsigndocumentResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentResponseCompound} The populated <code>EzsigndocumentResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentResponseCompound();
            EzsigndocumentResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzsigndocumentDuedate')) {
                obj['dtEzsigndocumentDuedate'] = ApiClient.convertToType(data['dtEzsigndocumentDuedate'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
            if (data.hasOwnProperty('pkiEzsigndocumentID')) {
                obj['pkiEzsigndocumentID'] = ApiClient.convertToType(data['pkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsigndocumentStep')) {
                obj['eEzsigndocumentStep'] = FieldEEzsigndocumentStep.constructFromObject(data['eEzsigndocumentStep']);
            }
            if (data.hasOwnProperty('dtEzsigndocumentFirstsend')) {
                obj['dtEzsigndocumentFirstsend'] = ApiClient.convertToType(data['dtEzsigndocumentFirstsend'], 'String');
            }
            if (data.hasOwnProperty('dtEzsigndocumentLastsend')) {
                obj['dtEzsigndocumentLastsend'] = ApiClient.convertToType(data['dtEzsigndocumentLastsend'], 'String');
            }
            if (data.hasOwnProperty('iEzsigndocumentOrder')) {
                obj['iEzsigndocumentOrder'] = ApiClient.convertToType(data['iEzsigndocumentOrder'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentPagetotal')) {
                obj['iEzsigndocumentPagetotal'] = ApiClient.convertToType(data['iEzsigndocumentPagetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentSignaturesigned')) {
                obj['iEzsigndocumentSignaturesigned'] = ApiClient.convertToType(data['iEzsigndocumentSignaturesigned'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentSignaturetotal')) {
                obj['iEzsigndocumentSignaturetotal'] = ApiClient.convertToType(data['iEzsigndocumentSignaturetotal'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigndocumentMD5initial')) {
                obj['sEzsigndocumentMD5initial'] = ApiClient.convertToType(data['sEzsigndocumentMD5initial'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentMD5signed')) {
                obj['sEzsigndocumentMD5signed'] = ApiClient.convertToType(data['sEzsigndocumentMD5signed'], 'String');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
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
     * Returns The maximum date and time at which the document can be signed.
     * @return {String}
     */
    getDtEzsigndocumentDuedate() {
        return this.dtEzsigndocumentDuedate;
    }

    /**
     * Sets The maximum date and time at which the document can be signed.
     * @param {String} dtEzsigndocumentDuedate The maximum date and time at which the document can be signed.
     */
    setDtEzsigndocumentDuedate(dtEzsigndocumentDuedate) {
        this['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
    }
/**
     * Returns The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * minimum: 1
     * maximum: 2
     * @return {Number}
     */
    getFkiLanguageID() {
        return this.fkiLanguageID;
    }

    /**
     * Sets The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param {Number} fkiLanguageID The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    setFkiLanguageID(fkiLanguageID) {
        this['fkiLanguageID'] = fkiLanguageID;
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
     * Returns The unique ID of the Ezsigntemplate
     * @return {Number}
     */
    getPkiEzsigndocumentID() {
        return this.pkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigntemplate
     */
    setPkiEzsigndocumentID(pkiEzsigndocumentID) {
        this['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigndocumentStep}
     */
    getEEzsigndocumentStep() {
        return this.eEzsigndocumentStep;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigndocumentStep} eEzsigndocumentStep
     */
    setEEzsigndocumentStep(eEzsigndocumentStep) {
        this['eEzsigndocumentStep'] = eEzsigndocumentStep;
    }
/**
     * Returns The date and time when the Ezsigndocument was first sent.
     * @return {String}
     */
    getDtEzsigndocumentFirstsend() {
        return this.dtEzsigndocumentFirstsend;
    }

    /**
     * Sets The date and time when the Ezsigndocument was first sent.
     * @param {String} dtEzsigndocumentFirstsend The date and time when the Ezsigndocument was first sent.
     */
    setDtEzsigndocumentFirstsend(dtEzsigndocumentFirstsend) {
        this['dtEzsigndocumentFirstsend'] = dtEzsigndocumentFirstsend;
    }
/**
     * Returns The date and time when the Ezsigndocument was sent the last time.
     * @return {String}
     */
    getDtEzsigndocumentLastsend() {
        return this.dtEzsigndocumentLastsend;
    }

    /**
     * Sets The date and time when the Ezsigndocument was sent the last time.
     * @param {String} dtEzsigndocumentLastsend The date and time when the Ezsigndocument was sent the last time.
     */
    setDtEzsigndocumentLastsend(dtEzsigndocumentLastsend) {
        this['dtEzsigndocumentLastsend'] = dtEzsigndocumentLastsend;
    }
/**
     * Returns The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @return {Number}
     */
    getIEzsigndocumentOrder() {
        return this.iEzsigndocumentOrder;
    }

    /**
     * Sets The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     * @param {Number} iEzsigndocumentOrder The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
     */
    setIEzsigndocumentOrder(iEzsigndocumentOrder) {
        this['iEzsigndocumentOrder'] = iEzsigndocumentOrder;
    }
/**
     * Returns The number of pages in the Ezsigndocument.
     * @return {Number}
     */
    getIEzsigndocumentPagetotal() {
        return this.iEzsigndocumentPagetotal;
    }

    /**
     * Sets The number of pages in the Ezsigndocument.
     * @param {Number} iEzsigndocumentPagetotal The number of pages in the Ezsigndocument.
     */
    setIEzsigndocumentPagetotal(iEzsigndocumentPagetotal) {
        this['iEzsigndocumentPagetotal'] = iEzsigndocumentPagetotal;
    }
/**
     * Returns The number of signatures that were signed in the document.
     * @return {Number}
     */
    getIEzsigndocumentSignaturesigned() {
        return this.iEzsigndocumentSignaturesigned;
    }

    /**
     * Sets The number of signatures that were signed in the document.
     * @param {Number} iEzsigndocumentSignaturesigned The number of signatures that were signed in the document.
     */
    setIEzsigndocumentSignaturesigned(iEzsigndocumentSignaturesigned) {
        this['iEzsigndocumentSignaturesigned'] = iEzsigndocumentSignaturesigned;
    }
/**
     * Returns The number of total signatures that were requested in the Ezsigndocument.
     * @return {Number}
     */
    getIEzsigndocumentSignaturetotal() {
        return this.iEzsigndocumentSignaturetotal;
    }

    /**
     * Sets The number of total signatures that were requested in the Ezsigndocument.
     * @param {Number} iEzsigndocumentSignaturetotal The number of total signatures that were requested in the Ezsigndocument.
     */
    setIEzsigndocumentSignaturetotal(iEzsigndocumentSignaturetotal) {
        this['iEzsigndocumentSignaturetotal'] = iEzsigndocumentSignaturetotal;
    }
/**
     * Returns MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @return {String}
     */
    getSEzsigndocumentMD5initial() {
        return this.sEzsigndocumentMD5initial;
    }

    /**
     * Sets MD5 Hash of the initial PDF Document before signatures were applied to it.
     * @param {String} sEzsigndocumentMD5initial MD5 Hash of the initial PDF Document before signatures were applied to it.
     */
    setSEzsigndocumentMD5initial(sEzsigndocumentMD5initial) {
        this['sEzsigndocumentMD5initial'] = sEzsigndocumentMD5initial;
    }
/**
     * Returns MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @return {String}
     */
    getSEzsigndocumentMD5signed() {
        return this.sEzsigndocumentMD5signed;
    }

    /**
     * Sets MD5 Hash of the final PDF Document after all signatures were applied to it.
     * @param {String} sEzsigndocumentMD5signed MD5 Hash of the final PDF Document after all signatures were applied to it.
     */
    setSEzsigndocumentMD5signed(sEzsigndocumentMD5signed) {
        this['sEzsigndocumentMD5signed'] = sEzsigndocumentMD5signed;
    }
/**
     * @return {module:eZmaxAPI/model/CommonAudit}
     */
    getObjAudit() {
        return this.objAudit;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAudit} objAudit
     */
    setObjAudit(objAudit) {
        this['objAudit'] = objAudit;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentResponseCompound.prototype['fkiEzsignfolderID'] = undefined;

/**
 * The maximum date and time at which the document can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentResponseCompound.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentResponseCompound.prototype['fkiLanguageID'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentResponseCompound.prototype['sEzsigndocumentName'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentResponseCompound.prototype['pkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigndocumentStep} eEzsigndocumentStep
 */
EzsigndocumentResponseCompound.prototype['eEzsigndocumentStep'] = undefined;

/**
 * The date and time when the Ezsigndocument was first sent.
 * @member {String} dtEzsigndocumentFirstsend
 */
EzsigndocumentResponseCompound.prototype['dtEzsigndocumentFirstsend'] = undefined;

/**
 * The date and time when the Ezsigndocument was sent the last time.
 * @member {String} dtEzsigndocumentLastsend
 */
EzsigndocumentResponseCompound.prototype['dtEzsigndocumentLastsend'] = undefined;

/**
 * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsigndocumentOrder
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentOrder'] = undefined;

/**
 * The number of pages in the Ezsigndocument.
 * @member {Number} iEzsigndocumentPagetotal
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentPagetotal'] = undefined;

/**
 * The number of signatures that were signed in the document.
 * @member {Number} iEzsigndocumentSignaturesigned
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentSignaturesigned'] = undefined;

/**
 * The number of total signatures that were requested in the Ezsigndocument.
 * @member {Number} iEzsigndocumentSignaturetotal
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentSignaturetotal'] = undefined;

/**
 * MD5 Hash of the initial PDF Document before signatures were applied to it.
 * @member {String} sEzsigndocumentMD5initial
 */
EzsigndocumentResponseCompound.prototype['sEzsigndocumentMD5initial'] = undefined;

/**
 * MD5 Hash of the final PDF Document after all signatures were applied to it.
 * @member {String} sEzsigndocumentMD5signed
 */
EzsigndocumentResponseCompound.prototype['sEzsigndocumentMD5signed'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsigndocumentResponseCompound.prototype['objAudit'] = undefined;


// Implement EzsigndocumentResponse interface:
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentResponse.prototype['fkiEzsignfolderID'] = undefined;
/**
 * The maximum date and time at which the document can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentResponse.prototype['dtEzsigndocumentDuedate'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentResponse.prototype['fkiLanguageID'] = undefined;
/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentResponse.prototype['sEzsigndocumentName'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentResponse.prototype['pkiEzsigndocumentID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigndocumentStep} eEzsigndocumentStep
 */
EzsigndocumentResponse.prototype['eEzsigndocumentStep'] = undefined;
/**
 * The date and time when the Ezsigndocument was first sent.
 * @member {String} dtEzsigndocumentFirstsend
 */
EzsigndocumentResponse.prototype['dtEzsigndocumentFirstsend'] = undefined;
/**
 * The date and time when the Ezsigndocument was sent the last time.
 * @member {String} dtEzsigndocumentLastsend
 */
EzsigndocumentResponse.prototype['dtEzsigndocumentLastsend'] = undefined;
/**
 * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsigndocumentOrder
 */
EzsigndocumentResponse.prototype['iEzsigndocumentOrder'] = undefined;
/**
 * The number of pages in the Ezsigndocument.
 * @member {Number} iEzsigndocumentPagetotal
 */
EzsigndocumentResponse.prototype['iEzsigndocumentPagetotal'] = undefined;
/**
 * The number of signatures that were signed in the document.
 * @member {Number} iEzsigndocumentSignaturesigned
 */
EzsigndocumentResponse.prototype['iEzsigndocumentSignaturesigned'] = undefined;
/**
 * The number of total signatures that were requested in the Ezsigndocument.
 * @member {Number} iEzsigndocumentSignaturetotal
 */
EzsigndocumentResponse.prototype['iEzsigndocumentSignaturetotal'] = undefined;
/**
 * MD5 Hash of the initial PDF Document before signatures were applied to it.
 * @member {String} sEzsigndocumentMD5initial
 */
EzsigndocumentResponse.prototype['sEzsigndocumentMD5initial'] = undefined;
/**
 * MD5 Hash of the final PDF Document after all signatures were applied to it.
 * @member {String} sEzsigndocumentMD5signed
 */
EzsigndocumentResponse.prototype['sEzsigndocumentMD5signed'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsigndocumentResponse.prototype['objAudit'] = undefined;




export default EzsigndocumentResponseCompound;

