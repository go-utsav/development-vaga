
module.exports = (Sequelize, DataTypes) => {
  const getmytrailSchema = Sequelize.define(
    "get-my-trail",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      trail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "get-my-trail",
      updatedAt: "updated_at",
      createdAt: "created_at"
    }
  );


  getmytrailSchema.associate = function (models) {
    getmytrailSchema.belongsTo(models.trails, {
      as: 'usertrails',
      foreignKey: 'trail_id'
    })
  }
  return getmytrailSchema;
};