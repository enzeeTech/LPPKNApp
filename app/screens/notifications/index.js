// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export default function App() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//   const [notificationData, setNotificationData] = useState(null);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(async token => {
//       try {
//         const vv = await fetch('https://d77e-202-186-149-47.ngrok-free.app/save-token', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ token }),
//         })  
//         console.log(vv)
//       } catch (error) {
//         console.warn("FAIL TO REGISTER TOKEN: DEVICE WONT GET NOTIFICATION", error)  
//       }
//       console.log("REGISTER TOKEN AGAIN", token)
      
      
//       return token && setExpoPushToken(token)
//     });

//     if (Platform.OS === 'android') {
//       Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
//     }
//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       notificationListener.current &&
//         Notifications.removeNotificationSubscription(notificationListener.current);
//       responseListener.current &&
//         Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       }}>
//       <Text>Your expo push token: {expoPushToken}</Text>
//       {notificationData ? (
//         <>
//           <Text>Title: {notificationData.title}</Text>
//           <Text>Date: {notificationData.date}</Text>
//         </>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//       <Button
//         title="Press to schedule a notification"
//         onPress={async () => {
//           await schedulePushNotification();
//         }}
//       />
//     </View>
//   );
// }

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "New Bulletin Post Available!! 📬",
//       body: 'Go read it now ;)',
//       data: { data: 'goes here' },
//       icon: '../../assets/notification-icon.png',
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync({ projectId: '8d7a4c07-5171-4e06-9cd0-0d2899e2ee47' })).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   return token;
// }
