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
import TextstylestaticResponse from './TextstylestaticResponse';

/**
 * The TextstylestaticResponseCompound model module.
 * @module eZmaxAPI/model/TextstylestaticResponseCompound
 * @version 1.2.0
 */
class TextstylestaticResponseCompound {
    /**
     * Constructs a new <code>TextstylestaticResponseCompound</code>.
     * A Textstylestatic Object
     * @alias module:eZmaxAPI/model/TextstylestaticResponseCompound
     * @implements module:eZmaxAPI/model/TextstylestaticResponse
     * @param fkiFontID {Number} The unique ID of the Font
     * @param bTextstylestaticBold {Boolean} Whether the Textstylestatic is Bold or not
     * @param bTextstylestaticUnderline {Boolean} Whether the Textstylestatic is Underline or not
     * @param bTextstylestaticItalic {Boolean} Whether the Textstylestatic is Italic or not
     * @param bTextstylestaticStrikethrough {Boolean} Whether the Textstylestatic is Strikethrough or not
     * @param iTextstylestaticFontcolor {Number} The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
     * @param iTextstylestaticSize {Number} The Size for the Font of the Textstylestatic
     */
    constructor(fkiFontID, bTextstylestaticBold, bTextstylestaticUnderline, bTextstylestaticItalic, bTextstylestaticStrikethrough, iTextstylestaticFontcolor, iTextstylestaticSize) { 
        TextstylestaticResponse.initialize(this, fkiFontID, bTextstylestaticBold, bTextstylestaticUnderline, bTextstylestaticItalic, bTextstylestaticStrikethrough, iTextstylestaticFontcolor, iTextstylestaticSize);
        TextstylestaticResponseCompound.initialize(this, fkiFontID, bTextstylestaticBold, bTextstylestaticUnderline, bTextstylestaticItalic, bTextstylestaticStrikethrough, iTextstylestaticFontcolor, iTextstylestaticSize);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiFontID, bTextstylestaticBold, bTextstylestaticUnderline, bTextstylestaticItalic, bTextstylestaticStrikethrough, iTextstylestaticFontcolor, iTextstylestaticSize) { 
        obj['fkiFontID'] = fkiFontID;
        obj['bTextstylestaticBold'] = bTextstylestaticBold;
        obj['bTextstylestaticUnderline'] = bTextstylestaticUnderline;
        obj['bTextstylestaticItalic'] = bTextstylestaticItalic;
        obj['bTextstylestaticStrikethrough'] = bTextstylestaticStrikethrough;
        obj['iTextstylestaticFontcolor'] = iTextstylestaticFontcolor;
        obj['iTextstylestaticSize'] = iTextstylestaticSize;
    }

    /**
     * Constructs a <code>TextstylestaticResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/TextstylestaticResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/TextstylestaticResponseCompound} The populated <code>TextstylestaticResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextstylestaticResponseCompound();
            TextstylestaticResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiTextstylestaticID')) {
                obj['pkiTextstylestaticID'] = ApiClient.convertToType(data['pkiTextstylestaticID'], 'Number');
            }
            if (data.hasOwnProperty('fkiFontID')) {
                obj['fkiFontID'] = ApiClient.convertToType(data['fkiFontID'], 'Number');
            }
            if (data.hasOwnProperty('bTextstylestaticBold')) {
                obj['bTextstylestaticBold'] = ApiClient.convertToType(data['bTextstylestaticBold'], 'Boolean');
            }
            if (data.hasOwnProperty('bTextstylestaticUnderline')) {
                obj['bTextstylestaticUnderline'] = ApiClient.convertToType(data['bTextstylestaticUnderline'], 'Boolean');
            }
            if (data.hasOwnProperty('bTextstylestaticItalic')) {
                obj['bTextstylestaticItalic'] = ApiClient.convertToType(data['bTextstylestaticItalic'], 'Boolean');
            }
            if (data.hasOwnProperty('bTextstylestaticStrikethrough')) {
                obj['bTextstylestaticStrikethrough'] = ApiClient.convertToType(data['bTextstylestaticStrikethrough'], 'Boolean');
            }
            if (data.hasOwnProperty('iTextstylestaticFontcolor')) {
                obj['iTextstylestaticFontcolor'] = ApiClient.convertToType(data['iTextstylestaticFontcolor'], 'Number');
            }
            if (data.hasOwnProperty('iTextstylestaticSize')) {
                obj['iTextstylestaticSize'] = ApiClient.convertToType(data['iTextstylestaticSize'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TextstylestaticResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TextstylestaticResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TextstylestaticResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Textstylestatic
     * minimum: 0
     * @return {Number}
     */
    getPkiTextstylestaticID() {
        return this.pkiTextstylestaticID;
    }

