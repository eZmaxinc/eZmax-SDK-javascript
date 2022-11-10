/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatesignaturecustomdateResponse from './EzsigntemplatesignaturecustomdateResponse';

/**
 * The EzsigntemplatesignaturecustomdateResponseCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound
 * @version 1.1.16
 */
class EzsigntemplatesignaturecustomdateResponseCompound {
    /**
     * Constructs a new <code>EzsigntemplatesignaturecustomdateResponseCompound</code>.
     * An Ezsigntemplatesignaturecustomdate Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponse
     * @param pkiEzsigntemplatesignaturecustomdateID {Number} The unique ID of the Ezsigntemplatesignaturecustomdate
     * @param iEzsigntemplatesignaturecustomdateX {Number} The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsigntemplatesignaturecustomdateY {Number} The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param sEzsigntemplatesignaturecustomdateFormat {String} The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     */
    constructor(pkiEzsigntemplatesignaturecustomdateID, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat) { 
        EzsigntemplatesignaturecustomdateResponse.initialize(this, pkiEzsigntemplatesignaturecustomdateID, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat);
        EzsigntemplatesignaturecustomdateResponseCompound.initialize(this, pkiEzsigntemplatesignaturecustomdateID, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatesignaturecustomdateID, iEzsigntemplatesignaturecustomdateX, iEzsigntemplatesignaturecustomdateY, sEzsigntemplatesignaturecustomdateFormat) { 
        obj['pkiEzsigntemplatesignaturecustomdateID'] = pkiEzsigntemplatesignaturecustomdateID;
        obj['iEzsigntemplatesignaturecustomdateX'] = iEzsigntemplatesignaturecustomdateX;
        obj['iEzsigntemplatesignaturecustomdateY'] = iEzsigntemplatesignaturecustomdateY;
        obj['sEzsigntemplatesignaturecustomdateFormat'] = sEzsigntemplatesignaturecustomdateFormat;
    }

    /**
     * Constructs a <code>EzsigntemplatesignaturecustomdateResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignaturecustomdateResponseCompound} The populated <code>EzsigntemplatesignaturecustomdateResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignaturecustomdateResponseCompound();
            EzsigntemplatesignaturecustomdateResponse.constructFromObject(data, obj);

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

/**
 * The unique ID of the Ezsigntemplatesignaturecustomdate
 * @member {Number} pkiEzsigntemplatesignaturecustomdateID
 */
EzsigntemplatesignaturecustomdateResponseCompound.prototype['pkiEzsigntemplatesignaturecustomdateID'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateX
 */
EzsigntemplatesignaturecustomdateResponseCompound.prototype['iEzsigntemplatesignaturecustomdateX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateY
 */
EzsigntemplatesignaturecustomdateResponseCompound.prototype['iEzsigntemplatesignaturecustomdateY'] = undefined;

/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsigntemplatesignaturecustomdateFormat
 */
EzsigntemplatesignaturecustomdateResponseCompound.prototype['sEzsigntemplatesignaturecustomdateFormat'] = undefined;


// Implement EzsigntemplatesignaturecustomdateResponse interface:
/**
 * The unique ID of the Ezsigntemplatesignaturecustomdate
 * @member {Number} pkiEzsigntemplatesignaturecustomdateID
 */
EzsigntemplatesignaturecustomdateResponse.prototype['pkiEzsigntemplatesignaturecustomdateID'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateX
 */
EzsigntemplatesignaturecustomdateResponse.prototype['iEzsigntemplatesignaturecustomdateX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the Ezsigntemplatesignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsigntemplatesignaturecustomdate 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsigntemplatesignaturecustomdateY
 */
EzsigntemplatesignaturecustomdateResponse.prototype['iEzsigntemplatesignaturecustomdateY'] = undefined;
/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsigntemplatesignaturecustomdateFormat
 */
EzsigntemplatesignaturecustomdateResponse.prototype['sEzsigntemplatesignaturecustomdateFormat'] = undefined;




export default EzsigntemplatesignaturecustomdateResponseCompound;

