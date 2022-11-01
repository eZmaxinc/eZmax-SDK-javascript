/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentRequest from './EzsigndocumentRequest';

/**
 * The EzsigndocumentRequestCompound model module.
 * @module eZmaxAPI/model/EzsigndocumentRequestCompound
 * @version 1.1.14
 */
class EzsigndocumentRequestCompound {
    /**
     * Constructs a new <code>EzsigndocumentRequestCompound</code>.
     * An Ezsigndocument Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigndocumentRequestCompound
     * @implements module:eZmaxAPI/model/EzsigndocumentRequest
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param eEzsigndocumentSource {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum} Indicates where to look for the document binary content.
     * @param dtEzsigndocumentDuedate {String} The maximum date and time at which the Ezsigndocument can be signed.
     * @param sEzsigndocumentName {String} The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    constructor(fkiEzsignfolderID, fkiLanguageID, eEzsigndocumentSource, dtEzsigndocumentDuedate, sEzsigndocumentName) { 
        EzsigndocumentRequest.initialize(this, fkiEzsignfolderID, fkiLanguageID, eEzsigndocumentSource, dtEzsigndocumentDuedate, sEzsigndocumentName);
        EzsigndocumentRequestCompound.initialize(this, fkiEzsignfolderID, fkiLanguageID, eEzsigndocumentSource, dtEzsigndocumentDuedate, sEzsigndocumentName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID, fkiLanguageID, eEzsigndocumentSource, dtEzsigndocumentDuedate, sEzsigndocumentName) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['eEzsigndocumentSource'] = eEzsigndocumentSource;
        obj['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
        obj['sEzsigndocumentName'] = sEzsigndocumentName;
    }

    /**
     * Constructs a <code>EzsigndocumentRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestCompound} The populated <code>EzsigndocumentRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentRequestCompound();
            EzsigndocumentRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigndocumentID')) {
                obj['pkiEzsigndocumentID'] = ApiClient.convertToType(data['pkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsigndocumentSource')) {
                obj['eEzsigndocumentSource'] = ApiClient.convertToType(data['eEzsigndocumentSource'], 'String');
            }
            if (data.hasOwnProperty('eEzsigndocumentFormat')) {
                obj['eEzsigndocumentFormat'] = ApiClient.convertToType(data['eEzsigndocumentFormat'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentBase64')) {
                obj['sEzsigndocumentBase64'] = ApiClient.convertToType(data['sEzsigndocumentBase64'], 'Blob');
            }
            if (data.hasOwnProperty('sEzsigndocumentUrl')) {
                obj['sEzsigndocumentUrl'] = ApiClient.convertToType(data['sEzsigndocumentUrl'], 'String');
            }
            if (data.hasOwnProperty('bEzsigndocumentForcerepair')) {
                obj['bEzsigndocumentForcerepair'] = ApiClient.convertToType(data['bEzsigndocumentForcerepair'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsigndocumentPassword')) {
                obj['sEzsigndocumentPassword'] = ApiClient.convertToType(data['sEzsigndocumentPassword'], 'String');
            }
            if (data.hasOwnProperty('eEzsigndocumentForm')) {
                obj['eEzsigndocumentForm'] = ApiClient.convertToType(data['eEzsigndocumentForm'], 'String');
            }
            if (data.hasOwnProperty('dtEzsigndocumentDuedate')) {
                obj['dtEzsigndocumentDuedate'] = ApiClient.convertToType(data['dtEzsigndocumentDuedate'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigndocument
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigndocumentID() {
        return this.pkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigndocument
     * @param {Number} pkiEzsigndocumentID The unique ID of the Ezsigndocument
     */
    setPkiEzsigndocumentID(pkiEzsigndocumentID) {
        this['pkiEzsigndocumentID'] = pkiEzsigndocumentID;
    }
/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} fkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }
/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
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
     * Returns Indicates where to look for the document binary content.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum}
     */
    getEEzsigndocumentSource() {
        return this.eEzsigndocumentSource;
    }

    /**
     * Sets Indicates where to look for the document binary content.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum} eEzsigndocumentSource Indicates where to look for the document binary content.
     */
    setEEzsigndocumentSource(eEzsigndocumentSource) {
        this['eEzsigndocumentSource'] = eEzsigndocumentSource;
    }
