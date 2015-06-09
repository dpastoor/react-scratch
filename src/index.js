var React = require('react');
var ReactD3 = require('react-d3');

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

  var LineChart = ReactD3.LineChart;
    var Brush = ReactD3.Brush;

var SomeComponent = React.createClass({
    getInitialState: function() {
        return {
            data:     {
          values: [{x:0,y:0},{x:0.25,y:8.61},{x:0.5,y:19.44},{x:1,y:34.01},{x:2,y:30.23},{x:3,y:31.3},
          {x:4,y:24.98},{x:6,y:23.38},{x:8,y:23.51},{x:12,y:14.68},{x:16,y:9.07},{x:24,y:5.3}] ,
          name: "ID1"
      	}
       };
    },

    render: function() {
        return (
			<LineChart
			  legend={true}
                   data={this.state.data}
                   width={800}
                   height={400}
                />
        );
    }

});
React.render(<App />, document.getElementById('root'));
React.render(<SomeComponent />, document.getElementById('Chart'));
