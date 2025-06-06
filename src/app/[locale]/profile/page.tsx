import ProfileEdit from "@/components/profile/profile-edit/profile-edit";
import ProfileLayout from "./profile-layout";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ProfileTabsList from "@/components/profile/profile-tab-trigger";
import ChangePhone from "@/components/profile/profile-edit/change-phone";
import ChangeEmail from "@/components/profile/profile-edit/change-email";
import ChangePassword from "@/components/profile/profile-edit/change-password";
import Email from "@/components/profile/profile-edit/email";
import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("Welcome").raw;

  return (
    <ProfileLayout title={t("personal")} description={t("edithProfile")}>
      <Tabs defaultValue="info" className="w-full">
        <ProfileTabsList />
        <TabsContent value="info">
          <ProfileEdit />
        </TabsContent>
        <TabsContent value="password">
          <ChangePassword />
        </TabsContent>
        <TabsContent value="phone">
          <ChangePhone />
        </TabsContent>
        <TabsContent value="email">
          <Email />
        </TabsContent>
      </Tabs>
    </ProfileLayout>
  );
};

export default Profile;
