/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonResponseError from './CommonResponseError';

/**
 * The CommonResponseErrorTooManyRequests model module.
 * @module eZmaxAPI/model/CommonResponseErrorTooManyRequests
 * @version 1.1.11
 */
class CommonResponseErrorTooManyRequests {
    /**
     * Constructs a new <code>CommonResponseErrorTooManyRequests</code>.
     * Generic Error Message
     * @alias module:eZmaxAPI/model/CommonResponseErrorTooManyRequests
     * @implements module:eZmaxAPI/model/CommonResponseError
     * @param sErrorMessage {String} More detail about the error
     * @param eErrorCode {String} The error code. See documentation for valid values
     */
    constructor(sErrorMessage, eErrorCode) { 
        CommonResponseError.initialize(this, sErrorMessage, eErrorCode);
        CommonResponseErrorTooManyRequests.initialize(this, sErrorMessage, eErrorCode);
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
     * Constructs a <code>CommonResponseErrorTooManyRequests</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseErrorTooManyRequests} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseErrorTooManyRequests} The populated <code>CommonResponseErrorTooManyRequests</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseErrorTooManyRequests();
            CommonResponseError.constructFromObject(data, obj);

            if (data.hasOwnProperty('sErrorMessage')) {
                obj['sErrorMessage'] = ApiClient.convertToType(data['sErrorMessage'], 'String');
            }
            if (data.hasOwnProperty('eErrorCode')) {
                obj['eErrorCode'] = ApiClient.convertToType(data['eErrorCode'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns More detail about the error
     * @return {String}
     */
    getSErrorMessage() {
        return this.sErrorMessage;
    }

    /**
     * Sets More detail about the error
     * @param {String} sErrorMessage More detail about the error
     */
    setSErrorMessage(sErrorMessage) {
        this['sErrorMessage'] = sErrorMessage;
    }
/**
     * Returns The error code. See documentation for valid values
     * @return {String}
     */
    getEErrorCode() {
        return this.eErrorCode;
    }

    /**
     * Sets The error code. See documentation for valid values
     * @param {String} eErrorCode The error code. See documentation for valid values
     */
    setEErrorCode(eErrorCode) {
        this['eErrorCode'] = eErrorCode;
    }

}

/**
 * More detail about the error
 * @member {String} sErrorMessage
 */
CommonResponseErrorTooManyRequests.prototype['sErrorMessage'] = undefined;

/**
 * The error code. See documentation for valid values
 * @member {String} eErrorCode
 */
CommonResponseErrorTooManyRequests.prototype['eErrorCode'] = undefined;


// Implement CommonResponseError interface:
/**
 * More detail about the error
 * @member {String} sErrorMessage
 */
CommonResponseError.prototype['sErrorMessage'] = undefined;
/**
 * The error code. See documentation for valid values
 * @member {String} eErrorCode
 */
CommonResponseError.prototype['eErrorCode'] = undefined;




export default CommonResponseErrorTooManyRequests;

