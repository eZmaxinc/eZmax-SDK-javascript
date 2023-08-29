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
import CommonResponseGetList from './CommonResponseGetList';
import CommonResponseObjDebug from './CommonResponseObjDebug';
import CommonResponseObjDebugPayloadGetList from './CommonResponseObjDebugPayloadGetList';
import EzsignfoldertypeGetListV1ResponseMPayload from './EzsignfoldertypeGetListV1ResponseMPayload';

/**
 * The EzsignfoldertypeGetListV1Response model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetListV1Response
 * @version 1.1.18
 */
class EzsignfoldertypeGetListV1Response {
    /**
     * Constructs a new <code>EzsignfoldertypeGetListV1Response</code>.
     * Response for GET /1/object/ezsignfoldertype/getList
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response
     * @implements module:eZmaxAPI/model/CommonResponseGetList
     * @param objDebugPayload {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} 
     * @param mPayload {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload} 
     */
    constructor(objDebugPayload, mPayload) { 
        CommonResponseGetList.initialize(this, objDebugPayload);
        EzsignfoldertypeGetListV1Response.initialize(this, objDebugPayload, mPayload);
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
     * Constructs a <code>EzsignfoldertypeGetListV1Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetListV1Response} The populated <code>EzsignfoldertypeGetListV1Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetListV1Response();
            CommonResponseGetList.constructFromObject(data, obj);

            if (data.hasOwnProperty('objDebugPayload')) {
                obj['objDebugPayload'] = CommonResponseObjDebugPayloadGetList.constructFromObject(data['objDebugPayload']);
            }
            if (data.hasOwnProperty('objDebug')) {
                obj['objDebug'] = CommonResponseObjDebug.constructFromObject(data['objDebug']);
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfoldertypeGetListV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldertypeGetListV1Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldertypeGetListV1Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldertypeGetListV1Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDebugPayload`
        if (data['objDebugPayload']) { // data not null
          CommonResponseObjDebugPayloadGetList.validateJSON(data['objDebugPayload']);
        }
        // validate the optional field `objDebug`
        if (data['objDebug']) { // data not null
          CommonResponseObjDebug.validateJSON(data['objDebug']);
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsignfoldertypeGetListV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList}
     */
    getObjDebugPayload() {
        return this.objDebugPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
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
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsignfoldertypeGetListV1Response.RequiredProperties = ["objDebugPayload", "mPayload"];

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
EzsignfoldertypeGetListV1Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsignfoldertypeGetListV1Response.prototype['objDebug'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayload} mPayload
 */
EzsignfoldertypeGetListV1Response.prototype['mPayload'] = undefined;


// Implement CommonResponseGetList interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetList} objDebugPayload
 */
CommonResponseGetList.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponseGetList.prototype['objDebug'] = undefined;




export default EzsignfoldertypeGetListV1Response;

