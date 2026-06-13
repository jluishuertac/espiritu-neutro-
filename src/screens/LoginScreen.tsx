import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { PrimaryButton } from '../components/PrimaryButton';
import { Screen } from '../components/Screen';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { RootStackParamList } from '../types/navigation';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const trimmedEmail = email.trim();
  const canContinue = /\S+@\S+\.\S+/.test(trimmedEmail);

  return (
    <Screen>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <View>
          <Text style={styles.back} onPress={() => navigation.goBack()}>
            ←
          </Text>
          <Text style={styles.title}>Entra a Espíritu Neutro</Text>
          <Text style={styles.subtitle}>Te enviaremos un código o enlace seguro a tu email.</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="tu@email.com"
              placeholderTextColor={colors.textMuted}
              style={styles.input}
              value={email}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            disabled={!canContinue}
            label="Continuar"
            onPress={() => navigation.navigate('OnboardingGoal')}
          />
          <Text style={styles.legal}>Al continuar aceptas términos básicos y política de privacidad.</Text>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primaryDark,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: spacing.xl
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  footer: {
    gap: spacing.md
  },
  formGroup: {
    gap: spacing.sm,
    marginTop: spacing.xl
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    color: colors.text,
    fontSize: 16,
    minHeight: 56,
    paddingHorizontal: spacing.md
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700'
  },
  legal: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center'
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 17,
    lineHeight: 26,
    marginTop: spacing.md
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38
  }
});
