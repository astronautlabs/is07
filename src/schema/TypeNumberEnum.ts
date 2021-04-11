
/**
 * Type definition for the number enum type
 */
export type TypeNumberEnum = {
    
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
        value : number,
        
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