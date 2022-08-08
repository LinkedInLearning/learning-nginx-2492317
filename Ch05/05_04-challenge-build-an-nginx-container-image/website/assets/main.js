var BV =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpBV"] = window["webpackJsonpBV"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_states__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _mixins_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _apps_cart___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return _apps_cart___WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _apps_characterMerchandise___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(275);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "characterMerchandise", function() { return _apps_characterMerchandise___WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _apps_checkout___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(290);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkout", function() { return _apps_checkout___WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _apps_checkoutSuccess___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(293);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkoutSuccess", function() { return _apps_checkoutSuccess___WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _apps_contactForm___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(294);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contactForm", function() { return _apps_contactForm___WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _apps_header___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(295);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "header", function() { return _apps_header___WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _apps_productDetail___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(299);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productDetail", function() { return _apps_productDetail___WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _apps_shop___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(301);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shop", function() { return _apps_shop___WEBPACK_IMPORTED_MODULE_10__["default"]; });


















/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_quantityChanger___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = ({
  model: {
    prop: 'quantity',
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    index: {
      required: true,
      type: Number,
    },
    product: {
      required: true,
      type: Object,
    },
    quantity: {
      required: true,
      type: Number,
    },
    sku: {
      required: true,
      type: Object,
    },
  },
  components: {
    vQuantityChanger: _components_quantityChanger___WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  computed: {
    color() {
      return Object(_data_helpers__WEBPACK_IMPORTED_MODULE_1__["capitalize"])(this.sku.color);
    },
    href() {
      return `/shop/product/?slug=${this.sku.parentSlug}&color=${this.sku.color}&size=${this.sku.size}`;
    },
    price() {
      return this.product.price;
    },
    qty: {
      get() {
        return this.quantity;
      },
      set(qty) {
        this.$emit('input', qty);
        this.$emit('update_cart');
      },
    },
    size() {
      return _data_products__WEBPACK_IMPORTED_MODULE_3__["categoriesById"][this.product.category].sizes[this.sku.size];
    },
  },
  methods: {
    formatPrice(num) {
      return Object(_data_shared__WEBPACK_IMPORTED_MODULE_2__["formatPrice"])(num);
    },
  },
  template: 'local',
});


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
    },
    value: {
      required: true,
      type: Number,
    },
  },
  template: 'local',
});


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

const { capitalize, kebabCase, shuffle } = __webpack_require__(13);
const dlv = __webpack_require__(15);
const { format } = __webpack_require__(16);
const shared = __webpack_require__(248);

