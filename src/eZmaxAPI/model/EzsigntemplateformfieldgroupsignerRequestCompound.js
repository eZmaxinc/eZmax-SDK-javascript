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
import EzsigntemplateformfieldgroupsignerRequest from './EzsigntemplateformfieldgroupsignerRequest';

/**
 * The EzsigntemplateformfieldgroupsignerRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequestCompound
 * @version 1.1.18
 */
class EzsigntemplateformfieldgroupsignerRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupsignerRequestCompound</code>.
     * An Ezsigntemplateformfieldgroupsigner Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequest
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     */
    constructor(fkiEzsigntemplatesignerID) { 
        EzsigntemplateformfieldgroupsignerRequest.initialize(this, fkiEzsigntemplatesignerID);
        EzsigntemplateformfieldgroupsignerRequestCompound.initialize(this, fkiEzsigntemplatesignerID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplatesignerID) { 
        obj['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupsignerRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequestCompound} The populated <code>EzsigntemplateformfieldgroupsignerRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupsignerRequestCompound();
            EzsigntemplateformfieldgroupsignerRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplateformfieldgroupsignerID')) {
                obj['pkiEzsigntemplateformfieldgroupsignerID'] = ApiClient.convertToType(data['pkiEzsigntemplateformfieldgroupsignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateformfieldgroupsignerRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateformfieldgroupsignerRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateformfieldgroupsignerRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplateformfieldgroupsigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateformfieldgroupsignerID() {
        return this.pkiEzsigntemplateformfieldgroupsignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateformfieldgroupsigner
     * @param {Number} pkiEzsigntemplateformfieldgroupsignerID The unique ID of the Ezsigntemplateformfieldgroupsigner
     */
    setPkiEzsigntemplateformfieldgroupsignerID(pkiEzsigntemplateformfieldgroupsignerID) {
        this['pkiEzsigntemplateformfieldgroupsignerID'] = pkiEzsigntemplateformfieldgroupsignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatesignerID() {
        return this.fkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} fkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setFkiEzsigntemplatesignerID(fkiEzsigntemplatesignerID) {
        this['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }

}

EzsigntemplateformfieldgroupsignerRequestCompound.RequiredProperties = ["fkiEzsigntemplatesignerID"];

/**
 * The unique ID of the Ezsigntemplateformfieldgroupsigner
 * @member {Number} pkiEzsigntemplateformfieldgroupsignerID
 */
EzsigntemplateformfieldgroupsignerRequestCompound.prototype['pkiEzsigntemplateformfieldgroupsignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplateformfieldgroupsignerRequestCompound.prototype['fkiEzsigntemplatesignerID'] = undefined;


// Implement EzsigntemplateformfieldgroupsignerRequest interface:
/**
 * The unique ID of the Ezsigntemplateformfieldgroupsigner
 * @member {Number} pkiEzsigntemplateformfieldgroupsignerID
 */
EzsigntemplateformfieldgroupsignerRequest.prototype['pkiEzsigntemplateformfieldgroupsignerID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplateformfieldgroupsignerRequest.prototype['fkiEzsigntemplatesignerID'] = undefined;




export default EzsigntemplateformfieldgroupsignerRequestCompound;

