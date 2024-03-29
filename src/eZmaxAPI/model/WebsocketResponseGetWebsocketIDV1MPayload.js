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
 * The WebsocketResponseGetWebsocketIDV1MPayload model module.
 * @module eZmaxAPI/model/WebsocketResponseGetWebsocketIDV1MPayload
 * @version 1.1.18
 */
class WebsocketResponseGetWebsocketIDV1MPayload {
    /**
     * Constructs a new <code>WebsocketResponseGetWebsocketIDV1MPayload</code>.
     * Payload for Websocket GetWebsocketID V1
     * @alias module:eZmaxAPI/model/WebsocketResponseGetWebsocketIDV1MPayload
     * @param sWebsocketID {String} The Unique ID of the Websocket Connection
     */
    constructor(sWebsocketID) { 
        
        WebsocketResponseGetWebsocketIDV1MPayload.initialize(this, sWebsocketID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sWebsocketID) { 
        obj['sWebsocketID'] = sWebsocketID;
    }

    /**
     * Constructs a <code>WebsocketResponseGetWebsocketIDV1MPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsocketResponseGetWebsocketIDV1MPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsocketResponseGetWebsocketIDV1MPayload} The populated <code>WebsocketResponseGetWebsocketIDV1MPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketResponseGetWebsocketIDV1MPayload();

            if (data.hasOwnProperty('sWebsocketID')) {
                obj['sWebsocketID'] = ApiClient.convertToType(data['sWebsocketID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsocketResponseGetWebsocketIDV1MPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsocketResponseGetWebsocketIDV1MPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsocketResponseGetWebsocketIDV1MPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sWebsocketID'] && !(typeof data['sWebsocketID'] === 'string' || data['sWebsocketID'] instanceof String)) {
            throw new Error("Expected the field `sWebsocketID` to be a primitive type in the JSON string but got " + data['sWebsocketID']);
        }

        return true;
    }

/**
     * Returns The Unique ID of the Websocket Connection
     * @return {String}
     */
    getSWebsocketID() {
        return this.sWebsocketID;
    }

    /**
     * Sets The Unique ID of the Websocket Connection
     * @param {String} sWebsocketID The Unique ID of the Websocket Connection
     */
    setSWebsocketID(sWebsocketID) {
        this['sWebsocketID'] = sWebsocketID;
    }

}

WebsocketResponseGetWebsocketIDV1MPayload.RequiredProperties = ["sWebsocketID"];

/**
 * The Unique ID of the Websocket Connection
 * @member {String} sWebsocketID
 */
WebsocketResponseGetWebsocketIDV1MPayload.prototype['sWebsocketID'] = undefined;






export default WebsocketResponseGetWebsocketIDV1MPayload;

