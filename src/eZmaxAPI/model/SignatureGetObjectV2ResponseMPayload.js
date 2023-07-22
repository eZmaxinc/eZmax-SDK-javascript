/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SignatureResponseCompound from './SignatureResponseCompound';

/**
 * The SignatureGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/SignatureGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class SignatureGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>SignatureGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/signature/{pkiSignatureID}
     * @alias module:eZmaxAPI/model/SignatureGetObjectV2ResponseMPayload
     * @param objSignature {module:eZmaxAPI/model/SignatureResponseCompound} 
     */
    constructor(objSignature) { 
        
        SignatureGetObjectV2ResponseMPayload.initialize(this, objSignature);
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
     * Constructs a <code>SignatureGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SignatureGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SignatureGetObjectV2ResponseMPayload} The populated <code>SignatureGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objSignature')) {
                obj['objSignature'] = SignatureResponseCompound.constructFromObject(data['objSignature']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignatureGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignatureGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignatureGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objSignature`
        if (data['objSignature']) { // data not null
          SignatureResponseCompound.validateJSON(data['objSignature']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/SignatureResponseCompound}
     */
    getObjSignature() {
        return this.objSignature;
    }

    /**
     * @param {module:eZmaxAPI/model/SignatureResponseCompound} objSignature
     */
    setObjSignature(objSignature) {
        this['objSignature'] = objSignature;
    }

}

SignatureGetObjectV2ResponseMPayload.RequiredProperties = ["objSignature"];

/**
 * @member {module:eZmaxAPI/model/SignatureResponseCompound} objSignature
 */
SignatureGetObjectV2ResponseMPayload.prototype['objSignature'] = undefined;






export default SignatureGetObjectV2ResponseMPayload;

