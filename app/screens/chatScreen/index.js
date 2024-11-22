import { useRouter } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, Dimensions, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';

const screenHeight = Dimensions.get('window').height;

const ChatScreen = () => {
  const router = useRouter();
  const [chatBubbleUri, setChatBubbleUri] = React.useState(null);

  React.useEffect(() => {
    const loadAsset = async () => {
      if (Platform.OS === 'android') {
        // Android: Use localUri
        const asset = Asset.fromModule(require('../../assets/ChatBubble.png'));
        await asset.downloadAsync();
        setChatBubbleUri(asset.localUri || asset.uri);
      } else if (Platform.OS === 'ios') {
        // iOS: Convert to Base64
        const asset = Asset.fromModule(require('../../assets/ChatBubble.png'));
        await asset.downloadAsync();
        const base64 = await FileSystem.readAsStringAsync(asset.localUri || asset.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setChatBubbleUri(`data:image/png;base64,${base64}`);
      }
    };

    loadAsset();
  }, []);

  if (!chatBubbleUri) {
    return null; // Optionally, you can show a loading indicator here
  }

  return (
    <SafeAreaView style={{ height: screenHeight * 0.91 }}>
      <WebView
        allowFileAccess
        allowUniversalAccessFromFileURLs
        originWhitelist={['*']}
        javaScriptEnabled
        domStorageEnabled
        source={{
          html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <script src="https://app.wotnot.io/chat-widget/7UxunTEaV8r3065055405418JExg28HZ.js" defer></script>
            <style>
              .chat-bubble {
                position: fixed;
                bottom: 70px;
                left: 20px;
                width: 310px;
                height: 100px;
                background-image: url('${chatBubbleUri}');
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
              }
            </style>
          </head>
          <body>
            <div class="chat-bubble"></div>
            <script type="text/javascript">
              document.addEventListener('DOMContentLoaded', function(event) {
                zE('messenger', 'on', 'close', () => {
                  window.ReactNativeWebView.postMessage("close");
                  setTimeout(() => {
                    zE('messenger', 'open');
                  }, 500);
                });
              });
            </script>
          </body>
          </html>
          `,
          baseUrl: 'https://lppkn.sociodev.com.my/',
        }}
        onMessage={({ nativeEvent }) => {
          if (nativeEvent.data === 'close') {
            router.back();
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;