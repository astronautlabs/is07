
/**
 * Command that initiates a health message to be generated in order to check the state of the connection and the sender
 */
export type CommandHealth = {
    
    /**
     * A fixed string showing this is a health command
     */
    command : string,
    
    /**
     * String formatted TAI timestamp (<seconds>:<nanoseconds>) indicating the time the command was issued
     */
    timestamp : string
};