/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzmaxinvoicingGetAutocompleteV2ResponseMPayload from './EzmaxinvoicingGetAutocompleteV2ResponseMPayload';

/**
 * The EzmaxinvoicingGetAutocompleteV2ResponseAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseAllOf
 * @version 1.1.12
 */
class EzmaxinvoicingGetAutocompleteV2ResponseAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingGetAutocompleteV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzmaxinvoicingGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzmaxinvoicingGetAutocompleteV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseAllOf} The populated <code>EzmaxinvoicingGetAutocompleteV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingGetAutocompleteV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzmaxinvoicingGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzmaxinvoicingGetAutocompleteV2ResponseMPayload} mPayload
 */
EzmaxinvoicingGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;






export default EzmaxinvoicingGetAutocompleteV2ResponseAllOf;

