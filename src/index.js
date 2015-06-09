var React = require('react');
var App = React.createClass({
	getInitialState: function() {
		return {
			txt: 'the state txt'
		}
	},	
	render:function(){
		return(
			<div>
				<h1>{this.props.txt}</h1>
			</div>
			)
	}
});
React.render(<App txt="this is the txt prop" />, document.getElementById('root'));
