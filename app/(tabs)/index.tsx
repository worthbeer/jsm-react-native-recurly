import { Text, View } from "react-native";
import {cssInterop} from "nativewind";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";


cssInterop(SafeAreaView, { className: "style" });
export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1   p-5">
                <Text className="text-xl font-bold text-success">
                    Welcome to Nativewind!
                </Text>
                <Link href="/(auth)/sign-in" className="mt-4 bg-primary rounded text-white p-4">Go to Sign In</Link>
                <Link href="/(auth)/sign-up" className="mt-4 bg-primary rounded text-white p-4">Go to Sign Up</Link>
                <Link href="/onboarding" className="mt-4 bg-primary rounded text-white p-4">Go to onBoarding</Link>
                <Link href="/subscriptions/spotify">Spotify</Link>
                <Link href={{
                    pathname: "/subscriptions/[id]",
                    params: {id:'claude'},
                }}>
                    Claude Max Subscriptions
                </Link>
            </View>


        </SafeAreaView>

    );
}