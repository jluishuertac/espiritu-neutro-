import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { RootStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'ChallengeConfirmation'>;

function getLeague(level?: string) {
  if (level === 'Entreno algunas veces por semana') {
    return 'Liga Activa';
  }

  if (level === 'Hago algo de actividad') {
    return 'Liga Base';
  }

  return 'Liga Inicio';
}

export function ChallengeConfirmationScreen({ navigation, route }: Props) {
  const { data } = route.params;
  const league = getLeague(data.level);

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text onPress={() => navigation.goBack()} style={styles.back}>
            ←
          </Text>
          <Text style={styles.title}>Tu reto está listo</Text>
          <Text style={styles.subtitle}>7 días · {league}</Text>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Hábitos</Text>
            {data.habits.map((habit) => (
              <Text key={habit} style={styles.habit}>
                ✓ {habit}
              </Text>
            ))}
          </View>

          <View style={styles.messageCard}>
            <Text style={styles.message}>No necesitas hacerlo perfecto. Solo vuelve cada día.</Text>
          </View>
        </View>

        <PrimaryButton label="Empezar hoy" onPress={() => navigation.popToTop()} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primaryDark,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: spacing.md
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 24,
    borderWidth: 1,
    gap: spacing.md,
    marginTop: spacing.xl,
    padding: spacing.lg
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  habit: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 28
  },
  message: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    textAlign: 'center'
  },
  messageCard: {
    backgroundColor: colors.primarySoft,
    borderRadius: 24,
    marginTop: spacing.lg,
    padding: spacing.lg
  },
  sectionTitle: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase'
  },
  subtitle: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '700',
    marginTop: spacing.sm
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 42
  }
});
