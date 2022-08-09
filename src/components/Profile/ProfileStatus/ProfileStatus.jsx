import React from 'react';

/*import s from './ProfileInfo.module.css';*/

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        //для собесов почему 2 фолса

        /*console.log(this.state.editMode);*/
        this.setState({
            editMode: true
        })
        /* console.log(this.state.editMode);*/

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {
                    status: this.props.status
                }
            );
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onMouseMove={this.activateEditMode}>{this.props.status || 'n'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}



export default ProfileStatus;
