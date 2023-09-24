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
 * The VariableexpenseEditObjectV1Request model module.
 * @module eZmaxAPI/model/VariableexpenseEditObjectV1Request
 * @version 1.2.0
 */
class VariableexpenseEditObjectV1Request {
    /**
     * Constructs a new <code>VariableexpenseEditObjectV1Request</code>.
     * Request for PUT /1/object/variableexpense/{pkiVariableexpenseID}
     * @alias module:eZmaxAPI/model/VariableexpenseEditObjectV1Request
     * @param objVariableexpense {module:eZmaxAPI/model/VariableexpenseRequestCompound} 
     */
    constructor(objVariableexpense) { 
        
        VariableexpenseEditObjectV1Request.initialize(this, objVariableexpense);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objVariableexpense) { 
        obj['objVariableexpense'] = objVariableexpense;
    }

    /**
     * Constructs a <code>VariableexpenseEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VariableexpenseEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VariableexpenseEditObjectV1Request} The populated <code>VariableexpenseEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableexpenseEditObjectV1Request();

            if (data.hasOwnProperty('objVariableexpense')) {
                obj['objVariableexpense'] = VariableexpenseRequestCompound.constructFromObject(data['objVariableexpense']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VariableexpenseEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableexpenseEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableexpenseEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objVariableexpense`
        if (data['objVariableexpense']) { // data not null
          VariableexpenseRequestCompound.validateJSON(data['objVariableexpense']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/VariableexpenseRequestCompound}
     */
    getObjVariableexpense() {
        return this.objVariableexpense;
    }

    /**
     * @param {module:eZmaxAPI/model/VariableexpenseRequestCompound} objVariableexpense
     */
    setObjVariableexpense(objVariableexpense) {
        this['objVariableexpense'] = objVariableexpense;
    }

}

VariableexpenseEditObjectV1Request.RequiredProperties = ["objVariableexpense"];

/**
 * @member {module:eZmaxAPI/model/VariableexpenseRequestCompound} objVariableexpense
 */
VariableexpenseEditObjectV1Request.prototype['objVariableexpense'] = undefined;






export default VariableexpenseEditObjectV1Request;

