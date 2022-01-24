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
import CommonAudit from './CommonAudit';
import FieldEEzsignfolderSendreminderfrequency from './FieldEEzsignfolderSendreminderfrequency';
import FieldEEzsignfolderStep from './FieldEEzsignfolderStep';

/**
 * The EzsignfolderResponse model module.
 * @module eZmaxAPI/model/EzsignfolderResponse
 * @version 1.1.4
 */
class EzsignfolderResponse {
    /**
     * Constructs a new <code>EzsignfolderResponse</code>.
     * An Ezsignfolder Object
     * @alias module:eZmaxAPI/model/EzsignfolderResponse
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param fkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param sBillingentityinternalDescriptionX {String} The description of the Billingentityinternal in the language of the requester
     * @param fkiEzsigntsarequirementID {Number} The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     * @param sEzsigntsarequirementDescriptionX {String} The description of the Ezsigntsarequirement in the language of the requester
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param tEzsignfolderNote {String} Somes extra notes about the eZsign Folder
     * @param eEzsignfolderSendreminderfrequency {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} 
     * @param dtEzsignfolderDuedate {String} The maximum date and time at which the Ezsignfolder can be signed.
     * @param dtEzsignfolderSentdate {String} The date and time at which the Ezsign folder was sent the last time.
     * @param dtEzsignfolderScheduledarchive {String} The scheduled date and time at which the Ezsignfolder should be archived.
     * @param dtEzsignfolderScheduleddestruction {String} The scheduled date and time at which the Ezsignfolder should be Destroyed.
     * @param eEzsignfolderStep {module:eZmaxAPI/model/FieldEEzsignfolderStep} 
     * @param dtEzsignfolderClose {String} The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzsigntsarequirementID, sEzsigntsarequirementDescriptionX, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, dtEzsignfolderDuedate, dtEzsignfolderSentdate, dtEzsignfolderScheduledarchive, dtEzsignfolderScheduleddestruction, eEzsignfolderStep, dtEzsignfolderClose, objAudit) { 
        
        EzsignfolderResponse.initialize(this, pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzsigntsarequirementID, sEzsigntsarequirementDescriptionX, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, dtEzsignfolderDuedate, dtEzsignfolderSentdate, dtEzsignfolderScheduledarchive, dtEzsignfolderScheduleddestruction, eEzsignfolderStep, dtEzsignfolderClose, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, fkiEzsignfoldertypeID, sEzsignfoldertypeNameX, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzsigntsarequirementID, sEzsigntsarequirementDescriptionX, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, dtEzsignfolderDuedate, dtEzsignfolderSentdate, dtEzsignfolderScheduledarchive, dtEzsignfolderScheduleddestruction, eEzsignfolderStep, dtEzsignfolderClose, objAudit) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
        obj['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
        obj['fkiEzsigntsarequirementID'] = fkiEzsigntsarequirementID;
        obj['sEzsigntsarequirementDescriptionX'] = sEzsigntsarequirementDescriptionX;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['tEzsignfolderNote'] = tEzsignfolderNote;
        obj['eEzsignfolderSendreminderfrequency'] = eEzsignfolderSendreminderfrequency;
        obj['dtEzsignfolderDuedate'] = dtEzsignfolderDuedate;
        obj['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
        obj['dtEzsignfolderScheduledarchive'] = dtEzsignfolderScheduledarchive;
        obj['dtEzsignfolderScheduleddestruction'] = dtEzsignfolderScheduleddestruction;
        obj['eEzsignfolderStep'] = eEzsignfolderStep;
        obj['dtEzsignfolderClose'] = dtEzsignfolderClose;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>EzsignfolderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderResponse} The populated <code>EzsignfolderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderResponse();

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('fkiBillingentityinternalID')) {
                obj['fkiBillingentityinternalID'] = ApiClient.convertToType(data['fkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityinternalDescriptionX')) {
                obj['sBillingentityinternalDescriptionX'] = ApiClient.convertToType(data['sBillingentityinternalDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('fkiEzsigntsarequirementID')) {
                obj['fkiEzsigntsarequirementID'] = ApiClient.convertToType(data['fkiEzsigntsarequirementID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntsarequirementDescriptionX')) {
                obj['sEzsigntsarequirementDescriptionX'] = ApiClient.convertToType(data['sEzsigntsarequirementDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfolderDescription')) {
                obj['sEzsignfolderDescription'] = ApiClient.convertToType(data['sEzsignfolderDescription'], 'String');
            }
            if (data.hasOwnProperty('tEzsignfolderNote')) {
                obj['tEzsignfolderNote'] = ApiClient.convertToType(data['tEzsignfolderNote'], 'String');
            }
            if (data.hasOwnProperty('eEzsignfolderSendreminderfrequency')) {
                obj['eEzsignfolderSendreminderfrequency'] = FieldEEzsignfolderSendreminderfrequency.constructFromObject(data['eEzsignfolderSendreminderfrequency']);
            }
            if (data.hasOwnProperty('dtEzsignfolderDuedate')) {
                obj['dtEzsignfolderDuedate'] = ApiClient.convertToType(data['dtEzsignfolderDuedate'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderSentdate')) {
                obj['dtEzsignfolderSentdate'] = ApiClient.convertToType(data['dtEzsignfolderSentdate'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderScheduledarchive')) {
                obj['dtEzsignfolderScheduledarchive'] = ApiClient.convertToType(data['dtEzsignfolderScheduledarchive'], 'String');
            }
            if (data.hasOwnProperty('dtEzsignfolderScheduleddestruction')) {
                obj['dtEzsignfolderScheduleddestruction'] = ApiClient.convertToType(data['dtEzsignfolderScheduleddestruction'], 'String');
            }
            if (data.hasOwnProperty('eEzsignfolderStep')) {
                obj['eEzsignfolderStep'] = FieldEEzsignfolderStep.constructFromObject(data['eEzsignfolderStep']);
            }
            if (data.hasOwnProperty('dtEzsignfolderClose')) {
                obj['dtEzsignfolderClose'] = ApiClient.convertToType(data['dtEzsignfolderClose'], 'String');
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
     * Returns The unique ID of the Billingentityinternal.
     * @return {Number}
     */
    getFkiBillingentityinternalID() {
        return this.fkiBillingentityinternalID;
    }

    /**
     * Sets The unique ID of the Billingentityinternal.
     * @param {Number} fkiBillingentityinternalID The unique ID of the Billingentityinternal.
     */
    setFkiBillingentityinternalID(fkiBillingentityinternalID) {
        this['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
    }
/**
     * Returns The description of the Billingentityinternal in the language of the requester
     * @return {String}
     */
    getSBillingentityinternalDescriptionX() {
        return this.sBillingentityinternalDescriptionX;
    }

    /**
     * Sets The description of the Billingentityinternal in the language of the requester
     * @param {String} sBillingentityinternalDescriptionX The description of the Billingentityinternal in the language of the requester
     */
    setSBillingentityinternalDescriptionX(sBillingentityinternalDescriptionX) {
        this['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
    }
/**
     * Returns The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     * minimum: 1
     * maximum: 3
     * @return {Number}
     */
    getFkiEzsigntsarequirementID() {
        return this.fkiEzsigntsarequirementID;
    }

    /**
     * Sets The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     * @param {Number} fkiEzsigntsarequirementID The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     */
    setFkiEzsigntsarequirementID(fkiEzsigntsarequirementID) {
        this['fkiEzsigntsarequirementID'] = fkiEzsigntsarequirementID;
    }
/**
     * Returns The description of the Ezsigntsarequirement in the language of the requester
     * @return {String}
     */
    getSEzsigntsarequirementDescriptionX() {
        return this.sEzsigntsarequirementDescriptionX;
    }

    /**
     * Sets The description of the Ezsigntsarequirement in the language of the requester
     * @param {String} sEzsigntsarequirementDescriptionX The description of the Ezsigntsarequirement in the language of the requester
     */
    setSEzsigntsarequirementDescriptionX(sEzsigntsarequirementDescriptionX) {
        this['sEzsigntsarequirementDescriptionX'] = sEzsigntsarequirementDescriptionX;
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
     * Returns Somes extra notes about the eZsign Folder
     * @return {String}
     */
    getTEzsignfolderNote() {
        return this.tEzsignfolderNote;
    }

    /**
     * Sets Somes extra notes about the eZsign Folder
     * @param {String} tEzsignfolderNote Somes extra notes about the eZsign Folder
     */
    setTEzsignfolderNote(tEzsignfolderNote) {
        this['tEzsignfolderNote'] = tEzsignfolderNote;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency}
     */
    getEEzsignfolderSendreminderfrequency() {
        return this.eEzsignfolderSendreminderfrequency;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} eEzsignfolderSendreminderfrequency
     */
    setEEzsignfolderSendreminderfrequency(eEzsignfolderSendreminderfrequency) {
        this['eEzsignfolderSendreminderfrequency'] = eEzsignfolderSendreminderfrequency;
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
     * Returns The date and time at which the Ezsign folder was sent the last time.
     * @return {String}
     */
    getDtEzsignfolderSentdate() {
        return this.dtEzsignfolderSentdate;
    }

    /**
     * Sets The date and time at which the Ezsign folder was sent the last time.
     * @param {String} dtEzsignfolderSentdate The date and time at which the Ezsign folder was sent the last time.
     */
    setDtEzsignfolderSentdate(dtEzsignfolderSentdate) {
        this['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
    }
/**
     * Returns The scheduled date and time at which the Ezsignfolder should be archived.
     * @return {String}
     */
    getDtEzsignfolderScheduledarchive() {
        return this.dtEzsignfolderScheduledarchive;
    }

    /**
     * Sets The scheduled date and time at which the Ezsignfolder should be archived.
     * @param {String} dtEzsignfolderScheduledarchive The scheduled date and time at which the Ezsignfolder should be archived.
     */
    setDtEzsignfolderScheduledarchive(dtEzsignfolderScheduledarchive) {
        this['dtEzsignfolderScheduledarchive'] = dtEzsignfolderScheduledarchive;
    }
/**
     * Returns The scheduled date and time at which the Ezsignfolder should be Destroyed.
     * @return {String}
     */
    getDtEzsignfolderScheduleddestruction() {
        return this.dtEzsignfolderScheduleddestruction;
    }

    /**
     * Sets The scheduled date and time at which the Ezsignfolder should be Destroyed.
     * @param {String} dtEzsignfolderScheduleddestruction The scheduled date and time at which the Ezsignfolder should be Destroyed.
     */
    setDtEzsignfolderScheduleddestruction(dtEzsignfolderScheduleddestruction) {
        this['dtEzsignfolderScheduleddestruction'] = dtEzsignfolderScheduleddestruction;
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
     * Returns The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @return {String}
     */
    getDtEzsignfolderClose() {
        return this.dtEzsignfolderClose;
    }

    /**
     * Sets The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @param {String} dtEzsignfolderClose The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     */
    setDtEzsignfolderClose(dtEzsignfolderClose) {
        this['dtEzsignfolderClose'] = dtEzsignfolderClose;
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
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderResponse.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignfolderResponse.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignfolderResponse.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
EzsignfolderResponse.prototype['fkiBillingentityinternalID'] = undefined;

/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
EzsignfolderResponse.prototype['sBillingentityinternalDescriptionX'] = undefined;

/**
 * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
 * @member {Number} fkiEzsigntsarequirementID
 */
EzsignfolderResponse.prototype['fkiEzsigntsarequirementID'] = undefined;

/**
 * The description of the Ezsigntsarequirement in the language of the requester
 * @member {String} sEzsigntsarequirementDescriptionX
 */
EzsignfolderResponse.prototype['sEzsigntsarequirementDescriptionX'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderResponse.prototype['sEzsignfolderDescription'] = undefined;

/**
 * Somes extra notes about the eZsign Folder
 * @member {String} tEzsignfolderNote
 */
EzsignfolderResponse.prototype['tEzsignfolderNote'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} eEzsignfolderSendreminderfrequency
 */
EzsignfolderResponse.prototype['eEzsignfolderSendreminderfrequency'] = undefined;

/**
 * The maximum date and time at which the Ezsignfolder can be signed.
 * @member {String} dtEzsignfolderDuedate
 */
EzsignfolderResponse.prototype['dtEzsignfolderDuedate'] = undefined;

/**
 * The date and time at which the Ezsign folder was sent the last time.
 * @member {String} dtEzsignfolderSentdate
 */
EzsignfolderResponse.prototype['dtEzsignfolderSentdate'] = undefined;

/**
 * The scheduled date and time at which the Ezsignfolder should be archived.
 * @member {String} dtEzsignfolderScheduledarchive
 */
EzsignfolderResponse.prototype['dtEzsignfolderScheduledarchive'] = undefined;

/**
 * The scheduled date and time at which the Ezsignfolder should be Destroyed.
 * @member {String} dtEzsignfolderScheduleddestruction
 */
EzsignfolderResponse.prototype['dtEzsignfolderScheduleddestruction'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
 */
EzsignfolderResponse.prototype['eEzsignfolderStep'] = undefined;

/**
 * The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
 * @member {String} dtEzsignfolderClose
 */
EzsignfolderResponse.prototype['dtEzsignfolderClose'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignfolderResponse.prototype['objAudit'] = undefined;






export default EzsignfolderResponse;

