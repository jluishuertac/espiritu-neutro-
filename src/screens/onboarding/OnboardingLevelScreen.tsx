import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

import { OptionCard } from '../../components/OptionCard';
import { RootStackParamList } from '../../types/navigation';
import { OnboardingLayout } from './OnboardingLayout';
import { levelOptions } from './options';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingLevel'>;

export function OnboardingLevelScreen({ navigation, route }: Props) {
  const [selectedLevel, setSelectedLevel] = useState<string>();

  return (
    <OnboardingLayout
      buttonDisabled={!selectedLevel}
      eyebrow="Paso 3 de 3"
      helper="Tu liga inicial se ajustará para que compitas de forma justa."
      onBack={() => navigation.goBack()}
      onContinue={() => {
        if (selectedLevel) {
          navigation.navigate('HabitSelection', {
            data: { ...route.params.data, level: selectedLevel }
          });
        }
      }}
      title="¿Dónde estás hoy?"
    >
      {levelOptions.map((level) => (
        <OptionCard key={level} label={level} onPress={() => setSelectedLevel(level)} selected={selectedLevel === level} />
      ))}
    </OnboardingLayout>
  );
}
