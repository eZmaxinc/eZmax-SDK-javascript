/**
 * eZmax API Definition
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
import CustomDropdownElementRequestCompound from './CustomDropdownElementRequestCompound';
import EzsignformfieldRequestCompound from './EzsignformfieldRequestCompound';
import EzsignformfieldgroupRequest from './EzsignformfieldgroupRequest';
import EzsignformfieldgroupRequestCompoundAllOf from './EzsignformfieldgroupRequestCompoundAllOf';
import EzsignformfieldgroupsignerRequestCompound from './EzsignformfieldgroupsignerRequestCompound';
import FieldEEzsignformfieldgroupSignerrequirement from './FieldEEzsignformfieldgroupSignerrequirement';
import FieldEEzsignformfieldgroupTooltipposition from './FieldEEzsignformfieldgroupTooltipposition';
import FieldEEzsignformfieldgroupType from './FieldEEzsignformfieldgroupType';

/**
 * The EzsignformfieldgroupRequestCompound model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupRequestCompound
 * @version 1.1.7
 */
class EzsignformfieldgroupRequestCompound {
    /**
     * Constructs a new <code>EzsignformfieldgroupRequestCompound</code>.
     * An Ezsignformfieldgroup Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound
     * @implements module:eZmaxAPI/model/EzsignformfieldgroupRequest
     * @implements module:eZmaxAPI/model/EzsignformfieldgroupRequestCompoundAllOf
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param eEzsignformfieldgroupType {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} 
     * @param eEzsignformfieldgroupSignerrequirement {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} 
     * @param sEzsignformfieldgroupLabel {String} The Label for the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupStep {Number} The step when the Ezsignsigner will be invited to fill the form fields
     * @param sEzsignformfieldgroupDefaultvalue {String} The default value for the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupFilledmin {Number} The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupFilledmax {Number} The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param bEzsignformfieldgroupReadonly {Boolean} Whether the Ezsignformfieldgroup is read only or not.
     * @param a_objEzsignformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} 
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} 
     */
    constructor(fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfieldgroupsigner, a_objEzsignformfield) { 
        EzsignformfieldgroupRequest.initialize(this, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly);EzsignformfieldgroupRequestCompoundAllOf.initialize(this, a_objEzsignformfieldgroupsigner, a_objEzsignformfield);
        EzsignformfieldgroupRequestCompound.initialize(this, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfieldgroupsigner, a_objEzsignformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfieldgroupsigner, a_objEzsignformfield) { 
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['eEzsignformfieldgroupType'] = eEzsignformfieldgroupType;
        obj['eEzsignformfieldgroupSignerrequirement'] = eEzsignformfieldgroupSignerrequirement;
        obj['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
        obj['iEzsignformfieldgroupStep'] = iEzsignformfieldgroupStep;
        obj['sEzsignformfieldgroupDefaultvalue'] = sEzsignformfieldgroupDefaultvalue;
        obj['iEzsignformfieldgroupFilledmin'] = iEzsignformfieldgroupFilledmin;
        obj['iEzsignformfieldgroupFilledmax'] = iEzsignformfieldgroupFilledmax;
        obj['bEzsignformfieldgroupReadonly'] = bEzsignformfieldgroupReadonly;
        obj['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupRequestCompound} The populated <code>EzsignformfieldgroupRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupRequestCompound();
            EzsignformfieldgroupRequest.constructFromObject(data, obj);
            EzsignformfieldgroupRequestCompoundAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('a_objEzsignformfieldgroupsigner')) {
                obj['a_objEzsignformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsignformfieldgroupsigner'], [EzsignformfieldgroupsignerRequestCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementRequestCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [EzsignformfieldRequestCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignformfieldgroup
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
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>}
     */
    getAObjEzsignformfieldgroupsigner() {
        return this.a_objEzsignformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} a_objEzsignformfieldgroupsigner
     */
    setAObjEzsignformfieldgroupsigner(a_objEzsignformfieldgroupsigner) {
        this['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>}
     */
    getAObjDropdownElement() {
        return this.a_objDropdownElement;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>} a_objDropdownElement
     */
    setAObjDropdownElement(a_objDropdownElement) {
        this['a_objDropdownElement'] = a_objDropdownElement;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
    }

}

/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupRequestCompound.prototype['pkiEzsignformfieldgroupID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignformfieldgroupRequestCompound.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
 */
EzsignformfieldgroupRequestCompound.prototype['eEzsignformfieldgroupType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
 */
EzsignformfieldgroupRequestCompound.prototype['eEzsignformfieldgroupSignerrequirement'] = undefined;

/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
EzsignformfieldgroupRequestCompound.prototype['sEzsignformfieldgroupLabel'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to fill the form fields
 * @member {Number} iEzsignformfieldgroupStep
 */
EzsignformfieldgroupRequestCompound.prototype['iEzsignformfieldgroupStep'] = undefined;

/**
 * The default value for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupDefaultvalue
 */
EzsignformfieldgroupRequestCompound.prototype['sEzsignformfieldgroupDefaultvalue'] = undefined;

/**
 * The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmin
 */
EzsignformfieldgroupRequestCompound.prototype['iEzsignformfieldgroupFilledmin'] = undefined;

/**
 * The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmax
 */
EzsignformfieldgroupRequestCompound.prototype['iEzsignformfieldgroupFilledmax'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is read only or not.
 * @member {Boolean} bEzsignformfieldgroupReadonly
 */
EzsignformfieldgroupRequestCompound.prototype['bEzsignformfieldgroupReadonly'] = undefined;

/**
 * The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsignformfieldgroupMaxlength
 */
EzsignformfieldgroupRequestCompound.prototype['iEzsignformfieldgroupMaxlength'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsignformfieldgroupEncrypted
 */
EzsignformfieldgroupRequestCompound.prototype['bEzsignformfieldgroupEncrypted'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsignformfieldgroupRegexp
 */
EzsignformfieldgroupRequestCompound.prototype['sEzsignformfieldgroupRegexp'] = undefined;

/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
 * @member {String} tEzsignformfieldgroupTooltip
 */
EzsignformfieldgroupRequestCompound.prototype['tEzsignformfieldgroupTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
 */
EzsignformfieldgroupRequestCompound.prototype['eEzsignformfieldgroupTooltipposition'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupRequestCompound.prototype['a_objEzsignformfieldgroupsigner'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>} a_objDropdownElement
 */
EzsignformfieldgroupRequestCompound.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupRequestCompound.prototype['a_objEzsignformfield'] = undefined;


// Implement EzsignformfieldgroupRequest interface:
/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupRequest.prototype['pkiEzsignformfieldgroupID'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignformfieldgroupRequest.prototype['fkiEzsigndocumentID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
 */
EzsignformfieldgroupRequest.prototype['eEzsignformfieldgroupType'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
 */
EzsignformfieldgroupRequest.prototype['eEzsignformfieldgroupSignerrequirement'] = undefined;
/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
EzsignformfieldgroupRequest.prototype['sEzsignformfieldgroupLabel'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to fill the form fields
 * @member {Number} iEzsignformfieldgroupStep
 */
EzsignformfieldgroupRequest.prototype['iEzsignformfieldgroupStep'] = undefined;
/**
 * The default value for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupDefaultvalue
 */
EzsignformfieldgroupRequest.prototype['sEzsignformfieldgroupDefaultvalue'] = undefined;
/**
 * The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmin
 */
EzsignformfieldgroupRequest.prototype['iEzsignformfieldgroupFilledmin'] = undefined;
/**
 * The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmax
 */
EzsignformfieldgroupRequest.prototype['iEzsignformfieldgroupFilledmax'] = undefined;
/**
 * Whether the Ezsignformfieldgroup is read only or not.
 * @member {Boolean} bEzsignformfieldgroupReadonly
 */
EzsignformfieldgroupRequest.prototype['bEzsignformfieldgroupReadonly'] = undefined;
/**
 * The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsignformfieldgroupMaxlength
 */
EzsignformfieldgroupRequest.prototype['iEzsignformfieldgroupMaxlength'] = undefined;
/**
 * Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsignformfieldgroupEncrypted
 */
EzsignformfieldgroupRequest.prototype['bEzsignformfieldgroupEncrypted'] = undefined;
/**
 * A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsignformfieldgroupRegexp
 */
EzsignformfieldgroupRequest.prototype['sEzsignformfieldgroupRegexp'] = undefined;
/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
 * @member {String} tEzsignformfieldgroupTooltip
 */
EzsignformfieldgroupRequest.prototype['tEzsignformfieldgroupTooltip'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
 */
EzsignformfieldgroupRequest.prototype['eEzsignformfieldgroupTooltipposition'] = undefined;
// Implement EzsignformfieldgroupRequestCompoundAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerRequestCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objEzsignformfieldgroupsigner'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementRequestCompound>} a_objDropdownElement
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objDropdownElement'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldRequestCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupRequestCompoundAllOf.prototype['a_objEzsignformfield'] = undefined;




export default EzsignformfieldgroupRequestCompound;

