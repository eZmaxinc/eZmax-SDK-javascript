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
import AttemptResponse from './AttemptResponse';

/**
 * The AttemptResponseCompound model module.
 * @module eZmaxAPI/model/AttemptResponseCompound
 * @version 1.1.18
 */
class AttemptResponseCompound {
    /**
     * Constructs a new <code>AttemptResponseCompound</code>.
     * An Attempt object and children to create a complete structure
     * @alias module:eZmaxAPI/model/AttemptResponseCompound
     * @implements module:eZmaxAPI/model/AttemptResponse
     * @param dtAttemptStart {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param sAttemptResult {String} The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     * @param iAttemptDuration {Number} The number of second it took to process the webhook or get an error
     */
    constructor(dtAttemptStart, sAttemptResult, iAttemptDuration) { 
        AttemptResponse.initialize(this, dtAttemptStart, sAttemptResult, iAttemptDuration);
        AttemptResponseCompound.initialize(this, dtAttemptStart, sAttemptResult, iAttemptDuration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dtAttemptStart, sAttemptResult, iAttemptDuration) { 
        obj['dtAttemptStart'] = dtAttemptStart;
        obj['sAttemptResult'] = sAttemptResult;
        obj['iAttemptDuration'] = iAttemptDuration;
    }

    /**
     * Constructs a <code>AttemptResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AttemptResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AttemptResponseCompound} The populated <code>AttemptResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttemptResponseCompound();
            AttemptResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('dtAttemptStart')) {
                obj['dtAttemptStart'] = ApiClient.convertToType(data['dtAttemptStart'], 'String');
            }
            if (data.hasOwnProperty('sAttemptResult')) {
                obj['sAttemptResult'] = ApiClient.convertToType(data['sAttemptResult'], 'String');
            }
            if (data.hasOwnProperty('iAttemptDuration')) {
                obj['iAttemptDuration'] = ApiClient.convertToType(data['iAttemptDuration'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttemptResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttemptResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AttemptResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['dtAttemptStart'] && !(typeof data['dtAttemptStart'] === 'string' || data['dtAttemptStart'] instanceof String)) {
            throw new Error("Expected the field `dtAttemptStart` to be a primitive type in the JSON string but got " + data['dtAttemptStart']);
        }
        // ensure the json data is a string
        if (data['sAttemptResult'] && !(typeof data['sAttemptResult'] === 'string' || data['sAttemptResult'] instanceof String)) {
            throw new Error("Expected the field `sAttemptResult` to be a primitive type in the JSON string but got " + data['sAttemptResult']);
        }

        return true;
    }

/**
     * Returns Represent a Date Time. The timezone is the one configured in the User's profile.
     * @return {String}
     */
    getDtAttemptStart() {
        return this.dtAttemptStart;
    }

    /**
     * Sets Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param {String} dtAttemptStart Represent a Date Time. The timezone is the one configured in the User's profile.
     */
    setDtAttemptStart(dtAttemptStart) {
        this['dtAttemptStart'] = dtAttemptStart;
    }
/**
     * Returns The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     * @return {String}
     */
    getSAttemptResult() {
        return this.sAttemptResult;
    }

    /**
     * Sets The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     * @param {String} sAttemptResult The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     */
    setSAttemptResult(sAttemptResult) {
        this['sAttemptResult'] = sAttemptResult;
    }
/**
     * Returns The number of second it took to process the webhook or get an error
     * @return {Number}
     */
    getIAttemptDuration() {
        return this.iAttemptDuration;
    }

    /**
     * Sets The number of second it took to process the webhook or get an error
     * @param {Number} iAttemptDuration The number of second it took to process the webhook or get an error
     */
    setIAttemptDuration(iAttemptDuration) {
        this['iAttemptDuration'] = iAttemptDuration;
    }

}

AttemptResponseCompound.RequiredProperties = ["dtAttemptStart", "sAttemptResult", "iAttemptDuration"];

/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtAttemptStart
 */
AttemptResponseCompound.prototype['dtAttemptStart'] = undefined;

/**
 * The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
 * @member {String} sAttemptResult
 */
AttemptResponseCompound.prototype['sAttemptResult'] = undefined;

/**
 * The number of second it took to process the webhook or get an error
 * @member {Number} iAttemptDuration
 */
AttemptResponseCompound.prototype['iAttemptDuration'] = undefined;


// Implement AttemptResponse interface:
/**
 * Represent a Date Time. The timezone is the one configured in the User's profile.
 * @member {String} dtAttemptStart
 */
AttemptResponse.prototype['dtAttemptStart'] = undefined;
/**
 * The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
 * @member {String} sAttemptResult
 */
AttemptResponse.prototype['sAttemptResult'] = undefined;
/**
 * The number of second it took to process the webhook or get an error
 * @member {Number} iAttemptDuration
 */
AttemptResponse.prototype['iAttemptDuration'] = undefined;




export default AttemptResponseCompound;

