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
import EzsignfolderGetEzsigndocumentsV1ResponseAllOf from './EzsignfolderGetEzsigndocumentsV1ResponseAllOf';
import EzsignfolderGetEzsigndocumentsV1ResponseMPayload from './EzsignfolderGetEzsigndocumentsV1ResponseMPayload';

/**
 * The EzsignfolderGetEzsigndocumentsV1Response model module.
 * @module eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response
 * @version 1.1.16
 */
class EzsignfolderGetEzsigndocumentsV1Response {
    /**
     * Constructs a new <code>EzsignfolderGetEzsigndocumentsV1Response</code>.
     * Response for GET /1/object/ezsignfolder/{pkiEzsignfolder}/getEzsigndocuments
     * @alias module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response
     * @implements module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsignfolderGetEzsigndocumentsV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignfolderGetEzsigndocumentsV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfolderGetEzsigndocumentsV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1Response} The populated <code>EzsignfolderGetEzsigndocumentsV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetEzsigndocumentsV1Response();
            EzsignfolderGetEzsigndocumentsV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfolderGetEzsigndocumentsV1ResponseMPayload.constructFromObject(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseMPayload} mPayload
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
 * @member {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseMPayload} mPayload
 */
EzsignfolderGetEzsigndocumentsV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignfolderGetEzsigndocumentsV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignfolderGetEzsigndocumentsV1Response.prototype['objDebug'] = undefined;


// Implement EzsignfolderGetEzsigndocumentsV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignfolderGetEzsigndocumentsV1ResponseMPayload} mPayload
 */
EzsignfolderGetEzsigndocumentsV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignfolderGetEzsigndocumentsV1Response;

