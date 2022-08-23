/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignfolderResponse from './EzsignfolderResponse';

/**
 * The WebhookEzsignFolderCompletedAllOf model module.
 * @module eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf
 * @version 1.1.10
 */
class WebhookEzsignFolderCompletedAllOf {
    /**
     * Constructs a new <code>WebhookEzsignFolderCompletedAllOf</code>.
     * @alias module:eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf
     * @param objEzsignfolder {module:eZmaxAPI/model/EzsignfolderResponse} 
     */
    constructor(objEzsignfolder) { 
        
        WebhookEzsignFolderCompletedAllOf.initialize(this, objEzsignfolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignfolder) { 
        obj['objEzsignfolder'] = objEzsignfolder;
    }

    /**
     * Constructs a <code>WebhookEzsignFolderCompletedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebhookEzsignFolderCompletedAllOf} The populated <code>WebhookEzsignFolderCompletedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEzsignFolderCompletedAllOf();

            if (data.hasOwnProperty('objEzsignfolder')) {
                obj['objEzsignfolder'] = EzsignfolderResponse.constructFromObject(data['objEzsignfolder']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignfolderResponse}
     */
    getObjEzsignfolder() {
        return this.objEzsignfolder;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignfolderResponse} objEzsignfolder
     */
    setObjEzsignfolder(objEzsignfolder) {
        this['objEzsignfolder'] = objEzsignfolder;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsignfolderResponse} objEzsignfolder
 */
WebhookEzsignFolderCompletedAllOf.prototype['objEzsignfolder'] = undefined;






export default WebhookEzsignFolderCompletedAllOf;

