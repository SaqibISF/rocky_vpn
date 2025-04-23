export type VPN_SERVER = {
  image_url: string;
  name: string;
  status: string;
  sub_server: { name: string; status: string };
  type: "premium" | "free";
};