    /**
     * Sets The unique ID of the Textstylestatic
     * @param {Number} pkiTextstylestaticID The unique ID of the Textstylestatic
     */
    setPkiTextstylestaticID(pkiTextstylestaticID) {
        this['pkiTextstylestaticID'] = pkiTextstylestaticID;
    }
/**
     * Returns The unique ID of the Font
     * minimum: 0
     * @return {Number}
     */
    getFkiFontID() {
        return this.fkiFontID;
    }

    /**
     * Sets The unique ID of the Font
     * @param {Number} fkiFontID The unique ID of the Font
     */
    setFkiFontID(fkiFontID) {
        this['fkiFontID'] = fkiFontID;
    }
/**
     * Returns Whether the Textstylestatic is Bold or not
     * @return {Boolean}
     */
    getBTextstylestaticBold() {
        return this.bTextstylestaticBold;
    }

    /**
     * Sets Whether the Textstylestatic is Bold or not
     * @param {Boolean} bTextstylestaticBold Whether the Textstylestatic is Bold or not
     */
    setBTextstylestaticBold(bTextstylestaticBold) {
        this['bTextstylestaticBold'] = bTextstylestaticBold;
    }
/**
     * Returns Whether the Textstylestatic is Underline or not
     * @return {Boolean}
     */
    getBTextstylestaticUnderline() {
        return this.bTextstylestaticUnderline;
    }

    /**
     * Sets Whether the Textstylestatic is Underline or not
     * @param {Boolean} bTextstylestaticUnderline Whether the Textstylestatic is Underline or not
     */
    setBTextstylestaticUnderline(bTextstylestaticUnderline) {
        this['bTextstylestaticUnderline'] = bTextstylestaticUnderline;
    }
/**
     * Returns Whether the Textstylestatic is Italic or not
     * @return {Boolean}
     */
    getBTextstylestaticItalic() {
        return this.bTextstylestaticItalic;
    }

    /**
     * Sets Whether the Textstylestatic is Italic or not
     * @param {Boolean} bTextstylestaticItalic Whether the Textstylestatic is Italic or not
     */
    setBTextstylestaticItalic(bTextstylestaticItalic) {
        this['bTextstylestaticItalic'] = bTextstylestaticItalic;
    }
/**
     * Returns Whether the Textstylestatic is Strikethrough or not
     * @return {Boolean}
     */
    getBTextstylestaticStrikethrough() {
        return this.bTextstylestaticStrikethrough;
    }

    /**
     * Sets Whether the Textstylestatic is Strikethrough or not
     * @param {Boolean} bTextstylestaticStrikethrough Whether the Textstylestatic is Strikethrough or not
     */
    setBTextstylestaticStrikethrough(bTextstylestaticStrikethrough) {
        this['bTextstylestaticStrikethrough'] = bTextstylestaticStrikethrough;
    }
/**
     * Returns The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getITextstylestaticFontcolor() {
        return this.iTextstylestaticFontcolor;
    }

    /**
     * Sets The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
     * @param {Number} iTextstylestaticFontcolor The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
     */
    setITextstylestaticFontcolor(iTextstylestaticFontcolor) {
        this['iTextstylestaticFontcolor'] = iTextstylestaticFontcolor;
    }
/**
     * Returns The Size for the Font of the Textstylestatic
     * minimum: 1
     * maximum: 255
     * @return {Number}
     */
    getITextstylestaticSize() {
        return this.iTextstylestaticSize;
    }

