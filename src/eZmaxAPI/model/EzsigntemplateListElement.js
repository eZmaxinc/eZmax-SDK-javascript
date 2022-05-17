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
 * The EzsigntemplateListElement model module.
 * @module eZmaxAPI/model/EzsigntemplateListElement
 * @version 1.1.7
 */
class EzsigntemplateListElement {
    /**
     * Constructs a new <code>EzsigntemplateListElement</code>.
     * A Ezsigntemplate List Element
     * @alias module:eZmaxAPI/model/EzsigntemplateListElement
     * @param pkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigntemplateDescription {String} The description of the Ezsigntemplate
     * @param iEzsigntemplatedocumentPagetotal {Number} The number of pages in the Ezsigntemplatedocument.
     * @param iEzsigntemplateSignaturetotal {Number} The number of total signatures in the Ezsigntemplate.
     * @param bEzsigntemplateIncomplete {Boolean} Indicate the Ezsigntemplate is incomplete and cannot be used
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     */
    constructor(pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplateDescription, iEzsigntemplatedocumentPagetotal, iEzsigntemplateSignaturetotal, bEzsigntemplateIncomplete, sEzsignfoldertypeNameX) { 
        
        EzsigntemplateListElement.initialize(this, pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplateDescription, iEzsigntemplatedocumentPagetotal, iEzsigntemplateSignaturetotal, bEzsigntemplateIncomplete, sEzsignfoldertypeNameX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateID, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplateDescription, iEzsigntemplatedocumentPagetotal, iEzsigntemplateSignaturetotal, bEzsigntemplateIncomplete, sEzsignfoldertypeNameX) { 
        obj['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
        obj['iEzsigntemplatedocumentPagetotal'] = iEzsigntemplatedocumentPagetotal;
        obj['iEzsigntemplateSignaturetotal'] = iEzsigntemplateSignaturetotal;
        obj['bEzsigntemplateIncomplete'] = bEzsigntemplateIncomplete;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
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
            if (data.hasOwnProperty('bEzsigntemplateIncomplete')) {
                obj['bEzsigntemplateIncomplete'] = ApiClient.convertToType(data['bEzsigntemplateIncomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplate
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

}

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
 * Indicate the Ezsigntemplate is incomplete and cannot be used
 * @member {Boolean} bEzsigntemplateIncomplete
 */
EzsigntemplateListElement.prototype['bEzsigntemplateIncomplete'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsigntemplateListElement.prototype['sEzsignfoldertypeNameX'] = undefined;






export default EzsigntemplateListElement;

