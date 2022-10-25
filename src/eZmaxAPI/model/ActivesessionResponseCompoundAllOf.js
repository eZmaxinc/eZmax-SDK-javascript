/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ActivesessionResponseCompoundApikey from './ActivesessionResponseCompoundApikey';
import ActivesessionResponseCompoundUser from './ActivesessionResponseCompoundUser';

/**
 * The ActivesessionResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/ActivesessionResponseCompoundAllOf
 * @version 1.1.11
 */
class ActivesessionResponseCompoundAllOf {
    /**
     * Constructs a new <code>ActivesessionResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/ActivesessionResponseCompoundAllOf
     * @param a_pkiPermissionID {Array.<Number>} An array of permissions granted to the user or api key
     * @param objUserReal {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} 
     * @param a_eModuleInternalname {Array.<String>} An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    constructor(a_pkiPermissionID, objUserReal, a_eModuleInternalname) { 
        
        ActivesessionResponseCompoundAllOf.initialize(this, a_pkiPermissionID, objUserReal, a_eModuleInternalname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiPermissionID, objUserReal, a_eModuleInternalname) { 
        obj['a_pkiPermissionID'] = a_pkiPermissionID;
        obj['objUserReal'] = objUserReal;
        obj['a_eModuleInternalname'] = a_eModuleInternalname;
    }

    /**
     * Constructs a <code>ActivesessionResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundAllOf} The populated <code>ActivesessionResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionResponseCompoundAllOf();

            if (data.hasOwnProperty('a_pkiPermissionID')) {
                obj['a_pkiPermissionID'] = ApiClient.convertToType(data['a_pkiPermissionID'], ['Number']);
            }
            if (data.hasOwnProperty('objUserReal')) {
                obj['objUserReal'] = ActivesessionResponseCompoundUser.constructFromObject(data['objUserReal']);
            }
            if (data.hasOwnProperty('objUserCloned')) {
                obj['objUserCloned'] = ActivesessionResponseCompoundUser.constructFromObject(data['objUserCloned']);
            }
            if (data.hasOwnProperty('objApikey')) {
                obj['objApikey'] = ActivesessionResponseCompoundApikey.constructFromObject(data['objApikey']);
            }
            if (data.hasOwnProperty('a_eModuleInternalname')) {
                obj['a_eModuleInternalname'] = ApiClient.convertToType(data['a_eModuleInternalname'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns An array of permissions granted to the user or api key
     * @return {Array.<Number>}
     */
    getAPkiPermissionID() {
        return this.a_pkiPermissionID;
    }

    /**
     * Sets An array of permissions granted to the user or api key
     * @param {Array.<Number>} a_pkiPermissionID An array of permissions granted to the user or api key
     */
    setAPkiPermissionID(a_pkiPermissionID) {
        this['a_pkiPermissionID'] = a_pkiPermissionID;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundUser}
     */
    getObjUserReal() {
        return this.objUserReal;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserReal
     */
    setObjUserReal(objUserReal) {
        this['objUserReal'] = objUserReal;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundUser}
     */
    getObjUserCloned() {
        return this.objUserCloned;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserCloned
     */
    setObjUserCloned(objUserCloned) {
        this['objUserCloned'] = objUserCloned;
    }
/**
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey}
     */
    getObjApikey() {
        return this.objApikey;
    }

    /**
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} objApikey
     */
    setObjApikey(objApikey) {
        this['objApikey'] = objApikey;
    }
/**
     * Returns An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @return {Array.<String>}
     */
    getAEModuleInternalname() {
        return this.a_eModuleInternalname;
    }

    /**
     * Sets An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     * @param {Array.<String>} a_eModuleInternalname An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
     */
    setAEModuleInternalname(a_eModuleInternalname) {
        this['a_eModuleInternalname'] = a_eModuleInternalname;
    }

}

/**
 * An array of permissions granted to the user or api key
 * @member {Array.<Number>} a_pkiPermissionID
 */
ActivesessionResponseCompoundAllOf.prototype['a_pkiPermissionID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserReal
 */
ActivesessionResponseCompoundAllOf.prototype['objUserReal'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundUser} objUserCloned
 */
ActivesessionResponseCompoundAllOf.prototype['objUserCloned'] = undefined;

/**
 * @member {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} objApikey
 */
ActivesessionResponseCompoundAllOf.prototype['objApikey'] = undefined;

/**
 * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
 * @member {Array.<String>} a_eModuleInternalname
 */
ActivesessionResponseCompoundAllOf.prototype['a_eModuleInternalname'] = undefined;






export default ActivesessionResponseCompoundAllOf;

