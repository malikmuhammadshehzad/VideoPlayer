// import {AppOpenAd, TestIds} from 'react-native-google-mobile-ads';
// import {appOpenAddKey} from '../constants';
// import {useEffect} from 'react';

// export default function useAppOpenAdd() {
//   const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : appOpenAddKey;
//   const appOpenAd = AppOpenAd.createForAdRequest(adUnitId, {
//     keywords: ['fashion', 'clothing'],
//   });

//   const [oneTimeAd, setOneTimeAd] = useState(false);
//   const [adLoaded, setAdLoaded] = useState(false);

//   // Load and Show Ad
//   useEffect(() => {
//     if (!oneTimeAd) {
//       console.log('Interstitial Ad not ready.');
//       const loadListener = interstitial.addAdEventListener(
//         AdEventType.LOADED,
//         () => {
//           setAdLoaded(true);
//           setOneTimeAd(true);
//           StatusBar.setHidden(true);
//           console.log('Interstitial Ad Loaded.');
//         },
//       );
//       const errorListener = interstitial.addAdEventListener(
//         AdEventType.ERROR,
//         error => {
//           console.error('Interstitial Ad failed to load:', error);
//           setAdLoaded(false);
//           StatusBar.setHidden(false);
//         },
//       );

//       const closeListener = interstitial.addAdEventListener(
//         AdEventType.CLOSED,
//         () => {
//           console.log('Interstitial Ad Closed.');
//           setAdLoaded(false);
//           setOneTimeAd(true);
//           StatusBar.setHidden(false);
//         },
//       );

//       interstitial.load();

//       return () => {
//         loadListener();
//         errorListener();
//         closeListener();
//       };
//     }
//   }, [interstitial, oneTimeAd]);

//   // Show Ad
//   useEffect(() => {
//     if (adLoaded && interstitial && !oneTimeAd) {
//       console.log('Attempting to show ad...');
//       setTimeout(() => {
//         if (adLoaded && isFocus && interstitial) {
//           interstitial.show().catch(error => {
//             console.error('Ad failed to show:', error);
//           });
//           setOneTimeAd(true);
//           setAdLoaded(false);
//           StatusBar.setHidden(true);
//         } else {
//           console.log('Ad was not loaded in time.');
//           setAdLoaded(false);
//           StatusBar.setHidden(false);
//         }
//       }, 4000);
//     }
//   }, [adLoaded, interstitial, oneTimeAd]);

// }