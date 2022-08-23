/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldersignerassociationRequestCompound from './EzsignfoldersignerassociationRequestCompound';

/**
 * The EzsignfoldersignerassociationCreateObjectV2Request model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Request
 * @version 1.1.10
 */
class EzsignfoldersignerassociationCreateObjectV2Request {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateObjectV2Request</code>.
     * Request for POST /2/object/ezsignfoldersignerassociation
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Request
     * @param a_objEzsignfoldersignerassociation {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound>} 
     */
    constructor(a_objEzsignfoldersignerassociation) { 
        
        EzsignfoldersignerassociationCreateObjectV2Request.initialize(this, a_objEzsignfoldersignerassociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldersignerassociation) { 
        obj['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2Request} The populated <code>EzsignfoldersignerassociationCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateObjectV2Request();

            if (data.hasOwnProperty('a_objEzsignfoldersignerassociation')) {
                obj['a_objEzsignfoldersignerassociation'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociation'], [EzsignfoldersignerassociationRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound>}
     */
    getAObjEzsignfoldersignerassociation() {
        return this.a_objEzsignfoldersignerassociation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound>} a_objEzsignfoldersignerassociation
     */
    setAObjEzsignfoldersignerassociation(a_objEzsignfoldersignerassociation) {
        this['a_objEzsignfoldersignerassociation'] = a_objEzsignfoldersignerassociation;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound>} a_objEzsignfoldersignerassociation
 */
EzsignfoldersignerassociationCreateObjectV2Request.prototype['a_objEzsignfoldersignerassociation'] = undefined;






export default EzsignfoldersignerassociationCreateObjectV2Request;

