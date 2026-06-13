import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

import { OptionCard } from '../../components/OptionCard';
import { RootStackParamList } from '../../types/navigation';
import { OnboardingLayout } from './OnboardingLayout';
import { goalOptions } from './options';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingGoal'>;

export function OnboardingGoalScreen({ navigation }: Props) {
  const [selectedGoal, setSelectedGoal] = useState<string>();

  return (
    <OnboardingLayout
      buttonDisabled={!selectedGoal}
      eyebrow="Paso 1 de 3"
      onBack={() => navigation.goBack()}
      onContinue={() => {
        if (selectedGoal) {
          navigation.navigate('OnboardingBarrier', { data: { goal: selectedGoal, habits: [] } });
        }
      }}
      title="¿Qué quieres mejorar primero?"
    >
      {goalOptions.map((goal) => (
        <OptionCard key={goal} label={goal} onPress={() => setSelectedGoal(goal)} selected={selectedGoal === goal} />
      ))}
    </OnboardingLayout>
  );
}
