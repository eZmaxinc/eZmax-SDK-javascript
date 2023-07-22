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

/**
 * The EzsigntemplatepackageListElement model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageListElement
 * @version 1.1.18
 */
class EzsigntemplatepackageListElement {
    /**
     * Constructs a new <code>EzsigntemplatepackageListElement</code>.
     * An Ezsigntemplatepackage List Element
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageListElement
     * @param pkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigntemplatepackageDescription {String} The description of the Ezsigntemplatepackage
     * @param bEzsigntemplatepackageNeedvalidation {Boolean} Whether the Ezsignbulksend was automatically modified and needs a manual validation
     * @param iEzsigntemplatepackagemembership {Number} The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param bEzsigntemplatepackageIsactive {Boolean} Whether the Ezsigntemplatepackage is active or not
     */
    constructor(pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageNeedvalidation, iEzsigntemplatepackagemembership, sEzsignfoldertypeNameX, bEzsigntemplatepackageIsactive) { 
        
        EzsigntemplatepackageListElement.initialize(this, pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageNeedvalidation, iEzsigntemplatepackagemembership, sEzsignfoldertypeNameX, bEzsigntemplatepackageIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackageID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageNeedvalidation, iEzsigntemplatepackagemembership, sEzsignfoldertypeNameX, bEzsigntemplatepackageIsactive) { 
        obj['pkiEzsigntemplatepackageID'] = pkiEzsigntemplatepackageID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
        obj['bEzsigntemplatepackageNeedvalidation'] = bEzsigntemplatepackageNeedvalidation;
        obj['iEzsigntemplatepackagemembership'] = iEzsigntemplatepackagemembership;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageListElement} The populated <code>EzsigntemplatepackageListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageListElement();

            if (data.hasOwnProperty('pkiEzsigntemplatepackageID')) {
                obj['pkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatepackageDescription')) {
                obj['sEzsigntemplatepackageDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackageDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageNeedvalidation')) {
                obj['bEzsigntemplatepackageNeedvalidation'] = ApiClient.convertToType(data['bEzsigntemplatepackageNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsigntemplatepackagemembership')) {
                obj['iEzsigntemplatepackagemembership'] = ApiClient.convertToType(data['iEzsigntemplatepackagemembership'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageIsactive')) {
                obj['bEzsigntemplatepackageIsactive'] = ApiClient.convertToType(data['bEzsigntemplatepackageIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatepackageListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackageListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackageListElement.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatepackageDescription'] && !(typeof data['sEzsigntemplatepackageDescription'] === 'string' || data['sEzsigntemplatepackageDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatepackageDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplatepackageDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldertypeNameX'] && !(typeof data['sEzsignfoldertypeNameX'] === 'string' || data['sEzsignfoldertypeNameX'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldertypeNameX` to be a primitive type in the JSON string but got " + data['sEzsignfoldertypeNameX']);
        }

        return true;
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
     * Returns The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     * @return {Number}
     */
    getIEzsigntemplatepackagemembership() {
        return this.iEzsigntemplatepackagemembership;
    }

    /**
     * Sets The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     * @param {Number} iEzsigntemplatepackagemembership The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     */
    setIEzsigntemplatepackagemembership(iEzsigntemplatepackagemembership) {
        this['iEzsigntemplatepackagemembership'] = iEzsigntemplatepackagemembership;
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

}

EzsigntemplatepackageListElement.RequiredProperties = ["pkiEzsigntemplatepackageID", "fkiEzsignfoldertypeID", "fkiLanguageID", "sEzsigntemplatepackageDescription", "bEzsigntemplatepackageNeedvalidation", "iEzsigntemplatepackagemembership", "sEzsignfoldertypeNameX", "bEzsigntemplatepackageIsactive"];

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageListElement.prototype['pkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageListElement.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageListElement.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageListElement.prototype['sEzsigntemplatepackageDescription'] = undefined;

/**
 * Whether the Ezsignbulksend was automatically modified and needs a manual validation
 * @member {Boolean} bEzsigntemplatepackageNeedvalidation
 */
EzsigntemplatepackageListElement.prototype['bEzsigntemplatepackageNeedvalidation'] = undefined;

/**
 * The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
 * @member {Number} iEzsigntemplatepackagemembership
 */
EzsigntemplatepackageListElement.prototype['iEzsigntemplatepackagemembership'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplatepackageListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageListElement.prototype['bEzsigntemplatepackageIsactive'] = undefined;






export default EzsigntemplatepackageListElement;

