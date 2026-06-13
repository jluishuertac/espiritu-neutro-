import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';

import { OptionCard } from '../../components/OptionCard';
import { RootStackParamList } from '../../types/navigation';
import { OnboardingLayout } from './OnboardingLayout';
import { barrierOptions } from './options';

type Props = NativeStackScreenProps<RootStackParamList, 'OnboardingBarrier'>;

export function OnboardingBarrierScreen({ navigation, route }: Props) {
  const [selectedBarrier, setSelectedBarrier] = useState<string>();

  return (
    <OnboardingLayout
      buttonDisabled={!selectedBarrier}
      eyebrow="Paso 2 de 3"
      onBack={() => navigation.goBack()}
      onContinue={() => {
        if (selectedBarrier) {
          navigation.navigate('OnboardingLevel', {
            data: { ...route.params.data, barrier: selectedBarrier }
          });
        }
      }}
      title="¿Qué suele detenerte?"
    >
      {barrierOptions.map((barrier) => (
        <OptionCard
          key={barrier}
          label={barrier}
          onPress={() => setSelectedBarrier(barrier)}
          selected={selectedBarrier === barrier}
        />
      ))}
    </OnboardingLayout>
  );
}
