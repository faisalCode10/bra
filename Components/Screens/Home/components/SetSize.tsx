import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {IMAGES} from '../../../../assets';
import {MyText} from '../../../MyText/index';

interface SetSizeProps {
  inputValue: string;
  title: string;
  titleState: string;
  description: string;
  error:string
  onchange: (value: string) => void;
}

const SetSize: React.FC<SetSizeProps> = ({
  inputValue,
  title,
  titleState,
  description,
  error,
  onchange,
}) => {
  console.log();
  return (
    <View style={{paddingTop: 23}}>
      <View style={styles.setSize}>
        <View style={styles.avatar}>
          <Image source={IMAGES.bra} />
        </View>
        <View style={styles.bustSize}>
          <View style={styles.headerText}>
            <Text style={styles.bustSizeHeader}>{title} </Text>
            <MyText h3 color="white" title={titleState}  style={styles.mytext}/>
          </View>
          <Text style={styles.text}>{description}</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter Bust Size"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={value => onchange(value)}
            />
            <MyText color='red' h5 title={error} style={styles.error}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SetSize;

const styles = StyleSheet.create({
  setSize: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: responsiveWidth(7),
    marginHorizontal: responsiveWidth(4),
  },
  error:{
    fontFamily:'Salsa-Regular'
  },
  avatar: {
    marginTop: responsiveHeight(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  bustSize: {
    width: 238,
  },
  headerText:{
    flexDirection:'row',
    alignItems:'center'
  },
  mytext:{
    fontFamily: 'Salsa-Regular',
  },
  bustSizeHeader: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    paddingBottom: 5,
    fontFamily: 'Salsa-Regular',
  },
  text: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Salsa-Regular',
  },
  input: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(60),
    height: responsiveHeight(6),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  linearGradientColors: {
    backgroundColor: 'rgba(255, 255, 255, 0.00)',
  },
});

{
  /* <Avatar rounded source={{uri:IMAGES.bra }} containerStyle={styles.avatar} /> */
}
{
  /* <Image source={{uri:IMAGES.bra}} style={styles.avatar} /> */
}
