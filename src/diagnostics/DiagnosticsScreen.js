/* @flow strict-local */

import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { nativeApplicationVersion } from 'expo-application';

import type { RouteProp } from '../react-navigation';
import type { AppNavigationProp } from '../nav/AppNavigator';
import { createStyleSheet } from '../styles';
import NestedNavRow from '../common/NestedNavRow';
import OptionDivider from '../common/OptionDivider';
import Screen from '../common/Screen';
import ZulipText from '../common/ZulipText';

const styles = createStyleSheet({
  versionLabel: {
    textAlign: 'center',
    padding: 8,
  },
});

type Props = $ReadOnly<{|
  navigation: AppNavigationProp<'diagnostics'>,
  route: RouteProp<'diagnostics', void>,
|}>;

export default class DiagnosticsScreen extends PureComponent<Props> {
  render(): Node {
    return (
      <Screen title="Diagnostics">
        <ZulipText style={styles.versionLabel} text={`v${nativeApplicationVersion ?? '?.?.?'}`} />
        <OptionDivider />
        <NestedNavRow
          label="Variables"
          onPress={() => {
            this.props.navigation.push('variables');
          }}
        />
        <NestedNavRow
          label="Timing"
          onPress={() => {
            this.props.navigation.push('timing');
          }}
        />
        <NestedNavRow
          label="Storage"
          onPress={() => {
            this.props.navigation.push('storage');
          }}
        />
        <NestedNavRow
          label="Debug"
          onPress={() => {
            this.props.navigation.push('debug');
          }}
        />
      </Screen>
    );
  }
}
