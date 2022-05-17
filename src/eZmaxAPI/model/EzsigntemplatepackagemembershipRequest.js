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
 * The EzsigntemplatepackagemembershipRequest model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipRequest
 * @version 1.1.7
 */
class EzsigntemplatepackagemembershipRequest {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipRequest</code>.
     * A Ezsigntemplatepackagemembership Object
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequest
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     */
    constructor(fkiEzsigntemplatepackageID, fkiEzsigntemplateID) { 
        
        EzsigntemplatepackagemembershipRequest.initialize(this, fkiEzsigntemplatepackageID, fkiEzsigntemplateID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplatepackageID, fkiEzsigntemplateID) { 
        obj['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequest} The populated <code>EzsigntemplatepackagemembershipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipRequest();

            if (data.hasOwnProperty('pkiEzsigntemplatepackagemembershipID')) {
                obj['pkiEzsigntemplatepackagemembershipID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagemembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagemembership
     * @return {Number}
     */
    getPkiEzsigntemplatepackagemembershipID() {
        return this.pkiEzsigntemplatepackagemembershipID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagemembership
     * @param {Number} pkiEzsigntemplatepackagemembershipID The unique ID of the Ezsigntemplatepackagemembership
     */
    setPkiEzsigntemplatepackagemembershipID(pkiEzsigntemplatepackagemembershipID) {
        this['pkiEzsigntemplatepackagemembershipID'] = pkiEzsigntemplatepackagemembershipID;
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
     * Returns The unique ID of the Ezsigntemplate
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

}

/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} pkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagemembershipRequest.prototype['pkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagemembershipRequest.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatepackagemembershipRequest.prototype['fkiEzsigntemplateID'] = undefined;






export default EzsigntemplatepackagemembershipRequest;