/**
     * Returns Indicates the format of the document.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormatEnum}
     */
    getEEzsigndocumentFormat() {
        return this.eEzsigndocumentFormat;
    }

    /**
     * Sets Indicates the format of the document.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormatEnum} eEzsigndocumentFormat Indicates the format of the document.
     */
    setEEzsigndocumentFormat(eEzsigndocumentFormat) {
        this['eEzsigndocumentFormat'] = eEzsigndocumentFormat;
    }
/**
     * Returns The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     * @return {Blob}
     */
    getSEzsigndocumentBase64() {
        return this.sEzsigndocumentBase64;
    }

    /**
     * Sets The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     * @param {Blob} sEzsigndocumentBase64 The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
     */
    setSEzsigndocumentBase64(sEzsigndocumentBase64) {
        this['sEzsigndocumentBase64'] = sEzsigndocumentBase64;
    }
/**
     * Returns The url where the document content resides.  This field is Required when eEzsigndocumentSource = Url.
     * @return {String}
     */
    getSEzsigndocumentUrl() {
        return this.sEzsigndocumentUrl;
    }

    /**
     * Sets The url where the document content resides.  This field is Required when eEzsigndocumentSource = Url.
     * @param {String} sEzsigndocumentUrl The url where the document content resides.  This field is Required when eEzsigndocumentSource = Url.
     */
    setSEzsigndocumentUrl(sEzsigndocumentUrl) {
        this['sEzsigndocumentUrl'] = sEzsigndocumentUrl;
    }
/**
     * Returns Try to repair the document or flatten it if it cannot be used for electronic signature. 
     * @return {Boolean}
     */
    getBEzsigndocumentForcerepair() {
        return this.bEzsigndocumentForcerepair;
    }

    /**
     * Sets Try to repair the document or flatten it if it cannot be used for electronic signature. 
     * @param {Boolean} bEzsigndocumentForcerepair Try to repair the document or flatten it if it cannot be used for electronic signature. 
     */
    setBEzsigndocumentForcerepair(bEzsigndocumentForcerepair) {
        this['bEzsigndocumentForcerepair'] = bEzsigndocumentForcerepair;
    }
/**
     * Returns If the source document is password protected, the password to open/modify it.
     * @return {String}
     */
    getSEzsigndocumentPassword() {
        return this.sEzsigndocumentPassword;
    }

    /**
     * Sets If the source document is password protected, the password to open/modify it.
     * @param {String} sEzsigndocumentPassword If the source document is password protected, the password to open/modify it.
     */
    setSEzsigndocumentPassword(sEzsigndocumentPassword) {
        this['sEzsigndocumentPassword'] = sEzsigndocumentPassword;
    }
/**
     * Returns If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormEnum}
     */
    getEEzsigndocumentForm() {
        return this.eEzsigndocumentForm;
    }

    /**
     * Sets If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormEnum} eEzsigndocumentForm If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**
     */
    setEEzsigndocumentForm(eEzsigndocumentForm) {
        this['eEzsigndocumentForm'] = eEzsigndocumentForm;
    }
