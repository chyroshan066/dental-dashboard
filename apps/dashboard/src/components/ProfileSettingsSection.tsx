import { ProfileDetailCard } from "./Cards/ProfileDetailCard";
import { SettingsToggleCard } from "./Cards/SettingsToggleCard";

export const ProfileSettingsSection = () => (
  <div className="flex flex-wrap -mx-3">
    <SettingsToggleCard />
    <ProfileDetailCard />
  </div>
);
