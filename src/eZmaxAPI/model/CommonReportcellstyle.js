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
import EnumFontunderline from './EnumFontunderline';
import EnumFontweight from './EnumFontweight';
import EnumHorizontalalignment from './EnumHorizontalalignment';
import EnumVerticalalignment from './EnumVerticalalignment';

/**
 * The CommonReportcellstyle model module.
 * @module eZmaxAPI/model/CommonReportcellstyle
 * @version 1.1.18
 */
class CommonReportcellstyle {
    /**
     * Constructs a new <code>CommonReportcellstyle</code>.
     * Styles applied to a Reportcell 
     * @alias module:eZmaxAPI/model/CommonReportcellstyle
     * @param bReportcellstyleBordertop {Boolean} Whether there is a border at the top of the Reportcell
     * @param bReportcellstyleBorderbottom {Boolean} Whether there is a border at the bottom of the Reportcell
     * @param bReportcellstyleBorderleft {Boolean} Whether there is a border at the left of the Reportcell
     * @param bReportcellstyleBorderright {Boolean} Whether there is a border at the right of the Reportcell
     * @param eReportcellHorizontalalignment {module:eZmaxAPI/model/EnumHorizontalalignment} 
     * @param eReportcellVerticalalignment {module:eZmaxAPI/model/EnumVerticalalignment} 
     * @param eReportcellFontweight {module:eZmaxAPI/model/EnumFontweight} 
     * @param eReportcellFontunderline {module:eZmaxAPI/model/EnumFontunderline} 
     */
    constructor(bReportcellstyleBordertop, bReportcellstyleBorderbottom, bReportcellstyleBorderleft, bReportcellstyleBorderright, eReportcellHorizontalalignment, eReportcellVerticalalignment, eReportcellFontweight, eReportcellFontunderline) { 
        
        CommonReportcellstyle.initialize(this, bReportcellstyleBordertop, bReportcellstyleBorderbottom, bReportcellstyleBorderleft, bReportcellstyleBorderright, eReportcellHorizontalalignment, eReportcellVerticalalignment, eReportcellFontweight, eReportcellFontunderline);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bReportcellstyleBordertop, bReportcellstyleBorderbottom, bReportcellstyleBorderleft, bReportcellstyleBorderright, eReportcellHorizontalalignment, eReportcellVerticalalignment, eReportcellFontweight, eReportcellFontunderline) { 
        obj['bReportcellstyleBordertop'] = bReportcellstyleBordertop;
        obj['bReportcellstyleBorderbottom'] = bReportcellstyleBorderbottom;
        obj['bReportcellstyleBorderleft'] = bReportcellstyleBorderleft;
        obj['bReportcellstyleBorderright'] = bReportcellstyleBorderright;
        obj['eReportcellHorizontalalignment'] = eReportcellHorizontalalignment;
        obj['eReportcellVerticalalignment'] = eReportcellVerticalalignment;
        obj['eReportcellFontweight'] = eReportcellFontweight;
        obj['eReportcellFontunderline'] = eReportcellFontunderline;
    }

    /**
     * Constructs a <code>CommonReportcellstyle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonReportcellstyle} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonReportcellstyle} The populated <code>CommonReportcellstyle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonReportcellstyle();

            if (data.hasOwnProperty('bReportcellstyleBordertop')) {
                obj['bReportcellstyleBordertop'] = ApiClient.convertToType(data['bReportcellstyleBordertop'], 'Boolean');
            }
            if (data.hasOwnProperty('bReportcellstyleBorderbottom')) {
                obj['bReportcellstyleBorderbottom'] = ApiClient.convertToType(data['bReportcellstyleBorderbottom'], 'Boolean');
            }
            if (data.hasOwnProperty('bReportcellstyleBorderleft')) {
                obj['bReportcellstyleBorderleft'] = ApiClient.convertToType(data['bReportcellstyleBorderleft'], 'Boolean');
            }
            if (data.hasOwnProperty('bReportcellstyleBorderright')) {
                obj['bReportcellstyleBorderright'] = ApiClient.convertToType(data['bReportcellstyleBorderright'], 'Boolean');
            }
            if (data.hasOwnProperty('eReportcellHorizontalalignment')) {
                obj['eReportcellHorizontalalignment'] = EnumHorizontalalignment.constructFromObject(data['eReportcellHorizontalalignment']);
            }
            if (data.hasOwnProperty('eReportcellVerticalalignment')) {
                obj['eReportcellVerticalalignment'] = EnumVerticalalignment.constructFromObject(data['eReportcellVerticalalignment']);
            }
            if (data.hasOwnProperty('eReportcellFontweight')) {
                obj['eReportcellFontweight'] = EnumFontweight.constructFromObject(data['eReportcellFontweight']);
            }
            if (data.hasOwnProperty('eReportcellFontunderline')) {
                obj['eReportcellFontunderline'] = EnumFontunderline.constructFromObject(data['eReportcellFontunderline']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonReportcellstyle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonReportcellstyle</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonReportcellstyle.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns Whether there is a border at the top of the Reportcell
     * @return {Boolean}
     */
    getBReportcellstyleBordertop() {
        return this.bReportcellstyleBordertop;
    }

