import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import Root from './src/Root';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function App() {
	useEffect(() => {
    //@ts-ignore
		if (Text.defaultProps == null) Text.defaultProps = {};
    //@ts-ignore
		Text.defaultProps.allowFontScaling = false;
	}, []);

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Root />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}