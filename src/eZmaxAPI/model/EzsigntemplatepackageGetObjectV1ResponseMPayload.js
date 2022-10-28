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
import EzsigntemplatepackageResponseCompound from './EzsigntemplatepackageResponseCompound';
import EzsigntemplatepackagemembershipResponseCompound from './EzsigntemplatepackagemembershipResponseCompound';
import EzsigntemplatepackagesignerResponseCompound from './EzsigntemplatepackagesignerResponseCompound';

/**
 * The EzsigntemplatepackageGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageGetObjectV1ResponseMPayload
 * @version 1.1.13
 */
class EzsigntemplatepackageGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackageGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound
     * @param pkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sLanguageNameX {String} The Name of the Language in the language of the requester
     * @param sEzsigntemplatepackageDescription {String} The description of the Ezsigntemplatepackage
     * @param bEzsigntemplatepackageAdminonly {Boolean} Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @param bEzsigntemplatepackageNeedvalidation {Boolean} Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param bEzsigntemplatepackageIsactive {Boolean} Whether the Ezsigntemplatepackage is active or not
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param a_objEzsigntemplatepackagesigner {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound>} 
     * @param a_objEzsigntemplatepackagemembership {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound>} 
     */
    constructor(pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageNeedvalidation, bEzsigntemplatepackageIsactive, sEzsignfoldertypeNameX, a_objEzsigntemplatepackagesigner, a_objEzsigntemplatepackagemembership) { 
        EzsigntemplatepackageResponseCompound.initialize(this, pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageNeedvalidation, bEzsigntemplatepackageIsactive, sEzsignfoldertypeNameX, a_objEzsigntemplatepackagesigner, a_objEzsigntemplatepackagemembership);
        EzsigntemplatepackageGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageNeedvalidation, bEzsigntemplatepackageIsactive, sEzsignfoldertypeNameX, a_objEzsigntemplatepackagesigner, a_objEzsigntemplatepackagemembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageNeedvalidation, bEzsigntemplatepackageIsactive, sEzsignfoldertypeNameX, a_objEzsigntemplatepackagesigner, a_objEzsigntemplatepackagemembership) { 
        obj['pkiEzsigntemplatepackageID'] = pkiEzsigntemplatepackageID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sLanguageNameX'] = sLanguageNameX;
        obj['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
        obj['bEzsigntemplatepackageAdminonly'] = bEzsigntemplatepackageAdminonly;
        obj['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
        obj['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['a_objEzsigntemplatepackagesigner'] = a_objEzsigntemplatepackagesigner;
        obj['a_objEzsigntemplatepackagemembership'] = a_objEzsigntemplatepackagemembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageGetObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackageGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageGetObjectV1ResponseMPayload();
            EzsigntemplatepackageResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatepackageID')) {
                obj['pkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackageID'], 'Number');
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
            if (data.hasOwnProperty('sEzsigntemplatepackageDescription')) {
                obj['sEzsigntemplatepackageDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackageDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageAdminonly')) {
                obj['bEzsigntemplatepackageAdminonly'] = ApiClient.convertToType(data['bEzsigntemplatepackageAdminonly'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageNeedvalidation')) {
                obj['bEzsigntemplatepackageNeedvalidation'] = ApiClient.convertToType(data['bEzsigntemplatepackageNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageIsactive')) {
                obj['bEzsigntemplatepackageIsactive'] = ApiClient.convertToType(data['bEzsigntemplatepackageIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsigntemplatepackagesigner')) {
                obj['a_objEzsigntemplatepackagesigner'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagesigner'], [EzsigntemplatepackagesignerResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatepackagemembership')) {
                obj['a_objEzsigntemplatepackagemembership'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagemembership'], [EzsigntemplatepackagemembershipResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatepackageID() {
        return this.pkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} pkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setPkiEzsigntemplatepackageID(pkiEzsigntemplatepackageID) {
        this['pkiEzsigntemplatepackageID'] = pkiEzsigntemplatepackageID;
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
     * Returns The description of the Ezsigntemplatepackage
     * @return {String}
     */
    getSEzsigntemplatepackageDescription() {
        return this.sEzsigntemplatepackageDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatepackage
     * @param {String} sEzsigntemplatepackageDescription The description of the Ezsigntemplatepackage
     */
    setSEzsigntemplatepackageDescription(sEzsigntemplatepackageDescription) {
        this['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
    }
/**
     * Returns Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @return {Boolean}
     */
    getBEzsigntemplatepackageAdminonly() {
        return this.bEzsigntemplatepackageAdminonly;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @param {Boolean} bEzsigntemplatepackageAdminonly Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     */
    setBEzsigntemplatepackageAdminonly(bEzsigntemplatepackageAdminonly) {
        this['bEzsigntemplatepackageAdminonly'] = bEzsigntemplatepackageAdminonly;
    }
/**
     * Returns Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @return {Boolean}
     */
    getBEzsigntemplatepackageNeedvalidation() {
        return this.bEzsigntemplatepackageNeedvalidation;
    }

    /**
     * Sets Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param {Boolean} bEzsigntemplatepackageNeedvalidation Whether the Ezsignbulksend was automatically modified and needs a manual validation
     */
    setBEzsigntemplatepackageNeedvalidation(bEzsigntemplatepackageNeedvalidation) {
        this['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
    }
/**
     * Returns Whether the Ezsigntemplatepackage is active or not
     * @return {Boolean}
     */
    getBEzsigntemplatepackageIsactive() {
        return this.bEzsigntemplatepackageIsactive;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage is active or not
     * @param {Boolean} bEzsigntemplatepackageIsactive Whether the Ezsigntemplatepackage is active or not
     */
    setBEzsigntemplatepackageIsactive(bEzsigntemplatepackageIsactive) {
        this['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
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
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound>}
     */
    getAObjEzsigntemplatepackagesigner() {
        return this.a_objEzsigntemplatepackagesigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound>} a_objEzsigntemplatepackagesigner
     */
    setAObjEzsigntemplatepackagesigner(a_objEzsigntemplatepackagesigner) {
        this['a_objEzsigntemplatepackagesigner'] = a_objEzsigntemplatepackagesigner;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound>}
     */
    getAObjEzsigntemplatepackagemembership() {
        return this.a_objEzsigntemplatepackagemembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound>} a_objEzsigntemplatepackagemembership
     */
    setAObjEzsigntemplatepackagemembership(a_objEzsigntemplatepackagemembership) {
        this['a_objEzsigntemplatepackagemembership'] = a_objEzsigntemplatepackagemembership;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['fkiLanguageID'] = undefined;

/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['sLanguageNameX'] = undefined;

/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['sEzsigntemplatepackageDescription'] = undefined;

/**
 * Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplatepackageAdminonly
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageAdminonly'] = undefined;

/**
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;

/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['bEzsigntemplatepackageIsactive'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound>} a_objEzsigntemplatepackagesigner
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['a_objEzsigntemplatepackagesigner'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound>} a_objEzsigntemplatepackagemembership
 */
EzsigntemplatepackageGetObjectV1ResponseMPayload.prototype['a_objEzsigntemplatepackagemembership'] = undefined;


// Implement EzsigntemplatepackageResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageResponseCompound.prototype['pkiEzsigntemplatepackageID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageResponseCompound.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageResponseCompound.prototype['fkiLanguageID'] = undefined;
/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplatepackageResponseCompound.prototype['sLanguageNameX'] = undefined;
/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageResponseCompound.prototype['sEzsigntemplatepackageDescription'] = undefined;
/**
 * Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplatepackageAdminonly
 */
EzsigntemplatepackageResponseCompound.prototype['bEzsigntemplatepackageAdminonly'] = undefined;
/**
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatepackageResponseCompound.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;
/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageResponseCompound.prototype['bEzsigntemplatepackageIsactive'] = undefined;
/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplatepackageResponseCompound.prototype['sEzsignfoldertypeNameX'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignerResponseCompound>} a_objEzsigntemplatepackagesigner
 */
EzsigntemplatepackageResponseCompound.prototype['a_objEzsigntemplatepackagesigner'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound>} a_objEzsigntemplatepackagemembership
 */
EzsigntemplatepackageResponseCompound.prototype['a_objEzsigntemplatepackagemembership'] = undefined;




export default EzsigntemplatepackageGetObjectV1ResponseMPayload;

