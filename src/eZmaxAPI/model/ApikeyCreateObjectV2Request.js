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
import ApikeyRequestCompound from './ApikeyRequestCompound';

/**
 * The ApikeyCreateObjectV2Request model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV2Request
 * @version 1.1.17
 */
class ApikeyCreateObjectV2Request {
    /**
     * Constructs a new <code>ApikeyCreateObjectV2Request</code>.
     * Request for POST /2/object/apikey
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV2Request
     * @param a_objApikey {Array.<module:eZmaxAPI/model/ApikeyRequestCompound>} 
     */
    constructor(a_objApikey) { 
        
        ApikeyCreateObjectV2Request.initialize(this, a_objApikey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objApikey) { 
        obj['a_objApikey'] = a_objApikey;
    }

    /**
     * Constructs a <code>ApikeyCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV2Request} The populated <code>ApikeyCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV2Request();

            if (data.hasOwnProperty('a_objApikey')) {
                obj['a_objApikey'] = ApiClient.convertToType(data['a_objApikey'], [ApikeyRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyCreateObjectV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyCreateObjectV2Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApikeyCreateObjectV2Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objApikey']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objApikey'])) {
                throw new Error("Expected the field `a_objApikey` to be an array in the JSON data but got " + data['a_objApikey']);
            }
            // validate the optional field `a_objApikey` (array)
            for (const item of data['a_objApikey']) {
                ApikeyRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ApikeyRequestCompound>}
     */
    getAObjApikey() {
        return this.a_objApikey;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ApikeyRequestCompound>} a_objApikey
     */
    setAObjApikey(a_objApikey) {
        this['a_objApikey'] = a_objApikey;
    }

}

ApikeyCreateObjectV2Request.RequiredProperties = ["a_objApikey"];

/**
 * @member {Array.<module:eZmaxAPI/model/ApikeyRequestCompound>} a_objApikey
 */
ApikeyCreateObjectV2Request.prototype['a_objApikey'] = undefined;






export default ApikeyCreateObjectV2Request;

