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
import CommonResponseError from './CommonResponseError';
import CustomEzsignformfielderrorResponse from './CustomEzsignformfielderrorResponse';
import FieldEErrorCode from './FieldEErrorCode';

/**
 * The CommonResponseErrorEzsignformValidation model module.
 * @module eZmaxAPI/model/CommonResponseErrorEzsignformValidation
 * @version 1.2.0
 */
class CommonResponseErrorEzsignformValidation {
    /**
     * Constructs a new <code>CommonResponseErrorEzsignformValidation</code>.
     * @alias module:eZmaxAPI/model/CommonResponseErrorEzsignformValidation
     * @implements module:eZmaxAPI/model/CommonResponseError
     * @param sErrorMessage {String} The message giving details about the error
     * @param eErrorCode {module:eZmaxAPI/model/FieldEErrorCode} 
     * @param a_objEzsignformfielderror {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrorResponse>} 
     */
    constructor(sErrorMessage, eErrorCode, a_objEzsignformfielderror) { 
        CommonResponseError.initialize(this, sErrorMessage, eErrorCode);
        CommonResponseErrorEzsignformValidation.initialize(this, sErrorMessage, eErrorCode, a_objEzsignformfielderror);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sErrorMessage, eErrorCode, a_objEzsignformfielderror) { 
        obj['sErrorMessage'] = sErrorMessage;
        obj['eErrorCode'] = eErrorCode;
        obj['a_objEzsignformfielderror'] = a_objEzsignformfielderror;
    }

    /**
     * Constructs a <code>CommonResponseErrorEzsignformValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseErrorEzsignformValidation} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseErrorEzsignformValidation} The populated <code>CommonResponseErrorEzsignformValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseErrorEzsignformValidation();
            CommonResponseError.constructFromObject(data, obj);

            if (data.hasOwnProperty('sErrorMessage')) {
                obj['sErrorMessage'] = ApiClient.convertToType(data['sErrorMessage'], 'String');
            }
            if (data.hasOwnProperty('eErrorCode')) {
                obj['eErrorCode'] = FieldEErrorCode.constructFromObject(data['eErrorCode']);
            }
            if (data.hasOwnProperty('a_objEzsignformfielderror')) {
                obj['a_objEzsignformfielderror'] = ApiClient.convertToType(data['a_objEzsignformfielderror'], [CustomEzsignformfielderrorResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommonResponseErrorEzsignformValidation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommonResponseErrorEzsignformValidation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommonResponseErrorEzsignformValidation.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sErrorMessage'] && !(typeof data['sErrorMessage'] === 'string' || data['sErrorMessage'] instanceof String)) {
            throw new Error("Expected the field `sErrorMessage` to be a primitive type in the JSON string but got " + data['sErrorMessage']);
        }
        if (data['a_objEzsignformfielderror']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfielderror'])) {
                throw new Error("Expected the field `a_objEzsignformfielderror` to be an array in the JSON data but got " + data['a_objEzsignformfielderror']);
            }
            // validate the optional field `a_objEzsignformfielderror` (array)
            for (const item of data['a_objEzsignformfielderror']) {
                CustomEzsignformfielderrorResponse.validateJSON(item);
            };
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
/**
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrorResponse>}
     */
    getAObjEzsignformfielderror() {
        return this.a_objEzsignformfielderror;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrorResponse>} a_objEzsignformfielderror 
     */
    setAObjEzsignformfielderror(a_objEzsignformfielderror) {
        this['a_objEzsignformfielderror'] = a_objEzsignformfielderror;
    }

}

CommonResponseErrorEzsignformValidation.RequiredProperties = ["sErrorMessage", "eErrorCode", "a_objEzsignformfielderror"];

/**
 * The message giving details about the error
 * @member {String} sErrorMessage
 */
CommonResponseErrorEzsignformValidation.prototype['sErrorMessage'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEErrorCode} eErrorCode
 */
CommonResponseErrorEzsignformValidation.prototype['eErrorCode'] = undefined;

/**
 * 
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignformfielderrorResponse>} a_objEzsignformfielderror
 */
CommonResponseErrorEzsignformValidation.prototype['a_objEzsignformfielderror'] = undefined;


// Implement CommonResponseError interface:
/**
 * The message giving details about the error
 * @member {String} sErrorMessage
 */
CommonResponseError.prototype['sErrorMessage'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEErrorCode} eErrorCode
 */
CommonResponseError.prototype['eErrorCode'] = undefined;




export default CommonResponseErrorEzsignformValidation;

