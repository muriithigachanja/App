import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./src/pages/Login";
import ScreenOne from "./src/pages/ScreenOne";
import ScreenTwo from "./src/pages/ScreenTwo";
import ScreenThree from "./src/pages/ScreenThree";
import ScreenFour from "./src/pages/ScreenFour";

// const MainNavigator = createStackNavigator({
//   Login: { screen: Login },
//   ScreenOne: { screen: ScreenOne },
//   ScreenTwo: { screen: ScreenTwo },
//   ScreenThree: { screen: ScreenThree },
//   ScreenFour: { screen: ScreenFour }
// });

// const App = createAppContainer(MainNavigator);

// export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar style={styles.status} />

//         <ScreenOne />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FF6D00"
//   },

//   status: {
//     backgroundColor: "#1c313a"
//   }
// });

// const drawer1 = StackNavigator(
//   {
//     ScreenOne: {
//       screen: ScreenOne,
//       navigationOptions: ({ navigation }) => ({
//         drawerLockMode: "locked-closed"
//       })
//     },
//     Login: { screen: Login },
//     ScreenOne: { screen: ScreenOne },
//     ScreenTwo: { screen: ScreenTwo },
//     ScreenThree: { screen: ScreenThree },
//     ScreenFour: { screen: ScreenFour },
//   },

//   {
//     headerMode: "none",
//     navigationOptions: {
//       headerVisible: false
//     }
//   }
// );

// const HomeScreenRouter = DrawerNavigator(
//   {
//     drawer1: { screen: drawer1 }
//   },
//   {
//     contentComponent: props => <SideBar {...props} />
//   }
// );
// export default HomeScreenRouter;




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style={styles.status} />

        <ScreenOne />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6D00"
  },

  status: {
    backgroundColor: "#1c313a"
  }
});
