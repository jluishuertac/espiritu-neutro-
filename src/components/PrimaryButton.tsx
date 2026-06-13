import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
};

export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  variant = 'primary',
  style
}: PrimaryButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style
      ]}
    >
      <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 18,
    justifyContent: 'center',
    minHeight: 56,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md
  },
  disabled: {
    opacity: 0.45
  },
  label: {
    fontSize: 16,
    fontWeight: '700'
  },
  pressed: {
    transform: [{ scale: 0.99 }]
  },
  primary: {
    backgroundColor: colors.primary
  },
  primaryLabel: {
    color: colors.white
  },
  secondary: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
    borderWidth: 1
  },
  secondaryLabel: {
    color: colors.primaryDark
  }
});
