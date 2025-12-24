import { ProfileDetailCard } from "./Cards/ProfileDetailCard";
import { RecentChatsCard } from "./Cards/RecentChatsCard";
import { SettingsToggleCard } from "./Cards/SettingsToggleCard";

export const ProfileSettingsSection = () => (
  <div className="flex flex-wrap -mx-3">
    <SettingsToggleCard />
    <ProfileDetailCard />
    <RecentChatsCard />
  </div>
);
