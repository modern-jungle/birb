"use strict";

const slugify = require("slugify");
const slugifyOptions = { remove: /[*+~.()'"!:@]/g, lower: true };

module.exports = {
  beforeSave: async (model, attrs, options) => {
    if (options.method === "insert" && attrs.title) {
      model.set("slug", slugify(attrs.title, slugifyOptions));
    } else if (options.method === "update" && attrs.title) {
      attrs.slug = slugify(attrs.title, slugifyOptions);
    }
  }
};
