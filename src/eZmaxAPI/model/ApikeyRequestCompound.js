/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyRequest from './ApikeyRequest';
import MultilingualApikeyDescription from './MultilingualApikeyDescription';

/**
 * The ApikeyRequestCompound model module.
 * @module eZmaxAPI/model/ApikeyRequestCompound
 * @version 1.1.1
 */
class ApikeyRequestCompound {
    /**
     * Constructs a new <code>ApikeyRequestCompound</code>.
     * An Apikey Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/ApikeyRequestCompound
     * @implements module:eZmaxAPI/model/ApikeyRequest
     * @param fkiUserID {Number} The unique ID of the User
     * @param objApikeyDescription {module:eZmaxAPI/model/MultilingualApikeyDescription} 
     */
    constructor(fkiUserID, objApikeyDescription) { 
        ApikeyRequest.initialize(this, fkiUserID, objApikeyDescription);
        ApikeyRequestCompound.initialize(this, fkiUserID, objApikeyDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUserID, objApikeyDescription) { 
        obj['fkiUserID'] = fkiUserID;
        obj['objApikeyDescription'] = objApikeyDescription;
    }

    /**
     * Constructs a <code>ApikeyRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyRequestCompound} The populated <code>ApikeyRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyRequestCompound();
            ApikeyRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('objApikeyDescription')) {
                obj['objApikeyDescription'] = MultilingualApikeyDescription.constructFromObject(data['objApikeyDescription']);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the User
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
     * @return {module:eZmaxAPI/model/MultilingualApikeyDescription}
     */
    getObjApikeyDescription() {
        return this.objApikeyDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
     */
    setObjApikeyDescription(objApikeyDescription) {
        this['objApikeyDescription'] = objApikeyDescription;
    }

}

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
ApikeyRequestCompound.prototype['fkiUserID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
 */
ApikeyRequestCompound.prototype['objApikeyDescription'] = undefined;


// Implement ApikeyRequest interface:
/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
ApikeyRequest.prototype['fkiUserID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
 */
ApikeyRequest.prototype['objApikeyDescription'] = undefined;




export default ApikeyRequestCompound;

