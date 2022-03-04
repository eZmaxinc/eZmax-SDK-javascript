/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
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
import EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf from './EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf';
import EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload from './EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload';

/**
 * The EzsigndocumentGetEzsignformfieldgroupsV1Response model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1Response
 * @version 1.1.5
 */
class EzsigndocumentGetEzsignformfieldgroupsV1Response {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignformfieldgroupsV1Response</code>.
     * Response for the /1/object/ezsigndocument/{pkiEzsigndocument}/getEzsignformfieldgroups API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1Response
     * @implements module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsigndocumentGetEzsignformfieldgroupsV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsigndocumentGetEzsignformfieldgroupsV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1Response} The populated <code>EzsigndocumentGetEzsignformfieldgroupsV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignformfieldgroupsV1Response();
            EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload.constructFromObject(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} mPayload
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
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignformfieldgroupsV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsigndocumentGetEzsignformfieldgroupsV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsigndocumentGetEzsignformfieldgroupsV1Response.prototype['objDebug'] = undefined;


// Implement EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsigndocumentGetEzsignformfieldgroupsV1ResponseMPayload} mPayload
 */
EzsigndocumentGetEzsignformfieldgroupsV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsigndocumentGetEzsignformfieldgroupsV1Response;

