/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.42
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
 * The EzsignfolderResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignfolderResponseAllOf
 * @version 1.0.42
 */
class EzsignfolderResponseAllOf {
    /**
     * Constructs a new <code>EzsignfolderResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfolderResponseAllOf
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     * @param fkiEzsigntsarequirementID {Number} The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
     * @param sEzsignfolderDescription {String} The description of the Ezsign Folder
     * @param tEzsignfolderNote {String} Somes extra notes about the eZsign Folder
     * @param eEzsignfolderSendreminderfrequency {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} 
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param dtEzsignfolderSentdate {String} The date and time at which the Ezsign folder was sent the last time.
     * @param eEzsignfolderStep {module:eZmaxAPI/model/FieldEEzsignfolderStep} 
     * @param dtEzsignfolderClose {String} The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(fkiEzsignfoldertypeID, fkiEzsigntsarequirementID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, pkiEzsignfolderID, dtEzsignfolderSentdate, eEzsignfolderStep, dtEzsignfolderClose, objAudit) { 
        
        EzsignfolderResponseAllOf.initialize(this, fkiEzsignfoldertypeID, fkiEzsigntsarequirementID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, pkiEzsignfolderID, dtEzsignfolderSentdate, eEzsignfolderStep, dtEzsignfolderClose, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldertypeID, fkiEzsigntsarequirementID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency, pkiEzsignfolderID, dtEzsignfolderSentdate, eEzsignfolderStep, dtEzsignfolderClose, objAudit) { 
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiEzsigntsarequirementID'] = fkiEzsigntsarequirementID;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['tEzsignfolderNote'] = tEzsignfolderNote;
        obj['eEzsignfolderSendreminderfrequency'] = eEzsignfolderSendreminderfrequency;
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['dtEzsignfolderSentdate'] = dtEzsignfolderSentdate;
        obj['eEzsignfolderStep'] = eEzsignfolderStep;
        obj['dtEzsignfolderClose'] = dtEzsignfolderClose;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>EzsignfolderResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderResponseAllOf} The populated <code>EzsignfolderResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderResponseAllOf();

            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntsarequirementID')) {
                obj['fkiEzsigntsarequirementID'] = ApiClient.convertToType(data['fkiEzsigntsarequirementID'], 'Number');
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
            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('dtEzsignfolderSentdate')) {
                obj['dtEzsignfolderSentdate'] = ApiClient.convertToType(data['dtEzsignfolderSentdate'], 'String');
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
     * Returns The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     * @return {Number}
     */
    getFkiEzsignfoldertypeID() {
        return this.fkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     * @param {Number} fkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
     */
    setFkiEzsignfoldertypeID(fkiEzsignfoldertypeID) {
        this['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
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
 * The unique ID of the Ezsignfoldertype.    This value can be queried by the API and is also visible in the admin interface.    There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignfolderResponseAllOf.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
 * @member {Number} fkiEzsigntsarequirementID
 */
EzsignfolderResponseAllOf.prototype['fkiEzsigntsarequirementID'] = undefined;

/**
 * The description of the Ezsign Folder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderResponseAllOf.prototype['sEzsignfolderDescription'] = undefined;

/**
 * Somes extra notes about the eZsign Folder
 * @member {String} tEzsignfolderNote
 */
EzsignfolderResponseAllOf.prototype['tEzsignfolderNote'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} eEzsignfolderSendreminderfrequency
 */
EzsignfolderResponseAllOf.prototype['eEzsignfolderSendreminderfrequency'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderResponseAllOf.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The date and time at which the Ezsign folder was sent the last time.
 * @member {String} dtEzsignfolderSentdate
 */
EzsignfolderResponseAllOf.prototype['dtEzsignfolderSentdate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
 */
EzsignfolderResponseAllOf.prototype['eEzsignfolderStep'] = undefined;

/**
 * The date and time at which the folder was closed. Either by applying the last signature or by completing it prematurely.
 * @member {String} dtEzsignfolderClose
 */
EzsignfolderResponseAllOf.prototype['dtEzsignfolderClose'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignfolderResponseAllOf.prototype['objAudit'] = undefined;






export default EzsignfolderResponseAllOf;

