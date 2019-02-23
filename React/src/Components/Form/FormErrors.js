import React, {Component} from 'react';


export const FormErrors = ({formErrors}) => (
    <div className='form__error'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                )
            } else {
                return '';
            }
        })}
    </div>
);

export default FormErrors;