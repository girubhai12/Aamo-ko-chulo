import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client= sanityClient({
    projectId:"rg6ol0z4",
    dataset: 'production',
    apiVersion:'2024-02-24',
    useCdn:true,
    token:"skoSWaPTOpjV3luwGxQgsBD2tKUiIOmoy1x03MZYUGNlcdyMk0w8doEwIMTA2Iq24VV2Qaz55piKAIb3CnXrGo6mGY1wTdxzDkTE6YgppdOA2e7T01j16F9gnT3OKKpHEYfjA3Ph4l9txJ37JEVFTsosJlyxoEHvoz91OHbqy5yfMldOjrrw"

})
const builder =ImageUrlBuilder(client);

export const urlFor=(source) => builder.image(source)