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
 * The EzsignfoldersignerassociationCreateObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload
 * @version 1.1.15
 */
class EzsignfoldersignerassociationCreateObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateObjectV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsignfoldersignerassociation
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload
     * @param a_pkiEzsignfoldersignerassociationID {Array.<Number>} An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    constructor(a_pkiEzsignfoldersignerassociationID) { 
        
        EzsignfoldersignerassociationCreateObjectV2ResponseMPayload.initialize(this, a_pkiEzsignfoldersignerassociationID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsignfoldersignerassociationID) { 
        obj['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationCreateObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV2ResponseMPayload} The populated <code>EzsignfoldersignerassociationCreateObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateObjectV2ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsignfoldersignerassociationID')) {
                obj['a_pkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['a_pkiEzsignfoldersignerassociationID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * Returns An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @return {Array.<Number>}
     */
    getAPkiEzsignfoldersignerassociationID() {
        return this.a_pkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     * @param {Array.<Number>} a_pkiEzsignfoldersignerassociationID An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
     */
    setAPkiEzsignfoldersignerassociationID(a_pkiEzsignfoldersignerassociationID) {
        this['a_pkiEzsignfoldersignerassociationID'] = a_pkiEzsignfoldersignerassociationID;
    }

}

/**
 * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
 * @member {Array.<Number>} a_pkiEzsignfoldersignerassociationID
 */
EzsignfoldersignerassociationCreateObjectV2ResponseMPayload.prototype['a_pkiEzsignfoldersignerassociationID'] = undefined;






export default EzsignfoldersignerassociationCreateObjectV2ResponseMPayload;

