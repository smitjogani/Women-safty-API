const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

const authRoutes = require("./api/routes/auth/auth.routes");
const userRoutes = require("./api/routes/user/user.routes");
const selfDefenceRoutes = require("./api/routes/selfDefence/selfDefence.routes");
const medicareRoutes = require("./api/routes/medicare/medicare.routes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/selfDefence", selfDefenceRoutes);
app.use("/api/medicare", medicareRoutes)


module.exports = app;