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
import FieldEErrorCode from './FieldEErrorCode';

/**
 * The CommonResponseError model module.
 * @module eZmaxAPI/model/CommonResponseError
 * @version 1.2.0
 */
class CommonResponseError {
    /**
     * Constructs a new <code>CommonResponseError</code>.
     * Generic Error Message
     * @alias module:eZmaxAPI/model/CommonResponseError
     * @param sErrorMessage {String} The message giving details about the error
     * @param eErrorCode {module:eZmaxAPI/model/FieldEErrorCode} 
     */
    constructor(sErrorMessage, eErrorCode) { 
        
        CommonResponseError.initialize(this, sErrorMessage, eErrorCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sErrorMessage, eErrorCode) { 
        obj['sErrorMessage'] = sErrorMessage;
        obj['eErrorCode'] = eErrorCode;
    }

    /**
     * Constructs a <code>CommonResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseError} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseError} The populated <code>CommonResponseError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseError();

            if (data.hasOwnProperty('sErrorMessage')) {
                obj['sErrorMessage'] = ApiClient.convertToType(data['sErrorMessage'], 'String');
            }
            if (data.hasOwnProperty('eErrorCode')) {
                obj['eErrorCode'] = FieldEErrorCode.constructFromObject(data['eErrorCode']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonResponseError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonResponseError</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonResponseError.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sErrorMessage'] && !(typeof data['sErrorMessage'] === 'string' || data['sErrorMessage'] instanceof String)) {
            throw new Error("Expected the field `sErrorMessage` to be a primitive type in the JSON string but got " + data['sErrorMessage']);
        }

        return true;
    }

/**
     * Returns The message giving details about the error
     * @return {String}
     */
    getSErrorMessage() {
        return this.sErrorMessage;
    }

    /**
     * Sets The message giving details about the error
     * @param {String} sErrorMessage The message giving details about the error
     */
    setSErrorMessage(sErrorMessage) {
        this['sErrorMessage'] = sErrorMessage;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEErrorCode}
     */
    getEErrorCode() {
        return this.eErrorCode;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEErrorCode} eErrorCode
     */
    setEErrorCode(eErrorCode) {
        this['eErrorCode'] = eErrorCode;
    }

}

CommonResponseError.RequiredProperties = ["sErrorMessage", "eErrorCode"];

/**
 * The message giving details about the error
 * @member {String} sErrorMessage
 */
CommonResponseError.prototype['sErrorMessage'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEErrorCode} eErrorCode
 */
CommonResponseError.prototype['eErrorCode'] = undefined;






export default CommonResponseError;

