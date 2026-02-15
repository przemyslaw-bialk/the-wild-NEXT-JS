"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("you must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalIdRegex = /^[a-zA-Z0-9]{6,12}$/;
  if (!nationalIdRegex.test(nationalID))
    throw new Error("wrong national ID number");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("couldnt update your profile");

  revalidatePath("/account/profile");
}

export async function signinAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}
