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
import FranchisereferalincomeRequestCompound from './FranchisereferalincomeRequestCompound';

/**
 * The FranchisereferalincomeCreateObjectV2Request model module.
 * @module eZmaxAPI/model/FranchisereferalincomeCreateObjectV2Request
 * @version 1.1.17
 */
class FranchisereferalincomeCreateObjectV2Request {
    /**
     * Constructs a new <code>FranchisereferalincomeCreateObjectV2Request</code>.
     * Request for POST /2/object/franchisereferalincome
     * @alias module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV2Request
     * @param a_objFranchisereferalincome {Array.<module:eZmaxAPI/model/FranchisereferalincomeRequestCompound>} 
     */
    constructor(a_objFranchisereferalincome) { 
        
        FranchisereferalincomeCreateObjectV2Request.initialize(this, a_objFranchisereferalincome);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objFranchisereferalincome) { 
        obj['a_objFranchisereferalincome'] = a_objFranchisereferalincome;
    }

    /**
     * Constructs a <code>FranchisereferalincomeCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV2Request} The populated <code>FranchisereferalincomeCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeCreateObjectV2Request();

            if (data.hasOwnProperty('a_objFranchisereferalincome')) {
                obj['a_objFranchisereferalincome'] = ApiClient.convertToType(data['a_objFranchisereferalincome'], [FranchisereferalincomeRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FranchisereferalincomeCreateObjectV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FranchisereferalincomeCreateObjectV2Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FranchisereferalincomeCreateObjectV2Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objFranchisereferalincome']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objFranchisereferalincome'])) {
                throw new Error("Expected the field `a_objFranchisereferalincome` to be an array in the JSON data but got " + data['a_objFranchisereferalincome']);
            }
            // validate the optional field `a_objFranchisereferalincome` (array)
            for (const item of data['a_objFranchisereferalincome']) {
                FranchisereferalincomeRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/FranchisereferalincomeRequestCompound>}
     */
    getAObjFranchisereferalincome() {
        return this.a_objFranchisereferalincome;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/FranchisereferalincomeRequestCompound>} a_objFranchisereferalincome
     */
    setAObjFranchisereferalincome(a_objFranchisereferalincome) {
        this['a_objFranchisereferalincome'] = a_objFranchisereferalincome;
    }

}

FranchisereferalincomeCreateObjectV2Request.RequiredProperties = ["a_objFranchisereferalincome"];

/**
 * @member {Array.<module:eZmaxAPI/model/FranchisereferalincomeRequestCompound>} a_objFranchisereferalincome
 */
FranchisereferalincomeCreateObjectV2Request.prototype['a_objFranchisereferalincome'] = undefined;






export default FranchisereferalincomeCreateObjectV2Request;

