import React, { useState } from "react";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

const StaticDatePicker = ({ date, setNewDate }) => {
    // const [date, changeDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    // prettier-ignore
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    format="d MMM yyyy"
                    value={date}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => setNewDate(date)}
                />
            </MuiPickersUtilsProvider>
        </>
    );
};

export default StaticDatePicker;

