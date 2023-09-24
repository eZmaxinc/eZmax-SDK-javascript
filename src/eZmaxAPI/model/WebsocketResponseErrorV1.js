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
import WebsocketResponseErrorV1MPayload from './WebsocketResponseErrorV1MPayload';

/**
 * The WebsocketResponseErrorV1 model module.
 * @module eZmaxAPI/model/WebsocketResponseErrorV1
 * @version 1.2.0
 */
class WebsocketResponseErrorV1 {
    /**
     * Constructs a new <code>WebsocketResponseErrorV1</code>.
     * Response for Websocket Error V1
     * @alias module:eZmaxAPI/model/WebsocketResponseErrorV1
     * @param eWebsocketMessagetype {module:eZmaxAPI/model/WebsocketResponseErrorV1.EWebsocketMessagetypeEnum} The Type of message
     * @param mPayload {module:eZmaxAPI/model/WebsocketResponseErrorV1MPayload} 
     */
    constructor(eWebsocketMessagetype, mPayload) { 
        
        WebsocketResponseErrorV1.initialize(this, eWebsocketMessagetype, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eWebsocketMessagetype, mPayload) { 
        obj['eWebsocketMessagetype'] = eWebsocketMessagetype;
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>WebsocketResponseErrorV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsocketResponseErrorV1} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsocketResponseErrorV1} The populated <code>WebsocketResponseErrorV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketResponseErrorV1();

            if (data.hasOwnProperty('eWebsocketMessagetype')) {
                obj['eWebsocketMessagetype'] = ApiClient.convertToType(data['eWebsocketMessagetype'], 'String');
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = WebsocketResponseErrorV1MPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsocketResponseErrorV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsocketResponseErrorV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsocketResponseErrorV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eWebsocketMessagetype'] && !(typeof data['eWebsocketMessagetype'] === 'string' || data['eWebsocketMessagetype'] instanceof String)) {
            throw new Error("Expected the field `eWebsocketMessagetype` to be a primitive type in the JSON string but got " + data['eWebsocketMessagetype']);
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          WebsocketResponseErrorV1MPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * Returns The Type of message
     * @return {module:eZmaxAPI/model/WebsocketResponseErrorV1.EWebsocketMessagetypeEnum}
     */
    getEWebsocketMessagetype() {
        return this.eWebsocketMessagetype;
    }

    /**
     * Sets The Type of message
     * @param {module:eZmaxAPI/model/WebsocketResponseErrorV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype The Type of message
     */
    setEWebsocketMessagetype(eWebsocketMessagetype) {
        this['eWebsocketMessagetype'] = eWebsocketMessagetype;
    }
/**
     * @return {module:eZmaxAPI/model/WebsocketResponseErrorV1MPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/WebsocketResponseErrorV1MPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

WebsocketResponseErrorV1.RequiredProperties = ["eWebsocketMessagetype", "mPayload"];

/**
 * The Type of message
 * @member {module:eZmaxAPI/model/WebsocketResponseErrorV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype
 */
WebsocketResponseErrorV1.prototype['eWebsocketMessagetype'] = undefined;

/**
 * @member {module:eZmaxAPI/model/WebsocketResponseErrorV1MPayload} mPayload
 */
WebsocketResponseErrorV1.prototype['mPayload'] = undefined;





/**
 * Allowed values for the <code>eWebsocketMessagetype</code> property.
 * @enum {String}
 * @readonly
 */
WebsocketResponseErrorV1['EWebsocketMessagetypeEnum'] = {

    /**
     * value: "Response-Error-V1"
     * @const
     */
    "Response-Error-V1": "Response-Error-V1"
};



export default WebsocketResponseErrorV1;

