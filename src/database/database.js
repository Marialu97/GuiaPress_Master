const Sequelize = require("sequelize");

// Ajuste com as suas credenciais e nome do banco
const connection = new Sequelize("guiapress_master", "root", "1234", {
  host: "localhost",
  dialect: "mysql", // IMPORTANTE: define o tipo do banco
  timezone: "-03:00", // opcional, útil para quem está no Brasil
});

module.exports = connection;
