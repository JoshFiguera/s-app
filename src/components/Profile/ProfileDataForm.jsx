import React from "react";
import s from '../Profile/Profile.module.css';
import {createField, Input, Textarea} from "../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../Common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <b>Full Name</b> :
                {createField('Full Name', 'fullName', [], Input)}
            </div>

            <div>
                <b>Looking For A Job</b> :
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>


            <div>
                <b>My Professional Skills</b> :
                {createField('My Professional Skills', 'lookingForAJobDescription', [], Textarea)}
            </div>


            <div>
                <b>About Me</b> :
                {createField('About Me', 'aboutMe', [], Textarea)}
            </div>

            <div>
                <b>Contacts</b> : {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);


export default ProfileDataFormReduxForm;