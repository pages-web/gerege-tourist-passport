import { WeatherProvider } from "./WeatherProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = async ({ children }: ProvidersProps) => {
  return <WeatherProvider>{children}</WeatherProvider>;
};
