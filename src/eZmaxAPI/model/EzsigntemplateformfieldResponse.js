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

/**
 * The EzsigntemplateformfieldResponse model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldResponse
 * @version 1.2.0
 */
class EzsigntemplateformfieldResponse {
    /**
     * Constructs a new <code>EzsigntemplateformfieldResponse</code>.
     * An Ezsigntemplateformfield Object
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldResponse
     * @param pkiEzsigntemplateformfieldID {Number} The unique ID of the Ezsigntemplateformfield
     * @param iEzsigntemplatedocumentpagePagenumber {Number} The page number in the Ezsigntemplatedocument
     * @param sEzsigntemplateformfieldLabel {String} The Label for the Ezsigntemplateformfield
     * @param iEzsigntemplateformfieldX {Number} The X coordinate (Horizontal) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsigntemplateformfieldY {Number} The Y coordinate (Vertical) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsigntemplateformfieldWidth {Number} The Width of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * @param iEzsigntemplateformfieldHeight {Number} The Height of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     */
    constructor(pkiEzsigntemplateformfieldID, iEzsigntemplatedocumentpagePagenumber, sEzsigntemplateformfieldLabel, iEzsigntemplateformfieldX, iEzsigntemplateformfieldY, iEzsigntemplateformfieldWidth, iEzsigntemplateformfieldHeight) { 
        
        EzsigntemplateformfieldResponse.initialize(this, pkiEzsigntemplateformfieldID, iEzsigntemplatedocumentpagePagenumber, sEzsigntemplateformfieldLabel, iEzsigntemplateformfieldX, iEzsigntemplateformfieldY, iEzsigntemplateformfieldWidth, iEzsigntemplateformfieldHeight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateformfieldID, iEzsigntemplatedocumentpagePagenumber, sEzsigntemplateformfieldLabel, iEzsigntemplateformfieldX, iEzsigntemplateformfieldY, iEzsigntemplateformfieldWidth, iEzsigntemplateformfieldHeight) { 
        obj['pkiEzsigntemplateformfieldID'] = pkiEzsigntemplateformfieldID;
        obj['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
        obj['sEzsigntemplateformfieldLabel'] = sEzsigntemplateformfieldLabel;
        obj['iEzsigntemplateformfieldX'] = iEzsigntemplateformfieldX;
        obj['iEzsigntemplateformfieldY'] = iEzsigntemplateformfieldY;
        obj['iEzsigntemplateformfieldWidth'] = iEzsigntemplateformfieldWidth;
        obj['iEzsigntemplateformfieldHeight'] = iEzsigntemplateformfieldHeight;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldResponse} The populated <code>EzsigntemplateformfieldResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldResponse();

            if (data.hasOwnProperty('pkiEzsigntemplateformfieldID')) {
                obj['pkiEzsigntemplateformfieldID'] = ApiClient.convertToType(data['pkiEzsigntemplateformfieldID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpagePagenumber')) {
                obj['iEzsigntemplatedocumentpagePagenumber'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplateformfieldLabel')) {
                obj['sEzsigntemplateformfieldLabel'] = ApiClient.convertToType(data['sEzsigntemplateformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('sEzsigntemplateformfieldValue')) {
                obj['sEzsigntemplateformfieldValue'] = ApiClient.convertToType(data['sEzsigntemplateformfieldValue'], 'String');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldX')) {
                obj['iEzsigntemplateformfieldX'] = ApiClient.convertToType(data['iEzsigntemplateformfieldX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldY')) {
                obj['iEzsigntemplateformfieldY'] = ApiClient.convertToType(data['iEzsigntemplateformfieldY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldWidth')) {
                obj['iEzsigntemplateformfieldWidth'] = ApiClient.convertToType(data['iEzsigntemplateformfieldWidth'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplateformfieldHeight')) {
                obj['iEzsigntemplateformfieldHeight'] = ApiClient.convertToType(data['iEzsigntemplateformfieldHeight'], 'Number');
            }
            if (data.hasOwnProperty('bEzsigntemplateformfieldAutocomplete')) {
                obj['bEzsigntemplateformfieldAutocomplete'] = ApiClient.convertToType(data['bEzsigntemplateformfieldAutocomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsigntemplateformfieldSelected')) {
                obj['bEzsigntemplateformfieldSelected'] = ApiClient.convertToType(data['bEzsigntemplateformfieldSelected'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateformfieldResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateformfieldResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateformfieldResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateformfieldLabel'] && !(typeof data['sEzsigntemplateformfieldLabel'] === 'string' || data['sEzsigntemplateformfieldLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateformfieldLabel` to be a primitive type in the JSON string but got " + data['sEzsigntemplateformfieldLabel']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateformfieldValue'] && !(typeof data['sEzsigntemplateformfieldValue'] === 'string' || data['sEzsigntemplateformfieldValue'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateformfieldValue` to be a primitive type in the JSON string but got " + data['sEzsigntemplateformfieldValue']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplateformfield
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateformfieldID() {
        return this.pkiEzsigntemplateformfieldID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateformfield
     * @param {Number} pkiEzsigntemplateformfieldID The unique ID of the Ezsigntemplateformfield
     */
    setPkiEzsigntemplateformfieldID(pkiEzsigntemplateformfieldID) {
        this['pkiEzsigntemplateformfieldID'] = pkiEzsigntemplateformfieldID;
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
     * Returns The Label for the Ezsigntemplateformfield
     * @return {String}
     */
    getSEzsigntemplateformfieldLabel() {
        return this.sEzsigntemplateformfieldLabel;
    }

    /**
     * Sets The Label for the Ezsigntemplateformfield
     * @param {String} sEzsigntemplateformfieldLabel The Label for the Ezsigntemplateformfield
     */
    setSEzsigntemplateformfieldLabel(sEzsigntemplateformfieldLabel) {
        this['sEzsigntemplateformfieldLabel'] = sEzsigntemplateformfieldLabel;
    }
/**
     * Returns The value for the Ezsigntemplateformfield
     * @return {String}
     */
    getSEzsigntemplateformfieldValue() {
        return this.sEzsigntemplateformfieldValue;
    }

    /**
     * Sets The value for the Ezsigntemplateformfield
     * @param {String} sEzsigntemplateformfieldValue The value for the Ezsigntemplateformfield
     */
    setSEzsigntemplateformfieldValue(sEzsigntemplateformfieldValue) {
        this['sEzsigntemplateformfieldValue'] = sEzsigntemplateformfieldValue;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldX() {
        return this.iEzsigntemplateformfieldX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsigntemplateformfieldX The X coordinate (Horizontal) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsigntemplateformfieldX(iEzsigntemplateformfieldX) {
        this['iEzsigntemplateformfieldX'] = iEzsigntemplateformfieldX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldY() {
        return this.iEzsigntemplateformfieldY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsigntemplateformfieldY The Y coordinate (Vertical) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsigntemplateformfieldY(iEzsigntemplateformfieldY) {
        this['iEzsigntemplateformfieldY'] = iEzsigntemplateformfieldY;
    }
/**
     * Returns The Width of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldWidth() {
        return this.iEzsigntemplateformfieldWidth;
    }

    /**
     * Sets The Width of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * @param {Number} iEzsigntemplateformfieldWidth The Width of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     */
    setIEzsigntemplateformfieldWidth(iEzsigntemplateformfieldWidth) {
        this['iEzsigntemplateformfieldWidth'] = iEzsigntemplateformfieldWidth;
    }
/**
     * Returns The Height of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplateformfieldHeight() {
        return this.iEzsigntemplateformfieldHeight;
    }

    /**
     * Sets The Height of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     * @param {Number} iEzsigntemplateformfieldHeight The Height of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     */
    setIEzsigntemplateformfieldHeight(iEzsigntemplateformfieldHeight) {
        this['iEzsigntemplateformfieldHeight'] = iEzsigntemplateformfieldHeight;
    }
/**
     * Returns Whether the Ezsigntemplateformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsigntemplateformfieldgroupType is **Text**
     * @return {Boolean}
     */
    getBEzsigntemplateformfieldAutocomplete() {
        return this.bEzsigntemplateformfieldAutocomplete;
    }

    /**
     * Sets Whether the Ezsigntemplateformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsigntemplateformfieldgroupType is **Text**
     * @param {Boolean} bEzsigntemplateformfieldAutocomplete Whether the Ezsigntemplateformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsigntemplateformfieldgroupType is **Text**
     */
    setBEzsigntemplateformfieldAutocomplete(bEzsigntemplateformfieldAutocomplete) {
        this['bEzsigntemplateformfieldAutocomplete'] = bEzsigntemplateformfieldAutocomplete;
    }
/**
     * Returns Whether the Ezsigntemplateformfield is selected or not by default.  This can only be set if eEzsigntemplateformfieldgroupType is **Checkbox** or **Radio**
     * @return {Boolean}
     */
    getBEzsigntemplateformfieldSelected() {
        return this.bEzsigntemplateformfieldSelected;
    }

    /**
     * Sets Whether the Ezsigntemplateformfield is selected or not by default.  This can only be set if eEzsigntemplateformfieldgroupType is **Checkbox** or **Radio**
     * @param {Boolean} bEzsigntemplateformfieldSelected Whether the Ezsigntemplateformfield is selected or not by default.  This can only be set if eEzsigntemplateformfieldgroupType is **Checkbox** or **Radio**
     */
    setBEzsigntemplateformfieldSelected(bEzsigntemplateformfieldSelected) {
        this['bEzsigntemplateformfieldSelected'] = bEzsigntemplateformfieldSelected;
    }

}

EzsigntemplateformfieldResponse.RequiredProperties = ["pkiEzsigntemplateformfieldID", "iEzsigntemplatedocumentpagePagenumber", "sEzsigntemplateformfieldLabel", "iEzsigntemplateformfieldX", "iEzsigntemplateformfieldY", "iEzsigntemplateformfieldWidth", "iEzsigntemplateformfieldHeight"];

/**
 * The unique ID of the Ezsigntemplateformfield
 * @member {Number} pkiEzsigntemplateformfieldID
 */
EzsigntemplateformfieldResponse.prototype['pkiEzsigntemplateformfieldID'] = undefined;

/**
 * The page number in the Ezsigntemplatedocument
 * @member {Number} iEzsigntemplatedocumentpagePagenumber
 */
EzsigntemplateformfieldResponse.prototype['iEzsigntemplatedocumentpagePagenumber'] = undefined;

/**
 * The Label for the Ezsigntemplateformfield
 * @member {String} sEzsigntemplateformfieldLabel
 */
EzsigntemplateformfieldResponse.prototype['sEzsigntemplateformfieldLabel'] = undefined;

/**
 * The value for the Ezsigntemplateformfield
 * @member {String} sEzsigntemplateformfieldValue
 */
EzsigntemplateformfieldResponse.prototype['sEzsigntemplateformfieldValue'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplateformfieldX
 */
EzsigntemplateformfieldResponse.prototype['iEzsigntemplateformfieldX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplateformfield on the Ezsigntemplatepage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplateformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplateformfieldY
 */
EzsigntemplateformfieldResponse.prototype['iEzsigntemplateformfieldY'] = undefined;

/**
 * The Width of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
 * @member {Number} iEzsigntemplateformfieldWidth
 */
EzsigntemplateformfieldResponse.prototype['iEzsigntemplateformfieldWidth'] = undefined;

/**
 * The Height of the Ezsigntemplateformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsigntemplateformfieldgroupType.  | eEzsigntemplateformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
 * @member {Number} iEzsigntemplateformfieldHeight
 */
EzsigntemplateformfieldResponse.prototype['iEzsigntemplateformfieldHeight'] = undefined;

/**
 * Whether the Ezsigntemplateformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsigntemplateformfieldgroupType is **Text**
 * @member {Boolean} bEzsigntemplateformfieldAutocomplete
 */
EzsigntemplateformfieldResponse.prototype['bEzsigntemplateformfieldAutocomplete'] = undefined;

/**
 * Whether the Ezsigntemplateformfield is selected or not by default.  This can only be set if eEzsigntemplateformfieldgroupType is **Checkbox** or **Radio**
 * @member {Boolean} bEzsigntemplateformfieldSelected
 */
EzsigntemplateformfieldResponse.prototype['bEzsigntemplateformfieldSelected'] = undefined;






export default EzsigntemplateformfieldResponse;

