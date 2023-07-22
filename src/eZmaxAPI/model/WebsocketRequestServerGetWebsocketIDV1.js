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
 * The WebsocketRequestServerGetWebsocketIDV1 model module.
 * @module eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1
 * @version 1.1.18
 */
class WebsocketRequestServerGetWebsocketIDV1 {
    /**
     * Constructs a new <code>WebsocketRequestServerGetWebsocketIDV1</code>.
     * Request for Websocket GetWebsocketID V1
     * @alias module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1
     * @param eWebsocketMessagetype {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1.EWebsocketMessagetypeEnum} The Type of message
     */
    constructor(eWebsocketMessagetype) { 
        
        WebsocketRequestServerGetWebsocketIDV1.initialize(this, eWebsocketMessagetype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eWebsocketMessagetype) { 
        obj['eWebsocketMessagetype'] = eWebsocketMessagetype;
    }

    /**
     * Constructs a <code>WebsocketRequestServerGetWebsocketIDV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1} The populated <code>WebsocketRequestServerGetWebsocketIDV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsocketRequestServerGetWebsocketIDV1();

            if (data.hasOwnProperty('eWebsocketMessagetype')) {
                obj['eWebsocketMessagetype'] = ApiClient.convertToType(data['eWebsocketMessagetype'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsocketRequestServerGetWebsocketIDV1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsocketRequestServerGetWebsocketIDV1</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsocketRequestServerGetWebsocketIDV1.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eWebsocketMessagetype'] && !(typeof data['eWebsocketMessagetype'] === 'string' || data['eWebsocketMessagetype'] instanceof String)) {
            throw new Error("Expected the field `eWebsocketMessagetype` to be a primitive type in the JSON string but got " + data['eWebsocketMessagetype']);
        }

        return true;
    }

/**
     * Returns The Type of message
     * @return {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1.EWebsocketMessagetypeEnum}
     */
    getEWebsocketMessagetype() {
        return this.eWebsocketMessagetype;
    }

    /**
     * Sets The Type of message
     * @param {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype The Type of message
     */
    setEWebsocketMessagetype(eWebsocketMessagetype) {
        this['eWebsocketMessagetype'] = eWebsocketMessagetype;
    }

}

WebsocketRequestServerGetWebsocketIDV1.RequiredProperties = ["eWebsocketMessagetype"];

/**
 * The Type of message
 * @member {module:eZmaxAPI/model/WebsocketRequestServerGetWebsocketIDV1.EWebsocketMessagetypeEnum} eWebsocketMessagetype
 */
WebsocketRequestServerGetWebsocketIDV1.prototype['eWebsocketMessagetype'] = undefined;





/**
 * Allowed values for the <code>eWebsocketMessagetype</code> property.
 * @enum {String}
 * @readonly
 */
WebsocketRequestServerGetWebsocketIDV1['EWebsocketMessagetypeEnum'] = {

    /**
     * value: "RequestServer-GetWebsocketID-V1"
     * @const
     */
    "RequestServer-GetWebsocketID-V1": "RequestServer-GetWebsocketID-V1"
};



export default WebsocketRequestServerGetWebsocketIDV1;

