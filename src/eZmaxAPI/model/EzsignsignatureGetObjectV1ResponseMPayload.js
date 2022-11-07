/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignatureResponseCompound from './EzsignsignatureResponseCompound';
import EzsignsignaturecustomdateResponseCompound from './EzsignsignaturecustomdateResponseCompound';
import FieldEEzsignsignatureAttachmentnamesource from './FieldEEzsignsignatureAttachmentnamesource';
import FieldEEzsignsignatureFont from './FieldEEzsignsignatureFont';
import FieldEEzsignsignatureTooltipposition from './FieldEEzsignsignatureTooltipposition';
import FieldEEzsignsignatureType from './FieldEEzsignsignatureType';

/**
 * The EzsignsignatureGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseMPayload
 * @version 1.1.15
 */
class EzsignsignatureGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignsignatureGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignsignature/{pkiEzsignsignatureID}
     * @alias module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsignsignatureResponseCompound
     * @param pkiEzsignsignatureID {Number} The unique ID of the Ezsignsignature
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param iEzsignsignatureX {Number} The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignatureY {Number} The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignsignatureStep {Number} The step when the Ezsignsigner will be invited to sign
     * @param eEzsignsignatureType {module:eZmaxAPI/model/FieldEEzsignsignatureType} 
     */
    constructor(pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType) { 
        EzsignsignatureResponseCompound.initialize(this, pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType);
        EzsignsignatureGetObjectV1ResponseMPayload.initialize(this, pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType) { 
        obj['pkiEzsignsignatureID'] = pkiEzsignsignatureID;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['iEzsignsignatureX'] = iEzsignsignatureX;
        obj['iEzsignsignatureY'] = iEzsignsignatureY;
        obj['iEzsignsignatureStep'] = iEzsignsignatureStep;
        obj['eEzsignsignatureType'] = eEzsignsignatureType;
    }

    /**
     * Constructs a <code>EzsignsignatureGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseMPayload} The populated <code>EzsignsignatureGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureGetObjectV1ResponseMPayload();
            EzsignsignatureResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignsignatureID')) {
                obj['pkiEzsignsignatureID'] = ApiClient.convertToType(data['pkiEzsignsignatureID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpagePagenumber')) {
                obj['iEzsignpagePagenumber'] = ApiClient.convertToType(data['iEzsignpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureX')) {
                obj['iEzsignsignatureX'] = ApiClient.convertToType(data['iEzsignsignatureX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureY')) {
                obj['iEzsignsignatureY'] = ApiClient.convertToType(data['iEzsignsignatureY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureStep')) {
                obj['iEzsignsignatureStep'] = ApiClient.convertToType(data['iEzsignsignatureStep'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignsignatureType')) {
                obj['eEzsignsignatureType'] = FieldEEzsignsignatureType.constructFromObject(data['eEzsignsignatureType']);
            }
            if (data.hasOwnProperty('tEzsignsignatureTooltip')) {
                obj['tEzsignsignatureTooltip'] = ApiClient.convertToType(data['tEzsignsignatureTooltip'], 'String');
            }
            if (data.hasOwnProperty('eEzsignsignatureTooltipposition')) {
                obj['eEzsignsignatureTooltipposition'] = FieldEEzsignsignatureTooltipposition.constructFromObject(data['eEzsignsignatureTooltipposition']);
            }
            if (data.hasOwnProperty('eEzsignsignatureFont')) {
                obj['eEzsignsignatureFont'] = FieldEEzsignsignatureFont.constructFromObject(data['eEzsignsignatureFont']);
            }
            if (data.hasOwnProperty('iEzsignsignatureValidationstep')) {
                obj['iEzsignsignatureValidationstep'] = ApiClient.convertToType(data['iEzsignsignatureValidationstep'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignsignatureAttachmentdescription')) {
                obj['sEzsignsignatureAttachmentdescription'] = ApiClient.convertToType(data['sEzsignsignatureAttachmentdescription'], 'String');
            }
            if (data.hasOwnProperty('eEzsignsignatureAttachmentnamesource')) {
                obj['eEzsignsignatureAttachmentnamesource'] = FieldEEzsignsignatureAttachmentnamesource.constructFromObject(data['eEzsignsignatureAttachmentnamesource']);
            }
            if (data.hasOwnProperty('bEzsignsignatureRequired')) {
                obj['bEzsignsignatureRequired'] = ApiClient.convertToType(data['bEzsignsignatureRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationIDValidation')) {
                obj['fkiEzsignfoldersignerassociationIDValidation'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationIDValidation'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignsignatureCustomdate')) {
                obj['bEzsignsignatureCustomdate'] = ApiClient.convertToType(data['bEzsignsignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturecustomdate')) {
                obj['a_objEzsignsignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsignsignaturecustomdate'], [EzsignsignaturecustomdateResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignsignature
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignsignatureID() {
        return this.pkiEzsignsignatureID;
    }

    /**
     * Sets The unique ID of the Ezsignsignature
     * @param {Number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    setPkiEzsignsignatureID(pkiEzsignsignatureID) {
        this['pkiEzsignsignatureID'] = pkiEzsignsignatureID;
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
     * Returns The page number in the Ezsigndocument
     * minimum: 1
     * @return {Number}
     */
    getIEzsignpagePagenumber() {
        return this.iEzsignpagePagenumber;
    }

    /**
     * Sets The page number in the Ezsigndocument
     * @param {Number} iEzsignpagePagenumber The page number in the Ezsigndocument
     */
    setIEzsignpagePagenumber(iEzsignpagePagenumber) {
        this['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignatureX() {
        return this.iEzsignsignatureX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignsignatureX The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsignsignatureX(iEzsignsignatureX) {
        this['iEzsignsignatureX'] = iEzsignsignatureX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignatureY() {
        return this.iEzsignsignatureY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsignsignatureY The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsignsignatureY(iEzsignsignatureY) {
        this['iEzsignsignatureY'] = iEzsignsignatureY;
    }
/**
     * Returns The step when the Ezsignsigner will be invited to sign
     * @return {Number}
     */
    getIEzsignsignatureStep() {
        return this.iEzsignsignatureStep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to sign
     * @param {Number} iEzsignsignatureStep The step when the Ezsignsigner will be invited to sign
     */
    setIEzsignsignatureStep(iEzsignsignatureStep) {
        this['iEzsignsignatureStep'] = iEzsignsignatureStep;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureType}
     */
    getEEzsignsignatureType() {
        return this.eEzsignsignatureType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
     */
    setEEzsignsignatureType(eEzsignsignatureType) {
        this['eEzsignsignatureType'] = eEzsignsignatureType;
    }
/**
     * Returns A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
     * @return {String}
     */
    getTEzsignsignatureTooltip() {
        return this.tEzsignsignatureTooltip;
    }

    /**
     * Sets A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
     * @param {String} tEzsignsignatureTooltip A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
     */
    setTEzsignsignatureTooltip(tEzsignsignatureTooltip) {
        this['tEzsignsignatureTooltip'] = tEzsignsignatureTooltip;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition}
     */
    getEEzsignsignatureTooltipposition() {
        return this.eEzsignsignatureTooltipposition;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition} eEzsignsignatureTooltipposition
     */
    setEEzsignsignatureTooltipposition(eEzsignsignatureTooltipposition) {
        this['eEzsignsignatureTooltipposition'] = eEzsignsignatureTooltipposition;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureFont}
     */
    getEEzsignsignatureFont() {
        return this.eEzsignsignatureFont;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureFont} eEzsignsignatureFont
     */
    setEEzsignsignatureFont(eEzsignsignatureFont) {
        this['eEzsignsignatureFont'] = eEzsignsignatureFont;
    }
/**
     * Returns The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
     * @return {Number}
     */
    getIEzsignsignatureValidationstep() {
        return this.iEzsignsignatureValidationstep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
     * @param {Number} iEzsignsignatureValidationstep The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
     */
    setIEzsignsignatureValidationstep(iEzsignsignatureValidationstep) {
        this['iEzsignsignatureValidationstep'] = iEzsignsignatureValidationstep;
    }
/**
     * Returns The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
     * @return {String}
     */
    getSEzsignsignatureAttachmentdescription() {
        return this.sEzsignsignatureAttachmentdescription;
    }

    /**
     * Sets The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
     * @param {String} sEzsignsignatureAttachmentdescription The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
     */
    setSEzsignsignatureAttachmentdescription(sEzsignsignatureAttachmentdescription) {
        this['sEzsignsignatureAttachmentdescription'] = sEzsignsignatureAttachmentdescription;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureAttachmentnamesource}
     */
    getEEzsignsignatureAttachmentnamesource() {
        return this.eEzsignsignatureAttachmentnamesource;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureAttachmentnamesource} eEzsignsignatureAttachmentnamesource
     */
    setEEzsignsignatureAttachmentnamesource(eEzsignsignatureAttachmentnamesource) {
        this['eEzsignsignatureAttachmentnamesource'] = eEzsignsignatureAttachmentnamesource;
    }
/**
     * Returns Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
     * @return {Boolean}
     */
    getBEzsignsignatureRequired() {
        return this.bEzsignsignatureRequired;
    }

    /**
     * Sets Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
     * @param {Boolean} bEzsignsignatureRequired Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
     */
    setBEzsignsignatureRequired(bEzsignsignatureRequired) {
        this['bEzsignsignatureRequired'] = bEzsignsignatureRequired;
    }
/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationIDValidation() {
        return this.fkiEzsignfoldersignerassociationIDValidation;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationIDValidation The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationIDValidation(fkiEzsignfoldersignerassociationIDValidation) {
        this['fkiEzsignfoldersignerassociationIDValidation'] = fkiEzsignfoldersignerassociationIDValidation;
    }
/**
     * Returns Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is **Name** or **Handwritten**)
     * @return {Boolean}
     */
    getBEzsignsignatureCustomdate() {
        return this.bEzsignsignatureCustomdate;
    }

    /**
     * Sets Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is **Name** or **Handwritten**)
     * @param {Boolean} bEzsignsignatureCustomdate Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is **Name** or **Handwritten**)
     */
    setBEzsignsignatureCustomdate(bEzsignsignatureCustomdate) {
        this['bEzsignsignatureCustomdate'] = bEzsignsignatureCustomdate;
    }
/**
     * Returns An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @return {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>}
     */
    getAObjEzsignsignaturecustomdate() {
        return this.a_objEzsignsignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsignsignaturecustomdate(a_objEzsignsignaturecustomdate) {
        this['a_objEzsignsignaturecustomdate'] = a_objEzsignsignaturecustomdate;
    }

}

/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['pkiEzsignsignatureID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['iEzsignsignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['iEzsignsignatureY'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to sign
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['iEzsignsignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['eEzsignsignatureType'] = undefined;

/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
 * @member {String} tEzsignsignatureTooltip
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['tEzsignsignatureTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition} eEzsignsignatureTooltipposition
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['eEzsignsignatureTooltipposition'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureFont} eEzsignsignatureFont
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['eEzsignsignatureFont'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
 * @member {Number} iEzsignsignatureValidationstep
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['iEzsignsignatureValidationstep'] = undefined;

/**
 * The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
 * @member {String} sEzsignsignatureAttachmentdescription
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['sEzsignsignatureAttachmentdescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureAttachmentnamesource} eEzsignsignatureAttachmentnamesource
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['eEzsignsignatureAttachmentnamesource'] = undefined;

/**
 * Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
 * @member {Boolean} bEzsignsignatureRequired
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['bEzsignsignatureRequired'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationIDValidation
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['fkiEzsignfoldersignerassociationIDValidation'] = undefined;

/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is **Name** or **Handwritten**)
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['bEzsignsignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureGetObjectV1ResponseMPayload.prototype['a_objEzsignsignaturecustomdate'] = undefined;


// Implement EzsignsignatureResponseCompound interface:
/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureResponseCompound.prototype['pkiEzsignsignatureID'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureResponseCompound.prototype['fkiEzsigndocumentID'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureResponseCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureResponseCompound.prototype['iEzsignpagePagenumber'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureY'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to sign
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureStep'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureResponseCompound.prototype['eEzsignsignatureType'] = undefined;
/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
 * @member {String} tEzsignsignatureTooltip
 */
EzsignsignatureResponseCompound.prototype['tEzsignsignatureTooltip'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition} eEzsignsignatureTooltipposition
 */
EzsignsignatureResponseCompound.prototype['eEzsignsignatureTooltipposition'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureFont} eEzsignsignatureFont
 */
EzsignsignatureResponseCompound.prototype['eEzsignsignatureFont'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
 * @member {Number} iEzsignsignatureValidationstep
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureValidationstep'] = undefined;
/**
 * The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
 * @member {String} sEzsignsignatureAttachmentdescription
 */
EzsignsignatureResponseCompound.prototype['sEzsignsignatureAttachmentdescription'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureAttachmentnamesource} eEzsignsignatureAttachmentnamesource
 */
EzsignsignatureResponseCompound.prototype['eEzsignsignatureAttachmentnamesource'] = undefined;
/**
 * Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
 * @member {Boolean} bEzsignsignatureRequired
 */
EzsignsignatureResponseCompound.prototype['bEzsignsignatureRequired'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationIDValidation
 */
EzsignsignatureResponseCompound.prototype['fkiEzsignfoldersignerassociationIDValidation'] = undefined;
/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is **Name** or **Handwritten**)
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureResponseCompound.prototype['bEzsignsignatureCustomdate'] = undefined;
/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureResponseCompound.prototype['a_objEzsignsignaturecustomdate'] = undefined;




export default EzsignsignatureGetObjectV1ResponseMPayload;

