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
import ApikeyResponseCompound from './ApikeyResponseCompound';

/**
 * The ApikeyCreateObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload
 * @version 1.1.17
 */
class ApikeyCreateObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>ApikeyCreateObjectV2ResponseMPayload</code>.
     * Payload for POST /2/object/apikey
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload
     * @param a_objApikey {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} 
     */
    constructor(a_objApikey) { 
        
        ApikeyCreateObjectV2ResponseMPayload.initialize(this, a_objApikey);
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
     * Constructs a <code>ApikeyCreateObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload} The populated <code>ApikeyCreateObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV2ResponseMPayload();

            if (data.hasOwnProperty('a_objApikey')) {
                obj['a_objApikey'] = ApiClient.convertToType(data['a_objApikey'], [ApikeyResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyCreateObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyCreateObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApikeyCreateObjectV2ResponseMPayload.RequiredProperties) {
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
                ApikeyResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>}
     */
    getAObjApikey() {
        return this.a_objApikey;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} a_objApikey
     */
    setAObjApikey(a_objApikey) {
        this['a_objApikey'] = a_objApikey;
    }

}

ApikeyCreateObjectV2ResponseMPayload.RequiredProperties = ["a_objApikey"];

/**
 * @member {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} a_objApikey
 */
ApikeyCreateObjectV2ResponseMPayload.prototype['a_objApikey'] = undefined;






export default ApikeyCreateObjectV2ResponseMPayload;

