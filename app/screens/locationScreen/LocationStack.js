import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LocationMain from "./index";
import LocationInfo from "../locationInfoScreen/index";

const Stack = createNativeStackNavigator();

const LocationStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
        <Stack.Screen name="LocationMain" component={LocationMain} />
        <Stack.Screen name="LocationInfo" component={LocationInfo} />
        </Stack.Navigator>
    );
};

export default LocationStack;