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
 * The EzsigntemplateListElement model module.
 * @module eZmaxAPI/model/EzsigntemplateListElement
 * @version 1.2.0
 */
class EzsigntemplateListElement {
    /**
     * Constructs a new <code>EzsigntemplateListElement</code>.
     * A Ezsigntemplate List Element
     * @alias module:eZmaxAPI/model/EzsigntemplateListElement
     * @param pkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigntemplateDescription {String} The description of the Ezsigntemplate
     * @param bEzsigntemplateIncomplete {Boolean} Indicate the Ezsigntemplate is incomplete and cannot be used
     * @param eEzsigntemplateType {module:eZmaxAPI/model/FieldEEzsigntemplateType} 
     */
    constructor(pkiEzsigntemplateID, fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateIncomplete, eEzsigntemplateType) { 
        
        EzsigntemplateListElement.initialize(this, pkiEzsigntemplateID, fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateIncomplete, eEzsigntemplateType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateID, fkiLanguageID, sEzsigntemplateDescription, bEzsigntemplateIncomplete, eEzsigntemplateType) { 
        obj['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
        obj['bEzsigntemplateIncomplete'] = bEzsigntemplateIncomplete;
        obj['eEzsigntemplateType'] = eEzsigntemplateType;
    }

    /**
     * Constructs a <code>EzsigntemplateListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateListElement} The populated <code>EzsigntemplateListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateListElement();

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
            if (data.hasOwnProperty('iEzsigntemplatedocumentPagetotal')) {
                obj['iEzsigntemplatedocumentPagetotal'] = ApiClient.convertToType(data['iEzsigntemplatedocumentPagetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateSignaturetotal')) {
                obj['iEzsigntemplateSignaturetotal'] = ApiClient.convertToType(data['iEzsigntemplateSignaturetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateFormfieldtotal')) {
                obj['iEzsigntemplateFormfieldtotal'] = ApiClient.convertToType(data['iEzsigntemplateFormfieldtotal'], 'Number');
            }
            if (data.hasOwnProperty('bEzsigntemplateIncomplete')) {
                obj['bEzsigntemplateIncomplete'] = ApiClient.convertToType(data['bEzsigntemplateIncomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplateType')) {
                obj['eEzsigntemplateType'] = FieldEEzsigntemplateType.constructFromObject(data['eEzsigntemplateType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateListElement.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateDescription'] && !(typeof data['sEzsigntemplateDescription'] === 'string' || data['sEzsigntemplateDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplateDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldertypeNameX'] && !(typeof data['sEzsignfoldertypeNameX'] === 'string' || data['sEzsignfoldertypeNameX'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldertypeNameX` to be a primitive type in the JSON string but got " + data['sEzsignfoldertypeNameX']);
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
     * Returns The number of pages in the Ezsigntemplatedocument.
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatedocumentPagetotal() {
        return this.iEzsigntemplatedocumentPagetotal;
    }

    /**
     * Sets The number of pages in the Ezsigntemplatedocument.
     * @param {Number} iEzsigntemplatedocumentPagetotal The number of pages in the Ezsigntemplatedocument.
     */
    setIEzsigntemplatedocumentPagetotal(iEzsigntemplatedocumentPagetotal) {
        this['iEzsigntemplatedocumentPagetotal'] = iEzsigntemplatedocumentPagetotal;
    }
/**
     * Returns The number of total signatures in the Ezsigntemplate.
     * @return {Number}
     */
    getIEzsigntemplateSignaturetotal() {
        return this.iEzsigntemplateSignaturetotal;
    }

    /**
     * Sets The number of total signatures in the Ezsigntemplate.
     * @param {Number} iEzsigntemplateSignaturetotal The number of total signatures in the Ezsigntemplate.
     */
    setIEzsigntemplateSignaturetotal(iEzsigntemplateSignaturetotal) {
        this['iEzsigntemplateSignaturetotal'] = iEzsigntemplateSignaturetotal;
    }
/**
     * Returns The number of total form fields in the Ezsigntemplate.
     * @return {Number}
     */
    getIEzsigntemplateFormfieldtotal() {
        return this.iEzsigntemplateFormfieldtotal;
    }

    /**
     * Sets The number of total form fields in the Ezsigntemplate.
     * @param {Number} iEzsigntemplateFormfieldtotal The number of total form fields in the Ezsigntemplate.
     */
    setIEzsigntemplateFormfieldtotal(iEzsigntemplateFormfieldtotal) {
        this['iEzsigntemplateFormfieldtotal'] = iEzsigntemplateFormfieldtotal;
    }
/**
     * Returns Indicate the Ezsigntemplate is incomplete and cannot be used
     * @return {Boolean}
     */
    getBEzsigntemplateIncomplete() {
        return this.bEzsigntemplateIncomplete;
    }

    /**
     * Sets Indicate the Ezsigntemplate is incomplete and cannot be used
     * @param {Boolean} bEzsigntemplateIncomplete Indicate the Ezsigntemplate is incomplete and cannot be used
     */
    setBEzsigntemplateIncomplete(bEzsigntemplateIncomplete) {
        this['bEzsigntemplateIncomplete'] = bEzsigntemplateIncomplete;
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

EzsigntemplateListElement.RequiredProperties = ["pkiEzsigntemplateID", "fkiLanguageID", "sEzsigntemplateDescription", "bEzsigntemplateIncomplete", "eEzsigntemplateType"];

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigntemplateID
 */
EzsigntemplateListElement.prototype['pkiEzsigntemplateID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplateListElement.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateListElement.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateDescription
 */
EzsigntemplateListElement.prototype['sEzsigntemplateDescription'] = undefined;

/**
 * The number of pages in the Ezsigntemplatedocument.
 * @member {Number} iEzsigntemplatedocumentPagetotal
 */
EzsigntemplateListElement.prototype['iEzsigntemplatedocumentPagetotal'] = undefined;

/**
 * The number of total signatures in the Ezsigntemplate.
 * @member {Number} iEzsigntemplateSignaturetotal
 */
EzsigntemplateListElement.prototype['iEzsigntemplateSignaturetotal'] = undefined;

/**
 * The number of total form fields in the Ezsigntemplate.
 * @member {Number} iEzsigntemplateFormfieldtotal
 */
EzsigntemplateListElement.prototype['iEzsigntemplateFormfieldtotal'] = undefined;

/**
 * Indicate the Ezsigntemplate is incomplete and cannot be used
 * @member {Boolean} bEzsigntemplateIncomplete
 */
EzsigntemplateListElement.prototype['bEzsigntemplateIncomplete'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplateListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateType} eEzsigntemplateType
 */
EzsigntemplateListElement.prototype['eEzsigntemplateType'] = undefined;






export default EzsigntemplateListElement;

