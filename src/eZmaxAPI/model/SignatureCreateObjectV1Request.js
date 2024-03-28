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
import SignatureRequestCompound from './SignatureRequestCompound';

/**
 * The SignatureCreateObjectV1Request model module.
 * @module eZmaxAPI/model/SignatureCreateObjectV1Request
 * @version 1.2.0
 */
class SignatureCreateObjectV1Request {
    /**
     * Constructs a new <code>SignatureCreateObjectV1Request</code>.
     * Request for POST /1/object/signature
     * @alias module:eZmaxAPI/model/SignatureCreateObjectV1Request
     * @param a_objSignature {Array.<module:eZmaxAPI/model/SignatureRequestCompound>} 
     */
    constructor(a_objSignature) { 
        
        SignatureCreateObjectV1Request.initialize(this, a_objSignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objSignature) { 
        obj['a_objSignature'] = a_objSignature;
    }

    /**
     * Constructs a <code>SignatureCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SignatureCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SignatureCreateObjectV1Request} The populated <code>SignatureCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureCreateObjectV1Request();

            if (data.hasOwnProperty('a_objSignature')) {
                obj['a_objSignature'] = ApiClient.convertToType(data['a_objSignature'], [SignatureRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignatureCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignatureCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignatureCreateObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objSignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objSignature'])) {
                throw new Error("Expected the field `a_objSignature` to be an array in the JSON data but got " + data['a_objSignature']);
            }
            // validate the optional field `a_objSignature` (array)
            for (const item of data['a_objSignature']) {
                SignatureRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/SignatureRequestCompound>}
     */
    getAObjSignature() {
        return this.a_objSignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/SignatureRequestCompound>} a_objSignature
     */
    setAObjSignature(a_objSignature) {
        this['a_objSignature'] = a_objSignature;
    }

}

SignatureCreateObjectV1Request.RequiredProperties = ["a_objSignature"];

/**
 * @member {Array.<module:eZmaxAPI/model/SignatureRequestCompound>} a_objSignature
 */
SignatureCreateObjectV1Request.prototype['a_objSignature'] = undefined;






export default SignatureCreateObjectV1Request;

