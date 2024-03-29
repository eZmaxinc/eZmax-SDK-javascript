/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderRequest from './EzsignfolderRequest';
import FieldEEzsignfolderSendreminderfrequency from './FieldEEzsignfolderSendreminderfrequency';

/**
 * The EzsignfolderRequestCompound model module.
 * @module eZmaxAPI/model/EzsignfolderRequestCompound
 * @version 1.1.18
 */
class EzsignfolderRequestCompound {
    /**
     * Constructs a new <code>EzsignfolderRequestCompound</code>.
     * An Ezsignfolder Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignfolderRequestCompound
     * @implements module:eZmaxAPI/model/EzsignfolderRequest
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param tEzsignfolderNote {String} Note about the Ezsignfolder
     * @param eEzsignfolderSendreminderfrequency {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} 
     */
    constructor(fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency) { 
        EzsignfolderRequest.initialize(this, fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency);
        EzsignfolderRequestCompound.initialize(this, fkiEzsignfoldertypeID, sEzsignfolderDescription, tEzsignfolderNote, eEzsignfolderSendreminderfrequency);
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
     * Constructs a <code>EzsignfolderRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderRequestCompound} The populated <code>EzsignfolderRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderRequestCompound();
            EzsignfolderRequest.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('sEzsignfolderExternalid')) {
                obj['sEzsignfolderExternalid'] = ApiClient.convertToType(data['sEzsignfolderExternalid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignfolderDescription'] && !(typeof data['sEzsignfolderDescription'] === 'string' || data['sEzsignfolderDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfolderDescription` to be a primitive type in the JSON string but got " + data['sEzsignfolderDescription']);
        }
        // ensure the json data is a string
        if (data['tEzsignfolderNote'] && !(typeof data['tEzsignfolderNote'] === 'string' || data['tEzsignfolderNote'] instanceof String)) {
            throw new Error("Expected the field `tEzsignfolderNote` to be a primitive type in the JSON string but got " + data['tEzsignfolderNote']);
        }
        // ensure the json data is a string
        if (data['sEzsignfolderExternalid'] && !(typeof data['sEzsignfolderExternalid'] === 'string' || data['sEzsignfolderExternalid'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfolderExternalid` to be a primitive type in the JSON string but got " + data['sEzsignfolderExternalid']);
        }

        return true;
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
/**
     * Returns This field can be used to store an External ID from the client's system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format. 
     * @return {String}
     */
    getSEzsignfolderExternalid() {
        return this.sEzsignfolderExternalid;
    }

    /**
     * Sets This field can be used to store an External ID from the client's system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format. 
     * @param {String} sEzsignfolderExternalid This field can be used to store an External ID from the client's system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format. 
     */
    setSEzsignfolderExternalid(sEzsignfolderExternalid) {
        this['sEzsignfolderExternalid'] = sEzsignfolderExternalid;
    }

}

EzsignfolderRequestCompound.RequiredProperties = ["fkiEzsignfoldertypeID", "sEzsignfolderDescription", "tEzsignfolderNote", "eEzsignfolderSendreminderfrequency"];

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
EzsignfolderRequestCompound.prototype['pkiEzsignfolderID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignfolderRequestCompound.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server's time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server's time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**|
 * @member {Number} fkiEzsigntsarequirementID
 */
EzsignfolderRequestCompound.prototype['fkiEzsigntsarequirementID'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
EzsignfolderRequestCompound.prototype['sEzsignfolderDescription'] = undefined;

/**
 * Note about the Ezsignfolder
 * @member {String} tEzsignfolderNote
 */
EzsignfolderRequestCompound.prototype['tEzsignfolderNote'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderSendreminderfrequency} eEzsignfolderSendreminderfrequency
 */
EzsignfolderRequestCompound.prototype['eEzsignfolderSendreminderfrequency'] = undefined;

/**
 * This field can be used to store an External ID from the client's system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format. 
 * @member {String} sEzsignfolderExternalid
 */
EzsignfolderRequestCompound.prototype['sEzsignfolderExternalid'] = undefined;


// Implement EzsignfolderRequest interface:
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
/**
 * This field can be used to store an External ID from the client's system.  Anything can be stored in this field, it will never be evaluated by the eZmax system and will be returned AS-IS.  To store multiple values, consider using a JSON formatted structure, a URL encoded string, a CSV or any other custom format. 
 * @member {String} sEzsignfolderExternalid
 */
EzsignfolderRequest.prototype['sEzsignfolderExternalid'] = undefined;




export default EzsignfolderRequestCompound;

