import { useState } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

// import colors from '../../../assets/theme/colors';
// import styles from './styles';

// interface ImputProps{
//     onChangeText: func,
//     iconPosition:
//     icon:
//     style:
//     value:
//     label:
//     error:
// }
const { width: ScreenWidth } = Dimensions.get("screen");
const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return 'red';
    }

    if (focused) {
      return '#5096FE';
    } else {
      return '#EFF0F0';
    }
  };
  return (
    // <View style={styles.inputContainer}>
    //   {label && <Text style={{color:getBorderColor()}}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      // {error && <Text style={styles.error}>{error}</Text>}
    // </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    wrapper: {
      height: 42,
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      width: ScreenWidth*0.8,
      marginTop: 15,
    },
  
    // inputContainer: {
    //   paddingVertical: 10,
    //   backgroundColor: '#fff',
    // },
  
    textInput: {
      flex: 1,
      width: '100%',
      fontSize: 18,
      color: '#fff',
    },
  
    error: {
      color: 'red',
      paddingTop: 4,
      fontSize: 12,
    },
  });