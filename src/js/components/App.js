// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');
var AddForm = require ('./AddForm.js');
var VideoList = require ('./VideoList.js');

function getAppState(){
    return {
        videos: AppStore.getVideos()
    }
}

// initialisation de la vue 
var App = React.createClass({
    getInitialState: function(){
      return getAppState();  
    },
    
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    
    render: function(){
        console.log(this.state.videos);
        return(
            <div>
                <AddForm />
                <VideoList videos = {this.state.videos} />
            </div>   
        )
    },
    
    _onChange: function(){
        this.setState(getAppState());
    }
});


// Renvoie à div#app dans index.html
module.exports = App;