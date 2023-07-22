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
import SignatureRequest from './SignatureRequest';

/**
 * The SignatureRequestCompound model module.
 * @module eZmaxAPI/model/SignatureRequestCompound
 * @version 1.1.18
 */
class SignatureRequestCompound {
    /**
     * Constructs a new <code>SignatureRequestCompound</code>.
     * A Signature Object and children
     * @alias module:eZmaxAPI/model/SignatureRequestCompound
     * @implements module:eZmaxAPI/model/SignatureRequest
     * @param tSignatureSvg {String} The svg of the Signature
     */
    constructor(tSignatureSvg) { 
        SignatureRequest.initialize(this, tSignatureSvg);
        SignatureRequestCompound.initialize(this, tSignatureSvg);
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
     * Constructs a <code>SignatureRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SignatureRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SignatureRequestCompound} The populated <code>SignatureRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestCompound();
            SignatureRequest.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>SignatureRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SignatureRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SignatureRequestCompound.RequiredProperties) {
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

SignatureRequestCompound.RequiredProperties = ["tSignatureSvg"];

/**
 * The unique ID of the Signature
 * @member {Number} pkiSignatureID
 */
SignatureRequestCompound.prototype['pkiSignatureID'] = undefined;

/**
 * The svg of the Signature
 * @member {String} tSignatureSvg
 */
SignatureRequestCompound.prototype['tSignatureSvg'] = undefined;


// Implement SignatureRequest interface:
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




export default SignatureRequestCompound;

