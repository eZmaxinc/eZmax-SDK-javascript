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
import EzsigntemplatesignatureRequestCompound from './EzsigntemplatesignatureRequestCompound';

/**
 * The EzsigntemplatesignatureCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureCreateObjectV1Request
 * @version 1.1.17
 */
class EzsigntemplatesignatureCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatesignatureCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatesignature
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureCreateObjectV1Request
     * @param a_objEzsigntemplatesignature {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound>} 
     */
    constructor(a_objEzsigntemplatesignature) { 
        
        EzsigntemplatesignatureCreateObjectV1Request.initialize(this, a_objEzsigntemplatesignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatesignature) { 
        obj['a_objEzsigntemplatesignature'] = a_objEzsigntemplatesignature;
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureCreateObjectV1Request} The populated <code>EzsigntemplatesignatureCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatesignature')) {
                obj['a_objEzsigntemplatesignature'] = ApiClient.convertToType(data['a_objEzsigntemplatesignature'], [EzsigntemplatesignatureRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignatureCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignatureCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignatureCreateObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntemplatesignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplatesignature'])) {
                throw new Error("Expected the field `a_objEzsigntemplatesignature` to be an array in the JSON data but got " + data['a_objEzsigntemplatesignature']);
            }
            // validate the optional field `a_objEzsigntemplatesignature` (array)
            for (const item of data['a_objEzsigntemplatesignature']) {
                EzsigntemplatesignatureRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound>}
     */
    getAObjEzsigntemplatesignature() {
        return this.a_objEzsigntemplatesignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound>} a_objEzsigntemplatesignature
     */
    setAObjEzsigntemplatesignature(a_objEzsigntemplatesignature) {
        this['a_objEzsigntemplatesignature'] = a_objEzsigntemplatesignature;
    }

}

EzsigntemplatesignatureCreateObjectV1Request.RequiredProperties = ["a_objEzsigntemplatesignature"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound>} a_objEzsigntemplatesignature
 */
EzsigntemplatesignatureCreateObjectV1Request.prototype['a_objEzsigntemplatesignature'] = undefined;






export default EzsigntemplatesignatureCreateObjectV1Request;

