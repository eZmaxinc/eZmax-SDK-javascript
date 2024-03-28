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
import ModuleAutocompleteElementResponse from './ModuleAutocompleteElementResponse';

/**
 * The ModuleGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/ModuleGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class ModuleGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>ModuleGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/module/getAutocomplete
     * @alias module:eZmaxAPI/model/ModuleGetAutocompleteV2ResponseMPayload
     * @param a_objModule {Array.<module:eZmaxAPI/model/ModuleAutocompleteElementResponse>} An array of Module autocomplete element response.
     */
    constructor(a_objModule) { 
        
        ModuleGetAutocompleteV2ResponseMPayload.initialize(this, a_objModule);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objModule) { 
        obj['a_objModule'] = a_objModule;
    }

    /**
     * Constructs a <code>ModuleGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ModuleGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ModuleGetAutocompleteV2ResponseMPayload} The populated <code>ModuleGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModuleGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objModule')) {
                obj['a_objModule'] = ApiClient.convertToType(data['a_objModule'], [ModuleAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModuleGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModuleGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ModuleGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objModule']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objModule'])) {
                throw new Error("Expected the field `a_objModule` to be an array in the JSON data but got " + data['a_objModule']);
            }
            // validate the optional field `a_objModule` (array)
            for (const item of data['a_objModule']) {
                ModuleAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Module autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/ModuleAutocompleteElementResponse>}
     */
    getAObjModule() {
        return this.a_objModule;
    }

    /**
     * Sets An array of Module autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/ModuleAutocompleteElementResponse>} a_objModule An array of Module autocomplete element response.
     */
    setAObjModule(a_objModule) {
        this['a_objModule'] = a_objModule;
    }

}

ModuleGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objModule"];

/**
 * An array of Module autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/ModuleAutocompleteElementResponse>} a_objModule
 */
ModuleGetAutocompleteV2ResponseMPayload.prototype['a_objModule'] = undefined;






export default ModuleGetAutocompleteV2ResponseMPayload;

