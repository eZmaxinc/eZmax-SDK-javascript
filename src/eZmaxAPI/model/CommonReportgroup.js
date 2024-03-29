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
import CommonReport from './CommonReport';
import CommonReportcellstyle from './CommonReportcellstyle';

/**
 * The CommonReportgroup model module.
 * @module eZmaxAPI/model/CommonReportgroup
 * @version 1.1.18
 */
class CommonReportgroup {
    /**
     * Constructs a new <code>CommonReportgroup</code>.
     * A group of reports  Each Reportgroup is for a specific recipient or for a specific context.
     * @alias module:eZmaxAPI/model/CommonReportgroup
     * @param a_objReport {Array.<module:eZmaxAPI/model/CommonReport>} 
     * @param a_objReportcellstyleCustom {Array.<module:eZmaxAPI/model/CommonReportcellstyle>} 
     */
    constructor(a_objReport, a_objReportcellstyleCustom) { 
        
        CommonReportgroup.initialize(this, a_objReport, a_objReportcellstyleCustom);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objReport, a_objReportcellstyleCustom) { 
        obj['a_objReport'] = a_objReport;
        obj['a_objReportcellstyleCustom'] = a_objReportcellstyleCustom;
    }

    /**
     * Constructs a <code>CommonReportgroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonReportgroup} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonReportgroup} The populated <code>CommonReportgroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonReportgroup();

            if (data.hasOwnProperty('a_objReport')) {
                obj['a_objReport'] = ApiClient.convertToType(data['a_objReport'], [CommonReport]);
            }
            if (data.hasOwnProperty('a_objReportcellstyleCustom')) {
                obj['a_objReportcellstyleCustom'] = ApiClient.convertToType(data['a_objReportcellstyleCustom'], [CommonReportcellstyle]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonReportgroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonReportgroup</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonReportgroup.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objReport']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objReport'])) {
                throw new Error("Expected the field `a_objReport` to be an array in the JSON data but got " + data['a_objReport']);
            }
            // validate the optional field `a_objReport` (array)
            for (const item of data['a_objReport']) {
                CommonReport.validateJSON(item);
            };
        }
        if (data['a_objReportcellstyleCustom']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objReportcellstyleCustom'])) {
                throw new Error("Expected the field `a_objReportcellstyleCustom` to be an array in the JSON data but got " + data['a_objReportcellstyleCustom']);
            }
            // validate the optional field `a_objReportcellstyleCustom` (array)
            for (const item of data['a_objReportcellstyleCustom']) {
                CommonReportcellstyle.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CommonReport>}
     */
    getAObjReport() {
        return this.a_objReport;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonReport>} a_objReport
     */
    setAObjReport(a_objReport) {
        this['a_objReport'] = a_objReport;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CommonReportcellstyle>}
     */
    getAObjReportcellstyleCustom() {
        return this.a_objReportcellstyleCustom;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonReportcellstyle>} a_objReportcellstyleCustom
     */
    setAObjReportcellstyleCustom(a_objReportcellstyleCustom) {
        this['a_objReportcellstyleCustom'] = a_objReportcellstyleCustom;
    }

}

CommonReportgroup.RequiredProperties = ["a_objReport", "a_objReportcellstyleCustom"];

/**
 * @member {Array.<module:eZmaxAPI/model/CommonReport>} a_objReport
 */
CommonReportgroup.prototype['a_objReport'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CommonReportcellstyle>} a_objReportcellstyleCustom
 */
CommonReportgroup.prototype['a_objReportcellstyleCustom'] = undefined;






export default CommonReportgroup;

