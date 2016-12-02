// Liste des modules dont App.js à besoin pour touné
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require ('../stores/AppStore');


// initialisation de la vue 
var Video = React.createClass({
 
    render: function(){
        var link = " https://www.youtube.com/embed/" + this.props.video.video_id;
        return(
            <div className="c4">
                <h5>{this.props.video.title}
                    <span className="delete">
                        <a onClick={this.onDelete.bind(this, this.props.video.id)} href="#"> X</a>
                    </span>
                </h5>
                <iframe src={link} frameBorder="0" allowFullScreen></iframe>
                <p>{this.props.video.description}</p>
            </div>   
        );
    },
    onDelete: function(i,j){
        AppActions.removeVideo(i);
    }
});


// Renvoie à div#app dans index.html
module.exports = Video;