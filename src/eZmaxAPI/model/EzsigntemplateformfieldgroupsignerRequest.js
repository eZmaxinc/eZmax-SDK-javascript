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

/**
 * The EzsigntemplateformfieldgroupsignerRequest model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequest
 * @version 1.1.10
 */
class EzsigntemplateformfieldgroupsignerRequest {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupsignerRequest</code>.
     * A Ezsigntemplateformfieldgroupsigner Object
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequest
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     */
    constructor(fkiEzsigntemplatesignerID) { 
        
        EzsigntemplateformfieldgroupsignerRequest.initialize(this, fkiEzsigntemplatesignerID);
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
     * Constructs a <code>EzsigntemplateformfieldgroupsignerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupsignerRequest} The populated <code>EzsigntemplateformfieldgroupsignerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupsignerRequest();

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






export default EzsigntemplateformfieldgroupsignerRequest;

