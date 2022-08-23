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
import EzsignfoldersignerassociationRequest from './EzsignfoldersignerassociationRequest';
import EzsignfoldersignerassociationRequestCompound from './EzsignfoldersignerassociationRequestCompound';

/**
 * The EzsignfoldersignerassociationCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request
 * @version 1.1.10
 */
class EzsignfoldersignerassociationCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsignfoldersignerassociation
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request
     */
    constructor() { 
        
        EzsignfoldersignerassociationCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationCreateObjectV1Request} The populated <code>EzsignfoldersignerassociationCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationCreateObjectV1Request();

            if (data.hasOwnProperty('objEzsignfoldersignerassociation')) {
                obj['objEzsignfoldersignerassociation'] = EzsignfoldersignerassociationRequest.constructFromObject(data['objEzsignfoldersignerassociation']);
            }
            if (data.hasOwnProperty('objEzsignfoldersignerassociationCompound')) {
                obj['objEzsignfoldersignerassociationCompound'] = EzsignfoldersignerassociationRequestCompound.constructFromObject(data['objEzsignfoldersignerassociationCompound']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest}
     */
    getObjEzsignfoldersignerassociation() {
        return this.objEzsignfoldersignerassociation;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest} objEzsignfoldersignerassociation
     */
    setObjEzsignfoldersignerassociation(objEzsignfoldersignerassociation) {
        this['objEzsignfoldersignerassociation'] = objEzsignfoldersignerassociation;
    }
/**
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound}
     */
    getObjEzsignfoldersignerassociationCompound() {
        return this.objEzsignfoldersignerassociationCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} objEzsignfoldersignerassociationCompound
     */
    setObjEzsignfoldersignerassociationCompound(objEzsignfoldersignerassociationCompound) {
        this['objEzsignfoldersignerassociationCompound'] = objEzsignfoldersignerassociationCompound;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationRequest} objEzsignfoldersignerassociation
 */
EzsignfoldersignerassociationCreateObjectV1Request.prototype['objEzsignfoldersignerassociation'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} objEzsignfoldersignerassociationCompound
 */
EzsignfoldersignerassociationCreateObjectV1Request.prototype['objEzsignfoldersignerassociationCompound'] = undefined;






export default EzsignfoldersignerassociationCreateObjectV1Request;

