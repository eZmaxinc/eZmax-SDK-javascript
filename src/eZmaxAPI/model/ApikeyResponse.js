/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don't waste too much time looking for it. Contact support-api@ezmax.ca, we're here to help. We are developpers so we know programmers don't like bad documentation. If you don't find what you need in the documentation, let us know, we'll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.27
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAudit from './CommonAudit';
import MultilingualApikeyDescription from './MultilingualApikeyDescription';

/**
 * The ApikeyResponse model module.
 * @module eZmaxAPI/model/ApikeyResponse
 * @version 1.0.27
 */
class ApikeyResponse {
    /**
     * Constructs a new <code>ApikeyResponse</code>.
     * An Apikey Object
     * @alias module:eZmaxAPI/model/ApikeyResponse
     */
    constructor() { 
        
        ApikeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['objApikeyDescription'] = objApikeyDescription;
        obj['pkiApikeyID'] = pkiApikeyID;
        obj['objAudit'] = objAudit;
    }

    /**
     * Constructs a <code>ApikeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyResponse} The populated <code>ApikeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyResponse();

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






export default ApikeyResponse;

