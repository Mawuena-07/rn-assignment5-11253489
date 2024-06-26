import { Image } from 'react-native';
import {NavigationContainer, ThemeProvider} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Home from "./screens/homeScreen"
import Settings from "./screens/settingsScreen"
import { themes } from "./themes";
import { useState } from 'react';
import HomeIcon from "./assets/home.png"
import settingsIcon from "./assets/settings.png"
import myCardsIcon from "./assets/myCards.png"
import statisticsIcon from "./assets/statictics.png"

export default function App() {
  const BottomTab = createBottomTabNavigator()

  const [theme,setTheme] = useState(themes.dark)

  return (
    <ThemeProvider>
    <NavigationContainer>
      <BottomTab.Navigator 
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon: ({focused, color , size}) => {
          let iconSource;

          if(route.name == "Home"){
            iconSource = focused ? HomeIcon : HomeIcon
          }else if(route.name == "Settings"){
            iconSource = focused ? settingsIcon : settingsIcon
          }else if(route.name == "My Cards"){
            iconSource = focused ? myCardsIcon : myCardsIcon
          }else{
            iconSource = focused ? statisticsIcon : statisticsIcon
          }

          return <Image source={iconSource} style={{width:20,height:20,tintColor:color}} />
        }

      })}
      tabBarOptions = {{
        style:{
          backgroundColor:theme.backgroundColor
        },
        activeTintColor:'blue',
      }}
      initialScreen="Home">
        <BottomTab.Screen name="Home" component={Home}/>
        <BottomTab.Screen name="My Cards" component={Home}/>
        <BottomTab.Screen name="Statistics" component={Home}/>
        <BottomTab.Screen name="Settings" component={Settings}/>
      </BottomTab.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}
