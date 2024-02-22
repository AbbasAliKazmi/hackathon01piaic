import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vvv7t1f3",
  dataset: "production",
  apiVersion: "2024-02-14",
  useCdn: false,
};

const client = createClient(config);

export default client;