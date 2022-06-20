/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
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
import EzsignsignatureSignV1ResponseAllOf from './EzsignsignatureSignV1ResponseAllOf';

/**
 * The EzsignsignatureSignV1Response model module.
 * @module eZmaxAPI/model/EzsignsignatureSignV1Response
 * @version 1.1.9
 */
class EzsignsignatureSignV1Response {
    /**
     * Constructs a new <code>EzsignsignatureSignV1Response</code>.
     * Response for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
     * @alias module:eZmaxAPI/model/EzsignsignatureSignV1Response
     * @implements module:eZmaxAPI/model/EzsignsignatureSignV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {Object} Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
     */
    constructor(mPayload) { 
        EzsignsignatureSignV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignsignatureSignV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignsignatureSignV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureSignV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureSignV1Response} The populated <code>EzsignsignatureSignV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureSignV1Response();
            EzsignsignatureSignV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApiClient.convertToType(data['mPayload'], Object);
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
     * Returns Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
     * @return {Object}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * Sets Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
     * @param {Object} mPayload Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
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
 * Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
 * @member {Object} mPayload
 */
EzsignsignatureSignV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignsignatureSignV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignsignatureSignV1Response.prototype['objDebug'] = undefined;


// Implement EzsignsignatureSignV1ResponseAllOf interface:
/**
 * Payload for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
 * @member {Object} mPayload
 */
EzsignsignatureSignV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignsignatureSignV1Response;

