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

/**
 * The TaxassignmentAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/TaxassignmentAutocompleteElementResponse
 * @version 1.1.11
 */
class TaxassignmentAutocompleteElementResponse {
    /**
     * Constructs a new <code>TaxassignmentAutocompleteElementResponse</code>.
     * A Taxassignment AutocompleteElement Response
     * @alias module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse
     * @param sTaxassignmentDescriptionX {String} The description of the Taxassignment  in the language of the requester
     * @param pkiTaxassignmentID {Number} The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * @param bTaxassignmentIsactive {Boolean} Whether the Taxassignment is active or not
     */
    constructor(sTaxassignmentDescriptionX, pkiTaxassignmentID, bTaxassignmentIsactive) { 
        
        TaxassignmentAutocompleteElementResponse.initialize(this, sTaxassignmentDescriptionX, pkiTaxassignmentID, bTaxassignmentIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sTaxassignmentDescriptionX, pkiTaxassignmentID, bTaxassignmentIsactive) { 
        obj['sTaxassignmentDescriptionX'] = sTaxassignmentDescriptionX;
        obj['pkiTaxassignmentID'] = pkiTaxassignmentID;
        obj['bTaxassignmentIsactive'] = bTaxassignmentIsactive;
    }

    /**
     * Constructs a <code>TaxassignmentAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/TaxassignmentAutocompleteElementResponse} The populated <code>TaxassignmentAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxassignmentAutocompleteElementResponse();

            if (data.hasOwnProperty('sTaxassignmentDescriptionX')) {
                obj['sTaxassignmentDescriptionX'] = ApiClient.convertToType(data['sTaxassignmentDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('pkiTaxassignmentID')) {
                obj['pkiTaxassignmentID'] = ApiClient.convertToType(data['pkiTaxassignmentID'], 'Number');
            }
            if (data.hasOwnProperty('bTaxassignmentIsactive')) {
                obj['bTaxassignmentIsactive'] = ApiClient.convertToType(data['bTaxassignmentIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The description of the Taxassignment  in the language of the requester
     * @return {String}
     */
    getSTaxassignmentDescriptionX() {
        return this.sTaxassignmentDescriptionX;
    }

    /**
     * Sets The description of the Taxassignment  in the language of the requester
     * @param {String} sTaxassignmentDescriptionX The description of the Taxassignment  in the language of the requester
     */
    setSTaxassignmentDescriptionX(sTaxassignmentDescriptionX) {
        this['sTaxassignmentDescriptionX'] = sTaxassignmentDescriptionX;
    }
/**
     * Returns The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * minimum: 0
     * maximum: 15
     * @return {Number}
     */
    getPkiTaxassignmentID() {
        return this.pkiTaxassignmentID;
    }

    /**
     * Sets The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     * @param {Number} pkiTaxassignmentID The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
     */
    setPkiTaxassignmentID(pkiTaxassignmentID) {
        this['pkiTaxassignmentID'] = pkiTaxassignmentID;
    }
/**
     * Returns Whether the Taxassignment is active or not
     * @return {Boolean}
     */
    getBTaxassignmentIsactive() {
        return this.bTaxassignmentIsactive;
    }

    /**
     * Sets Whether the Taxassignment is active or not
     * @param {Boolean} bTaxassignmentIsactive Whether the Taxassignment is active or not
     */
    setBTaxassignmentIsactive(bTaxassignmentIsactive) {
        this['bTaxassignmentIsactive'] = bTaxassignmentIsactive;
    }

}

/**
 * The description of the Taxassignment  in the language of the requester
 * @member {String} sTaxassignmentDescriptionX
 */
TaxassignmentAutocompleteElementResponse.prototype['sTaxassignmentDescriptionX'] = undefined;

/**
 * The unique ID of the Taxassignment.  Valid values:  |Value|Description| |-|-| |1|No tax| |2|GST| |3|HST (ON)| |4|HST (NB)| |5|HST (NS)| |6|HST (NL)| |7|HST (PE)| |8|GST + QST (QC)| |9|GST + QST (QC) Non-Recoverable| |10|GST + PST (BC)| |11|GST + PST (SK)| |12|GST + RST (MB)| |13|GST + PST (BC) Non-Recoverable| |14|GST + PST (SK) Non-Recoverable| |15|GST + RST (MB) Non-Recoverable|
 * @member {Number} pkiTaxassignmentID
 */
TaxassignmentAutocompleteElementResponse.prototype['pkiTaxassignmentID'] = undefined;

/**
 * Whether the Taxassignment is active or not
 * @member {Boolean} bTaxassignmentIsactive
 */
TaxassignmentAutocompleteElementResponse.prototype['bTaxassignmentIsactive'] = undefined;






export default TaxassignmentAutocompleteElementResponse;
