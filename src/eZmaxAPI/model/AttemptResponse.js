/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AttemptResponse model module.
 * @module eZmaxAPI/model/AttemptResponse
 * @version 1.0.27
 */
class AttemptResponse {
    /**
     * Constructs a new <code>AttemptResponse</code>.
     * An Attempt object
     * @alias module:eZmaxAPI/model/AttemptResponse
     * @param dtAttemptStart {String} Represent a Date Time. The timezone is the one configured in the User's profile.
     * @param sAttemptResult {String} The Success or Failure message of the attempt when we tried to call the URL to deliver the webhook event.
     * @param iAttemptDuration {Number} The number of second it took to process the webhook or get an error
     */
    constructor(dtAttemptStart, sAttemptResult, iAttemptDuration) { 
        
        AttemptResponse.initialize(this, dtAttemptStart, sAttemptResult, iAttemptDuration);
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
     * Constructs a <code>AttemptResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/AttemptResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/AttemptResponse} The populated <code>AttemptResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttemptResponse();

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






export default AttemptResponse;

