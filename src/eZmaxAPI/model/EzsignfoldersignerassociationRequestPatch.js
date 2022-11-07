/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignfoldersignerassociationRequestPatch model module.
 * @module eZmaxAPI/model/EzsignfoldersignerassociationRequestPatch
 * @version 1.1.15
 */
class EzsignfoldersignerassociationRequestPatch {
    /**
     * Constructs a new <code>EzsignfoldersignerassociationRequestPatch</code>.
     * An Ezsignfoldersignerassociation Object
     * @alias module:eZmaxAPI/model/EzsignfoldersignerassociationRequestPatch
     */
    constructor() { 
        
        EzsignfoldersignerassociationRequestPatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignfoldersignerassociationRequestPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestPatch} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldersignerassociationRequestPatch} The populated <code>EzsignfoldersignerassociationRequestPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldersignerassociationRequestPatch();

            if (data.hasOwnProperty('tEzsignfoldersignerassociationMessage')) {
                obj['tEzsignfoldersignerassociationMessage'] = ApiClient.convertToType(data['tEzsignfoldersignerassociationMessage'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A custom text message that will be added to the email sent.
     * @return {String}
     */
    getTEzsignfoldersignerassociationMessage() {
        return this.tEzsignfoldersignerassociationMessage;
    }

    /**
     * Sets A custom text message that will be added to the email sent.
     * @param {String} tEzsignfoldersignerassociationMessage A custom text message that will be added to the email sent.
     */
    setTEzsignfoldersignerassociationMessage(tEzsignfoldersignerassociationMessage) {
        this['tEzsignfoldersignerassociationMessage'] = tEzsignfoldersignerassociationMessage;
    }

}

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tEzsignfoldersignerassociationMessage
 */
EzsignfoldersignerassociationRequestPatch.prototype['tEzsignfoldersignerassociationMessage'] = undefined;






export default EzsignfoldersignerassociationRequestPatch;

