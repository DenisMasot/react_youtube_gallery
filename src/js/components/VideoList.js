// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');
var Video = require('./Video.js')



// initialisation de la vue 
var VideoList = React.createClass({
   
    render: function(){
        return(
            <div className="row">
            {
                this.props.videos.map(function(video, index){
                    return(
                        <Video video={video} key={index} />
                    )
                })
            }    
            </div>   
        );
    },
    
    onSubmit: function(e){
        e.preventDefault();

        var video = {
            title: this.refs.title.value.trim(),
            video_id: this.refs.video_id.value.trim(),
            description: this.refs.description.value.trim()
        }
        
        AppActions.saveVideo(video);
    }
});


// Renvoie à div#app dans index.html
module.exports = VideoList;