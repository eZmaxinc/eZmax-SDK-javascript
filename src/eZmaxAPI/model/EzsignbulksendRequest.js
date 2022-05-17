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

/**
 * The EzsignbulksendRequest model module.
 * @module eZmaxAPI/model/EzsignbulksendRequest
 * @version 1.1.7
 */
class EzsignbulksendRequest {
    /**
     * Constructs a new <code>EzsignbulksendRequest</code>.
     * A Ezsignbulksend Object
     * @alias module:eZmaxAPI/model/EzsignbulksendRequest
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsignbulksendDescription {String} The description of the Ezsignbulksend
     * @param tEzsignbulksendNote {String} Note about the Ezsignbulksend
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @param bEzsignbulksendIsactive {Boolean} Whether the Ezsignbulksend is active or not
     */
    constructor(fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive) { 
        
        EzsignbulksendRequest.initialize(this, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldertypeID, fkiLanguageID, sEzsignbulksendDescription, tEzsignbulksendNote, bEzsignbulksendNeedvalidation, bEzsignbulksendIsactive) { 
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsignbulksendDescription'] = sEzsignbulksendDescription;
        obj['tEzsignbulksendNote'] = tEzsignbulksendNote;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
        obj['bEzsignbulksendIsactive'] = bEzsignbulksendIsactive;
    }

    /**
     * Constructs a <code>EzsignbulksendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendRequest} The populated <code>EzsignbulksendRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendRequest();

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
            if (data.hasOwnProperty('bEzsignbulksendNeedvalidation')) {
                obj['bEzsignbulksendNeedvalidation'] = ApiClient.convertToType(data['bEzsignbulksendNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignbulksendIsactive')) {
                obj['bEzsignbulksendIsactive'] = ApiClient.convertToType(data['bEzsignbulksendIsactive'], 'Boolean');
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

}

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} pkiEzsignbulksendID
 */
EzsignbulksendRequest.prototype['pkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignbulksendRequest.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsignbulksendRequest.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsignbulksend
 * @member {String} sEzsignbulksendDescription
 */
EzsignbulksendRequest.prototype['sEzsignbulksendDescription'] = undefined;

/**
 * Note about the Ezsignbulksend
 * @member {String} tEzsignbulksendNote
 */
EzsignbulksendRequest.prototype['tEzsignbulksendNote'] = undefined;

/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsignbulksendRequest.prototype['bEzsignbulksendNeedvalidation'] = undefined;

/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendRequest.prototype['bEzsignbulksendIsactive'] = undefined;






export default EzsignbulksendRequest;
