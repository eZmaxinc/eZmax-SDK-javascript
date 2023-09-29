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
 * The EzsignformfieldResponse model module.
 * @module eZmaxAPI/model/EzsignformfieldResponse
 * @version 1.2.0
 */
class EzsignformfieldResponse {
    /**
     * Constructs a new <code>EzsignformfieldResponse</code>.
     * An Ezsignformfield Object
     * @alias module:eZmaxAPI/model/EzsignformfieldResponse
     * @param pkiEzsignformfieldID {Number} The unique ID of the Ezsignformfield
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param sEzsignformfieldLabel {String} The Label for the Ezsignformfield
     * @param iEzsignformfieldX {Number} The X coordinate (Horizontal) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignformfieldY {Number} The Y coordinate (Vertical) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignformfieldWidth {Number} The Width of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * @param iEzsignformfieldHeight {Number} The Height of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     */
    constructor(pkiEzsignformfieldID, iEzsignpagePagenumber, sEzsignformfieldLabel, iEzsignformfieldX, iEzsignformfieldY, iEzsignformfieldWidth, iEzsignformfieldHeight) { 
        
        EzsignformfieldResponse.initialize(this, pkiEzsignformfieldID, iEzsignpagePagenumber, sEzsignformfieldLabel, iEzsignformfieldX, iEzsignformfieldY, iEzsignformfieldWidth, iEzsignformfieldHeight);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignformfieldID, iEzsignpagePagenumber, sEzsignformfieldLabel, iEzsignformfieldX, iEzsignformfieldY, iEzsignformfieldWidth, iEzsignformfieldHeight) { 
        obj['pkiEzsignformfieldID'] = pkiEzsignformfieldID;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
        obj['iEzsignformfieldX'] = iEzsignformfieldX;
        obj['iEzsignformfieldY'] = iEzsignformfieldY;
        obj['iEzsignformfieldWidth'] = iEzsignformfieldWidth;
        obj['iEzsignformfieldHeight'] = iEzsignformfieldHeight;
    }

