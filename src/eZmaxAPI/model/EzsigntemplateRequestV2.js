/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsigntemplateType from './FieldEEzsigntemplateType';

/**
 * The EzsigntemplateRequestV2 model module.
 * @module eZmaxAPI/model/EzsigntemplateRequestV2
 * @version 1.2.0
 */
class EzsigntemplateRequestV2 {
    /**
     * Constructs a new <code>EzsigntemplateRequestV2</code>.
     * A Ezsigntemplate Object
     * @alias module:eZmaxAPI/model/EzsigntemplateRequestV2
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigntemplateDescription {String} The description of the Ezsigntemplate
     * @param bEzsigntemplateAdminonly {Boolean} Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
     * @param eEzsigntemplateType {module:eZmaxAPI/model/FieldEEzsigntemplateType} 
     */
    constructor(fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateAdminonly, eEzsigntemplateType) { 
        
        EzsigntemplateRequestV2.initialize(this, fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateAdminonly, eEzsigntemplateType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateAdminonly, eEzsigntemplateType) { 
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
        obj['bEzsigntemplateAdminonly'] = bEzsigntemplateAdminonly;
        obj['eEzsigntemplateType'] = eEzsigntemplateType;
    }

    /**
     * Constructs a <code>EzsigntemplateRequestV2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateRequestV2} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateRequestV2} The populated <code>EzsigntemplateRequestV2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateRequestV2();

            if (data.hasOwnProperty('pkiEzsigntemplateID')) {
                obj['pkiEzsigntemplateID'] = ApiClient.convertToType(data['pkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplateDescription')) {
                obj['sEzsigntemplateDescription'] = ApiClient.convertToType(data['sEzsigntemplateDescription'], 'String');
            }
            if (data.hasOwnProperty('sEzsigntemplateFilenamepattern')) {
                obj['sEzsigntemplateFilenamepattern'] = ApiClient.convertToType(data['sEzsigntemplateFilenamepattern'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplateAdminonly')) {
                obj['bEzsigntemplateAdminonly'] = ApiClient.convertToType(data['bEzsigntemplateAdminonly'], 'Boolean');
            }
            if (data.hasOwnProperty('eEzsigntemplateType')) {
                obj['eEzsigntemplateType'] = FieldEEzsigntemplateType.constructFromObject(data['eEzsigntemplateType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateRequestV2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateRequestV2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateRequestV2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateDescription'] && !(typeof data['sEzsigntemplateDescription'] === 'string' || data['sEzsigntemplateDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplateDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateFilenamepattern'] && !(typeof data['sEzsigntemplateFilenamepattern'] === 'string' || data['sEzsigntemplateFilenamepattern'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateFilenamepattern` to be a primitive type in the JSON string but got " + data['sEzsigntemplateFilenamepattern']);
        }

        return true;
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
     * Returns The unique ID of the Ezsignfoldertype.
     * minimum: 0
     * maximum: 65535
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
     * Returns The filename pattern of the Ezsigntemplate
     * @return {String}
     */
    getSEzsigntemplateFilenamepattern() {
        return this.sEzsigntemplateFilenamepattern;
    }

    /**
     * Sets The filename pattern of the Ezsigntemplate
     * @param {String} sEzsigntemplateFilenamepattern The filename pattern of the Ezsigntemplate
     */
    setSEzsigntemplateFilenamepattern(sEzsigntemplateFilenamepattern) {
        this['sEzsigntemplateFilenamepattern'] = sEzsigntemplateFilenamepattern;
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
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateType}
     */
    getEEzsigntemplateType() {
        return this.eEzsigntemplateType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateType} eEzsigntemplateType
     */
    setEEzsigntemplateType(eEzsigntemplateType) {
        this['eEzsigntemplateType'] = eEzsigntemplateType;
    }

}

EzsigntemplateRequestV2.RequiredProperties = ["fkiLanguageID", "sEzsigntemplateDescription", "bEzsigntemplateAdminonly", "eEzsigntemplateType"];

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigntemplateID
 */
EzsigntemplateRequestV2.prototype['pkiEzsigntemplateID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplateRequestV2.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateRequestV2.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateDescription
 */
EzsigntemplateRequestV2.prototype['sEzsigntemplateDescription'] = undefined;

/**
 * The filename pattern of the Ezsigntemplate
 * @member {String} sEzsigntemplateFilenamepattern
 */
EzsigntemplateRequestV2.prototype['sEzsigntemplateFilenamepattern'] = undefined;

/**
 * Whether the Ezsigntemplate can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplateAdminonly
 */
EzsigntemplateRequestV2.prototype['bEzsigntemplateAdminonly'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateType} eEzsigntemplateType
 */
EzsigntemplateRequestV2.prototype['eEzsigntemplateType'] = undefined;






export default EzsigntemplateRequestV2;

