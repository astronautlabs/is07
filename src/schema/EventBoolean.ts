import { EventCore } from "./EventCore";
/**
 * Describes an event with boolean payload
 */
export type EventBoolean = EventCore & {
    
    /**
     * Event type
     */
    event_type : string,
    
    /**
     * Boolean payload
     */
    payload : {
        
        /**
         * Boolean value
         */
        value : boolean
    }
};