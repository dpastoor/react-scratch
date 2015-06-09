var React = require('react');


var App = React.createClass({
	getInitialState: function() {
		return {
			cl: 1,
			vd: 10
		}
	},	
	update: function(e) {
		this.setState({
			cl: this.refs.cl.refs.inp.getDOMNode().value,
			vd: this.refs.vd.refs.inp.getDOMNode().value,
		});
	},
	render:function(){
		return(
			<div>
			<Slider ref = "cl" update={this.update} />
			<label>{this.state.cl}</label>
			<Slider ref = "vd" update={this.update} />
			<label>{this.state.vd}</label>
			</div>
			)
		}
});

var Slider = React.createClass({
	render:function() {
		return(
			<input ref ="inp" type="range" min="1" max="255" onChange={this.props.update} />
			);
	}
});
React.render(<App />, document.getElementById('root'));
