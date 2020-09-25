/* eslint-disable */
require('dotenv').config({
  path: '.env',
});

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions;

  const data = await fetch(
    `https://api.gumroad.com/v2/products?access_token=${process.env.GUMROAD_ACCESS_TOKEN}`,
  ).then((res) => res.json());

  data.products.map((product) => {
    const node = {
      name: product.name,
      image: product.preview_url,
      id: product.id,
      url: product.short_url,
      internal: {
        type: `GumroadProductType`,
        contentDigest: createContentDigest(data),
      },
    };
    createNode(node);
  });
};
