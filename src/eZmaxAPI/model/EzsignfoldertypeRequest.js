/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsignfoldertypeDisposal from './FieldEEzsignfoldertypeDisposal';
import FieldEEzsignfoldertypePrivacylevel from './FieldEEzsignfoldertypePrivacylevel';
import FieldEEzsignfoldertypeSendreminderfrequency from './FieldEEzsignfoldertypeSendreminderfrequency';
import MultilingualEzsignfoldertypeName from './MultilingualEzsignfoldertypeName';

/**
 * The EzsignfoldertypeRequest model module.
 * @module eZmaxAPI/model/EzsignfoldertypeRequest
 * @version 1.1.10
 */
class EzsignfoldertypeRequest {
    /**
     * Constructs a new <code>EzsignfoldertypeRequest</code>.
     * A Ezsignfoldertype Object
     * @alias module:eZmaxAPI/model/EzsignfoldertypeRequest
     * @param objEzsignfoldertypeName {module:eZmaxAPI/model/MultilingualEzsignfoldertypeName} 
     * @param fkiBrandingID {Number} The unique ID of the Branding
     * @param eEzsignfoldertypePrivacylevel {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} 
     * @param iEzsignfoldertypeArchivaldays {Number} The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype
     * @param eEzsignfoldertypeDisposal {module:eZmaxAPI/model/FieldEEzsignfoldertypeDisposal} 
     * @param iEzsignfoldertypeDeadlinedays {Number} The number of days to get all Ezsignsignatures
     * @param bEzsignfoldertypeSendattatchmentsigner {Boolean} Whether we send the Ezsigndocument and the proof as attachment in the email
     * @param bEzsignfoldertypeSendsignedtodocumentowner {Boolean} Whether we send the signed Ezsigndocument to the Ezsigndocument's owner
     * @param bEzsignfoldertypeSendsignedtofolderowner {Boolean} Whether we send the signed Ezsigndocument to the Ezsignfolder's owner
     * @param bEzsignfoldertypeSendsignedtocolleague {Boolean} Whether we send the signed Ezsigndocument to the colleagues
     * @param bEzsignfoldertypeSendsummarytodocumentowner {Boolean} Whether we send the summary to the Ezsigndocument's owner
     * @param bEzsignfoldertypeSendsummarytofolderowner {Boolean} Whether we send the summary to the Ezsignfolder's owner
     * @param bEzsignfoldertypeSendsummarytocolleague {Boolean} Whether we send the summary to the colleagues
     * @param bEzsignfoldertypeIsactive {Boolean} Whether the Ezsignfoldertype is active or not
     */
    constructor(objEzsignfoldertypeName, fkiBrandingID, eEzsignfoldertypePrivacylevel, iEzsignfoldertypeArchivaldays, eEzsignfoldertypeDisposal, iEzsignfoldertypeDeadlinedays, bEzsignfoldertypeSendattatchmentsigner, bEzsignfoldertypeSendsignedtodocumentowner, bEzsignfoldertypeSendsignedtofolderowner, bEzsignfoldertypeSendsignedtocolleague, bEzsignfoldertypeSendsummarytodocumentowner, bEzsignfoldertypeSendsummarytofolderowner, bEzsignfoldertypeSendsummarytocolleague, bEzsignfoldertypeIsactive) { 
        
        EzsignfoldertypeRequest.initialize(this, objEzsignfoldertypeName, fkiBrandingID, eEzsignfoldertypePrivacylevel, iEzsignfoldertypeArchivaldays, eEzsignfoldertypeDisposal, iEzsignfoldertypeDeadlinedays, bEzsignfoldertypeSendattatchmentsigner, bEzsignfoldertypeSendsignedtodocumentowner, bEzsignfoldertypeSendsignedtofolderowner, bEzsignfoldertypeSendsignedtocolleague, bEzsignfoldertypeSendsummarytodocumentowner, bEzsignfoldertypeSendsummarytofolderowner, bEzsignfoldertypeSendsummarytocolleague, bEzsignfoldertypeIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfoldertypeName, fkiBrandingID, eEzsignfoldertypePrivacylevel, iEzsignfoldertypeArchivaldays, eEzsignfoldertypeDisposal, iEzsignfoldertypeDeadlinedays, bEzsignfoldertypeSendattatchmentsigner, bEzsignfoldertypeSendsignedtodocumentowner, bEzsignfoldertypeSendsignedtofolderowner, bEzsignfoldertypeSendsignedtocolleague, bEzsignfoldertypeSendsummarytodocumentowner, bEzsignfoldertypeSendsummarytofolderowner, bEzsignfoldertypeSendsummarytocolleague, bEzsignfoldertypeIsactive) { 
        obj['objEzsignfoldertypeName'] = objEzsignfoldertypeName;
        obj['fkiBrandingID'] = fkiBrandingID;
        obj['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
        obj['iEzsignfoldertypeArchivaldays'] = iEzsignfoldertypeArchivaldays;
        obj['eEzsignfoldertypeDisposal'] = eEzsignfoldertypeDisposal;
        obj['iEzsignfoldertypeDeadlinedays'] = iEzsignfoldertypeDeadlinedays;
        obj['bEzsignfoldertypeSendattatchmentsigner'] = bEzsignfoldertypeSendattatchmentsigner;
        obj['bEzsignfoldertypeSendsignedtodocumentowner'] = bEzsignfoldertypeSendsignedtodocumentowner;
        obj['bEzsignfoldertypeSendsignedtofolderowner'] = bEzsignfoldertypeSendsignedtofolderowner;
        obj['bEzsignfoldertypeSendsignedtocolleague'] = bEzsignfoldertypeSendsignedtocolleague;
        obj['bEzsignfoldertypeSendsummarytodocumentowner'] = bEzsignfoldertypeSendsummarytodocumentowner;
        obj['bEzsignfoldertypeSendsummarytofolderowner'] = bEzsignfoldertypeSendsummarytofolderowner;
        obj['bEzsignfoldertypeSendsummarytocolleague'] = bEzsignfoldertypeSendsummarytocolleague;
        obj['bEzsignfoldertypeIsactive'] = bEzsignfoldertypeIsactive;
    }

    /**
     * Constructs a <code>EzsignfoldertypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeRequest} The populated <code>EzsignfoldertypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeRequest();

            if (data.hasOwnProperty('pkiEzsignfoldertypeID')) {
                obj['pkiEzsignfoldertypeID'] = ApiClient.convertToType(data['pkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('objEzsignfoldertypeName')) {
                obj['objEzsignfoldertypeName'] = MultilingualEzsignfoldertypeName.constructFromObject(data['objEzsignfoldertypeName']);
            }
            if (data.hasOwnProperty('fkiBrandingID')) {
                obj['fkiBrandingID'] = ApiClient.convertToType(data['fkiBrandingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBillingentityinternalID')) {
                obj['fkiBillingentityinternalID'] = ApiClient.convertToType(data['fkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupID')) {
                obj['fkiUsergroupID'] = ApiClient.convertToType(data['fkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupIDRestricted')) {
                obj['fkiUsergroupIDRestricted'] = ApiClient.convertToType(data['fkiUsergroupIDRestricted'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntsarequirementID')) {
                obj['fkiEzsigntsarequirementID'] = ApiClient.convertToType(data['fkiEzsigntsarequirementID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailAddressSigned')) {
                obj['sEmailAddressSigned'] = ApiClient.convertToType(data['sEmailAddressSigned'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddressSummary')) {
                obj['sEmailAddressSummary'] = ApiClient.convertToType(data['sEmailAddressSummary'], 'String');
            }
            if (data.hasOwnProperty('eEzsignfoldertypePrivacylevel')) {
                obj['eEzsignfoldertypePrivacylevel'] = FieldEEzsignfoldertypePrivacylevel.constructFromObject(data['eEzsignfoldertypePrivacylevel']);
            }
            if (data.hasOwnProperty('eEzsignfoldertypeSendreminderfrequency')) {
                obj['eEzsignfoldertypeSendreminderfrequency'] = FieldEEzsignfoldertypeSendreminderfrequency.constructFromObject(data['eEzsignfoldertypeSendreminderfrequency']);
            }
            if (data.hasOwnProperty('iEzsignfoldertypeArchivaldays')) {
                obj['iEzsignfoldertypeArchivaldays'] = ApiClient.convertToType(data['iEzsignfoldertypeArchivaldays'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignfoldertypeDisposal')) {
                obj['eEzsignfoldertypeDisposal'] = FieldEEzsignfoldertypeDisposal.constructFromObject(data['eEzsignfoldertypeDisposal']);
            }
            if (data.hasOwnProperty('iEzsignfoldertypeDisposaldays')) {
                obj['iEzsignfoldertypeDisposaldays'] = ApiClient.convertToType(data['iEzsignfoldertypeDisposaldays'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignfoldertypeDeadlinedays')) {
                obj['iEzsignfoldertypeDeadlinedays'] = ApiClient.convertToType(data['iEzsignfoldertypeDeadlinedays'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendattatchmentsigner')) {
                obj['bEzsignfoldertypeSendattatchmentsigner'] = ApiClient.convertToType(data['bEzsignfoldertypeSendattatchmentsigner'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsignedtodocumentowner')) {
                obj['bEzsignfoldertypeSendsignedtodocumentowner'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsignedtodocumentowner'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsignedtofolderowner')) {
                obj['bEzsignfoldertypeSendsignedtofolderowner'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsignedtofolderowner'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsignedtofullgroup')) {
                obj['bEzsignfoldertypeSendsignedtofullgroup'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsignedtofullgroup'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsignedtolimitedgroup')) {
                obj['bEzsignfoldertypeSendsignedtolimitedgroup'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsignedtolimitedgroup'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsignedtocolleague')) {
                obj['bEzsignfoldertypeSendsignedtocolleague'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsignedtocolleague'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsummarytodocumentowner')) {
                obj['bEzsignfoldertypeSendsummarytodocumentowner'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsummarytodocumentowner'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsummarytofolderowner')) {
                obj['bEzsignfoldertypeSendsummarytofolderowner'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsummarytofolderowner'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsummarytofullgroup')) {
                obj['bEzsignfoldertypeSendsummarytofullgroup'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsummarytofullgroup'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsummarytolimitedgroup')) {
                obj['bEzsignfoldertypeSendsummarytolimitedgroup'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsummarytolimitedgroup'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeSendsummarytocolleague')) {
                obj['bEzsignfoldertypeSendsummarytocolleague'] = ApiClient.convertToType(data['bEzsignfoldertypeSendsummarytocolleague'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeIsactive')) {
                obj['bEzsignfoldertypeIsactive'] = ApiClient.convertToType(data['bEzsignfoldertypeIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfoldertype.
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignfoldertypeID() {
        return this.pkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.
     * @param {Number} pkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.
     */
    setPkiEzsignfoldertypeID(pkiEzsignfoldertypeID) {
        this['pkiEzsignfoldertypeID'] = pkiEzsignfoldertypeID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualEzsignfoldertypeName}
     */
    getObjEzsignfoldertypeName() {
        return this.objEzsignfoldertypeName;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualEzsignfoldertypeName} objEzsignfoldertypeName
     */
    setObjEzsignfoldertypeName(objEzsignfoldertypeName) {
        this['objEzsignfoldertypeName'] = objEzsignfoldertypeName;
    }
/**
     * Returns The unique ID of the Branding
     * minimum: 0
     * @return {Number}
     */
    getFkiBrandingID() {
        return this.fkiBrandingID;
    }

    /**
     * Sets The unique ID of the Branding
     * @param {Number} fkiBrandingID The unique ID of the Branding
     */
    setFkiBrandingID(fkiBrandingID) {
        this['fkiBrandingID'] = fkiBrandingID;
    }
/**
     * Returns The unique ID of the Billingentityinternal.
     * minimum: 0
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
     * Returns The unique ID of the Usergroup
     * minimum: 0
     * @return {Number}
     */
    getFkiUsergroupID() {
        return this.fkiUsergroupID;
    }

    /**
     * Sets The unique ID of the Usergroup
     * @param {Number} fkiUsergroupID The unique ID of the Usergroup
     */
    setFkiUsergroupID(fkiUsergroupID) {
        this['fkiUsergroupID'] = fkiUsergroupID;
    }
/**
     * Returns The unique ID of the Usergroup
     * minimum: 0
     * @return {Number}
     */
    getFkiUsergroupIDRestricted() {
        return this.fkiUsergroupIDRestricted;
    }

    /**
     * Sets The unique ID of the Usergroup
     * @param {Number} fkiUsergroupIDRestricted The unique ID of the Usergroup
     */
    setFkiUsergroupIDRestricted(fkiUsergroupIDRestricted) {
        this['fkiUsergroupIDRestricted'] = fkiUsergroupIDRestricted;
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
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddressSigned() {
        return this.sEmailAddressSigned;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddressSigned The email address.
     */
    setSEmailAddressSigned(sEmailAddressSigned) {
        this['sEmailAddressSigned'] = sEmailAddressSigned;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddressSummary() {
        return this.sEmailAddressSummary;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddressSummary The email address.
     */
    setSEmailAddressSummary(sEmailAddressSummary) {
        this['sEmailAddressSummary'] = sEmailAddressSummary;
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
     * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypeSendreminderfrequency}
     */
    getEEzsignfoldertypeSendreminderfrequency() {
        return this.eEzsignfoldertypeSendreminderfrequency;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfoldertypeSendreminderfrequency} eEzsignfoldertypeSendreminderfrequency
     */
    setEEzsignfoldertypeSendreminderfrequency(eEzsignfoldertypeSendreminderfrequency) {
        this['eEzsignfoldertypeSendreminderfrequency'] = eEzsignfoldertypeSendreminderfrequency;
    }
/**
     * Returns The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype
     * minimum: 0
     * maximum: 180
     * @return {Number}
     */
    getIEzsignfoldertypeArchivaldays() {
        return this.iEzsignfoldertypeArchivaldays;
    }

    /**
     * Sets The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype
     * @param {Number} iEzsignfoldertypeArchivaldays The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype
     */
    setIEzsignfoldertypeArchivaldays(iEzsignfoldertypeArchivaldays) {
        this['iEzsignfoldertypeArchivaldays'] = iEzsignfoldertypeArchivaldays;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypeDisposal}
     */
    getEEzsignfoldertypeDisposal() {
        return this.eEzsignfoldertypeDisposal;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfoldertypeDisposal} eEzsignfoldertypeDisposal
     */
    setEEzsignfoldertypeDisposal(eEzsignfoldertypeDisposal) {
        this['eEzsignfoldertypeDisposal'] = eEzsignfoldertypeDisposal;
    }
/**
     * Returns The number of days after the archival before the disposal of the Ezsignfolder
     * minimum: 0
     * maximum: 9999
     * @return {Number}
     */
    getIEzsignfoldertypeDisposaldays() {
        return this.iEzsignfoldertypeDisposaldays;
    }

    /**
     * Sets The number of days after the archival before the disposal of the Ezsignfolder
     * @param {Number} iEzsignfoldertypeDisposaldays The number of days after the archival before the disposal of the Ezsignfolder
     */
    setIEzsignfoldertypeDisposaldays(iEzsignfoldertypeDisposaldays) {
        this['iEzsignfoldertypeDisposaldays'] = iEzsignfoldertypeDisposaldays;
    }
/**
     * Returns The number of days to get all Ezsignsignatures
     * minimum: 1
     * maximum: 60
     * @return {Number}
     */
    getIEzsignfoldertypeDeadlinedays() {
        return this.iEzsignfoldertypeDeadlinedays;
    }

    /**
     * Sets The number of days to get all Ezsignsignatures
     * @param {Number} iEzsignfoldertypeDeadlinedays The number of days to get all Ezsignsignatures
     */
    setIEzsignfoldertypeDeadlinedays(iEzsignfoldertypeDeadlinedays) {
        this['iEzsignfoldertypeDeadlinedays'] = iEzsignfoldertypeDeadlinedays;
    }
/**
     * Returns Whether we send the Ezsigndocument and the proof as attachment in the email
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendattatchmentsigner() {
        return this.bEzsignfoldertypeSendattatchmentsigner;
    }

    /**
     * Sets Whether we send the Ezsigndocument and the proof as attachment in the email
     * @param {Boolean} bEzsignfoldertypeSendattatchmentsigner Whether we send the Ezsigndocument and the proof as attachment in the email
     */
    setBEzsignfoldertypeSendattatchmentsigner(bEzsignfoldertypeSendattatchmentsigner) {
        this['bEzsignfoldertypeSendattatchmentsigner'] = bEzsignfoldertypeSendattatchmentsigner;
    }
/**
     * Returns Whether we send the signed Ezsigndocument to the Ezsigndocument's owner
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsignedtodocumentowner() {
        return this.bEzsignfoldertypeSendsignedtodocumentowner;
    }

    /**
     * Sets Whether we send the signed Ezsigndocument to the Ezsigndocument's owner
     * @param {Boolean} bEzsignfoldertypeSendsignedtodocumentowner Whether we send the signed Ezsigndocument to the Ezsigndocument's owner
     */
    setBEzsignfoldertypeSendsignedtodocumentowner(bEzsignfoldertypeSendsignedtodocumentowner) {
        this['bEzsignfoldertypeSendsignedtodocumentowner'] = bEzsignfoldertypeSendsignedtodocumentowner;
    }
/**
     * Returns Whether we send the signed Ezsigndocument to the Ezsignfolder's owner
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsignedtofolderowner() {
        return this.bEzsignfoldertypeSendsignedtofolderowner;
    }

    /**
     * Sets Whether we send the signed Ezsigndocument to the Ezsignfolder's owner
     * @param {Boolean} bEzsignfoldertypeSendsignedtofolderowner Whether we send the signed Ezsigndocument to the Ezsignfolder's owner
     */
    setBEzsignfoldertypeSendsignedtofolderowner(bEzsignfoldertypeSendsignedtofolderowner) {
        this['bEzsignfoldertypeSendsignedtofolderowner'] = bEzsignfoldertypeSendsignedtofolderowner;
    }
/**
     * Returns Whether we send the signed Ezsigndocument to the Usergroup that has acces to all Ezsignfolders
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsignedtofullgroup() {
        return this.bEzsignfoldertypeSendsignedtofullgroup;
    }

    /**
     * Sets Whether we send the signed Ezsigndocument to the Usergroup that has acces to all Ezsignfolders
     * @param {Boolean} bEzsignfoldertypeSendsignedtofullgroup Whether we send the signed Ezsigndocument to the Usergroup that has acces to all Ezsignfolders
     */
    setBEzsignfoldertypeSendsignedtofullgroup(bEzsignfoldertypeSendsignedtofullgroup) {
        this['bEzsignfoldertypeSendsignedtofullgroup'] = bEzsignfoldertypeSendsignedtofullgroup;
    }
/**
     * Returns Whether we send the signed Ezsigndocument to the Usergroup that has acces to only their own Ezsignfolders
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsignedtolimitedgroup() {
        return this.bEzsignfoldertypeSendsignedtolimitedgroup;
    }

    /**
     * Sets Whether we send the signed Ezsigndocument to the Usergroup that has acces to only their own Ezsignfolders
     * @param {Boolean} bEzsignfoldertypeSendsignedtolimitedgroup Whether we send the signed Ezsigndocument to the Usergroup that has acces to only their own Ezsignfolders
     */
    setBEzsignfoldertypeSendsignedtolimitedgroup(bEzsignfoldertypeSendsignedtolimitedgroup) {
        this['bEzsignfoldertypeSendsignedtolimitedgroup'] = bEzsignfoldertypeSendsignedtolimitedgroup;
    }
/**
     * Returns Whether we send the signed Ezsigndocument to the colleagues
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsignedtocolleague() {
        return this.bEzsignfoldertypeSendsignedtocolleague;
    }

    /**
     * Sets Whether we send the signed Ezsigndocument to the colleagues
     * @param {Boolean} bEzsignfoldertypeSendsignedtocolleague Whether we send the signed Ezsigndocument to the colleagues
     */
    setBEzsignfoldertypeSendsignedtocolleague(bEzsignfoldertypeSendsignedtocolleague) {
        this['bEzsignfoldertypeSendsignedtocolleague'] = bEzsignfoldertypeSendsignedtocolleague;
    }
/**
     * Returns Whether we send the summary to the Ezsigndocument's owner
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsummarytodocumentowner() {
        return this.bEzsignfoldertypeSendsummarytodocumentowner;
    }

    /**
     * Sets Whether we send the summary to the Ezsigndocument's owner
     * @param {Boolean} bEzsignfoldertypeSendsummarytodocumentowner Whether we send the summary to the Ezsigndocument's owner
     */
    setBEzsignfoldertypeSendsummarytodocumentowner(bEzsignfoldertypeSendsummarytodocumentowner) {
        this['bEzsignfoldertypeSendsummarytodocumentowner'] = bEzsignfoldertypeSendsummarytodocumentowner;
    }
/**
     * Returns Whether we send the summary to the Ezsignfolder's owner
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsummarytofolderowner() {
        return this.bEzsignfoldertypeSendsummarytofolderowner;
    }

    /**
     * Sets Whether we send the summary to the Ezsignfolder's owner
     * @param {Boolean} bEzsignfoldertypeSendsummarytofolderowner Whether we send the summary to the Ezsignfolder's owner
     */
    setBEzsignfoldertypeSendsummarytofolderowner(bEzsignfoldertypeSendsummarytofolderowner) {
        this['bEzsignfoldertypeSendsummarytofolderowner'] = bEzsignfoldertypeSendsummarytofolderowner;
    }
/**
     * Returns Whether we send the summary to the Usergroup that has acces to all Ezsignfolders
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsummarytofullgroup() {
        return this.bEzsignfoldertypeSendsummarytofullgroup;
    }

    /**
     * Sets Whether we send the summary to the Usergroup that has acces to all Ezsignfolders
     * @param {Boolean} bEzsignfoldertypeSendsummarytofullgroup Whether we send the summary to the Usergroup that has acces to all Ezsignfolders
     */
    setBEzsignfoldertypeSendsummarytofullgroup(bEzsignfoldertypeSendsummarytofullgroup) {
        this['bEzsignfoldertypeSendsummarytofullgroup'] = bEzsignfoldertypeSendsummarytofullgroup;
    }
/**
     * Returns Whether we send the summary to the Usergroup that has acces to only their own Ezsignfolders
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsummarytolimitedgroup() {
        return this.bEzsignfoldertypeSendsummarytolimitedgroup;
    }

    /**
     * Sets Whether we send the summary to the Usergroup that has acces to only their own Ezsignfolders
     * @param {Boolean} bEzsignfoldertypeSendsummarytolimitedgroup Whether we send the summary to the Usergroup that has acces to only their own Ezsignfolders
     */
    setBEzsignfoldertypeSendsummarytolimitedgroup(bEzsignfoldertypeSendsummarytolimitedgroup) {
        this['bEzsignfoldertypeSendsummarytolimitedgroup'] = bEzsignfoldertypeSendsummarytolimitedgroup;
    }
/**
     * Returns Whether we send the summary to the colleagues
     * @return {Boolean}
     */
    getBEzsignfoldertypeSendsummarytocolleague() {
        return this.bEzsignfoldertypeSendsummarytocolleague;
    }

    /**
     * Sets Whether we send the summary to the colleagues
     * @param {Boolean} bEzsignfoldertypeSendsummarytocolleague Whether we send the summary to the colleagues
     */
    setBEzsignfoldertypeSendsummarytocolleague(bEzsignfoldertypeSendsummarytocolleague) {
        this['bEzsignfoldertypeSendsummarytocolleague'] = bEzsignfoldertypeSendsummarytocolleague;
    }
/**
     * Returns Whether the Ezsignfoldertype is active or not
     * @return {Boolean}
     */
    getBEzsignfoldertypeIsactive() {
        return this.bEzsignfoldertypeIsactive;
    }

    /**
     * Sets Whether the Ezsignfoldertype is active or not
     * @param {Boolean} bEzsignfoldertypeIsactive Whether the Ezsignfoldertype is active or not
     */
    setBEzsignfoldertypeIsactive(bEzsignfoldertypeIsactive) {
        this['bEzsignfoldertypeIsactive'] = bEzsignfoldertypeIsactive;
    }

}

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} pkiEzsignfoldertypeID
 */
EzsignfoldertypeRequest.prototype['pkiEzsignfoldertypeID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualEzsignfoldertypeName} objEzsignfoldertypeName
 */
EzsignfoldertypeRequest.prototype['objEzsignfoldertypeName'] = undefined;

/**
 * The unique ID of the Branding
 * @member {Number} fkiBrandingID
 */
EzsignfoldertypeRequest.prototype['fkiBrandingID'] = undefined;

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
EzsignfoldertypeRequest.prototype['fkiBillingentityinternalID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
EzsignfoldertypeRequest.prototype['fkiUsergroupID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupIDRestricted
 */
EzsignfoldertypeRequest.prototype['fkiUsergroupIDRestricted'] = undefined;

/**
 * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
 * @member {Number} fkiEzsigntsarequirementID
 */
EzsignfoldertypeRequest.prototype['fkiEzsigntsarequirementID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddressSigned
 */
EzsignfoldertypeRequest.prototype['sEmailAddressSigned'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddressSummary
 */
EzsignfoldertypeRequest.prototype['sEmailAddressSummary'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsignfoldertypeRequest.prototype['eEzsignfoldertypePrivacylevel'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypeSendreminderfrequency} eEzsignfoldertypeSendreminderfrequency
 */
EzsignfoldertypeRequest.prototype['eEzsignfoldertypeSendreminderfrequency'] = undefined;

/**
 * The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype
 * @member {Number} iEzsignfoldertypeArchivaldays
 */
EzsignfoldertypeRequest.prototype['iEzsignfoldertypeArchivaldays'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypeDisposal} eEzsignfoldertypeDisposal
 */
EzsignfoldertypeRequest.prototype['eEzsignfoldertypeDisposal'] = undefined;

/**
 * The number of days after the archival before the disposal of the Ezsignfolder
 * @member {Number} iEzsignfoldertypeDisposaldays
 */
EzsignfoldertypeRequest.prototype['iEzsignfoldertypeDisposaldays'] = undefined;

/**
 * The number of days to get all Ezsignsignatures
 * @member {Number} iEzsignfoldertypeDeadlinedays
 */
EzsignfoldertypeRequest.prototype['iEzsignfoldertypeDeadlinedays'] = undefined;

/**
 * Whether we send the Ezsigndocument and the proof as attachment in the email
 * @member {Boolean} bEzsignfoldertypeSendattatchmentsigner
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendattatchmentsigner'] = undefined;

/**
 * Whether we send the signed Ezsigndocument to the Ezsigndocument's owner
 * @member {Boolean} bEzsignfoldertypeSendsignedtodocumentowner
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsignedtodocumentowner'] = undefined;

/**
 * Whether we send the signed Ezsigndocument to the Ezsignfolder's owner
 * @member {Boolean} bEzsignfoldertypeSendsignedtofolderowner
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsignedtofolderowner'] = undefined;

/**
 * Whether we send the signed Ezsigndocument to the Usergroup that has acces to all Ezsignfolders
 * @member {Boolean} bEzsignfoldertypeSendsignedtofullgroup
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsignedtofullgroup'] = undefined;

/**
 * Whether we send the signed Ezsigndocument to the Usergroup that has acces to only their own Ezsignfolders
 * @member {Boolean} bEzsignfoldertypeSendsignedtolimitedgroup
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsignedtolimitedgroup'] = undefined;

/**
 * Whether we send the signed Ezsigndocument to the colleagues
 * @member {Boolean} bEzsignfoldertypeSendsignedtocolleague
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsignedtocolleague'] = undefined;

/**
 * Whether we send the summary to the Ezsigndocument's owner
 * @member {Boolean} bEzsignfoldertypeSendsummarytodocumentowner
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsummarytodocumentowner'] = undefined;

/**
 * Whether we send the summary to the Ezsignfolder's owner
 * @member {Boolean} bEzsignfoldertypeSendsummarytofolderowner
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsummarytofolderowner'] = undefined;

/**
 * Whether we send the summary to the Usergroup that has acces to all Ezsignfolders
 * @member {Boolean} bEzsignfoldertypeSendsummarytofullgroup
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsummarytofullgroup'] = undefined;

/**
 * Whether we send the summary to the Usergroup that has acces to only their own Ezsignfolders
 * @member {Boolean} bEzsignfoldertypeSendsummarytolimitedgroup
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsummarytolimitedgroup'] = undefined;

/**
 * Whether we send the summary to the colleagues
 * @member {Boolean} bEzsignfoldertypeSendsummarytocolleague
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeSendsummarytocolleague'] = undefined;

/**
 * Whether the Ezsignfoldertype is active or not
 * @member {Boolean} bEzsignfoldertypeIsactive
 */
EzsignfoldertypeRequest.prototype['bEzsignfoldertypeIsactive'] = undefined;






export default EzsignfoldertypeRequest;

