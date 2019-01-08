const React = require('react');
const ReactNative = require('react-native');
const {
  TouchableOpacity,
  View,
} = ReactNative;

const Button = (props) => {
  return <TouchableOpacity
    activeOpacity={1}
    {...props}
  >
    {props.children}
  </TouchableOpacity>;
};

module.exports = Button;
