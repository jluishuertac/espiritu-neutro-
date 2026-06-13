import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '../components/PrimaryButton';
import { Screen } from '../components/Screen';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { RootStackParamList } from '../types/navigation';

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.brand}>Espíritu Neutro</Text>
          <Text style={styles.title}>Construye consistencia, no culpa.</Text>
          <Text style={styles.subtitle}>
            Retos privados de 7 días para crear hábitos saludables sin contar calorías.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.bullet}>✓ Sin dietas</Text>
          <Text style={styles.bullet}>✓ Sin exposición pública</Text>
          <Text style={styles.bullet}>✓ Sin smartwatch obligatorio</Text>
        </View>

        <View style={styles.actions}>
          <PrimaryButton label="Empezar" onPress={() => navigation.navigate('Login')} />
          <PrimaryButton label="Ya tengo cuenta" onPress={() => navigation.navigate('Login')} variant="secondary" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    gap: spacing.md
  },
  brand: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.4,
    marginBottom: spacing.xl,
    textAlign: 'center'
  },
  bullet: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 28
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 24,
    borderWidth: 1,
    padding: spacing.lg
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  hero: {
    paddingTop: spacing.xxl
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 18,
    lineHeight: 28,
    marginTop: spacing.md,
    textAlign: 'center'
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 42,
    textAlign: 'center'
  }
});
