/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
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
import EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf from './EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf';
import EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload from './EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload';

/**
 * The EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response
 * @version 1.1.14
 */
class EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response</code>.
     * Response for GET /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocument}/getEzsigntemplateformfieldgroups
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response
     * @implements module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response} The populated <code>EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response();
            EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload.constructFromObject(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} mPayload
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
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} mPayload
 */
EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response.prototype['objDebug'] = undefined;


// Implement EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseMPayload} mPayload
 */
EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1Response;

