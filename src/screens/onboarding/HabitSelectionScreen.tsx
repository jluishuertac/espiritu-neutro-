import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { OptionCard } from '../../components/OptionCard';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { RootStackParamList } from '../../types/navigation';
import { OnboardingLayout } from './OnboardingLayout';
import { habitOptions } from './options';

type Props = NativeStackScreenProps<RootStackParamList, 'HabitSelection'>;

export function HabitSelectionScreen({ navigation, route }: Props) {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);

  const helperText = useMemo(() => {
    if (selectedHabits.length === 3) {
      return 'Listo. Este reto será simple y alcanzable.';
    }

    return `${selectedHabits.length} de 3 seleccionados`;
  }, [selectedHabits.length]);

  function toggleHabit(habit: string) {
    setSelectedHabits((current) => {
      if (current.includes(habit)) {
        return current.filter((item) => item !== habit);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, habit];
    });
  }

  return (
    <OnboardingLayout
      buttonDisabled={selectedHabits.length !== 3}
      buttonLabel="Crear mi reto de 7 días"
      eyebrow="Hábitos"
      helper="Pequeños, reales y repetibles. Para este primer reto, menos es mejor."
      onBack={() => navigation.goBack()}
      onContinue={() =>
        navigation.navigate('ChallengeConfirmation', {
          data: { ...route.params.data, habits: selectedHabits }
        })
      }
      title="Elige 3 hábitos"
    >
      <Text style={styles.counter}>{helperText}</Text>
      {habitOptions.map((habit) => (
        <OptionCard key={habit} label={habit} onPress={() => toggleHabit(habit)} selected={selectedHabits.includes(habit)} />
      ))}
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  counter: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: spacing.xs
  }
});
