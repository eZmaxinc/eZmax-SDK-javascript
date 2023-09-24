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
import EzsigntemplatesignaturecustomdateRequest from './EzsigntemplatesignaturecustomdateRequest';

/**
 * The EzsigntemplatesignaturecustomdateRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound
 * @version 1.2.0
 */
class EzsigntemplatesignaturecustomdateRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplatesignaturecustomdateRequestCompound</code>.
     * An Ezsigntemplatesignaturecustomdate Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequest
     * @param iEzsigntemplatesignaturecustomdateX {Number} The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsigntemplatesignaturecustomdateY {Number} The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param sEzsigntemplatesignaturecustomdateFormat {String} The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     */
    constructor(iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat) { 
        EzsigntemplatesignaturecustomdateRequest.initialize(this, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat);
        EzsigntemplatesignaturecustomdateRequestCompound.initialize(this, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat) { 
        obj['iEzsigntemplatesignaturecustomdateX'] = iEzsigntemplatesignaturecustomdateX;
        obj['iEzsigntemplatesignaturecustomdateY'] = iEzsigntemplatesignaturecustomdateY;
        obj['sEzsigntemplatesignaturecustomdateFormat'] = sEzsigntemplatesignaturecustomdateFormat;
    }

    /**
     * Constructs a <code>EzsigntemplatesignaturecustomdateRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateRequestCompound} The populated <code>EzsigntemplatesignaturecustomdateRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignaturecustomdateRequestCompound();
            EzsigntemplatesignaturecustomdateRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatesignaturecustomdateID')) {
                obj['pkiEzsigntemplatesignaturecustomdateID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignaturecustomdateID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignaturecustomdateX')) {
                obj['iEzsigntemplatesignaturecustomdateX'] = ApiClient.convertToType(data['iEzsigntemplatesignaturecustomdateX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatesignaturecustomdateY')) {
                obj['iEzsigntemplatesignaturecustomdateY'] = ApiClient.convertToType(data['iEzsigntemplatesignaturecustomdateY'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignaturecustomdateFormat')) {
                obj['sEzsigntemplatesignaturecustomdateFormat'] = ApiClient.convertToType(data['sEzsigntemplatesignaturecustomdateFormat'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignaturecustomdateRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignaturecustomdateRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignaturecustomdateRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatesignaturecustomdateFormat'] && !(typeof data['sEzsigntemplatesignaturecustomdateFormat'] === 'string' || data['sEzsigntemplatesignaturecustomdateFormat'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatesignaturecustomdateFormat` to be a primitive type in the JSON string but got " + data['sEzsigntemplatesignaturecustomdateFormat']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplatesignaturecustomdate
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatesignaturecustomdateID() {
        return this.pkiEzsigntemplatesignaturecustomdateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesignaturecustomdate
     * @param {Number} pkiEzsigntemplatesignaturecustomdateID The unique ID of the Ezsigntemplatesignaturecustomdate
     */
    setPkiEzsigntemplatesignaturecustomdateID(pkiEzsigntemplatesignaturecustomdateID) {
        this['pkiEzsigntemplatesignaturecustomdateID'] = pkiEzsigntemplatesignaturecustomdateID;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignaturecustomdateX() {
        return this.iEzsigntemplatesignaturecustomdateX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsigntemplatesignaturecustomdateX The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsigntemplatesignaturecustomdateX(iEzsigntemplatesignaturecustomdateX) {
        this['iEzsigntemplatesignaturecustomdateX'] = iEzsigntemplatesignaturecustomdateX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsigntemplatesignaturecustomdateY() {
        return this.iEzsigntemplatesignaturecustomdateY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsigntemplatesignaturecustomdateY The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsigntemplatesignaturecustomdateY(iEzsigntemplatesignaturecustomdateY) {
        this['iEzsigntemplatesignaturecustomdateY'] = iEzsigntemplatesignaturecustomdateY;
    }
/**
     * Returns The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     * @return {String}
     */
    getSEzsigntemplatesignaturecustomdateFormat() {
        return this.sEzsigntemplatesignaturecustomdateFormat;
    }

    /**
     * Sets The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     * @param {String} sEzsigntemplatesignaturecustomdateFormat The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     */
    setSEzsigntemplatesignaturecustomdateFormat(sEzsigntemplatesignaturecustomdateFormat) {
        this['sEzsigntemplatesignaturecustomdateFormat'] = sEzsigntemplatesignaturecustomdateFormat;
    }

}

EzsigntemplatesignaturecustomdateRequestCompound.RequiredProperties = ["iEzsigntemplatesignaturecustomdateX", "iEzsigntemplatesignaturecustomdateY", "sEzsigntemplatesignaturecustomdateFormat"];

/**
 * The unique ID of the Ezsigntemplatesignaturecustomdate
 * @member {Number} pkiEzsigntemplatesignaturecustomdateID
 */
EzsigntemplatesignaturecustomdateRequestCompound.prototype['pkiEzsigntemplatesignaturecustomdateID'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateX
 */
EzsigntemplatesignaturecustomdateRequestCompound.prototype['iEzsigntemplatesignaturecustomdateX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateY
 */
EzsigntemplatesignaturecustomdateRequestCompound.prototype['iEzsigntemplatesignaturecustomdateY'] = undefined;

/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsigntemplatesignaturecustomdateFormat
 */
EzsigntemplatesignaturecustomdateRequestCompound.prototype['sEzsigntemplatesignaturecustomdateFormat'] = undefined;


// Implement EzsigntemplatesignaturecustomdateRequest interface:
/**
 * The unique ID of the Ezsigntemplatesignaturecustomdate
 * @member {Number} pkiEzsigntemplatesignaturecustomdateID
 */
EzsigntemplatesignaturecustomdateRequest.prototype['pkiEzsigntemplatesignaturecustomdateID'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateX
 */
EzsigntemplatesignaturecustomdateRequest.prototype['iEzsigntemplatesignaturecustomdateX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateY
 */
EzsigntemplatesignaturecustomdateRequest.prototype['iEzsigntemplatesignaturecustomdateY'] = undefined;
/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsigntemplatesignaturecustomdateFormat
 */
EzsigntemplatesignaturecustomdateRequest.prototype['sEzsigntemplatesignaturecustomdateFormat'] = undefined;




export default EzsigntemplatesignaturecustomdateRequestCompound;

