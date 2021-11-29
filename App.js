import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import sobre from "./src/pages/sobre/sobre.js"
import Login from "./src/pages/login/Login"
import cadastro from "./src/pages/cadastro/index.js"
import pg1 from "./src/pages/formulario/index1"
import pg2 from "./src/pages/formulario/index2"
import pg3 from "./src/pages/formulario/index3"
import pg4 from "./src/pages/formulario/index4"
import pg5 from "./src/pages/formulario/index5"
import pg6 from "./src/pages/formulario/index6"
import pg7 from "./src/pages/formulario/index7"
import pg8 from "./src/pages/formulario/index8"
import pg9 from "./src/pages/formulario/index9"
import pg10 from "./src/pages/formulario/index10"
import pg11 from "./src/pages/formulario/index11"
import pg12 from "./src/pages/formulario/index12"
import pg13 from "./src/pages/formulario/index13"

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen //Primera pag
          name="Login"
          component={Login}
          options={{
            headerTintColor:"#F00",
            headerShown: false,
          }}
        />

        <Stack.Screen //segunda pag
          name="Sobre"
          component={sobre}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen //terceira pag
          name="cadastro"
          component={cadastro}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

         <Stack.Screen 
          name="pg1"
          component={pg1}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg2"
          component={pg2}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg3"
          component={pg3}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg4"
          component={pg4}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg5"
          component={pg5}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg6"
          component={pg6}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg7"
          component={pg7}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg8"
          component={pg8}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg9"
          component={pg9}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg10"
          component={pg10}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg11"
          component={pg11}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg12"
          component={pg12}
          options={{
            headerShown: false,
          }}
        /> 

        <Stack.Screen 
          name="pg13"
          component={pg13}
          options={{
            headerShown: false,
          }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}
