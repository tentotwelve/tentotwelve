import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import LineBuilder from './LineBuilder';
import LineStyler from './LineStyler';

class MultiLine extends PureComponent {
	lines = [];
	renderLines() {
		LineBuilder.loopLines(this.lines, this.props);
		LineStyler.theming(this.props);
		LineStyler.styleObjects(this.props);
		return this.lines.map((line, i) => 
			<View key={i} style={viewStyle}>
				<Text style={{ textAlign: this.props.textAlign }}>
					<Text style={textStyle}>{line}</Text>
				</Text>
			</View>
		);
	}
	render() {
		return (
			<View>{this.renderLines()}</View>
		);
	}
}

export { MultiLine };
