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
import WebsocketResponseInformationV1MPayload from './WebsocketResponseInformationV1MPayload';

/**
 * The WebsocketResponseInformationV1 model module.
 * @module eZmaxAPI/model/WebsocketResponseInformationV1
 * @version 1.1.18
 */
class WebsocketResponseInformationV1 {
    /**
     * Constructs a new <code>WebsocketResponseInformationV1</code>.
     * Response for Websocket Information V1
     * @alias module:eZmaxAPI/model/WebsocketResponseInformationV1
     * @param eWebsocketMessagetype {module:eZmaxAPI/model/WebsocketResponseInformationV1.EWebsocketMessagetypeEnum} The Type of message
     * @param mPayload {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload} 
     */
    constructor(eWebsocketMessagetype, mPayload) { 
        
        WebsocketResponseInformationV1.initialize(this, eWebsocketMessagetype, mPayload);
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
     * Constructs a <code>WebsocketResponseInformationV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsocketResponseInformationV1} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsocketResponseInformationV1} The populated <code>WebsocketResponseInformationV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketResponseInformationV1();

            if (data.hasOwnProperty('eWebsocketMessagetype')) {
                obj['eWebsocketMessagetype'] = ApiClient.convertToType(data['eWebsocketMessagetype'], 'String');
            }
            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = WebsocketResponseInformationV1MPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsocketResponseInformationV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsocketResponseInformationV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsocketResponseInformationV1.RequiredProperties) {
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
          WebsocketResponseInformationV1MPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * Returns The Type of message
     * @return {module:eZmaxAPI/model/WebsocketResponseInformationV1.EWebsocketMessagetypeEnum}
     */
    getEWebsocketMessagetype() {
        return this.eWebsocketMessagetype;
    }

    /**
     * Sets The Type of message
     * @param {module:eZmaxAPI/model/WebsocketResponseInformationV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype The Type of message
     */
    setEWebsocketMessagetype(eWebsocketMessagetype) {
        this['eWebsocketMessagetype'] = eWebsocketMessagetype;
    }
/**
     * @return {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

WebsocketResponseInformationV1.RequiredProperties = ["eWebsocketMessagetype", "mPayload"];

/**
 * The Type of message
 * @member {module:eZmaxAPI/model/WebsocketResponseInformationV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype
 */
WebsocketResponseInformationV1.prototype['eWebsocketMessagetype'] = undefined;

/**
 * @member {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload} mPayload
 */
WebsocketResponseInformationV1.prototype['mPayload'] = undefined;





/**
 * Allowed values for the <code>eWebsocketMessagetype</code> property.
 * @enum {String}
 * @readonly
 */
WebsocketResponseInformationV1['EWebsocketMessagetypeEnum'] = {

    /**
     * value: "Response-Information-V1"
     * @const
     */
    "Response-Information-V1": "Response-Information-V1"
};



export default WebsocketResponseInformationV1;

