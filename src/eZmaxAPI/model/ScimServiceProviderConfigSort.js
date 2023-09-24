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

/**
 * The ScimServiceProviderConfigSort model module.
 * @module eZmaxAPI/model/ScimServiceProviderConfigSort
 * @version 1.2.0
 */
class ScimServiceProviderConfigSort {
    /**
     * Constructs a new <code>ScimServiceProviderConfigSort</code>.
     * A complex type that specifies Sort configuration options.
     * @alias module:eZmaxAPI/model/ScimServiceProviderConfigSort
     * @param supported {Boolean} A Boolean value specifying whether or not sorting is supported.
     */
    constructor(supported) { 
        
        ScimServiceProviderConfigSort.initialize(this, supported);
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
     * Constructs a <code>ScimServiceProviderConfigSort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ScimServiceProviderConfigSort} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ScimServiceProviderConfigSort} The populated <code>ScimServiceProviderConfigSort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScimServiceProviderConfigSort();

            if (data.hasOwnProperty('supported')) {
                obj['supported'] = ApiClient.convertToType(data['supported'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScimServiceProviderConfigSort</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScimServiceProviderConfigSort</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScimServiceProviderConfigSort.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns A Boolean value specifying whether or not sorting is supported.
     * @return {Boolean}
     */
    getSupported() {
        return this.supported;
    }

    /**
     * Sets A Boolean value specifying whether or not sorting is supported.
     * @param {Boolean} supported A Boolean value specifying whether or not sorting is supported.
     */
    setSupported(supported) {
        this['supported'] = supported;
    }

}

ScimServiceProviderConfigSort.RequiredProperties = ["supported"];

/**
 * A Boolean value specifying whether or not sorting is supported.
 * @member {Boolean} supported
 */
ScimServiceProviderConfigSort.prototype['supported'] = undefined;






export default ScimServiceProviderConfigSort;

