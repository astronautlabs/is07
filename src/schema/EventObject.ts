import { EventCore } from "./EventCore";
/**
 * Describes an event with object payload
 */
export type EventObject = EventCore & {
    
    /**
     * Event type
     */
    event_type : string,
    
    /**
     * Object payload
     */
    payload : {
        
    }
};