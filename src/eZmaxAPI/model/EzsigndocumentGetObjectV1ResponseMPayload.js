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
import CommonAudit from './CommonAudit';
import CustomEzsignfoldersignerassociationstatusResponse from './CustomEzsignfoldersignerassociationstatusResponse';
import EzsigndocumentResponseCompound from './EzsigndocumentResponseCompound';
import FieldEEzsigndocumentStep from './FieldEEzsigndocumentStep';

/**
 * The EzsigndocumentGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetObjectV1ResponseMPayload
 * @version 1.1.7
 */
class EzsigndocumentGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsigndocument/getObject API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigndocumentResponseCompound
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param dtEzsigndocumentDuedate {String} The maximum date and time at which the Ezsigndocument can be signed.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param pkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
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
     * @param iEzsigndocumentStepformtotal {Number} The total number of steps in the form filling phase
     * @param iEzsigndocumentStepformcurrent {Number} The current step in the form filling phase
     * @param iEzsigndocumentStepsignaturetotal {Number} The total number of steps in the signature filling phase
     * @param iEzsigndocumentStepsignatureCurrent {Number} The current step in the signature phase
     * @param a_objEzsignfoldersignerassociationstatus {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} 
     */
    constructor(fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus) { 
        EzsigndocumentResponseCompound.initialize(this, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus);
        EzsigndocumentGetObjectV1ResponseMPayload.initialize(this, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID, dtEzsigndocumentDuedate, fkiLanguageID, sEzsigndocumentName, pkiEzsigndocumentID, eEzsigndocumentStep, dtEzsigndocumentFirstsend, dtEzsigndocumentLastsend, iEzsigndocumentOrder, iEzsigndocumentPagetotal, iEzsigndocumentSignaturesigned, iEzsigndocumentSignaturetotal, sEzsigndocumentMD5initial, sEzsigndocumentMD5signed, objAudit, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus) { 
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
        obj['iEzsigndocumentStepformtotal'] = iEzsigndocumentStepformtotal;
        obj['iEzsigndocumentStepformcurrent'] = iEzsigndocumentStepformcurrent;
        obj['iEzsigndocumentStepsignaturetotal'] = iEzsigndocumentStepsignaturetotal;
        obj['iEzsigndocumentStepsignatureCurrent'] = iEzsigndocumentStepsignatureCurrent;
        obj['a_objEzsignfoldersignerassociationstatus'] = a_objEzsignfoldersignerassociationstatus;
    }

    /**
     * Constructs a <code>EzsigndocumentGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetObjectV1ResponseMPayload} The populated <code>EzsigndocumentGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetObjectV1ResponseMPayload();
            EzsigndocumentResponseCompound.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('iEzsigndocumentStepformtotal')) {
                obj['iEzsigndocumentStepformtotal'] = ApiClient.convertToType(data['iEzsigndocumentStepformtotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepformcurrent')) {
                obj['iEzsigndocumentStepformcurrent'] = ApiClient.convertToType(data['iEzsigndocumentStepformcurrent'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepsignaturetotal')) {
                obj['iEzsigndocumentStepsignaturetotal'] = ApiClient.convertToType(data['iEzsigndocumentStepsignaturetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepsignatureCurrent')) {
                obj['iEzsigndocumentStepsignatureCurrent'] = ApiClient.convertToType(data['iEzsigndocumentStepsignatureCurrent'], 'Number');
            }
            if (data.hasOwnProperty('a_objEzsignfoldersignerassociationstatus')) {
                obj['a_objEzsignfoldersignerassociationstatus'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociationstatus'], [CustomEzsignfoldersignerassociationstatusResponse]);
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
/**
     * Returns The total number of steps in the form filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepformtotal() {
        return this.iEzsigndocumentStepformtotal;
    }

    /**
     * Sets The total number of steps in the form filling phase
     * @param {Number} iEzsigndocumentStepformtotal The total number of steps in the form filling phase
     */
    setIEzsigndocumentStepformtotal(iEzsigndocumentStepformtotal) {
        this['iEzsigndocumentStepformtotal'] = iEzsigndocumentStepformtotal;
    }
/**
     * Returns The current step in the form filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepformcurrent() {
        return this.iEzsigndocumentStepformcurrent;
    }

    /**
     * Sets The current step in the form filling phase
     * @param {Number} iEzsigndocumentStepformcurrent The current step in the form filling phase
     */
    setIEzsigndocumentStepformcurrent(iEzsigndocumentStepformcurrent) {
        this['iEzsigndocumentStepformcurrent'] = iEzsigndocumentStepformcurrent;
    }
/**
     * Returns The total number of steps in the signature filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepsignaturetotal() {
        return this.iEzsigndocumentStepsignaturetotal;
    }

    /**
     * Sets The total number of steps in the signature filling phase
     * @param {Number} iEzsigndocumentStepsignaturetotal The total number of steps in the signature filling phase
     */
    setIEzsigndocumentStepsignaturetotal(iEzsigndocumentStepsignaturetotal) {
        this['iEzsigndocumentStepsignaturetotal'] = iEzsigndocumentStepsignaturetotal;
    }
/**
     * Returns The current step in the signature phase
     * @return {Number}
     */
    getIEzsigndocumentStepsignatureCurrent() {
        return this.iEzsigndocumentStepsignatureCurrent;
    }

    /**
     * Sets The current step in the signature phase
     * @param {Number} iEzsigndocumentStepsignatureCurrent The current step in the signature phase
     */
    setIEzsigndocumentStepsignatureCurrent(iEzsigndocumentStepsignatureCurrent) {
        this['iEzsigndocumentStepsignatureCurrent'] = iEzsigndocumentStepsignatureCurrent;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>}
     */
    getAObjEzsignfoldersignerassociationstatus() {
        return this.a_objEzsignfoldersignerassociationstatus;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} a_objEzsignfoldersignerassociationstatus
     */
    setAObjEzsignfoldersignerassociationstatus(a_objEzsignfoldersignerassociationstatus) {
        this['a_objEzsignfoldersignerassociationstatus'] = a_objEzsignfoldersignerassociationstatus;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['fkiEzsignfolderID'] = undefined;

/**
 * The maximum date and time at which the Ezsigndocument can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['fkiLanguageID'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['sEzsigndocumentName'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['pkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigndocumentStep} eEzsigndocumentStep
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['eEzsigndocumentStep'] = undefined;

/**
 * The date and time when the Ezsigndocument was first sent.
 * @member {String} dtEzsigndocumentFirstsend
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['dtEzsigndocumentFirstsend'] = undefined;

/**
 * The date and time when the Ezsigndocument was sent the last time.
 * @member {String} dtEzsigndocumentLastsend
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['dtEzsigndocumentLastsend'] = undefined;

/**
 * The order in which the Ezsigndocument will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsigndocumentOrder
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentOrder'] = undefined;

/**
 * The number of pages in the Ezsigndocument.
 * @member {Number} iEzsigndocumentPagetotal
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentPagetotal'] = undefined;

/**
 * The number of signatures that were signed in the document.
 * @member {Number} iEzsigndocumentSignaturesigned
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentSignaturesigned'] = undefined;

/**
 * The number of total signatures that were requested in the Ezsigndocument.
 * @member {Number} iEzsigndocumentSignaturetotal
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentSignaturetotal'] = undefined;

/**
 * MD5 Hash of the initial PDF Document before signatures were applied to it.
 * @member {String} sEzsigndocumentMD5initial
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['sEzsigndocumentMD5initial'] = undefined;

/**
 * MD5 Hash of the final PDF Document after all signatures were applied to it.
 * @member {String} sEzsigndocumentMD5signed
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['sEzsigndocumentMD5signed'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['objAudit'] = undefined;

/**
 * The total number of steps in the form filling phase
 * @member {Number} iEzsigndocumentStepformtotal
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentStepformtotal'] = undefined;

/**
 * The current step in the form filling phase
 * @member {Number} iEzsigndocumentStepformcurrent
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentStepformcurrent'] = undefined;

/**
 * The total number of steps in the signature filling phase
 * @member {Number} iEzsigndocumentStepsignaturetotal
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentStepsignaturetotal'] = undefined;

/**
 * The current step in the signature phase
 * @member {Number} iEzsigndocumentStepsignatureCurrent
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['iEzsigndocumentStepsignatureCurrent'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} a_objEzsignfoldersignerassociationstatus
 */
EzsigndocumentGetObjectV1ResponseMPayload.prototype['a_objEzsignfoldersignerassociationstatus'] = undefined;


// Implement EzsigndocumentResponseCompound interface:
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentResponseCompound.prototype['fkiEzsignfolderID'] = undefined;
/**
 * The maximum date and time at which the Ezsigndocument can be signed.
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
 * The unique ID of the Ezsigndocument
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
/**
 * The total number of steps in the form filling phase
 * @member {Number} iEzsigndocumentStepformtotal
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentStepformtotal'] = undefined;
/**
 * The current step in the form filling phase
 * @member {Number} iEzsigndocumentStepformcurrent
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentStepformcurrent'] = undefined;
/**
 * The total number of steps in the signature filling phase
 * @member {Number} iEzsigndocumentStepsignaturetotal
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentStepsignaturetotal'] = undefined;
/**
 * The current step in the signature phase
 * @member {Number} iEzsigndocumentStepsignatureCurrent
 */
EzsigndocumentResponseCompound.prototype['iEzsigndocumentStepsignatureCurrent'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} a_objEzsignfoldersignerassociationstatus
 */
EzsigndocumentResponseCompound.prototype['a_objEzsignfoldersignerassociationstatus'] = undefined;




export default EzsigndocumentGetObjectV1ResponseMPayload;

