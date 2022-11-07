/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplateListElement from './EzsigntemplateListElement';

/**
 * The EzsigntemplateGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayloadAllOf
 * @version 1.1.15
 */
class EzsigntemplateGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>EzsigntemplateGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayloadAllOf
     * @param a_objEzsigntemplate {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} 
     */
    constructor(a_objEzsigntemplate) { 
        
        EzsigntemplateGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsigntemplate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplate) { 
        obj['a_objEzsigntemplate'] = a_objEzsigntemplate;
    }

    /**
     * Constructs a <code>EzsigntemplateGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateGetListV1ResponseMPayloadAllOf} The populated <code>EzsigntemplateGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objEzsigntemplate')) {
                obj['a_objEzsigntemplate'] = ApiClient.convertToType(data['a_objEzsigntemplate'], [EzsigntemplateListElement]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>}
     */
    getAObjEzsigntemplate() {
        return this.a_objEzsigntemplate;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} a_objEzsigntemplate
     */
    setAObjEzsigntemplate(a_objEzsigntemplate) {
        this['a_objEzsigntemplate'] = a_objEzsigntemplate;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateListElement>} a_objEzsigntemplate
 */
EzsigntemplateGetListV1ResponseMPayloadAllOf.prototype['a_objEzsigntemplate'] = undefined;






export default EzsigntemplateGetListV1ResponseMPayloadAllOf;

