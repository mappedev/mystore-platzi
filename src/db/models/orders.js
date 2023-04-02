const { DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE_NAME } = require('./customers')

const ORDER_TABLE_NAME = 'orders';
const ORDER_MODEL_NAME = 'order';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  total: {
    /*
    ! ESTO ES RECOMENDADO PARA CAMPOS PEQUEÑOS, ORDENES QUE NO SUPEREN 10 O 50 ITEMS
    ! SI SON MUCHOS ITEMS, LO MEHOR ES HACER UNA QUERY PARA CALCULARLO.
    ! TODO ESTO PORQUE EL CÁLCULO SE ESTÁ HACIENDO DIRECTAMENTE EN LA DB
    */
    type: DataTypes.VIRTUAL, // * Indicamos que es un tipo de dato que no estará en el modelo
    get() { // * Indicamos la manera de obtenerlo
      const { items } = this

      if (items.length > 0) {
        return items.reduce((total, item) => {
          return total + (item.price * item.orderProduct.amount)
        }, 0)
      }

      return 0
    }
  },
  // Associations
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    References: {
      model: CUSTOMER_TABLE_NAME,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};


const orderOptions = {
  tableName: ORDER_TABLE_NAME,
  timestamps: false,
}

module.exports = { ORDER_MODEL_NAME, ORDER_TABLE_NAME, OrderSchema, orderOptions }
