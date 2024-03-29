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
import EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf from './EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf';
import EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload from './EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload';

/**
 * The EzsignbulksendtransmissionGetFormsDataV1Response model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response
 * @version 1.1.18
 */
class EzsignbulksendtransmissionGetFormsDataV1Response {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetFormsDataV1Response</code>.
     * Response for GET /1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getFormsData
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response
     * @implements module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignbulksendtransmissionGetFormsDataV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignbulksendtransmissionGetFormsDataV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1Response} The populated <code>EzsignbulksendtransmissionGetFormsDataV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetFormsDataV1Response();
            EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload.constructFromObject(data['mPayload']);
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
     * Validates the JSON data with respect to <code>EzsignbulksendtransmissionGetFormsDataV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendtransmissionGetFormsDataV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendtransmissionGetFormsDataV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload.validateJSON(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} mPayload
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

EzsignbulksendtransmissionGetFormsDataV1Response.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} mPayload
 */
EzsignbulksendtransmissionGetFormsDataV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignbulksendtransmissionGetFormsDataV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignbulksendtransmissionGetFormsDataV1Response.prototype['objDebug'] = undefined;


// Implement EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} mPayload
 */
EzsignbulksendtransmissionGetFormsDataV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignbulksendtransmissionGetFormsDataV1Response;

