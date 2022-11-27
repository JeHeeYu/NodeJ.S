const Sequelize = require('sequelize');

const User = require('./user');
const Comment = require('./comment');

// 현재 환경에 따른 데이터베이스 정보 설정
const config = require('../config/config')['development'];
const db = {};

// 시퀄라이즈 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;

User.init(sequelize);
Comment.init(sequelize);

User.associate(db);
Comment.associate(db);

module.exports = db;