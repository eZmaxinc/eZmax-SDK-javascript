/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldertypeGetAutocompleteV2ResponseMPayload from './EzsignfoldertypeGetAutocompleteV2ResponseMPayload';

/**
 * The EzsignfoldertypeGetAutocompleteV2ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseAllOf
 * @version 1.1.16
 */
class EzsignfoldertypeGetAutocompleteV2ResponseAllOf {
    /**
     * Constructs a new <code>EzsignfoldertypeGetAutocompleteV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        EzsignfoldertypeGetAutocompleteV2ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>EzsignfoldertypeGetAutocompleteV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseAllOf} The populated <code>EzsignfoldertypeGetAutocompleteV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetAutocompleteV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = EzsignfoldertypeGetAutocompleteV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload} mPayload
 */
EzsignfoldertypeGetAutocompleteV2ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignfoldertypeGetAutocompleteV2ResponseAllOf;

