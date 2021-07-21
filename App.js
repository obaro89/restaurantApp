import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ShowResult from './src/components/ShowResult';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		ShowResult: ShowResult,
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search',
		},
	}
);

export default createAppContainer(navigator);