module.exports = {
  alt(obj, path = 'image.alt') {
    return this.delve(obj, path);
  },
  capitalize(str = '') {
    return capitalize(str);
  },
  formatDate(date, formatStr) {
    return format(date, formatStr);
  },
  em(value) {
    return `${value / 16}em`;
  },
  delve(obj, path, fallback = '') {
    return dlv(obj, path, fallback) || fallback;
  },
  formatPrice: shared.formatPrice,
  isExactPage(pageUrl, href) {
    return pageUrl === href;
  },
  isExactOrParentPage(pageUrl, href) {
    return pageUrl === href || pageUrl.split('/')[1] === href.split('/')[1];
  },
  kebabCase(str) {
    return kebabCase(str);
  },
  gif() {
    return `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
  },
  getRelatedPosts(slug, tags, collections) {
    return shuffle([...new Set(tags.slice(1).reduce((arr, tag) => {
      return [...arr, ...collections[tag]];
    }, []))].filter((post) => post.fileSlug !== slug)).slice(-2);
  },
  src(obj, path, size, format = 'jpg') {
    return `/images/${this.delve(obj, path, 'placeholder')}-${size}.${format}`;
  },
  usaStates: ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
};


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({
  created() {
    this.states = {
      isDisabled: 'is-disabled',
      isExpanded: 'is-expanded',
      isHidden: 'is-hidden',
      isSelected: 'is-selected',
      isVisible: 'is-visible',
    };
  },
});


/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = {
  formatPrice(num = 0, precision = 2) {
    return `$${precision > 0 ? num.toFixed(precision) : num}`;
  },
  taxRate: 7.5,
};


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

const _flatten = __webpack_require__(250);

const colors = [
  'black',
  'gray',
  'white',
];

const categoriesById = {
  tShirt: {
    name: 'T-shirts',
    description: `
      Our t-shirts are made from ringspun, long-staple organic cotton that's ethically-sourced from member farms of local organic cotton cooperatives.  Original artwork is screen-printed using PVC- and phthalate-free inks. Features crew-neck styling, shoulder-to-shoulder taping, and strong side seams. Machine wash warm, tumble dry low.
    `,
    productSuffix: ' T-shirt',
    colors,
    price: 26,
    sizes: {
      s: 'S',
      m: 'M',
      l: 'L',
      xl: 'XL',
      xxl: 'XXL',
    },
  },
  baseballHat: {
    name: 'Baseball Hats',
    description: `
      Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Binaryville artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching, sewn eyelets, and adjustable fabric closure.
    `,
    productSuffix: ' Baseball Hat',
    colors,
    price: 29,
    sizes: {
      osfm: 'One size fits most',
    },
  },
  apron: {
    name: 'Aprons',
    description: `
      Everyone's a chef in our eco-friendly apron, made from 55% organic cotton and 45% recycled polyester. Showcase your favorite Binaryville robot design, screen-printed in PVC- and phthalate-free inks. Apron measures 24 inches wide by 30 inches long and is easily adjustable around the neck and waist with one continuous strap. Machine wash warm, tumble dry low.
    `,
    productSuffix: ' Apron',
    colors,
    price: 24,
    sizes: {
      '24x30': '24” wide x 30” long',
    },
  },
  mug: {
    name: 'Mugs',
    description: `
      Enjoy your morning coffee or tea in the company of your favorite Binaryville robot. Our strong ceramic mug, with its comfortable D-shaped handle, is microwave and dishwasher safe, and available in one size: 11 oz (3.2” diameter x 3.8” h).
    `,
    productSuffix: ' Mug',
    colors,
    price: 16,
    sizes: {
      '11oz': '11 oz (3.2” diameter x 3.8” h)',
    },
  },
};

const categories = Object.values(categoriesById);

const categoriesIds = Object.keys(categoriesById).sort();

const designsById = {
  microcontrollers: {
    name: 'Great Microcontrollers Think Alike',
    categories: categoriesIds,
    character: 'Rex',
    description: `
      After all, Rex robot would know. His chip can be traced to a long lineage of great microcontrollers and microprocessors including the PIC16C84, WD1402A, SPARC, TA2020, and the MC68000.
    `,
  },
  compute: {
    name: 'I Compute, Therefore I Am',
    categories: categoriesIds,
    character: 'Dolores',
    description: `
      Wide-eyed and grinning, Dolores robot shares the secret to a successful life, with her unique take on the famous Descartes quote.  Ah, words to compute by, Dolores!
    `,
  },
  '0s1s': {
    name: 'It’s All 0’s and 1’s to Me!',
    categories: categoriesIds,
    character: 'Fred',
    description: `
      Perhaps nothing rings more true in Binaryville than this favorite phrase of the locales. Fred robot, encircled in binary digits, proudly beams out from behind these words of wisdom.
    `,
  },
  gumball: {
    name: 'A Gumball for Your Thoughts',
    categories: categoriesIds,
    character: 'Bubbles',
    description: `
      Always the visionary, Bubbles robot extends her big heart (and generous bubble gum collection) to encourage the sharing of ideas.
    `,
  },
};

const designs = Object.values(designsById);

const designsIds = Object.keys(designsById).sort();

const productsByCategory = categoriesIds.reduce((prodObj, categoryKey) => {
  prodObj[categoryKey] = designsIds.reduce((categoryArr, designKey) => {
    const category = categoriesById[categoryKey];
    const design = designsById[designKey];
    const character = design.character;

    categoryArr.push({
      [`${character}-${designKey}-${categoryKey}`.toLowerCase()]: {
        category: categoryKey,
        character,
        colors: category.colors,
        design: designKey,
        name: `${design.name}${category.productSuffix}`,
        price: category.price,
        skus: Object.keys(category.sizes).reduce((skuArr, size) => {
          category.colors.reduce((skuArrDeep, color) => {
            skuArrDeep.push({
              [`${character}-${designKey}-${categoryKey}-${size}-${color}`.toLowerCase()]: {
                color,
                parentSlug: `${character}-${designKey}-${categoryKey}`.toLowerCase(),
                size,
              },
            });

            return skuArrDeep;
          }, skuArr);

          return skuArr;
        }, [])
      },
    });

    return categoryArr;
  }, []);


  return prodObj;
}, {});

const flattenedProducts = _flatten(Object.keys(productsByCategory).reduce((productArr, category) => {
  productArr.push(productsByCategory[category]);

  return productArr;
}, []));

const products = flattenedProducts.reduce((productArr, product) => {
  productArr.push({
    ...Object.values(product)[0],
    slug: Object.keys(product)[0],
  });

  return productArr;
}, []);

const productsById = products.reduce((obj, product) => {
  obj[product.slug] = product;

  return obj;
}, {});

const skusById = products.reduce((obj, product) => {
  return product.skus.reduce((deepObj, sku) => {
    deepObj[Object.keys(sku)[0]] = {
      ...Object.values(sku)[0],
    };

    return deepObj;
  }, obj);
}, {});

module.exports = {
  categoriesById,
  categoriesIds,
  designsById,
  designsIds,
  products,
  productsById,
  skusById,
};


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var quench_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(265);



const createApp = (el, defaultOpts) => {
  const opts = { ...defaultOpts };

  opts.el = el;

  opts.components = Object(quench_vue__WEBPACK_IMPORTED_MODULE_1__["createComponentTemplates"])(opts.el, opts.components);
  opts.data = { ...opts.data, ...Object(quench_vue__WEBPACK_IMPORTED_MODULE_1__["createAppData"])(opts.el) };
  opts.template = Object(quench_vue__WEBPACK_IMPORTED_MODULE_1__["createAppTemplate"])(opts.el, opts.template);

  return new vue__WEBPACK_IMPORTED_MODULE_0__["default"](opts);
};

/* harmony default export */ __webpack_exports__["default"] = ((el, defaultOpts = {}) => {
  return !el ? null : el.length > 1 ? Array.from(el).map((el) => createApp(el, defaultOpts)) : createApp(el, defaultOpts);
});


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateQuantity", function() { return calculateQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCart", function() { return setCart; });
/* harmony import */ var _apps_eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_1__);



const cartKey = 'bv-cart-20200725';

const addToCart = (id, quantity) => {
  const cartItems = getCart().items;

  const existingSkuIndex = cartItems.findIndex((sku) => sku.id === id);

  if (existingSkuIndex > -1) {
    cartItems[existingSkuIndex].quantity += quantity;
  }
  else {
    cartItems.push({
      id,
      quantity,
    });
  }

  setCart(cartItems);
};

const calculateQuantity = (cartItems) => {
  let count = 0;

  if (cartItems.length) {
    count = cartItems.reduce((count, item) => count += item.quantity, count);
  }

  return count;
};

const calculateSubTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    const sku = _data_products__WEBPACK_IMPORTED_MODULE_1__["skusById"][item.id];
    const price = _data_products__WEBPACK_IMPORTED_MODULE_1__["productsById"][sku.parentSlug].price;

    return total += (item.quantity * price);
  }, 0);
};

const clearCart = () => {
  localStorage.removeItem(cartKey);
};

const getCart = () => JSON.parse(localStorage.getItem(cartKey)) || {
  items: [],
  quantity: 0,
  subTotal: 0,
};

const setCart = (cartItems, callback) => {
  const cart = {
    items: cartItems,
    quantity: calculateQuantity(cartItems),
    subTotal: calculateSubTotal(cartItems),
  };

  localStorage.setItem(cartKey, JSON.stringify(cart));
  _apps_eventBus__WEBPACK_IMPORTED_MODULE_0__["default"].$emit('set_cart');

  if (callback) {
    callback();
  }
}


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_characters__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(264);




const el = document.getElementById('vue-character-merchandise');

const data = {
  products: [],
};

const components = {
  vProduct: _components_product___WEBPACK_IMPORTED_MODULE_0__["default"],
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_2__["default"])(el, opts);
}({ data, components }));


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_colorPicker___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vColorPicker: _components_colorPicker___WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    colors: {
      required: true,
      type: Array,
    },
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: Number,
    },
    slug: {
      required: true,
      type: String,
    },
    visuallyHiddenLegend: {
      type: Boolean,
    },
  },
  data() {
    return {
      color: '',
    };
  },
  computed: {
    href() {
      return `/shop/product/?slug=${this.slug}&color=${this.color}`;
    },
    formattedPrice() {
      return Object(_data_shared__WEBPACK_IMPORTED_MODULE_1__["formatPrice"])(this.price);
    },
    src() {
      return `/images/products/${this.slug}-${this.color}.jpg`;
    },
  },
  methods: {
    setColor(color) {
      this.color = color;
    },
  },
  created() {
    const params = window.location.search.split('&');

    params.forEach((param) => {
      const matches = param.match(/(color)=(.+)/);

      if (matches && matches[1] === 'color') {
          this.color = matches[2];
      }
    });

    if (!this.color) {
      this.color = this.colors[0];
    }
  },
  template: 'local',
});


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_styles__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  styles: _data_styles__WEBPACK_IMPORTED_MODULE_0__["colorPicker"],
  props: {
    colors: {
      required: true,
      type: Array,
    },
    selectedColor: {
      required: true,
      type: String,
    },
    slug: {
      required: true,
      type: String,
    },
    variant: {
      required: true,
      type: String,
    },
    visuallyHiddenLegend: {
      type: Boolean,
    },
  },
  mounted() {
    this.$once('set-color', (color) => {
      this.$emit('set-color', color);
    });
  },
  template: 'local',
});


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

const button = __webpack_require__(279);
const cart = __webpack_require__(280);
const colorPicker = __webpack_require__(281);
const iconButton = __webpack_require__(282);
const orderSummary = __webpack_require__(283);
const product = __webpack_require__(284);
const promoCode = __webpack_require__(285);
const quantityChanger = __webpack_require__(286);
const sizePicker = __webpack_require__(287);
const svg = __webpack_require__(288);

module.exports = {
  button,
  cart,
  colorPicker,
  iconButton,
  orderSummary,
  product,
  promoCode,
  quantityChanger,
  sizePicker,
  svg,
};


/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = {
  base: `
    display:inline-block
    font-size:18px
    font-weight:700
    line-height:1
    padding-horizontal:24px
    padding-vertical:12px
  `,
  primary: `
    background-color:orange-ff583d
    color:neutral-222224
    :hocus--background-color:yellow-f0c808
  `,
  primaryGroup: `
    group:hocus--background-color:yellow-f0c808
  `,
  secondary: `
    background-color:blue-265f8e
    color:neutral-ffffff
    :hocus--background-color:blue-c5e6f9
    :hocus--color:blue-265f8e
  `,
  secondaryGroup: `
    group:hocus--background-color:blue-c5e6f9
    group:hocus--color:blue-265f8e
  `,
};


/***/ }),

/***/ 280:
/***/ (function(module, exports) {

module.exports = {
  visuallyHidden: `
    visually-hidden
  `,
  root: `
    color:blue-265f8e
    display:flex
    flex-direction:column
    margin-bottom:12px
  `,
  summary: `
    display:flex
    flex-direction:column
    @mq-768--border-top-color:neutral-979797
    @mq-768--border-top-style:solid
    @mq-768--border-top-width:1px
    @mq-768--align-items:flex-end
    @mq-768--order:1
    @mq-768--margin-top:16px
    @mq-768--padding-right:16px
    @mq-768--padding-top:32px
  `,
  subtotal: `
    font-size:24px
    font-weight:500
    margin-bottom:16px
  `,
  checkout: `
    margin-bottom:32px
    margin-top:20px
    width:100%
    @mq-600--max-width:300px
  `,
  table: `
    @mq-upto-768--display:block
    @mq-upto-768--margin-horizontal:-24px
  `,
  thead: `
    @mq-upto-768--visually-hidden
  `,
  tbody: `
    @mq-upto-768--display:block
  `,
  tr: `
    padding-bottom:4px
    padding-top:20px
    @mq-upto-768--border-top-color:neutral-979797
    @mq-upto-768--border-top-style:solid
    @mq-upto-768--border-top-width:1px
    @mq-upto-768--display:block
    @mq-upto-768--padding-horizontal:24px
  `,
  th: `
    border-bottom-color:neutral-979797
    border-bottom-style:solid
    border-bottom-width:1px
    color:neutral-4c5b5c
    font-size:20px
    font-weight:400
    padding-bottom:12px
    padding-horizontal:20px
    text-align:left
  `,
  td: `
    padding:16px
    @mq-upto-768--display:block
    @mq-upto-768--padding-left:cart-image
    @mq-upto-768--padding-right:0
    @mq-upto-768--padding-vertical:0
  `,
  tdImage: `
    padding-left:16px
    padding-vertical:16px
    vertical-align:top
    @mq-upto-768--display:none
  `,
  tdProduct: `
    padding:16px
    position:relative
    @mq-upto-768--padding-left:cart-image
    @mq-upto-768--padding-right:0
    @mq-upto-768--padding-vertical:0
  `,
  tdRemove: `
    text-align:right
  `,
  image: `
    max-width:cart-image
  `,
  imageMobile: `
    pos-left:0
    position:absolute
    width:100%
    @mq-768--display:none
  `,
  name: `
    color:blue-265f8e
    display:block
    font-size:20px
    font-weight:500
    margin-bottom:8px
    @mq-upto-768--margin-left:20px
    :hocus--text-decoration:underline
  `,
  description: `
    color:neutral-4c5b5c
    display:block
    line-height:1.125
    @mq-upto-768--margin-bottom:16px
    @mq-upto-768--margin-left:20px
  `,
  descriptionItem: `
    display:block
  `,
  price: `
    display:block
    font-size:24px
    font-weight:500
    @mq-upto-768--margin-bottom:12px
    @mq-upto-768--margin-left:20px
  `,
  priceTotal: `
    @mq-upto-768--visually-hidden
  `,
  quantity: `
    @mq-upto-768--margin-left:20px
  `,
  iconButton: `
    @mq-upto-768--margin-left:20px
    @mq-upto-768--margin-top:-2px
    @mq-upto-768--pos-left:136px
    @mq-upto-768--pos-top:-30px
  `,
  iconButtonSvg: `
    color:neutral-ffffff
    size:24px
  `,
};


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = {
  picker: {
    legend: `
      font-20px
      line-height:1.2
      margin-bottom:12px
      is-hidden--visually-hidden
    `,
    wrapper: `
      display:flex
    `,
  },
  option: {
    root: {
      variant: {
        small: `
          margin-right:12px
        `,
        large: `
          margin-right:16px
        `,
      },
    },
    text: `
      visually-hidden
    `,
    input: `
      appearance:none
      border-width:0
      picker-option:checked-target--border
      position:absolute
    `,
    swatch: {
      base: `
        border-style:solid
        border-width:1px
        cursor:pointer
        :hocus--border-color:blue-00bff3
      `,
      color: {
        black: `
          background-color:neutral-000000
          border-color:neutral-000000
        `,
        gray: `
          background-color:neutral-c4c4c4
          border-color:neutral-c4c4c4
        `,
        white: `
          background-color:neutral-ffffff
          border-color:neutral-000000
        `,
      },
      variant: {
        small: `
          size:42x24px
          :hocus--border-width:2px
        `,
        large: `
          size:48px
          :hocus--border-width:3px
        `,
      },
    },
  },
};


/***/ }),

/***/ 282:
/***/ (function(module, exports) {

module.exports = {
  root: `
    group
    display:inline-block
    position:relative
  `,
  variant: {
    circle: `
      background-color:neutral-979797
      border-radius:1000
      :hocus--background-color:orange-ff583d
    `,
  },
  badge: {
    base: `
      border-radius:1000
      color:neutral-3a3a3d
      font-size:12px
      font-weight:500
      line-height:16px
      padding-horizontal:4px
      pos-right:-10px
      pos-top:-5px
      position:absolute
    `,
    std: `
      background-color:yellow-f0c808
    `,
    alt: `
      background-color:orange-ff583d
      opacity:0
      transition-duration:200
      transition-property:all
      visibility:hidden
      group:hocus__opacity:100
      group:hocus__visibility:visible
    `,
  }
};


/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = {
  visuallyHidden: `
    visually-hidden
  `,
  heading: `
    color:blue-265f8e
    margin-bottom:16px
    margin-top:-8px
  `,
  li: `
    color:neutral-483e40
    display:flex
    padding-bottom:20px
  `,
  image: `
    margin-right:16px
    max-width:order-summary-image
  `,
  itemWrapper: `
    width:100%
  `,
  name: `
    color:blue-265f8e
    font-size:18px
    line-height:1.166
    margin-bottom:2px
  `,
  description: `
    font-size:14px
    margin-bottom:12px
  `,
  descriptionItem: `
    display:block
  `,
  quantityPriceWrapper: `
    display:flex
    font-size:18px
    justify-content:space-between
  `,
  tableWrapper: `
    margin-horizontal:-8px
  `,
  table: `
    color:neutral-000000
    text-align:left
    width:100%
  `,
  tfootRow: `
    border-top-color:neutral-483e40
    border-top-style:solid
    border-top-width:1px
    color:blue-2c3d57
    font-size:20px
    font-weight:500
  `,
  tfootCell: `
    color:blue-265f8e
    padding-top:12px
  `,
  theadRow: `
    border-bottom-color:neutral-483e40
    border-bottom-style:solid
    border-bottom-width:1px
  `,
  cell: `
    padding-horizontal:8px
    padding-vertical:2px
    vertical-align:top
  `,
  cellFirst: `
    padding-top:16px
  `,
  cellLast: `
    padding-bottom:16px
  `,
  cellPrice: `
    text-align:right
  `,
};


/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = {
  root: `
    display:flex
    flex-direction:column
    flex-grow:1
  `,
  link: `
    group
    flex-grow:1
    color:neutral-3a3a3d
    margin-bottom:16px
  `,
  imageWrapper: `
    display:block
    margin-bottom:16px
    padding-bottom:100%
    position:relative
  `,
  image: `
    max-width:100%
    position:absolute
  `,
  name: `
    font-size:20px
    font-weight:500
    margin-bottom:16px
    group:hocus__color:orange-ff583d
  `,
  price: `
    font-size:24px
    line-height:1.166
  `,
};


/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = {
  root: `
    display:flex
    line-height:1_083
    margin-vertical:4px
  `,
  valid: `
    color:green-459482
  `,
  invalid: `
    color:red-d02619
  `,
  tag: `
    margin-right:2px
    size:16px
  `,
  iconButton: `
    margin-left:4px
    size:16px
  `,
  iconButtonSvg: `
    color:neutral-ffffff
    size:16px
  `,
};


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = (locals) => {
  return {
    root: `
      display:flex
    `,
    label: `
      visually-hidden
    `,
    input: `
      border-horizontal-width:0
      border-vertical-color:neutral-483e40
      border-vertical-style:solid
      border-vertical-width:1px
      color:neutral-483e40
      font-size:28px
      font-weight:500
      max-width:quantity${locals.size === 'small' ? '-small' : ''}
      order:1
      text-align:center
    `,
    button: `
      group
      background-color:blue-dcf0fb
      border-color:blue-324f6b
      border-style:solid
      border-width:1px
      color:blue-324f6b
      padding:${locals.size === 'small' ? '12px' : '16px'}
      :hocus--color:orange-ff583d
    `,
    buttonMinus: `
      order:0
    `,
    buttonPlus: `
      order:2
    `,
    isDisabled: `
      is-disabled
    `,
    svg: `
      size:18px
      svg-fill-color:current
      group-is-disabled__opacity:20
    `,
  };
};


/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = {
  picker: {
    legend: `
      font-size:20px
      line-height:1.2
      margin-bottom:12px
      is-hidden--visually-hidden
    `,
    wrapper: `
      display:flex
      flex-wrap:wrap
      margin-bottom:-16px
    `,
  },
  option: {
    root: `
      margin-right:16px
      margin-bottom:16px
    `,
    input: `
      appearance:none
      picker-option:checked-target--border
      position:absolute
    `,
    item: `
      align-items:center
      background-color:neutral-ffffff
      border-color:neutral-000000
      border-style:solid
      border-width:1px
      cursor:pointer
      display:flex
      justify-content:center
      font-size:20px
      line-height:1
      min-height:size-picker-option
      min-width:size-picker-option
      padding-horizontal:2px
      :hocus--border-color:blue-00bff3
      :hocus--border-width:3px
    `,
  },
};


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = {
  root: `
    display:inline-block
    pointer-events:none
    svg-fill-color:current
    svg-fill-rule:even-odd
    vertical-align:bottom
  `,
};

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

const charactersById = {
  Rex: {
    id: 'rex',
    name: 'Rex',
    url: '/about/rex/',
    bio: `
      Rex is the Mayor of Binaryville, and a well-loved personality in town. He rose to robotdom from a microprocessor plant on the south side of town, where many famous and influential robots before him were conceived.
    `,
  },
  Dolores: {
    id: 'dolores',
    name: 'Dolores',
    url: '/about/dolores/',
    bio: `
      Dolores robot is a computational genius who performs calculations for various Binaryville businesses and organizations. In her spare time, Dolores has been noodling on the creation of the perfect web browser that will make all other browsers obsolete. We're rooting for you, Dolores!
    `,
  },
  Bubbles: {
    id: 'bubbles',
    name: 'Bubbles',
    url: '/about/bubbles/',
    bio: `
      Bubble Gum robot, or “Bubbles” for short, is from a family of track-footed robots that originated from an experiment melding candy vending machines with robotics in the early 1980s. Bubbles is a favorite of Binaryville, not just because she generously dispenses candy, but also because she has one of the more "bubbly" personalities of the villagers.
    `,
  },
  Fred: {
    id: 'fred',
    name: 'Fred',
    url: '/about/fred/',
    bio: `
      Fred is inquisitive and creative, and always conjuring up ways to improve Binaryville and the lives of its inhabitants. He's been at the forefront of many inventions, but has a special affinity for improving the world through alternative energy and green-living. Fred's engineering collaborations with the City of Binaryville have helped the city reduce its energy consumption year over year, and he's twice been awarded the highly coveted Binaryville Medallion of Honor.
    `,
  },
  Rivet: {
    id: 'rivet',
    name: 'Rivet',
    url: '/about/rivet/',
    bio: `
      Rivet descended from an assembly line of amphibious robots, but never quite took to deep water - though he does love rolling around in mucky marshes and soaking up the mud on vacation. With his advanced temperature sensors and all-weather construction, he's often dispatched to remote regions all around the world to help with disaster relief work.
    `,
  },
  Eileen: {
    id: 'eileen',
    name: 'Eileen',
    url: '/about/eileen/',
    bio: `
      Binaryville's Advanced Robotics Assembly Division has become a highly profitable manufacturer of automation technology under Eileen's watchful managerial eye. While Eileen has high standards and leaves nothing to chance when overseeing the factory floor, she's also known for being exceptionally fair, supportive, and communicative with her team members. In her off hours, she enjoys stargazing and astronomy.
    `,
  },
  Belle: {
    id: 'belle',
    name: 'Belle',
    url: '/about/belle/',
    bio: `
      Belle is a safety inspector at Binaryville's Advanced Robotics Assembly Division, and while she doesn't particularly like to toot her own horn, her job does require blaring her siren and flashing her warning light whenever a safety concern is discovered. Belle is proud that she helps keep residents of Binaryville safe and sound. Belle's extracurricular activities include gardening, knitting, and volunteering with the local Robot Scouts chapter, where she teaches outdoor safety.
    `,
  },
  Cosmo: {
    id: 'cosmo',
    name: 'Cosmo',
    url: '/about/cosmo/',
    bio: `
      For an esteemed aeronautical engineer who manned the first ever flight to Mars from Binaryville (or anywhere), Cosmo is one of the most down-to-earth folks you'll ever meet. His favorite pastimes are playing bingo, soaking up the sun at Binaryville Beach, and reading spy novels.
    `,
  },
  Dolly: {
    id: 'dolly',
    name: 'Dolly',
    url: '/about/dolly/',
    bio: `
      Dolly is Binaryville's local fitness guru with the huge "can-do" attitude. Her aerobics and spinning classes at the local gym are booked weeks in advance, and she's a popular personal trainer who's inspired many folks to improve their lives through exercise and healthful eating. In her off-hours, Dolly can be found at the hottest karaoke spots in Binaryville. (Yes, there's more than one!)
    `,
  },
  Sergeant: {
    id: 'sergeant',
    name: 'Sergeant',
    url: '/about/sergeant/',
    bio: `
      Sergeant is always nearby to lend a helping claw to his fellow factory automation friends. Being able to pull 2000 pounds has its distinct advantages, and Sergeant is never bored. He also serves the City of Binaryville as an emergency services volunteer. His strength, determination, and kindness have saved the day on many occasions.
    `,
  },
  Oscar: {
    id: 'oscar',
    name: 'Oscar',
    url: '/about/oscar/',
    bio: `
      When not assembling tiny computer parts, with pinpoint accuracy and commendable speed, Oscar, a diehard Denver Bronco’s fan, lives for watching Bronco’s games and managing their fan club. He also dabbles in art, and especially enjoys painting on grains of rice, where he can relax into a trance-like state and focus for hours.
    `,
  },
  Levi: {
    id: 'levi',
    name: 'Levi',
    url: '/about/levi/',
    bio: `
      Levi is a fixture in the Advanced Robotics Assembly Division where he’s skilled in picking out defective parts and sorting them for recycle. He’s known as an expert in quality control and has written several successful books on the subject. While his job requires absolute concentration and meticulous attention to details, he enjoys a more disorganized home life and takes on new hobbies as curiosity strikes.
    `,
  },
  Elton: {
    id: 'elton',
    name: 'Elton',
    url: '/about/elton/',
    bio: `
      Elton’s a key grip in the Binaryville movie industry, where he’s known for his expert lighting and camera operation. He’s also experienced in front of the camera and enjoys taking acting lessons. If you look closely, you’ll see him as an extra, or in cameo roles, in several movies including <b>Automation Man</b> and <b>Factory Blues</b>.
    `,
  },
  Spring: {
    id: 'spring',
    name: 'Spring',
    url: '/about/spring/',
    bio: `
      Some of the most beautiful buildings and bridges in Binaryville and beyond were built under Spring’s trusty care. Her steady reach, precision, and attention-to-detail are behind many architectural masterpieces. When not serving as the go-to bot for raising pillars, sculptures, and other priceless adornments, Spring is a dedicated member of the Binaryville Volunteer Firefighters.
    `,
  },
};

const charactersIds = Object.keys(charactersById).sort();

module.exports = {
  charactersById,
  charactersIds,
};


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_orderSummaryItem___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var _components_promoCode___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(292);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(264);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(273);








const el = document.getElementById('vue-checkout');

const validPromoCodes = {
  '5DISCOUNT': 5,
  '10DISCOUNT': 10,
  '15DISCOUNT': 15,
};

const defaultPromoState = {
  code: '',
  discount: 0,
  isValid: false,
  transientCode: '',
  validatedCode: '',
};

const data = {
  cart: {
    items: [],
    quantity: 0,
    subTotal: 0,
  },
  customer: {
    'billing-address-first-name': '',
    'billing-address-last-name': '',
    'billing-address-address': '',
    'billing-address-apt-suite-optional': '',
    'billing-address-city': '',
    'billing-address-state': '',
    'billing-address-zip-code': '',
    'billing-address-phone': '',
    'billing-equals-shipping': false,
    'contact-information-email-address': '',
    'payment-method-card-number': '',
    'payment-method-name-on-card': '',
    'payment-method-expiration-month': '',
    'payment-method-expiration-year': '',
    'payment-method-security-code': '',
    'shipping-address-first-name': '',
    'shipping-address-last-name': '',
    'shipping-address-address': '',
    'shipping-address-apt-suite-optional': '',
    'shipping-address-city': '',
    'shipping-address-state': '',
    'shipping-address-zip-code': '',
    'shipping-address-phone': '',
    'shipping-cost': -1,
  },
  promo: { ...defaultPromoState },
  taxRate: _data_shared__WEBPACK_IMPORTED_MODULE_4__["taxRate"],
  validateForm: true,
};

const components = {
  vOrderSummaryItem: _components_orderSummaryItem___WEBPACK_IMPORTED_MODULE_0__["default"],
  vPromoCode: _components_promoCode___WEBPACK_IMPORTED_MODULE_1__["default"],
};

const computed = {
  freeShippingOptionHtml() {
    return this.qualifiesForFreeShipping ? '<b>Standard</b> | <del>$8.00</del> FREE <br />3 – 7 Business Days' : '<b>Standard</b> | $8.00<br />3 – 7 Business Days';
  },
  items() {
    return this.cart.items.map((item) => {
      const sku = _data_products__WEBPACK_IMPORTED_MODULE_3__["skusById"][item.id];
      const product = this.getProductFromSku(item.id);

      return {
        ...item,
        ...sku,
        displayColor: Object(_data_helpers__WEBPACK_IMPORTED_MODULE_2__["capitalize"])(sku.color),
        displaySize: _data_products__WEBPACK_IMPORTED_MODULE_3__["categoriesById"][product.category].sizes[sku.size],
        name: product.name,
        price: product.price,
        parentSlug: sku.parentSlug,
      };
    });
  },
  orderTotal() {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(this.totalAfterDiscountAndShipping + this.tax);
  },
  qualifiesForFreeShipping() {
    return this.totalAfterDiscountAndShipping > 75;
  },
  totalAfterDiscountAndShipping() {
    return this.cart.subTotal - this.totalDiscount + (this.customer['shipping-cost'] > -1 ? this.customer['shipping-cost'] : 0);
  },
  totalDiscount() {
    return this.cart.subTotal * (this.promo.discount / 100);
  },
  tax() {
    return this.totalAfterDiscountAndShipping * (this.taxRate / 100);
  },
};

const methods = {
  applyPromoCode() {
    this.validateForm = false;

    const code = this.promo.code.trim();
    const discount = validPromoCodes[this.promo.code] || 0;

    this.promo.transientCode = code;

    if (discount) {
      this.promo.discount = discount;
      this.promo.isValid = true;
      this.promo.validatedCode = code;
    }
    else {
      this.promo.isValid = false;
    }

    this.validateForm = true;
  },
  getProductFromSku(id) {
    return _data_products__WEBPACK_IMPORTED_MODULE_3__["productsById"][_data_products__WEBPACK_IMPORTED_MODULE_3__["skusById"][id].parentSlug];
  },
  handleBillingAddressToggle() {
    this.customer['billing-equals-shipping'] = !this.customer['billing-equals-shipping'];

    if (this.customer['billing-equals-shipping']) {
      Object.keys(this.customer)
        .filter((key) => key.startsWith('shipping-'))
        .forEach((key) => {
          this.customer[key.replace('shipping-', 'billing-')] = this.customer[key];
        });
    }
  },
  formatPrice(num) {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(num);
  },
  removePromoCode() {
    this.promo = { ...defaultPromoState };
  },
  submitOrder() {
    const order = Object.keys(this.customer).reduce((obj, key) => {
      const value = this.customer[key];

      obj[key] = key.startsWith('payment-method-') && typeof value === 'string' ? value.slice(-4) : value;

      return obj;
    }, {});

    order.cart = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_6__["getCart"])();
    order.orderTotal = this.orderTotal;
    order.promo = this.promo;
    order.totalDiscount = this.totalDiscount;
    order.tax = this.tax;

    sessionStorage.setItem('order', JSON.stringify(order));

    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_6__["clearCart"])();
    location = '/checkout/success/';
  },
};

const lifecycleHooks = {
  created() {
    const cart = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_6__["getCart"])();

    this.cart.items = cart.items;

    if (this.cart.items.length === 0) {
      location = '/cart/';
    }

    this.cart.quantity = cart.quantity;
    this.cart.subTotal = cart.subTotal;
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_5__["default"])(el, opts);
}({ data, components, computed, methods, ...lifecycleHooks }));


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  methods: {
    formatPrice(num) {
      return Object(_data_shared__WEBPACK_IMPORTED_MODULE_0__["formatPrice"])(num);
    },
  },
  template: 'local',
});


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: {
      type: String,
    },
    removable: {
      type: Boolean,
    },
    valid: {
      type: Boolean,
    },
  },
  template: 'local',
});


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var date_fns_isSunday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _components_orderSummaryItem___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(291);
/* harmony import */ var _components_promoCode___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(292);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _data_helpers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_helpers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(264);











const el = document.getElementById('vue-checkout-success');

const todaysDate = Date.now();

const data = {
  cart: {},
  customer: {},
  orderNumber: todaysDate,
  promo: {},
  taxRate: _data_shared__WEBPACK_IMPORTED_MODULE_8__["taxRate"],
};

const components = {
  vOrderSummaryItem: _components_orderSummaryItem___WEBPACK_IMPORTED_MODULE_4__["default"],
  vPromoCode: _components_promoCode___WEBPACK_IMPORTED_MODULE_5__["default"],
};

const computed = {
  deliveryDate() {
    const addBusinessDays = (date) => {
      if (Object(date_fns_isSaturday__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
        return Object(date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 2);
      }
      else if (Object(date_fns_isSunday__WEBPACK_IMPORTED_MODULE_3__["default"])(date)) {
        return Object(date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 1);
      }

      return date;
    };

    const shippingCost = this.customer['shipping-cost'];
    let maxDaysToAdd = 7;
    let finalDate;

    if (shippingCost === 16) {
      maxDaysToAdd = 3
    }
    else if (shippingCost === 22) {
      maxDaysToAdd = 2;
    }

    finalDate = Object(date_fns_addDays__WEBPACK_IMPORTED_MODULE_0__["default"])(todaysDate, maxDaysToAdd);
    finalDate = addBusinessDays(finalDate);
    // Needs to be calculated again in case the first amendment fell on a weekend
    finalDate = addBusinessDays(finalDate);

    return Object(date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(finalDate, 'EEEE, MMMM dd, yyyy');
  },
  items() {
    return this.cart.items.map((item) => {
      const sku = _data_products__WEBPACK_IMPORTED_MODULE_7__["skusById"][item.id];
      const product = this.getProductFromSku(item.id);

      return {
        ...item,
        ...sku,
        displayColor: Object(_data_helpers__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(sku.color),
        displaySize: _data_products__WEBPACK_IMPORTED_MODULE_7__["categoriesById"][product.category].sizes[sku.size],
        name: product.name,
        price: product.price,
        parentSlug: sku.parentSlug,
      };
    });
  },
  orderTotal() {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_8__["formatPrice"])(this.totalAfterDiscountAndShipping + this.tax);
  },
  totalAfterDiscountAndShipping() {
    return this.cart.subTotal - this.totalDiscount + (this.customer['shipping-cost'] > -1 ? this.customer['shipping-cost'] : 0);
  },
  totalDiscount() {
    return this.cart.subTotal * (this.promo.discount / 100);
  },
  tax() {
    return this.totalAfterDiscountAndShipping * (this.taxRate / 100);
  },
};

const methods = {
  getProductFromSku(id) {
    return _data_products__WEBPACK_IMPORTED_MODULE_7__["productsById"][_data_products__WEBPACK_IMPORTED_MODULE_7__["skusById"][id].parentSlug];
  },
  formatPrice(num) {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_8__["formatPrice"])(num);
  },
};

const lifecycleHooks = {
  created() {
    const order = JSON.parse(sessionStorage.getItem('order')) || {};

    this.customer = { ...order };
    this.cart = { ...order.cart };
    this.promo = { ...order.promo };

    if (!this.cart.items) {
      location = '/shop/';
    }
    else {
      sessionStorage.removeItem('order');
    }
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_9__["default"])(el, opts);
}({ data, components, computed, methods, ...lifecycleHooks }));


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);


const el = document.getElementById('vue-contact-form');

const data = {
  hasSubmitted: false,
};

const methods = {
  submit() {
    this.hasSubmitted = true;

    this.$nextTick(() => {
      this.$refs.successMessage.focus();
      // Fixes Safari
      setTimeout(() => {
        this.$refs.successMessage.scrollIntoView();
      }, 0);
    });
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_0__["default"])(el, opts);
}({ data, methods }));


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apps_eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _components_iconButton___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(296);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(264);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(298);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(273);







const el = document.getElementById('vue-header');

const data = {
  cartQuantity: 0,
  cartSubTotal: 0,
  expandedSubMenus: {},
  navigationIsExpanded: false,
};

const components = {
  vIconButton: _components_iconButton___WEBPACK_IMPORTED_MODULE_1__["default"],
};

const methods = {
  toggleNavigation() {
    this.navigationIsExpanded = !this.navigationIsExpanded;

    this.$nextTick(() => {
      if (this.navigationIsExpanded) {
        this.$refs.navigation.focus();
      }
    })
  },
  toggleSubMenu(href) {
    this.expandedSubMenus[href] = !this.expandedSubMenus[href];

    this.$nextTick(() => {
      if (this.expandedSubMenus[href]) {
        this.$refs[href].focus();
      }
    })
  },
  updateCartDetails() {
    const cart = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["getCart"])();

    this.cartQuantity = cart.quantity;
    this.cartSubTotal = Object(_data_shared__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(cart.subTotal);
  },
};

const lifecycleHooks = {
  created() {
    this.updateCartDetails();
  },
  mounted() {
    _apps_eventBus__WEBPACK_IMPORTED_MODULE_0__["default"].$on('set_cart', this.updateCartDetails);
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_2__["default"])(el, opts);
}({ data, components, methods, ...lifecycleHooks }));


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_svg___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(278);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_styles__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSvg: _components_svg___WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  styles: _data_styles__WEBPACK_IMPORTED_MODULE_1__["iconButton"],
  props: {
    as: {
      type: String,
    },
    badge: {
      type: [Number, String],
    },
    badgeAlt: {
      type: [Number, String],
    },
    href: {
      type: String,
    },
    iconClassName: {
      type: String,
    },
    iconName: {
      required: true,
      type: String,
    },
    variant: {
      type: String,
    },
  },
  computed: {
    elem() {
      return this.href ? 'a' : this.as || 'button';
    },
  },
  template: 'local',
});


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _data_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(298);



/* harmony default export */ __webpack_exports__["default"] = ({
  styles: _data_styles__WEBPACK_IMPORTED_MODULE_0__["svg"],
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  template: _helpers_html__WEBPACK_IMPORTED_MODULE_1__["default"]`
    <svg
      focusable="false"
      v-bind:class="styles.root"
    >
      <use v-bind:xlink:href="'#' + name" />
    </svg>
  `,
});


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((strings, ...values) => (
  strings.reduce((acc, str, index) => `${acc}${str}${(values[index] || '')}`, '')
));


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_quantityChanger___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _components_colorPicker___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(277);
/* harmony import */ var _components_product___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(276);
/* harmony import */ var _components_sizePicker___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(300);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(289);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_characters__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(264);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(273);










const el = document.getElementById('vue-product-detail');

const data = {
  category: {},
  character: {},
  color: '',
  design: {},
  productsById: _data_products__WEBPACK_IMPORTED_MODULE_5__["productsById"],
  product: {},
  quantity: 1,
  relatedProducts: [],
  skusById: {},
  size: '',
  slug: '',
};

const components = {
  vColorPicker: _components_colorPicker___WEBPACK_IMPORTED_MODULE_1__["default"],
  vProduct: _components_product___WEBPACK_IMPORTED_MODULE_2__["default"],
  vSizePicker: _components_sizePicker___WEBPACK_IMPORTED_MODULE_3__["default"],
  vQuantityChanger: _components_quantityChanger___WEBPACK_IMPORTED_MODULE_0__["default"],
};

const computed = {
  formattedPrice() {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_6__["formatPrice"])(this.product.price);
  },
  hideSizePicker() {
    return Object.keys(this.category.sizes).length === 1;
  },
  imageSrc() {
    return `/images/products/${this.slug}-${this.color}.jpg`;
  },
  selectedSkuId() {
    return `${this.slug}-${this.size}-${this.color}`;
  },
};

const methods = {
  addToCart() {
    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_8__["addToCart"])(this.selectedSkuId, this.quantity);
  },
  updateUrl() {
    history.replaceState({
      color: this.color,
      size: this.size,
    }, '', `${location.origin}${location.pathname}?slug=${this.slug}&color=${this.color}&size=${this.size}`);
  },
  setColor(color) {
    this.color = color;
    this.updateUrl();
  },
  setSize(size) {
    this.size = size;
    this.updateUrl();
  },
};

const lifecycleHooks = {
  created() {
    const params = window.location.search.split('&');

    params.forEach((param) => {
      const matches = param.match(/(slug|color|size)=(.+)/);

      if (matches) {
        if (matches[1] === 'slug') {
          this.slug = matches[2];

          if (this.productsById[this.slug]) {
            this.product = this.productsById[this.slug];
            this.category = _data_products__WEBPACK_IMPORTED_MODULE_5__["categoriesById"][this.product.category];
            this.design = _data_products__WEBPACK_IMPORTED_MODULE_5__["designsById"][this.product.design];
            this.character = _data_characters__WEBPACK_IMPORTED_MODULE_4__["charactersById"][this.product.character];
            this.skusById = this.product.skus.reduce((obj, sku) => {
              obj[Object.keys(sku)[0]] = {
                ...Object.values(sku)[0],
              };

              return obj;
            }, this.skusById);
            this.relatedProducts = _data_products__WEBPACK_IMPORTED_MODULE_5__["products"].filter((product) => product.design === this.product.design && product.category !== this.product.category);
          }
        }
        else if (matches[1] === 'color') {
          this.color = matches[2];
        }
        else if (matches[1] === 'size') {
          this.size = matches[2];
        }
      }
    });

    if (!this.color && this.product.name) {
      this.color = this.category.colors[0];
    }

    if (!this.size && this.product.name) {
      this.size = Object.keys(this.category.sizes)[0];
    }
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_7__["default"])(el, opts);
}({ data, components, computed, methods, ...lifecycleHooks }));


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    sizes: {
      required: true,
      type: Object,
    },
    selectedSize: {
      required: true,
      type: String,
    },
    slug: {
      required: true,
      type: String,
    },
    visuallyHiddenLegend: {
      type: Boolean,
    },
  },
  mounted() {
    this.$once('set-size', (size) => {
      this.$emit('set-size', size);
    });
  },
  template: 'local',
});


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_filterGroup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var _components_product___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(276);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(289);
/* harmony import */ var _data_characters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_characters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(264);






const el = document.getElementById('vue-shop');

const data = {
  categories: {},
  characters: {},
  products: _data_products__WEBPACK_IMPORTED_MODULE_3__["products"],
};

const components = {
  vFilterGroup: _components_filterGroup___WEBPACK_IMPORTED_MODULE_0__["default"],
  vProduct: _components_product___WEBPACK_IMPORTED_MODULE_1__["default"],
};

const computed = {
  filteredProducts() {
    return _data_products__WEBPACK_IMPORTED_MODULE_3__["products"]
      .filter((product) => this.categories[product.category])
      .filter((product) => this.characters[product.character]);
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_4__["default"])(el, opts);
}({ data, components, computed }));


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_svg___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    vSvg: _components_svg___WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDesktop: false,
      isExpanded: false,
    };
  },
  computed: {
    panelId() {
      return `${this.header.toLowerCase()}-panel`;
    },
  },
  mounted() {
    this.mediaQueryListener = window.matchMedia(`(min-width: ${768 / 16}em)`);
    this.mediaQueryListener.addListener(this.handleMediaQuery);
    this.handleMediaQuery(this.mediaQueryListener);
  },
  destroyed() {
    this.mediaQueryListener.removeListener(this.handleMediaQuery);
  },
  methods: {
    toggleFilterPanel() {
      if (!this.isDesktop) {
        this.isExpanded = !this.isExpanded;
      }
    },
    handleMediaQuery(mq) {
      this.isDesktop = mq.matches;
      this.isExpanded = mq.matches;
    },
  },
  template: 'local',
});


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


vue__WEBPACK_IMPORTED_MODULE_0__["default"].mixin({
  created() {
    if (this.$options.styles) {
      this.styles = this.$options.styles;
    }
  },
});


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cartRow___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(249);
/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(248);
/* harmony import */ var _data_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_shared__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_createVueApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(264);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(273);






const el = document.getElementById('vue-cart');

const data = {
  cartItems: [],
  cartSubTotal: 0,
};

const components = {
  vCartRow: _components_cartRow___WEBPACK_IMPORTED_MODULE_0__["default"],
};

const computed = {
  subTotal() {
    return Object(_data_shared__WEBPACK_IMPORTED_MODULE_2__["formatPrice"])(this.cartSubTotal);
  },
};

const methods = {
  getCart() {
    const cart = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])();

    this.cartItems = cart.items;
    this.cartSubTotal = cart.subTotal;
  },
  getProductFromSku(id) {
    return _data_products__WEBPACK_IMPORTED_MODULE_1__["productsById"][_data_products__WEBPACK_IMPORTED_MODULE_1__["skusById"][id].parentSlug];
  },
  getSkuFromId(id) {
    return _data_products__WEBPACK_IMPORTED_MODULE_1__["skusById"][id];
  },
  goToCheckout() {
    location = '/checkout/';
  },
  removeFromCart(index) {
    this.cartItems = this.cartItems.filter((item, idx) => idx !== index);
    this.updateCart();
  },
  updateCart() {
    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["setCart"])(this.cartItems, this.getCart);
  },
};

const lifecycleHooks = {
  created() {
    this.getCart();
  },
};

/* harmony default export */ __webpack_exports__["default"] = (function (opts = {}) {
  return Object(_helpers_createVueApp__WEBPACK_IMPORTED_MODULE_3__["default"])(el, opts);
}({ data, components, computed, methods, ...lifecycleHooks }));


/***/ })

/******/ });