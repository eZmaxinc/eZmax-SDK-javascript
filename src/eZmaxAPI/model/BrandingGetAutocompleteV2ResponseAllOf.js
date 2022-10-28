/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BrandingGetAutocompleteV2ResponseMPayload from './BrandingGetAutocompleteV2ResponseMPayload';

/**
 * The BrandingGetAutocompleteV2ResponseAllOf model module.
 * @module eZmaxAPI/model/BrandingGetAutocompleteV2ResponseAllOf
 * @version 1.1.13
 */
class BrandingGetAutocompleteV2ResponseAllOf {
    /**
     * Constructs a new <code>BrandingGetAutocompleteV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        BrandingGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>BrandingGetAutocompleteV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseAllOf} The populated <code>BrandingGetAutocompleteV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingGetAutocompleteV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = BrandingGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/BrandingGetAutocompleteV2ResponseMPayload} mPayload
 */
BrandingGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;






export default BrandingGetAutocompleteV2ResponseAllOf;

