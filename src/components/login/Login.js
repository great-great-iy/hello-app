import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
    const data = useSelector(state => state.userData);
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();


    const onChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

    console.log(user);

    return (
        <View style={loginStyle.container}>

            {/* Logo */}
            <View style={{ marginTop: 80 }}>
                <Text
                    style={{
                        fontStyle: "italic",
                        fontSize: 32,
                        fontWeight: "800",
                        textAlign: "center",
                        paddingBottom: 60,
                        color: "#ff5b2d"
                    }}
                >
                    Hello
                </Text>
            </View>

            {/* Login */}
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "700",
                    paddingVertical: 10
                }}
            >
                Welcome!
            </Text>

            <TextInput
                style={loginStyle.inputUserInfor}
                name='username'
                placeholder="Username"
                onChange={onChange}
            />
            <TextInput
                secureTextEntry
                style={loginStyle.inputUserInfor}
                name='password'
                placeholder="Password"
                onChange={onChange}
            />

            {/* submit */}
            <TouchableOpacity
                style={loginStyle.buttonLogin}
                onPress={() => { }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "#FFF"
                    }}
                >
                    Login
                </Text>
            </TouchableOpacity>

            <View style={{ justifyContent: "center" }}>
                <Text
                    style={{
                        marginVertical: 30,
                        color: "#ff5b2d",
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Forgot password?
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <TouchableOpacity
                    style={loginStyle.loginSocial}

                >
                    <Icon name="google" size={20} color="#ed5a57" />
                    <Text
                        style={{
                            color: "#ff5b2d",
                            fontSize: 16,
                            fontWeight: "700",
                            paddingLeft: 20
                        }}
                    >
                        Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={loginStyle.loginSocial}
                    onPress={() => { }}
                >
                    <Icon name="facebook" size={20} color="#4b68a2" />
                    <Text
                        style={{
                            color: "#4b68a2",
                            fontSize: 16,
                            fontWeight: "700",
                            paddingLeft: 20
                        }}
                    >
                        Facebook
                    </Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop: 30
                }}
            >
                <Text
                    style={{
                        color: "#c2c3c5",
                        fontSize: 16,
                        fontWeight: "700",
                    }}
                >
                    Don't have an account?
                </Text>

                <View>
                    <Text
                        style={{
                            color: "#ff5b2d",
                            fontSize: 16,
                            fontWeight: "700",
                            marginLeft: 3
                        }}
                    >
                        Sign Up
                    </Text>
                </View>
            </View>
        </View>
    );
}

const loginStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        maxWidth: 350,
        width: "100%",
        justifyContent: "center",
    },
    inputUserInfor: {
        width: "100%",
        height: 50,
        marginVertical: 5,
        fontSize: 16,
        fontWeight: "500",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#edeef2"
    },
    buttonLogin: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#ff5b2d"
    },
    loginSocial: {
        flex: 1,
        height: 50,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 15,
        borderColor: "gray",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    }

});
