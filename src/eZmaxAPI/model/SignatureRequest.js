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

/**
 * The SignatureRequest model module.
 * @module eZmaxAPI/model/SignatureRequest
 * @version 1.1.18
 */
class SignatureRequest {
    /**
     * Constructs a new <code>SignatureRequest</code>.
     * A Signature Object
     * @alias module:eZmaxAPI/model/SignatureRequest
     * @param tSignatureSvg {String} The svg of the Signature
     */
    constructor(tSignatureSvg) { 
        
        SignatureRequest.initialize(this, tSignatureSvg);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tSignatureSvg) { 
        obj['tSignatureSvg'] = tSignatureSvg;
    }

    /**
     * Constructs a <code>SignatureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SignatureRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SignatureRequest} The populated <code>SignatureRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequest();

            if (data.hasOwnProperty('pkiSignatureID')) {
                obj['pkiSignatureID'] = ApiClient.convertToType(data['pkiSignatureID'], 'Number');
            }
            if (data.hasOwnProperty('tSignatureSvg')) {
                obj['tSignatureSvg'] = ApiClient.convertToType(data['tSignatureSvg'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SignatureRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignatureRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignatureRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tSignatureSvg'] && !(typeof data['tSignatureSvg'] === 'string' || data['tSignatureSvg'] instanceof String)) {
            throw new Error("Expected the field `tSignatureSvg` to be a primitive type in the JSON string but got " + data['tSignatureSvg']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Signature
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiSignatureID() {
        return this.pkiSignatureID;
    }

    /**
     * Sets The unique ID of the Signature
     * @param {Number} pkiSignatureID The unique ID of the Signature
     */
    setPkiSignatureID(pkiSignatureID) {
        this['pkiSignatureID'] = pkiSignatureID;
    }
/**
     * Returns The svg of the Signature
     * @return {String}
     */
    getTSignatureSvg() {
        return this.tSignatureSvg;
    }

    /**
     * Sets The svg of the Signature
     * @param {String} tSignatureSvg The svg of the Signature
     */
    setTSignatureSvg(tSignatureSvg) {
        this['tSignatureSvg'] = tSignatureSvg;
    }

}

SignatureRequest.RequiredProperties = ["tSignatureSvg"];

/**
 * The unique ID of the Signature
 * @member {Number} pkiSignatureID
 */
SignatureRequest.prototype['pkiSignatureID'] = undefined;

/**
 * The svg of the Signature
 * @member {String} tSignatureSvg
 */
SignatureRequest.prototype['tSignatureSvg'] = undefined;






export default SignatureRequest;

