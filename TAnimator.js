import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class TAnimator extends React.Component {
  animatedValues = [];

  constructor(props) {
    super(props);

    const textArray = props.content.trim().split(' ');
    textArray.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.textArray = textArray;
  }

  componentDidMount() {
    this.animated()
  }

  animated = (toValue = 1) => {
    const animations = this.textArray.map((_,i) => {
      return Animated.timing(this.animatedValues[i],{
        toValue,
        duration: this.props.duration,
        useNativeDriver:true
      });
    });

    Animated.stagger(this.props.duration / 5, animations).start(() => {
      if (this.props.onFinish) {
        this.props.onFinish();
      }
    });
  }

  render() {
    return (
      <View style={[this.props.style, styles.textContainer]}>
        {this.textArray.map((word, index) => {
          return(
            <Animated.Text key={`${word}-${index}`} 
              style={[
                this.props.textStyle, 
                {
                  opacity: this.animatedValues[index],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[index],
                        new Animated.Value(-5)
                      )
                    }
                  ]
                }
              ]
            }>
              {word}
              {`${index < this.textArray.length ? ' ' : ''}`}
            </Animated.Text>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'center'
  }
});