/**
     * Returns The maximum date and time at which the Ezsigndocument can be signed.
     * @return {String}
     */
    getDtEzsigndocumentDuedate() {
        return this.dtEzsigndocumentDuedate;
    }

    /**
     * Sets The maximum date and time at which the Ezsigndocument can be signed.
     * @param {String} dtEzsigndocumentDuedate The maximum date and time at which the Ezsigndocument can be signed.
     */
    setDtEzsigndocumentDuedate(dtEzsigndocumentDuedate) {
        this['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
    }
/**
     * Returns The name of the document that will be presented to Ezsignfoldersignerassociations
     * @return {String}
     */
    getSEzsigndocumentName() {
        return this.sEzsigndocumentName;
    }

    /**
     * Sets The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param {String} sEzsigndocumentName The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    setSEzsigndocumentName(sEzsigndocumentName) {
        this['sEzsigndocumentName'] = sEzsigndocumentName;
    }

}

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentRequestCompound.prototype['pkiEzsigndocumentID'] = undefined;

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentRequestCompound.prototype['fkiEzsignfolderID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigndocumentRequestCompound.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsigndocumentRequestCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentRequestCompound.prototype['fkiLanguageID'] = undefined;

/**
 * Indicates where to look for the document binary content.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentSourceEnum} eEzsigndocumentSource
 */
EzsigndocumentRequestCompound.prototype['eEzsigndocumentSource'] = undefined;

/**
 * Indicates the format of the document.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormatEnum} eEzsigndocumentFormat
 */
EzsigndocumentRequestCompound.prototype['eEzsigndocumentFormat'] = undefined;

/**
 * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
 * @member {Blob} sEzsigndocumentBase64
 */
EzsigndocumentRequestCompound.prototype['sEzsigndocumentBase64'] = undefined;

/**
 * The url where the document content resides.  This field is Required when eEzsigndocumentSource = Url.
 * @member {String} sEzsigndocumentUrl
 */
EzsigndocumentRequestCompound.prototype['sEzsigndocumentUrl'] = undefined;

/**
 * Try to repair the document or flatten it if it cannot be used for electronic signature. 
 * @member {Boolean} bEzsigndocumentForcerepair
 * @default true
 */
EzsigndocumentRequestCompound.prototype['bEzsigndocumentForcerepair'] = true;

/**
 * If the source document is password protected, the password to open/modify it.
 * @member {String} sEzsigndocumentPassword
 */
EzsigndocumentRequestCompound.prototype['sEzsigndocumentPassword'] = undefined;

/**
 * If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequestCompound.EEzsigndocumentFormEnum} eEzsigndocumentForm
 */
EzsigndocumentRequestCompound.prototype['eEzsigndocumentForm'] = undefined;

/**
 * The maximum date and time at which the Ezsigndocument can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentRequestCompound.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentRequestCompound.prototype['sEzsigndocumentName'] = undefined;


// Implement EzsigndocumentRequest interface:
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} pkiEzsigndocumentID
 */
EzsigndocumentRequest.prototype['pkiEzsigndocumentID'] = undefined;
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
EzsigndocumentRequest.prototype['fkiEzsignfolderID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigndocumentRequest.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsigndocumentRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigndocumentRequest.prototype['fkiLanguageID'] = undefined;
/**
 * Indicates where to look for the document binary content.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentSourceEnum} eEzsigndocumentSource
 */
EzsigndocumentRequest.prototype['eEzsigndocumentSource'] = undefined;
/**
 * Indicates the format of the document.
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormatEnum} eEzsigndocumentFormat
 */
EzsigndocumentRequest.prototype['eEzsigndocumentFormat'] = undefined;
/**
 * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
 * @member {Blob} sEzsigndocumentBase64
 */
EzsigndocumentRequest.prototype['sEzsigndocumentBase64'] = undefined;
/**
 * The url where the document content resides.  This field is Required when eEzsigndocumentSource = Url.
 * @member {String} sEzsigndocumentUrl
 */
EzsigndocumentRequest.prototype['sEzsigndocumentUrl'] = undefined;
/**
 * Try to repair the document or flatten it if it cannot be used for electronic signature. 
 * @member {Boolean} bEzsigndocumentForcerepair
 * @default true
 */
EzsigndocumentRequest.prototype['bEzsigndocumentForcerepair'] = true;
/**
 * If the source document is password protected, the password to open/modify it.
 * @member {String} sEzsigndocumentPassword
 */
EzsigndocumentRequest.prototype['sEzsigndocumentPassword'] = undefined;
/**
 * If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsignformfieldgroups and assign them to the specified **fkiEzsignfoldersignerassociationID**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequest.EEzsigndocumentFormEnum} eEzsigndocumentForm
 */
EzsigndocumentRequest.prototype['eEzsigndocumentForm'] = undefined;
/**
 * The maximum date and time at which the Ezsigndocument can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentRequest.prototype['dtEzsigndocumentDuedate'] = undefined;
/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentRequest.prototype['sEzsigndocumentName'] = undefined;



/**
 * Allowed values for the <code>eEzsigndocumentSource</code> property.
 * @enum {String}
 * @readonly
 */
EzsigndocumentRequestCompound['EEzsigndocumentSourceEnum'] = {

    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64",

    /**
     * value: "Ezsigntemplate"
     * @const
     */
    "Ezsigntemplate": "Ezsigntemplate",

    /**
     * value: "Url"
     * @const
     */
    "Url": "Url"
};


/**
 * Allowed values for the <code>eEzsigndocumentFormat</code> property.
 * @enum {String}
 * @readonly
 */
EzsigndocumentRequestCompound['EEzsigndocumentFormatEnum'] = {

    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf"
};


/**
 * Allowed values for the <code>eEzsigndocumentForm</code> property.
 * @enum {String}
 * @readonly
 */
EzsigndocumentRequestCompound['EEzsigndocumentFormEnum'] = {

    /**
     * value: "Keep"
     * @const
     */
    "Keep": "Keep",

    /**
     * value: "Convert"
     * @const
     */
    "Convert": "Convert"
};



export default EzsigndocumentRequestCompound;

