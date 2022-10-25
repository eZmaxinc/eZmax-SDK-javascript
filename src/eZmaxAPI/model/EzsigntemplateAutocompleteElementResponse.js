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
import FieldEEzsignfoldertypePrivacylevel from './FieldEEzsignfoldertypePrivacylevel';

/**
 * The EzsigntemplateAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/EzsigntemplateAutocompleteElementResponse
 * @version 1.1.11
 */
class EzsigntemplateAutocompleteElementResponse {
    /**
     * Constructs a new <code>EzsigntemplateAutocompleteElementResponse</code>.
     * A Ezsigntemplate AutocompleteElement Response
     * @alias module:eZmaxAPI/model/EzsigntemplateAutocompleteElementResponse
     * @param eEzsignfoldertypePrivacylevel {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} 
     * @param sEzsigntemplateDescription {String} The description of the Ezsigntemplate
     * @param pkiEzsigntemplateID {Number} The unique ID of the Ezsigntemplate
     * @param bEzsigntemplateIsactive {Boolean} Whether the Ezsigntemplate is active or not
     */
    constructor(eEzsignfoldertypePrivacylevel, sEzsigntemplateDescription, pkiEzsigntemplateID, bEzsigntemplateIsactive) { 
        
        EzsigntemplateAutocompleteElementResponse.initialize(this, eEzsignfoldertypePrivacylevel, sEzsigntemplateDescription, pkiEzsigntemplateID, bEzsigntemplateIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eEzsignfoldertypePrivacylevel, sEzsigntemplateDescription, pkiEzsigntemplateID, bEzsigntemplateIsactive) { 
        obj['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
        obj['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
        obj['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
        obj['bEzsigntemplateIsactive'] = bEzsigntemplateIsactive;
    }

    /**
     * Constructs a <code>EzsigntemplateAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateAutocompleteElementResponse} The populated <code>EzsigntemplateAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateAutocompleteElementResponse();

            if (data.hasOwnProperty('eEzsignfoldertypePrivacylevel')) {
                obj['eEzsignfoldertypePrivacylevel'] = FieldEEzsignfoldertypePrivacylevel.constructFromObject(data['eEzsignfoldertypePrivacylevel']);
            }
            if (data.hasOwnProperty('sEzsigntemplateDescription')) {
                obj['sEzsigntemplateDescription'] = ApiClient.convertToType(data['sEzsigntemplateDescription'], 'String');
            }
            if (data.hasOwnProperty('pkiEzsigntemplateID')) {
                obj['pkiEzsigntemplateID'] = ApiClient.convertToType(data['pkiEzsigntemplateID'], 'Number');
            }
            if (data.hasOwnProperty('bEzsigntemplateIsactive')) {
                obj['bEzsigntemplateIsactive'] = ApiClient.convertToType(data['bEzsigntemplateIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel}
     */
    getEEzsignfoldertypePrivacylevel() {
        return this.eEzsignfoldertypePrivacylevel;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
     */
    setEEzsignfoldertypePrivacylevel(eEzsignfoldertypePrivacylevel) {
        this['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
    }
/**
     * Returns The description of the Ezsigntemplate
     * @return {String}
     */
    getSEzsigntemplateDescription() {
        return this.sEzsigntemplateDescription;
    }

    /**
     * Sets The description of the Ezsigntemplate
     * @param {String} sEzsigntemplateDescription The description of the Ezsigntemplate
     */
    setSEzsigntemplateDescription(sEzsigntemplateDescription) {
        this['sEzsigntemplateDescription'] = sEzsigntemplateDescription;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateID() {
        return this.pkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} pkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setPkiEzsigntemplateID(pkiEzsigntemplateID) {
        this['pkiEzsigntemplateID'] = pkiEzsigntemplateID;
    }
/**
     * Returns Whether the Ezsigntemplate is active or not
     * @return {Boolean}
     */
    getBEzsigntemplateIsactive() {
        return this.bEzsigntemplateIsactive;
    }

    /**
     * Sets Whether the Ezsigntemplate is active or not
     * @param {Boolean} bEzsigntemplateIsactive Whether the Ezsigntemplate is active or not
     */
    setBEzsigntemplateIsactive(bEzsigntemplateIsactive) {
        this['bEzsigntemplateIsactive'] = bEzsigntemplateIsactive;
    }

}

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsigntemplateAutocompleteElementResponse.prototype['eEzsignfoldertypePrivacylevel'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateDescription
 */
EzsigntemplateAutocompleteElementResponse.prototype['sEzsigntemplateDescription'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} pkiEzsigntemplateID
 */
EzsigntemplateAutocompleteElementResponse.prototype['pkiEzsigntemplateID'] = undefined;

/**
 * Whether the Ezsigntemplate is active or not
 * @member {Boolean} bEzsigntemplateIsactive
 */
EzsigntemplateAutocompleteElementResponse.prototype['bEzsigntemplateIsactive'] = undefined;






export default EzsigntemplateAutocompleteElementResponse;

