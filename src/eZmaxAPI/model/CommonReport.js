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
import CommonReportsection from './CommonReportsection';

/**
 * The CommonReport model module.
 * @module eZmaxAPI/model/CommonReport
 * @version 1.2.0
 */
class CommonReport {
    /**
     * Constructs a new <code>CommonReport</code>.
     * A Report containing Reportsections 
     * @alias module:eZmaxAPI/model/CommonReport
     * @param a_objReportsection {Array.<module:eZmaxAPI/model/CommonReportsection>} 
     */
    constructor(a_objReportsection) { 
        
        CommonReport.initialize(this, a_objReportsection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objReportsection) { 
        obj['a_objReportsection'] = a_objReportsection;
    }

    /**
     * Constructs a <code>CommonReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonReport} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonReport} The populated <code>CommonReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonReport();

            if (data.hasOwnProperty('a_objReportsection')) {
                obj['a_objReportsection'] = ApiClient.convertToType(data['a_objReportsection'], [CommonReportsection]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonReport</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonReport.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objReportsection']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objReportsection'])) {
                throw new Error("Expected the field `a_objReportsection` to be an array in the JSON data but got " + data['a_objReportsection']);
            }
            // validate the optional field `a_objReportsection` (array)
            for (const item of data['a_objReportsection']) {
                CommonReportsection.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CommonReportsection>}
     */
    getAObjReportsection() {
        return this.a_objReportsection;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonReportsection>} a_objReportsection
     */
    setAObjReportsection(a_objReportsection) {
        this['a_objReportsection'] = a_objReportsection;
    }

}

CommonReport.RequiredProperties = ["a_objReportsection"];

/**
 * @member {Array.<module:eZmaxAPI/model/CommonReportsection>} a_objReportsection
 */
CommonReport.prototype['a_objReportsection'] = undefined;






export default CommonReport;

