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
import EzsigntemplateResponse from './EzsigntemplateResponse';
import EzsigntemplateResponseCompoundAllOf from './EzsigntemplateResponseCompoundAllOf';
import EzsigntemplatedocumentResponse from './EzsigntemplatedocumentResponse';
import EzsigntemplatesignerResponseCompound from './EzsigntemplatesignerResponseCompound';

/**
 * The EzsigntemplateResponseCompound model module.
 * @module eZmaxAPI/model/EzsigntemplateResponseCompound
 * @version 1.1.13
 */
class EzsigntemplateResponseCompound {
    /**
     * Constructs a new <code>EzsigntemplateResponseCompound</code>.
     * A Ezsigntemplate Object
     * @alias module:eZmaxAPI/model/EzsigntemplateResponseCompound
     * @implements module:eZmaxAPI/model/EzsigntemplateResponse
     * @implements module:eZmaxAPI/model/EzsigntemplateResponseCompoundAllOf
     * @param pkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sLanguageNameX {String} The Name of the Language in the language of the requester
     * @param sEzsigntemplateDescription {String} The description of the Ezsigntemplate
     * @param bEzsigntemplateAdminonly {Boolean} Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param a_objEzsigntemplatesigner {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} 
     */
    constructor(pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplateDescription, bEzsigntemplateAdminonly, sEzsignfoldertypeNameX, a_objEzsigntemplatesigner) { 
        EzsigntemplateResponse.initialize(this, pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplateDescription, bEzsigntemplateAdminonly, sEzsignfoldertypeNameX);EzsigntemplateResponseCompoundAllOf.initialize(this, a_objEzsigntemplatesigner);
        EzsigntemplateResponseCompound.initialize(this, pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplateDescription, bEzsigntemplateAdminonly, sEzsignfoldertypeNameX, a_objEzsigntemplatesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sLanguageNameX, sEzsigntemplateDescription, bEzsigntemplateAdminonly, sEzsignfoldertypeNameX, a_objEzsigntemplatesigner) { 
        obj['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sLanguageNameX'] = sLanguageNameX;
        obj['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
        obj['bEzsigntemplateAdminonly'] = bEzsigntemplateAdminonly;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

    /**
     * Constructs a <code>EzsigntemplateResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompound} The populated <code>EzsigntemplateResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateResponseCompound();
            EzsigntemplateResponse.constructFromObject(data, obj);
            EzsigntemplateResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplateID')) {
                obj['pkiEzsigntemplateID'] = ApiClient.convertToType(data['pkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatedocumentID')) {
                obj['fkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['fkiEzsigntemplatedocumentID'], 'Number');
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
            if (data.hasOwnProperty('sEzsigntemplateDescription')) {
                obj['sEzsigntemplateDescription'] = ApiClient.convertToType(data['sEzsigntemplateDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplateAdminonly')) {
                obj['bEzsigntemplateAdminonly'] = ApiClient.convertToType(data['bEzsigntemplateAdminonly'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('objEzsigntemplatedocument')) {
                obj['objEzsigntemplatedocument'] = EzsigntemplatedocumentResponse.constructFromObject(data['objEzsigntemplatedocument']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatesigner')) {
                obj['a_objEzsigntemplatesigner'] = ApiClient.convertToType(data['a_objEzsigntemplatesigner'], [EzsigntemplatesignerResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateID() {
        return this.pkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} pkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setPkiEzsigntemplateID(pkiEzsigntemplateID) {
        this['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatedocument
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatedocumentID() {
        return this.fkiEzsigntemplatedocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatedocument
     * @param {Number} fkiEzsigntemplatedocumentID The unique ID of the Ezsigntemplatedocument
     */
    setFkiEzsigntemplatedocumentID(fkiEzsigntemplatedocumentID) {
        this['fkiEzsigntemplatedocumentID'] = fkiEzsigntemplatedocumentID;
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
     * Returns The description of the Ezsigntemplate
     * @return {String}
     */
    getSEzsigntemplateDescription() {
        return this.sEzsigntemplateDescription;
    }

    /**
     * Sets The description of the Ezsigntemplate
     * @param {String} sEzsigntemplateDescription The description of the Ezsigntemplate
     */
    setSEzsigntemplateDescription(sEzsigntemplateDescription) {
        this['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
    }
/**
     * Returns Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
     * @return {Boolean}
     */
    getBEzsigntemplateAdminonly() {
        return this.bEzsigntemplateAdminonly;
    }

    /**
     * Sets Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
     * @param {Boolean} bEzsigntemplateAdminonly Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
     */
    setBEzsigntemplateAdminonly(bEzsigntemplateAdminonly) {
        this['bEzsigntemplateAdminonly'] = bEzsigntemplateAdminonly;
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
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentResponse}
     */
    getObjEzsigntemplatedocument() {
        return this.objEzsigntemplatedocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} objEzsigntemplatedocument
     */
    setObjEzsigntemplatedocument(objEzsigntemplatedocument) {
        this['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>}
     */
    getAObjEzsigntemplatesigner() {
        return this.a_objEzsigntemplatesigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} a_objEzsigntemplatesigner
     */
    setAObjEzsigntemplatesigner(a_objEzsigntemplatesigner) {
        this['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

}

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigntemplateID
 */
EzsigntemplateResponseCompound.prototype['pkiEzsigntemplateID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplateResponseCompound.prototype['fkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplateResponseCompound.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateResponseCompound.prototype['fkiLanguageID'] = undefined;

/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplateResponseCompound.prototype['sLanguageNameX'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateDescription
 */
EzsigntemplateResponseCompound.prototype['sEzsigntemplateDescription'] = undefined;

/**
 * Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplateAdminonly
 */
EzsigntemplateResponseCompound.prototype['bEzsigntemplateAdminonly'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplateResponseCompound.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} objEzsigntemplatedocument
 */
EzsigntemplateResponseCompound.prototype['objEzsigntemplatedocument'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} a_objEzsigntemplatesigner
 */
EzsigntemplateResponseCompound.prototype['a_objEzsigntemplatesigner'] = undefined;


// Implement EzsigntemplateResponse interface:
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigntemplateID
 */
EzsigntemplateResponse.prototype['pkiEzsigntemplateID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplateResponse.prototype['fkiEzsigntemplatedocumentID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplateResponse.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateResponse.prototype['fkiLanguageID'] = undefined;
/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplateResponse.prototype['sLanguageNameX'] = undefined;
/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateDescription
 */
EzsigntemplateResponse.prototype['sEzsigntemplateDescription'] = undefined;
/**
 * Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplateAdminonly
 */
EzsigntemplateResponse.prototype['bEzsigntemplateAdminonly'] = undefined;
/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplateResponse.prototype['sEzsignfoldertypeNameX'] = undefined;
// Implement EzsigntemplateResponseCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} objEzsigntemplatedocument
 */
EzsigntemplateResponseCompoundAllOf.prototype['objEzsigntemplatedocument'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} a_objEzsigntemplatesigner
 */
EzsigntemplateResponseCompoundAllOf.prototype['a_objEzsigntemplatesigner'] = undefined;




export default EzsigntemplateResponseCompound;

