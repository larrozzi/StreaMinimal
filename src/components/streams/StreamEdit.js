import React from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'


class StreamEdit extends React.Component{
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    
    render(){
        console.log(this.props) //in a class we use this.props, while in a functional component we use props 
        if(!this.props.stream)
        return <div> Loading...</div>

        return (
            <div>
                {this.props.stream.title}
                <br/>
                {this.props.stream.description}
            </div>
        )
    
    }
}

const mapStateToProps = (state, ownProps) => { // ownProps refer to props of component
    return {stream: state.streams[ownProps.match.params.id]}  //streams[] notation to refer to a key:value pair by key
}


export default connect (mapStateToProps, {fetchStream})(StreamEdit)
