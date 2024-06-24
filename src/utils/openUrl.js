import { Browser } from "@capacitor/browser";

export const openUrl = async (url) => {
   if(!url) return null
   await Browser.open({ url });
};