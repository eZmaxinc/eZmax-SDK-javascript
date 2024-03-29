/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
 * The EzsignfoldersignerassociationEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Request
 * @version 1.1.18
 */
class EzsignfoldersignerassociationEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Request
     * @param objEzsignfoldersignerassociation {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} 
     */
    constructor(objEzsignfoldersignerassociation) { 
        
        EzsignfoldersignerassociationEditObjectV1Request.initialize(this, objEzsignfoldersignerassociation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfoldersignerassociation) { 
        obj['objEzsignfoldersignerassociation'] = objEzsignfoldersignerassociation;
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationEditObjectV1Request} The populated <code>EzsignfoldersignerassociationEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignfoldersignerassociation')) {
                obj['objEzsignfoldersignerassociation'] = EzsignfoldersignerassociationRequestCompound.constructFromObject(data['objEzsignfoldersignerassociation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldersignerassociationEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldersignerassociationEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldersignerassociationEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignfoldersignerassociation`
        if (data['objEzsignfoldersignerassociation']) { // data not null
          EzsignfoldersignerassociationRequestCompound.validateJSON(data['objEzsignfoldersignerassociation']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound}
     */
    getObjEzsignfoldersignerassociation() {
        return this.objEzsignfoldersignerassociation;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} objEzsignfoldersignerassociation
     */
    setObjEzsignfoldersignerassociation(objEzsignfoldersignerassociation) {
        this['objEzsignfoldersignerassociation'] = objEzsignfoldersignerassociation;
    }

}

EzsignfoldersignerassociationEditObjectV1Request.RequiredProperties = ["objEzsignfoldersignerassociation"];

/**
 * @member {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestCompound} objEzsignfoldersignerassociation
 */
EzsignfoldersignerassociationEditObjectV1Request.prototype['objEzsignfoldersignerassociation'] = undefined;






export default EzsignfoldersignerassociationEditObjectV1Request;

