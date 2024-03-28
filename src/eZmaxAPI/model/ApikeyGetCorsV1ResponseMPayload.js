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
import CorsResponseCompound from './CorsResponseCompound';

/**
 * The ApikeyGetCorsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ApikeyGetCorsV1ResponseMPayload
 * @version 1.2.0
 */
class ApikeyGetCorsV1ResponseMPayload {
    /**
     * Constructs a new <code>ApikeyGetCorsV1ResponseMPayload</code>.
     * Response for GET /1/object/apikey/{pkiApikeyID}/getCors
     * @alias module:eZmaxAPI/model/ApikeyGetCorsV1ResponseMPayload
     * @param a_objCors {Array.<module:eZmaxAPI/model/CorsResponseCompound>} 
     */
    constructor(a_objCors) { 
        
        ApikeyGetCorsV1ResponseMPayload.initialize(this, a_objCors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objCors) { 
        obj['a_objCors'] = a_objCors;
    }

    /**
     * Constructs a <code>ApikeyGetCorsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyGetCorsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyGetCorsV1ResponseMPayload} The populated <code>ApikeyGetCorsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyGetCorsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objCors')) {
                obj['a_objCors'] = ApiClient.convertToType(data['a_objCors'], [CorsResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyGetCorsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyGetCorsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApikeyGetCorsV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objCors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCors'])) {
                throw new Error("Expected the field `a_objCors` to be an array in the JSON data but got " + data['a_objCors']);
            }
            // validate the optional field `a_objCors` (array)
            for (const item of data['a_objCors']) {
                CorsResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CorsResponseCompound>}
     */
    getAObjCors() {
        return this.a_objCors;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CorsResponseCompound>} a_objCors
     */
    setAObjCors(a_objCors) {
        this['a_objCors'] = a_objCors;
    }

}

ApikeyGetCorsV1ResponseMPayload.RequiredProperties = ["a_objCors"];

/**
 * @member {Array.<module:eZmaxAPI/model/CorsResponseCompound>} a_objCors
 */
ApikeyGetCorsV1ResponseMPayload.prototype['a_objCors'] = undefined;






export default ApikeyGetCorsV1ResponseMPayload;

