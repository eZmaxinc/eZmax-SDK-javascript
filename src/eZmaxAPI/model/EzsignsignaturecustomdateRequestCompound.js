/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignaturecustomdateRequest from './EzsignsignaturecustomdateRequest';

/**
 * The EzsignsignaturecustomdateRequestCompound model module.
 * @module eZmaxAPI/model/EzsignsignaturecustomdateRequestCompound
 * @version 1.1.15
 */
class EzsignsignaturecustomdateRequestCompound {
    /**
     * Constructs a new <code>EzsignsignaturecustomdateRequestCompound</code>.
     * An Ezsignsignaturecustomdate Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignaturecustomdateRequestCompound
     * @implements module:eZmaxAPI/model/EzsignsignaturecustomdateRequest
     * @param iEzsignsignaturecustomdateX {Number} The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignaturecustomdateY {Number} The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param sEzsignsignaturecustomdateFormat {String} The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     */
    constructor(iEzsignsignaturecustomdateX, iEzsignsignaturecustomdateY, sEzsignsignaturecustomdateFormat) { 
        EzsignsignaturecustomdateRequest.initialize(this, iEzsignsignaturecustomdateX, iEzsignsignaturecustomdateY, sEzsignsignaturecustomdateFormat);
        EzsignsignaturecustomdateRequestCompound.initialize(this, iEzsignsignaturecustomdateX, iEzsignsignaturecustomdateY, sEzsignsignaturecustomdateFormat);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iEzsignsignaturecustomdateX, iEzsignsignaturecustomdateY, sEzsignsignaturecustomdateFormat) { 
        obj['iEzsignsignaturecustomdateX'] = iEzsignsignaturecustomdateX;
        obj['iEzsignsignaturecustomdateY'] = iEzsignsignaturecustomdateY;
        obj['sEzsignsignaturecustomdateFormat'] = sEzsignsignaturecustomdateFormat;
    }

    /**
     * Constructs a <code>EzsignsignaturecustomdateRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignaturecustomdateRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignaturecustomdateRequestCompound} The populated <code>EzsignsignaturecustomdateRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignaturecustomdateRequestCompound();
            EzsignsignaturecustomdateRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignsignaturecustomdateID')) {
                obj['pkiEzsignsignaturecustomdateID'] = ApiClient.convertToType(data['pkiEzsignsignaturecustomdateID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignaturecustomdateX')) {
                obj['iEzsignsignaturecustomdateX'] = ApiClient.convertToType(data['iEzsignsignaturecustomdateX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignaturecustomdateY')) {
                obj['iEzsignsignaturecustomdateY'] = ApiClient.convertToType(data['iEzsignsignaturecustomdateY'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignsignaturecustomdateFormat')) {
                obj['sEzsignsignaturecustomdateFormat'] = ApiClient.convertToType(data['sEzsignsignaturecustomdateFormat'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignsignaturecustomdate
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignsignaturecustomdateID() {
        return this.pkiEzsignsignaturecustomdateID;
    }

    /**
     * Sets The unique ID of the Ezsignsignaturecustomdate
     * @param {Number} pkiEzsignsignaturecustomdateID The unique ID of the Ezsignsignaturecustomdate
     */
    setPkiEzsignsignaturecustomdateID(pkiEzsignsignaturecustomdateID) {
        this['pkiEzsignsignaturecustomdateID'] = pkiEzsignsignaturecustomdateID;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignaturecustomdateX() {
        return this.iEzsignsignaturecustomdateX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignsignaturecustomdateX The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsignsignaturecustomdateX(iEzsignsignaturecustomdateX) {
        this['iEzsignsignaturecustomdateX'] = iEzsignsignaturecustomdateX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignsignaturecustomdateY() {
        return this.iEzsignsignaturecustomdateY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsignsignaturecustomdateY The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsignsignaturecustomdateY(iEzsignsignaturecustomdateY) {
        this['iEzsignsignaturecustomdateY'] = iEzsignsignaturecustomdateY;
    }
/**
     * Returns The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     * @return {String}
     */
    getSEzsignsignaturecustomdateFormat() {
        return this.sEzsignsignaturecustomdateFormat;
    }

    /**
     * Sets The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     * @param {String} sEzsignsignaturecustomdateFormat The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
     */
    setSEzsignsignaturecustomdateFormat(sEzsignsignaturecustomdateFormat) {
        this['sEzsignsignaturecustomdateFormat'] = sEzsignsignaturecustomdateFormat;
    }

}

/**
 * The unique ID of the Ezsignsignaturecustomdate
 * @member {Number} pkiEzsignsignaturecustomdateID
 */
EzsignsignaturecustomdateRequestCompound.prototype['pkiEzsignsignaturecustomdateID'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignaturecustomdateX
 */
EzsignsignaturecustomdateRequestCompound.prototype['iEzsignsignaturecustomdateX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignaturecustomdateY
 */
EzsignsignaturecustomdateRequestCompound.prototype['iEzsignsignaturecustomdateY'] = undefined;

/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsignsignaturecustomdateFormat
 */
EzsignsignaturecustomdateRequestCompound.prototype['sEzsignsignaturecustomdateFormat'] = undefined;


// Implement EzsignsignaturecustomdateRequest interface:
/**
 * The unique ID of the Ezsignsignaturecustomdate
 * @member {Number} pkiEzsignsignaturecustomdateID
 */
EzsignsignaturecustomdateRequest.prototype['pkiEzsignsignaturecustomdateID'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignaturecustomdateX
 */
EzsignsignaturecustomdateRequest.prototype['iEzsignsignaturecustomdateX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the Ezsignsignaturecustomdate on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignaturecustomdate block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignaturecustomdateY
 */
EzsignsignaturecustomdateRequest.prototype['iEzsignsignaturecustomdateY'] = undefined;
/**
 * The custom date format to use  You can use the codes below and they will be replaced at signature time. Text values like month and day names will be rendered in the proper language. Other text will be left as-is.  The codes examples below are based on the following datetime: Thursday, January 6, 2022 at 08:07:09 EST  For example, the format \"Signature date: {MM}/{DD}/{YYYY} {hh}:{mm}\" would become \"Signature date: 01/06/2022 08:07\"  **Year**  | Code | Example | | - | - | | {YYYY} | 2022 | | {YY} | 22 |  **Month**  | Code | Example | | - | - | | {MonthCapitalize} | Janvier | | {Month} | janvier | | {MM} | 01 | | {M} | 1 |  **Day**  | Code | Example | | - | - | | {DayCapitalize} | Jeudi | | {Day} | jeudi | | {DD} | 06 | | {D} | 6 |  **Hour**  | Code | Example | | - | - | | {hh} | 08 |  **Minute**  | Code | Example | | - | - | | {mm} | 07 |  **Second**  | Code | Example | | - | - | | {ss} | 09 |        **Timezone**  | Code | Example | | - | - | | {Z} | EST |       **Time**  | Code | Example | | - | - | | {Time} | 08:07:09 |   | {TimeZ} | 08:07:09 EST |     **Date**  | Code | Example | | - | - | | {Date} | 2022-01-06 |   | {DateText} | 1er Janvier 2022 |  **Full**  | Code | Example | | - | - | | {DateTime} | 2022-01-06 08:07:09 |   | {DateTimeZ} | 2022-01-06 08:07:09 EST | 
 * @member {String} sEzsignsignaturecustomdateFormat
 */
EzsignsignaturecustomdateRequest.prototype['sEzsignsignaturecustomdateFormat'] = undefined;




export default EzsignsignaturecustomdateRequestCompound;

