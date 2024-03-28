/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfoldertypeRequestCompound from './EzsignfoldertypeRequestCompound';

/**
 * The EzsignfoldertypeEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignfoldertypeEditObjectV1Request
 * @version 1.2.0
 */
class EzsignfoldertypeEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignfoldertypeEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignfoldertype/{pkiEzsignfoldertypeID}
     * @alias module:eZmaxAPI/model/EzsignfoldertypeEditObjectV1Request
     * @param objEzsignfoldertype {module:eZmaxAPI/model/EzsignfoldertypeRequestCompound} 
     */
    constructor(objEzsignfoldertype) { 
        
        EzsignfoldertypeEditObjectV1Request.initialize(this, objEzsignfoldertype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfoldertype) { 
        obj['objEzsignfoldertype'] = objEzsignfoldertype;
    }

    /**
     * Constructs a <code>EzsignfoldertypeEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeEditObjectV1Request} The populated <code>EzsignfoldertypeEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignfoldertype')) {
                obj['objEzsignfoldertype'] = EzsignfoldertypeRequestCompound.constructFromObject(data['objEzsignfoldertype']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldertypeEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldertypeEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldertypeEditObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignfoldertype`
        if (data['objEzsignfoldertype']) { // data not null
          EzsignfoldertypeRequestCompound.validateJSON(data['objEzsignfoldertype']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfoldertypeRequestCompound}
     */
    getObjEzsignfoldertype() {
        return this.objEzsignfoldertype;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfoldertypeRequestCompound} objEzsignfoldertype
     */
    setObjEzsignfoldertype(objEzsignfoldertype) {
        this['objEzsignfoldertype'] = objEzsignfoldertype;
    }

}

EzsignfoldertypeEditObjectV1Request.RequiredProperties = ["objEzsignfoldertype"];

/**
 * @member {module:eZmaxAPI/model/EzsignfoldertypeRequestCompound} objEzsignfoldertype
 */
EzsignfoldertypeEditObjectV1Request.prototype['objEzsignfoldertype'] = undefined;






export default EzsignfoldertypeEditObjectV1Request;

