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
import EnumTextvalidation from './EnumTextvalidation';
import FieldEEzsigntemplatesignatureAttachmentnamesource from './FieldEEzsigntemplatesignatureAttachmentnamesource';
import FieldEEzsigntemplatesignatureFont from './FieldEEzsigntemplatesignatureFont';
import FieldEEzsigntemplatesignatureTooltipposition from './FieldEEzsigntemplatesignatureTooltipposition';
import FieldEEzsigntemplatesignatureType from './FieldEEzsigntemplatesignatureType';

/**
 * The EzsigntemplatesignatureResponse model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureResponse
 * @version 1.2.0
 */
class EzsigntemplatesignatureResponse {
    /**
     * Constructs a new <code>EzsigntemplatesignatureResponse</code>.
     * A Ezsigntemplatesignature Object
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureResponse
     * @param pkiEzsigntemplatesignatureID {Number} The unique ID of the Ezsigntemplatesignature
     * @param fkiEzsigntemplatedocumentID {Number} The unique ID of the Ezsigntemplatedocument
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     * @param iEzsigntemplatedocumentpagePagenumber {Number} The page number in the Ezsigntemplatedocument
     * @param iEzsigntemplatesignatureX {Number} The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsigntemplatesignatureY {Number} The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsigntemplatesignatureStep {Number} The step when the Ezsigntemplatesigner will be invited to sign
     * @param eEzsigntemplatesignatureType {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} 
     */
    constructor(pkiEzsigntemplatesignatureID, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType) { 
        
        EzsigntemplatesignatureResponse.initialize(this, pkiEzsigntemplatesignatureID, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatesignatureID, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType) { 
        obj['pkiEzsigntemplatesignatureID'] = pkiEzsigntemplatesignatureID;
        obj['fkiEzsigntemplatedocumentID'] = fkiEzsigntemplatedocumentID;
        obj['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
        obj['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
        obj['iEzsigntemplatesignatureX'] = iEzsigntemplatesignatureX;
        obj['iEzsigntemplatesignatureY'] = iEzsigntemplatesignatureY;
        obj['iEzsigntemplatesignatureStep'] = iEzsigntemplatesignatureStep;
        obj['eEzsigntemplatesignatureType'] = eEzsigntemplatesignatureType;
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureResponse} The populated <code>EzsigntemplatesignatureResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureResponse();

            if (data.hasOwnProperty('pkiEzsigntemplatesignatureID')) {
                obj['pkiEzsigntemplatesignatureID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignatureID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatedocumentID')) {
                obj['fkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['fkiEzsigntemplatedocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerIDValidation')) {
                obj['fkiEzsigntemplatesignerIDValidation'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerIDValidation'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpagePagenumber')) {
                obj['iEzsigntemplatedocumentpagePagenumber'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureX')) {
                obj['iEzsigntemplatesignatureX'] = ApiClient.convertToType(data['iEzsigntemplatesignatureX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureY')) {
                obj['iEzsigntemplatesignatureY'] = ApiClient.convertToType(data['iEzsigntemplatesignatureY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureWidth')) {
                obj['iEzsigntemplatesignatureWidth'] = ApiClient.convertToType(data['iEzsigntemplatesignatureWidth'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureHeight')) {
                obj['iEzsigntemplatesignatureHeight'] = ApiClient.convertToType(data['iEzsigntemplatesignatureHeight'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureStep')) {
                obj['iEzsigntemplatesignatureStep'] = ApiClient.convertToType(data['iEzsigntemplatesignatureStep'], 'Number');
            }
            if (data.hasOwnProperty('eEzsigntemplatesignatureType')) {
                obj['eEzsigntemplatesignatureType'] = FieldEEzsigntemplatesignatureType.constructFromObject(data['eEzsigntemplatesignatureType']);
            }
            if (data.hasOwnProperty('tEzsigntemplatesignatureTooltip')) {
                obj['tEzsigntemplatesignatureTooltip'] = ApiClient.convertToType(data['tEzsigntemplatesignatureTooltip'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplatesignatureTooltipposition')) {
                obj['eEzsigntemplatesignatureTooltipposition'] = FieldEEzsigntemplatesignatureTooltipposition.constructFromObject(data['eEzsigntemplatesignatureTooltipposition']);
            }
            if (data.hasOwnProperty('eEzsigntemplatesignatureFont')) {
                obj['eEzsigntemplatesignatureFont'] = FieldEEzsigntemplatesignatureFont.constructFromObject(data['eEzsigntemplatesignatureFont']);
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureValidationstep')) {
                obj['iEzsigntemplatesignatureValidationstep'] = ApiClient.convertToType(data['iEzsigntemplatesignatureValidationstep'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignatureAttachmentdescription')) {
                obj['sEzsigntemplatesignatureAttachmentdescription'] = ApiClient.convertToType(data['sEzsigntemplatesignatureAttachmentdescription'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplatesignatureAttachmentnamesource')) {
                obj['eEzsigntemplatesignatureAttachmentnamesource'] = FieldEEzsigntemplatesignatureAttachmentnamesource.constructFromObject(data['eEzsigntemplatesignatureAttachmentnamesource']);
            }
            if (data.hasOwnProperty('bEzsigntemplatesignatureRequired')) {
                obj['bEzsigntemplatesignatureRequired'] = ApiClient.convertToType(data['bEzsigntemplatesignatureRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignatureMaxlength')) {
                obj['iEzsigntemplatesignatureMaxlength'] = ApiClient.convertToType(data['iEzsigntemplatesignatureMaxlength'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignatureRegexp')) {
                obj['sEzsigntemplatesignatureRegexp'] = ApiClient.convertToType(data['sEzsigntemplatesignatureRegexp'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplatesignatureTextvalidation')) {
                obj['eEzsigntemplatesignatureTextvalidation'] = EnumTextvalidation.constructFromObject(data['eEzsigntemplatesignatureTextvalidation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignatureResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignatureResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignatureResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tEzsigntemplatesignatureTooltip'] && !(typeof data['tEzsigntemplatesignatureTooltip'] === 'string' || data['tEzsigntemplatesignatureTooltip'] instanceof String)) {
            throw new Error("Expected the field `tEzsigntemplatesignatureTooltip` to be a primitive type in the JSON string but got " + data['tEzsigntemplatesignatureTooltip']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatesignatureAttachmentdescription'] && !(typeof data['sEzsigntemplatesignatureAttachmentdescription'] === 'string' || data['sEzsigntemplatesignatureAttachmentdescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatesignatureAttachmentdescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplatesignatureAttachmentdescription']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatesignatureRegexp'] && !(typeof data['sEzsigntemplatesignatureRegexp'] === 'string' || data['sEzsigntemplatesignatureRegexp'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatesignatureRegexp` to be a primitive type in the JSON string but got " + data['sEzsigntemplatesignatureRegexp']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplatesignature
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatesignatureID() {
        return this.pkiEzsigntemplatesignatureID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesignature
     * @param {Number} pkiEzsigntemplatesignatureID The unique ID of the Ezsigntemplatesignature
     */
    setPkiEzsigntemplatesignatureID(pkiEzsigntemplatesignatureID) {
        this['pkiEzsigntemplatesignatureID'] = pkiEzsigntemplatesignatureID;
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
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatesignerIDValidation() {
        return this.fkiEzsigntemplatesignerIDValidation;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} fkiEzsigntemplatesignerIDValidation The unique ID of the Ezsigntemplatesigner
     */
    setFkiEzsigntemplatesignerIDValidation(fkiEzsigntemplatesignerIDValidation) {
        this['fkiEzsigntemplatesignerIDValidation'] = fkiEzsigntemplatesignerIDValidation;
    }
/**
     * Returns The page number in the Ezsigntemplatedocument
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatedocumentpagePagenumber() {
        return this.iEzsigntemplatedocumentpagePagenumber;
    }

    /**
     * Sets The page number in the Ezsigntemplatedocument
     * @param {Number} iEzsigntemplatedocumentpagePagenumber The page number in the Ezsigntemplatedocument
     */
    setIEzsigntemplatedocumentpagePagenumber(iEzsigntemplatedocumentpagePagenumber) {
        this['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignatureX() {
        return this.iEzsigntemplatesignatureX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsigntemplatesignatureX The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsigntemplatesignatureX(iEzsigntemplatesignatureX) {
        this['iEzsigntemplatesignatureX'] = iEzsigntemplatesignatureX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignatureY() {
        return this.iEzsigntemplatesignatureY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsigntemplatesignatureY The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsigntemplatesignatureY(iEzsigntemplatesignatureY) {
        this['iEzsigntemplatesignatureY'] = iEzsigntemplatesignatureY;
    }
/**
     * Returns The width of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have a width of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureWidth.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignatureWidth() {
        return this.iEzsigntemplatesignatureWidth;
    }

    /**
     * Sets The width of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have a width of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureWidth.
     * @param {Number} iEzsigntemplatesignatureWidth The width of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have a width of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureWidth.
     */
    setIEzsigntemplatesignatureWidth(iEzsigntemplatesignatureWidth) {
        this['iEzsigntemplatesignatureWidth'] = iEzsigntemplatesignatureWidth;
    }
/**
     * Returns The height of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have an height of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureHeight.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignatureHeight() {
        return this.iEzsigntemplatesignatureHeight;
    }

    /**
     * Sets The height of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have an height of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureHeight.
     * @param {Number} iEzsigntemplatesignatureHeight The height of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have an height of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureHeight.
     */
    setIEzsigntemplatesignatureHeight(iEzsigntemplatesignatureHeight) {
        this['iEzsigntemplatesignatureHeight'] = iEzsigntemplatesignatureHeight;
    }
/**
     * Returns The step when the Ezsigntemplatesigner will be invited to sign
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatesignatureStep() {
        return this.iEzsigntemplatesignatureStep;
    }

    /**
     * Sets The step when the Ezsigntemplatesigner will be invited to sign
     * @param {Number} iEzsigntemplatesignatureStep The step when the Ezsigntemplatesigner will be invited to sign
     */
    setIEzsigntemplatesignatureStep(iEzsigntemplatesignatureStep) {
        this['iEzsigntemplatesignatureStep'] = iEzsigntemplatesignatureStep;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType}
     */
    getEEzsigntemplatesignatureType() {
        return this.eEzsigntemplatesignatureType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} eEzsigntemplatesignatureType
     */
    setEEzsigntemplatesignatureType(eEzsigntemplatesignatureType) {
        this['eEzsigntemplatesignatureType'] = eEzsigntemplatesignatureType;
    }
/**
     * Returns A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
     * @return {String}
     */
    getTEzsigntemplatesignatureTooltip() {
        return this.tEzsigntemplatesignatureTooltip;
    }

    /**
     * Sets A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
     * @param {String} tEzsigntemplatesignatureTooltip A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
     */
    setTEzsigntemplatesignatureTooltip(tEzsigntemplatesignatureTooltip) {
        this['tEzsigntemplatesignatureTooltip'] = tEzsigntemplatesignatureTooltip;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition}
     */
    getEEzsigntemplatesignatureTooltipposition() {
        return this.eEzsigntemplatesignatureTooltipposition;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition} eEzsigntemplatesignatureTooltipposition
     */
    setEEzsigntemplatesignatureTooltipposition(eEzsigntemplatesignatureTooltipposition) {
        this['eEzsigntemplatesignatureTooltipposition'] = eEzsigntemplatesignatureTooltipposition;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureFont}
     */
    getEEzsigntemplatesignatureFont() {
        return this.eEzsigntemplatesignatureFont;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureFont} eEzsigntemplatesignatureFont
     */
    setEEzsigntemplatesignatureFont(eEzsigntemplatesignatureFont) {
        this['eEzsigntemplatesignatureFont'] = eEzsigntemplatesignatureFont;
    }
/**
     * Returns The step when the Ezsigntemplatesigner will be invited to validate the Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     * @return {Number}
     */
    getIEzsigntemplatesignatureValidationstep() {
        return this.iEzsigntemplatesignatureValidationstep;
    }

    /**
     * Sets The step when the Ezsigntemplatesigner will be invited to validate the Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     * @param {Number} iEzsigntemplatesignatureValidationstep The step when the Ezsigntemplatesigner will be invited to validate the Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     */
    setIEzsigntemplatesignatureValidationstep(iEzsigntemplatesignatureValidationstep) {
        this['iEzsigntemplatesignatureValidationstep'] = iEzsigntemplatesignatureValidationstep;
    }
/**
     * Returns The description attached to the attachment name added in Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     * @return {String}
     */
    getSEzsigntemplatesignatureAttachmentdescription() {
        return this.sEzsigntemplatesignatureAttachmentdescription;
    }

    /**
     * Sets The description attached to the attachment name added in Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     * @param {String} sEzsigntemplatesignatureAttachmentdescription The description attached to the attachment name added in Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
     */
    setSEzsigntemplatesignatureAttachmentdescription(sEzsigntemplatesignatureAttachmentdescription) {
        this['sEzsigntemplatesignatureAttachmentdescription'] = sEzsigntemplatesignatureAttachmentdescription;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureAttachmentnamesource}
     */
    getEEzsigntemplatesignatureAttachmentnamesource() {
        return this.eEzsigntemplatesignatureAttachmentnamesource;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureAttachmentnamesource} eEzsigntemplatesignatureAttachmentnamesource
     */
    setEEzsigntemplatesignatureAttachmentnamesource(eEzsigntemplatesignatureAttachmentnamesource) {
        this['eEzsigntemplatesignatureAttachmentnamesource'] = eEzsigntemplatesignatureAttachmentnamesource;
    }
/**
     * Returns Whether the Ezsigntemplatesignature is required or not. This field is relevant only with Ezsigntemplatesignature with eEzsigntemplatesignatureType = Attachments.
     * @return {Boolean}
     */
    getBEzsigntemplatesignatureRequired() {
        return this.bEzsigntemplatesignatureRequired;
    }

    /**
     * Sets Whether the Ezsigntemplatesignature is required or not. This field is relevant only with Ezsigntemplatesignature with eEzsigntemplatesignatureType = Attachments.
     * @param {Boolean} bEzsigntemplatesignatureRequired Whether the Ezsigntemplatesignature is required or not. This field is relevant only with Ezsigntemplatesignature with eEzsigntemplatesignatureType = Attachments.
     */
    setBEzsigntemplatesignatureRequired(bEzsigntemplatesignatureRequired) {
        this['bEzsigntemplatesignatureRequired'] = bEzsigntemplatesignatureRequired;
    }
/**
     * Returns The maximum length for the value in the Ezsigntemplatesignature  This can only be set if eEzsigntemplatesignatureType is **FieldText** or **FieldTextarea**
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getIEzsigntemplatesignatureMaxlength() {
        return this.iEzsigntemplatesignatureMaxlength;
    }

    /**
     * Sets The maximum length for the value in the Ezsigntemplatesignature  This can only be set if eEzsigntemplatesignatureType is **FieldText** or **FieldTextarea**
     * @param {Number} iEzsigntemplatesignatureMaxlength The maximum length for the value in the Ezsigntemplatesignature  This can only be set if eEzsigntemplatesignatureType is **FieldText** or **FieldTextarea**
     */
    setIEzsigntemplatesignatureMaxlength(iEzsigntemplatesignatureMaxlength) {
        this['iEzsigntemplatesignatureMaxlength'] = iEzsigntemplatesignatureMaxlength;
    }
/**
     * Returns A regular expression to indicate what values are acceptable for the Ezsigntemplatesignature.  This can only be set if eEzsigntemplatesignatureType is **Text** or **Textarea**
     * @return {String}
     */
    getSEzsigntemplatesignatureRegexp() {
        return this.sEzsigntemplatesignatureRegexp;
    }

    /**
     * Sets A regular expression to indicate what values are acceptable for the Ezsigntemplatesignature.  This can only be set if eEzsigntemplatesignatureType is **Text** or **Textarea**
     * @param {String} sEzsigntemplatesignatureRegexp A regular expression to indicate what values are acceptable for the Ezsigntemplatesignature.  This can only be set if eEzsigntemplatesignatureType is **Text** or **Textarea**
     */
    setSEzsigntemplatesignatureRegexp(sEzsigntemplatesignatureRegexp) {
        this['sEzsigntemplatesignatureRegexp'] = sEzsigntemplatesignatureRegexp;
    }
/**
     * @return {module:eZmaxAPI/model/EnumTextvalidation}
     */
    getEEzsigntemplatesignatureTextvalidation() {
        return this.eEzsigntemplatesignatureTextvalidation;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumTextvalidation} eEzsigntemplatesignatureTextvalidation
     */
    setEEzsigntemplatesignatureTextvalidation(eEzsigntemplatesignatureTextvalidation) {
        this['eEzsigntemplatesignatureTextvalidation'] = eEzsigntemplatesignatureTextvalidation;
    }

}

EzsigntemplatesignatureResponse.RequiredProperties = ["pkiEzsigntemplatesignatureID", "fkiEzsigntemplatedocumentID", "fkiEzsigntemplatesignerID", "iEzsigntemplatedocumentpagePagenumber", "iEzsigntemplatesignatureX", "iEzsigntemplatesignatureY", "iEzsigntemplatesignatureStep", "eEzsigntemplatesignatureType"];

/**
 * The unique ID of the Ezsigntemplatesignature
 * @member {Number} pkiEzsigntemplatesignatureID
 */
EzsigntemplatesignatureResponse.prototype['pkiEzsigntemplatesignatureID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplatesignatureResponse.prototype['fkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatesignatureResponse.prototype['fkiEzsigntemplatesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerIDValidation
 */
EzsigntemplatesignatureResponse.prototype['fkiEzsigntemplatesignerIDValidation'] = undefined;

/**
 * The page number in the Ezsigntemplatedocument
 * @member {Number} iEzsigntemplatedocumentpagePagenumber
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatedocumentpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignatureX
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignatureY
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureY'] = undefined;

/**
 * The width of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have a width of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureWidth.
 * @member {Number} iEzsigntemplatesignatureWidth
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureWidth'] = undefined;

/**
 * The height of the Ezsigntemplatesignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsigntemplatesignature to have an height of 2 inches, you would use \"200\" for the iEzsigntemplatesignatureHeight.
 * @member {Number} iEzsigntemplatesignatureHeight
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureHeight'] = undefined;

/**
 * The step when the Ezsigntemplatesigner will be invited to sign
 * @member {Number} iEzsigntemplatesignatureStep
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} eEzsigntemplatesignatureType
 */
EzsigntemplatesignatureResponse.prototype['eEzsigntemplatesignatureType'] = undefined;

/**
 * A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
 * @member {String} tEzsigntemplatesignatureTooltip
 */
EzsigntemplatesignatureResponse.prototype['tEzsigntemplatesignatureTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition} eEzsigntemplatesignatureTooltipposition
 */
EzsigntemplatesignatureResponse.prototype['eEzsigntemplatesignatureTooltipposition'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureFont} eEzsigntemplatesignatureFont
 */
EzsigntemplatesignatureResponse.prototype['eEzsigntemplatesignatureFont'] = undefined;

/**
 * The step when the Ezsigntemplatesigner will be invited to validate the Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
 * @member {Number} iEzsigntemplatesignatureValidationstep
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureValidationstep'] = undefined;

/**
 * The description attached to the attachment name added in Ezsigntemplatesignature of eEzsigntemplatesignatureType Attachments
 * @member {String} sEzsigntemplatesignatureAttachmentdescription
 */
EzsigntemplatesignatureResponse.prototype['sEzsigntemplatesignatureAttachmentdescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureAttachmentnamesource} eEzsigntemplatesignatureAttachmentnamesource
 */
EzsigntemplatesignatureResponse.prototype['eEzsigntemplatesignatureAttachmentnamesource'] = undefined;

/**
 * Whether the Ezsigntemplatesignature is required or not. This field is relevant only with Ezsigntemplatesignature with eEzsigntemplatesignatureType = Attachments.
 * @member {Boolean} bEzsigntemplatesignatureRequired
 */
EzsigntemplatesignatureResponse.prototype['bEzsigntemplatesignatureRequired'] = undefined;

/**
 * The maximum length for the value in the Ezsigntemplatesignature  This can only be set if eEzsigntemplatesignatureType is **FieldText** or **FieldTextarea**
 * @member {Number} iEzsigntemplatesignatureMaxlength
 */
EzsigntemplatesignatureResponse.prototype['iEzsigntemplatesignatureMaxlength'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsigntemplatesignature.  This can only be set if eEzsigntemplatesignatureType is **Text** or **Textarea**
 * @member {String} sEzsigntemplatesignatureRegexp
 */
EzsigntemplatesignatureResponse.prototype['sEzsigntemplatesignatureRegexp'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumTextvalidation} eEzsigntemplatesignatureTextvalidation
 */
EzsigntemplatesignatureResponse.prototype['eEzsigntemplatesignatureTextvalidation'] = undefined;






export default EzsigntemplatesignatureResponse;

