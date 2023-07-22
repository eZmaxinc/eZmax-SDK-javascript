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
import EnumHorizontalalignment from './EnumHorizontalalignment';
import EnumVerticalalignment from './EnumVerticalalignment';
import FieldEEzsignannotationType from './FieldEEzsignannotationType';

/**
 * The EzsignannotationResponse model module.
 * @module eZmaxAPI/model/EzsignannotationResponse
 * @version 1.1.18
 */
class EzsignannotationResponse {
    /**
     * Constructs a new <code>EzsignannotationResponse</code>.
     * A Ezsignannotation Object
     * @alias module:eZmaxAPI/model/EzsignannotationResponse
     * @param pkiEzsignannotationID {Number} The unique ID of the Ezsignannotation
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param eEzsignannotationType {module:eZmaxAPI/model/FieldEEzsignannotationType} 
     * @param iEzsignannotationX {Number} The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignannotationY {Number} The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     */
    constructor(pkiEzsignannotationID, fkiEzsigndocumentID, eEzsignannotationType, iEzsignannotationX, iEzsignannotationY, iEzsignpagePagenumber) { 
        
        EzsignannotationResponse.initialize(this, pkiEzsignannotationID, fkiEzsigndocumentID, eEzsignannotationType, iEzsignannotationX, iEzsignannotationY, iEzsignpagePagenumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignannotationID, fkiEzsigndocumentID, eEzsignannotationType, iEzsignannotationX, iEzsignannotationY, iEzsignpagePagenumber) { 
        obj['pkiEzsignannotationID'] = pkiEzsignannotationID;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['eEzsignannotationType'] = eEzsignannotationType;
        obj['iEzsignannotationX'] = iEzsignannotationX;
        obj['iEzsignannotationY'] = iEzsignannotationY;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
    }

    /**
     * Constructs a <code>EzsignannotationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignannotationResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignannotationResponse} The populated <code>EzsignannotationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignannotationResponse();

            if (data.hasOwnProperty('pkiEzsignannotationID')) {
                obj['pkiEzsignannotationID'] = ApiClient.convertToType(data['pkiEzsignannotationID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignannotationHorizontalalignment')) {
                obj['eEzsignannotationHorizontalalignment'] = EnumHorizontalalignment.constructFromObject(data['eEzsignannotationHorizontalalignment']);
            }
            if (data.hasOwnProperty('eEzsignannotationVerticalalignment')) {
                obj['eEzsignannotationVerticalalignment'] = EnumVerticalalignment.constructFromObject(data['eEzsignannotationVerticalalignment']);
            }
            if (data.hasOwnProperty('eEzsignannotationType')) {
                obj['eEzsignannotationType'] = FieldEEzsignannotationType.constructFromObject(data['eEzsignannotationType']);
            }
            if (data.hasOwnProperty('iEzsignannotationX')) {
                obj['iEzsignannotationX'] = ApiClient.convertToType(data['iEzsignannotationX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignannotationY')) {
                obj['iEzsignannotationY'] = ApiClient.convertToType(data['iEzsignannotationY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignannotationWidth')) {
                obj['iEzsignannotationWidth'] = ApiClient.convertToType(data['iEzsignannotationWidth'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignannotationHeight')) {
                obj['iEzsignannotationHeight'] = ApiClient.convertToType(data['iEzsignannotationHeight'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignannotationText')) {
                obj['sEzsignannotationText'] = ApiClient.convertToType(data['sEzsignannotationText'], 'String');
            }
            if (data.hasOwnProperty('iEzsignpagePagenumber')) {
                obj['iEzsignpagePagenumber'] = ApiClient.convertToType(data['iEzsignpagePagenumber'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignannotationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignannotationResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignannotationResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignannotationText'] && !(typeof data['sEzsignannotationText'] === 'string' || data['sEzsignannotationText'] instanceof String)) {
            throw new Error("Expected the field `sEzsignannotationText` to be a primitive type in the JSON string but got " + data['sEzsignannotationText']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignannotation
     * @return {Number}
     */
    getPkiEzsignannotationID() {
        return this.pkiEzsignannotationID;
    }

    /**
     * Sets The unique ID of the Ezsignannotation
     * @param {Number} pkiEzsignannotationID The unique ID of the Ezsignannotation
     */
    setPkiEzsignannotationID(pkiEzsignannotationID) {
        this['pkiEzsignannotationID'] = pkiEzsignannotationID;
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
     * @return {module:eZmaxAPI/model/EnumHorizontalalignment}
     */
    getEEzsignannotationHorizontalalignment() {
        return this.eEzsignannotationHorizontalalignment;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumHorizontalalignment} eEzsignannotationHorizontalalignment
     */
    setEEzsignannotationHorizontalalignment(eEzsignannotationHorizontalalignment) {
        this['eEzsignannotationHorizontalalignment'] = eEzsignannotationHorizontalalignment;
    }
/**
     * @return {module:eZmaxAPI/model/EnumVerticalalignment}
     */
    getEEzsignannotationVerticalalignment() {
        return this.eEzsignannotationVerticalalignment;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumVerticalalignment} eEzsignannotationVerticalalignment
     */
    setEEzsignannotationVerticalalignment(eEzsignannotationVerticalalignment) {
        this['eEzsignannotationVerticalalignment'] = eEzsignannotationVerticalalignment;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignannotationType}
     */
    getEEzsignannotationType() {
        return this.eEzsignannotationType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignannotationType} eEzsignannotationType
     */
    setEEzsignannotationType(eEzsignannotationType) {
        this['eEzsignannotationType'] = eEzsignannotationType;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignannotationX() {
        return this.iEzsignannotationX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignannotationX The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsignannotationX(iEzsignannotationX) {
        this['iEzsignannotationX'] = iEzsignannotationX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignannotationY() {
        return this.iEzsignannotationY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsignannotationY The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsignannotationY(iEzsignannotationY) {
        this['iEzsignannotationY'] = iEzsignannotationY;
    }
/**
     * Returns The Width of the Ezsignannotation.  Width is calculated at 100dpi (dot per inch). So for example, if you want to have the width of the Ezsignannotation to be 3 inches, you would use \"300\" for the Width.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignannotationWidth() {
        return this.iEzsignannotationWidth;
    }

    /**
     * Sets The Width of the Ezsignannotation.  Width is calculated at 100dpi (dot per inch). So for example, if you want to have the width of the Ezsignannotation to be 3 inches, you would use \"300\" for the Width.
     * @param {Number} iEzsignannotationWidth The Width of the Ezsignannotation.  Width is calculated at 100dpi (dot per inch). So for example, if you want to have the width of the Ezsignannotation to be 3 inches, you would use \"300\" for the Width.
     */
    setIEzsignannotationWidth(iEzsignannotationWidth) {
        this['iEzsignannotationWidth'] = iEzsignannotationWidth;
    }
/**
     * Returns The Height of the Ezsignannotation.  Height is calculated at 100dpi (dot per inch). So for example, if you want to have the height of the Ezsignannotation to be 2 inches, you would use \"200\" for the Height.  This can only be set if eEzsignannotationType is **StrikethroughBlock** or **Text**
     * minimum: 0
     * @return {Number}
     */
    getIEzsignannotationHeight() {
        return this.iEzsignannotationHeight;
    }

    /**
     * Sets The Height of the Ezsignannotation.  Height is calculated at 100dpi (dot per inch). So for example, if you want to have the height of the Ezsignannotation to be 2 inches, you would use \"200\" for the Height.  This can only be set if eEzsignannotationType is **StrikethroughBlock** or **Text**
     * @param {Number} iEzsignannotationHeight The Height of the Ezsignannotation.  Height is calculated at 100dpi (dot per inch). So for example, if you want to have the height of the Ezsignannotation to be 2 inches, you would use \"200\" for the Height.  This can only be set if eEzsignannotationType is **StrikethroughBlock** or **Text**
     */
    setIEzsignannotationHeight(iEzsignannotationHeight) {
        this['iEzsignannotationHeight'] = iEzsignannotationHeight;
    }
/**
     * Returns The Text of the Ezsignannotation
     * @return {String}
     */
    getSEzsignannotationText() {
        return this.sEzsignannotationText;
    }

    /**
     * Sets The Text of the Ezsignannotation
     * @param {String} sEzsignannotationText The Text of the Ezsignannotation
     */
    setSEzsignannotationText(sEzsignannotationText) {
        this['sEzsignannotationText'] = sEzsignannotationText;
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

}

EzsignannotationResponse.RequiredProperties = ["pkiEzsignannotationID", "fkiEzsigndocumentID", "eEzsignannotationType", "iEzsignannotationX", "iEzsignannotationY", "iEzsignpagePagenumber"];

/**
 * The unique ID of the Ezsignannotation
 * @member {Number} pkiEzsignannotationID
 */
EzsignannotationResponse.prototype['pkiEzsignannotationID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignannotationResponse.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumHorizontalalignment} eEzsignannotationHorizontalalignment
 */
EzsignannotationResponse.prototype['eEzsignannotationHorizontalalignment'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumVerticalalignment} eEzsignannotationVerticalalignment
 */
EzsignannotationResponse.prototype['eEzsignannotationVerticalalignment'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignannotationType} eEzsignannotationType
 */
EzsignannotationResponse.prototype['eEzsignannotationType'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignannotationX
 */
EzsignannotationResponse.prototype['iEzsignannotationX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsignannotation on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignannotation 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignannotationY
 */
EzsignannotationResponse.prototype['iEzsignannotationY'] = undefined;

/**
 * The Width of the Ezsignannotation.  Width is calculated at 100dpi (dot per inch). So for example, if you want to have the width of the Ezsignannotation to be 3 inches, you would use \"300\" for the Width.
 * @member {Number} iEzsignannotationWidth
 */
EzsignannotationResponse.prototype['iEzsignannotationWidth'] = undefined;

/**
 * The Height of the Ezsignannotation.  Height is calculated at 100dpi (dot per inch). So for example, if you want to have the height of the Ezsignannotation to be 2 inches, you would use \"200\" for the Height.  This can only be set if eEzsignannotationType is **StrikethroughBlock** or **Text**
 * @member {Number} iEzsignannotationHeight
 */
EzsignannotationResponse.prototype['iEzsignannotationHeight'] = undefined;

/**
 * The Text of the Ezsignannotation
 * @member {String} sEzsignannotationText
 */
EzsignannotationResponse.prototype['sEzsignannotationText'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignannotationResponse.prototype['iEzsignpagePagenumber'] = undefined;






export default EzsignannotationResponse;

