import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChallengeConfirmationScreen } from '../screens/onboarding/ChallengeConfirmationScreen';
import { HabitSelectionScreen } from '../screens/onboarding/HabitSelectionScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { OnboardingBarrierScreen } from '../screens/onboarding/OnboardingBarrierScreen';
import { OnboardingGoalScreen } from '../screens/onboarding/OnboardingGoalScreen';
import { OnboardingLevelScreen } from '../screens/onboarding/OnboardingLevelScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        contentStyle: { backgroundColor: '#F7F2EA' },
        headerShown: false
      }}
    >
      <Stack.Screen component={WelcomeScreen} name="Welcome" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={OnboardingGoalScreen} name="OnboardingGoal" />
      <Stack.Screen component={OnboardingBarrierScreen} name="OnboardingBarrier" />
      <Stack.Screen component={OnboardingLevelScreen} name="OnboardingLevel" />
      <Stack.Screen component={HabitSelectionScreen} name="HabitSelection" />
      <Stack.Screen component={ChallengeConfirmationScreen} name="ChallengeConfirmation" />
    </Stack.Navigator>
  );
}
