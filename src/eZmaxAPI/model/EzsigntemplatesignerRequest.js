/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatesignerRequest model module.
 * @module eZmaxAPI/model/EzsigntemplatesignerRequest
 * @version 1.1.8
 */
class EzsigntemplatesignerRequest {
    /**
     * Constructs a new <code>EzsigntemplatesignerRequest</code>.
     * A Ezsigntemplatesigner Object
     * @alias module:eZmaxAPI/model/EzsigntemplatesignerRequest
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param sEzsigntemplatesignerDescription {String} The description of the Ezsigntemplatesigner
     */
    constructor(fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        
        EzsigntemplatesignerRequest.initialize(this, fkiEzsigntemplateID, sEzsigntemplatesignerDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplateID, sEzsigntemplatesignerDescription) { 
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

    /**
     * Constructs a <code>EzsigntemplatesignerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignerRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignerRequest} The populated <code>EzsigntemplatesignerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignerRequest();

            if (data.hasOwnProperty('pkiEzsigntemplatesignerID')) {
                obj['pkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['pkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatesignerDescription')) {
                obj['sEzsigntemplatesignerDescription'] = ApiClient.convertToType(data['sEzsigntemplatesignerDescription'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatesigner
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatesignerID() {
        return this.pkiEzsigntemplatesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatesigner
     * @param {Number} pkiEzsigntemplatesignerID The unique ID of the Ezsigntemplatesigner
     */
    setPkiEzsigntemplatesignerID(pkiEzsigntemplatesignerID) {
        this['pkiEzsigntemplatesignerID'] = pkiEzsigntemplatesignerID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }
/**
     * Returns The description of the Ezsigntemplatesigner
     * @return {String}
     */
    getSEzsigntemplatesignerDescription() {
        return this.sEzsigntemplatesignerDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatesigner
     * @param {String} sEzsigntemplatesignerDescription The description of the Ezsigntemplatesigner
     */
    setSEzsigntemplatesignerDescription(sEzsigntemplatesignerDescription) {
        this['sEzsigntemplatesignerDescription'] = sEzsigntemplatesignerDescription;
    }

}

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} pkiEzsigntemplatesignerID
 */
EzsigntemplatesignerRequest.prototype['pkiEzsigntemplatesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatesignerRequest.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The description of the Ezsigntemplatesigner
 * @member {String} sEzsigntemplatesignerDescription
 */
EzsigntemplatesignerRequest.prototype['sEzsigntemplatesignerDescription'] = undefined;






export default EzsigntemplatesignerRequest;

