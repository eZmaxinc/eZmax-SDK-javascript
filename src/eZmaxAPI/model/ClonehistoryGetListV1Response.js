/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ClonehistoryGetListV1ResponseAllOf from './ClonehistoryGetListV1ResponseAllOf';
import ClonehistoryGetListV1ResponseMPayload from './ClonehistoryGetListV1ResponseMPayload';
import CommonResponseGetList from './CommonResponseGetList';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayloadGetList from './CommonResponseObjDebugPayloadGetList';

/**
 * The ClonehistoryGetListV1Response model module.
 * @module eZmaxAPI/model/ClonehistoryGetListV1Response
 * @version 1.1.17
 */
class ClonehistoryGetListV1Response {
    /**
     * Constructs a new <code>ClonehistoryGetListV1Response</code>.
     * Response for GET /1/object/clonehistory/getList
     * @alias module:eZmaxAPI/model/ClonehistoryGetListV1Response
     * @implements module:eZmaxAPI/model/ClonehistoryGetListV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponseGetList
     * @param mPayload {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        ClonehistoryGetListV1ResponseAllOf.initialize(this, mPayload);CommonResponseGetList.initialize(this);
        ClonehistoryGetListV1Response.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>ClonehistoryGetListV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ClonehistoryGetListV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ClonehistoryGetListV1Response} The populated <code>ClonehistoryGetListV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClonehistoryGetListV1Response();
            ClonehistoryGetListV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponseGetList.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ClonehistoryGetListV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayloadGetList.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ClonehistoryGetListV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ClonehistoryGetListV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ClonehistoryGetListV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          ClonehistoryGetListV1ResponseMPayload.validateJSON(data['mPayload']);
        }
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayloadGetList.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
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

}

ClonehistoryGetListV1Response.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} mPayload
 */
ClonehistoryGetListV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
ClonehistoryGetListV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
ClonehistoryGetListV1Response.prototype['objDebug'] = undefined;


// Implement ClonehistoryGetListV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/ClonehistoryGetListV1ResponseMPayload} mPayload
 */
ClonehistoryGetListV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponseGetList interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
CommonResponseGetList.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponseGetList.prototype['objDebug'] = undefined;




export default ClonehistoryGetListV1Response;

