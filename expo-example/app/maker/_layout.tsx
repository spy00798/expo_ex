import { Stack } from "expo-router";

export default function MakerLayout() {
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#dde71f'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="forms" />

        </Stack>
    );
}