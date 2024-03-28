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
import ActivesessionGetCurrentV1ResponseMPayload from './ActivesessionGetCurrentV1ResponseMPayload';
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';

/**
 * The ActivesessionGetCurrentV1Response model module.
 * @module eZmaxAPI/model/ActivesessionGetCurrentV1Response
 * @version 1.2.0
 */
class ActivesessionGetCurrentV1Response {
    /**
     * Constructs a new <code>ActivesessionGetCurrentV1Response</code>.
     * Response for GET /1/object/activesession/getCurrent
     * @alias module:eZmaxAPI/model/ActivesessionGetCurrentV1Response
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param objDebugPayload {module:eZmaxAPI/model/CommonResponseObjDebugPayload} 
     * @param mPayload {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload} 
     */
    constructor(objDebugPayload, mPayload) { 
        CommonResponse.initialize(this, objDebugPayload);
        ActivesessionGetCurrentV1Response.initialize(this, objDebugPayload, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objDebugPayload, mPayload) { 
        obj['objDebugPayload'] = objDebugPayload;
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>ActivesessionGetCurrentV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionGetCurrentV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionGetCurrentV1Response} The populated <code>ActivesessionGetCurrentV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionGetCurrentV1Response();
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ActivesessionGetCurrentV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ActivesessionGetCurrentV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ActivesessionGetCurrentV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ActivesessionGetCurrentV1Response.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayload.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          ActivesessionGetCurrentV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayload}
     */
    getObjDebugPayload() {
        return this.objDebugPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
     */
    setObjDebugPayload(objDebugPayload) {
        this['objDebugPayload'] = objDebugPayload;
    }
/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebug}
     */
    getObjDebug() {
        return this.objDebug;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
     */
    setObjDebug(objDebug) {
        this['objDebug'] = objDebug;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

ActivesessionGetCurrentV1Response.RequiredProperties = ["objDebugPayload", "mPayload"];

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
ActivesessionGetCurrentV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
ActivesessionGetCurrentV1Response.prototype['objDebug'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionGetCurrentV1ResponseMPayload} mPayload
 */
ActivesessionGetCurrentV1Response.prototype['mPayload'] = undefined;


// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default ActivesessionGetCurrentV1Response;

