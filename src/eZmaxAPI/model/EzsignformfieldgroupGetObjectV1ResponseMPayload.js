/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomDropdownElementResponseCompound from './CustomDropdownElementResponseCompound';
import EzsignformfieldResponseCompound from './EzsignformfieldResponseCompound';
import EzsignformfieldgroupResponseCompound from './EzsignformfieldgroupResponseCompound';
import EzsignformfieldgroupsignerResponseCompound from './EzsignformfieldgroupsignerResponseCompound';
import FieldEEzsignformfieldgroupSignerrequirement from './FieldEEzsignformfieldgroupSignerrequirement';
import FieldEEzsignformfieldgroupTooltipposition from './FieldEEzsignformfieldgroupTooltipposition';
import FieldEEzsignformfieldgroupType from './FieldEEzsignformfieldgroupType';

/**
 * The EzsignformfieldgroupGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload
 * @version 1.1.10
 */
class EzsignformfieldgroupGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignformfieldgroupGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignformfieldgroup/{pkiEzsignformfieldgroupID}
     * @alias module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound
     * @param pkiEzsignformfieldgroupID {Number} The unique ID of the Ezsignformfieldgroup
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param eEzsignformfieldgroupType {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} 
     * @param eEzsignformfieldgroupSignerrequirement {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} 
     * @param sEzsignformfieldgroupLabel {String} The Label for the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupStep {Number} The step when the Ezsignsigner will be invited to fill the form fields
     * @param sEzsignformfieldgroupDefaultvalue {String} The default value for the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupFilledmin {Number} The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param iEzsignformfieldgroupFilledmax {Number} The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
     * @param bEzsignformfieldgroupReadonly {Boolean} Whether the Ezsignformfieldgroup is read only or not.
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} 
     * @param a_objEzsignformfieldgroupsigner {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} 
     */
    constructor(pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfield, a_objEzsignformfieldgroupsigner) { 
        EzsignformfieldgroupResponseCompound.initialize(this, pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfield, a_objEzsignformfieldgroupsigner);
        EzsignformfieldgroupGetObjectV1ResponseMPayload.initialize(this, pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfield, a_objEzsignformfieldgroupsigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignformfieldgroupID, fkiEzsigndocumentID, eEzsignformfieldgroupType, eEzsignformfieldgroupSignerrequirement, sEzsignformfieldgroupLabel, iEzsignformfieldgroupStep, sEzsignformfieldgroupDefaultvalue, iEzsignformfieldgroupFilledmin, iEzsignformfieldgroupFilledmax, bEzsignformfieldgroupReadonly, a_objEzsignformfield, a_objEzsignformfieldgroupsigner) { 
        obj['pkiEzsignformfieldgroupID'] = pkiEzsignformfieldgroupID;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['eEzsignformfieldgroupType'] = eEzsignformfieldgroupType;
        obj['eEzsignformfieldgroupSignerrequirement'] = eEzsignformfieldgroupSignerrequirement;
        obj['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
        obj['iEzsignformfieldgroupStep'] = iEzsignformfieldgroupStep;
        obj['sEzsignformfieldgroupDefaultvalue'] = sEzsignformfieldgroupDefaultvalue;
        obj['iEzsignformfieldgroupFilledmin'] = iEzsignformfieldgroupFilledmin;
        obj['iEzsignformfieldgroupFilledmax'] = iEzsignformfieldgroupFilledmax;
        obj['bEzsignformfieldgroupReadonly'] = bEzsignformfieldgroupReadonly;
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
        obj['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }

    /**
     * Constructs a <code>EzsignformfieldgroupGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldgroupGetObjectV1ResponseMPayload} The populated <code>EzsignformfieldgroupGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldgroupGetObjectV1ResponseMPayload();
            EzsignformfieldgroupResponseCompound.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [EzsignformfieldResponseCompound]);
            }
            if (data.hasOwnProperty('a_objDropdownElement')) {
                obj['a_objDropdownElement'] = ApiClient.convertToType(data['a_objDropdownElement'], [CustomDropdownElementResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfieldgroupsigner')) {
                obj['a_objEzsignformfieldgroupsigner'] = ApiClient.convertToType(data['a_objEzsignformfieldgroupsigner'], [EzsignformfieldgroupsignerResponseCompound]);
            }
        }
        return obj;
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
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
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
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>}
     */
    getAObjEzsignformfieldgroupsigner() {
        return this.a_objEzsignformfieldgroupsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} a_objEzsignformfieldgroupsigner
     */
    setAObjEzsignformfieldgroupsigner(a_objEzsignformfieldgroupsigner) {
        this['a_objEzsignformfieldgroupsigner'] = a_objEzsignformfieldgroupsigner;
    }

}

/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['pkiEzsignformfieldgroupID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsignformfieldgroupType'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsignformfieldgroupSignerrequirement'] = undefined;

/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsignformfieldgroupLabel'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to fill the form fields
 * @member {Number} iEzsignformfieldgroupStep
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsignformfieldgroupStep'] = undefined;

/**
 * The default value for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupDefaultvalue
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsignformfieldgroupDefaultvalue'] = undefined;

/**
 * The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmin
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsignformfieldgroupFilledmin'] = undefined;

/**
 * The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmax
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsignformfieldgroupFilledmax'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is read only or not.
 * @member {Boolean} bEzsignformfieldgroupReadonly
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['bEzsignformfieldgroupReadonly'] = undefined;

/**
 * The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsignformfieldgroupMaxlength
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['iEzsignformfieldgroupMaxlength'] = undefined;

/**
 * Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsignformfieldgroupEncrypted
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['bEzsignformfieldgroupEncrypted'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsignformfieldgroupRegexp
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['sEzsignformfieldgroupRegexp'] = undefined;

/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
 * @member {String} tEzsignformfieldgroupTooltip
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['tEzsignformfieldgroupTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['eEzsignformfieldgroupTooltipposition'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objEzsignformfield'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objDropdownElement'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupGetObjectV1ResponseMPayload.prototype['a_objEzsignformfieldgroupsigner'] = undefined;


// Implement EzsignformfieldgroupResponseCompound interface:
/**
 * The unique ID of the Ezsignformfieldgroup
 * @member {Number} pkiEzsignformfieldgroupID
 */
EzsignformfieldgroupResponseCompound.prototype['pkiEzsignformfieldgroupID'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignformfieldgroupResponseCompound.prototype['fkiEzsigndocumentID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupType} eEzsignformfieldgroupType
 */
EzsignformfieldgroupResponseCompound.prototype['eEzsignformfieldgroupType'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupSignerrequirement} eEzsignformfieldgroupSignerrequirement
 */
EzsignformfieldgroupResponseCompound.prototype['eEzsignformfieldgroupSignerrequirement'] = undefined;
/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
EzsignformfieldgroupResponseCompound.prototype['sEzsignformfieldgroupLabel'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to fill the form fields
 * @member {Number} iEzsignformfieldgroupStep
 */
EzsignformfieldgroupResponseCompound.prototype['iEzsignformfieldgroupStep'] = undefined;
/**
 * The default value for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupDefaultvalue
 */
EzsignformfieldgroupResponseCompound.prototype['sEzsignformfieldgroupDefaultvalue'] = undefined;
/**
 * The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmin
 */
EzsignformfieldgroupResponseCompound.prototype['iEzsignformfieldgroupFilledmin'] = undefined;
/**
 * The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup
 * @member {Number} iEzsignformfieldgroupFilledmax
 */
EzsignformfieldgroupResponseCompound.prototype['iEzsignformfieldgroupFilledmax'] = undefined;
/**
 * Whether the Ezsignformfieldgroup is read only or not.
 * @member {Boolean} bEzsignformfieldgroupReadonly
 */
EzsignformfieldgroupResponseCompound.prototype['bEzsignformfieldgroupReadonly'] = undefined;
/**
 * The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Number} iEzsignformfieldgroupMaxlength
 */
EzsignformfieldgroupResponseCompound.prototype['iEzsignformfieldgroupMaxlength'] = undefined;
/**
 * Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {Boolean} bEzsignformfieldgroupEncrypted
 */
EzsignformfieldgroupResponseCompound.prototype['bEzsignformfieldgroupEncrypted'] = undefined;
/**
 * A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea**
 * @member {String} sEzsignformfieldgroupRegexp
 */
EzsignformfieldgroupResponseCompound.prototype['sEzsignformfieldgroupRegexp'] = undefined;
/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup
 * @member {String} tEzsignformfieldgroupTooltip
 */
EzsignformfieldgroupResponseCompound.prototype['tEzsignformfieldgroupTooltip'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignformfieldgroupTooltipposition} eEzsignformfieldgroupTooltipposition
 */
EzsignformfieldgroupResponseCompound.prototype['eEzsignformfieldgroupTooltipposition'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldResponseCompound>} a_objEzsignformfield
 */
EzsignformfieldgroupResponseCompound.prototype['a_objEzsignformfield'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/CustomDropdownElementResponseCompound>} a_objDropdownElement
 */
EzsignformfieldgroupResponseCompound.prototype['a_objDropdownElement'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupsignerResponseCompound>} a_objEzsignformfieldgroupsigner
 */
EzsignformfieldgroupResponseCompound.prototype['a_objEzsignformfieldgroupsigner'] = undefined;




export default EzsignformfieldgroupGetObjectV1ResponseMPayload;

