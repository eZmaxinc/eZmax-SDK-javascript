/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatepackagesignermembershipRequest model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequest
 * @version 1.1.14
 */
class EzsigntemplatepackagesignermembershipRequest {
    /**
     * Constructs a new <code>EzsigntemplatepackagesignermembershipRequest</code>.
     * A Ezsigntemplatepackagesignermembership Object
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequest
     * @param fkiEzsigntemplatepackagemembershipID {Number} The unique ID of the Ezsigntemplatepackagemembership
     * @param fkiEzsigntemplatepackagesignerID {Number} The unique ID of the Ezsigntemplatepackagesigner
     * @param fkiEzsigntemplatesignerID {Number} The unique ID of the Ezsigntemplatesigner
     */
    constructor(fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID) { 
        
        EzsigntemplatepackagesignermembershipRequest.initialize(this, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackagesignerID, fkiEzsigntemplatesignerID) { 
        obj['fkiEzsigntemplatepackagemembershipID'] = fkiEzsigntemplatepackagemembershipID;
        obj['fkiEzsigntemplatepackagesignerID'] = fkiEzsigntemplatepackagesignerID;
        obj['fkiEzsigntemplatesignerID'] = fkiEzsigntemplatesignerID;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagesignermembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipRequest} The populated <code>EzsigntemplatepackagesignermembershipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagesignermembershipRequest();

            if (data.hasOwnProperty('pkiEzsigntemplatepackagesignermembershipID')) {
                obj['pkiEzsigntemplatepackagesignermembershipID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagesignermembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackagemembershipID')) {
                obj['fkiEzsigntemplatepackagemembershipID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackagemembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackagesignerID')) {
                obj['fkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackagesignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatesignerID')) {
                obj['fkiEzsigntemplatesignerID'] = ApiClient.convertToType(data['fkiEzsigntemplatesignerID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatepackagesignermembershipCopy')) {
                obj['iEzsigntemplatepackagesignermembershipCopy'] = ApiClient.convertToType(data['iEzsigntemplatepackagesignermembershipCopy'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagesignermembership
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatepackagesignermembershipID() {
        return this.pkiEzsigntemplatepackagesignermembershipID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesignermembership
     * @param {Number} pkiEzsigntemplatepackagesignermembershipID The unique ID of the Ezsigntemplatepackagesignermembership
     */
    setPkiEzsigntemplatepackagesignermembershipID(pkiEzsigntemplatepackagesignermembershipID) {
        this['pkiEzsigntemplatepackagesignermembershipID'] = pkiEzsigntemplatepackagesignermembershipID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackagemembership
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackagemembershipID() {
        return this.fkiEzsigntemplatepackagemembershipID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagemembership
     * @param {Number} fkiEzsigntemplatepackagemembershipID The unique ID of the Ezsigntemplatepackagemembership
     */
    setFkiEzsigntemplatepackagemembershipID(fkiEzsigntemplatepackagemembershipID) {
        this['fkiEzsigntemplatepackagemembershipID'] = fkiEzsigntemplatepackagemembershipID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackagesigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackagesignerID() {
        return this.fkiEzsigntemplatepackagesignerID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackagesigner
     * @param {Number} fkiEzsigntemplatepackagesignerID The unique ID of the Ezsigntemplatepackagesigner
     */
    setFkiEzsigntemplatepackagesignerID(fkiEzsigntemplatepackagesignerID) {
        this['fkiEzsigntemplatepackagesignerID'] = fkiEzsigntemplatepackagesignerID;
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
/**
     * Returns The Copy number in case of multiple copies.
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatepackagesignermembershipCopy() {
        return this.iEzsigntemplatepackagesignermembershipCopy;
    }

    /**
     * Sets The Copy number in case of multiple copies.
     * @param {Number} iEzsigntemplatepackagesignermembershipCopy The Copy number in case of multiple copies.
     */
    setIEzsigntemplatepackagesignermembershipCopy(iEzsigntemplatepackagesignermembershipCopy) {
        this['iEzsigntemplatepackagesignermembershipCopy'] = iEzsigntemplatepackagesignermembershipCopy;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackagesignermembership
 * @member {Number} pkiEzsigntemplatepackagesignermembershipID
 */
EzsigntemplatepackagesignermembershipRequest.prototype['pkiEzsigntemplatepackagesignermembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} fkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagesignermembershipRequest.prototype['fkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackagesigner
 * @member {Number} fkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackagesignermembershipRequest.prototype['fkiEzsigntemplatepackagesignerID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatesigner
 * @member {Number} fkiEzsigntemplatesignerID
 */
EzsigntemplatepackagesignermembershipRequest.prototype['fkiEzsigntemplatesignerID'] = undefined;

/**
 * The Copy number in case of multiple copies.
 * @member {Number} iEzsigntemplatepackagesignermembershipCopy
 */
EzsigntemplatepackagesignermembershipRequest.prototype['iEzsigntemplatepackagesignermembershipCopy'] = undefined;






export default EzsigntemplatepackagesignermembershipRequest;

