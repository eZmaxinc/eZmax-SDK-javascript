/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';
import EzsigntemplatepackagemembershipResponseCompound from './EzsigntemplatepackagemembershipResponseCompound';
import EzsigntemplatepackagesignermembershipResponseCompound from './EzsigntemplatepackagesignermembershipResponseCompound';

/**
 * The EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload
 * @version 1.1.16
 */
class EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID}
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompound
     * @param pkiEzsigntemplatepackagemembershipID {Number} The unique ID of the Ezsigntemplatepackagemembership
     * @param fkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param iEzsigntemplatepackagemembershipOrder {Number} The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
     * @param objEzsigntemplate {module:eZmaxAPI/model/EzsigntemplateResponseCompound} 
     * @param a_objEzsigntemplatepackagesignermembership {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} 
     */
    constructor(pkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackageID, fkiEzsigntemplateID, iEzsigntemplatepackagemembershipOrder, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership) { 
        EzsigntemplatepackagemembershipResponseCompound.initialize(this, pkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackageID, fkiEzsigntemplateID, iEzsigntemplatepackagemembershipOrder, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership);
        EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.initialize(this, pkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackageID, fkiEzsigntemplateID, iEzsigntemplatepackagemembershipOrder, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackagemembershipID, fkiEzsigntemplatepackageID, fkiEzsigntemplateID, iEzsigntemplatepackagemembershipOrder, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership) { 
        obj['pkiEzsigntemplatepackagemembershipID'] = pkiEzsigntemplatepackagemembershipID;
        obj['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
        obj['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
        obj['iEzsigntemplatepackagemembershipOrder'] = iEzsigntemplatepackagemembershipOrder;
        obj['objEzsigntemplate'] = objEzsigntemplate;
        obj['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload} The populated <code>EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload();
            EzsigntemplatepackagemembershipResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatepackagemembershipID')) {
                obj['pkiEzsigntemplatepackagemembershipID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackagemembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatepackagemembershipOrder')) {
                obj['iEzsigntemplatepackagemembershipOrder'] = ApiClient.convertToType(data['iEzsigntemplatepackagemembershipOrder'], 'Number');
            }
            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateResponseCompound.constructFromObject(data['objEzsigntemplate']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatepackagesignermembership')) {
                obj['a_objEzsigntemplatepackagesignermembership'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagesignermembership'], [EzsigntemplatepackagesignermembershipResponseCompound]);
            }
        }
        return obj;
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
/**
     * Returns The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
     * minimum: 1
     * @return {Number}
     */
    getIEzsigntemplatepackagemembershipOrder() {
        return this.iEzsigntemplatepackagemembershipOrder;
    }

    /**
     * Sets The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
     * @param {Number} iEzsigntemplatepackagemembershipOrder The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
     */
    setIEzsigntemplatepackagemembershipOrder(iEzsigntemplatepackagemembershipOrder) {
        this['iEzsigntemplatepackagemembershipOrder'] = iEzsigntemplatepackagemembershipOrder;
    }
/**
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompound}
     */
    getObjEzsigntemplate() {
        return this.objEzsigntemplate;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
     */
    setObjEzsigntemplate(objEzsigntemplate) {
        this['objEzsigntemplate'] = objEzsigntemplate;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>}
     */
    getAObjEzsigntemplatepackagesignermembership() {
        return this.a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} a_objEzsigntemplatepackagesignermembership
     */
    setAObjEzsigntemplatepackagesignermembership(a_objEzsigntemplatepackagesignermembership) {
        this['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} pkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['pkiEzsigntemplatepackagemembershipID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
 * @member {Number} iEzsigntemplatepackagemembershipOrder
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['iEzsigntemplatepackagemembershipOrder'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['objEzsigntemplate'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} a_objEzsigntemplatepackagesignermembership
 */
EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload.prototype['a_objEzsigntemplatepackagesignermembership'] = undefined;


// Implement EzsigntemplatepackagemembershipResponseCompound interface:
/**
 * The unique ID of the Ezsigntemplatepackagemembership
 * @member {Number} pkiEzsigntemplatepackagemembershipID
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['pkiEzsigntemplatepackagemembershipID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['fkiEzsigntemplatepackageID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The order in which the Ezsigntemplate will be imported when using an Ezsigntemplatepackage.
 * @member {Number} iEzsigntemplatepackagemembershipOrder
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['iEzsigntemplatepackagemembershipOrder'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['objEzsigntemplate'] = undefined;
/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} a_objEzsigntemplatepackagesignermembership
 */
EzsigntemplatepackagemembershipResponseCompound.prototype['a_objEzsigntemplatepackagesignermembership'] = undefined;




export default EzsigntemplatepackagemembershipGetObjectV1ResponseMPayload;

