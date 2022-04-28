import React from "react";
import { View } from "react-native";
import Login from "./src/components/login/Login";
import { store } from "./app/store";
import { Provider } from "react-redux";



export default function App() {

    return (
        <Provider store={store}>
            <View style={{ alignItems: "center", }}>
                <Login />
            </View>
        </Provider>
    );
}
