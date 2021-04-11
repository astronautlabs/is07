
/**
 * Type definition for the string enum type
 */
export type TypeStringEnum = {
    
    /**
     * Base type name
     */
    type : string,
    
    /**
     * List of allowed values
     */
    values : Array<{
        
        /**
         * Enum value
         */
        value : string,
        
        /**
         * Enum label
         */
        label : string,
        
        /**
         * Enum description
         */
        description : string
    }>
};