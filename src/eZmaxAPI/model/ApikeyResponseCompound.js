/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyResponse from './ApikeyResponse';
import CommonAudit from './CommonAudit';
import MultilingualApikeyDescription from './MultilingualApikeyDescription';

/**
 * The ApikeyResponseCompound model module.
 * @module eZmaxAPI/model/ApikeyResponseCompound
 * @version 1.1.12
 */
class ApikeyResponseCompound {
    /**
     * Constructs a new <code>ApikeyResponseCompound</code>.
     * An Apikey Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/ApikeyResponseCompound
     * @implements module:eZmaxAPI/model/ApikeyResponse
     * @param objApikeyDescription {module:eZmaxAPI/model/MultilingualApikeyDescription} 
     * @param pkiApikeyID {Number} The unique ID of the Apikey
     * @param objAudit {module:eZmaxAPI/model/CommonAudit} 
     */
    constructor(objApikeyDescription, pkiApikeyID, objAudit) { 
        ApikeyResponse.initialize(this, objApikeyDescription, pkiApikeyID, objAudit);
        ApikeyResponseCompound.initialize(this, objApikeyDescription, pkiApikeyID, objAudit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objApikeyDescription, pkiApikeyID, objAudit) { 
        obj['objApikeyDescription'] = objApikeyDescription;
        obj['pkiApikeyID'] = pkiApikeyID;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>ApikeyResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyResponseCompound} The populated <code>ApikeyResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyResponseCompound();
            ApikeyResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('objApikeyDescription')) {
                obj['objApikeyDescription'] = MultilingualApikeyDescription.constructFromObject(data['objApikeyDescription']);
            }
            if (data.hasOwnProperty('sComputedToken')) {
                obj['sComputedToken'] = ApiClient.convertToType(data['sComputedToken'], 'String');
            }
            if (data.hasOwnProperty('pkiApikeyID')) {
                obj['pkiApikeyID'] = ApiClient.convertToType(data['pkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('objAudit')) {
                obj['objAudit'] = CommonAudit.constructFromObject(data['objAudit']);
            }
        }
        return obj;
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
/**
     * Returns The secret token for the API key.  This will be returned only on creation.
     * @return {String}
     */
    getSComputedToken() {
        return this.sComputedToken;
    }

    /**
     * Sets The secret token for the API key.  This will be returned only on creation.
     * @param {String} sComputedToken The secret token for the API key.  This will be returned only on creation.
     */
    setSComputedToken(sComputedToken) {
        this['sComputedToken'] = sComputedToken;
    }
/**
     * Returns The unique ID of the Apikey
     * minimum: 0
     * @return {Number}
     */
    getPkiApikeyID() {
        return this.pkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} pkiApikeyID The unique ID of the Apikey
     */
    setPkiApikeyID(pkiApikeyID) {
        this['pkiApikeyID'] = pkiApikeyID;
    }
/**
     * @return {module:eZmaxAPI/model/CommonAudit}
     */
    getObjAudit() {
        return this.objAudit;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAudit} objAudit
     */
    setObjAudit(objAudit) {
        this['objAudit'] = objAudit;
    }

}

/**
 * @member {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
 */
ApikeyResponseCompound.prototype['objApikeyDescription'] = undefined;

/**
 * The secret token for the API key.  This will be returned only on creation.
 * @member {String} sComputedToken
 */
ApikeyResponseCompound.prototype['sComputedToken'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} pkiApikeyID
 */
ApikeyResponseCompound.prototype['pkiApikeyID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
ApikeyResponseCompound.prototype['objAudit'] = undefined;


// Implement ApikeyResponse interface:
/**
 * @member {module:eZmaxAPI/model/MultilingualApikeyDescription} objApikeyDescription
 */
ApikeyResponse.prototype['objApikeyDescription'] = undefined;
/**
 * The secret token for the API key.  This will be returned only on creation.
 * @member {String} sComputedToken
 */
ApikeyResponse.prototype['sComputedToken'] = undefined;
/**
 * The unique ID of the Apikey
 * @member {Number} pkiApikeyID
 */
ApikeyResponse.prototype['pkiApikeyID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/CommonAudit} objAudit
 */
ApikeyResponse.prototype['objAudit'] = undefined;




export default ApikeyResponseCompound;

