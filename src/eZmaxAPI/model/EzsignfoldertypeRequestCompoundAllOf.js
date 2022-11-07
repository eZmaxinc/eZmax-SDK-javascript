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

/**
 * The EzsignfoldertypeRequestCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldertypeRequestCompoundAllOf
 * @version 1.1.15
 */
class EzsignfoldertypeRequestCompoundAllOf {
    /**
     * Constructs a new <code>EzsignfoldertypeRequestCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundAllOf
     */
    constructor() { 
        
        EzsignfoldertypeRequestCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldertypeRequestCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundAllOf} The populated <code>EzsignfoldertypeRequestCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeRequestCompoundAllOf();

            if (data.hasOwnProperty('a_fkiUserIDSigned')) {
                obj['a_fkiUserIDSigned'] = ApiClient.convertToType(data['a_fkiUserIDSigned'], ['Number']);
            }
            if (data.hasOwnProperty('a_fkiUserIDSummary')) {
                obj['a_fkiUserIDSummary'] = ApiClient.convertToType(data['a_fkiUserIDSummary'], ['Number']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<Number>}
     */
    getAFkiUserIDSigned() {
        return this.a_fkiUserIDSigned;
    }

    /**
     * @param {Array.<Number>} a_fkiUserIDSigned
     */
    setAFkiUserIDSigned(a_fkiUserIDSigned) {
        this['a_fkiUserIDSigned'] = a_fkiUserIDSigned;
    }
/**
     * @return {Array.<Number>}
     */
    getAFkiUserIDSummary() {
        return this.a_fkiUserIDSummary;
    }

    /**
     * @param {Array.<Number>} a_fkiUserIDSummary
     */
    setAFkiUserIDSummary(a_fkiUserIDSummary) {
        this['a_fkiUserIDSummary'] = a_fkiUserIDSummary;
    }

}

/**
 * @member {Array.<Number>} a_fkiUserIDSigned
 */
EzsignfoldertypeRequestCompoundAllOf.prototype['a_fkiUserIDSigned'] = undefined;

/**
 * @member {Array.<Number>} a_fkiUserIDSummary
 */
EzsignfoldertypeRequestCompoundAllOf.prototype['a_fkiUserIDSummary'] = undefined;






export default EzsignfoldertypeRequestCompoundAllOf;

