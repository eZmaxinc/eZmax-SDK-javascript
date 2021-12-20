/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldertypeListElement from './EzsignfoldertypeListElement';

/**
 * The EzsignfoldertypeGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayloadAllOf
 * @version 1.1.4
 */
class EzsignfoldertypeGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>EzsignfoldertypeGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayloadAllOf
     * @param a_objEzsignfoldertype {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} 
     */
    constructor(a_objEzsignfoldertype) { 
        
        EzsignfoldertypeGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignfoldertype);
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
     * Constructs a <code>EzsignfoldertypeGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeGetListV1ResponseMPayloadAllOf} The populated <code>EzsignfoldertypeGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objEzsignfoldertype')) {
                obj['a_objEzsignfoldertype'] = ApiClient.convertToType(data['a_objEzsignfoldertype'], [EzsignfoldertypeListElement]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>}
     */
    getAObjEzsignfoldertype() {
        return this.a_objEzsignfoldertype;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} a_objEzsignfoldertype
     */
    setAObjEzsignfoldertype(a_objEzsignfoldertype) {
        this['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldertypeListElement>} a_objEzsignfoldertype
 */
EzsignfoldertypeGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignfoldertype'] = undefined;






export default EzsignfoldertypeGetListV1ResponseMPayloadAllOf;

