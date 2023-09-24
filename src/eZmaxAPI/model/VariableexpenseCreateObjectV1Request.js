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
import VariableexpenseRequestCompound from './VariableexpenseRequestCompound';

/**
 * The VariableexpenseCreateObjectV1Request model module.
 * @module eZmaxAPI/model/VariableexpenseCreateObjectV1Request
 * @version 1.2.0
 */
class VariableexpenseCreateObjectV1Request {
    /**
     * Constructs a new <code>VariableexpenseCreateObjectV1Request</code>.
     * Request for POST /1/object/variableexpense
     * @alias module:eZmaxAPI/model/VariableexpenseCreateObjectV1Request
     * @param a_objVariableexpense {Array.<module:eZmaxAPI/model/VariableexpenseRequestCompound>} 
     */
    constructor(a_objVariableexpense) { 
        
        VariableexpenseCreateObjectV1Request.initialize(this, a_objVariableexpense);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objVariableexpense) { 
        obj['a_objVariableexpense'] = a_objVariableexpense;
    }

    /**
     * Constructs a <code>VariableexpenseCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VariableexpenseCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VariableexpenseCreateObjectV1Request} The populated <code>VariableexpenseCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableexpenseCreateObjectV1Request();

            if (data.hasOwnProperty('a_objVariableexpense')) {
                obj['a_objVariableexpense'] = ApiClient.convertToType(data['a_objVariableexpense'], [VariableexpenseRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VariableexpenseCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableexpenseCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableexpenseCreateObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objVariableexpense']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objVariableexpense'])) {
                throw new Error("Expected the field `a_objVariableexpense` to be an array in the JSON data but got " + data['a_objVariableexpense']);
            }
            // validate the optional field `a_objVariableexpense` (array)
            for (const item of data['a_objVariableexpense']) {
                VariableexpenseRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/VariableexpenseRequestCompound>}
     */
    getAObjVariableexpense() {
        return this.a_objVariableexpense;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/VariableexpenseRequestCompound>} a_objVariableexpense
     */
    setAObjVariableexpense(a_objVariableexpense) {
        this['a_objVariableexpense'] = a_objVariableexpense;
    }

}

VariableexpenseCreateObjectV1Request.RequiredProperties = ["a_objVariableexpense"];

/**
 * @member {Array.<module:eZmaxAPI/model/VariableexpenseRequestCompound>} a_objVariableexpense
 */
VariableexpenseCreateObjectV1Request.prototype['a_objVariableexpense'] = undefined;






export default VariableexpenseCreateObjectV1Request;

