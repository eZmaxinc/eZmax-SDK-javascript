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
import MultilingualSubnetDescription from './MultilingualSubnetDescription';

/**
 * The SubnetRequest model module.
 * @module eZmaxAPI/model/SubnetRequest
 * @version 1.2.0
 */
class SubnetRequest {
    /**
     * Constructs a new <code>SubnetRequest</code>.
     * A Subnet Object
     * @alias module:eZmaxAPI/model/SubnetRequest
     * @param objSubnetDescription {module:eZmaxAPI/model/MultilingualSubnetDescription} 
     * @param iSubnetNetwork {Number} The network of the Subnet in integer form. For example 8.8.8.0 would be 134744064
     * @param iSubnetMask {Number} The mask of the Subnet  in integer form. For example 255.255.255.0 would be 4294967040
     */
    constructor(objSubnetDescription, iSubnetNetwork, iSubnetMask) { 
        
        SubnetRequest.initialize(this, objSubnetDescription, iSubnetNetwork, iSubnetMask);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objSubnetDescription, iSubnetNetwork, iSubnetMask) { 
        obj['objSubnetDescription'] = objSubnetDescription;
        obj['iSubnetNetwork'] = iSubnetNetwork;
        obj['iSubnetMask'] = iSubnetMask;
    }

    /**
     * Constructs a <code>SubnetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/SubnetRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/SubnetRequest} The populated <code>SubnetRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubnetRequest();

            if (data.hasOwnProperty('pkiSubnetID')) {
                obj['pkiSubnetID'] = ApiClient.convertToType(data['pkiSubnetID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyID')) {
                obj['fkiApikeyID'] = ApiClient.convertToType(data['fkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('objSubnetDescription')) {
                obj['objSubnetDescription'] = MultilingualSubnetDescription.constructFromObject(data['objSubnetDescription']);
            }
            if (data.hasOwnProperty('iSubnetNetwork')) {
                obj['iSubnetNetwork'] = ApiClient.convertToType(data['iSubnetNetwork'], 'Number');
            }
            if (data.hasOwnProperty('iSubnetMask')) {
                obj['iSubnetMask'] = ApiClient.convertToType(data['iSubnetMask'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubnetRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubnetRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubnetRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objSubnetDescription`
        if (data['objSubnetDescription']) { // data not null
          MultilingualSubnetDescription.validateJSON(data['objSubnetDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Subnet
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiSubnetID() {
        return this.pkiSubnetID;
    }

    /**
     * Sets The unique ID of the Subnet
     * @param {Number} pkiSubnetID The unique ID of the Subnet
     */
    setPkiSubnetID(pkiSubnetID) {
        this['pkiSubnetID'] = pkiSubnetID;
    }
/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }
/**
     * Returns The unique ID of the Apikey
     * minimum: 0
     * @return {Number}
     */
    getFkiApikeyID() {
        return this.fkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyID The unique ID of the Apikey
     */
    setFkiApikeyID(fkiApikeyID) {
        this['fkiApikeyID'] = fkiApikeyID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualSubnetDescription}
     */
    getObjSubnetDescription() {
        return this.objSubnetDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualSubnetDescription} objSubnetDescription
     */
    setObjSubnetDescription(objSubnetDescription) {
        this['objSubnetDescription'] = objSubnetDescription;
    }
/**
     * Returns The network of the Subnet in integer form. For example 8.8.8.0 would be 134744064
     * minimum: 0
     * maximum: 4294967295
     * @return {Number}
     */
    getISubnetNetwork() {
        return this.iSubnetNetwork;
    }

    /**
     * Sets The network of the Subnet in integer form. For example 8.8.8.0 would be 134744064
     * @param {Number} iSubnetNetwork The network of the Subnet in integer form. For example 8.8.8.0 would be 134744064
     */
    setISubnetNetwork(iSubnetNetwork) {
        this['iSubnetNetwork'] = iSubnetNetwork;
    }
/**
     * Returns The mask of the Subnet  in integer form. For example 255.255.255.0 would be 4294967040
     * minimum: 0
     * maximum: 4294967295
     * @return {Number}
     */
    getISubnetMask() {
        return this.iSubnetMask;
    }

    /**
     * Sets The mask of the Subnet  in integer form. For example 255.255.255.0 would be 4294967040
     * @param {Number} iSubnetMask The mask of the Subnet  in integer form. For example 255.255.255.0 would be 4294967040
     */
    setISubnetMask(iSubnetMask) {
        this['iSubnetMask'] = iSubnetMask;
    }

}

SubnetRequest.RequiredProperties = ["objSubnetDescription", "iSubnetNetwork", "iSubnetMask"];

/**
 * The unique ID of the Subnet
 * @member {Number} pkiSubnetID
 */
SubnetRequest.prototype['pkiSubnetID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
SubnetRequest.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
SubnetRequest.prototype['fkiApikeyID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualSubnetDescription} objSubnetDescription
 */
SubnetRequest.prototype['objSubnetDescription'] = undefined;

/**
 * The network of the Subnet in integer form. For example 8.8.8.0 would be 134744064
 * @member {Number} iSubnetNetwork
 */
SubnetRequest.prototype['iSubnetNetwork'] = undefined;

/**
 * The mask of the Subnet  in integer form. For example 255.255.255.0 would be 4294967040
 * @member {Number} iSubnetMask
 */
SubnetRequest.prototype['iSubnetMask'] = undefined;






export default SubnetRequest;

