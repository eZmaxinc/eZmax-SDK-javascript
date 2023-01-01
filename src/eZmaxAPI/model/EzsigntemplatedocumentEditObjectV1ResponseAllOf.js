/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonResponseWarning from './CommonResponseWarning';

/**
 * The EzsigntemplatedocumentEditObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1ResponseAllOf
 * @version 1.1.17
 */
class EzsigntemplatedocumentEditObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigntemplatedocumentEditObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1ResponseAllOf
     */
    constructor() { 
        
        EzsigntemplatedocumentEditObjectV1ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentEditObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1ResponseAllOf} The populated <code>EzsigntemplatedocumentEditObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentEditObjectV1ResponseAllOf();

            if (data.hasOwnProperty('a_objWarning')) {
                obj['a_objWarning'] = ApiClient.convertToType(data['a_objWarning'], [CommonResponseWarning]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentEditObjectV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentEditObjectV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        if (data['a_objWarning']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objWarning'])) {
                throw new Error("Expected the field `a_objWarning` to be an array in the JSON data but got " + data['a_objWarning']);
            }
            // validate the optional field `a_objWarning` (array)
            for (const item of data['a_objWarning']) {
                CommonResponseWarning.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CommonResponseWarning>}
     */
    getAObjWarning() {
        return this.a_objWarning;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonResponseWarning>} a_objWarning
     */
    setAObjWarning(a_objWarning) {
        this['a_objWarning'] = a_objWarning;
    }

}



/**
 * @member {Array.<module:eZmaxAPI/model/CommonResponseWarning>} a_objWarning
 */
EzsigntemplatedocumentEditObjectV1ResponseAllOf.prototype['a_objWarning'] = undefined;






export default EzsigntemplatedocumentEditObjectV1ResponseAllOf;

