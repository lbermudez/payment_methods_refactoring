import {ChangeEventHandler} from "react";

interface DonationCheckboxProps {
    checked: boolean,
    content: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}
export const DonationCheckbox = ({checked, content, onChange}: DonationCheckboxProps) => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={onChange} checked={checked}/>
                {content}
            </label>
        </div>
    )
}