import Image from "next/image";
import Link from "next/link";

import { requireAuth } from "@/lib/auth-guard";
import LogoutButton from "@/components/logout-button";
import { prisma } from "@/lib/db";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function Home() {
  const session = await requireAuth();
  const { user } = session;

  const dbuser = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    select: {
      plan: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  const isPremium = dbuser?.plan === "PREMIUM";

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-zinc-950 border-zinc-800">
        <CardHeader className="flex flex-col items-center text-center space-y-4">
          <Image
            src={user.image!}
            alt="user"
            width={80}
            height={80}
            className="rounded-full"
          />

          <div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
            <p className="text-sm text-zinc-400">{user.email}</p>
          </div>

          <Badge
            variant={isPremium ? "destructive" : "secondary"}
            className="text-xs"
          >
            {isPremium ? "PREMIUM PLAN" : "FREE PLAN"}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* PLAN INFO */}
          {isPremium && dbuser?.stripeCurrentPeriodEnd && (
            <div className="text-sm text-zinc-400 text-center">
              Active until{" "}
              <span className="text-white font-medium">
                {new Date(
                  dbuser.stripeCurrentPeriodEnd
                ).toLocaleDateString()}
              </span>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex flex-col gap-3">
            {!isPremium ? (
              <Link href="/pricing" className={buttonVariants()}>
                Upgrade to Premium
              </Link>
            ) : (
              <Button variant="outline">
                Manage Subscription
              </Button>
            )}

            <LogoutButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;