    /**
     * Sets Whether there is a border at the top of the Reportcell
     * @param {Boolean} bReportcellstyleBordertop Whether there is a border at the top of the Reportcell
     */
    setBReportcellstyleBordertop(bReportcellstyleBordertop) {
        this['bReportcellstyleBordertop'] = bReportcellstyleBordertop;
    }
/**
     * Returns Whether there is a border at the bottom of the Reportcell
     * @return {Boolean}
     */
    getBReportcellstyleBorderbottom() {
        return this.bReportcellstyleBorderbottom;
    }

    /**
     * Sets Whether there is a border at the bottom of the Reportcell
     * @param {Boolean} bReportcellstyleBorderbottom Whether there is a border at the bottom of the Reportcell
     */
    setBReportcellstyleBorderbottom(bReportcellstyleBorderbottom) {
        this['bReportcellstyleBorderbottom'] = bReportcellstyleBorderbottom;
    }
/**
     * Returns Whether there is a border at the left of the Reportcell
     * @return {Boolean}
     */
    getBReportcellstyleBorderleft() {
        return this.bReportcellstyleBorderleft;
    }

    /**
     * Sets Whether there is a border at the left of the Reportcell
     * @param {Boolean} bReportcellstyleBorderleft Whether there is a border at the left of the Reportcell
     */
    setBReportcellstyleBorderleft(bReportcellstyleBorderleft) {
        this['bReportcellstyleBorderleft'] = bReportcellstyleBorderleft;
    }
/**
     * Returns Whether there is a border at the right of the Reportcell
     * @return {Boolean}
     */
    getBReportcellstyleBorderright() {
        return this.bReportcellstyleBorderright;
    }

    /**
     * Sets Whether there is a border at the right of the Reportcell
     * @param {Boolean} bReportcellstyleBorderright Whether there is a border at the right of the Reportcell
     */
    setBReportcellstyleBorderright(bReportcellstyleBorderright) {
        this['bReportcellstyleBorderright'] = bReportcellstyleBorderright;
    }
/**
     * @return {module:eZmaxAPI/model/EnumHorizontalalignment}
     */
    getEReportcellHorizontalalignment() {
        return this.eReportcellHorizontalalignment;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumHorizontalalignment} eReportcellHorizontalalignment
     */
    setEReportcellHorizontalalignment(eReportcellHorizontalalignment) {
        this['eReportcellHorizontalalignment'] = eReportcellHorizontalalignment;
    }
/**
     * @return {module:eZmaxAPI/model/EnumVerticalalignment}
     */
    getEReportcellVerticalalignment() {
        return this.eReportcellVerticalalignment;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumVerticalalignment} eReportcellVerticalalignment
     */
    setEReportcellVerticalalignment(eReportcellVerticalalignment) {
        this['eReportcellVerticalalignment'] = eReportcellVerticalalignment;
    }
/**
     * @return {module:eZmaxAPI/model/EnumFontweight}
     */
    getEReportcellFontweight() {
        return this.eReportcellFontweight;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumFontweight} eReportcellFontweight
     */
    setEReportcellFontweight(eReportcellFontweight) {
        this['eReportcellFontweight'] = eReportcellFontweight;
    }
/**
     * @return {module:eZmaxAPI/model/EnumFontunderline}
     */
    getEReportcellFontunderline() {
        return this.eReportcellFontunderline;
    }

    /**
     * @param {module:eZmaxAPI/model/EnumFontunderline} eReportcellFontunderline
     */
    setEReportcellFontunderline(eReportcellFontunderline) {
        this['eReportcellFontunderline'] = eReportcellFontunderline;
    }

}

CommonReportcellstyle.RequiredProperties = ["bReportcellstyleBordertop", "bReportcellstyleBorderbottom", "bReportcellstyleBorderleft", "bReportcellstyleBorderright", "eReportcellHorizontalalignment", "eReportcellVerticalalignment", "eReportcellFontweight", "eReportcellFontunderline"];

/**
 * Whether there is a border at the top of the Reportcell
 * @member {Boolean} bReportcellstyleBordertop
 */
CommonReportcellstyle.prototype['bReportcellstyleBordertop'] = undefined;

/**
 * Whether there is a border at the bottom of the Reportcell
 * @member {Boolean} bReportcellstyleBorderbottom
 */
CommonReportcellstyle.prototype['bReportcellstyleBorderbottom'] = undefined;

/**
 * Whether there is a border at the left of the Reportcell
 * @member {Boolean} bReportcellstyleBorderleft
 */
CommonReportcellstyle.prototype['bReportcellstyleBorderleft'] = undefined;

/**
 * Whether there is a border at the right of the Reportcell
 * @member {Boolean} bReportcellstyleBorderright
 */
CommonReportcellstyle.prototype['bReportcellstyleBorderright'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumHorizontalalignment} eReportcellHorizontalalignment
 */
CommonReportcellstyle.prototype['eReportcellHorizontalalignment'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumVerticalalignment} eReportcellVerticalalignment
 */
CommonReportcellstyle.prototype['eReportcellVerticalalignment'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumFontweight} eReportcellFontweight
 */
CommonReportcellstyle.prototype['eReportcellFontweight'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EnumFontunderline} eReportcellFontunderline
 */
CommonReportcellstyle.prototype['eReportcellFontunderline'] = undefined;






export default CommonReportcellstyle;

