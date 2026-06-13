import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type OptionCardProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function OptionCard({ label, selected, onPress }: OptionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [styles.card, selected && styles.selected, pressed && styles.pressed]}
    >
      <Text style={[styles.indicator, selected && styles.selectedText]}>{selected ? '✓' : '○'}</Text>
      <Text style={[styles.label, selected && styles.selectedText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.md,
    padding: spacing.md
  },
  indicator: {
    color: colors.textMuted,
    fontSize: 20,
    fontWeight: '700',
    width: 24
  },
  label: {
    color: colors.text,
    flex: 1,
    fontSize: 16,
    fontWeight: '600'
  },
  pressed: {
    opacity: 0.85
  },
  selected: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary
  },
  selectedText: {
    color: colors.primaryDark
  }
});
