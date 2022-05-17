/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CommonAuditdetail from './CommonAuditdetail';

/**
 * The CommonAudit model module.
 * @module eZmaxAPI/model/CommonAudit
 * @version 1.1.7
 */
class CommonAudit {
    /**
     * Constructs a new <code>CommonAudit</code>.
     * Gives informations about the user that created the object and the last user to have modified it.  If the object was never modified after creation, objAuditdetailModified won&#39;t be returned. 
     * @alias module:eZmaxAPI/model/CommonAudit
     * @param objAuditdetailCreated {module:eZmaxAPI/model/CommonAuditdetail} 
     */
    constructor(objAuditdetailCreated) { 
        
        CommonAudit.initialize(this, objAuditdetailCreated);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objAuditdetailCreated) { 
        obj['objAuditdetailCreated'] = objAuditdetailCreated;
    }

    /**
     * Constructs a <code>CommonAudit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommonAudit} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommonAudit} The populated <code>CommonAudit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonAudit();

            if (data.hasOwnProperty('objAuditdetailCreated')) {
                obj['objAuditdetailCreated'] = CommonAuditdetail.constructFromObject(data['objAuditdetailCreated']);
            }
            if (data.hasOwnProperty('objAuditdetailModified')) {
                obj['objAuditdetailModified'] = CommonAuditdetail.constructFromObject(data['objAuditdetailModified']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/CommonAuditdetail}
     */
    getObjAuditdetailCreated() {
        return this.objAuditdetailCreated;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAuditdetail} objAuditdetailCreated
     */
    setObjAuditdetailCreated(objAuditdetailCreated) {
        this['objAuditdetailCreated'] = objAuditdetailCreated;
    }
/**
     * @return {module:eZmaxAPI/model/CommonAuditdetail}
     */
    getObjAuditdetailModified() {
        return this.objAuditdetailModified;
    }

    /**
     * @param {module:eZmaxAPI/model/CommonAuditdetail} objAuditdetailModified
     */
    setObjAuditdetailModified(objAuditdetailModified) {
        this['objAuditdetailModified'] = objAuditdetailModified;
    }

}

/**
 * @member {module:eZmaxAPI/model/CommonAuditdetail} objAuditdetailCreated
 */
CommonAudit.prototype['objAuditdetailCreated'] = undefined;

/**
 * @member {module:eZmaxAPI/model/CommonAuditdetail} objAuditdetailModified
 */
CommonAudit.prototype['objAuditdetailModified'] = undefined;






export default CommonAudit;

