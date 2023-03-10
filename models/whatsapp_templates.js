module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "whatsapp_template",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      template: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      tableName: "whatsapp_template",
      updatedAt: "updated_at",
      createdAt: "created_at"
    }
  );

};