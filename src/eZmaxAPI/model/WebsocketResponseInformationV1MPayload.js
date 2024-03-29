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

/**
 * The WebsocketResponseInformationV1MPayload model module.
 * @module eZmaxAPI/model/WebsocketResponseInformationV1MPayload
 * @version 1.1.18
 */
class WebsocketResponseInformationV1MPayload {
    /**
     * Constructs a new <code>WebsocketResponseInformationV1MPayload</code>.
     * Payload for Websocket Information V1
     * @alias module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload
     * @param sInformationMessage {String} Information message
     */
    constructor(sInformationMessage) { 
        
        WebsocketResponseInformationV1MPayload.initialize(this, sInformationMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sInformationMessage) { 
        obj['sInformationMessage'] = sInformationMessage;
    }

    /**
     * Constructs a <code>WebsocketResponseInformationV1MPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsocketResponseInformationV1MPayload} The populated <code>WebsocketResponseInformationV1MPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketResponseInformationV1MPayload();

            if (data.hasOwnProperty('sInformationMessage')) {
                obj['sInformationMessage'] = ApiClient.convertToType(data['sInformationMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsocketResponseInformationV1MPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsocketResponseInformationV1MPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsocketResponseInformationV1MPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sInformationMessage'] && !(typeof data['sInformationMessage'] === 'string' || data['sInformationMessage'] instanceof String)) {
            throw new Error("Expected the field `sInformationMessage` to be a primitive type in the JSON string but got " + data['sInformationMessage']);
        }

        return true;
    }

/**
     * Returns Information message
     * @return {String}
     */
    getSInformationMessage() {
        return this.sInformationMessage;
    }

    /**
     * Sets Information message
     * @param {String} sInformationMessage Information message
     */
    setSInformationMessage(sInformationMessage) {
        this['sInformationMessage'] = sInformationMessage;
    }

}

WebsocketResponseInformationV1MPayload.RequiredProperties = ["sInformationMessage"];

/**
 * Information message
 * @member {String} sInformationMessage
 */
WebsocketResponseInformationV1MPayload.prototype['sInformationMessage'] = undefined;






export default WebsocketResponseInformationV1MPayload;

