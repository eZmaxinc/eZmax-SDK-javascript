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

/**
 * The EzsigntemplatepackagesignerResponse model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignerResponse
 * @version 1.2.0
 */
class EzsigntemplatepackagesignerResponse {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignerResponse</code>.
     * A Ezsigntemplatepackagesigner Object
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignerResponse
     * @param pkiEzsigntemplatepackagesignerID {Number} The unique ID of the Ezsigntemplatepackagesigner
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param sEzsigntemplatepackagesignerDescription {String} The description of the Ezsigntemplatepackagesigner
     */
    constructor(pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription) { 
        
        EzsigntemplatepackagesignerResponse.initialize(this, pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackagesignerID, fkiEzsigntemplatepackageID, sEzsigntemplatepackagesignerDescription) { 
        obj['pkiEzsigntemplatepackagesignerID'] = pkiEzsigntemplatepackagesignerID;
        obj['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
        obj['sEzsigntemplatepackagesignerDescription'] = sEzsigntemplatepackagesignerDescription;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignerResponse} The populated <code>EzsigntemplatepackagesignerResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignerResponse();

            if (data.hasOwnProperty('pkiEzsigntemplatepackagesignerID')) {
                obj['pkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatepackagesignerDescription')) {
                obj['sEzsigntemplatepackagesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackagesignerDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatepackagesignerResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackagesignerResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackagesignerResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplatepackagesignerDescription'] && !(typeof data['sEzsigntemplatepackagesignerDescription'] === 'string' || data['sEzsigntemplatepackagesignerDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplatepackagesignerDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplatepackagesignerDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagesigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatepackagesignerID() {
        return this.pkiEzsigntemplatepackagesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesigner
     * @param {Number} pkiEzsigntemplatepackagesignerID The unique ID of the Ezsigntemplatepackagesigner
     */
    setPkiEzsigntemplatepackagesignerID(pkiEzsigntemplatepackagesignerID) {
        this['pkiEzsigntemplatepackagesignerID'] = pkiEzsigntemplatepackagesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackageID() {
        return this.fkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} fkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setFkiEzsigntemplatepackageID(fkiEzsigntemplatepackageID) {
        this['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
    }
/**
     * Returns The description of the Ezsigntemplatepackagesigner
     * @return {String}
     */
    getSEzsigntemplatepackagesignerDescription() {
        return this.sEzsigntemplatepackagesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatepackagesigner
     * @param {String} sEzsigntemplatepackagesignerDescription The description of the Ezsigntemplatepackagesigner
     */
    setSEzsigntemplatepackagesignerDescription(sEzsigntemplatepackagesignerDescription) {
        this['sEzsigntemplatepackagesignerDescription'] = sEzsigntemplatepackagesignerDescription;
    }

}

EzsigntemplatepackagesignerResponse.RequiredProperties = ["pkiEzsigntemplatepackagesignerID", "fkiEzsigntemplatepackageID", "sEzsigntemplatepackagesignerDescription"];

/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} pkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignerResponse.prototype['pkiEzsigntemplatepackagesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagesignerResponse.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The description of the Ezsigntemplatepackagesigner
 * @member {String} sEzsigntemplatepackagesignerDescription
 */
EzsigntemplatepackagesignerResponse.prototype['sEzsigntemplatepackagesignerDescription'] = undefined;






export default EzsigntemplatepackagesignerResponse;

