const { USER_MODEL_NAME, UserSchema, userOptions } = require('./models/users')
const { CUSTOMER_MODEL_NAME, CustomerSchema, customerOptions } = require('./models/customers')
const { PRODUCT_MODEL_NAME, ProductSchema, productOptions } = require('./models/products')
const { CATEGORY_MODEL_NAME, CategorySchema, categoryOptions } = require('./models/categories')
const { ORDER_MODEL_NAME, OrderSchema, orderOptions } = require('./models/orders')
const { ORDER_PRODUCT_MODEL_NAME, orderProductSchema, orderProductOptions } = require('./models/orders-products')

function setupModels(sequelize) {
  const Category = sequelize.define(CATEGORY_MODEL_NAME, CategorySchema, categoryOptions)
  const Customer = sequelize.define(CUSTOMER_MODEL_NAME, CustomerSchema, customerOptions)
  const Order = sequelize.define(ORDER_MODEL_NAME, OrderSchema, orderOptions)
  const OrderProduct = sequelize.define(ORDER_PRODUCT_MODEL_NAME, orderProductSchema, orderProductOptions)
  const Product = sequelize.define(PRODUCT_MODEL_NAME, ProductSchema, productOptions)
  const User = sequelize.define(USER_MODEL_NAME, UserSchema, userOptions)

  // Associations
  // * Uno a uno
  User.hasOne(Customer, {
    as: 'customer',
    foreignKey: 'userId',
  })
  Customer.belongsTo(User, {
    as: 'user',
    // foreignKey: 'id', // * No es necesario, el lo toma por defecto
  })

  // * Uno a muchos
  Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'categoryId',
  })
  Product.belongsTo(Category, {
    as: 'category',
  })

  Customer.hasMany(Order, {
    as: 'orders',
    foreignKey: 'customerId',
  })
  Order.belongsTo(Customer, {
    as: 'customer',
  })

  // * Muchos a muchos (necesitamos una tabla intermedia que es la de OrderProduct)
  Order.belongsToMany(Product, {
    as: 'items',
    through: OrderProduct,
    foreignKey: 'orderId',
    otherKey: 'productId',
  })
}

module.exports = setupModels
