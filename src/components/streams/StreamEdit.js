import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component{   
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
onSubmit = (formValues) =>{
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues )
}

    render(){
        console.log(this.props) //in a class we use this.props, while in a functional component we use props 
        if(!this.props.stream)
        return <div> Loading...</div>

        return (
            <div>
                <h3>Edit a Stream</h3>
                {/*<StreamForm initialValues= {{title:'EDIT ME', description:'change me too'}} // title and description here coresponds to field props */}
                <StreamForm initialValues = {_.pick(this.props.stream, 'title', 'description')}
                onSubmit={this.onSubmit}/>
            </div>
        )
    
    }
}

const mapStateToProps = (state, ownProps) => { // ownProps refer to props of component
    return {stream: state.streams[ownProps.match.params.id]}  //streams[] notation to refer to a key:value pair by key
}


export default connect (mapStateToProps, {fetchStream,editStream})(StreamEdit)
