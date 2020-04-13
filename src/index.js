import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

import styles from './styles';
import { getInit, getEnd, flattenObject } from './helpers';

function Chart(props) {
  let config = JSON.stringify(props.config, (_, value) => {
    //create string of json but if it detects function it uses toString()
    return typeof value === 'function' ? value.toString() : value;
  });

  config = JSON.parse(config);
  const concatHTML = `${getInit(props)}${flattenObject(config)}${getEnd()}`;

  return (
    <View style={props.style}>
      <WebView
        style={styles.full}
        source={{ html: concatHTML, baseUrl: 'web/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        scrollEnabled={false}
        automaticallyAdjustContentInsets={true}
        {...props}
      />
    </View>
  );
}

export default Chart;
