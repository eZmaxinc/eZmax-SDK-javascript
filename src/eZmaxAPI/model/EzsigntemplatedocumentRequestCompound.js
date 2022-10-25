/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentRequest from './EzsigntemplatedocumentRequest';

/**
 * The EzsigntemplatedocumentRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentRequestCompound
 * @version 1.1.11
 */
class EzsigntemplatedocumentRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplatedocumentRequestCompound</code>.
     * A Ezsigntemplatedocument Object and children
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatedocumentRequest
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatedocumentName {String} The name of the Ezsigntemplatedocument.
     * @param eEzsigntemplatedocumentSource {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentSourceEnum} Indicates where to look for the document binary content.
     */
    constructor(fkiEzsigntemplateID, sEzsigntemplatedocumentName, eEzsigntemplatedocumentSource) { 
        EzsigntemplatedocumentRequest.initialize(this, fkiEzsigntemplateID, sEzsigntemplatedocumentName, eEzsigntemplatedocumentSource);
        EzsigntemplatedocumentRequestCompound.initialize(this, fkiEzsigntemplateID, sEzsigntemplatedocumentName, eEzsigntemplatedocumentSource);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplateID, sEzsigntemplatedocumentName, eEzsigntemplatedocumentSource) { 
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
        obj['eEzsigntemplatedocumentSource'] = eEzsigntemplatedocumentSource;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound} The populated <code>EzsigntemplatedocumentRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentRequestCompound();
            EzsigntemplatedocumentRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatedocumentID')) {
                obj['pkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['pkiEzsigntemplatedocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatedocumentName')) {
                obj['sEzsigntemplatedocumentName'] = ApiClient.convertToType(data['sEzsigntemplatedocumentName'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplatedocumentSource')) {
                obj['eEzsigntemplatedocumentSource'] = ApiClient.convertToType(data['eEzsigntemplatedocumentSource'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplatedocumentFormat')) {
                obj['eEzsigntemplatedocumentFormat'] = ApiClient.convertToType(data['eEzsigntemplatedocumentFormat'], 'String');
            }
            if (data.hasOwnProperty('sEzsigntemplatedocumentBase64')) {
                obj['sEzsigntemplatedocumentBase64'] = ApiClient.convertToType(data['sEzsigntemplatedocumentBase64'], 'Blob');
            }
            if (data.hasOwnProperty('sEzsigntemplatedocumentUrl')) {
                obj['sEzsigntemplatedocumentUrl'] = ApiClient.convertToType(data['sEzsigntemplatedocumentUrl'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatedocumentForcerepair')) {
                obj['bEzsigntemplatedocumentForcerepair'] = ApiClient.convertToType(data['bEzsigntemplatedocumentForcerepair'], 'Boolean');
            }
            if (data.hasOwnProperty('eEzsigntemplatedocumentForm')) {
                obj['eEzsigntemplatedocumentForm'] = ApiClient.convertToType(data['eEzsigntemplatedocumentForm'], 'String');
            }
            if (data.hasOwnProperty('sEzsigntemplatedocumentPassword')) {
                obj['sEzsigntemplatedocumentPassword'] = ApiClient.convertToType(data['sEzsigntemplatedocumentPassword'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatedocument
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatedocumentID() {
        return this.pkiEzsigntemplatedocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatedocument
     * @param {Number} pkiEzsigntemplatedocumentID The unique ID of the Ezsigntemplatedocument
     */
    setPkiEzsigntemplatedocumentID(pkiEzsigntemplatedocumentID) {
        this['pkiEzsigntemplatedocumentID'] = pkiEzsigntemplatedocumentID;
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
     * Returns The unique ID of the Ezsigndocument
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigndocumentID() {
        return this.fkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigndocument
     * @param {Number} fkiEzsigndocumentID The unique ID of the Ezsigndocument
     */
    setFkiEzsigndocumentID(fkiEzsigndocumentID) {
        this['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatesignerID() {
        return this.fkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} fkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setFkiEzsigntemplatesignerID(fkiEzsigntemplatesignerID) {
        this['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }
/**
     * Returns The name of the Ezsigntemplatedocument.
     * @return {String}
     */
    getSEzsigntemplatedocumentName() {
        return this.sEzsigntemplatedocumentName;
    }

    /**
     * Sets The name of the Ezsigntemplatedocument.
     * @param {String} sEzsigntemplatedocumentName The name of the Ezsigntemplatedocument.
     */
    setSEzsigntemplatedocumentName(sEzsigntemplatedocumentName) {
        this['sEzsigntemplatedocumentName'] = sEzsigntemplatedocumentName;
    }
/**
     * Returns Indicates where to look for the document binary content.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentSourceEnum}
     */
    getEEzsigntemplatedocumentSource() {
        return this.eEzsigntemplatedocumentSource;
    }

    /**
     * Sets Indicates where to look for the document binary content.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentSourceEnum} eEzsigntemplatedocumentSource Indicates where to look for the document binary content.
     */
    setEEzsigntemplatedocumentSource(eEzsigntemplatedocumentSource) {
        this['eEzsigntemplatedocumentSource'] = eEzsigntemplatedocumentSource;
    }
/**
     * Returns Indicates the format of the template.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormatEnum}
     */
    getEEzsigntemplatedocumentFormat() {
        return this.eEzsigntemplatedocumentFormat;
    }

    /**
     * Sets Indicates the format of the template.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormatEnum} eEzsigntemplatedocumentFormat Indicates the format of the template.
     */
    setEEzsigntemplatedocumentFormat(eEzsigntemplatedocumentFormat) {
        this['eEzsigntemplatedocumentFormat'] = eEzsigntemplatedocumentFormat;
    }
/**
     * Returns The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource = Base64.
     * @return {Blob}
     */
    getSEzsigntemplatedocumentBase64() {
        return this.sEzsigntemplatedocumentBase64;
    }

    /**
     * Sets The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource = Base64.
     * @param {Blob} sEzsigntemplatedocumentBase64 The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource = Base64.
     */
    setSEzsigntemplatedocumentBase64(sEzsigntemplatedocumentBase64) {
        this['sEzsigntemplatedocumentBase64'] = sEzsigntemplatedocumentBase64;
    }
/**
     * Returns The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource = Url.
     * @return {String}
     */
    getSEzsigntemplatedocumentUrl() {
        return this.sEzsigntemplatedocumentUrl;
    }

    /**
     * Sets The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource = Url.
     * @param {String} sEzsigntemplatedocumentUrl The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource = Url.
     */
    setSEzsigntemplatedocumentUrl(sEzsigntemplatedocumentUrl) {
        this['sEzsigntemplatedocumentUrl'] = sEzsigntemplatedocumentUrl;
    }
/**
     * Returns Try to repair the document or flatten it if it cannot be used for electronic signature.
     * @return {Boolean}
     */
    getBEzsigntemplatedocumentForcerepair() {
        return this.bEzsigntemplatedocumentForcerepair;
    }

    /**
     * Sets Try to repair the document or flatten it if it cannot be used for electronic signature.
     * @param {Boolean} bEzsigntemplatedocumentForcerepair Try to repair the document or flatten it if it cannot be used for electronic signature.
     */
    setBEzsigntemplatedocumentForcerepair(bEzsigntemplatedocumentForcerepair) {
        this['bEzsigntemplatedocumentForcerepair'] = bEzsigntemplatedocumentForcerepair;
    }
/**
     * Returns If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormEnum}
     */
    getEEzsigntemplatedocumentForm() {
        return this.eEzsigntemplatedocumentForm;
    }

    /**
     * Sets If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormEnum} eEzsigntemplatedocumentForm If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**
     */
    setEEzsigntemplatedocumentForm(eEzsigntemplatedocumentForm) {
        this['eEzsigntemplatedocumentForm'] = eEzsigntemplatedocumentForm;
    }
/**
     * Returns If the source template is password protected, the password to open/modify it.
     * @return {String}
     */
    getSEzsigntemplatedocumentPassword() {
        return this.sEzsigntemplatedocumentPassword;
    }

    /**
     * Sets If the source template is password protected, the password to open/modify it.
     * @param {String} sEzsigntemplatedocumentPassword If the source template is password protected, the password to open/modify it.
     */
    setSEzsigntemplatedocumentPassword(sEzsigntemplatedocumentPassword) {
        this['sEzsigntemplatedocumentPassword'] = sEzsigntemplatedocumentPassword;
    }

}

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} pkiEzsigntemplatedocumentID
 */
EzsigntemplatedocumentRequestCompound.prototype['pkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatedocumentRequestCompound.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsigntemplatedocumentRequestCompound.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatedocumentRequestCompound.prototype['fkiEzsigntemplatesignerID'] = undefined;

/**
 * The name of the Ezsigntemplatedocument.
 * @member {String} sEzsigntemplatedocumentName
 */
EzsigntemplatedocumentRequestCompound.prototype['sEzsigntemplatedocumentName'] = undefined;

/**
 * Indicates where to look for the document binary content.
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentSourceEnum} eEzsigntemplatedocumentSource
 */
EzsigntemplatedocumentRequestCompound.prototype['eEzsigntemplatedocumentSource'] = undefined;

/**
 * Indicates the format of the template.
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormatEnum} eEzsigntemplatedocumentFormat
 */
EzsigntemplatedocumentRequestCompound.prototype['eEzsigntemplatedocumentFormat'] = undefined;

/**
 * The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource = Base64.
 * @member {Blob} sEzsigntemplatedocumentBase64
 */
EzsigntemplatedocumentRequestCompound.prototype['sEzsigntemplatedocumentBase64'] = undefined;

/**
 * The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource = Url.
 * @member {String} sEzsigntemplatedocumentUrl
 */
EzsigntemplatedocumentRequestCompound.prototype['sEzsigntemplatedocumentUrl'] = undefined;

/**
 * Try to repair the document or flatten it if it cannot be used for electronic signature.
 * @member {Boolean} bEzsigntemplatedocumentForcerepair
 */
EzsigntemplatedocumentRequestCompound.prototype['bEzsigntemplatedocumentForcerepair'] = undefined;

/**
 * If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound.EEzsigntemplatedocumentFormEnum} eEzsigntemplatedocumentForm
 */
EzsigntemplatedocumentRequestCompound.prototype['eEzsigntemplatedocumentForm'] = undefined;

/**
 * If the source template is password protected, the password to open/modify it.
 * @member {String} sEzsigntemplatedocumentPassword
 * @default ''
 */
EzsigntemplatedocumentRequestCompound.prototype['sEzsigntemplatedocumentPassword'] = '';


// Implement EzsigntemplatedocumentRequest interface:
/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} pkiEzsigntemplatedocumentID
 */
EzsigntemplatedocumentRequest.prototype['pkiEzsigntemplatedocumentID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatedocumentRequest.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsigntemplatedocumentRequest.prototype['fkiEzsigndocumentID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatedocumentRequest.prototype['fkiEzsigntemplatesignerID'] = undefined;
/**
 * The name of the Ezsigntemplatedocument.
 * @member {String} sEzsigntemplatedocumentName
 */
EzsigntemplatedocumentRequest.prototype['sEzsigntemplatedocumentName'] = undefined;
/**
 * Indicates where to look for the document binary content.
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequest.EEzsigntemplatedocumentSourceEnum} eEzsigntemplatedocumentSource
 */
EzsigntemplatedocumentRequest.prototype['eEzsigntemplatedocumentSource'] = undefined;
/**
 * Indicates the format of the template.
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequest.EEzsigntemplatedocumentFormatEnum} eEzsigntemplatedocumentFormat
 */
EzsigntemplatedocumentRequest.prototype['eEzsigntemplatedocumentFormat'] = undefined;
/**
 * The Base64 encoded binary content of the document.  This field is Required when eEzsigntemplatedocumentSource = Base64.
 * @member {Blob} sEzsigntemplatedocumentBase64
 */
EzsigntemplatedocumentRequest.prototype['sEzsigntemplatedocumentBase64'] = undefined;
/**
 * The url where the document content resides.  This field is Required when eEzsigntemplatedocumentSource = Url.
 * @member {String} sEzsigntemplatedocumentUrl
 */
EzsigntemplatedocumentRequest.prototype['sEzsigntemplatedocumentUrl'] = undefined;
/**
 * Try to repair the document or flatten it if it cannot be used for electronic signature.
 * @member {Boolean} bEzsigntemplatedocumentForcerepair
 */
EzsigntemplatedocumentRequest.prototype['bEzsigntemplatedocumentForcerepair'] = undefined;
/**
 * If the document contains an existing PDF form this property must be set.  **Keep** leaves the form as-is in the document.  **Convert** removes the form and convert all the existing fields to Ezsigntemplateformfieldgroups and assign them to the specified **fkiEzsigntemplatesignerID**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequest.EEzsigntemplatedocumentFormEnum} eEzsigntemplatedocumentForm
 */
EzsigntemplatedocumentRequest.prototype['eEzsigntemplatedocumentForm'] = undefined;
/**
 * If the source template is password protected, the password to open/modify it.
 * @member {String} sEzsigntemplatedocumentPassword
 * @default ''
 */
EzsigntemplatedocumentRequest.prototype['sEzsigntemplatedocumentPassword'] = '';



/**
 * Allowed values for the <code>eEzsigntemplatedocumentSource</code> property.
 * @enum {String}
 * @readonly
 */
EzsigntemplatedocumentRequestCompound['EEzsigntemplatedocumentSourceEnum'] = {

    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64",

    /**
     * value: "Url"
     * @const
     */
    "Url": "Url",

    /**
     * value: "Ezsigndocument"
     * @const
     */
    "Ezsigndocument": "Ezsigndocument"
};


/**
 * Allowed values for the <code>eEzsigntemplatedocumentFormat</code> property.
 * @enum {String}
 * @readonly
 */
EzsigntemplatedocumentRequestCompound['EEzsigntemplatedocumentFormatEnum'] = {

    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf"
};


/**
 * Allowed values for the <code>eEzsigntemplatedocumentForm</code> property.
 * @enum {String}
 * @readonly
 */
EzsigntemplatedocumentRequestCompound['EEzsigntemplatedocumentFormEnum'] = {

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



export default EzsigntemplatedocumentRequestCompound;