    /**
     * Sets The Size for the Font of the Textstylestatic
     * @param {Number} iTextstylestaticSize The Size for the Font of the Textstylestatic
     */
    setITextstylestaticSize(iTextstylestaticSize) {
        this['iTextstylestaticSize'] = iTextstylestaticSize;
    }

}

TextstylestaticResponseCompound.RequiredProperties = ["fkiFontID", "bTextstylestaticBold", "bTextstylestaticUnderline", "bTextstylestaticItalic", "bTextstylestaticStrikethrough", "iTextstylestaticFontcolor", "iTextstylestaticSize"];

/**
 * The unique ID of the Textstylestatic
 * @member {Number} pkiTextstylestaticID
 */
TextstylestaticResponseCompound.prototype['pkiTextstylestaticID'] = undefined;

/**
 * The unique ID of the Font
 * @member {Number} fkiFontID
 */
TextstylestaticResponseCompound.prototype['fkiFontID'] = undefined;

/**
 * Whether the Textstylestatic is Bold or not
 * @member {Boolean} bTextstylestaticBold
 */
TextstylestaticResponseCompound.prototype['bTextstylestaticBold'] = undefined;

/**
 * Whether the Textstylestatic is Underline or not
 * @member {Boolean} bTextstylestaticUnderline
 */
TextstylestaticResponseCompound.prototype['bTextstylestaticUnderline'] = undefined;

/**
 * Whether the Textstylestatic is Italic or not
 * @member {Boolean} bTextstylestaticItalic
 */
TextstylestaticResponseCompound.prototype['bTextstylestaticItalic'] = undefined;

/**
 * Whether the Textstylestatic is Strikethrough or not
 * @member {Boolean} bTextstylestaticStrikethrough
 */
TextstylestaticResponseCompound.prototype['bTextstylestaticStrikethrough'] = undefined;

/**
 * The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
 * @member {Number} iTextstylestaticFontcolor
 */
TextstylestaticResponseCompound.prototype['iTextstylestaticFontcolor'] = undefined;

/**
 * The Size for the Font of the Textstylestatic
 * @member {Number} iTextstylestaticSize
 */
TextstylestaticResponseCompound.prototype['iTextstylestaticSize'] = undefined;


// Implement TextstylestaticResponse interface:
/**
 * The unique ID of the Textstylestatic
 * @member {Number} pkiTextstylestaticID
 */
TextstylestaticResponse.prototype['pkiTextstylestaticID'] = undefined;
/**
 * The unique ID of the Font
 * @member {Number} fkiFontID
 */
TextstylestaticResponse.prototype['fkiFontID'] = undefined;
/**
 * Whether the Textstylestatic is Bold or not
 * @member {Boolean} bTextstylestaticBold
 */
TextstylestaticResponse.prototype['bTextstylestaticBold'] = undefined;
/**
 * Whether the Textstylestatic is Underline or not
 * @member {Boolean} bTextstylestaticUnderline
 */
TextstylestaticResponse.prototype['bTextstylestaticUnderline'] = undefined;
/**
 * Whether the Textstylestatic is Italic or not
 * @member {Boolean} bTextstylestaticItalic
 */
TextstylestaticResponse.prototype['bTextstylestaticItalic'] = undefined;
/**
 * Whether the Textstylestatic is Strikethrough or not
 * @member {Boolean} bTextstylestaticStrikethrough
 */
TextstylestaticResponse.prototype['bTextstylestaticStrikethrough'] = undefined;
/**
 * The int32 representation of the Fontcolor. For example, RGB color #39435B would be 3752795
 * @member {Number} iTextstylestaticFontcolor
 */
TextstylestaticResponse.prototype['iTextstylestaticFontcolor'] = undefined;
/**
 * The Size for the Font of the Textstylestatic
 * @member {Number} iTextstylestaticSize
 */
TextstylestaticResponse.prototype['iTextstylestaticSize'] = undefined;




export default TextstylestaticResponseCompound;

