/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
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
import EzsignfoldersignerassociationCreateObjectV2ResponseAllOf from './EzsignfoldersignerassociationCreateObjectV2ResponseAllOf';
import EzsignfoldersignerassociationCreateObjectV2ResponseMPayload from './EzsignfoldersignerassociationCreateObjectV2ResponseMPayload';

/**
 * The EzsignfoldersignerassociationCreateObjectV2Response model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Response
 * @version 1.1.8
 */
class EzsignfoldersignerassociationCreateObjectV2Response {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateObjectV2Response</code>.
     * Response for POST /2/object/ezsignfoldersignerassociation
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Response
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsignfoldersignerassociationCreateObjectV2ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignfoldersignerassociationCreateObjectV2Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfoldersignerassociationCreateObjectV2Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Response} The populated <code>EzsignfoldersignerassociationCreateObjectV2Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateObjectV2Response();
            EzsignfoldersignerassociationCreateObjectV2ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfoldersignerassociationCreateObjectV2ResponseMPayload.constructFromObject(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} mPayload
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
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} mPayload
 */
EzsignfoldersignerassociationCreateObjectV2Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignfoldersignerassociationCreateObjectV2Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignfoldersignerassociationCreateObjectV2Response.prototype['objDebug'] = undefined;


// Implement EzsignfoldersignerassociationCreateObjectV2ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} mPayload
 */
EzsignfoldersignerassociationCreateObjectV2ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignfoldersignerassociationCreateObjectV2Response;

