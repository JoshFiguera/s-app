import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";



const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field  name='newPostText' component={Textarea} placeholder={'Post Message'}
                           validate = {[required, maxLength10]}/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'postAddPostForm'})(AddPostForm);

export default AddPostFormRedux;