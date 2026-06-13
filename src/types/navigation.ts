export type OnboardingData = {
  goal?: string;
  barrier?: string;
  level?: string;
  habits: string[];
};

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  OnboardingGoal: undefined;
  OnboardingBarrier: { data: OnboardingData };
  OnboardingLevel: { data: OnboardingData };
  HabitSelection: { data: OnboardingData };
  ChallengeConfirmation: { data: OnboardingData };
};
