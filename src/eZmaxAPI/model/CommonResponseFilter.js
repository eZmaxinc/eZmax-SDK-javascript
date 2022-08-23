/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CommonResponseFilter model module.
 * @module eZmaxAPI/model/CommonResponseFilter
 * @version 1.1.10
 */
class CommonResponseFilter {
    /**
     * Constructs a new <code>CommonResponseFilter</code>.
     * Definition of Filters for getList
     * @alias module:eZmaxAPI/model/CommonResponseFilter
     */
    constructor() { 
        
        CommonResponseFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommonResponseFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseFilter} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseFilter} The populated <code>CommonResponseFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseFilter();

            if (data.hasOwnProperty('a_AutoType')) {
                obj['a_AutoType'] = ApiClient.convertToType(data['a_AutoType'], {'String': 'String'});
            }
            if (data.hasOwnProperty('a_Enum')) {
                obj['a_Enum'] = ApiClient.convertToType(data['a_Enum'], {'String': {'String': 'String'}});
            }
        }
        return obj;
    }

/**
     * Returns List of filters that can be used in *sFilter* (Automatic types)
     * @return {Object.<String, String>}
     */
    getAAutoType() {
        return this.a_AutoType;
    }

    /**
     * Sets List of filters that can be used in *sFilter* (Automatic types)
     * @param {Object.<String, String>} a_AutoType List of filters that can be used in *sFilter* (Automatic types)
     */
    setAAutoType(a_AutoType) {
        this['a_AutoType'] = a_AutoType;
    }
/**
     * Returns List of filters that can be used in *sFilter* (Enum types)
     * @return {Object.<String, Object.<String, String>>}
     */
    getAEnum() {
        return this.a_Enum;
    }

    /**
     * Sets List of filters that can be used in *sFilter* (Enum types)
     * @param {Object.<String, Object.<String, String>>} a_Enum List of filters that can be used in *sFilter* (Enum types)
     */
    setAEnum(a_Enum) {
        this['a_Enum'] = a_Enum;
    }

}

/**
 * List of filters that can be used in *sFilter* (Automatic types)
 * @member {Object.<String, String>} a_AutoType
 */
CommonResponseFilter.prototype['a_AutoType'] = undefined;

/**
 * List of filters that can be used in *sFilter* (Enum types)
 * @member {Object.<String, Object.<String, String>>} a_Enum
 */
CommonResponseFilter.prototype['a_Enum'] = undefined;






export default CommonResponseFilter;

