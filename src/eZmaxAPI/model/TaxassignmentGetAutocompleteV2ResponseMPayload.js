/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TaxassignmentAutocompleteElementResponse from './TaxassignmentAutocompleteElementResponse';

/**
 * The TaxassignmentGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/TaxassignmentGetAutocompleteV2ResponseMPayload
 * @version 1.1.11
 */
class TaxassignmentGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>TaxassignmentGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/taxassignment/getAutocomplete
     * @alias module:eZmaxAPI/model/TaxassignmentGetAutocompleteV2ResponseMPayload
     * @param a_objTaxassignment {Array.<module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse>} An array of Taxassignment autocomplete element response.
     */
    constructor(a_objTaxassignment) { 
        
        TaxassignmentGetAutocompleteV2ResponseMPayload.initialize(this, a_objTaxassignment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objTaxassignment) { 
        obj['a_objTaxassignment'] = a_objTaxassignment;
    }

    /**
     * Constructs a <code>TaxassignmentGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/TaxassignmentGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/TaxassignmentGetAutocompleteV2ResponseMPayload} The populated <code>TaxassignmentGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxassignmentGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objTaxassignment')) {
                obj['a_objTaxassignment'] = ApiClient.convertToType(data['a_objTaxassignment'], [TaxassignmentAutocompleteElementResponse]);
            }
        }
        return obj;
    }

/**
     * Returns An array of Taxassignment autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse>}
     */
    getAObjTaxassignment() {
        return this.a_objTaxassignment;
    }

    /**
     * Sets An array of Taxassignment autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse>} a_objTaxassignment An array of Taxassignment autocomplete element response.
     */
    setAObjTaxassignment(a_objTaxassignment) {
        this['a_objTaxassignment'] = a_objTaxassignment;
    }

}

/**
 * An array of Taxassignment autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse>} a_objTaxassignment
 */
TaxassignmentGetAutocompleteV2ResponseMPayload.prototype['a_objTaxassignment'] = undefined;






export default TaxassignmentGetAutocompleteV2ResponseMPayload;

