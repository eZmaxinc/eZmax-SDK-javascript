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
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';
import EzmaxproductGetAutocompleteV2ResponseAllOf from './EzmaxproductGetAutocompleteV2ResponseAllOf';
import EzmaxproductGetAutocompleteV2ResponseMPayload from './EzmaxproductGetAutocompleteV2ResponseMPayload';

/**
 * The EzmaxproductGetAutocompleteV2Response model module.
 * @module eZmaxAPI/model/EzmaxproductGetAutocompleteV2Response
 * @version 1.1.18
 */
class EzmaxproductGetAutocompleteV2Response {
    /**
     * Constructs a new <code>EzmaxproductGetAutocompleteV2Response</code>.
     * Response for GET /2/object/ezmaxproduct/getAutocomplete
     * @alias module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2Response
     * @implements module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzmaxproductGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzmaxproductGetAutocompleteV2Response.initialize(this, mPayload);
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
     * Constructs a <code>EzmaxproductGetAutocompleteV2Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2Response} The populated <code>EzmaxproductGetAutocompleteV2Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxproductGetAutocompleteV2Response();
            EzmaxproductGetAutocompleteV2ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzmaxproductGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
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
     * Validates the JSON data with respect to <code>EzmaxproductGetAutocompleteV2Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxproductGetAutocompleteV2Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxproductGetAutocompleteV2Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzmaxproductGetAutocompleteV2ResponseMPayload.validateJSON(data['mPayload']);
        }
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayload.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseMPayload} mPayload
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

EzmaxproductGetAutocompleteV2Response.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseMPayload} mPayload
 */
EzmaxproductGetAutocompleteV2Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzmaxproductGetAutocompleteV2Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzmaxproductGetAutocompleteV2Response.prototype['objDebug'] = undefined;


// Implement EzmaxproductGetAutocompleteV2ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzmaxproductGetAutocompleteV2ResponseMPayload} mPayload
 */
EzmaxproductGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzmaxproductGetAutocompleteV2Response;

