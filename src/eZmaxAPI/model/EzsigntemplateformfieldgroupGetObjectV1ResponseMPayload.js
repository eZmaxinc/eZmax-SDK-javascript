/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomDropdownElementResponseCompound from './CustomDropdownElementResponseCompound';
import EzsigntemplateformfieldResponseCompound from './EzsigntemplateformfieldResponseCompound';
import EzsigntemplateformfieldgroupResponseCompound from './EzsigntemplateformfieldgroupResponseCompound';
import EzsigntemplateformfieldgroupsignerResponseCompound from './EzsigntemplateformfieldgroupsignerResponseCompound';
import FieldEEzsigntemplateformfieldgroupSignerrequirement from './FieldEEzsigntemplateformfieldgroupSignerrequirement';
import FieldEEzsigntemplateformfieldgroupTooltipposition from './FieldEEzsigntemplateformfieldgroupTooltipposition';
import FieldEEzsigntemplateformfieldgroupType from './FieldEEzsigntemplateformfieldgroupType';

/**
 * The EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload
 * @version 1.1.9
 */
class EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID}
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplateformfieldgroupResponseCompound
     * @param pkiEzsigntemplateformfieldgroupID {Number} The unique ID of the Ezsigntemplateformfieldgroup
     * @param fkiEzsigntemplatedocumentID {Number} The unique ID of the Ezsigntemplatedocument
     * @param eEzsigntemplateformfieldgroupType {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType} 
     * @param eEzsigntemplateformfieldgroupSignerrequirement {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupSignerrequirement} 
     * @param sEzsigntemplateformfieldgroupLabel {String} The Label for the Ezsigntemplateformfieldgroup
     * @param iEzsigntemplateformfieldgroupStep {Number} The step when the Ezsigntemplatesigner will be invited to fill the form fields
     * @param sEzsigntemplateformfieldgroupDefaultvalue {String} The default value for the Ezsigntemplateformfieldgroup
     * @param iEzsigntemplateformfieldgroupFilledmin {Number} The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * @param iEzsigntemplateformfieldgroupFilledmax {Number} The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * @param bEzsigntemplateformfieldgroupReadonly {Boolean} Whether the Ezsigntemplateformfieldgroup is read only or not.
     * @param a_objEzsigntemplateformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} 
     * @param a_objEzsigntemplateformfield {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} 
     */
    constructor(pkiEzsigntemplateformfieldgroupID, fkiEzsigntemplatedocumentID, eEzsigntemplateformfieldgroupType, eEzsigntemplateformfieldgroupSignerrequirement, sEzsigntemplateformfieldgroupLabel, iEzsigntemplateformfieldgroupStep, sEzsigntemplateformfieldgroupDefaultvalue, iEzsigntemplateformfieldgroupFilledmin, iEzsigntemplateformfieldgroupFilledmax, bEzsigntemplateformfieldgroupReadonly, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield) { 
        EzsigntemplateformfieldgroupResponseCompound.initialize(this, pkiEzsigntemplateformfieldgroupID, fkiEzsigntemplatedocumentID, eEzsigntemplateformfieldgroupType, eEzsigntemplateformfieldgroupSignerrequirement, sEzsigntemplateformfieldgroupLabel, iEzsigntemplateformfieldgroupStep, sEzsigntemplateformfieldgroupDefaultvalue, iEzsigntemplateformfieldgroupFilledmin, iEzsigntemplateformfieldgroupFilledmax, bEzsigntemplateformfieldgroupReadonly, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield);
        EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplateformfieldgroupID, fkiEzsigntemplatedocumentID, eEzsigntemplateformfieldgroupType, eEzsigntemplateformfieldgroupSignerrequirement, sEzsigntemplateformfieldgroupLabel, iEzsigntemplateformfieldgroupStep, sEzsigntemplateformfieldgroupDefaultvalue, iEzsigntemplateformfieldgroupFilledmin, iEzsigntemplateformfieldgroupFilledmax, bEzsigntemplateformfieldgroupReadonly, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateformfieldgroupID, fkiEzsigntemplatedocumentID, eEzsigntemplateformfieldgroupType, eEzsigntemplateformfieldgroupSignerrequirement, sEzsigntemplateformfieldgroupLabel, iEzsigntemplateformfieldgroupStep, sEzsigntemplateformfieldgroupDefaultvalue, iEzsigntemplateformfieldgroupFilledmin, iEzsigntemplateformfieldgroupFilledmax, bEzsigntemplateformfieldgroupReadonly, a_objEzsigntemplateformfieldgroupsigner, a_objEzsigntemplateformfield) { 
        obj['pkiEzsigntemplateformfieldgroupID'] = pkiEzsigntemplateformfieldgroupID;
        obj['fkiEzsigntemplatedocumentID'] = fkiEzsigntemplatedocumentID;
        obj['eEzsigntemplateformfieldgroupType'] = eEzsigntemplateformfieldgroupType;
        obj['eEzsigntemplateformfieldgroupSignerrequirement'] = eEzsigntemplateformfieldgroupSignerrequirement;
        obj['sEzsigntemplateformfieldgroupLabel'] = sEzsigntemplateformfieldgroupLabel;
        obj['iEzsigntemplateformfieldgroupStep'] = iEzsigntemplateformfieldgroupStep;
        obj['sEzsigntemplateformfieldgroupDefaultvalue'] = sEzsigntemplateformfieldgroupDefaultvalue;
        obj['iEzsigntemplateformfieldgroupFilledmin'] = iEzsigntemplateformfieldgroupFilledmin;
        obj['iEzsigntemplateformfieldgroupFilledmax'] = iEzsigntemplateformfieldgroupFilledmax;
        obj['bEzsigntemplateformfieldgroupReadonly'] = bEzsigntemplateformfieldgroupReadonly;
        obj['a_objEzsigntemplateformfieldgroupsigner'] = a_objEzsigntemplateformfieldgroupsigner;
        obj['a_objEzsigntemplateformfield'] = a_objEzsigntemplateformfield;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload} The populated <code>EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload();
            EzsigntemplateformfieldgroupResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplateformfieldgroupID')) {
                obj['pkiEzsigntemplateformfieldgroupID'] = ApiClient.convertToType(data['pkiEzsigntemplateformfieldgroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatedocumentID')) {
                obj['fkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['fkiEzsigntemplatedocumentID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsigntemplateformfieldgroupType')) {
                obj['eEzsigntemplateformfieldgroupType'] = FieldEEzsigntemplateformfieldgroupType.constructFromObject(data['eEzsigntemplateformfieldgroupType']);
            }
            if (data.hasOwnProperty('eEzsigntemplateformfieldgroupSignerrequirement')) {
                obj['eEzsigntemplateformfieldgroupSignerrequirement'] = FieldEEzsigntemplateformfieldgroupSignerrequirement.constructFromObject(data['eEzsigntemplateformfieldgroupSignerrequirement']);
            }
            if (data.hasOwnProperty('sEzsigntemplateformfieldgroupLabel')) {
                obj['sEzsigntemplateformfieldgroupLabel'] = ApiClient.convertToType(data['sEzsigntemplateformfieldgroupLabel'], 'String');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldgroupStep')) {
                obj['iEzsigntemplateformfieldgroupStep'] = ApiClient.convertToType(data['iEzsigntemplateformfieldgroupStep'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplateformfieldgroupDefaultvalue')) {
                obj['sEzsigntemplateformfieldgroupDefaultvalue'] = ApiClient.convertToType(data['sEzsigntemplateformfieldgroupDefaultvalue'], 'String');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldgroupFilledmin')) {
                obj['iEzsigntemplateformfieldgroupFilledmin'] = ApiClient.convertToType(data['iEzsigntemplateformfieldgroupFilledmin'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldgroupFilledmax')) {
                obj['iEzsigntemplateformfieldgroupFilledmax'] = ApiClient.convertToType(data['iEzsigntemplateformfieldgroupFilledmax'], 'Number');
            }
            if (data.hasOwnProperty('bEzsigntemplateformfieldgroupReadonly')) {
                obj['bEzsigntemplateformfieldgroupReadonly'] = ApiClient.convertToType(data['bEzsigntemplateformfieldgroupReadonly'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldgroupMaxlength')) {
                obj['iEzsigntemplateformfieldgroupMaxlength'] = ApiClient.convertToType(data['iEzsigntemplateformfieldgroupMaxlength'], 'Number');
            }
            if (data.hasOwnProperty('bEzsigntemplateformfieldgroupEncrypted')) {
                obj['bEzsigntemplateformfieldgroupEncrypted'] = ApiClient.convertToType(data['bEzsigntemplateformfieldgroupEncrypted'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsigntemplateformfieldgroupRegexp')) {
                obj['sEzsigntemplateformfieldgroupRegexp'] = ApiClient.convertToType(data['sEzsigntemplateformfieldgroupRegexp'], 'String');
            }
            if (data.hasOwnProperty('tEzsigntemplateformfieldgroupTooltip')) {
                obj['tEzsigntemplateformfieldgroupTooltip'] = ApiClient.convertToType(data['tEzsigntemplateformfieldgroupTooltip'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplateformfieldgroupTooltipposition')) {
                obj['eEzsigntemplateformfieldgroupTooltipposition'] = FieldEEzsigntemplateformfieldgroupTooltipposition.constructFromObject(data['eEzsigntemplateformfieldgroupTooltipposition']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplateformfieldgroupsigner')) {
                obj['a_objEzsigntemplateformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsigntemplateformfieldgroupsigner'], [EzsigntemplateformfieldgroupsignerResponseCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsigntemplateformfield')) {
                obj['a_objEzsigntemplateformfield'] = ApiClient.convertToType(data['a_objEzsigntemplateformfield'], [EzsigntemplateformfieldResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplateformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateformfieldgroupID() {
        return this.pkiEzsigntemplateformfieldgroupID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateformfieldgroup
     * @param {Number} pkiEzsigntemplateformfieldgroupID The unique ID of the Ezsigntemplateformfieldgroup
     */
    setPkiEzsigntemplateformfieldgroupID(pkiEzsigntemplateformfieldgroupID) {
        this['pkiEzsigntemplateformfieldgroupID'] = pkiEzsigntemplateformfieldgroupID;
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
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType}
     */
    getEEzsigntemplateformfieldgroupType() {
        return this.eEzsigntemplateformfieldgroupType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType} eEzsigntemplateformfieldgroupType
     */
    setEEzsigntemplateformfieldgroupType(eEzsigntemplateformfieldgroupType) {
        this['eEzsigntemplateformfieldgroupType'] = eEzsigntemplateformfieldgroupType;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupSignerrequirement}
     */
    getEEzsigntemplateformfieldgroupSignerrequirement() {
        return this.eEzsigntemplateformfieldgroupSignerrequirement;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupSignerrequirement} eEzsigntemplateformfieldgroupSignerrequirement
     */
    setEEzsigntemplateformfieldgroupSignerrequirement(eEzsigntemplateformfieldgroupSignerrequirement) {
        this['eEzsigntemplateformfieldgroupSignerrequirement'] = eEzsigntemplateformfieldgroupSignerrequirement;
    }
/**
     * Returns The Label for the Ezsigntemplateformfieldgroup
     * @return {String}
     */
    getSEzsigntemplateformfieldgroupLabel() {
        return this.sEzsigntemplateformfieldgroupLabel;
    }

    /**
     * Sets The Label for the Ezsigntemplateformfieldgroup
     * @param {String} sEzsigntemplateformfieldgroupLabel The Label for the Ezsigntemplateformfieldgroup
     */
    setSEzsigntemplateformfieldgroupLabel(sEzsigntemplateformfieldgroupLabel) {
        this['sEzsigntemplateformfieldgroupLabel'] = sEzsigntemplateformfieldgroupLabel;
    }
/**
     * Returns The step when the Ezsigntemplatesigner will be invited to fill the form fields
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplateformfieldgroupStep() {
        return this.iEzsigntemplateformfieldgroupStep;
    }

    /**
     * Sets The step when the Ezsigntemplatesigner will be invited to fill the form fields
     * @param {Number} iEzsigntemplateformfieldgroupStep The step when the Ezsigntemplatesigner will be invited to fill the form fields
     */
    setIEzsigntemplateformfieldgroupStep(iEzsigntemplateformfieldgroupStep) {
        this['iEzsigntemplateformfieldgroupStep'] = iEzsigntemplateformfieldgroupStep;
    }
/**
     * Returns The default value for the Ezsigntemplateformfieldgroup
     * @return {String}
     */
    getSEzsigntemplateformfieldgroupDefaultvalue() {
        return this.sEzsigntemplateformfieldgroupDefaultvalue;
    }

    /**
     * Sets The default value for the Ezsigntemplateformfieldgroup
     * @param {String} sEzsigntemplateformfieldgroupDefaultvalue The default value for the Ezsigntemplateformfieldgroup
     */
    setSEzsigntemplateformfieldgroupDefaultvalue(sEzsigntemplateformfieldgroupDefaultvalue) {
        this['sEzsigntemplateformfieldgroupDefaultvalue'] = sEzsigntemplateformfieldgroupDefaultvalue;
    }
/**
     * Returns The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldgroupFilledmin() {
        return this.iEzsigntemplateformfieldgroupFilledmin;
    }

    /**
     * Sets The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * @param {Number} iEzsigntemplateformfieldgroupFilledmin The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     */
    setIEzsigntemplateformfieldgroupFilledmin(iEzsigntemplateformfieldgroupFilledmin) {
        this['iEzsigntemplateformfieldgroupFilledmin'] = iEzsigntemplateformfieldgroupFilledmin;
    }
/**
     * Returns The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldgroupFilledmax() {
        return this.iEzsigntemplateformfieldgroupFilledmax;
    }

    /**
     * Sets The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     * @param {Number} iEzsigntemplateformfieldgroupFilledmax The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
     */
    setIEzsigntemplateformfieldgroupFilledmax(iEzsigntemplateformfieldgroupFilledmax) {
        this['iEzsigntemplateformfieldgroupFilledmax'] = iEzsigntemplateformfieldgroupFilledmax;
    }
/**
     * Returns Whether the Ezsigntemplateformfieldgroup is read only or not.
     * @return {Boolean}
     */
    getBEzsigntemplateformfieldgroupReadonly() {
        return this.bEzsigntemplateformfieldgroupReadonly;
    }

    /**
     * Sets Whether the Ezsigntemplateformfieldgroup is read only or not.
     * @param {Boolean} bEzsigntemplateformfieldgroupReadonly Whether the Ezsigntemplateformfieldgroup is read only or not.
     */
    setBEzsigntemplateformfieldgroupReadonly(bEzsigntemplateformfieldgroupReadonly) {
        this['bEzsigntemplateformfieldgroupReadonly'] = bEzsigntemplateformfieldgroupReadonly;
    }
/**
     * Returns The maximum length for the value in the Ezsigntemplateformfieldgroup  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldgroupMaxlength() {
        return this.iEzsigntemplateformfieldgroupMaxlength;
    }

    /**
     * Sets The maximum length for the value in the Ezsigntemplateformfieldgroup  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * @param {Number} iEzsigntemplateformfieldgroupMaxlength The maximum length for the value in the Ezsigntemplateformfieldgroup  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     */
    setIEzsigntemplateformfieldgroupMaxlength(iEzsigntemplateformfieldgroupMaxlength) {
        this['iEzsigntemplateformfieldgroupMaxlength'] = iEzsigntemplateformfieldgroupMaxlength;
    }
/**
     * Returns Whether the Ezsigntemplateformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * @return {Boolean}
     */
    getBEzsigntemplateformfieldgroupEncrypted() {
        return this.bEzsigntemplateformfieldgroupEncrypted;
    }

    /**
     * Sets Whether the Ezsigntemplateformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * @param {Boolean} bEzsigntemplateformfieldgroupEncrypted Whether the Ezsigntemplateformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     */
    setBEzsigntemplateformfieldgroupEncrypted(bEzsigntemplateformfieldgroupEncrypted) {
        this['bEzsigntemplateformfieldgroupEncrypted'] = bEzsigntemplateformfieldgroupEncrypted;
    }
/**
     * Returns A regular expression to indicate what values are acceptable for the Ezsigntemplateformfieldgroup.  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * @return {String}
     */
    getSEzsigntemplateformfieldgroupRegexp() {
        return this.sEzsigntemplateformfieldgroupRegexp;
    }

    /**
     * Sets A regular expression to indicate what values are acceptable for the Ezsigntemplateformfieldgroup.  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     * @param {String} sEzsigntemplateformfieldgroupRegexp A regular expression to indicate what values are acceptable for the Ezsigntemplateformfieldgroup.  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
     */
    setSEzsigntemplateformfieldgroupRegexp(sEzsigntemplateformfieldgroupRegexp) {
        this['sEzsigntemplateformfieldgroupRegexp'] = sEzsigntemplateformfieldgroupRegexp;
    }
/**
     * Returns A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplateformfieldgroup
     * @return {String}
     */
    getTEzsigntemplateformfieldgroupTooltip() {
        return this.tEzsigntemplateformfieldgroupTooltip;
    }

    /**
     * Sets A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplateformfieldgroup
     * @param {String} tEzsigntemplateformfieldgroupTooltip A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplateformfieldgroup
     */
    setTEzsigntemplateformfieldgroupTooltip(tEzsigntemplateformfieldgroupTooltip) {
        this['tEzsigntemplateformfieldgroupTooltip'] = tEzsigntemplateformfieldgroupTooltip;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupTooltipposition}
     */
    getEEzsigntemplateformfieldgroupTooltipposition() {
        return this.eEzsigntemplateformfieldgroupTooltipposition;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupTooltipposition} eEzsigntemplateformfieldgroupTooltipposition
     */
    setEEzsigntemplateformfieldgroupTooltipposition(eEzsigntemplateformfieldgroupTooltipposition) {
        this['eEzsigntemplateformfieldgroupTooltipposition'] = eEzsigntemplateformfieldgroupTooltipposition;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>}
     */
    getAObjEzsigntemplateformfieldgroupsigner() {
        return this.a_objEzsigntemplateformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} a_objEzsigntemplateformfieldgroupsigner
     */
    setAObjEzsigntemplateformfieldgroupsigner(a_objEzsigntemplateformfieldgroupsigner) {
        this['a_objEzsigntemplateformfieldgroupsigner'] = a_objEzsigntemplateformfieldgroupsigner;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>}
     */
    getAObjDropdownElement() {
        return this.a_objDropdownElement;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
     */
    setAObjDropdownElement(a_objDropdownElement) {
        this['a_objDropdownElement'] = a_objDropdownElement;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>}
     */
    getAObjEzsigntemplateformfield() {
        return this.a_objEzsigntemplateformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} a_objEzsigntemplateformfield
     */
    setAObjEzsigntemplateformfield(a_objEzsigntemplateformfield) {
        this['a_objEzsigntemplateformfield'] = a_objEzsigntemplateformfield;
    }

}

/**
 * The unique ID of the Ezsigntemplateformfieldgroup
 * @member {Number} pkiEzsigntemplateformfieldgroupID
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplateformfieldgroupID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatedocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType} eEzsigntemplateformfieldgroupType
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsigntemplateformfieldgroupType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupSignerrequirement} eEzsigntemplateformfieldgroupSignerrequirement
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsigntemplateformfieldgroupSignerrequirement'] = undefined;

/**
 * The Label for the Ezsigntemplateformfieldgroup
 * @member {String} sEzsigntemplateformfieldgroupLabel
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsigntemplateformfieldgroupLabel'] = undefined;

/**
 * The step when the Ezsigntemplatesigner will be invited to fill the form fields
 * @member {Number} iEzsigntemplateformfieldgroupStep
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsigntemplateformfieldgroupStep'] = undefined;

/**
 * The default value for the Ezsigntemplateformfieldgroup
 * @member {String} sEzsigntemplateformfieldgroupDefaultvalue
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsigntemplateformfieldgroupDefaultvalue'] = undefined;

/**
 * The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
 * @member {Number} iEzsigntemplateformfieldgroupFilledmin
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsigntemplateformfieldgroupFilledmin'] = undefined;

/**
 * The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
 * @member {Number} iEzsigntemplateformfieldgroupFilledmax
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsigntemplateformfieldgroupFilledmax'] = undefined;

/**
 * Whether the Ezsigntemplateformfieldgroup is read only or not.
 * @member {Boolean} bEzsigntemplateformfieldgroupReadonly
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['bEzsigntemplateformfieldgroupReadonly'] = undefined;

/**
 * The maximum length for the value in the Ezsigntemplateformfieldgroup  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsigntemplateformfieldgroupMaxlength
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsigntemplateformfieldgroupMaxlength'] = undefined;

/**
 * Whether the Ezsigntemplateformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsigntemplateformfieldgroupEncrypted
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['bEzsigntemplateformfieldgroupEncrypted'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsigntemplateformfieldgroup.  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsigntemplateformfieldgroupRegexp
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsigntemplateformfieldgroupRegexp'] = undefined;

/**
 * A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplateformfieldgroup
 * @member {String} tEzsigntemplateformfieldgroupTooltip
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['tEzsigntemplateformfieldgroupTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupTooltipposition} eEzsigntemplateformfieldgroupTooltipposition
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsigntemplateformfieldgroupTooltipposition'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} a_objEzsigntemplateformfieldgroupsigner
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objEzsigntemplateformfieldgroupsigner'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} a_objEzsigntemplateformfield
 */
EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objEzsigntemplateformfield'] = undefined;


// Implement EzsigntemplateformfieldgroupResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplateformfieldgroup
 * @member {Number} pkiEzsigntemplateformfieldgroupID
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['pkiEzsigntemplateformfieldgroupID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['fkiEzsigntemplatedocumentID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupType} eEzsigntemplateformfieldgroupType
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['eEzsigntemplateformfieldgroupType'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupSignerrequirement} eEzsigntemplateformfieldgroupSignerrequirement
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['eEzsigntemplateformfieldgroupSignerrequirement'] = undefined;
/**
 * The Label for the Ezsigntemplateformfieldgroup
 * @member {String} sEzsigntemplateformfieldgroupLabel
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['sEzsigntemplateformfieldgroupLabel'] = undefined;
/**
 * The step when the Ezsigntemplatesigner will be invited to fill the form fields
 * @member {Number} iEzsigntemplateformfieldgroupStep
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['iEzsigntemplateformfieldgroupStep'] = undefined;
/**
 * The default value for the Ezsigntemplateformfieldgroup
 * @member {String} sEzsigntemplateformfieldgroupDefaultvalue
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['sEzsigntemplateformfieldgroupDefaultvalue'] = undefined;
/**
 * The minimum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
 * @member {Number} iEzsigntemplateformfieldgroupFilledmin
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['iEzsigntemplateformfieldgroupFilledmin'] = undefined;
/**
 * The maximum number of Ezsigntemplateformfield that must be filled in the Ezsigntemplateformfieldgroup
 * @member {Number} iEzsigntemplateformfieldgroupFilledmax
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['iEzsigntemplateformfieldgroupFilledmax'] = undefined;
/**
 * Whether the Ezsigntemplateformfieldgroup is read only or not.
 * @member {Boolean} bEzsigntemplateformfieldgroupReadonly
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['bEzsigntemplateformfieldgroupReadonly'] = undefined;
/**
 * The maximum length for the value in the Ezsigntemplateformfieldgroup  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsigntemplateformfieldgroupMaxlength
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['iEzsigntemplateformfieldgroupMaxlength'] = undefined;
/**
 * Whether the Ezsigntemplateformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsigntemplateformfieldgroupEncrypted
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['bEzsigntemplateformfieldgroupEncrypted'] = undefined;
/**
 * A regular expression to indicate what values are acceptable for the Ezsigntemplateformfieldgroup.  This can only be set if eEzsigntemplateformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsigntemplateformfieldgroupRegexp
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['sEzsigntemplateformfieldgroupRegexp'] = undefined;
/**
 * A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplateformfieldgroup
 * @member {String} tEzsigntemplateformfieldgroupTooltip
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['tEzsigntemplateformfieldgroupTooltip'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateformfieldgroupTooltipposition} eEzsigntemplateformfieldgroupTooltipposition
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['eEzsigntemplateformfieldgroupTooltipposition'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerResponseCompound>} a_objEzsigntemplateformfieldgroupsigner
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['a_objEzsigntemplateformfieldgroupsigner'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['a_objDropdownElement'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldResponseCompound>} a_objEzsigntemplateformfield
 */
EzsigntemplateformfieldgroupResponseCompound.prototype['a_objEzsigntemplateformfield'] = undefined;




export default EzsigntemplateformfieldgroupGetObjectV1ResponseMPayload;

