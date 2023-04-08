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
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';
import CommonResponseWarning from './CommonResponseWarning';
import EzsigntemplatedocumentEditObjectV1ResponseAllOf from './EzsigntemplatedocumentEditObjectV1ResponseAllOf';

/**
 * The EzsigntemplatedocumentEditObjectV1Response model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response
 * @version 1.1.17
 */
class EzsigntemplatedocumentEditObjectV1Response {
    /**
     * Constructs a new <code>EzsigntemplatedocumentEditObjectV1Response</code>.
     * Response for PUT /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response
     * @implements module:eZmaxAPI/model/CommonResponse
     * @implements module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1ResponseAllOf
     */
    constructor() { 
        CommonResponse.initialize(this);EzsigntemplatedocumentEditObjectV1ResponseAllOf.initialize(this);
        EzsigntemplatedocumentEditObjectV1Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentEditObjectV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Response} The populated <code>EzsigntemplatedocumentEditObjectV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentEditObjectV1Response();
            CommonResponse.constructFromObject(data, obj);
            EzsigntemplatedocumentEditObjectV1ResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
            if (data.hasOwnProperty('a_objWarning')) {
                obj['a_objWarning'] = ApiClient.convertToType(data['a_objWarning'], [CommonResponseWarning]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentEditObjectV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentEditObjectV1Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayload.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }
        if (data['a_objWarning']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objWarning'])) {
                throw new Error("Expected the field `a_objWarning` to be an array in the JSON data but got " + data['a_objWarning']);
            }
            // validate the optional field `a_objWarning` (array)
            for (const item of data['a_objWarning']) {
                CommonResponseWarning.validateJSON(item);
            };
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
     * @return {Array.<module:eZmaxAPI/model/CommonResponseWarning>}
     */
    getAObjWarning() {
        return this.a_objWarning;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommonResponseWarning>} a_objWarning
     */
    setAObjWarning(a_objWarning) {
        this['a_objWarning'] = a_objWarning;
    }

}



/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsigntemplatedocumentEditObjectV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsigntemplatedocumentEditObjectV1Response.prototype['objDebug'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CommonResponseWarning>} a_objWarning
 */
EzsigntemplatedocumentEditObjectV1Response.prototype['a_objWarning'] = undefined;


// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;
// Implement EzsigntemplatedocumentEditObjectV1ResponseAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/CommonResponseWarning>} a_objWarning
 */
EzsigntemplatedocumentEditObjectV1ResponseAllOf.prototype['a_objWarning'] = undefined;




export default EzsigntemplatedocumentEditObjectV1Response;

