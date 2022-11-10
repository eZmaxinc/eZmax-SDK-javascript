/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
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
import EzsignbulksendGetObjectV1ResponseAllOf from './EzsignbulksendGetObjectV1ResponseAllOf';
import EzsignbulksendGetObjectV1ResponseMPayload from './EzsignbulksendGetObjectV1ResponseMPayload';

/**
 * The EzsignbulksendGetObjectV1Response model module.
 * @module eZmaxAPI/model/EzsignbulksendGetObjectV1Response
 * @version 1.1.16
 */
class EzsignbulksendGetObjectV1Response {
    /**
     * Constructs a new <code>EzsignbulksendGetObjectV1Response</code>.
     * Response for GET /1/object/ezsignbulksend/{pkiEzsignbulksendID}
     * @alias module:eZmaxAPI/model/EzsignbulksendGetObjectV1Response
     * @implements module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsignbulksendGetObjectV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignbulksendGetObjectV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignbulksendGetObjectV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetObjectV1Response} The populated <code>EzsignbulksendGetObjectV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetObjectV1Response();
            EzsignbulksendGetObjectV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignbulksendGetObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} mPayload
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
 * @member {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} mPayload
 */
EzsignbulksendGetObjectV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignbulksendGetObjectV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignbulksendGetObjectV1Response.prototype['objDebug'] = undefined;


// Implement EzsignbulksendGetObjectV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignbulksendGetObjectV1ResponseMPayload} mPayload
 */
EzsignbulksendGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignbulksendGetObjectV1Response;

