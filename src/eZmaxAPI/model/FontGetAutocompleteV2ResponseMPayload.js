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
import FontAutocompleteElementResponse from './FontAutocompleteElementResponse';

/**
 * The FontGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/FontGetAutocompleteV2ResponseMPayload
 * @version 1.1.17
 */
class FontGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>FontGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/font/getAutocomplete
     * @alias module:eZmaxAPI/model/FontGetAutocompleteV2ResponseMPayload
     */
    constructor() { 
        
        FontGetAutocompleteV2ResponseMPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FontGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FontGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FontGetAutocompleteV2ResponseMPayload} The populated <code>FontGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FontGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objFont')) {
                obj['a_objFont'] = ApiClient.convertToType(data['a_objFont'], [FontAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FontGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FontGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        if (data['a_objFont']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objFont'])) {
                throw new Error("Expected the field `a_objFont` to be an array in the JSON data but got " + data['a_objFont']);
            }
            // validate the optional field `a_objFont` (array)
            for (const item of data['a_objFont']) {
                FontAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Font autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/FontAutocompleteElementResponse>}
     */
    getAObjFont() {
        return this.a_objFont;
    }

    /**
     * Sets An array of Font autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/FontAutocompleteElementResponse>} a_objFont An array of Font autocomplete element response.
     */
    setAObjFont(a_objFont) {
        this['a_objFont'] = a_objFont;
    }

}



/**
 * An array of Font autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/FontAutocompleteElementResponse>} a_objFont
 */
FontGetAutocompleteV2ResponseMPayload.prototype['a_objFont'] = undefined;






export default FontGetAutocompleteV2ResponseMPayload;

