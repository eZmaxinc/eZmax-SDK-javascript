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
import EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload from './EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload';

/**
 * The EzsignfoldersignerassociationCreateEmbeddedUrlV1Response model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Response
 * @version 1.2.0
 */
class EzsignfoldersignerassociationCreateEmbeddedUrlV1Response {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Response</code>.
     * Response for POST /1/object/ezsignfoldersignerassociation/createEmbeddedUrl
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Response
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param objDebugPayload {module:eZmaxAPI/model/CommonResponseObjDebugPayload} 
     * @param mPayload {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload} 
     */
    constructor(objDebugPayload, mPayload) { 
        CommonResponse.initialize(this, objDebugPayload);
        EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.initialize(this, objDebugPayload, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objDebugPayload, mPayload) { 
        obj['objDebugPayload'] = objDebugPayload;
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1Response} The populated <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateEmbeddedUrlV1Response();
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayload.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldersignerassociationCreateEmbeddedUrlV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.RequiredProperties) {
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
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload.validateJSON(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.RequiredProperties = ["objDebugPayload", "mPayload"];

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.prototype['objDebug'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateEmbeddedUrlV1ResponseMPayload} mPayload
 */
EzsignfoldersignerassociationCreateEmbeddedUrlV1Response.prototype['mPayload'] = undefined;


// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsignfoldersignerassociationCreateEmbeddedUrlV1Response;

