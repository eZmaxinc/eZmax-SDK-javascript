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
import EzsignfoldertypeAutocompleteElementResponse from './EzsignfoldertypeAutocompleteElementResponse';

/**
 * The EzsignfoldertypeGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload
 * @version 1.1.14
 */
class EzsignfoldertypeGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldertypeGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsignfoldertype/getAutocomplete
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload
     * @param a_objEzsignfoldertype {Array.<module:eZmaxAPI/model/EzsignfoldertypeAutocompleteElementResponse>} An array of Ezsignfoldertype autocomplete element response.
     */
    constructor(a_objEzsignfoldertype) { 
        
        EzsignfoldertypeGetAutocompleteV2ResponseMPayload.initialize(this, a_objEzsignfoldertype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldertype) { 
        obj['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
    }

    /**
     * Constructs a <code>EzsignfoldertypeGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetAutocompleteV2ResponseMPayload} The populated <code>EzsignfoldertypeGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignfoldertype')) {
                obj['a_objEzsignfoldertype'] = ApiClient.convertToType(data['a_objEzsignfoldertype'], [EzsignfoldertypeAutocompleteElementResponse]);
            }
        }
        return obj;
    }

/**
     * Returns An array of Ezsignfoldertype autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldertypeAutocompleteElementResponse>}
     */
    getAObjEzsignfoldertype() {
        return this.a_objEzsignfoldertype;
    }

    /**
     * Sets An array of Ezsignfoldertype autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldertypeAutocompleteElementResponse>} a_objEzsignfoldertype An array of Ezsignfoldertype autocomplete element response.
     */
    setAObjEzsignfoldertype(a_objEzsignfoldertype) {
        this['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
    }

}

/**
 * An array of Ezsignfoldertype autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldertypeAutocompleteElementResponse>} a_objEzsignfoldertype
 */
EzsignfoldertypeGetAutocompleteV2ResponseMPayload.prototype['a_objEzsignfoldertype'] = undefined;






export default EzsignfoldertypeGetAutocompleteV2ResponseMPayload;

