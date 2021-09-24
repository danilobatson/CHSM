import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Work from "./src/screens/Work";
import About from "./src/screens/About";
import CounterScreen from "./src/screens/CounterScreen"

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		About: About,
    Work: Work,
    Counter: CounterScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Courtnie Dowdy Won\'t He Will App',
		},
	}
);

export default createAppContainer(navigator);
