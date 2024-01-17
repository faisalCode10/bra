import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React, {useEffect, useState, useMemo} from 'react';
import Modals from '../Modal/Modals';
import {MyText} from '../../MyText';
import SetSize from './components/SetSize';
import {IMAGES} from '../../../assets';
import {
  Eur,
  calculateAusNzSize,
  calculateChinaKoreaSize,
  calculateSpainAndFranceSize,
  calculateUKSize,
  calculateUSA,
} from '../../../src/utils';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-1643025320304360/1813077832';

const Home = () => {
  const [bustSize, setBustSize] = useState<string>('');
  const [bandSize, setBandSize] = useState<string>('');
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [country, setCountry] = useState('Uk');
  const [braSize, setBraSize] = useState<string>('34B');
  const [titleState, setTitleState] = useState<string>('inches');
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const showModal = () => {
    setShowCountryModal(true);
  };

  const checkSize = () => {
    if (bustSize == '' || bandSize == '') {
      setError('Bust or BandSize cannot be null');
      setTimeout(() => {
        setError('');
      }, 2000);
    } else if (country === 'Uk') {
      if (parseInt(bustSize) > 46 || parseInt(bandSize) < 28) {
        setError('Invalid size for the UK');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (bustSize < bandSize) {
        setError('bust size should be smaller than band size ');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = calculateUKSize(bustSize, bandSize);
        setBraSize(result);
        setBustSize('');
        setBandSize('');
      }
    } else if (country === 'ESP/FR/PR') {
      // Assuming bustSize and bandSize are integers
      const parsedBustSize = parseInt(bustSize);
      const parsedBandSize = parseInt(bandSize);

      if (isNaN(parsedBustSize) || isNaN(parsedBandSize)) {
        setError('Invalid size values');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (parsedBustSize < parsedBandSize) {
        setError('The bust size must be greater than the waist size');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (parsedBustSize > 120 || parsedBandSize < 70) {
        setError('Invalid cup sizes');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = calculateSpainAndFranceSize(
          parsedBustSize,
          parsedBandSize,
        );
        setBraSize(result);
        setBustSize('');
        setBandSize('');
      }
    } else if (country === 'EUR/GEP/JAP') {
      const maxBustSize = 46;
      const minBandSize = 28;

      if (
        parseInt(bustSize) > maxBustSize ||
        parseInt(bandSize) < minBandSize
      ) {
        setError('Invalid size for EUR/GEP/JAP');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (bustSize < bandSize) {
        setError('the bust size must be greater than the band size ');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = Eur(bustSize, bandSize);
        setBraSize(result);
        setBustSize('');
        setBandSize('');
      }
    } else if (country === 'USA/MEX') {
      const maxBustSize = 46;
      const minBandSize = 28;

      if (
        parseFloat(bustSize) > maxBustSize ||
        parseFloat(bandSize) < minBandSize
      ) {
        setError('Invalid size for USA/Mexico');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (bustSize < bandSize) {
        setError('the bust size must be greater than the band size ');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = calculateUSA(bustSize, bandSize);
        setBraSize(result);
        setBustSize('');
        setBandSize('');
      }
    } else if (country === 'AUS/NZ') {
      const maxBustSize = 44;
      const minBandSize = 28;

      if (
        parseInt(bustSize) > maxBustSize ||
        parseInt(bandSize) < minBandSize
      ) {
        setError('Invalid size for Australia/New Zealand');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (bustSize < bandSize) {
        setError('the bust size must be greater than the band size ');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = calculateAusNzSize(bustSize, bandSize);
        setBraSize(result);
        setBandSize('');
        setBustSize('');
      }
    } else if (country === 'KOR/CHN') {
      const minBandSize = 28;
      const maxBustSize = 44;

      if (
        parseInt(bandSize) < minBandSize ||
        parseInt(bustSize) > maxBustSize
      ) {
        setError('Invalid size for Korea/China');
        setTimeout(() => {
          setError('');
        }, 2000);
      } else if (bustSize < bandSize) {
        setError('the bust size must be greater than the band size ');

        setTimeout(() => {
          setError('');
        }, 2000);
      } else {
        const result = calculateChinaKoreaSize(bustSize, bandSize);
        setBraSize(result);
        setBandSize('');
        setBustSize('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.shadowStyle}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={showModal} style={styles.header}>
            <MyText
              title="Select Region"
              h1
              color="white"
              style={styles.text}

            />
            <MyText title={country} h1 color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <SetSize
        inputValue={bustSize}
        title="Bust Size"
        titleState={titleState}
        error={error}
        description="With a tape, measure around your back, under your arms and across your chest’s fullest part."
        onchange={(text: string) => setBustSize(text)}
      />

      <SetSize
        inputValue={bandSize}
        title="Band Size"
        titleState={titleState}
        error={error}
        description="Wrap a tape around your rib cage under your bust. Keep it snug and level."
        onchange={text => setBandSize(text)}
      />
      <Modals
        showCountryModal={showCountryModal}
        setTitleState={setTitleState}
        setShowCountryModal={setShowCountryModal}
        country={country}
        setCountry={setCountry}
        setBustSize={setBustSize}
        setBandSize={setBandSize}
      />

      <View>
        {keyboardStatus === false && (
          <View>
            <TouchableOpacity style={styles.button} onPress={checkSize}>
              <Text style={styles.text} >
                Calculate
              </Text>
            </TouchableOpacity>
            <View style={styles.braresult}>
              <Text style={styles.text}>Your bra size: {braSize}</Text>
            </View>
          </View>
        )}

        <View style={styles.footer}>
          <Image source={IMAGES.light} />
          <Text style={styles.footerText}>
            Hint: Odd numbers will be rounded it to the next even number
          </Text>
        </View>
        <View style={styles.bannerAd}>
          {adUnitId ? (
            <BannerAd
              unitId={adUnitId}
              size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
          ) : (
            <Text>No adUnitId provided</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {},
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadowStyle: {
    flexDirection: 'row',
    margin: responsiveWidth(5),
    padding: responsiveWidth(2),
    flexShrink: 0,
    borderTopColor: 'white',
    borderTopWidth: 0.2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderLeftColor: 'white',
    borderLeftWidth: 0.2,
    borderRightColor: 'white',
    borderRightWidth: 0.2,
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    // elevation: 1,
  },
  text: {
    color: 'white',
    fontSize: responsiveFontSize(2.1),
    fontFamily: 'Salsa-Regular',
    justifyContent:'center',
    alignItems:'center',
    marginTop:responsiveHeight(0.7),
  },
  button: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    backgroundColor: '#F1B7F3',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  braresult: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.9),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  footer: {
    marginLeft: responsiveWidth(1),
    marginTop: responsiveHeight(10),
    flexDirection: 'row',
    gap: 2,
  },
  footerText: {
    fontSize: responsiveFontSize(1.83),
    fontFamily: 'Salsa-Regular',
    marginBottom: responsiveWidth(1),
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  bannerAd: {
    marginBottom:21
  },
});
