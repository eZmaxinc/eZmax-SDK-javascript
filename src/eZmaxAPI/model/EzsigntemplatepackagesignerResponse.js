/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
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
 * @version 1.1.7
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
     * Returns The unique ID of the Ezsigntemplatepackagesigner
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

