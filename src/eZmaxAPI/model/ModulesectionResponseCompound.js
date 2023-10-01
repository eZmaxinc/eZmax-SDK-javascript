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
import ModulesectionResponse from './ModulesectionResponse';
import PermissionResponseCompound from './PermissionResponseCompound';

/**
 * The ModulesectionResponseCompound model module.
 * @module eZmaxAPI/model/ModulesectionResponseCompound
 * @version 1.2.0
 */
class ModulesectionResponseCompound {
    /**
     * Constructs a new <code>ModulesectionResponseCompound</code>.
     * A Modulesection Object
     * @alias module:eZmaxAPI/model/ModulesectionResponseCompound
     * @implements module:eZmaxAPI/model/ModulesectionResponse
     * @param pkiModulesectionID {Number} The unique ID of the Modulesection
     * @param fkiModuleID {Number} The unique ID of the Module
     * @param sModulesectionInternalname {String} The Internal name of the Module section.
     * @param sModulesectionNameX {String} The Name of the Modulesection in the language of the requester
     */
    constructor(pkiModulesectionID, fkiModuleID, sModulesectionInternalname, sModulesectionNameX) { 
        ModulesectionResponse.initialize(this, pkiModulesectionID, fkiModuleID, sModulesectionInternalname, sModulesectionNameX);
        ModulesectionResponseCompound.initialize(this, pkiModulesectionID, fkiModuleID, sModulesectionInternalname, sModulesectionNameX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiModulesectionID, fkiModuleID, sModulesectionInternalname, sModulesectionNameX) { 
        obj['pkiModulesectionID'] = pkiModulesectionID;
        obj['fkiModuleID'] = fkiModuleID;
        obj['sModulesectionInternalname'] = sModulesectionInternalname;
        obj['sModulesectionNameX'] = sModulesectionNameX;
    }

    /**
     * Constructs a <code>ModulesectionResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ModulesectionResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ModulesectionResponseCompound} The populated <code>ModulesectionResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModulesectionResponseCompound();
            ModulesectionResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiModulesectionID')) {
                obj['pkiModulesectionID'] = ApiClient.convertToType(data['pkiModulesectionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModuleID')) {
                obj['fkiModuleID'] = ApiClient.convertToType(data['fkiModuleID'], 'Number');
            }
            if (data.hasOwnProperty('sModulesectionInternalname')) {
                obj['sModulesectionInternalname'] = ApiClient.convertToType(data['sModulesectionInternalname'], 'String');
            }
            if (data.hasOwnProperty('sModulesectionNameX')) {
                obj['sModulesectionNameX'] = ApiClient.convertToType(data['sModulesectionNameX'], 'String');
            }
            if (data.hasOwnProperty('a_objPermission')) {
                obj['a_objPermission'] = ApiClient.convertToType(data['a_objPermission'], [PermissionResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModulesectionResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModulesectionResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ModulesectionResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sModulesectionInternalname'] && !(typeof data['sModulesectionInternalname'] === 'string' || data['sModulesectionInternalname'] instanceof String)) {
            throw new Error("Expected the field `sModulesectionInternalname` to be a primitive type in the JSON string but got " + data['sModulesectionInternalname']);
        }
        // ensure the json data is a string
        if (data['sModulesectionNameX'] && !(typeof data['sModulesectionNameX'] === 'string' || data['sModulesectionNameX'] instanceof String)) {
            throw new Error("Expected the field `sModulesectionNameX` to be a primitive type in the JSON string but got " + data['sModulesectionNameX']);
        }
        if (data['a_objPermission']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objPermission'])) {
                throw new Error("Expected the field `a_objPermission` to be an array in the JSON data but got " + data['a_objPermission']);
            }
            // validate the optional field `a_objPermission` (array)
            for (const item of data['a_objPermission']) {
                PermissionResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Modulesection
     * minimum: 0
     * @return {Number}
     */
    getPkiModulesectionID() {
        return this.pkiModulesectionID;
    }

    /**
     * Sets The unique ID of the Modulesection
     * @param {Number} pkiModulesectionID The unique ID of the Modulesection
     */
    setPkiModulesectionID(pkiModulesectionID) {
        this['pkiModulesectionID'] = pkiModulesectionID;
    }
/**
     * Returns The unique ID of the Module
     * minimum: 0
     * @return {Number}
     */
    getFkiModuleID() {
        return this.fkiModuleID;
    }

    /**
     * Sets The unique ID of the Module
     * @param {Number} fkiModuleID The unique ID of the Module
     */
    setFkiModuleID(fkiModuleID) {
        this['fkiModuleID'] = fkiModuleID;
    }
/**
     * Returns The Internal name of the Module section.
     * @return {String}
     */
    getSModulesectionInternalname() {
        return this.sModulesectionInternalname;
    }

    /**
     * Sets The Internal name of the Module section.
     * @param {String} sModulesectionInternalname The Internal name of the Module section.
     */
    setSModulesectionInternalname(sModulesectionInternalname) {
        this['sModulesectionInternalname'] = sModulesectionInternalname;
    }
/**
     * Returns The Name of the Modulesection in the language of the requester
     * @return {String}
     */
    getSModulesectionNameX() {
        return this.sModulesectionNameX;
    }

    /**
     * Sets The Name of the Modulesection in the language of the requester
     * @param {String} sModulesectionNameX The Name of the Modulesection in the language of the requester
     */
    setSModulesectionNameX(sModulesectionNameX) {
        this['sModulesectionNameX'] = sModulesectionNameX;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/PermissionResponseCompound>}
     */
    getAObjPermission() {
        return this.a_objPermission;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/PermissionResponseCompound>} a_objPermission
     */
    setAObjPermission(a_objPermission) {
        this['a_objPermission'] = a_objPermission;
    }

}

ModulesectionResponseCompound.RequiredProperties = ["pkiModulesectionID", "fkiModuleID", "sModulesectionInternalname", "sModulesectionNameX"];

/**
 * The unique ID of the Modulesection
 * @member {Number} pkiModulesectionID
 */
ModulesectionResponseCompound.prototype['pkiModulesectionID'] = undefined;

/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
ModulesectionResponseCompound.prototype['fkiModuleID'] = undefined;

/**
 * The Internal name of the Module section.
 * @member {String} sModulesectionInternalname
 */
ModulesectionResponseCompound.prototype['sModulesectionInternalname'] = undefined;

/**
 * The Name of the Modulesection in the language of the requester
 * @member {String} sModulesectionNameX
 */
ModulesectionResponseCompound.prototype['sModulesectionNameX'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/PermissionResponseCompound>} a_objPermission
 */
ModulesectionResponseCompound.prototype['a_objPermission'] = undefined;


// Implement ModulesectionResponse interface:
/**
 * The unique ID of the Modulesection
 * @member {Number} pkiModulesectionID
 */
ModulesectionResponse.prototype['pkiModulesectionID'] = undefined;
/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
ModulesectionResponse.prototype['fkiModuleID'] = undefined;
/**
 * The Internal name of the Module section.
 * @member {String} sModulesectionInternalname
 */
ModulesectionResponse.prototype['sModulesectionInternalname'] = undefined;
/**
 * The Name of the Modulesection in the language of the requester
 * @member {String} sModulesectionNameX
 */
ModulesectionResponse.prototype['sModulesectionNameX'] = undefined;




export default ModulesectionResponseCompound;

