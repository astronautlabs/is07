
/**
 * Command that subscribes the receiver to receive the state change messages for the specified sources
 */
export type CommandSubscription = {
    
    /**
     * A fixed string showing this is a subscription command
     */
    command : string,
    
    /**
     * A list of Event & Tally sources to subscribe to
     */
    sources : Array<string>
};