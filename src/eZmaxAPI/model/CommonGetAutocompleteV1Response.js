/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonGetAutocompleteV1ResponseAllOf from './CommonGetAutocompleteV1ResponseAllOf';
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';
import CustomAutocompleteElementResponse from './CustomAutocompleteElementResponse';

/**
 * The CommonGetAutocompleteV1Response model module.
 * @module eZmaxAPI/model/CommonGetAutocompleteV1Response
 * @version 1.1.15
 */
class CommonGetAutocompleteV1Response {
    /**
     * Constructs a new <code>CommonGetAutocompleteV1Response</code>.
     * Response for GET /1/object/xxx/getAutocomplete
     * @alias module:eZmaxAPI/model/CommonGetAutocompleteV1Response
     * @implements module:eZmaxAPI/model/CommonGetAutocompleteV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {Array.<module:eZmaxAPI/model/CustomAutocompleteElementResponse>} Generic Autocomplete Response
     */
    constructor(mPayload) { 
        CommonGetAutocompleteV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        CommonGetAutocompleteV1Response.initialize(this, mPayload);
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
     * Constructs a <code>CommonGetAutocompleteV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonGetAutocompleteV1Response} The populated <code>CommonGetAutocompleteV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonGetAutocompleteV1Response();
            CommonGetAutocompleteV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApiClient.convertToType(data['mPayload'], [CustomAutocompleteElementResponse]);
            }
            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
        }
        return obj;
    }

/**
     * Returns Generic Autocomplete Response
     * @return {Array.<module:eZmaxAPI/model/CustomAutocompleteElementResponse>}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * Sets Generic Autocomplete Response
     * @param {Array.<module:eZmaxAPI/model/CustomAutocompleteElementResponse>} mPayload Generic Autocomplete Response
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
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

}

/**
 * Generic Autocomplete Response
 * @member {Array.<module:eZmaxAPI/model/CustomAutocompleteElementResponse>} mPayload
 */
CommonGetAutocompleteV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonGetAutocompleteV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonGetAutocompleteV1Response.prototype['objDebug'] = undefined;


// Implement CommonGetAutocompleteV1ResponseAllOf interface:
/**
 * Generic Autocomplete Response
 * @member {Array.<module:eZmaxAPI/model/CustomAutocompleteElementResponse>} mPayload
 */
CommonGetAutocompleteV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default CommonGetAutocompleteV1Response;

