const Sequelize = require('sequelize');

// Comment 모델 생성
module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            // 데이터베이스 테이블 설정
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            create_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    //static associations(db) {}
    static associate(db) {}
};