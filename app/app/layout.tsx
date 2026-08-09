import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase-server";
import { AppNav } from "@/components/app/AppNav";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = supabaseServer();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Cargar perfil
  const { data: profile } = await supabase
    .from("kaira_profiles")
    .select("name, email, avatar_url, onboarding_completed")
    .eq("id", user.id)
    .single();

  const userName = profile?.name ?? user.email?.split("@")[0] ?? "Tú";

  return (
    <div className="min-h-screen bg-cream">
      <AppNav userName={userName} avatarUrl={profile?.avatar_url ?? null} />
      <main className="lg:pl-[240px]">
        <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}
