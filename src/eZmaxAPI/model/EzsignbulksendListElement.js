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
 * The EzsignbulksendListElement model module.
 * @module eZmaxAPI/model/EzsignbulksendListElement
 * @version 1.1.18
 */
class EzsignbulksendListElement {
    /**
     * Constructs a new <code>EzsignbulksendListElement</code>.
     * An Ezsignbulksend List Element
     * @alias module:eZmaxAPI/model/EzsignbulksendListElement
     * @param pkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param sEzsignbulksendDescription {String} The description of the Ezsignbulksend
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param bEzsignbulksendNeedvalidation {Boolean} Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
     * @param iEzsignbulksendtransmission {Number} The total number of Ezsignbulksendtransmissions in the Ezsignbulksend
     * @param iEzsignfolder {Number} The total number of Ezsignfolders in the Ezsignbulksend
     * @param iEzsigndocument {Number} The total number of Ezsigndocuments in the Ezsignbulksend
     * @param iEzsignsignature {Number} The total number of Ezsignsignature in the Ezsignbulksend
     * @param iEzsignsignatureSigned {Number} The total number of already signed Ezsignsignature blocks in the Ezsignbulksend
     * @param bEzsignbulksendIsactive {Boolean} Whether the Ezsignbulksend is active or not
     */
    constructor(pkiEzsignbulksendID, fkiEzsignfoldertypeID, sEzsignbulksendDescription, sEzsignfoldertypeNameX, bEzsignbulksendNeedvalidation, iEzsignbulksendtransmission, iEzsignfolder, iEzsigndocument, iEzsignsignature, iEzsignsignatureSigned, bEzsignbulksendIsactive) { 
        
        EzsignbulksendListElement.initialize(this, pkiEzsignbulksendID, fkiEzsignfoldertypeID, sEzsignbulksendDescription, sEzsignfoldertypeNameX, bEzsignbulksendNeedvalidation, iEzsignbulksendtransmission, iEzsignfolder, iEzsigndocument, iEzsignsignature, iEzsignsignatureSigned, bEzsignbulksendIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksendID, fkiEzsignfoldertypeID, sEzsignbulksendDescription, sEzsignfoldertypeNameX, bEzsignbulksendNeedvalidation, iEzsignbulksendtransmission, iEzsignfolder, iEzsigndocument, iEzsignsignature, iEzsignsignatureSigned, bEzsignbulksendIsactive) { 
        obj['pkiEzsignbulksendID'] = pkiEzsignbulksendID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['sEzsignbulksendDescription'] = sEzsignbulksendDescription;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['bEzsignbulksendNeedvalidation'] = bEzsignbulksendNeedvalidation;
        obj['iEzsignbulksendtransmission'] = iEzsignbulksendtransmission;
        obj['iEzsignfolder'] = iEzsignfolder;
        obj['iEzsigndocument'] = iEzsigndocument;
        obj['iEzsignsignature'] = iEzsignsignature;
        obj['iEzsignsignatureSigned'] = iEzsignsignatureSigned;
        obj['bEzsignbulksendIsactive'] = bEzsignbulksendIsactive;
    }

    /**
     * Constructs a <code>EzsignbulksendListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendListElement} The populated <code>EzsignbulksendListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendListElement();

            if (data.hasOwnProperty('pkiEzsignbulksendID')) {
                obj['pkiEzsignbulksendID'] = ApiClient.convertToType(data['pkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignbulksendDescription')) {
                obj['sEzsignbulksendDescription'] = ApiClient.convertToType(data['sEzsignbulksendDescription'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('bEzsignbulksendNeedvalidation')) {
                obj['bEzsignbulksendNeedvalidation'] = ApiClient.convertToType(data['bEzsignbulksendNeedvalidation'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsignbulksendtransmission')) {
                obj['iEzsignbulksendtransmission'] = ApiClient.convertToType(data['iEzsignbulksendtransmission'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignfolder')) {
                obj['iEzsignfolder'] = ApiClient.convertToType(data['iEzsignfolder'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocument')) {
                obj['iEzsigndocument'] = ApiClient.convertToType(data['iEzsigndocument'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignature')) {
                obj['iEzsignsignature'] = ApiClient.convertToType(data['iEzsignsignature'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureSigned')) {
                obj['iEzsignsignatureSigned'] = ApiClient.convertToType(data['iEzsignsignatureSigned'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignbulksendIsactive')) {
                obj['bEzsignbulksendIsactive'] = ApiClient.convertToType(data['bEzsignbulksendIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendListElement.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignbulksendDescription'] && !(typeof data['sEzsignbulksendDescription'] === 'string' || data['sEzsignbulksendDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignbulksendDescription` to be a primitive type in the JSON string but got " + data['sEzsignbulksendDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsignfoldertypeNameX'] && !(typeof data['sEzsignfoldertypeNameX'] === 'string' || data['sEzsignfoldertypeNameX'] instanceof String)) {
            throw new Error("Expected the field `sEzsignfoldertypeNameX` to be a primitive type in the JSON string but got " + data['sEzsignfoldertypeNameX']);
        }

        return true;
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
     * Returns The total number of Ezsignbulksendtransmissions in the Ezsignbulksend
     * @return {Number}
     */
    getIEzsignbulksendtransmission() {
        return this.iEzsignbulksendtransmission;
    }

    /**
     * Sets The total number of Ezsignbulksendtransmissions in the Ezsignbulksend
     * @param {Number} iEzsignbulksendtransmission The total number of Ezsignbulksendtransmissions in the Ezsignbulksend
     */
    setIEzsignbulksendtransmission(iEzsignbulksendtransmission) {
        this['iEzsignbulksendtransmission'] = iEzsignbulksendtransmission;
    }
/**
     * Returns The total number of Ezsignfolders in the Ezsignbulksend
     * @return {Number}
     */
    getIEzsignfolder() {
        return this.iEzsignfolder;
    }

    /**
     * Sets The total number of Ezsignfolders in the Ezsignbulksend
     * @param {Number} iEzsignfolder The total number of Ezsignfolders in the Ezsignbulksend
     */
    setIEzsignfolder(iEzsignfolder) {
        this['iEzsignfolder'] = iEzsignfolder;
    }
/**
     * Returns The total number of Ezsigndocuments in the Ezsignbulksend
     * @return {Number}
     */
    getIEzsigndocument() {
        return this.iEzsigndocument;
    }

    /**
     * Sets The total number of Ezsigndocuments in the Ezsignbulksend
     * @param {Number} iEzsigndocument The total number of Ezsigndocuments in the Ezsignbulksend
     */
    setIEzsigndocument(iEzsigndocument) {
        this['iEzsigndocument'] = iEzsigndocument;
    }
/**
     * Returns The total number of Ezsignsignature in the Ezsignbulksend
     * @return {Number}
     */
    getIEzsignsignature() {
        return this.iEzsignsignature;
    }

    /**
     * Sets The total number of Ezsignsignature in the Ezsignbulksend
     * @param {Number} iEzsignsignature The total number of Ezsignsignature in the Ezsignbulksend
     */
    setIEzsignsignature(iEzsignsignature) {
        this['iEzsignsignature'] = iEzsignsignature;
    }
/**
     * Returns The total number of already signed Ezsignsignature blocks in the Ezsignbulksend
     * @return {Number}
     */
    getIEzsignsignatureSigned() {
        return this.iEzsignsignatureSigned;
    }

    /**
     * Sets The total number of already signed Ezsignsignature blocks in the Ezsignbulksend
     * @param {Number} iEzsignsignatureSigned The total number of already signed Ezsignsignature blocks in the Ezsignbulksend
     */
    setIEzsignsignatureSigned(iEzsignsignatureSigned) {
        this['iEzsignsignatureSigned'] = iEzsignsignatureSigned;
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

EzsignbulksendListElement.RequiredProperties = ["pkiEzsignbulksendID", "fkiEzsignfoldertypeID", "sEzsignbulksendDescription", "sEzsignfoldertypeNameX", "bEzsignbulksendNeedvalidation", "iEzsignbulksendtransmission", "iEzsignfolder", "iEzsigndocument", "iEzsignsignature", "iEzsignsignatureSigned", "bEzsignbulksendIsactive"];

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} pkiEzsignbulksendID
 */
EzsignbulksendListElement.prototype['pkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsignbulksendListElement.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The description of the Ezsignbulksend
 * @member {String} sEzsignbulksendDescription
 */
EzsignbulksendListElement.prototype['sEzsignbulksendDescription'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignbulksendListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * Whether the Ezsigntemplatepackage was automatically modified and needs a manual validation
 * @member {Boolean} bEzsignbulksendNeedvalidation
 */
EzsignbulksendListElement.prototype['bEzsignbulksendNeedvalidation'] = undefined;

/**
 * The total number of Ezsignbulksendtransmissions in the Ezsignbulksend
 * @member {Number} iEzsignbulksendtransmission
 */
EzsignbulksendListElement.prototype['iEzsignbulksendtransmission'] = undefined;

/**
 * The total number of Ezsignfolders in the Ezsignbulksend
 * @member {Number} iEzsignfolder
 */
EzsignbulksendListElement.prototype['iEzsignfolder'] = undefined;

/**
 * The total number of Ezsigndocuments in the Ezsignbulksend
 * @member {Number} iEzsigndocument
 */
EzsignbulksendListElement.prototype['iEzsigndocument'] = undefined;

/**
 * The total number of Ezsignsignature in the Ezsignbulksend
 * @member {Number} iEzsignsignature
 */
EzsignbulksendListElement.prototype['iEzsignsignature'] = undefined;

/**
 * The total number of already signed Ezsignsignature blocks in the Ezsignbulksend
 * @member {Number} iEzsignsignatureSigned
 */
EzsignbulksendListElement.prototype['iEzsignsignatureSigned'] = undefined;

/**
 * Whether the Ezsignbulksend is active or not
 * @member {Boolean} bEzsignbulksendIsactive
 */
EzsignbulksendListElement.prototype['bEzsignbulksendIsactive'] = undefined;






export default EzsignbulksendListElement;

