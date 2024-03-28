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
import CommonReportsubsectionpart from './CommonReportsubsectionpart';

/**
 * The CommonReportsubsection model module.
 * @module eZmaxAPI/model/CommonReportsubsection
 * @version 1.2.0
 */
class CommonReportsubsection {
    /**
     * Constructs a new <code>CommonReportsubsection</code>.
     * A Subsection in a Reportsection. It contains 3 Reportsubsectionparts (Header, Body and Footer) 
     * @alias module:eZmaxAPI/model/CommonReportsubsection
     * @param objReportsubsectionpartHeader {module:eZmaxAPI/model/CommonReportsubsectionpart} 
     * @param objReportsubsectionpartBody {module:eZmaxAPI/model/CommonReportsubsectionpart} 
     * @param objReportsubsectionpartFooter {module:eZmaxAPI/model/CommonReportsubsectionpart} 
     */
    constructor(objReportsubsectionpartHeader, objReportsubsectionpartBody, objReportsubsectionpartFooter) { 
        
        CommonReportsubsection.initialize(this, objReportsubsectionpartHeader, objReportsubsectionpartBody, objReportsubsectionpartFooter);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objReportsubsectionpartHeader, objReportsubsectionpartBody, objReportsubsectionpartFooter) { 
        obj['objReportsubsectionpartHeader'] = objReportsubsectionpartHeader;
        obj['objReportsubsectionpartBody'] = objReportsubsectionpartBody;
        obj['objReportsubsectionpartFooter'] = objReportsubsectionpartFooter;
    }

    /**
     * Constructs a <code>CommonReportsubsection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonReportsubsection} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonReportsubsection} The populated <code>CommonReportsubsection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonReportsubsection();

            if (data.hasOwnProperty('objReportsubsectionpartHeader')) {
                obj['objReportsubsectionpartHeader'] = CommonReportsubsectionpart.constructFromObject(data['objReportsubsectionpartHeader']);
            }
            if (data.hasOwnProperty('objReportsubsectionpartBody')) {
                obj['objReportsubsectionpartBody'] = CommonReportsubsectionpart.constructFromObject(data['objReportsubsectionpartBody']);
            }
            if (data.hasOwnProperty('objReportsubsectionpartFooter')) {
                obj['objReportsubsectionpartFooter'] = CommonReportsubsectionpart.constructFromObject(data['objReportsubsectionpartFooter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonReportsubsection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonReportsubsection</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonReportsubsection.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objReportsubsectionpartHeader`
        if (data['objReportsubsectionpartHeader']) { // data not null
          CommonReportsubsectionpart.validateJSON(data['objReportsubsectionpartHeader']);
        }
        // validate the optional field `objReportsubsectionpartBody`
        if (data['objReportsubsectionpartBody']) { // data not null
          CommonReportsubsectionpart.validateJSON(data['objReportsubsectionpartBody']);
        }
        // validate the optional field `objReportsubsectionpartFooter`
        if (data['objReportsubsectionpartFooter']) { // data not null
          CommonReportsubsectionpart.validateJSON(data['objReportsubsectionpartFooter']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CommonReportsubsectionpart}
     */
    getObjReportsubsectionpartHeader() {
        return this.objReportsubsectionpartHeader;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartHeader
     */
    setObjReportsubsectionpartHeader(objReportsubsectionpartHeader) {
        this['objReportsubsectionpartHeader'] = objReportsubsectionpartHeader;
    }
/**
     * @return {module:eZmaxAPI/model/CommonReportsubsectionpart}
     */
    getObjReportsubsectionpartBody() {
        return this.objReportsubsectionpartBody;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartBody
     */
    setObjReportsubsectionpartBody(objReportsubsectionpartBody) {
        this['objReportsubsectionpartBody'] = objReportsubsectionpartBody;
    }
/**
     * @return {module:eZmaxAPI/model/CommonReportsubsectionpart}
     */
    getObjReportsubsectionpartFooter() {
        return this.objReportsubsectionpartFooter;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartFooter
     */
    setObjReportsubsectionpartFooter(objReportsubsectionpartFooter) {
        this['objReportsubsectionpartFooter'] = objReportsubsectionpartFooter;
    }

}

CommonReportsubsection.RequiredProperties = ["objReportsubsectionpartHeader", "objReportsubsectionpartBody", "objReportsubsectionpartFooter"];

/**
 * @member {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartHeader
 */
CommonReportsubsection.prototype['objReportsubsectionpartHeader'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartBody
 */
CommonReportsubsection.prototype['objReportsubsectionpartBody'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonReportsubsectionpart} objReportsubsectionpartFooter
 */
CommonReportsubsection.prototype['objReportsubsectionpartFooter'] = undefined;






export default CommonReportsubsection;

