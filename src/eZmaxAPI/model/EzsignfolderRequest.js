/**
 * eZmax API Definition (Full)
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
import FieldEEzsignfolderSendreminderfrequency from './FieldEEzsignfolderSendreminderfrequency';

/**
 * The EzsignfolderRequest model module.
 * @module eZmaxAPI/model/EzsignfolderRequest
 * @version 1.1.7
 */
class EzsignfolderRequest {
    /**
     * Constructs a new <code>EzsignfolderRequest</code>.
     * An Ezsignfolder Object
     * @alias module:eZmaxAPI/model/EzsignfolderRequest
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param tEzsignfolderNote {String} Note about the Ezsignfolder
     * @param eEzsignfolderSendreminderfrequency {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} 
     */
    constructor(fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency) { 
        
        EzsignfolderRequest.initialize(this, fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency) { 
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['tEzsignfolderNote'] = tEzsignfolderNote;
        obj['eEzsignfolderSendreminderfrequency'] = eEzsignfolderSendreminderfrequency;
    }

    /**
     * Constructs a <code>EzsignfolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderRequest} The populated <code>EzsignfolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderRequest();

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
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
     * Returns Note about the Ezsignfolder
     * @return {String}
     */
    getTEzsignfolderNote() {
        return this.tEzsignfolderNote;
    }

    /**
     * Sets Note about the Ezsignfolder
     * @param {String} tEzsignfolderNote Note about the Ezsignfolder
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

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderRequest.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignfolderRequest.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
 * @member {Number} fkiEzsigntsarequirementID
 */
EzsignfolderRequest.prototype['fkiEzsigntsarequirementID'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderRequest.prototype['sEzsignfolderDescription'] = undefined;

/**
 * Note about the Ezsignfolder
 * @member {String} tEzsignfolderNote
 */
EzsignfolderRequest.prototype['tEzsignfolderNote'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} eEzsignfolderSendreminderfrequency
 */
EzsignfolderRequest.prototype['eEzsignfolderSendreminderfrequency'] = undefined;






export default EzsignfolderRequest;

