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
import CommonResponse from './CommonResponse';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayload from './CommonResponseObjDebugPayload';

/**
 * The EzsigntemplatepackagesignerEditObjectV1Response model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Response
 * @version 1.2.0
 */
class EzsigntemplatepackagesignerEditObjectV1Response {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerEditObjectV1Response</code>.
     * Response for PUT /1/object/ezsigntemplatepackagesigner/{pkiEzsigntemplatepackagesignerID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Response
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param objDebugPayload {module:eZmaxAPI/model/CommonResponseObjDebugPayload} 
     */
    constructor(objDebugPayload) { 
        CommonResponse.initialize(this, objDebugPayload);
        EzsigntemplatepackagesignerEditObjectV1Response.initialize(this, objDebugPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objDebugPayload) { 
        obj['objDebugPayload'] = objDebugPayload;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerEditObjectV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerEditObjectV1Response} The populated <code>EzsigntemplatepackagesignerEditObjectV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerEditObjectV1Response();
            CommonResponse.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>EzsigntemplatepackagesignerEditObjectV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackagesignerEditObjectV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackagesignerEditObjectV1Response.RequiredProperties) {
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

}

EzsigntemplatepackagesignerEditObjectV1Response.RequiredProperties = ["objDebugPayload"];

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsigntemplatepackagesignerEditObjectV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsigntemplatepackagesignerEditObjectV1Response.prototype['objDebug'] = undefined;


// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsigntemplatepackagesignerEditObjectV1Response;

