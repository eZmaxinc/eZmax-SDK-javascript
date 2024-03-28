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
import EzsigntemplatepackagemembershipRequest from './EzsigntemplatepackagemembershipRequest';

/**
 * The EzsigntemplatepackagemembershipRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound
 * @version 1.2.0
 */
class EzsigntemplatepackagemembershipRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipRequestCompound</code>.
     * A Ezsigntemplatepackagemembership Object and children
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequest
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     */
    constructor(fkiEzsigntemplatepackageID, fkiEzsigntemplateID) { 
        EzsigntemplatepackagemembershipRequest.initialize(this, fkiEzsigntemplatepackageID, fkiEzsigntemplateID);
        EzsigntemplatepackagemembershipRequestCompound.initialize(this, fkiEzsigntemplatepackageID, fkiEzsigntemplateID);
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
     * Constructs a <code>EzsigntemplatepackagemembershipRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipRequestCompound} The populated <code>EzsigntemplatepackagemembershipRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipRequestCompound();
            EzsigntemplatepackagemembershipRequest.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>EzsigntemplatepackagemembershipRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackagemembershipRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackagemembershipRequestCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackagemembership
     * minimum: 0
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

}

EzsigntemplatepackagemembershipRequestCompound.RequiredProperties = ["fkiEzsigntemplatepackageID", "fkiEzsigntemplateID"];

/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} pkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagemembershipRequestCompound.prototype['pkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagemembershipRequestCompound.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatepackagemembershipRequestCompound.prototype['fkiEzsigntemplateID'] = undefined;


// Implement EzsigntemplatepackagemembershipRequest interface:
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




export default EzsigntemplatepackagemembershipRequestCompound;

