import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      initials: {
        type: Sequelize.VIRTUAL,
        get() {
          const mutch = this.name.split(" ");
          if (mutch.length > 1) {
            return `${mutch[0][0]}${mutch[mutch.length - 1][0]}}`;
          } else {
            return mutch[0][0];
          }
        }
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('admin', 'manager', 'developer'),
      status: Sequelize.ENUM('active', 'archived')
    }, {
       sequelize,
       name: {
        singular: "user",
        plural: "users"
       }
    }
    
    );
  }
}