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
import FieldEEzsignformfieldgroupSignerrequirement from './FieldEEzsignformfieldgroupSignerrequirement';
import FieldEEzsignformfieldgroupTooltipposition from './FieldEEzsignformfieldgroupTooltipposition';
import FieldEEzsignformfieldgroupType from './FieldEEzsignformfieldgroupType';

/**
 * The EzsignformfieldgroupResponse model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupResponse
 * @version 1.1.18
 */
class EzsignformfieldgroupResponse {
    /**
     * Constructs a new <code>EzsignformfieldgroupResponse</code>.
     * An Ezsignformfieldgroup Object
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupResponse
     * @param pkiEzsignformfieldgroupID {Number} The unique ID of the Ezsignformfieldgroup
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param eEzsignformfieldgroupType {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} 
     * @param eEzsignformfieldgroupSignerrequirement {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} 
     * @param sEzsignformfieldgroupLabel {String} The Label for the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupStep {Number} The step when the Ezsignsigner will be invited to fill the form fields
     * @param iEzsignformfieldgroupFilledmin {Number} The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupFilledmax {Number} The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param bEzsignformfieldgroupReadonly {Boolean} Whether the Ezsignformfieldgroup is read only or not.
     */
    constructor(pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly) { 
        
        EzsignformfieldgroupResponse.initialize(this, pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly) { 
        obj['pkiEzsignformfieldgroupID'] = pkiEzsignformfieldgroupID;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['eEzsignformfieldgroupType'] = eEzsignformfieldgroupType;
        obj['eEzsignformfieldgroupSignerrequirement'] = eEzsignformfieldgroupSignerrequirement;
        obj['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
        obj['iEzsignformfieldgroupStep'] = iEzsignformfieldgroupStep;
        obj['iEzsignformfieldgroupFilledmin'] = iEzsignformfieldgroupFilledmin;
        obj['iEzsignformfieldgroupFilledmax'] = iEzsignformfieldgroupFilledmax;
        obj['bEzsignformfieldgroupReadonly'] = bEzsignformfieldgroupReadonly;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupResponse} The populated <code>EzsignformfieldgroupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupResponse();

            if (data.hasOwnProperty('pkiEzsignformfieldgroupID')) {
                obj['pkiEzsignformfieldgroupID'] = ApiClient.convertToType(data['pkiEzsignformfieldgroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignformfieldgroupType')) {
                obj['eEzsignformfieldgroupType'] = FieldEEzsignformfieldgroupType.constructFromObject(data['eEzsignformfieldgroupType']);
            }
            if (data.hasOwnProperty('eEzsignformfieldgroupSignerrequirement')) {
                obj['eEzsignformfieldgroupSignerrequirement'] = FieldEEzsignformfieldgroupSignerrequirement.constructFromObject(data['eEzsignformfieldgroupSignerrequirement']);
            }
            if (data.hasOwnProperty('sEzsignformfieldgroupLabel')) {
                obj['sEzsignformfieldgroupLabel'] = ApiClient.convertToType(data['sEzsignformfieldgroupLabel'], 'String');
            }
            if (data.hasOwnProperty('iEzsignformfieldgroupStep')) {
                obj['iEzsignformfieldgroupStep'] = ApiClient.convertToType(data['iEzsignformfieldgroupStep'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignformfieldgroupDefaultvalue')) {
                obj['sEzsignformfieldgroupDefaultvalue'] = ApiClient.convertToType(data['sEzsignformfieldgroupDefaultvalue'], 'String');
            }
            if (data.hasOwnProperty('iEzsignformfieldgroupFilledmin')) {
                obj['iEzsignformfieldgroupFilledmin'] = ApiClient.convertToType(data['iEzsignformfieldgroupFilledmin'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignformfieldgroupFilledmax')) {
                obj['iEzsignformfieldgroupFilledmax'] = ApiClient.convertToType(data['iEzsignformfieldgroupFilledmax'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignformfieldgroupReadonly')) {
                obj['bEzsignformfieldgroupReadonly'] = ApiClient.convertToType(data['bEzsignformfieldgroupReadonly'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsignformfieldgroupMaxlength')) {
                obj['iEzsignformfieldgroupMaxlength'] = ApiClient.convertToType(data['iEzsignformfieldgroupMaxlength'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignformfieldgroupEncrypted')) {
                obj['bEzsignformfieldgroupEncrypted'] = ApiClient.convertToType(data['bEzsignformfieldgroupEncrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignformfieldgroupRegexp')) {
                obj['sEzsignformfieldgroupRegexp'] = ApiClient.convertToType(data['sEzsignformfieldgroupRegexp'], 'String');
            }
            if (data.hasOwnProperty('tEzsignformfieldgroupTooltip')) {
                obj['tEzsignformfieldgroupTooltip'] = ApiClient.convertToType(data['tEzsignformfieldgroupTooltip'], 'String');
            }
            if (data.hasOwnProperty('eEzsignformfieldgroupTooltipposition')) {
                obj['eEzsignformfieldgroupTooltipposition'] = FieldEEzsignformfieldgroupTooltipposition.constructFromObject(data['eEzsignformfieldgroupTooltipposition']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignformfieldgroupResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignformfieldgroupResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignformfieldgroupResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldgroupLabel'] && !(typeof data['sEzsignformfieldgroupLabel'] === 'string' || data['sEzsignformfieldgroupLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldgroupLabel` to be a primitive type in the JSON string but got " + data['sEzsignformfieldgroupLabel']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldgroupDefaultvalue'] && !(typeof data['sEzsignformfieldgroupDefaultvalue'] === 'string' || data['sEzsignformfieldgroupDefaultvalue'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldgroupDefaultvalue` to be a primitive type in the JSON string but got " + data['sEzsignformfieldgroupDefaultvalue']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldgroupRegexp'] && !(typeof data['sEzsignformfieldgroupRegexp'] === 'string' || data['sEzsignformfieldgroupRegexp'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldgroupRegexp` to be a primitive type in the JSON string but got " + data['sEzsignformfieldgroupRegexp']);
        }
        // ensure the json data is a string
        if (data['tEzsignformfieldgroupTooltip'] && !(typeof data['tEzsignformfieldgroupTooltip'] === 'string' || data['tEzsignformfieldgroupTooltip'] instanceof String)) {
            throw new Error("Expected the field `tEzsignformfieldgroupTooltip` to be a primitive type in the JSON string but got " + data['tEzsignformfieldgroupTooltip']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignformfieldgroupID() {
        return this.pkiEzsignformfieldgroupID;
    }

    /**
     * Sets The unique ID of the Ezsignformfieldgroup
     * @param {Number} pkiEzsignformfieldgroupID The unique ID of the Ezsignformfieldgroup
     */
    setPkiEzsignformfieldgroupID(pkiEzsignformfieldgroupID) {
        this['pkiEzsignformfieldgroupID'] = pkiEzsignformfieldgroupID;
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
     * @return {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType}
     */
    getEEzsignformfieldgroupType() {
        return this.eEzsignformfieldgroupType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
     */
    setEEzsignformfieldgroupType(eEzsignformfieldgroupType) {
        this['eEzsignformfieldgroupType'] = eEzsignformfieldgroupType;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement}
     */
    getEEzsignformfieldgroupSignerrequirement() {
        return this.eEzsignformfieldgroupSignerrequirement;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
     */
    setEEzsignformfieldgroupSignerrequirement(eEzsignformfieldgroupSignerrequirement) {
        this['eEzsignformfieldgroupSignerrequirement'] = eEzsignformfieldgroupSignerrequirement;
    }
/**
     * Returns The Label for the Ezsignformfieldgroup
     * @return {String}
     */
    getSEzsignformfieldgroupLabel() {
        return this.sEzsignformfieldgroupLabel;
    }

    /**
     * Sets The Label for the Ezsignformfieldgroup
     * @param {String} sEzsignformfieldgroupLabel The Label for the Ezsignformfieldgroup
     */
    setSEzsignformfieldgroupLabel(sEzsignformfieldgroupLabel) {
        this['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
    }
/**
     * Returns The step when the Ezsignsigner will be invited to fill the form fields
     * minimum: 1
     * @return {Number}
     */
    getIEzsignformfieldgroupStep() {
        return this.iEzsignformfieldgroupStep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to fill the form fields
     * @param {Number} iEzsignformfieldgroupStep The step when the Ezsignsigner will be invited to fill the form fields
     */
    setIEzsignformfieldgroupStep(iEzsignformfieldgroupStep) {
        this['iEzsignformfieldgroupStep'] = iEzsignformfieldgroupStep;
    }
/**
     * Returns The default value for the Ezsignformfieldgroup
     * @return {String}
     */
    getSEzsignformfieldgroupDefaultvalue() {
        return this.sEzsignformfieldgroupDefaultvalue;
    }

    /**
     * Sets The default value for the Ezsignformfieldgroup
     * @param {String} sEzsignformfieldgroupDefaultvalue The default value for the Ezsignformfieldgroup
     */
    setSEzsignformfieldgroupDefaultvalue(sEzsignformfieldgroupDefaultvalue) {
        this['sEzsignformfieldgroupDefaultvalue'] = sEzsignformfieldgroupDefaultvalue;
    }
/**
     * Returns The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldgroupFilledmin() {
        return this.iEzsignformfieldgroupFilledmin;
    }

    /**
     * Sets The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param {Number} iEzsignformfieldgroupFilledmin The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     */
    setIEzsignformfieldgroupFilledmin(iEzsignformfieldgroupFilledmin) {
        this['iEzsignformfieldgroupFilledmin'] = iEzsignformfieldgroupFilledmin;
    }
/**
     * Returns The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldgroupFilledmax() {
        return this.iEzsignformfieldgroupFilledmax;
    }

    /**
     * Sets The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param {Number} iEzsignformfieldgroupFilledmax The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     */
    setIEzsignformfieldgroupFilledmax(iEzsignformfieldgroupFilledmax) {
        this['iEzsignformfieldgroupFilledmax'] = iEzsignformfieldgroupFilledmax;
    }
/**
     * Returns Whether the Ezsignformfieldgroup is read only or not.
     * @return {Boolean}
     */
    getBEzsignformfieldgroupReadonly() {
        return this.bEzsignformfieldgroupReadonly;
    }

    /**
     * Sets Whether the Ezsignformfieldgroup is read only or not.
     * @param {Boolean} bEzsignformfieldgroupReadonly Whether the Ezsignformfieldgroup is read only or not.
     */
    setBEzsignformfieldgroupReadonly(bEzsignformfieldgroupReadonly) {
        this['bEzsignformfieldgroupReadonly'] = bEzsignformfieldgroupReadonly;
    }
/**
     * Returns The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldgroupMaxlength() {
        return this.iEzsignformfieldgroupMaxlength;
    }

    /**
     * Sets The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * @param {Number} iEzsignformfieldgroupMaxlength The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     */
    setIEzsignformfieldgroupMaxlength(iEzsignformfieldgroupMaxlength) {
        this['iEzsignformfieldgroupMaxlength'] = iEzsignformfieldgroupMaxlength;
    }
/**
     * Returns Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * @return {Boolean}
     */
    getBEzsignformfieldgroupEncrypted() {
        return this.bEzsignformfieldgroupEncrypted;
    }

    /**
     * Sets Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * @param {Boolean} bEzsignformfieldgroupEncrypted Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     */
    setBEzsignformfieldgroupEncrypted(bEzsignformfieldgroupEncrypted) {
        this['bEzsignformfieldgroupEncrypted'] = bEzsignformfieldgroupEncrypted;
    }
/**
     * Returns A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * @return {String}
     */
    getSEzsignformfieldgroupRegexp() {
        return this.sEzsignformfieldgroupRegexp;
    }

    /**
     * Sets A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     * @param {String} sEzsignformfieldgroupRegexp A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
     */
    setSEzsignformfieldgroupRegexp(sEzsignformfieldgroupRegexp) {
        this['sEzsignformfieldgroupRegexp'] = sEzsignformfieldgroupRegexp;
    }
/**
     * Returns A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
     * @return {String}
     */
    getTEzsignformfieldgroupTooltip() {
        return this.tEzsignformfieldgroupTooltip;
    }

    /**
     * Sets A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
     * @param {String} tEzsignformfieldgroupTooltip A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
     */
    setTEzsignformfieldgroupTooltip(tEzsignformfieldgroupTooltip) {
        this['tEzsignformfieldgroupTooltip'] = tEzsignformfieldgroupTooltip;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition}
     */
    getEEzsignformfieldgroupTooltipposition() {
        return this.eEzsignformfieldgroupTooltipposition;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
     */
    setEEzsignformfieldgroupTooltipposition(eEzsignformfieldgroupTooltipposition) {
        this['eEzsignformfieldgroupTooltipposition'] = eEzsignformfieldgroupTooltipposition;
    }

}

EzsignformfieldgroupResponse.RequiredProperties = ["pkiEzsignformfieldgroupID", "fkiEzsigndocumentID", "eEzsignformfieldgroupType", "eEzsignformfieldgroupSignerrequirement", "sEzsignformfieldgroupLabel", "iEzsignformfieldgroupStep", "iEzsignformfieldgroupFilledmin", "iEzsignformfieldgroupFilledmax", "bEzsignformfieldgroupReadonly"];

/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupResponse.prototype['pkiEzsignformfieldgroupID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignformfieldgroupResponse.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
 */
EzsignformfieldgroupResponse.prototype['eEzsignformfieldgroupType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
 */
EzsignformfieldgroupResponse.prototype['eEzsignformfieldgroupSignerrequirement'] = undefined;

/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
EzsignformfieldgroupResponse.prototype['sEzsignformfieldgroupLabel'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to fill the form fields
 * @member {Number} iEzsignformfieldgroupStep
 */
EzsignformfieldgroupResponse.prototype['iEzsignformfieldgroupStep'] = undefined;

/**
 * The default value for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupDefaultvalue
 */
EzsignformfieldgroupResponse.prototype['sEzsignformfieldgroupDefaultvalue'] = undefined;

/**
 * The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmin
 */
EzsignformfieldgroupResponse.prototype['iEzsignformfieldgroupFilledmin'] = undefined;

/**
 * The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmax
 */
EzsignformfieldgroupResponse.prototype['iEzsignformfieldgroupFilledmax'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is read only or not.
 * @member {Boolean} bEzsignformfieldgroupReadonly
 */
EzsignformfieldgroupResponse.prototype['bEzsignformfieldgroupReadonly'] = undefined;

/**
 * The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsignformfieldgroupMaxlength
 */
EzsignformfieldgroupResponse.prototype['iEzsignformfieldgroupMaxlength'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsignformfieldgroupEncrypted
 */
EzsignformfieldgroupResponse.prototype['bEzsignformfieldgroupEncrypted'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsignformfieldgroupRegexp
 */
EzsignformfieldgroupResponse.prototype['sEzsignformfieldgroupRegexp'] = undefined;

/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
 * @member {String} tEzsignformfieldgroupTooltip
 */
EzsignformfieldgroupResponse.prototype['tEzsignformfieldgroupTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
 */
EzsignformfieldgroupResponse.prototype['eEzsignformfieldgroupTooltipposition'] = undefined;






export default EzsignformfieldgroupResponse;

