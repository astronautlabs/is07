
/**
 * Type definition for the boolean enum type
 */
export type TypeBooleanEnum = {
    
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
        value : boolean,
        
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