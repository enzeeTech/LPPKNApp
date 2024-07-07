import { useRouter } from 'expo-router';
import * as React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const screenHeight = Dimensions.get('window').height;

const ChatScreen = () => {
  let router = useRouter();

  return (
    <SafeAreaView style={{ height: screenHeight * 0.91 }}>
      {/* https://gist.github.com/hetmann/bda29c335da8bb51f8e2e2d520edf3b6?permalink_comment_id=3869363 */}
      {/* https://github.com/react-native-webview/react-native-webview/issues/447#issuecomment-477201365 */}
      <WebView
        source={{
          html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <script src="https://app.wotnot.io/chat-widget/7UxunTEaV8r3065055405418JExg28HZ.js" defer></script>          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          </head>
          <body>
          <script type="text/javascript">
          
          document.addEventListener( 'DOMContentLoaded', function( event ) {
          zE('messenger', 'open');
          zE('messenger:on', 'close', () => {window.ReactNativeWebView.postMessage("close"); setTimeout(()=>{zE('messenger', 'open');}, 500)});
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
