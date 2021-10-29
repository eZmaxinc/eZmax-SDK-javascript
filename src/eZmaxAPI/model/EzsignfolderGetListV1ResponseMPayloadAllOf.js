/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderListElement from './EzsignfolderListElement';

/**
 * The EzsignfolderGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayloadAllOf
 * @version 1.1.3
 */
class EzsignfolderGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>EzsignfolderGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayloadAllOf
     * @param a_objEzsignfolder {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} 
     */
    constructor(a_objEzsignfolder) { 
        
        EzsignfolderGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsignfolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfolder) { 
        obj['a_objEzsignfolder'] = a_objEzsignfolder;
    }

    /**
     * Constructs a <code>EzsignfolderGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetListV1ResponseMPayloadAllOf} The populated <code>EzsignfolderGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objEzsignfolder')) {
                obj['a_objEzsignfolder'] = ApiClient.convertToType(data['a_objEzsignfolder'], [EzsignfolderListElement]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfolderListElement>}
     */
    getAObjEzsignfolder() {
        return this.a_objEzsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} a_objEzsignfolder
     */
    setAObjEzsignfolder(a_objEzsignfolder) {
        this['a_objEzsignfolder'] = a_objEzsignfolder;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfolderListElement>} a_objEzsignfolder
 */
EzsignfolderGetListV1ResponseMPayloadAllOf.prototype['a_objEzsignfolder'] = undefined;






export default EzsignfolderGetListV1ResponseMPayloadAllOf;

