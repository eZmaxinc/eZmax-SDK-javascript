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
 * The ScimServiceProviderConfigPatch model module.
 * @module eZmaxAPI/model/ScimServiceProviderConfigPatch
 * @version 1.1.18
 */
class ScimServiceProviderConfigPatch {
    /**
     * Constructs a new <code>ScimServiceProviderConfigPatch</code>.
     * A complex type that specifies PATCH configuration options.
     * @alias module:eZmaxAPI/model/ScimServiceProviderConfigPatch
     * @param supported {Boolean} A Boolean value specifying whether or not the operation is supported.
     */
    constructor(supported) { 
        
        ScimServiceProviderConfigPatch.initialize(this, supported);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, supported) { 
        obj['supported'] = supported;
    }

    /**
     * Constructs a <code>ScimServiceProviderConfigPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ScimServiceProviderConfigPatch} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ScimServiceProviderConfigPatch} The populated <code>ScimServiceProviderConfigPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimServiceProviderConfigPatch();

            if (data.hasOwnProperty('supported')) {
                obj['supported'] = ApiClient.convertToType(data['supported'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScimServiceProviderConfigPatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScimServiceProviderConfigPatch</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScimServiceProviderConfigPatch.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns A Boolean value specifying whether or not the operation is supported.
     * @return {Boolean}
     */
    getSupported() {
        return this.supported;
    }

    /**
     * Sets A Boolean value specifying whether or not the operation is supported.
     * @param {Boolean} supported A Boolean value specifying whether or not the operation is supported.
     */
    setSupported(supported) {
        this['supported'] = supported;
    }

}

ScimServiceProviderConfigPatch.RequiredProperties = ["supported"];

/**
 * A Boolean value specifying whether or not the operation is supported.
 * @member {Boolean} supported
 */
ScimServiceProviderConfigPatch.prototype['supported'] = undefined;






export default ScimServiceProviderConfigPatch;

