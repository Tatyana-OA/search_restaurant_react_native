import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./assets/src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search", // default title
    },
  }
);

export default createAppContainer(navigator);
