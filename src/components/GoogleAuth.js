import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn,signOut} from '../actions'

class GoogleAuth extends Component {

    //state = { isSignedIn: null }

    componentDidMount() { // initializing the google auth library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'1094177542404-72hnt72nv7r4on14po5oldasfd9qpg5e.apps.googleusercontent.com',
                scope:'email'
            }).then(() =>{
                this.auth= window.gapi.auth2.getAuthInstance()
                //this.setState({ isSignedIn: this.auth.isSignedIn.get()}) //to reender app we need to update component level state, (not redux store state) 
                this.onAuthChange( this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    
    onAuthChange = (isSignedIn) => {
        if (isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId()) //passing the google userId to authReducer through the action of a successful sign in
        }
        else 
            this.props.signOut()
    }

    onSignInClick = () => {this.auth.signIn()}
    
    onSignOutClick = () => {this.auth.signOut()}

    renderAuthButton(){
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn){
            return (
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className = "google icon" />
                Sign Out
            </button> 
            )
        } 
        else
         return (
            <button onClick={this.onSignInClick} className="ui red google button">
                <i className = "google icon" />
                Sign In with Google
            </button> 
            )
        }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}    
}



export default connect (
    mapStateToProps,
    {signIn,signOut}
)(GoogleAuth) 
