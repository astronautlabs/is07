
/**
 * Type definition for the string type
 */
export type TypeString = {
    
    /**
     * Base type name
     */
    type : string,
    
    /**
     * Minimum string length
     */
    min_length? : number,
    
    /**
     * Maximum string length
     */
    max_length? : number,
    
    /**
     * Regular expression constraining the value
     */
    pattern? : string
};