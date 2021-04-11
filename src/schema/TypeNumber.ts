import { Number } from "./Number";
/**
 * Type definition for the number type
 */
export type TypeNumber = {
    
    /**
     * Base type name
     */
    type : string,
    
    /**
     * Denominator typically used for rational numbers in the event payload
     */
    scale? : number,
    min : Number,
    max : Number,
    step? : Number,
    
    /**
     * Unit of measure
     */
    unit? : string
};