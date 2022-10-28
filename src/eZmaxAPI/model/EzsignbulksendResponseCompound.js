/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import EzsignbulksendResponse from './EzsignbulksendResponse';
import EzsignbulksendResponseCompoundAllOf from './EzsignbulksendResponseCompoundAllOf';
import EzsignbulksenddocumentmappingResponseCompound from './EzsignbulksenddocumentmappingResponseCompound';
import EzsignbulksendsignermappingResponse from './EzsignbulksendsignermappingResponse';
import FieldEEzsignfoldertypePrivacylevel from './FieldEEzsignfoldertypePrivacylevel';

/**
 * The EzsignbulksendResponseCompound model module.
 * @module eZmaxAPI/model/EzsignbulksendResponseCompound
 * @version 1.1.13
 */
class EzsignbulksendResponseCompound {
    /**
     * Constructs a new <code>EzsignbulksendResponseCompound</code>.
     * An Ezsignbulksend Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignbulksendResponseCompound
     * @implements module:eZmaxAPI/model/EzsignbulksendResponse
     * @implements module:eZmaxAPI/model/EzsignbulksendResponseCompoundAllOf
     * @param pkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sLanguageNameX {String} The Name of the Language in the language of the requester
     * @param eEzsignfoldertypePrivacylevel {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} 
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param sEzsignbulksendDescription {String} The description of the Ezsignbulksend
     * @param tEzsignbulksendNote {String} Note about the Ezsignbulksend
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @param bEzsignbulksendIsactive {Boolean} Whether the Ezsignbulksend is active or not
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     * @param a_objEzsignbulksenddocumentmapping {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} 
     * @param a_objEzsignbulksendsignermapping {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} 
     */
    constructor(pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive, objAudit, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping) { 
        EzsignbulksendResponse.initialize(this, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive, objAudit);EzsignbulksendResponseCompoundAllOf.initialize(this, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping);
        EzsignbulksendResponseCompound.initialize(this, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive, objAudit, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksendID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive, objAudit, a_objEzsignbulksenddocumentmapping, a_objEzsignbulksendsignermapping) { 
        obj['pkiEzsignbulksendID'] = pkiEzsignbulksendID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sLanguageNameX'] = sLanguageNameX;
        obj['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['sEzsignbulksendDescription'] = sEzsignbulksendDescription;
        obj['tEzsignbulksendNote'] = tEzsignbulksendNote;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
        obj['bEzsignbulksendIsactive'] = bEzsignbulksendIsactive;
        obj['objAudit'] = objAudit;
        obj['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
        obj['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

    /**
     * Constructs a <code>EzsignbulksendResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendResponseCompound} The populated <code>EzsignbulksendResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendResponseCompound();
            EzsignbulksendResponse.constructFromObject(data, obj);
            EzsignbulksendResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignbulksendID')) {
                obj['pkiEzsignbulksendID'] = ApiClient.convertToType(data['pkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sLanguageNameX')) {
                obj['sLanguageNameX'] = ApiClient.convertToType(data['sLanguageNameX'], 'String');
            }
            if (data.hasOwnProperty('eEzsignfoldertypePrivacylevel')) {
                obj['eEzsignfoldertypePrivacylevel'] = FieldEEzsignfoldertypePrivacylevel.constructFromObject(data['eEzsignfoldertypePrivacylevel']);
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('sEzsignbulksendDescription')) {
                obj['sEzsignbulksendDescription'] = ApiClient.convertToType(data['sEzsignbulksendDescription'], 'String');
            }
            if (data.hasOwnProperty('tEzsignbulksendNote')) {
                obj['tEzsignbulksendNote'] = ApiClient.convertToType(data['tEzsignbulksendNote'], 'String');
            }
            if (data.hasOwnProperty('bEzsignbulksendNeedvalidation')) {
                obj['bEzsignbulksendNeedvalidation'] = ApiClient.convertToType(data['bEzsignbulksendNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignbulksendIsactive')) {
                obj['bEzsignbulksendIsactive'] = ApiClient.convertToType(data['bEzsignbulksendIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
            if (data.hasOwnProperty('a_objEzsignbulksenddocumentmapping')) {
                obj['a_objEzsignbulksenddocumentmapping'] = ApiClient.convertToType(data['a_objEzsignbulksenddocumentmapping'], [EzsignbulksenddocumentmappingResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignbulksendsignermapping')) {
                obj['a_objEzsignbulksendsignermapping'] = ApiClient.convertToType(data['a_objEzsignbulksendsignermapping'], [EzsignbulksendsignermappingResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignbulksend
     * minimum: 0
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
     * Returns The Name of the Language in the language of the requester
     * @return {String}
     */
    getSLanguageNameX() {
        return this.sLanguageNameX;
    }

    /**
     * Sets The Name of the Language in the language of the requester
     * @param {String} sLanguageNameX The Name of the Language in the language of the requester
     */
    setSLanguageNameX(sLanguageNameX) {
        this['sLanguageNameX'] = sLanguageNameX;
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
     * Returns Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @return {Boolean}
     */
    getBEzsignbulksendNeedvalidation() {
        return this.bEzsignbulksendNeedvalidation;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @param {Boolean} bEzsignbulksendNeedvalidation Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     */
    setBEzsignbulksendNeedvalidation(bEzsignbulksendNeedvalidation) {
        this['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
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
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>}
     */
    getAObjEzsignbulksenddocumentmapping() {
        return this.a_objEzsignbulksenddocumentmapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} a_objEzsignbulksenddocumentmapping
     */
    setAObjEzsignbulksenddocumentmapping(a_objEzsignbulksenddocumentmapping) {
        this['a_objEzsignbulksenddocumentmapping'] = a_objEzsignbulksenddocumentmapping;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>}
     */
    getAObjEzsignbulksendsignermapping() {
        return this.a_objEzsignbulksendsignermapping;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} a_objEzsignbulksendsignermapping
     */
    setAObjEzsignbulksendsignermapping(a_objEzsignbulksendsignermapping) {
        this['a_objEzsignbulksendsignermapping'] = a_objEzsignbulksendsignermapping;
    }

}

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
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsignbulksendResponseCompound.prototype['sLanguageNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsignbulksendResponseCompound.prototype['eEzsignfoldertypePrivacylevel'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignbulksendResponseCompound.prototype['sEzsignfoldertypeNameX'] = undefined;

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
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsignbulksendResponseCompound.prototype['bEzsignbulksendNeedvalidation'] = undefined;

/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendResponseCompound.prototype['bEzsignbulksendIsactive'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendResponseCompound.prototype['objAudit'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} a_objEzsignbulksenddocumentmapping
 */
EzsignbulksendResponseCompound.prototype['a_objEzsignbulksenddocumentmapping'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} a_objEzsignbulksendsignermapping
 */
EzsignbulksendResponseCompound.prototype['a_objEzsignbulksendsignermapping'] = undefined;


// Implement EzsignbulksendResponse interface:
/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} pkiEzsignbulksendID
 */
EzsignbulksendResponse.prototype['pkiEzsignbulksendID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignbulksendResponse.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignbulksendResponse.prototype['fkiLanguageID'] = undefined;
/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsignbulksendResponse.prototype['sLanguageNameX'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsignbulksendResponse.prototype['eEzsignfoldertypePrivacylevel'] = undefined;
/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignbulksendResponse.prototype['sEzsignfoldertypeNameX'] = undefined;
/**
 * The description of the Ezsignbulksend
 * @member {String} sEzsignbulksendDescription
 */
EzsignbulksendResponse.prototype['sEzsignbulksendDescription'] = undefined;
/**
 * Note about the Ezsignbulksend
 * @member {String} tEzsignbulksendNote
 */
EzsignbulksendResponse.prototype['tEzsignbulksendNote'] = undefined;
/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsignbulksendResponse.prototype['bEzsignbulksendNeedvalidation'] = undefined;
/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendResponse.prototype['bEzsignbulksendIsactive'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
EzsignbulksendResponse.prototype['objAudit'] = undefined;
// Implement EzsignbulksendResponseCompoundAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound>} a_objEzsignbulksenddocumentmapping
 */
EzsignbulksendResponseCompoundAllOf.prototype['a_objEzsignbulksenddocumentmapping'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignbulksendsignermappingResponse>} a_objEzsignbulksendsignermapping
 */
EzsignbulksendResponseCompoundAllOf.prototype['a_objEzsignbulksendsignermapping'] = undefined;




export default EzsignbulksendResponseCompound;