    /**
     * Constructs a <code>EzsignformfieldResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignformfieldResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignformfieldResponse} The populated <code>EzsignformfieldResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignformfieldResponse();

            if (data.hasOwnProperty('pkiEzsignformfieldID')) {
                obj['pkiEzsignformfieldID'] = ApiClient.convertToType(data['pkiEzsignformfieldID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpagePagenumber')) {
                obj['iEzsignpagePagenumber'] = ApiClient.convertToType(data['iEzsignpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignformfieldLabel')) {
                obj['sEzsignformfieldLabel'] = ApiClient.convertToType(data['sEzsignformfieldLabel'], 'String');
            }
            if (data.hasOwnProperty('sEzsignformfieldValue')) {
                obj['sEzsignformfieldValue'] = ApiClient.convertToType(data['sEzsignformfieldValue'], 'String');
            }
            if (data.hasOwnProperty('iEzsignformfieldX')) {
                obj['iEzsignformfieldX'] = ApiClient.convertToType(data['iEzsignformfieldX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignformfieldY')) {
                obj['iEzsignformfieldY'] = ApiClient.convertToType(data['iEzsignformfieldY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignformfieldWidth')) {
                obj['iEzsignformfieldWidth'] = ApiClient.convertToType(data['iEzsignformfieldWidth'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignformfieldHeight')) {
                obj['iEzsignformfieldHeight'] = ApiClient.convertToType(data['iEzsignformfieldHeight'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignformfieldAutocomplete')) {
                obj['bEzsignformfieldAutocomplete'] = ApiClient.convertToType(data['bEzsignformfieldAutocomplete'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignformfieldSelected')) {
                obj['bEzsignformfieldSelected'] = ApiClient.convertToType(data['bEzsignformfieldSelected'], 'Boolean');
            }
            if (data.hasOwnProperty('sEzsignformfieldEnteredvalue')) {
                obj['sEzsignformfieldEnteredvalue'] = ApiClient.convertToType(data['sEzsignformfieldEnteredvalue'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignformfieldResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignformfieldResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignformfieldResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldLabel'] && !(typeof data['sEzsignformfieldLabel'] === 'string' || data['sEzsignformfieldLabel'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldLabel` to be a primitive type in the JSON string but got " + data['sEzsignformfieldLabel']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldValue'] && !(typeof data['sEzsignformfieldValue'] === 'string' || data['sEzsignformfieldValue'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldValue` to be a primitive type in the JSON string but got " + data['sEzsignformfieldValue']);
        }
        // ensure the json data is a string
        if (data['sEzsignformfieldEnteredvalue'] && !(typeof data['sEzsignformfieldEnteredvalue'] === 'string' || data['sEzsignformfieldEnteredvalue'] instanceof String)) {
            throw new Error("Expected the field `sEzsignformfieldEnteredvalue` to be a primitive type in the JSON string but got " + data['sEzsignformfieldEnteredvalue']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignformfield
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignformfieldID() {
        return this.pkiEzsignformfieldID;
    }

    /**
     * Sets The unique ID of the Ezsignformfield
     * @param {Number} pkiEzsignformfieldID The unique ID of the Ezsignformfield
     */
    setPkiEzsignformfieldID(pkiEzsignformfieldID) {
        this['pkiEzsignformfieldID'] = pkiEzsignformfieldID;
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
     * Returns The Label for the Ezsignformfield
     * @return {String}
     */
    getSEzsignformfieldLabel() {
        return this.sEzsignformfieldLabel;
    }

    /**
     * Sets The Label for the Ezsignformfield
     * @param {String} sEzsignformfieldLabel The Label for the Ezsignformfield
     */
    setSEzsignformfieldLabel(sEzsignformfieldLabel) {
        this['sEzsignformfieldLabel'] = sEzsignformfieldLabel;
    }
/**
     * Returns The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     * @return {String}
     */
    getSEzsignformfieldValue() {
        return this.sEzsignformfieldValue;
    }

    /**
     * Sets The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     * @param {String} sEzsignformfieldValue The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
     */
    setSEzsignformfieldValue(sEzsignformfieldValue) {
        this['sEzsignformfieldValue'] = sEzsignformfieldValue;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldX() {
        return this.iEzsignformfieldX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignformfieldX The X coordinate (Horizontal) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsignformfieldX(iEzsignformfieldX) {
        this['iEzsignformfieldX'] = iEzsignformfieldX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldY() {
        return this.iEzsignformfieldY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsignformfieldY The Y coordinate (Vertical) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsignformfieldY(iEzsignformfieldY) {
        this['iEzsignformfieldY'] = iEzsignformfieldY;
    }
/**
     * Returns The Width of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldWidth() {
        return this.iEzsignformfieldWidth;
    }

    /**
     * Sets The Width of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     * @param {Number} iEzsignformfieldWidth The Width of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
     */
    setIEzsignformfieldWidth(iEzsignformfieldWidth) {
        this['iEzsignformfieldWidth'] = iEzsignformfieldWidth;
    }
/**
     * Returns The Height of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     * minimum: 0
     * @return {Number}
     */
    getIEzsignformfieldHeight() {
        return this.iEzsignformfieldHeight;
    }

    /**
     * Sets The Height of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     * @param {Number} iEzsignformfieldHeight The Height of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
     */
    setIEzsignformfieldHeight(iEzsignformfieldHeight) {
        this['iEzsignformfieldHeight'] = iEzsignformfieldHeight;
    }
/**
     * Returns Whether the Ezsignformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsignformfieldgroupType is **Text**
     * @return {Boolean}
     */
    getBEzsignformfieldAutocomplete() {
        return this.bEzsignformfieldAutocomplete;
    }

    /**
     * Sets Whether the Ezsignformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsignformfieldgroupType is **Text**
     * @param {Boolean} bEzsignformfieldAutocomplete Whether the Ezsignformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsignformfieldgroupType is **Text**
     */
    setBEzsignformfieldAutocomplete(bEzsignformfieldAutocomplete) {
        this['bEzsignformfieldAutocomplete'] = bEzsignformfieldAutocomplete;
    }
/**
     * Returns Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     * @return {Boolean}
     */
    getBEzsignformfieldSelected() {
        return this.bEzsignformfieldSelected;
    }

    /**
     * Sets Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     * @param {Boolean} bEzsignformfieldSelected Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
     */
    setBEzsignformfieldSelected(bEzsignformfieldSelected) {
        this['bEzsignformfieldSelected'] = bEzsignformfieldSelected;
    }
/**
     * Returns This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     * @return {String}
     */
    getSEzsignformfieldEnteredvalue() {
        return this.sEzsignformfieldEnteredvalue;
    }

    /**
     * Sets This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     * @param {String} sEzsignformfieldEnteredvalue This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
     */
    setSEzsignformfieldEnteredvalue(sEzsignformfieldEnteredvalue) {
        this['sEzsignformfieldEnteredvalue'] = sEzsignformfieldEnteredvalue;
    }

}

EzsignformfieldResponse.RequiredProperties = ["pkiEzsignformfieldID", "iEzsignpagePagenumber", "sEzsignformfieldLabel", "iEzsignformfieldX", "iEzsignformfieldY", "iEzsignformfieldWidth", "iEzsignformfieldHeight"];

/**
 * The unique ID of the Ezsignformfield
 * @member {Number} pkiEzsignformfieldID
 */
EzsignformfieldResponse.prototype['pkiEzsignformfieldID'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignformfieldResponse.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The Label for the Ezsignformfield
 * @member {String} sEzsignformfieldLabel
 */
EzsignformfieldResponse.prototype['sEzsignformfieldLabel'] = undefined;

/**
 * The value for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is Checkbox or Radio
 * @member {String} sEzsignformfieldValue
 */
EzsignformfieldResponse.prototype['sEzsignformfieldValue'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignformfieldX
 */
EzsignformfieldResponse.prototype['iEzsignformfieldX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsignformfield on the Ezsignpage.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignformfield 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignformfieldY
 */
EzsignformfieldResponse.prototype['iEzsignformfieldY'] = undefined;

/**
 * The Width of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22-65535     | | Radio                     | 22           | | Text                      | 22-65535     | | Textarea                  | 22-65535     |
 * @member {Number} iEzsignformfieldWidth
 */
EzsignformfieldResponse.prototype['iEzsignformfieldWidth'] = undefined;

/**
 * The Height of the Ezsignformfield in pixels calculated at 100 DPI  The allowed values are varying based on the eEzsignformfieldgroupType.  | eEzsignformfieldgroupType | Valid values | | ------------------------- | ------------ | | Checkbox                  | 22           | | Dropdown                  | 22           | | Radio                     | 22           | | Text                      | 22           | | Textarea                  | 22-65535     | 
 * @member {Number} iEzsignformfieldHeight
 */
EzsignformfieldResponse.prototype['iEzsignformfieldHeight'] = undefined;

/**
 * Whether the Ezsignformfield allows the use of the autocomplete of the browser.  This can only be set if eEzsignformfieldgroupType is **Text**
 * @member {Boolean} bEzsignformfieldAutocomplete
 */
EzsignformfieldResponse.prototype['bEzsignformfieldAutocomplete'] = undefined;

/**
 * Whether the Ezsignformfield is selected or not by default.  This can only be set if eEzsignformfieldgroupType is **Checkbox** or **Radio**
 * @member {Boolean} bEzsignformfieldSelected
 */
EzsignformfieldResponse.prototype['bEzsignformfieldSelected'] = undefined;

/**
 * This is the value enterred for the Ezsignformfield  This can only be set if eEzsignformfieldgroupType is **Dropdown**, **Text** or **Textarea**
 * @member {String} sEzsignformfieldEnteredvalue
 */
EzsignformfieldResponse.prototype['sEzsignformfieldEnteredvalue'] = undefined;






export default EzsignformfieldResponse;

