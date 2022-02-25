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
import EzsignbulksendResponseCompound from './EzsignbulksendResponseCompound';

/**
 * The EzsignbulksendGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload
 * @version 1.1.4
 */
class EzsignbulksendGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendGetObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/ezsignbulksend/{pkiEzsignbulksendID}/getObject API Request
     * @alias module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignbulksendResponseCompound
     * @param pkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsignbulksendDescription {String} The description of the Ezsignbulksend
     * @param tEzsignbulksendNote {String} Note about the Ezsignbulksend
     * @param bEzsignbulksendIsactive {Boolean} Whether the Ezsignbulksend is active or not
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendIsactive, objAudit) { 
        EzsignbulksendResponseCompound.initialize(this, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendIsactive, objAudit);
        EzsignbulksendGetObjectV1ResponseMPayload.initialize(this, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendIsactive, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendIsactive, objAudit) { 
        obj['pkiEzsignbulksendID'] = pkiEzsignbulksendID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsignbulksendDescription'] = sEzsignbulksendDescription;
        obj['tEzsignbulksendNote'] = tEzsignbulksendNote;
        obj['bEzsignbulksendIsactive'] = bEzsignbulksendIsactive;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>EzsignbulksendGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} The populated <code>EzsignbulksendGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetObjectV1ResponseMPayload();
            EzsignbulksendResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignbulksendID')) {
                obj['pkiEzsignbulksendID'] = ApiClient.convertToType(data['pkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignbulksendDescription')) {
                obj['sEzsignbulksendDescription'] = ApiClient.convertToType(data['sEzsignbulksendDescription'], 'String');
            }
            if (data.hasOwnProperty('tEzsignbulksendNote')) {
                obj['tEzsignbulksendNote'] = ApiClient.convertToType(data['tEzsignbulksendNote'], 'String');
            }
            if (data.hasOwnProperty('bEzsignbulksendIsactive')) {
                obj['bEzsignbulksendIsactive'] = ApiClient.convertToType(data['bEzsignbulksendIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignbulksend
     * @return {Number}
     */
    getPkiEzsignbulksendID() {
        return this.pkiEzsignbulksendID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksend
     * @param {Number} pkiEzsignbulksendID The unique ID of the Ezsignbulksend
     */
    setPkiEzsignbulksendID(pkiEzsignbulksendID) {
        this['pkiEzsignbulksendID'] = pkiEzsignbulksendID;
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
     * Returns The description of the Ezsignbulksend
     * @return {String}
     */
    getSEzsignbulksendDescription() {
        return this.sEzsignbulksendDescription;
    }

    /**
     * Sets The description of the Ezsignbulksend
     * @param {String} sEzsignbulksendDescription The description of the Ezsignbulksend
     */
    setSEzsignbulksendDescription(sEzsignbulksendDescription) {
        this['sEzsignbulksendDescription'] = sEzsignbulksendDescription;
    }
/**
     * Returns Note about the Ezsignbulksend
     * @return {String}
     */
    getTEzsignbulksendNote() {
        return this.tEzsignbulksendNote;
    }

    /**
     * Sets Note about the Ezsignbulksend
     * @param {String} tEzsignbulksendNote Note about the Ezsignbulksend
     */
    setTEzsignbulksendNote(tEzsignbulksendNote) {
        this['tEzsignbulksendNote'] = tEzsignbulksendNote;
    }
/**
     * Returns Whether the Ezsignbulksend is active or not
     * @return {Boolean}
     */
    getBEzsignbulksendIsactive() {
        return this.bEzsignbulksendIsactive;
    }

    /**
     * Sets Whether the Ezsignbulksend is active or not
     * @param {Boolean} bEzsignbulksendIsactive Whether the Ezsignbulksend is active or not
     */
    setBEzsignbulksendIsactive(bEzsignbulksendIsactive) {
        this['bEzsignbulksendIsactive'] = bEzsignbulksendIsactive;
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
 * The unique ID of the Ezsignbulksend
 * @member {Number} pkiEzsignbulksendID
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['pkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsignbulksend
 * @member {String} sEzsignbulksendDescription
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['sEzsignbulksendDescription'] = undefined;

/**
 * Note about the Ezsignbulksend
 * @member {String} tEzsignbulksendNote
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['tEzsignbulksendNote'] = undefined;

/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['bEzsignbulksendIsactive'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendGetObjectV1ResponseMPayload.prototype['objAudit'] = undefined;


// Implement EzsignbulksendResponseCompound interface:
/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} pkiEzsignbulksendID
 */
EzsignbulksendResponseCompound.prototype['pkiEzsignbulksendID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignbulksendResponseCompound.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignbulksendResponseCompound.prototype['fkiLanguageID'] = undefined;
/**
 * The description of the Ezsignbulksend
 * @member {String} sEzsignbulksendDescription
 */
EzsignbulksendResponseCompound.prototype['sEzsignbulksendDescription'] = undefined;
/**
 * Note about the Ezsignbulksend
 * @member {String} tEzsignbulksendNote
 */
EzsignbulksendResponseCompound.prototype['tEzsignbulksendNote'] = undefined;
/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendResponseCompound.prototype['bEzsignbulksendIsactive'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendResponseCompound.prototype['objAudit'] = undefined;




export default EzsignbulksendGetObjectV1ResponseMPayload;

