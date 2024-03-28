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
 * The SignatureEditObjectV1Request model module.
 * @module eZmaxAPI/model/SignatureEditObjectV1Request
 * @version 1.2.0
 */
class SignatureEditObjectV1Request {
    /**
     * Constructs a new <code>SignatureEditObjectV1Request</code>.
     * Request for PUT /1/object/signature/{pkiSignatureID}
     * @alias module:eZmaxAPI/model/SignatureEditObjectV1Request
     * @param objSignature {module:eZmaxAPI/model/SignatureRequestCompound} 
     */
    constructor(objSignature) { 
        
        SignatureEditObjectV1Request.initialize(this, objSignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objSignature) { 
        obj['objSignature'] = objSignature;
    }

    /**
     * Constructs a <code>SignatureEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SignatureEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SignatureEditObjectV1Request} The populated <code>SignatureEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureEditObjectV1Request();

            if (data.hasOwnProperty('objSignature')) {
                obj['objSignature'] = SignatureRequestCompound.constructFromObject(data['objSignature']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignatureEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignatureEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignatureEditObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objSignature`
        if (data['objSignature']) { // data not null
          SignatureRequestCompound.validateJSON(data['objSignature']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/SignatureRequestCompound}
     */
    getObjSignature() {
        return this.objSignature;
    }

    /**
     * @param {module:eZmaxAPI/model/SignatureRequestCompound} objSignature
     */
    setObjSignature(objSignature) {
        this['objSignature'] = objSignature;
    }

}

SignatureEditObjectV1Request.RequiredProperties = ["objSignature"];

/**
 * @member {module:eZmaxAPI/model/SignatureRequestCompound} objSignature
 */
SignatureEditObjectV1Request.prototype['objSignature'] = undefined;






export default SignatureEditObjectV1Request;

