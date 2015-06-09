var React = require('react');
var App = React.createClass({
	getInitialState: function() {
		return {
			txt:  ' '
		}
	},	
	update: function(e) {
		this.setState({txt: e.target.value});
	},
	render:function(){
		return(
			<div>
			{this.state.txt}
			<hr />
			<Slider update={this.update} />
			</div>
			)
		}
});

var Slider = React.createClass({
	render:function() {
		return(
			<input type="range" min="0" max="255" onChange={this.props.update} />
			);
	}
});
React.render(<App />, document.getElementById('root'));
