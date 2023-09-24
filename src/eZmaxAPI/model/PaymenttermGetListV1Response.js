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
import CommonResponseGetList from './CommonResponseGetList';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayloadGetList from './CommonResponseObjDebugPayloadGetList';
import PaymenttermGetListV1ResponseMPayload from './PaymenttermGetListV1ResponseMPayload';

/**
 * The PaymenttermGetListV1Response model module.
 * @module eZmaxAPI/model/PaymenttermGetListV1Response
 * @version 1.2.0
 */
class PaymenttermGetListV1Response {
    /**
     * Constructs a new <code>PaymenttermGetListV1Response</code>.
     * Response for GET /1/object/paymentterm/getList
     * @alias module:eZmaxAPI/model/PaymenttermGetListV1Response
     * @implements module:eZmaxAPI/model/CommonResponseGetList
     * @param objDebugPayload {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} 
     * @param mPayload {module:eZmaxAPI/model/PaymenttermGetListV1ResponseMPayload} 
     */
    constructor(objDebugPayload, mPayload) { 
        CommonResponseGetList.initialize(this, objDebugPayload);
        PaymenttermGetListV1Response.initialize(this, objDebugPayload, mPayload);
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
     * Constructs a <code>PaymenttermGetListV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermGetListV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermGetListV1Response} The populated <code>PaymenttermGetListV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermGetListV1Response();
            CommonResponseGetList.constructFromObject(data, obj);

            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayloadGetList.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = PaymenttermGetListV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermGetListV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermGetListV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermGetListV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayloadGetList.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          PaymenttermGetListV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList}
     */
    getObjDebugPayload() {
        return this.objDebugPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
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
     * @return {module:eZmaxAPI/model/PaymenttermGetListV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/PaymenttermGetListV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

PaymenttermGetListV1Response.RequiredProperties = ["objDebugPayload", "mPayload"];

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
PaymenttermGetListV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
PaymenttermGetListV1Response.prototype['objDebug'] = undefined;

/**
 * @member {module:eZmaxAPI/model/PaymenttermGetListV1ResponseMPayload} mPayload
 */
PaymenttermGetListV1Response.prototype['mPayload'] = undefined;


// Implement CommonResponseGetList interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
CommonResponseGetList.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponseGetList.prototype['objDebug'] = undefined;




export default PaymenttermGetListV1Response;

