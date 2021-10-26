/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.2
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
import EzsignfoldersignerassociationGetObjectV1ResponseAllOf from './EzsignfoldersignerassociationGetObjectV1ResponseAllOf';

/**
 * The EzsignfoldersignerassociationGetObjectV1Response model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response
 * @version 1.1.2
 */
class EzsignfoldersignerassociationGetObjectV1Response {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationGetObjectV1Response</code>.
     * Response for the /1/object/ezsignfoldersignerassociation/getObject API Request
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response
     * @implements module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {Object} Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
     */
    constructor(mPayload) { 
        EzsignfoldersignerassociationGetObjectV1ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsignfoldersignerassociationGetObjectV1Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfoldersignerassociationGetObjectV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationGetObjectV1Response} The populated <code>EzsignfoldersignerassociationGetObjectV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationGetObjectV1Response();
            EzsignfoldersignerassociationGetObjectV1ResponseAllOf.constructFromObject(data, obj);
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
     * Returns Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
     * @return {Object}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * Sets Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
     * @param {Object} mPayload Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
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
 * Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
 * @member {Object} mPayload
 */
EzsignfoldersignerassociationGetObjectV1Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignfoldersignerassociationGetObjectV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignfoldersignerassociationGetObjectV1Response.prototype['objDebug'] = undefined;


// Implement EzsignfoldersignerassociationGetObjectV1ResponseAllOf interface:
/**
 * Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
 * @member {Object} mPayload
 */
EzsignfoldersignerassociationGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignfoldersignerassociationGetObjectV1Response;

