// All the helper functions should must be there.
// The functions that you're using multiple times must be there.
// e.g. formatDateToMMDDYYYY, formatEpochToMMDDYYYY, etc.
import moment from "moment";

export const dateFormate = (date) => {
   return moment(date).format("DD-MM-YYYY");
    
}
