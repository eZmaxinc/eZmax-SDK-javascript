/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
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
import EzsigntsarequirementGetAutocompleteV2ResponseAllOf from './EzsigntsarequirementGetAutocompleteV2ResponseAllOf';
import EzsigntsarequirementGetAutocompleteV2ResponseMPayload from './EzsigntsarequirementGetAutocompleteV2ResponseMPayload';

/**
 * The EzsigntsarequirementGetAutocompleteV2Response model module.
 * @module eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2Response
 * @version 1.1.17
 */
class EzsigntsarequirementGetAutocompleteV2Response {
    /**
     * Constructs a new <code>EzsigntsarequirementGetAutocompleteV2Response</code>.
     * Response for GET /2/object/ezsigntsarequirement/getAutocomplete
     * @alias module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2Response
     * @implements module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseAllOf
     * @implements module:eZmaxAPI/model/CommonResponse
     * @param mPayload {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        EzsigntsarequirementGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);CommonResponse.initialize(this);
        EzsigntsarequirementGetAutocompleteV2Response.initialize(this, mPayload);
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
     * Constructs a <code>EzsigntsarequirementGetAutocompleteV2Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2Response} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2Response} The populated <code>EzsigntsarequirementGetAutocompleteV2Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntsarequirementGetAutocompleteV2Response();
            EzsigntsarequirementGetAutocompleteV2ResponseAllOf.constructFromObject(data, obj);
            CommonResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsigntsarequirementGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
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
     * Validates the JSON data with respect to <code>EzsigntsarequirementGetAutocompleteV2Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntsarequirementGetAutocompleteV2Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntsarequirementGetAutocompleteV2Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          EzsigntsarequirementGetAutocompleteV2ResponseMPayload.validateJSON(data['mPayload']);
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
     * @return {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} mPayload
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

EzsigntsarequirementGetAutocompleteV2Response.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} mPayload
 */
EzsigntsarequirementGetAutocompleteV2Response.prototype['mPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
EzsigntsarequirementGetAutocompleteV2Response.prototype['objDebugPayload'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
EzsigntsarequirementGetAutocompleteV2Response.prototype['objDebug'] = undefined;


// Implement EzsigntsarequirementGetAutocompleteV2ResponseAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} mPayload
 */
EzsigntsarequirementGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;
// Implement CommonResponse interface:
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebugPayload} objDebugPayload
 */
CommonResponse.prototype['objDebugPayload'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonResponseObjDebug} objDebug
 */
CommonResponse.prototype['objDebug'] = undefined;




export default EzsigntsarequirementGetAutocompleteV2Response;

