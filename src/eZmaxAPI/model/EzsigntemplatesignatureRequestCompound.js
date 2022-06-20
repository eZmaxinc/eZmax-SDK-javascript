/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatesignatureRequest from './EzsigntemplatesignatureRequest';
import EzsigntemplatesignatureRequestCompoundAllOf from './EzsigntemplatesignatureRequestCompoundAllOf';
import EzsigntemplatesignaturecustomdateRequestCompound from './EzsigntemplatesignaturecustomdateRequestCompound';
import FieldEEzsigntemplatesignatureFont from './FieldEEzsigntemplatesignatureFont';
import FieldEEzsigntemplatesignatureTooltipposition from './FieldEEzsigntemplatesignatureTooltipposition';
import FieldEEzsigntemplatesignatureType from './FieldEEzsigntemplatesignatureType';

/**
 * The EzsigntemplatesignatureRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureRequestCompound
 * @version 1.1.8
 */
class EzsigntemplatesignatureRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplatesignatureRequestCompound</code>.
     * A Ezsigntemplatesignature Object and children
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatesignatureRequest
     * @implements module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompoundAllOf
     * @param fkiEzsigntemplatedocumentID {Number} The unique ID of the Ezsigntemplatedocument
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     * @param iEzsigntemplatedocumentpagePagenumber {Number} The page number in the Ezsigntemplatedocument
     * @param iEzsigntemplatesignatureX {Number} The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsigntemplatesignatureY {Number} The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsigntemplatesignatureStep {Number} The step when the Ezsigntemplatesigner will be invited to sign
     * @param eEzsigntemplatesignatureType {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} 
     */
    constructor(fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType) { 
        EzsigntemplatesignatureRequest.initialize(this, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType);EzsigntemplatesignatureRequestCompoundAllOf.initialize(this);
        EzsigntemplatesignatureRequestCompound.initialize(this, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplatedocumentID, fkiEzsigntemplatesignerID, iEzsigntemplatedocumentpagePagenumber, iEzsigntemplatesignatureX, iEzsigntemplatesignatureY, iEzsigntemplatesignatureStep, eEzsigntemplatesignatureType) { 
        obj['fkiEzsigntemplatedocumentID'] = fkiEzsigntemplatedocumentID;
        obj['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
        obj['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
        obj['iEzsigntemplatesignatureX'] = iEzsigntemplatesignatureX;
        obj['iEzsigntemplatesignatureY'] = iEzsigntemplatesignatureY;
        obj['iEzsigntemplatesignatureStep'] = iEzsigntemplatesignatureStep;
        obj['eEzsigntemplatesignatureType'] = eEzsigntemplatesignatureType;
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound} The populated <code>EzsigntemplatesignatureRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureRequestCompound();
            EzsigntemplatesignatureRequest.constructFromObject(data, obj);
            EzsigntemplatesignatureRequestCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatesignatureID')) {
                obj['pkiEzsigntemplatesignatureID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignatureID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatedocumentID')) {
                obj['fkiEzsigntemplatedocumentID'] = ApiClient.convertToType(data['fkiEzsigntemplatedocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
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
            if (data.hasOwnProperty('bEzsigntemplatesignatureCustomdate')) {
                obj['bEzsigntemplatesignatureCustomdate'] = ApiClient.convertToType(data['bEzsigntemplatesignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsigntemplatesignaturecustomdate')) {
                obj['a_objEzsigntemplatesignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsigntemplatesignaturecustomdate'], [EzsigntemplatesignaturecustomdateRequestCompound]);
            }
        }
        return obj;
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
     * Returns Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     * @return {Boolean}
     */
    getBEzsigntemplatesignatureCustomdate() {
        return this.bEzsigntemplatesignatureCustomdate;
    }

    /**
     * Sets Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     * @param {Boolean} bEzsigntemplatesignatureCustomdate Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
     */
    setBEzsigntemplatesignatureCustomdate(bEzsigntemplatesignatureCustomdate) {
        this['bEzsigntemplatesignatureCustomdate'] = bEzsigntemplatesignatureCustomdate;
    }
/**
     * Returns An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound>}
     */
    getAObjEzsigntemplatesignaturecustomdate() {
        return this.a_objEzsigntemplatesignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound>} a_objEzsigntemplatesignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsigntemplatesignaturecustomdate(a_objEzsigntemplatesignaturecustomdate) {
        this['a_objEzsigntemplatesignaturecustomdate'] = a_objEzsigntemplatesignaturecustomdate;
    }

}

/**
 * The unique ID of the Ezsigntemplatesignature
 * @member {Number} pkiEzsigntemplatesignatureID
 */
EzsigntemplatesignatureRequestCompound.prototype['pkiEzsigntemplatesignatureID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplatesignatureRequestCompound.prototype['fkiEzsigntemplatedocumentID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatesignatureRequestCompound.prototype['fkiEzsigntemplatesignerID'] = undefined;

/**
 * The page number in the Ezsigntemplatedocument
 * @member {Number} iEzsigntemplatedocumentpagePagenumber
 */
EzsigntemplatesignatureRequestCompound.prototype['iEzsigntemplatedocumentpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignatureX
 */
EzsigntemplatesignatureRequestCompound.prototype['iEzsigntemplatesignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignatureY
 */
EzsigntemplatesignatureRequestCompound.prototype['iEzsigntemplatesignatureY'] = undefined;

/**
 * The step when the Ezsigntemplatesigner will be invited to sign
 * @member {Number} iEzsigntemplatesignatureStep
 */
EzsigntemplatesignatureRequestCompound.prototype['iEzsigntemplatesignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} eEzsigntemplatesignatureType
 */
EzsigntemplatesignatureRequestCompound.prototype['eEzsigntemplatesignatureType'] = undefined;

/**
 * A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
 * @member {String} tEzsigntemplatesignatureTooltip
 */
EzsigntemplatesignatureRequestCompound.prototype['tEzsigntemplatesignatureTooltip'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition} eEzsigntemplatesignatureTooltipposition
 */
EzsigntemplatesignatureRequestCompound.prototype['eEzsigntemplatesignatureTooltipposition'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureFont} eEzsigntemplatesignatureFont
 */
EzsigntemplatesignatureRequestCompound.prototype['eEzsigntemplatesignatureFont'] = undefined;

/**
 * Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
 * @member {Boolean} bEzsigntemplatesignatureCustomdate
 */
EzsigntemplatesignatureRequestCompound.prototype['bEzsigntemplatesignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound>} a_objEzsigntemplatesignaturecustomdate
 */
EzsigntemplatesignatureRequestCompound.prototype['a_objEzsigntemplatesignaturecustomdate'] = undefined;


// Implement EzsigntemplatesignatureRequest interface:
/**
 * The unique ID of the Ezsigntemplatesignature
 * @member {Number} pkiEzsigntemplatesignatureID
 */
EzsigntemplatesignatureRequest.prototype['pkiEzsigntemplatesignatureID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatedocument
 * @member {Number} fkiEzsigntemplatedocumentID
 */
EzsigntemplatesignatureRequest.prototype['fkiEzsigntemplatedocumentID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatesignatureRequest.prototype['fkiEzsigntemplatesignerID'] = undefined;
/**
 * The page number in the Ezsigntemplatedocument
 * @member {Number} iEzsigntemplatedocumentpagePagenumber
 */
EzsigntemplatesignatureRequest.prototype['iEzsigntemplatedocumentpagePagenumber'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignatureX
 */
EzsigntemplatesignatureRequest.prototype['iEzsigntemplatesignatureX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignature 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignatureY
 */
EzsigntemplatesignatureRequest.prototype['iEzsigntemplatesignatureY'] = undefined;
/**
 * The step when the Ezsigntemplatesigner will be invited to sign
 * @member {Number} iEzsigntemplatesignatureStep
 */
EzsigntemplatesignatureRequest.prototype['iEzsigntemplatesignatureStep'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureType} eEzsigntemplatesignatureType
 */
EzsigntemplatesignatureRequest.prototype['eEzsigntemplatesignatureType'] = undefined;
/**
 * A tooltip that will be presented to Ezsigntemplatesigner about the Ezsigntemplatesignature
 * @member {String} tEzsigntemplatesignatureTooltip
 */
EzsigntemplatesignatureRequest.prototype['tEzsigntemplatesignatureTooltip'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureTooltipposition} eEzsigntemplatesignatureTooltipposition
 */
EzsigntemplatesignatureRequest.prototype['eEzsigntemplatesignatureTooltipposition'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatesignatureFont} eEzsigntemplatesignatureFont
 */
EzsigntemplatesignatureRequest.prototype['eEzsigntemplatesignatureFont'] = undefined;
// Implement EzsigntemplatesignatureRequestCompoundAllOf interface:
/**
 * Whether the Ezsigntemplatesignature has a custom date format or not. (Only possible when eEzsigntemplatesignatureType is **Name** or **Handwritten**)
 * @member {Boolean} bEzsigntemplatesignatureCustomdate
 */
EzsigntemplatesignatureRequestCompoundAllOf.prototype['bEzsigntemplatesignatureCustomdate'] = undefined;
/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsigntemplatesignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound>} a_objEzsigntemplatesignaturecustomdate
 */
EzsigntemplatesignatureRequestCompoundAllOf.prototype['a_objEzsigntemplatesignaturecustomdate'] = undefined;




export default EzsigntemplatesignatureRequestCompound;

