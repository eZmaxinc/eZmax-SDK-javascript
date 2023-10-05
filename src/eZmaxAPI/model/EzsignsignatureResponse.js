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
import CustomContactNameResponse from './CustomContactNameResponse';
import EnumTextvalidation from './EnumTextvalidation';
import FieldEEzsignsignatureAttachmentnamesource from './FieldEEzsignsignatureAttachmentnamesource';
import FieldEEzsignsignatureDependencyrequirement from './FieldEEzsignsignatureDependencyrequirement';
import FieldEEzsignsignatureFont from './FieldEEzsignsignatureFont';
import FieldEEzsignsignatureTooltipposition from './FieldEEzsignsignatureTooltipposition';
import FieldEEzsignsignatureType from './FieldEEzsignsignatureType';
import SignatureResponseCompound from './SignatureResponseCompound';

/**
 * The EzsignsignatureResponse model module.
 * @module eZmaxAPI/model/EzsignsignatureResponse
 * @version 1.2.0
 */
class EzsignsignatureResponse {
    /**
     * Constructs a new <code>EzsignsignatureResponse</code>.
     * An Ezsignsignature Object
     * @alias module:eZmaxAPI/model/EzsignsignatureResponse
     * @param pkiEzsignsignatureID {Number} The unique ID of the Ezsignsignature
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param iEzsignsignatureX {Number} The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignatureY {Number} The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignsignatureStep {Number} The step when the Ezsignsigner will be invited to sign
     * @param eEzsignsignatureType {module:eZmaxAPI/model/FieldEEzsignsignatureType} 
     * @param objContactName {module:eZmaxAPI/model/CustomContactNameResponse} 
     */
    constructor(pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, objContactName) { 
        
        EzsignsignatureResponse.initialize(this, pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, objContactName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignatureID, fkiEzsigndocumentID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, objContactName) { 
        obj['pkiEzsignsignatureID'] = pkiEzsignsignatureID;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['iEzsignsignatureX'] = iEzsignsignatureX;
        obj['iEzsignsignatureY'] = iEzsignsignatureY;
        obj['iEzsignsignatureStep'] = iEzsignsignatureStep;
        obj['eEzsignsignatureType'] = eEzsignsignatureType;
        obj['objContactName'] = objContactName;
    }

    /**
     * Constructs a <code>EzsignsignatureResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureResponse} The populated <code>EzsignsignatureResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureResponse();

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
            if (data.hasOwnProperty('iEzsignsignatureHeight')) {
                obj['iEzsignsignatureHeight'] = ApiClient.convertToType(data['iEzsignsignatureHeight'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureWidth')) {
                obj['iEzsignsignatureWidth'] = ApiClient.convertToType(data['iEzsignsignatureWidth'], 'Number');
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
            if (data.hasOwnProperty('dtEzsignsignatureDate')) {
                obj['dtEzsignsignatureDate'] = ApiClient.convertToType(data['dtEzsignsignatureDate'], 'String');
            }
            if (data.hasOwnProperty('iEzsignsignatureattachmentCount')) {
                obj['iEzsignsignatureattachmentCount'] = ApiClient.convertToType(data['iEzsignsignatureattachmentCount'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignsignatureDescription')) {
                obj['sEzsignsignatureDescription'] = ApiClient.convertToType(data['sEzsignsignatureDescription'], 'String');
            }
            if (data.hasOwnProperty('iEzsignsignatureMaxlength')) {
                obj['iEzsignsignatureMaxlength'] = ApiClient.convertToType(data['iEzsignsignatureMaxlength'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignsignatureTextvalidation')) {
                obj['eEzsignsignatureTextvalidation'] = EnumTextvalidation.constructFromObject(data['eEzsignsignatureTextvalidation']);
            }
            if (data.hasOwnProperty('eEzsignsignatureDependencyrequirement')) {
                obj['eEzsignsignatureDependencyrequirement'] = FieldEEzsignsignatureDependencyrequirement.constructFromObject(data['eEzsignsignatureDependencyrequirement']);
            }
            if (data.hasOwnProperty('sEzsignsignatureRegexp')) {
                obj['sEzsignsignatureRegexp'] = ApiClient.convertToType(data['sEzsignsignatureRegexp'], 'String');
            }
            if (data.hasOwnProperty('objContactName')) {
                obj['objContactName'] = CustomContactNameResponse.constructFromObject(data['objContactName']);
            }
            if (data.hasOwnProperty('objContactNameDelegation')) {
                obj['objContactNameDelegation'] = CustomContactNameResponse.constructFromObject(data['objContactNameDelegation']);
            }
            if (data.hasOwnProperty('objSignature')) {
                obj['objSignature'] = SignatureResponseCompound.constructFromObject(data['objSignature']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignatureResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignatureResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignatureResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tEzsignsignatureTooltip'] && !(typeof data['tEzsignsignatureTooltip'] === 'string' || data['tEzsignsignatureTooltip'] instanceof String)) {
            throw new Error("Expected the field `tEzsignsignatureTooltip` to be a primitive type in the JSON string but got " + data['tEzsignsignatureTooltip']);
        }
        // ensure the json data is a string
        if (data['sEzsignsignatureAttachmentdescription'] && !(typeof data['sEzsignsignatureAttachmentdescription'] === 'string' || data['sEzsignsignatureAttachmentdescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignatureAttachmentdescription` to be a primitive type in the JSON string but got " + data['sEzsignsignatureAttachmentdescription']);
        }
        // ensure the json data is a string
        if (data['dtEzsignsignatureDate'] && !(typeof data['dtEzsignsignatureDate'] === 'string' || data['dtEzsignsignatureDate'] instanceof String)) {
            throw new Error("Expected the field `dtEzsignsignatureDate` to be a primitive type in the JSON string but got " + data['dtEzsignsignatureDate']);
        }
        // ensure the json data is a string
        if (data['sEzsignsignatureDescription'] && !(typeof data['sEzsignsignatureDescription'] === 'string' || data['sEzsignsignatureDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignatureDescription` to be a primitive type in the JSON string but got " + data['sEzsignsignatureDescription']);
        }
        // ensure the json data is a string
        if (data['sEzsignsignatureRegexp'] && !(typeof data['sEzsignsignatureRegexp'] === 'string' || data['sEzsignsignatureRegexp'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignatureRegexp` to be a primitive type in the JSON string but got " + data['sEzsignsignatureRegexp']);
        }
        // validate the optional field `objContactName`
        if (data['objContactName']) { // data not null
          CustomContactNameResponse.validateJSON(data['objContactName']);
        }
        // validate the optional field `objContactNameDelegation`
        if (data['objContactNameDelegation']) { // data not null
          CustomContactNameResponse.validateJSON(data['objContactNameDelegation']);
        }
        // validate the optional field `objSignature`
        if (data['objSignature']) { // data not null
          SignatureResponseCompound.validateJSON(data['objSignature']);
        }

        return true;
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
     * Returns The height of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have an height of 2 inches, you would use \"200\" for the iEzsignsignatureHeight.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignatureHeight() {
        return this.iEzsignsignatureHeight;
    }

    /**
     * Sets The height of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have an height of 2 inches, you would use \"200\" for the iEzsignsignatureHeight.
     * @param {Number} iEzsignsignatureHeight The height of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have an height of 2 inches, you would use \"200\" for the iEzsignsignatureHeight.
     */
    setIEzsignsignatureHeight(iEzsignsignatureHeight) {
        this['iEzsignsignatureHeight'] = iEzsignsignatureHeight;
    }
/**
     * Returns The width of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have a width of 2 inches, you would use \"200\" for the iEzsignsignatureWidth.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignatureWidth() {
        return this.iEzsignsignatureWidth;
    }

    /**
     * Sets The width of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have a width of 2 inches, you would use \"200\" for the iEzsignsignatureWidth.
     * @param {Number} iEzsignsignatureWidth The width of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have a width of 2 inches, you would use \"200\" for the iEzsignsignatureWidth.
     */
    setIEzsignsignatureWidth(iEzsignsignatureWidth) {
        this['iEzsignsignatureWidth'] = iEzsignsignatureWidth;
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
     * Returns The date the Ezsignsignature was signed
     * @return {String}
     */
    getDtEzsignsignatureDate() {
        return this.dtEzsignsignatureDate;
    }

    /**
     * Sets The date the Ezsignsignature was signed
     * @param {String} dtEzsignsignatureDate The date the Ezsignsignature was signed
     */
    setDtEzsignsignatureDate(dtEzsignsignatureDate) {
        this['dtEzsignsignatureDate'] = dtEzsignsignatureDate;
    }
/**
     * Returns The count of Ezsignsignatureattachment
     * @return {Number}
     */
    getIEzsignsignatureattachmentCount() {
        return this.iEzsignsignatureattachmentCount;
    }

    /**
     * Sets The count of Ezsignsignatureattachment
     * @param {Number} iEzsignsignatureattachmentCount The count of Ezsignsignatureattachment
     */
    setIEzsignsignatureattachmentCount(iEzsignsignatureattachmentCount) {
        this['iEzsignsignatureattachmentCount'] = iEzsignsignatureattachmentCount;
    }
/**
     * Returns The value entered while signing Ezsignsignature of eEzsignsignatureType **City**, **FieldText** and **FieldTextarea**
     * @return {String}
     */
    getSEzsignsignatureDescription() {
        return this.sEzsignsignatureDescription;
    }

    /**
     * Sets The value entered while signing Ezsignsignature of eEzsignsignatureType **City**, **FieldText** and **FieldTextarea**
     * @param {String} sEzsignsignatureDescription The value entered while signing Ezsignsignature of eEzsignsignatureType **City**, **FieldText** and **FieldTextarea**
     */
    setSEzsignsignatureDescription(sEzsignsignatureDescription) {
        this['sEzsignsignatureDescription'] = sEzsignsignatureDescription;
    }
/**
     * Returns The maximum length for the value in the Ezsignsignature  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea**
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getIEzsignsignatureMaxlength() {
        return this.iEzsignsignatureMaxlength;
    }

    /**
     * Sets The maximum length for the value in the Ezsignsignature  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea**
     * @param {Number} iEzsignsignatureMaxlength The maximum length for the value in the Ezsignsignature  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea**
     */
    setIEzsignsignatureMaxlength(iEzsignsignatureMaxlength) {
        this['iEzsignsignatureMaxlength'] = iEzsignsignatureMaxlength;
    }
/**
     * @return {module:eZmaxAPI/model/EnumTextvalidation}
     */
    getEEzsignsignatureTextvalidation() {
        return this.eEzsignsignatureTextvalidation;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumTextvalidation} eEzsignsignatureTextvalidation
     */
    setEEzsignsignatureTextvalidation(eEzsignsignatureTextvalidation) {
        this['eEzsignsignatureTextvalidation'] = eEzsignsignatureTextvalidation;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureDependencyrequirement}
     */
    getEEzsignsignatureDependencyrequirement() {
        return this.eEzsignsignatureDependencyrequirement;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureDependencyrequirement} eEzsignsignatureDependencyrequirement
     */
    setEEzsignsignatureDependencyrequirement(eEzsignsignatureDependencyrequirement) {
        this['eEzsignsignatureDependencyrequirement'] = eEzsignsignatureDependencyrequirement;
    }
/**
     * Returns A regular expression to indicate what values are acceptable for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea** and eEzsignsignatureTextvalidation is **Custom**
     * @return {String}
     */
    getSEzsignsignatureRegexp() {
        return this.sEzsignsignatureRegexp;
    }

    /**
     * Sets A regular expression to indicate what values are acceptable for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea** and eEzsignsignatureTextvalidation is **Custom**
     * @param {String} sEzsignsignatureRegexp A regular expression to indicate what values are acceptable for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea** and eEzsignsignatureTextvalidation is **Custom**
     */
    setSEzsignsignatureRegexp(sEzsignsignatureRegexp) {
        this['sEzsignsignatureRegexp'] = sEzsignsignatureRegexp;
    }
/**
     * @return {module:eZmaxAPI/model/CustomContactNameResponse}
     */
    getObjContactName() {
        return this.objContactName;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomContactNameResponse} objContactName
     */
    setObjContactName(objContactName) {
        this['objContactName'] = objContactName;
    }
/**
     * @return {module:eZmaxAPI/model/CustomContactNameResponse}
     */
    getObjContactNameDelegation() {
        return this.objContactNameDelegation;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomContactNameResponse} objContactNameDelegation
     */
    setObjContactNameDelegation(objContactNameDelegation) {
        this['objContactNameDelegation'] = objContactNameDelegation;
    }
/**
     * @return {module:eZmaxAPI/model/SignatureResponseCompound}
     */
    getObjSignature() {
        return this.objSignature;
    }

    /**
     * @param {module:eZmaxAPI/model/SignatureResponseCompound} objSignature
     */
    setObjSignature(objSignature) {
        this['objSignature'] = objSignature;
    }

}

EzsignsignatureResponse.RequiredProperties = ["pkiEzsignsignatureID", "fkiEzsigndocumentID", "fkiEzsignfoldersignerassociationID", "iEzsignpagePagenumber", "iEzsignsignatureX", "iEzsignsignatureY", "iEzsignsignatureStep", "eEzsignsignatureType", "objContactName"];

/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureResponse.prototype['pkiEzsignsignatureID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureResponse.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureResponse.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureResponse.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureResponse.prototype['iEzsignsignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureResponse.prototype['iEzsignsignatureY'] = undefined;

/**
 * The height of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have an height of 2 inches, you would use \"200\" for the iEzsignsignatureHeight.
 * @member {Number} iEzsignsignatureHeight
 */
EzsignsignatureResponse.prototype['iEzsignsignatureHeight'] = undefined;

/**
 * The width of the Ezsignsignature.  Size is calculated at 100dpi (dot per inch). So for example, if you want the Ezsignsignature to have a width of 2 inches, you would use \"200\" for the iEzsignsignatureWidth.
 * @member {Number} iEzsignsignatureWidth
 */
EzsignsignatureResponse.prototype['iEzsignsignatureWidth'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to sign
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureResponse.prototype['iEzsignsignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureResponse.prototype['eEzsignsignatureType'] = undefined;

/**
 * A tooltip that will be presented to Ezsignsigner about the Ezsignsignature
 * @member {String} tEzsignsignatureTooltip
 */
EzsignsignatureResponse.prototype['tEzsignsignatureTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureTooltipposition} eEzsignsignatureTooltipposition
 */
EzsignsignatureResponse.prototype['eEzsignsignatureTooltipposition'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureFont} eEzsignsignatureFont
 */
EzsignsignatureResponse.prototype['eEzsignsignatureFont'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to validate the Ezsignsignature of eEzsignsignatureType Attachments
 * @member {Number} iEzsignsignatureValidationstep
 */
EzsignsignatureResponse.prototype['iEzsignsignatureValidationstep'] = undefined;

/**
 * The description attached to the attachment name added in Ezsignsignature of eEzsignsignatureType Attachments
 * @member {String} sEzsignsignatureAttachmentdescription
 */
EzsignsignatureResponse.prototype['sEzsignsignatureAttachmentdescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureAttachmentnamesource} eEzsignsignatureAttachmentnamesource
 */
EzsignsignatureResponse.prototype['eEzsignsignatureAttachmentnamesource'] = undefined;

/**
 * Whether the Ezsignsignature is required or not. This field is relevant only with Ezsignsignature with eEzsignsignatureType = Attachments.
 * @member {Boolean} bEzsignsignatureRequired
 */
EzsignsignatureResponse.prototype['bEzsignsignatureRequired'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationIDValidation
 */
EzsignsignatureResponse.prototype['fkiEzsignfoldersignerassociationIDValidation'] = undefined;

/**
 * The date the Ezsignsignature was signed
 * @member {String} dtEzsignsignatureDate
 */
EzsignsignatureResponse.prototype['dtEzsignsignatureDate'] = undefined;

/**
 * The count of Ezsignsignatureattachment
 * @member {Number} iEzsignsignatureattachmentCount
 */
EzsignsignatureResponse.prototype['iEzsignsignatureattachmentCount'] = undefined;

/**
 * The value entered while signing Ezsignsignature of eEzsignsignatureType **City**, **FieldText** and **FieldTextarea**
 * @member {String} sEzsignsignatureDescription
 */
EzsignsignatureResponse.prototype['sEzsignsignatureDescription'] = undefined;

/**
 * The maximum length for the value in the Ezsignsignature  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea**
 * @member {Number} iEzsignsignatureMaxlength
 */
EzsignsignatureResponse.prototype['iEzsignsignatureMaxlength'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumTextvalidation} eEzsignsignatureTextvalidation
 */
EzsignsignatureResponse.prototype['eEzsignsignatureTextvalidation'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureDependencyrequirement} eEzsignsignatureDependencyrequirement
 */
EzsignsignatureResponse.prototype['eEzsignsignatureDependencyrequirement'] = undefined;

/**
 * A regular expression to indicate what values are acceptable for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **FieldText** or **FieldTextarea** and eEzsignsignatureTextvalidation is **Custom**
 * @member {String} sEzsignsignatureRegexp
 */
EzsignsignatureResponse.prototype['sEzsignsignatureRegexp'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomContactNameResponse} objContactName
 */
EzsignsignatureResponse.prototype['objContactName'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CustomContactNameResponse} objContactNameDelegation
 */
EzsignsignatureResponse.prototype['objContactNameDelegation'] = undefined;

/**
 * @member {module:eZmaxAPI/model/SignatureResponseCompound} objSignature
 */
EzsignsignatureResponse.prototype['objSignature'] = undefined;






export default EzsignsignatureResponse;

