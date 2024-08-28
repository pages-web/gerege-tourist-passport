import { MailIcon } from "lucide-react";
import ChangeEmail from "./change-email";

const Email = () => {
  return (
    <div className="py-12">
      <EmailDescription title="Таны цахим хаяг баталгаажсан">
        <p className="text-black/50">
          Хэрэв та цахим хаягаа өөрчлөхийг хүсэж байгаа бол {`"Цахим хаяг солих"`}
          товч дээр дарна уу
        </p>
      </EmailDescription>
      <ChangeEmail />
    </div>
  );
};

const EmailDescription = ({
  title,
  children,
}: React.PropsWithChildren & { title: string }) => {
  return (
    <div className="flex flex-col items-center gap-6 pb-6">
      <MailIcon className="h-8 w-8 text-black/60" strokeWidth={1.7} />
      <div className="text-center space-y-1">
        <h3 className="font-medium">{title}</h3>
        <div className="text-sm text-black/50">{children}</div>
      </div>
    </div>
  );
};

export default Email;
