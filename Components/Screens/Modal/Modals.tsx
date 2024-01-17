import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {BlurView} from '@react-native-community/blur';
import {IMAGES} from '../../../assets';
import {Platform} from 'react-native';

const Modals: React.FC<{
  showCountryModal: boolean;
  setShowCountryModal: (value: boolean) => void;
  country: string;
  setCountry: any;
  setTitleState: any;
  setBustSize:any;
  setBandSize:any
}> = ({
  showCountryModal,
  setShowCountryModal,
  country,
  setCountry,
  setTitleState,
  setBandSize,
  setBustSize
}) => {
  const countries = [
    'ESP/FR/PR',
    'EUR/GEP/JAP',
    'USA/MEX',
    'Uk',
    'AUS/NZ',
    'KOR/CHN',
  ];

  const defaultCountryIndex = countries.indexOf('Uk');

  const [checkedIndex, setCheckedIndex] = useState(defaultCountryIndex);

  const closeModal = () => {
    setShowCountryModal(false);
  };

  const onCheckboxChange = (index: any) => {
    setCheckedIndex(index);

    const selectedCountry = countries[index];
    setCountry(selectedCountry);
    setBustSize('')
    setBandSize('')
    if (selectedCountry === 'ESP/FR/PR') {
      setTitleState('centimeter');

    } else {
      setTitleState('inches');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}
        onRequestClose={closeModal}>
        <BlurView
          style={styles.centeredView}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="light">
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            activeOpacity={1}
            onPress={closeModal}>
            <View style={styles.modalView}>
              <Text style={styles.text}>Select Region</Text>
              {countries.map((country, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modaloption}
                  onPress={() => {
                    onCheckboxChange(index);
                    closeModal();
                  }}>
                  {checkedIndex === index ? (
                    <Image
                      source={IMAGES.checkbox}
                      style={{width: 30, height: 30}}
                    />
                  ) : (
                    <Image
                      source={IMAGES.lightbox}
                      style={{width: 30, height: 30}}
                    />
                  )}
                  <View>
                    <Text style={styles.text}>{country}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </BlurView>
      </Modal>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: responsiveWidth(90),
    backgroundColor: 'rgba(193, 193, 193, 0.40)',
    borderRadius: 10,
    padding: responsiveWidth(2.7),
    gap: responsiveWidth(1.5),
    marginLeft: 20,
  },
  modaloption: {
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight:7,
    // gap: responsiveWidth(20),
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
      },
      android: {
        elevation: -1,
        borderWidth: 1,
        borderColor: 'white',
      },
    }),
  },

  text: {
    fontSize: responsiveFontSize(2.5),
    color: '#fff',
    fontFamily: 'Salsa-Regular',
  },
});
