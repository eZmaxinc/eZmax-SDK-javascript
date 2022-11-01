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
import DepartmentGetAutocompleteV2ResponseMPayload from './DepartmentGetAutocompleteV2ResponseMPayload';

/**
 * The DepartmentGetAutocompleteV2ResponseAllOf model module.
 * @module eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseAllOf
 * @version 1.1.14
 */
class DepartmentGetAutocompleteV2ResponseAllOf {
    /**
     * Constructs a new <code>DepartmentGetAutocompleteV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        DepartmentGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>DepartmentGetAutocompleteV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseAllOf} The populated <code>DepartmentGetAutocompleteV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DepartmentGetAutocompleteV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = DepartmentGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/DepartmentGetAutocompleteV2ResponseMPayload} mPayload
 */
DepartmentGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;






export default DepartmentGetAutocompleteV2ResponseAllOf;

