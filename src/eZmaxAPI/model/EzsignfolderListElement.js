/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsignfolderStep from './FieldEEzsignfolderStep';
import FieldEEzsignfoldertypePrivacylevel from './FieldEEzsignfoldertypePrivacylevel';

/**
 * The EzsignfolderListElement model module.
 * @module eZmaxAPI/model/EzsignfolderListElement
 * @version 1.1.16
 */
class EzsignfolderListElement {
    /**
     * Constructs a new <code>EzsignfolderListElement</code>.
     * An Ezsignfolder List Element
     * @alias module:eZmaxAPI/model/EzsignfolderListElement
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param eEzsignfoldertypePrivacylevel {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} 
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param eEzsignfolderStep {module:eZmaxAPI/model/FieldEEzsignfolderStep} 
     * @param dtCreatedDate {String} The date and time at which the object was created
     * @param iEzsigndocument {Number} The total number of Ezsigndocument in the folder
     * @param iEzsigndocumentEdm {Number} The total number of Ezsigndocument in the folder that were saved in the edm system
     * @param iEzsignsignature {Number} The total number of signature blocks in all Ezsigndocuments in the folder
     * @param iEzsignsignatureSigned {Number} The total number of already signed signature blocks in all Ezsigndocuments in the folder
     */
    constructor(pkiEzsignfolderID, fkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, iEzsigndocument, iEzsigndocumentEdm, iEzsignsignature, iEzsignsignatureSigned) { 
        
        EzsignfolderListElement.initialize(this, pkiEzsignfolderID, fkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, iEzsigndocument, iEzsigndocumentEdm, iEzsignsignature, iEzsignsignatureSigned);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, fkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignfolderDescription, eEzsignfolderStep, dtCreatedDate, iEzsigndocument, iEzsigndocumentEdm, iEzsignsignature, iEzsignsignatureSigned) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['eEzsignfolderStep'] = eEzsignfolderStep;
        obj['dtCreatedDate'] = dtCreatedDate;
        obj['iEzsigndocument'] = iEzsigndocument;
        obj['iEzsigndocumentEdm'] = iEzsigndocumentEdm;
        obj['iEzsignsignature'] = iEzsignsignature;
        obj['iEzsignsignatureSigned'] = iEzsignsignatureSigned;
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
            if (data.hasOwnProperty('eEzsignfoldertypePrivacylevel')) {
                obj['eEzsignfoldertypePrivacylevel'] = FieldEEzsignfoldertypePrivacylevel.constructFromObject(data['eEzsignfoldertypePrivacylevel']);
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
                obj['dtEzsignfolderSentdate'] = ApiClient.convertToType(data['dtEzsignfolderSentdate'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderDuedate')) {
                obj['dtEzsignfolderDuedate'] = ApiClient.convertToType(data['dtEzsignfolderDuedate'], 'String');
            }
            if (data.hasOwnProperty('iEzsigndocument')) {
                obj['iEzsigndocument'] = ApiClient.convertToType(data['iEzsigndocument'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentEdm')) {
                obj['iEzsigndocumentEdm'] = ApiClient.convertToType(data['iEzsigndocumentEdm'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignature')) {
                obj['iEzsignsignature'] = ApiClient.convertToType(data['iEzsignsignature'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureSigned')) {
                obj['iEzsignsignatureSigned'] = ApiClient.convertToType(data['iEzsignsignatureSigned'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
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
     * minimum: 0
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
     * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel}
     */
    getEEzsignfoldertypePrivacylevel() {
        return this.eEzsignfoldertypePrivacylevel;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
     */
    setEEzsignfoldertypePrivacylevel(eEzsignfoldertypePrivacylevel) {
        this['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
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
     * Returns The date and time at which the Ezsignfolder was sent the last time.
     * @return {String}
     */
    getDtEzsignfolderSentdate() {
        return this.dtEzsignfolderSentdate;
    }

    /**
     * Sets The date and time at which the Ezsignfolder was sent the last time.
     * @param {String} dtEzsignfolderSentdate The date and time at which the Ezsignfolder was sent the last time.
     */
    setDtEzsignfolderSentdate(dtEzsignfolderSentdate) {
        this['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
    }
/**
     * Returns The maximum date and time at which the Ezsignfolder can be signed.
     * @return {String}
     */
    getDtEzsignfolderDuedate() {
        return this.dtEzsignfolderDuedate;
    }

    /**
     * Sets The maximum date and time at which the Ezsignfolder can be signed.
     * @param {String} dtEzsignfolderDuedate The maximum date and time at which the Ezsignfolder can be signed.
     */
    setDtEzsignfolderDuedate(dtEzsignfolderDuedate) {
        this['dtEzsignfolderDuedate'] = dtEzsignfolderDuedate;
    }
/**
     * Returns The total number of Ezsigndocument in the folder
     * @return {Number}
     */
    getIEzsigndocument() {
        return this.iEzsigndocument;
    }

    /**
     * Sets The total number of Ezsigndocument in the folder
     * @param {Number} iEzsigndocument The total number of Ezsigndocument in the folder
     */
    setIEzsigndocument(iEzsigndocument) {
        this['iEzsigndocument'] = iEzsigndocument;
    }
/**
     * Returns The total number of Ezsigndocument in the folder that were saved in the edm system
     * @return {Number}
     */
    getIEzsigndocumentEdm() {
        return this.iEzsigndocumentEdm;
    }

    /**
     * Sets The total number of Ezsigndocument in the folder that were saved in the edm system
     * @param {Number} iEzsigndocumentEdm The total number of Ezsigndocument in the folder that were saved in the edm system
     */
    setIEzsigndocumentEdm(iEzsigndocumentEdm) {
        this['iEzsigndocumentEdm'] = iEzsigndocumentEdm;
    }
/**
     * Returns The total number of signature blocks in all Ezsigndocuments in the folder
     * @return {Number}
     */
    getIEzsignsignature() {
        return this.iEzsignsignature;
    }

    /**
     * Sets The total number of signature blocks in all Ezsigndocuments in the folder
     * @param {Number} iEzsignsignature The total number of signature blocks in all Ezsigndocuments in the folder
     */
    setIEzsignsignature(iEzsignsignature) {
        this['iEzsignsignature'] = iEzsignsignature;
    }
/**
     * Returns The total number of already signed signature blocks in all Ezsigndocuments in the folder
     * @return {Number}
     */
    getIEzsignsignatureSigned() {
        return this.iEzsignsignatureSigned;
    }

    /**
     * Sets The total number of already signed signature blocks in all Ezsigndocuments in the folder
     * @param {Number} iEzsignsignatureSigned The total number of already signed signature blocks in all Ezsigndocuments in the folder
     */
    setIEzsignsignatureSigned(iEzsignsignatureSigned) {
        this['iEzsignsignatureSigned'] = iEzsignsignatureSigned;
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
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsignfolderListElement.prototype['eEzsignfoldertypePrivacylevel'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignfolderListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * The description of the Ezsignfolder
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
 * The date and time at which the Ezsignfolder was sent the last time.
 * @member {String} dtEzsignfolderSentdate
 */
EzsignfolderListElement.prototype['dtEzsignfolderSentdate'] = undefined;

/**
 * The maximum date and time at which the Ezsignfolder can be signed.
 * @member {String} dtEzsignfolderDuedate
 */
EzsignfolderListElement.prototype['dtEzsignfolderDuedate'] = undefined;

/**
 * The total number of Ezsigndocument in the folder
 * @member {Number} iEzsigndocument
 */
EzsignfolderListElement.prototype['iEzsigndocument'] = undefined;

/**
 * The total number of Ezsigndocument in the folder that were saved in the edm system
 * @member {Number} iEzsigndocumentEdm
 */
EzsignfolderListElement.prototype['iEzsigndocumentEdm'] = undefined;

/**
 * The total number of signature blocks in all Ezsigndocuments in the folder
 * @member {Number} iEzsignsignature
 */
EzsignfolderListElement.prototype['iEzsignsignature'] = undefined;

/**
 * The total number of already signed signature blocks in all Ezsigndocuments in the folder
 * @member {Number} iEzsignsignatureSigned
 */
EzsignfolderListElement.prototype['iEzsignsignatureSigned'] = undefined;






export default EzsignfolderListElement;

