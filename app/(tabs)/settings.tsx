import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {cssInterop} from "nativewind";
cssInterop(SafeAreaView, { className: "style" });

const Settings = () => {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1   p-5">
            <Text>Settings</Text>
        </View>
            </SafeAreaView>
    )
}
export default Settings
