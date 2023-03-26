import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "a3n51tfn",
    dataset: "production",
    token: process.env.SANITY_AUTH_TOKEN,
    useCdn: true,
    apiVersion: "2022-02-03"
});