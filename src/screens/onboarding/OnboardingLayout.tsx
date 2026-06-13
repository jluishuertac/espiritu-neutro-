import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '../../components/PrimaryButton';
import { Screen } from '../../components/Screen';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

type OnboardingLayoutProps = PropsWithChildren<{
  buttonDisabled?: boolean;
  buttonLabel?: string;
  eyebrow: string;
  helper?: string;
  onBack?: () => void;
  onContinue: () => void;
  title: string;
}>;

export function OnboardingLayout({
  buttonDisabled = false,
  buttonLabel = 'Continuar',
  children,
  eyebrow,
  helper,
  onBack,
  onContinue,
  title
}: OnboardingLayoutProps) {
  return (
    <Screen scroll>
      <View style={styles.container}>
        <View>
          {onBack ? (
            <Text onPress={onBack} style={styles.back}>
              ←
            </Text>
          ) : null}
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          {helper ? <Text style={styles.helper}>{helper}</Text> : null}
          <View style={styles.content}>{children}</View>
        </View>
        <PrimaryButton disabled={buttonDisabled} label={buttonLabel} onPress={onContinue} />
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
  container: {
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 680
  },
  content: {
    gap: spacing.md,
    marginTop: spacing.xl
  },
  eyebrow: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.8,
    marginBottom: spacing.md,
    textTransform: 'uppercase'
  },
  helper: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38
  }
});
