/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderRequestCompound from './EzsignfolderRequestCompound';

/**
 * The EzsignfolderCreateObjectV2Request model module.
 * @module eZmaxAPI/model/EzsignfolderCreateObjectV2Request
 * @version 1.1.5
 */
class EzsignfolderCreateObjectV2Request {
    /**
     * Constructs a new <code>EzsignfolderCreateObjectV2Request</code>.
     * Request for the /2/object/ezsignfolder/createObject API Request
     * @alias module:eZmaxAPI/model/EzsignfolderCreateObjectV2Request
     * @param a_objEzsignfolder {Array.<module:eZmaxAPI/model/EzsignfolderRequestCompound>} 
     */
    constructor(a_objEzsignfolder) { 
        
        EzsignfolderCreateObjectV2Request.initialize(this, a_objEzsignfolder);
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
     * Constructs a <code>EzsignfolderCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderCreateObjectV2Request} The populated <code>EzsignfolderCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderCreateObjectV2Request();

            if (data.hasOwnProperty('a_objEzsignfolder')) {
                obj['a_objEzsignfolder'] = ApiClient.convertToType(data['a_objEzsignfolder'], [EzsignfolderRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfolderRequestCompound>}
     */
    getAObjEzsignfolder() {
        return this.a_objEzsignfolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfolderRequestCompound>} a_objEzsignfolder
     */
    setAObjEzsignfolder(a_objEzsignfolder) {
        this['a_objEzsignfolder'] = a_objEzsignfolder;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfolderRequestCompound>} a_objEzsignfolder
 */
EzsignfolderCreateObjectV2Request.prototype['a_objEzsignfolder'] = undefined;






export default EzsignfolderCreateObjectV2Request;

