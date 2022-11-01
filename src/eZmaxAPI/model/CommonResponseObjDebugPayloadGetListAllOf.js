/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonResponseFilter from './CommonResponseFilter';

/**
 * The CommonResponseObjDebugPayloadGetListAllOf model module.
 * @module eZmaxAPI/model/CommonResponseObjDebugPayloadGetListAllOf
 * @version 1.1.14
 */
class CommonResponseObjDebugPayloadGetListAllOf {
    /**
     * Constructs a new <code>CommonResponseObjDebugPayloadGetListAllOf</code>.
     * @alias module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetListAllOf
     * @param a_Filter {module:eZmaxAPI/model/CommonResponseFilter} 
     * @param a_OrderBy {Object.<String, String>} List of available values for *eOrderBy*
     */
    constructor(a_Filter, a_OrderBy) { 
        
        CommonResponseObjDebugPayloadGetListAllOf.initialize(this, a_Filter, a_OrderBy);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_Filter, a_OrderBy) { 
        obj['a_Filter'] = a_Filter;
        obj['a_OrderBy'] = a_OrderBy;
    }

    /**
     * Constructs a <code>CommonResponseObjDebugPayloadGetListAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetListAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonResponseObjDebugPayloadGetListAllOf} The populated <code>CommonResponseObjDebugPayloadGetListAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonResponseObjDebugPayloadGetListAllOf();

            if (data.hasOwnProperty('a_Filter')) {
                obj['a_Filter'] = CommonResponseFilter.constructFromObject(data['a_Filter']);
            }
            if (data.hasOwnProperty('a_OrderBy')) {
                obj['a_OrderBy'] = ApiClient.convertToType(data['a_OrderBy'], {'String': 'String'});
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/CommonResponseFilter}
     */
    getAFilter() {
        return this.a_Filter;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
     */
    setAFilter(a_Filter) {
        this['a_Filter'] = a_Filter;
    }
/**
     * Returns List of available values for *eOrderBy*
     * @return {Object.<String, String>}
     */
    getAOrderBy() {
        return this.a_OrderBy;
    }

    /**
     * Sets List of available values for *eOrderBy*
     * @param {Object.<String, String>} a_OrderBy List of available values for *eOrderBy*
     */
    setAOrderBy(a_OrderBy) {
        this['a_OrderBy'] = a_OrderBy;
    }

}

/**
 * @member {module:eZmaxAPI/model/CommonResponseFilter} a_Filter
 */
CommonResponseObjDebugPayloadGetListAllOf.prototype['a_Filter'] = undefined;

/**
 * List of available values for *eOrderBy*
 * @member {Object.<String, String>} a_OrderBy
 */
CommonResponseObjDebugPayloadGetListAllOf.prototype['a_OrderBy'] = undefined;






export default CommonResponseObjDebugPayloadGetListAllOf;

